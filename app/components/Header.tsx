"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Rocket, X, Menu } from "lucide-react";
import { useRouter } from "next/navigation";

interface NavLink {
  href: string;
  label: string;
}

const Header: React.FC = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 3);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks: NavLink[] = [
    { href: "#home", label: "Trang Chủ" },
    { href: "#about", label: "Giới Thiệu" },
    { href: "#ai-tools", label: "Công Cụ AI" },
    { href: "#events", label: "Sự Kiện" },
    { href: "#contact", label: "Liên Hệ" },
  ];

  const menuVariants: Variants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: "auto", transition: { duration: 0.3, ease: "easeInOut" } },
    exit: { opacity: 0, height: 0, transition: { duration: 0.3, ease: "easeInOut" } },
  };

  // --- Scroll helper ---
  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    const id = href.replace("#", "");
    if (window.location.pathname !== "/") {
      // Nếu đang ở trang khác, navigate về "/" trước
      router.push(`/${href}`);
    } else {
      // Scroll tới section trong cùng trang
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/90 shadow-lg backdrop-blur-lg" : "bg-transparent"}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a
          onClick={() => handleNavClick("#home")}
          className={`cursor-pointer text-2xl font-bold flex items-center gap-2 transition-colors ${isScrolled ? "text-slate-900" : "text-white"}`}
        >
          <Rocket className="text-blue-500" /> FPT
          <span className="font-light">Innovation Path</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className={`font-medium transition-colors ${isScrolled ? "text-slate-600 hover:text-blue-600" : "text-slate-200 hover:text-white"}`}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick("#contact")}
            className="bg-blue-600 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition-transform hover:scale-105"
          >
            Tham Gia Ngay
          </button>
        </nav>

        {/* Mobile menu toggle */}
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden z-50" aria-label="Toggle navigation menu">
          {isMenuOpen ? <X className="h-6 w-6 text-slate-900 transition-colors" /> : <Menu className={`h-6 w-6 transition-colors ${isScrolled ? "text-slate-900" : "text-white"}`} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div key="mobile-menu" variants={menuVariants} initial="hidden" animate="visible" exit="exit" className="md:hidden bg-white shadow-lg overflow-hidden">
            <nav className="flex flex-col">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="py-3 px-6 text-slate-700 hover:bg-blue-50 hover:text-blue-600 font-medium border-b border-slate-100 text-left"
                >
                  {link.label}
                </button>
              ))}
              <div className="p-4">
                <button
                  onClick={() => handleNavClick("#contact")}
                  className="block w-full text-center bg-blue-600 text-white px-5 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                >
                  Tham Gia Ngay
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
