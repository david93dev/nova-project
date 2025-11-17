"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, easeInOut } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "../../assets/logo-h.png";

const navItems = [
  { name: "Home", to: "/#home" },
  { name: "Quem Somos", to: "/#quem-somos" },
  { name: "Preços", to: "/#precos" },
  { name: "Serviços", to: "/#servicos" },
  { name: "Dúvidas", to: "/#faq" },
  { name: "Contato", to: "/#contato" },
];

export default function Header2() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔥 FUNÇÃO PRINCIPAL — scroll suave com offset do header fixo
  const scrollToHash = (hash) => {
  if (!hash) return;

  const scrollWithOffset = (el) => {
    const headerHeight = document.querySelector("header")?.offsetHeight || 80;

    const elementPosition =
      el.getBoundingClientRect().top + window.pageYOffset;

    // 🔥 Se for a seção Preços → aplica offset
    const offset =
      hash === "#precos"
        ? headerHeight + 290// ajuste fino
        : 0; // outras seções sem compensação

    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  const tryScroll = () => {
    const el = document.querySelector(hash);
    if (el) {
      scrollWithOffset(el);
      history.replaceState(null, "", hash);
      return true;
    }
    return false;
  };

  if (location.pathname === "/") {
    if (!tryScroll()) setTimeout(tryScroll, 150);
  } else {
    navigate(hash);
    setTimeout(() => tryScroll(), 200);
  }
};


  const handleNavClick = (to) => {
    const hash = to.includes("#") ? `#${to.split("#")[1]}` : null;
    setIsMobileMenuOpen(false);
    scrollToHash(hash);
  };

  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: { duration: 0.3, ease: easeInOut },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3, ease: easeInOut, staggerChildren: 0.1 },
    },
  };

  const mobileItemVariants = {
    closed: { opacity: 0, x: 20 },
    open: { opacity: 1, x: 0 },
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "border-border/50 bg-background/80 border-b shadow-sm backdrop-blur-md"
            : "bg-transparent"
        }`}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 px-16 items-center justify-between">
            {/* LOGO */}
            <motion.div
              className="flex items-center space-x-3"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <button
                onClick={() => handleNavClick("/#home")}
                className="flex items-center space-x-3"
              >
                <div className="relative">
                  <div className="bg-slate-100 p-1 rounded-2xl">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl shadow-lg">
                      <img src={logo} alt="logo empresa" />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col">
                  <span
                    className={`text-lg font-bold transition-colors duration-300 ${
                      isScrolled ? "text-primary" : "text-white"
                    }`}
                  >
                    Nova
                  </span>
                  <span
                    className={`-mt-1 text-xs transition-colors duration-300 ${
                      isScrolled ? "text-primary/70" : "text-gray-200"
                    }`}
                  >
                    Turismo
                  </span>
                </div>
              </button>
            </motion.div>

            {/* DESKTOP MENU */}
            <nav className="hidden items-center space-x-1 lg:flex">
              {navItems.map((item) => (
                <motion.div
                  key={item.name}
                  variants={itemVariants}
                  className="relative"
                  onMouseEnter={() => setHoveredItem(item.name)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <button
                    onClick={() => handleNavClick(item.to)}
                    className="text-foreground/80 hover:text-foreground relative rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-200"
                  >
                    {hoveredItem === item.name && (
                      <motion.div
                        className="bg-muted absolute inset-0 rounded-lg"
                        layoutId="navbar-hover"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 30,
                        }}
                      />
                    )}
                    <span className="relative z-10">{item.name}</span>
                  </button>
                </motion.div>
              ))}
            </nav>

            {/* MOBILE BUTTON */}
            <motion.button
              className="text-foreground hover:bg-muted rounded-lg p-2 transition-colors duration-200 lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              variants={itemVariants}
              whileTap={{ scale: 0.95 }}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />

            <motion.div
              className="border-border bg-background fixed top-16 right-4 z-50 w-80 overflow-hidden rounded-2xl border shadow-2xl lg:hidden"
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <div className="space-y-6 p-6">
                <div className="space-y-1">
                  {navItems.map((item) => (
                    <motion.div key={item.name} variants={mobileItemVariants}>
                      <button
                        onClick={() => handleNavClick(item.to)}
                        className="text-foreground hover:bg-muted block rounded-lg px-4 py-3 font-medium transition-colors duration-200 w-full text-left"
                      >
                        {item.name}
                      </button>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
