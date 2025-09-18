"use client";

import React, { useState } from "react";
import TextBuilder from "../shared/TextBuilder";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const NavBarMobile = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const NavLinks = [
    { text: "Work", href: "#" },
    { text: "About Us", href: "#" },
    { text: "Contact Us", href: "#" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuVariants = {
    hidden: {
      opacity: 0,
      y: -20,
      transition: {
        staggerChildren: 0.1,
        staggerDirection: -1,
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        staggerDirection: 1,
      },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="bg-[var(--nav-bg-color)] p-4 rounded-[24px] w-full mx-auto">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <Image
            unoptimized
            src="/assets/logo/logo.svg"
            height={40}
            width={120}
            alt="saharsh-logo"
          />
        </div>

        {/* Hamburger/Close Icon */}
        <button
          onClick={toggleMenu}
          className="p-2 rounded-md focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          <AnimatePresence mode="wait" initial={false}>
            {isMenuOpen ? (
              <motion.div
                key="x"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <X size={24} className="text-[var(--text-dark)]" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Menu size={24} className="text-[var(--text-dark)]" />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="mt-4 flex flex-col items-start gap-4"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {NavLinks.map((link) => (
              <motion.a
                key={link.text}
                href={link.href}
                className="w-full text-left"
                variants={linkVariants}
                onClick={toggleMenu}
              >
                <TextBuilder fontSize="20px" weight="bold" color="link">
                  {link.text}
                </TextBuilder>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavBarMobile;