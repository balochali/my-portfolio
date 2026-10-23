// Exercise the existing SMTP action without delivering any email or reading credentials.
import { test } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";
import ts from "typescript";
const businessModule = { exports: {} };
vm.runInNewContext(
  ts.transpileModule(fs.readFileSync("src/data/business.ts", "utf8"), {
    compilerOptions: { module: ts.ModuleKind.CommonJS },
  }).outputText,
  { exports: businessModule.exports },
);
const business = businessModule.exports.business;
function action({ configured = true, fail = false } = {}) {
  const sent = [];
  const exports = {};
  let closed = false;
  const nodemailer = {
    createTransport: () => ({
      sendMail: async (message) => {
        if (fail) throw Error("simulated");
        sent.push(message);
      },
      close: () => {
        closed = true;
      },
    }),
  };
  vm.runInNewContext(
    ts.transpileModule(fs.readFileSync("src/app/actions/contact.ts", "utf8"), {
      compilerOptions: {
        module: ts.ModuleKind.CommonJS,
        esModuleInterop: true,
      },
    }).outputText,
    {
      exports,
      require: (name) => (name === "nodemailer" ? nodemailer : { business }),
      process: {
        env: configured
          ? {
              SMTP_HOST: "test.invalid",
              SMTP_USER: "test@test.invalid",
              SMTP_PASS: "dummy",
              CONTACT_EMAIL: "recipient@test.invalid",
            }
          : {},
      },
      Map,
      Date,
    },
  );
  return { send: exports.sendEmail, sent, isClosed: () => closed };
}
const input = {
  name: "Test person",
  email: "test@example.com",
  subject: business.contact.projectTypes[0],
  message: "A test inquiry about a business application.",
  budget: "PKR — to discuss",
  timeline: "To discuss",
};
test("valid inquiry includes optional context, closes transport and rate limits duplicates", async () => {
  const a = action();
  assert.equal((await a.send(input)).success, true);
  assert.match(a.sent[0].text, /Budget: PKR/);
  assert.match(a.sent[0].text, /Timeline: To discuss/);
  assert.equal(a.sent[0].replyTo.address, input.email);
  assert.equal(a.isClosed(), true);
  assert.equal((await a.send(input)).success, false);
});
test("reject invalid and malicious fields before sending", async () => {
  for (const changes of [
    { website: "spam" },
    { subject: "Job opportunity" },
    { email: "bad" },
    { name: "Header\ninjection" },
    { message: "short" },
    { budget: "x".repeat(101) },
    { timeline: "line\nbreak" },
    { email: 42 },
  ]) {
    const a = action();
    assert.equal((await a.send({ ...input, ...changes })).success, false);
    assert.equal(a.sent.length, 0);
  }
});
test("missing configuration is a safe error", async () => {
  const a = action({ configured: false });
  assert.equal((await a.send(input)).success, false);
  assert.equal(a.sent.length, 0);
});
test("SMTP failures remain retryable and close the transport", async () => {
  const a = action({ fail: true });
  assert.equal((await a.send(input)).success, false);
  assert.equal(a.isClosed(), true);
  assert.doesNotMatch((await a.send(input)).error, /wait a minute/);
});
test("optional fields can be omitted", async () => {
  const a = action();
  assert.equal(
    (await a.send({ ...input, budget: undefined, timeline: undefined }))
      .success,
    true,
  );
  assert.match(a.sent[0].text, /Not specified/);
});

