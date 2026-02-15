"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";
import { sendEmail } from "@/app/actions/contact";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "handshake" | "transmitting" | "success" | "error"
  >("idle");
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      setCurrentTime(new Date().toLocaleTimeString("en-US", { hour12: false }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "ERR_REQUIRED_FIELD";
    if (!formData.email.trim()) {
      newErrors.email = "ERR_REQUIRED_FIELD";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "ERR_INVALID_FORMAT";
    }
    if (!formData.subject.trim()) newErrors.subject = "ERR_REQUIRED_FIELD";
    if (!formData.message.trim()) newErrors.message = "ERR_REQUIRED_FIELD";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus("handshake");

    // Artificial delay for immersive "handshake"
    await new Promise((r) => setTimeout(r, 1000));
    setSubmitStatus("transmitting");

    try {
      const result = await sendEmail(formData);
      if (result.success) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }
  };

  return (
    <section
      id="contact"
      data-section="contact"
      className="min-h-screen bg-background-primary text-text-secondary font-mono py-24 relative overflow-hidden flex items-center"
    >
      {/* Background Decor */}
      <div className="absolute inset-0 bg-scanline opacity-5 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px] -mr-64 -mb-64" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 lg:gap-24 items-center">
          {/* Left: Interactive CLI Theme Section */}
          <div className="space-y-8 md:space-y-12">
            <div className="space-y-3 md:space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-background-secondary border border-border-primary flex items-center justify-center text-lg md:text-xl shadow-inner">
                  📡
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-black text-text-primary tracking-tighter uppercase">
                    Connect_Node
                  </h2>
                  <div className="text-[9px] md:text-[10px] text-text-secondary font-bold tracking-widest uppercase">
                    Communication_Protocol.v1
                  </div>
                </div>
              </div>
              <p className="text-xs md:text-sm text-text-secondary max-w-lg leading-relaxed">
                Initializing secure socket connection... <br />
                <span className="text-green-500">{`Ready to receive data packages from local and remote nodes.`}</span>
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 md:gap-6 lg:gap-8">
              {portfolioData.contactMethods.map((method, i) => (
                <motion.a
                  key={method.name}
                  href={method.command}
                  target="_blank"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="group flex items-start gap-4 md:gap-6 p-4 md:p-6 bg-background-secondary/30 border border-border-primary rounded-xl md:rounded-2xl hover:border-accent/30 hover:bg-background-secondary/50 transition-all overflow-hidden"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-background-primary border border-border-primary flex items-center justify-center text-lg md:text-xl group-hover:border-accent/20 transition-colors flex-shrink-0">
                    {method.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[9px] md:text-[10px] text-text-secondary font-bold uppercase tracking-[0.2em] mb-1 truncate">
                      {method.name}
                    </div>
                    <div className="text-text-primary font-bold tracking-tight mb-1.5 md:mb-2 truncate">
                      {method.value}
                    </div>
                    <div className="text-[10px] md:text-xs text-text-secondary font-mono truncate">
                      <span className="text-accent-secondary">$</span> open{" "}
                      <span className="text-green-500">
                        {method.command.replace("mailto:", "").split("?")[0]}
                      </span>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="pt-6 md:pt-8 border-t border-border-primary/50 flex flex-wrap items-center justify-between gap-4 text-[9px] md:text-[10px] font-bold text-text-secondary uppercase tracking-widest">
              <div className="flex items-center gap-3 md:gap-4">
                <span>SSL: SECURE</span>
                <span className="hidden xs:inline">ENCRYPTION: AES-256</span>
              </div>
              <div className="text-text-secondary">{currentTime}</div>
            </div>
          </div>

          {/* Right: The CLI Form Shell */}
          <div className="relative">
            {/* Immersive Terminal Window */}
            <div className="bg-background-secondary border border-border-primary rounded-2xl md:rounded-[2.5rem] shadow-3xl overflow-hidden relative">
              {/* Terminal Top Bar */}
              <div className="bg-background-primary border-b border-border-primary px-6 md:px-8 py-3 md:py-4 flex items-center justify-between">
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="flex gap-1 md:gap-1.5">
                    <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-red-500/30" />
                    <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-yellow-500/30" />
                    <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-green-500/30" />
                  </div>
                  <span className="text-[9px] md:text-[10px] text-text-secondary font-bold uppercase tracking-widest truncate">
                    cli_message_v2.sh
                  </span>
                </div>
                <div className="text-[9px] md:text-[10px] text-accent font-bold animate-pulse flex-shrink-0">
                  RUNNING
                </div>
              </div>

              <form
                onSubmit={handleSubmit}
                className="p-6 md:p-12 space-y-6 md:space-y-8 bg-background-primary/40 backdrop-blur-sm"
              >
                {/* Name Input */}
                <div className="space-y-3 md:space-y-4">
                  <div className="flex items-center flex-wrap gap-1.5 text-[10px] md:text-xs font-bold text-text-secondary uppercase tracking-tighter">
                    <span className="text-accent">visitor@portfolio</span>
                    <span className="text-text-secondary hidden xs:inline">
                      :
                    </span>
                    <span className="text-accent-secondary hidden xs:inline">
                      ~
                    </span>
                    <span className="text-text-secondary">$</span>
                    <span className="text-text-secondary">input_name</span>
                  </div>
                  <div className="relative">
                    <input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full bg-background-secondary/50 border-b-2 ${errors.name ? "border-red-500" : "border-border-primary"} focus:border-accent outline-none px-3 md:px-4 py-2 md:py-3 text-white transition-all text-sm`}
                      placeholder="_"
                    />
                    {errors.name && (
                      <span className="absolute -bottom-4 left-0 text-[8px] md:text-[9px] text-red-500 font-bold uppercase">
                        {errors.name}
                      </span>
                    )}
                  </div>
                </div>

                {/* Email Input */}
                <div className="space-y-3 md:space-y-4">
                  <div className="flex items-center gap-1.5 text-[10px] md:text-xs font-bold text-text-secondary uppercase tracking-tighter">
                    <span className="text-accent-secondary">$</span>
                    <span className="text-text-secondary">input_email</span>
                  </div>
                  <div className="relative">
                    <input
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full bg-background-secondary/50 border-b-2 ${errors.email ? "border-red-500" : "border-border-primary"} focus:border-accent outline-none px-3 md:px-4 py-2 md:py-3 text-white transition-all text-sm`}
                      placeholder="_"
                    />
                    {errors.email && (
                      <span className="absolute -bottom-4 left-0 text-[8px] md:text-[9px] text-red-500 font-bold uppercase">
                        {errors.email}
                      </span>
                    )}
                  </div>
                </div>

                {/* Message Input */}
                <div className="space-y-3 md:space-y-4">
                  <div className="flex items-center gap-1.5 text-[10px] md:text-xs font-bold text-text-secondary uppercase tracking-tighter">
                    <span className="text-accent-secondary">$</span>
                    <span className="text-text-secondary">
                      cat &gt; message.txt
                    </span>
                  </div>
                  <div className="relative">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className={`w-full bg-background-secondary/50 border border-border-primary rounded-lg md:rounded-xl focus:border-accent focus:bg-background-secondary outline-none px-4 md:px-6 py-4 md:py-5 text-white transition-all resize-none shadow-inner text-sm`}
                      placeholder="Type your message here..."
                    />
                    {errors.message && (
                      <span className="absolute -bottom-4 left-0 text-[8px] md:text-[9px] text-red-500 font-bold uppercase">
                        {errors.message}
                      </span>
                    )}
                  </div>
                </div>

                {/* Submit Logic */}
                <div className="pt-4 md:pt-6">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 md:py-5 rounded-xl md:rounded-2xl font-black text-[11px] md:text-sm tracking-[0.2em] md:tracking-[0.3em] uppercase transition-all flex items-center justify-center gap-3 md:gap-4 overflow-hidden relative group
                           ${
                             submitStatus === "success"
                               ? "bg-green-500 text-background-primary"
                               : submitStatus === "error"
                                 ? "bg-red-500 text-white"
                                 : "bg-accent text-background-primary hover:shadow-[0_0_30px_rgba(var(--accent-rgb),0.3)]"
                           }
                        `}
                  >
                    <AnimatePresence mode="wait">
                      {submitStatus === "idle" && (
                        <motion.span
                          key="idle"
                          initial={{ y: 20 }}
                          animate={{ y: 0 }}
                          exit={{ y: -20 }}
                        >
                          EXECUTE_TRANSMISSION ⏎
                        </motion.span>
                      )}
                      {submitStatus === "handshake" && (
                        <motion.span
                          key="handshake"
                          initial={{ y: 20 }}
                          animate={{ y: 0 }}
                          className="flex items-center gap-2 md:gap-3"
                        >
                          <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-background-primary rounded-full animate-ping" />
                          HANDSHAKE...
                        </motion.span>
                      )}
                      {submitStatus === "transmitting" && (
                        <span
                          key="transmitting"
                          className="flex items-center gap-2 md:gap-3"
                        >
                          <span className="w-12 md:w-20 h-0.5 md:h-1 bg-background-primary/20 rounded-full overflow-hidden relative">
                            <motion.div
                              animate={{ x: ["-100%", "100%"] }}
                              transition={{ repeat: Infinity, duration: 1 }}
                              className="absolute inset-0 bg-background-primary"
                            />
                          </span>
                          SENDING
                        </span>
                      )}
                      {submitStatus === "success" && (
                        <span key="success" className="text-[10px] md:text-xs">
                          DATA_LINK_OK
                        </span>
                      )}
                      {submitStatus === "error" && (
                        <span key="error" className="text-[10px] md:text-xs">
                          NET_TIMEOUT
                        </span>
                      )}
                    </AnimatePresence>
                  </button>
                </div>
              </form>

              {/* Command Info Bar */}
              <div className="bg-background-secondary border-t border-border-primary p-3 md:p-4 px-6 md:px-8 flex items-center justify-between text-[7px] md:text-[8px] text-text-secondary font-bold uppercase tracking-widest">
                <div className="flex gap-3 md:gap-4">
                  <span className="hidden xs:inline">HELP: F1</span>
                  <span className="hidden xs:inline">CLEAR: ESC</span>
                  <span className="xs:hidden">SH: V2.1</span>
                </div>
                <div className="truncate ml-2">ID: 0x7E...4A2</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
