"use client";

import React, { useState, useEffect } from "react";
import TextBuilder from "../shared/TextBuilder";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const NavLinks = [
    { text: "Work", href: "#work" },
    { text: "About Us", href: "#about-us" },
    { text: "Contact Us", href: "#contact-us" },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const menuVariants = {
    hidden: {
      opacity: 0,
      y: -20,
      transition: { staggerChildren: 0.1, staggerDirection: -1 },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.1, staggerDirection: 1 },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  // Scroll logic
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNav(false); // scrolling down → hide
      } else {
        setShowNav(true); // scrolling up → show
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.div
      className={`fixed top-8 left-1/2 -translate-x-1/2 z-50
    transition-transform duration-300
    ${showNav ? "translate-y-0" : "-translate-y-[150%]"}
    bg-[var(--nav-bg-color)] p-4 lg:p-6 rounded-[10px]
    w-[90%] lg:w-[90%]`}
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <Image
            unoptimized
            src="/assets/logo/logo.svg"
            height={50}
            width={140}
            alt="saharsh-logo"
            className="md:h-[50px] md:w-[140px] h-[40px] w-[120px]"
          />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex flex-row ml-auto gap-6 md:gap-16">
          {NavLinks.map((link) => (
            <a key={link.text} href={link.href}>
              <TextBuilder fontSize="1.2vw" weight="bold" color="link">
                {link.text}
              </TextBuilder>
            </a>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={toggleMenu}
          className="p-2 rounded-md focus:outline-none md:hidden"
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
            className="mt-4 flex flex-col items-start gap-4 md:hidden"
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
                <TextBuilder fontSize="14px" weight="bold" color="link">
                  {link.text}
                </TextBuilder>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default NavBar;
