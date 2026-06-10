"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { 
  FaScaleBalanced, 
  FaLocationDot, 
  FaPhone, 
  FaEnvelope, 
  FaRegFilePdf 
} from "react-icons/fa6";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const practiceColumns = [
    { name: "Corporate & Commercial Law", href: "/practice-areas/corporate-law" },
    { name: "Taxation Advisory Services", href: "/practice-areas/taxation-law" },
    { name: "Litigation & Asset Recovery", href: "/practice-areas/litigation" },
    { name: "Property & Real Estate Law", href: "/practice-areas/property-law" },
    { name: "Family, Trusts & Estates", href: "/practice-areas/family-law" },
    { name: "Financial White-Collar Defense", href: "/practice-areas/criminal-defense" }
  ];

  const resourcesColumns = [
    { name: "Firm Profile Overview", href: "/about" },
    { name: "Legal Briefings & Updates", href: "/blog" },
    { name: "Schedule Priority Meeting", href: "/book-consultation" },
    { name: "Careers & Internships", href: "/careers" },
    { name: "Chambers Contact Panel", href: "/contact" }
  ];

  // Subtle scroll-into-view viewport configuration
  const footerContainerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
        staggerChildren: 0.1
      }
    }
  };

  const elementVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: "easeOut" } 
    }
  };

  return (
    <motion.footer 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={footerContainerVariants}
      className="bg-slate-950 text-slate-400 border-t border-slate-800 font-light text-sm pt-20 pb-8 px-6 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-slate-800">
        
        {/* Core Corporate Information Pillar */}
        <motion.div variants={elementVariants} className="lg:col-span-4 flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-amber-500/10 border border-amber-500/30 rounded flex items-center justify-center text-amber-500 shadow">
              <FaScaleBalanced className="text-base" />
            </div>
            <span className="font-serif font-bold text-base text-slate-100 tracking-wide">
              AZIBO KANU & PARTNERS
            </span>
          </div>
          <p className="text-slate-400 leading-relaxed max-w-sm">
            A premier full-service law firm housing multidisciplinary advocates focused on delivering sophisticated statutory regulatory compliance, corporate representation, and premium fiscal advisory.
          </p>
          <div className="flex flex-col gap-3 font-normal text-slate-300">
            <div className="flex items-start gap-3 group">
              <FaLocationDot className="text-amber-500 shrink-0 mt-1 transition-transform group-hover:scale-110" />
              <span>55 Robert Street, Freetown, Sierra Leone</span>
            </div>
            <div className="flex items-center gap-3 group">
              <FaPhone className="text-amber-500 shrink-0 transition-transform group-hover:scale-110" />
              <span>+232 78 304 045 / +232 31 470 854 / +232 79 595 261</span>
            </div>
            <div className="flex items-center gap-3 group">
              <FaEnvelope className="text-amber-500 shrink-0 transition-transform group-hover:scale-110" />
              <span>azibokanuandpartners@gmail.com</span>
            </div>
          </div>
        </motion.div>

        {/* Quick Link Framework Grid Column 1 */}
        <motion.div variants={elementVariants} className="lg:col-span-4 lg:pl-12">
          <h3 className="text-slate-100 font-serif font-semibold uppercase tracking-wider text-xs mb-6 border-l-2 border-amber-500 pl-3">
            Practice Frameworks
          </h3>
          <ul className="flex flex-col gap-3.5">
            {practiceColumns.map((link, idx) => (
              <li key={idx}>
                <motion.div whileHover={{ x: 4 }} transition={{ type: "tween", duration: 0.15 }}>
                  <Link href={link.href} className="hover:text-amber-400 transition-colors duration-200 block">
                    {link.name}
                  </Link>
                </motion.div>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Quick Link Framework Grid Column 2 */}
        <motion.div variants={elementVariants} className="lg:col-span-4 lg:pl-6">
          <h3 className="text-slate-100 font-serif font-semibold uppercase tracking-wider text-xs mb-6 border-l-2 border-amber-500 pl-3">
            Resources & Advisory
          </h3>
          <ul className="flex flex-col gap-3.5">
            {resourcesColumns.map((link, idx) => (
              <li key={idx}>
                <motion.div whileHover={{ x: 4 }} transition={{ type: "tween", duration: 0.15 }}>
                  <Link href={link.href} className="hover:text-amber-400 transition-colors duration-200 block">
                    {link.name}
                  </Link>
                </motion.div>
              </li>
            ))}
          </ul>
        </motion.div>

      </div>

      {/* Compliance Bar and System Foundations */}
      <motion.div 
        variants={elementVariants}
        className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500"
      >
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-center sm:text-left">
          <span>&copy; {currentYear} Azibo Kanu & Partners. All rights reserved.</span>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="hover:text-slate-400 transition-colors">Privacy Charter</Link>
            <Link href="/terms" className="hover:text-slate-400 transition-colors">Terms of Retention</Link>
          </div>
        </div>
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="flex items-center gap-2 text-slate-400 font-medium bg-slate-900/60 px-3 py-1.5 rounded border border-slate-800/80 shadow-inner"
        >
          <FaRegFilePdf className="text-amber-500" />
          <a href="/docs/legal-framework.pdf" download className="hover:underline text-xs tracking-wide">
            Download Firm Regulatory Credentials
          </a>
        </motion.div>
      </motion.div>
    </motion.footer>
  );
}