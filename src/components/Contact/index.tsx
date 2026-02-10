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
      className="min-h-screen bg-[#0d1117] text-gray-300 font-mono py-24 relative overflow-hidden flex items-center"
    >
      {/* Background Decor */}
      <div className="absolute inset-0 bg-scanline opacity-5 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#61afef]/5 rounded-full blur-[150px] -mr-64 -mb-64" />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Interactive CLI Theme Section */}
          <div className="space-y-12">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#161b22] border border-gray-800 flex items-center justify-center text-xl shadow-inner">
                  📡
                </div>
                <div>
                  <h2 className="text-3xl font-black text-white tracking-tighter uppercase">
                    Connect_Node
                  </h2>
                  <div className="text-[10px] text-gray-500 font-bold tracking-widest uppercase">
                    Communication_Protocol.v1
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-500 max-w-lg leading-relaxed">
                Initializing secure socket connection... <br />
                <span className="text-[#98c379]">{`Ready to receive data packages from local and remote nodes.`}</span>
              </p>
            </div>

            <div className="space-y-8">
              {portfolioData.contactMethods.map((method, i) => (
                <motion.a
                  key={method.name}
                  href={method.command}
                  target="_blank"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="group flex items-start gap-6 p-6 bg-[#161b22]/30 border border-gray-800 rounded-2xl hover:border-[#61afef]/30 hover:bg-[#161b22]/50 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#0d1117] border border-gray-800 flex items-center justify-center text-xl group-hover:border-[#61afef]/20 transition-colors">
                    {method.icon}
                  </div>
                  <div className="flex-1">
                    <div className="text-[10px] text-gray-600 font-bold uppercase tracking-[0.2em] mb-1">
                      {method.name}
                    </div>
                    <div className="text-gray-200 font-bold tracking-tight mb-2">
                      {method.value}
                    </div>
                    <div className="text-xs text-gray-500 font-mono">
                      <span className="text-[#c678dd]">$</span> open{" "}
                      <span className="text-[#98c379]">
                        {method.command.replace("mailto:", "").split("?")[0]}
                      </span>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="pt-8 border-t border-gray-800/50 flex items-center justify-between text-[10px] font-bold text-gray-600 uppercase tracking-widest">
              <div className="flex items-center gap-4">
                <span>SSL: SECURE</span>
                <span>ENCRYPTION: AES-256</span>
              </div>
              <div className="text-gray-400">{currentTime}</div>
            </div>
          </div>

          {/* Right: The CLI Form Shell */}
          <div className="relative">
            {/* Immersive Terminal Window */}
            <div className="bg-[#161b22] border border-gray-800 rounded-[2.5rem] shadow-3xl overflow-hidden relative">
              {/* Terminal Top Bar */}
              <div className="bg-[#0d1117] border-b border-gray-800 px-8 py-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/30" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/30" />
                    <div className="w-3 h-3 rounded-full bg-green-500/30" />
                  </div>
                  <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">
                    cli_message_v2.sh
                  </span>
                </div>
                <div className="text-[10px] text-[#61afef] font-bold animate-pulse">
                  RUNNING
                </div>
              </div>

              <form
                onSubmit={handleSubmit}
                className="p-8 md:p-12 space-y-8 bg-[#0d1117]/40 backdrop-blur-sm"
              >
                {/* Name Input */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-gray-600 uppercase tracking-tighter">
                    <span className="text-[#61afef]">visitor@portfolio</span>
                    <span className="text-gray-400">:</span>
                    <span className="text-[#c678dd]">~</span>
                    <span className="text-gray-400">$</span>
                    <span className="text-gray-300">input_name --required</span>
                  </div>
                  <div className="relative">
                    <input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full bg-[#161b22]/50 border-b-2 ${errors.name ? "border-red-500" : "border-gray-800"} focus:border-[#61afef] outline-none px-4 py-3 text-white transition-all`}
                      placeholder="_"
                    />
                    {errors.name && (
                      <span className="absolute -bottom-5 left-0 text-[9px] text-red-500 font-bold uppercase">
                        {errors.name}
                      </span>
                    )}
                  </div>
                </div>

                {/* Email Input */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-gray-600 uppercase tracking-tighter">
                    <span className="text-[#c678dd]">$</span>
                    <span className="text-gray-300">
                      input_email --validate
                    </span>
                  </div>
                  <div className="relative">
                    <input
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full bg-[#161b22]/50 border-b-2 ${errors.email ? "border-red-500" : "border-gray-800"} focus:border-[#61afef] outline-none px-4 py-3 text-white transition-all`}
                      placeholder="_"
                    />
                    {errors.email && (
                      <span className="absolute -bottom-5 left-0 text-[9px] text-red-500 font-bold uppercase">
                        {errors.email}
                      </span>
                    )}
                  </div>
                </div>

                {/* Message Input */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-gray-600 uppercase tracking-tighter">
                    <span className="text-[#c678dd]">$</span>
                    <span className="text-gray-300">cat &gt; message.txt</span>
                  </div>
                  <div className="relative">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className={`w-full bg-[#161b22]/50 border border-gray-800 rounded-xl focus:border-[#61afef] focus:bg-[#161b22] outline-none px-6 py-5 text-white transition-all resize-none shadow-inner`}
                      placeholder="Type your message here..."
                    />
                    {errors.message && (
                      <span className="absolute -bottom-5 left-0 text-[9px] text-red-500 font-bold uppercase">
                        {errors.message}
                      </span>
                    )}
                  </div>
                </div>

                {/* Submit Logic */}
                <div className="pt-6">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-5 rounded-2xl font-black text-sm tracking-[0.3em] uppercase transition-all flex items-center justify-center gap-4 overflow-hidden relative group
                           ${
                             submitStatus === "success"
                               ? "bg-green-500 text-[#0d1117]"
                               : submitStatus === "error"
                                 ? "bg-red-500 text-white"
                                 : "bg-[#61afef] text-[#0d1117] hover:shadow-[0_0_30px_rgba(97,175,239,0.3)]"
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
                          className="flex items-center gap-3"
                        >
                          <span className="w-2 h-2 bg-[#0d1117] rounded-full animate-ping" />
                          ESTABLISHING_HANDSHAKE...
                        </motion.span>
                      )}
                      {submitStatus === "transmitting" && (
                        <span
                          key="transmitting"
                          className="flex items-center gap-3"
                        >
                          <span className="w-20 h-1 bg-[#0d1117]/20 rounded-full overflow-hidden relative">
                            <motion.div
                              animate={{ x: ["-100%", "100%"] }}
                              transition={{ repeat: Infinity, duration: 1 }}
                              className="absolute inset-0 bg-[#0d1117]"
                            />
                          </span>
                          PACKET_SENT
                        </span>
                      )}
                      {submitStatus === "success" && (
                        <span key="success">DATA_LINK_ESTABLISHED_OK</span>
                      )}
                      {submitStatus === "error" && (
                        <span key="error">NETWORK_TIMEOUT_TRY_AGAIN</span>
                      )}
                    </AnimatePresence>
                  </button>
                </div>
              </form>

              {/* Command Info Bar */}
              <div className="bg-[#161b22] border-t border-gray-800 p-4 px-8 flex items-center justify-between text-[8px] text-gray-600 font-bold uppercase tracking-widest">
                <div className="flex gap-4">
                  <span>HELP: F1</span>
                  <span>CLEAR: ESC</span>
                </div>
                <div>ID: 0x7E...4A2</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
