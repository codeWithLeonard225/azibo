"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FaScaleBalanced, FaBars, FaXmark } from "react-icons/fa6";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Integrated /faqs cleanly into your primary link matrix
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Firm", href: "/about" },
    { name: "Practice Areas", href: "/practice-areas" },
    { name: "Our Counsel", href: "/lawyers" },
    { name: "Briefings", href: "/blog" },
    { name: "FAQs", href: "/faqs" }, // New matching asset route
    { name: "Contact", href: "/contact" },
  ];

  // Upgraded matching mechanism to handle child routing structures gracefully
  const isActive = (path) => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };

  // Animation Framework Variants
  const navbarVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { 
      opacity: 1, 
      height: "auto",
      transition: { 
        height: { duration: 0.3, ease: "easeOut" },
        opacity: { duration: 0.25, delay: 0.05 }
      }
    },
    exit: { 
      opacity: 0, 
      height: 0,
      transition: { 
        height: { duration: 0.25, ease: "easeInOut" },
        opacity: { duration: 0.15 }
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (custom) => ({
      opacity: 1,
      x: 0,
      transition: { delay: custom * 0.05, ease: "easeOut" }
    })
  };

  return (
    <motion.nav 
      initial="hidden"
      animate="visible"
      variants={navbarVariants}
      className="sticky top-0 w-full z-50 bg-slate-950/95 backdrop-blur-md border-b border-slate-800 text-white"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Firm Branding Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <motion.div 
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="w-10 h-10 bg-amber-500 rounded flex items-center justify-center text-slate-950 shadow-md group-hover:bg-amber-400 transition-colors"
          >
            <FaScaleBalanced className="text-xl" />
          </motion.div>
          <div className="flex flex-col">
            <span className="font-serif font-bold text-lg leading-none tracking-wide text-amber-400 group-hover:text-amber-300 transition-colors">
              AZIBO KANU
            </span>
            <span className="text-[10px] uppercase tracking-widest text-slate-400 mt-1 font-medium">
              & PARTNERS • CHAMBERS
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Link Framework */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium tracking-wide transition-colors duration-200 relative py-2 ${
                isActive(link.href) ? "text-amber-400 font-semibold" : "text-slate-300 hover:text-white"
              }`}
            >
              <span className="relative z-10">{link.name}</span>
              {isActive(link.href) && (
                <motion.span 
                  layoutId="activeUnderline"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-500 rounded-full"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </div>

        {/* Desktop Call to Action */}
        <div className="hidden lg:flex">
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="/book-consultation"
              className="bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 text-xs uppercase tracking-wider font-bold px-5 py-3 rounded hover:from-amber-400 hover:to-amber-500 transition-all duration-200 shadow-md shadow-amber-500/10 block"
            >
              Book Consultation
            </Link>
          </motion.div>
        </div>

        {/* Mobile Menu Action Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-slate-300 hover:text-white focus:outline-none p-2 relative w-10 h-10 flex items-center justify-center"
          aria-label="Toggle navigation menu"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -45, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 45, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <FaXmark className="text-2xl" />
              </motion.div>
            ) : (
              <motion.div
                key="burger"
                initial={{ rotate: 45, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -45, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <FaBars className="text-2xl" />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Responsive Mobile Drawer Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobileMenuVariants}
            className="lg:hidden border-t border-slate-800 bg-slate-950 absolute w-full left-0 right-0 p-6 shadow-2xl flex flex-col gap-2 overflow-hidden"
          >
            {navLinks.map((link, i) => (
              <motion.div key={link.href} custom={i} variants={itemVariants}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block text-base font-medium py-2.5 px-2 rounded transition-colors ${
                    isActive(link.href) 
                      ? "text-amber-400 bg-slate-900/50 font-semibold" 
                      : "text-slate-300 hover:text-white hover:bg-slate-900/30"
                  }`}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            
            <motion.hr 
              variants={itemVariants} 
              custom={navLinks.length} 
              className="border-slate-800 my-3" 
            />
            
            <motion.div 
              variants={itemVariants} 
              custom={navLinks.length + 1}
              className="pt-1"
            >
              <Link
                href="/book-consultation"
                onClick={() => setIsOpen(false)}
                className="w-full text-center bg-amber-500 text-slate-950 font-bold uppercase tracking-wider text-sm py-3.5 rounded block hover:bg-amber-400 transition-colors shadow-lg"
              >
                Book Consultation
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}