"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";

const accentColors = [
  { name: "Blue", color: "#61afef", secondary: "#c678dd" },
  { name: "Purple", color: "#c678dd", secondary: "#61afef" },
  { name: "Green", color: "#98c379", secondary: "#56b6c2" },
  { name: "Yellow", color: "#e5c07b", secondary: "#ff5f56" },
  { name: "Red", color: "#ff5f56", secondary: "#e5c07b" },
  { name: "Cyan", color: "#56b6c2", secondary: "#98c379" },
];

const hexToRgb = (hex: string) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `${r}, ${g}, ${b}`;
};

export default function ThemeCustomizer() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [currentAccent, setCurrentAccent] = useState("#61afef");

  useEffect(() => {
    setMounted(true);
    const savedAccent = localStorage.getItem("accent-color");
    if (savedAccent) {
      setCurrentAccent(savedAccent);
      const accentData =
        accentColors.find((a) => a.color === savedAccent) || accentColors[0];

      document.documentElement.style.setProperty("--accent", accentData.color);
      document.documentElement.style.setProperty(
        "--accent-rgb",
        hexToRgb(accentData.color),
      );
      document.documentElement.style.setProperty(
        "--accent-secondary",
        accentData.secondary,
      );
      document.documentElement.style.setProperty(
        "--accent-secondary-rgb",
        hexToRgb(accentData.secondary),
      );
    }
  }, []);

  // Close on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) setIsOpen(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  if (!mounted) return null;

  const handleAccentChange = (color: string, secondary: string) => {
    setCurrentAccent(color);
    document.documentElement.style.setProperty("--accent", color);
    document.documentElement.style.setProperty("--accent-rgb", hexToRgb(color));
    document.documentElement.style.setProperty("--accent-secondary", secondary);
    document.documentElement.style.setProperty(
      "--accent-secondary-rgb",
      hexToRgb(secondary),
    );
    localStorage.setItem("accent-color", color);
  };

  const panelTransition: any = { type: "spring", damping: 25, stiffness: 200 };

  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-[10000] flex items-center">
      <motion.div
        animate={{ x: isOpen ? 0 : 320 }}
        transition={panelTransition}
        className="flex items-center relative"
      >
        {/* Toggle Button - Attached to the panel */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-10 h-12 bg-background-secondary border border-border-primary border-r-0 rounded-l-xl flex items-center justify-center text-accent shadow-2xl hover:bg-accent hover:text-background-primary transition-colors duration-300 group z-50 absolute left-[-40px]"
        >
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={panelTransition}
            className="flex items-center justify-center"
          >
            <ChevronLeftIcon className="w-5 h-5 transition-colors duration-300" />
          </motion.div>
        </button>

        {/* Control Panel */}
        <div className="w-80 bg-background-secondary border-l border-y border-border-primary rounded-l-3xl shadow-[-20px_0_50px_rgba(0,0,0,0.5)] overflow-hidden backdrop-blur-xl p-8">
          <div className="space-y-8">
            <div>
              <h4 className="text-[10px] text-text-secondary font-black uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                System_Theme
              </h4>
              <div className="flex gap-3">
                <button
                  onClick={() => setTheme("light")}
                  className={`flex-1 py-3 rounded-xl border-2 text-[10px] font-bold uppercase transition-all ${theme === "light" ? "bg-accent text-background-primary border-accent" : "border-border-primary text-text-secondary hover:border-accent"}`}
                >
                  Light_Mode
                </button>
                <button
                  onClick={() => setTheme("dark")}
                  className={`flex-1 py-3 rounded-xl border-2 text-[10px] font-bold uppercase transition-all ${theme === "dark" ? "bg-accent text-background-primary border-accent" : "border-border-primary text-text-secondary hover:border-accent"}`}
                >
                  Dark_Mode
                </button>
              </div>
            </div>

            <div>
              <h4 className="text-[10px] text-text-secondary font-black uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                Accent_Palette
              </h4>
              <div className="grid grid-cols-3 gap-3">
                {accentColors.map((item) => (
                  <button
                    key={item.color}
                    onClick={() =>
                      handleAccentChange(item.color, item.secondary)
                    }
                    className={`group relative w-full aspect-square rounded-xl border-2 transition-all flex items-center justify-center ${currentAccent === item.color ? "border-white scale-110 shadow-lg" : "border-transparent hover:scale-105"}`}
                    style={{ backgroundColor: item.color }}
                    title={item.name}
                  >
                    {currentAccent === item.color && (
                      <div className="w-2 h-2 bg-white rounded-full shadow-inner" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-border-primary">
              <div className="text-[8px] text-text-secondary font-mono text-center uppercase tracking-widest leading-loose">
                Appearance_config.v3.1 <br />
                State: Nominal // Persisted
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
