"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [currentTime, setCurrentTime] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState(
    pathname === "/" ? "home" : "",
  );

  const navItems = [
    { name: "Home.ts", href: "#home", section: "home", icon: "📄" },
    { name: "About.md", href: "#about", section: "about", icon: "📖" },
    {
      name: "Projects.json",
      href: "#projects",
      section: "projects",
      icon: "📁",
    },
    { name: "Skills.config", href: "#skills", section: "skills", icon: "⚙️" },
    { name: "Contact.api", href: "#contact", section: "contact", icon: "📧" },
  ];

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        }),
      );
    };

    updateTime();
    const timeInterval = setInterval(updateTime, 1000);
    return () => clearInterval(timeInterval);
  }, []);

  useEffect(() => {
    if (pathname === "/" && window.location.hash) {
      const hash = window.location.hash.replace("#", "");
      setTimeout(() => scrollToSection(hash), 100);
    }
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Update background blur state
      setScrolled(scrollY > 50);

      // Section tracking logic for highlighting tabs
      const sections = ["home", "about", "projects", "skills", "contact"];
      let current = "home";

      for (const section of sections) {
        const element = document.querySelector(
          `[data-section="${section === "home" ? "hero" : section}"]`,
        );
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };

    // Initialize on mount
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  const scrollToSection = (sectionId: string) => {
    if (pathname !== "/") {
      setIsMenuOpen(false);
      router.push(`/#${sectionId}`);
      return;
    }

    const targetSection = sectionId === "home" ? "hero" : sectionId;
    const element = document.querySelector(`[data-section="${targetSection}"]`);

    if (element) {
      const headerHeight = 100;
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      className={`fixed top-0 left-0 right-0 z-50 font-mono transition-all duration-300 ${
        scrolled ? "bg-black/95 backdrop-blur-xl" : "bg-black/80"
      }`}
    >
      {/* IDE Top Bar (Tab Layer) */}
      <div className="bg-[#161b22] border-b border-gray-800 flex items-center overflow-x-auto no-scrollbar">
        <div className="flex items-center px-3 md:px-4 gap-2 border-r border-gray-800 pr-4 md:pr-6 h-9 md:h-10 hidden sm:flex">
          <div className="flex gap-1 md:gap-1.5">
            <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-red-500/80 shadow-[0_0_10px_rgba(239,68,68,0.2)]" />
            <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-yellow-500/80 shadow-[0_0_10px_rgba(234,179,8,0.2)]" />
            <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-green-500/80 shadow-[0_0_10px_rgba(34,197,94,0.2)]" />
          </div>
        </div>

        <nav className="flex items-center h-9 md:h-10">
          {navItems.map((item) => {
            const isActive = activeSection === item.section;
            return (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.section)}
                className={`flex items-center gap-1.5 md:gap-2 px-4 md:px-6 h-full text-[10px] md:text-xs font-semibold border-r border-gray-800 transition-all duration-300 relative group min-w-[100px] md:min-w-[120px] flex-shrink-0 ${
                  isActive
                    ? "bg-[#0d1117] text-gray-200"
                    : "text-gray-500 hover:bg-[#0d1117]/50 hover:text-gray-300"
                }`}
              >
                <span className="opacity-50 group-hover:opacity-100 transition-opacity flex-shrink-0">
                  {item.icon}
                </span>
                <span className="truncate">{item.name}</span>
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute top-0 left-0 right-0 h-[2px] bg-[#61afef] shadow-[0_0_10px_rgba(97,175,239,0.5)]"
                  />
                )}
                {isActive && !isMenuOpen && (
                  <span className="ml-1.5 md:ml-2 text-[9px] md:text-[10px] text-gray-600">
                    ×
                  </span>
                )}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Breadcrumb Bar */}
      <div className="bg-[#0d1117] border-b border-gray-800 h-7 md:h-8 flex items-center px-4 md:px-6 text-[9px] md:text-[10px] text-gray-500 gap-2 overflow-hidden">
        <span className="hover:text-gray-300 cursor-pointer hidden xs:inline">
          portfolio
        </span>
        <span className="hidden xs:inline">&gt;</span>
        <span className="hover:text-gray-300 cursor-pointer hidden sm:inline">
          src
        </span>
        <span className="hidden sm:inline">&gt;</span>
        <span className="hover:text-gray-300 cursor-pointer">components</span>
        <span>&gt;</span>
        <span className="text-gray-300 font-bold uppercase tracking-widest truncate">
          {activeSection === "home"
            ? "Hero.tsx"
            : `${activeSection.charAt(0).toUpperCase() + activeSection.slice(1)}.tsx`}
        </span>

        <div className="ml-auto hidden md:flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-green-500" />
            <span className="text-gray-600">CONNECTED</span>
          </div>
          <div className="text-gray-600 hidden lg:block">PKT (UTC +5)</div>
          <div className="text-gray-400 font-bold">{currentTime}</div>
        </div>
      </div>

      {/* IDE Status Bottom Strip (Mobile Trigger) */}
      <div className="lg:hidden h-1.5 bg-gradient-to-r from-transparent via-[#61afef]/20 to-transparent" />

      {/* Mobile Menu Button (Floating style for IDE feel) */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="lg:hidden fixed bottom-5 right-5 w-10 h-10 md:w-12 md:h-12 bg-[#161b22] border border-gray-700 rounded-full flex items-center justify-center text-gray-400 shadow-2xl z-50 hover:text-green-500 transition-colors"
      >
        <span className="text-xl md:text-2xl">{isMenuOpen ? "×" : "≡"}</span>
      </button>

      {/* Mobile Overlay Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className="lg:hidden fixed inset-0 bg-black/95 backdrop-blur-xl z-[49] flex flex-col pt-24 md:pt-32 p-6 md:p-8 gap-4 md:gap-6"
          >
            <div className="text-[9px] md:text-[10px] text-gray-600 font-bold uppercase tracking-[0.3em] mb-2 md:mb-4">
              Navigation_Explorer
            </div>
            {navItems.map((item, i) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.section)}
                className="flex items-center justify-between text-xl md:text-2xl font-black tracking-tighter text-gray-500 hover:text-[#61afef] transition-colors group"
              >
                <div className="flex items-center gap-3 overflow-hidden">
                  <span className="text-[10px] md:text-xs text-gray-800 flex-shrink-0">
                    0{i + 1}.
                  </span>
                  <span className="truncate">
                    {item.name
                      .replace(".ts", "")
                      .replace(".md", "")
                      .replace(".json", "")
                      .replace(".config", "")
                      .replace(".api", "")}
                  </span>
                </div>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity text-[10px] md:text-sm text-[#61afef] font-mono tracking-widest uppercase flex-shrink-0">
                  Go_To
                </span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
