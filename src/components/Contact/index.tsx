"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
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
  const [terminalOutput, setTerminalOutput] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentTime, setCurrentTime] = useState("");
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, -40]);

  const contactMethods = portfolioData.contactMethods;

  // Update time
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleString("en-US", {
          weekday: "short",
          year: "numeric",
          month: "short",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        }),
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Terminal output effect
  useEffect(() => {
    const commands = [
      "$ whoami",
      "ali-baloch",
      "$ pwd",
      "/home/ali-baloch/portfolio/contact",
      "$ ls -la contact-methods/",
      "total 6",
      "drwxr-xr-x  2 ali ali 4096 Dec 15 10:30 .",
      "drwxr-xr-x  3 ali ali 4096 Dec 15 10:30 ..",
      "-rw-r--r--  1 ali ali  245 Dec 15 10:30 email.txt",
      "-rw-r--r--  1 ali ali  189 Dec 15 10:30 linkedin.txt",
      "-rw-r--r--  1 ali ali  167 Dec 15 10:30 github.txt",
      '$ echo "Ready to collaborate!"',
      "Ready to collaborate!",
      "$ _",
    ];

    let currentLine = 0;
    const typeLines = () => {
      if (currentLine < commands.length) {
        setTimeout(
          () => {
            setTerminalOutput((prev) => prev + commands[currentLine] + "\n");
            currentLine++;
            typeLines();
          },
          currentLine % 2 === 0 ? 400 : 100,
        );
      }
    };

    setTimeout(typeLines, 500);
  }, []);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      setTerminalOutput(
        (prev) =>
          prev +
          "$ send-message\nError: Validation failed. Please fill all fields correctly. ❌\n$ _\n",
      );
      return;
    }

    setIsSubmitting(true);
    setTerminalOutput(
      (prev) => prev + "$ send-message\nConnecting to SMTP server...\n",
    );

    try {
      const result = await sendEmail(formData);

      if (result.success) {
        setTerminalOutput(
          (prev) =>
            prev +
            "Establishing handshake...\n" +
            "Transmitting data packages...\n" +
            "Message sent successfully! ✅\n" +
            "Response expected within 24h.\n" +
            "$ _\n",
        );
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setTerminalOutput(
          (prev) =>
            prev +
            `Error: ${result.error || "Failed to establish SMTP connection."} ❌\n` +
            "Check .env.local configuration.\n" +
            "$ _\n",
        );
      }
    } catch (error: any) {
      setTerminalOutput(
        (prev) =>
          prev +
          `Critical Error: SYSTEM_HALT ❌\n` +
          `${error.message}\n` +
          "$ _\n",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="contact"
      data-section="contact"
      className="min-h-screen bg-black text-green-400 font-mono py-20 relative overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,0,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,0,0.04)_1px,transparent_1px)] bg-[size:40px_40px] opacity-50"></div>
      <div className="absolute inset-0 bg-gradient-radial from-green-500/8 via-transparent to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="inline-block">
            <div className="bg-gray-900/50 rounded-t-lg border border-green-400/30 border-b-0 p-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-xs text-gray-400">
                    ~/contact-terminal
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-green-400">●</span>
                  <span className="text-xs text-gray-400">{currentTime}</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/30 border border-green-400/30 rounded-b-lg p-6">
              <motion.h2
                variants={itemVariants}
                className="text-4xl sm:text-5xl font-bold text-white mb-4"
              >
                Get In <span className="text-green-400">Touch</span>
              </motion.h2>

              {/* Live Terminal */}
              <div className="bg-black/60 rounded-lg p-4 mb-4 text-left min-h-[200px]">
                <pre className="text-xs text-gray-300 whitespace-pre-wrap">
                  {terminalOutput}
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="bg-green-400 text-black"
                  >
                    _
                  </motion.span>
                </pre>
              </div>

              <motion.p
                variants={itemVariants}
                className="text-gray-300 max-w-2xl mx-auto"
              >
                Available for freelance projects, full-time opportunities, or
                just a friendly chat about tech!
              </motion.p>
            </div>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div
              variants={itemVariants}
              className="bg-gray-900/50 rounded-lg border border-green-400/30 overflow-hidden"
            >
              {/* Form Header */}
              <div className="flex items-center justify-between p-4 border-b border-green-400/20">
                <div className="flex items-center gap-3">
                  <div className="flex gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-sm text-gray-400">
                    message-composer.exe
                  </span>
                </div>
                <span className="text-xs text-green-400">Send Message</span>
              </div>

              {/* Form Content */}
              <div className="p-6 space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <motion.div variants={itemVariants}>
                    <label className="block text-sm text-green-300 mb-2">{`$ echo "name:"`}</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className={`w-full bg-black/40 border ${
                        errors.name ? "border-red-500" : "border-green-400/30"
                      } rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-green-400 focus:outline-none focus:ring-2 focus:ring-green-400/20 transition-all`}
                      placeholder="Your Name"
                    />
                    {errors.name && (
                      <span className="text-red-500 text-xs mt-1 blink">
                        {errors.name}
                      </span>
                    )}
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <label className="block text-sm text-green-300 mb-2">{`$ echo "email:"`}</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className={`w-full bg-black/40 border ${
                        errors.email ? "border-red-500" : "border-green-400/30"
                      } rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-green-400 focus:outline-none focus:ring-2 focus:ring-green-400/20 transition-all`}
                      placeholder="your.email@example.com"
                    />
                    {errors.email && (
                      <span className="text-red-500 text-xs mt-1 blink">
                        {errors.email}
                      </span>
                    )}
                  </motion.div>
                </div>

                <motion.div variants={itemVariants}>
                  <label className="block text-sm text-green-300 mb-2">{`$ echo "subject:"`}</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className={`w-full bg-black/40 border ${
                      errors.subject ? "border-red-500" : "border-green-400/30"
                    } rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-green-400 focus:outline-none focus:ring-2 focus:ring-green-400/20 transition-all`}
                    placeholder="Project Inquiry / Collaboration / Job Opportunity"
                  />
                  {errors.subject && (
                    <span className="text-red-500 text-xs mt-1 blink">
                      {errors.subject}
                    </span>
                  )}
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label className="block text-sm text-green-300 mb-2">
                    $ cat message.txt
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className={`w-full bg-black/40 border ${
                      errors.message ? "border-red-500" : "border-green-400/30"
                    } rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-green-400 focus:outline-none focus:ring-2 focus:ring-green-400/20 transition-all resize-none`}
                    placeholder="Tell me about your project, idea, or just say hello! I'd love to hear from you..."
                  />
                  {errors.message && (
                    <span className="text-red-500 text-xs mt-1 blink">
                      {errors.message}
                    </span>
                  )}
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <motion.button
                    type="button"
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 bg-green-600 hover:bg-green-500 disabled:bg-gray-600 text-black font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="w-4 h-4 border-2 border-black border-t-transparent rounded-full"
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        $ send-message
                        <span className="text-sm">⏎</span>
                      </>
                    )}
                  </motion.button>

                  <motion.button
                    type="button"
                    onClick={() =>
                      setFormData({
                        name: "",
                        email: "",
                        subject: "",
                        message: "",
                      })
                    }
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-6 py-3 bg-transparent border border-green-400/60 text-green-400 hover:bg-green-400/10 font-semibold rounded-lg transition-all duration-300"
                  >
                    $ clear
                  </motion.button>
                </motion.div>

                {/* Form Status */}
                <motion.div
                  variants={itemVariants}
                  className="bg-black/40 rounded-lg p-3 text-xs"
                >
                  <div className="text-green-400">$ form --status</div>
                  <div className="text-gray-300">
                    Fields: {Object.values(formData).filter(Boolean).length}/4
                    completed
                  </div>
                  <div className="text-gray-400">
                    Validation:{" "}
                    {Object.values(formData).every(Boolean)
                      ? "✅ Ready to send"
                      : "⏳ Fill all fields"}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Methods */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-6"
          >
            {/* Contact Info Header */}
            <motion.div
              variants={itemVariants}
              className="bg-gray-900/50 rounded-lg border border-green-400/30 p-6"
            >
              <h3 className="text-2xl font-bold text-white mb-4">
                <span className="text-green-400">$</span> contact --list
              </h3>
              <p className="text-gray-300 text-sm mb-4">
                Multiple ways to reach me. Choose your preferred method:
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-black/40 rounded-lg p-3">
                  <div className="text-green-400 font-bold text-lg">24h</div>
                  <div className="text-xs text-gray-400">Response Time</div>
                </div>
                <div className="bg-black/40 rounded-lg p-3">
                  <div className="text-green-400 font-bold text-lg">🟢</div>
                  <div className="text-xs text-gray-400">Available Now</div>
                </div>
              </div>
            </motion.div>

            {/* Contact Methods Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactMethods.map((method) => (
                <motion.div
                  key={method.name}
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.02,
                    y: -2,
                    boxShadow: method.available
                      ? "0 10px 25px rgba(0,255,0,0.1)"
                      : "0 10px 25px rgba(100,100,100,0.1)",
                  }}
                  className={`bg-gray-900/50 rounded-lg border ${
                    method.available
                      ? "border-green-400/30 hover:border-green-400/60"
                      : "border-gray-600/30"
                  } p-4 transition-all duration-300 group relative overflow-hidden`}
                >
                  {/* Availability indicator */}
                  <div
                    className={`absolute top-2 right-2 w-2 h-2 rounded-full ${
                      method.available ? "bg-green-400" : "bg-gray-500"
                    } ${method.available ? "animate-pulse" : ""}`}
                  />

                  <div className="flex items-start gap-3">
                    <div
                      className="text-2xl"
                      role="img"
                      aria-label={`${method.name} icon`}
                    >
                      {method.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4
                        className={`font-semibold ${
                          method.available
                            ? "text-white group-hover:text-green-400"
                            : "text-gray-500"
                        } transition-colors`}
                      >
                        {method.name}
                      </h4>
                      <p
                        className={`text-sm ${
                          method.available ? "text-green-400" : "text-gray-600"
                        } truncate`}
                      >
                        {method.value}
                      </p>
                      <p className="text-xs text-gray-400 mt-1">
                        {method.description}
                      </p>

                      {method.available && (
                        <motion.a
                          href={method.command}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Connect with me on ${method.name}`}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="inline-block mt-2 text-xs bg-green-600/20 text-green-400 px-2 py-1 rounded border border-green-400/30 hover:bg-green-600/30 transition-colors"
                        >
                          Connect →
                        </motion.a>
                      )}
                    </div>
                  </div>

                  {/* Terminal command preview */}
                  <div
                    className={`mt-3 bg-black/40 rounded p-2 text-xs font-mono ${
                      method.available ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    $ open{" "}
                    {method.command
                      .replace("https://", "")
                      .replace("mailto:", "")}
                  </div>

                  {!method.available && (
                    <div className="absolute inset-0 bg-gray-900/60 flex items-center justify-center">
                      <span className="text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded">
                        Coming Soon
                      </span>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Location & Availability */}
            <motion.div
              variants={itemVariants}
              className="bg-gray-900/50 rounded-lg border border-green-400/30 p-6"
            >
              <h4 className="text-lg font-semibold text-white mb-3">
                <span className="text-green-400">$</span> whereis ali-baloch
              </h4>

              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3">
                  <span
                    className="text-green-400"
                    role="img"
                    aria-label="Location"
                  >
                    📍
                  </span>
                  <span className="text-gray-300">
                    {portfolioData.locationInfo.location}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <span
                    className="text-green-400"
                    role="img"
                    aria-label="Time Zone"
                  >
                    ⏰
                  </span>
                  <span className="text-gray-300">
                    Available: {portfolioData.locationInfo.availability}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <span
                    className="text-green-400"
                    role="img"
                    aria-label="Globe"
                  >
                    🌐
                  </span>
                  <span className="text-gray-300">
                    Open to remote work worldwide
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <span
                    className="text-green-400"
                    role="img"
                    aria-label="Briefcase"
                  >
                    💼
                  </span>
                  <span className="text-gray-300">
                    Freelance & Full-time opportunities
                  </span>
                </div>
              </div>

              <div className="mt-4 bg-black/40 rounded p-3 text-xs">
                <div className="text-green-400">$ status --current</div>
                <div className="text-gray-300">
                  🟢 {portfolioData.locationInfo.status}
                </div>
                <div className="text-gray-400">Last updated: {currentTime}</div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-gray-900/30 border border-green-400/30 rounded-lg p-6">
            <div className="text-green-400 mb-2">{`$ echo "Thank you for visiting!"`}</div>
            <div className="text-gray-300 text-sm">
              Looking forward to hearing from you 🚀
            </div>
            <div className="text-gray-400 text-xs mt-2">
              Response guaranteed within 24 hours
            </div>

            <motion.div
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="inline-block w-2 h-4 bg-green-400 ml-1"
            />
          </div>
        </motion.div>
      </div>

      {/* Floating elements */}
      <motion.div
        style={{ y }}
        animate={{
          x: [-20, 20, -20],
          rotate: [0, 10, 0, -10, 0],
        }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute top-20 right-6 w-16 h-16 bg-gray-900/10 border border-green-400/10 rounded-lg flex items-center justify-center text-green-400/20 text-2xl"
      >
        @
      </motion.div>

      <motion.div
        style={{ y: useTransform(scrollY, [0, 1000], [0, 20]) }}
        animate={{
          x: [25, -25, 25],
          rotate: [0, -8, 0, 8, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, delay: 4 }}
        className="absolute bottom-20 left-6 w-20 h-20 bg-gray-900/10 border border-green-400/10 rounded-lg flex items-center justify-center text-green-400/20 text-2xl"
      >
        📧
      </motion.div>
    </section>
  );
};

export default ContactSection;
