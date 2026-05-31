"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import TextBuilder from "../shared/TextBuilder";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";

type NavItem = { text: string; href: string; dropdown?: { text: string; href: string }[] };

const NavBarMobile = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPartnersOpen, setIsPartnersOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLogoClick = () => {
    if (pathname === "/") {
      scrollToTop();
    }
    setIsMenuOpen(false);
  };

  const NavLinks: NavItem[] = [
    { text: "Our Projects", href: "/ourprojects" },
    { text: "About", href: "/about" },
    {
      text: "Partner Program",
      href: "/partners",
      dropdown: [
        { text: "Global Alliances", href: "/partners/global-alliances" },
        { text: "Architects & Designers", href: "/partners/architects" },
        { text: "Builders & Developers", href: "/partners/developers" },
      ],
    },
    { text: "Contact Us", href: "/contactus/" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsPartnersOpen(false);
  };

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

  return (
    <div className="bg-[var(--nav-bg-color)] p-4 rounded-[24px] w-full mx-auto">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/" onClick={handleLogoClick} className="flex items-center gap-2 flex-shrink-0">
          <Image
            src="/assets/logo/logo.svg"
            height={40}
            width={120}
            alt="saharsh-logo"
          />
        </Link>

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
            {NavLinks.map((link) => {
              if (link.dropdown) {
                return (
                  <div key={link.text} className="w-full">
                    <button
                      className="w-full flex items-center justify-between"
                      style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}
                      onClick={() => setIsPartnersOpen(!isPartnersOpen)}
                    >
                      <TextBuilder fontSize="14px" weight="bold" color="link">
                        {link.text}
                      </TextBuilder>
                      <svg
                        width="10"
                        height="6"
                        viewBox="0 0 10 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{
                          transition: "transform 0.2s",
                          transform: isPartnersOpen ? "rotate(180deg)" : "rotate(0deg)",
                          opacity: 0.6,
                        }}
                      >
                        <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                    <AnimatePresence>
                      {isPartnersOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className="overflow-hidden pl-4 mt-2 flex flex-col gap-2"
                        >
                          {link.dropdown.map((sub) => (
                            <a
                              key={sub.text}
                              href={sub.href}
                              className="block py-1 h-8 cursor-pointer"
                              onClick={(e) => {
                                e.preventDefault();
                                setIsMenuOpen(false);
                                setIsPartnersOpen(false);
                                if (pathname === sub.href) {
                                  scrollToTop();
                                } else {
                                  router.push(sub.href);
                                }
                              }}
                            >
                              <TextBuilder fontSize="14px" weight="bold" color={pathname === sub.href ? "primary" : "link"}>
                                {sub.text}
                              </TextBuilder>
                            </a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }
              return (
                <motion.a
                  key={link.text}
                  href={link.href}
                  className="w-full text-left"
                  variants={linkVariants}
                  onClick={(e) => {
                    if (pathname === link.href) {
                      e.preventDefault();
                      scrollToTop();
                    }
                    toggleMenu();
                  }}
                >
                  <TextBuilder fontSize="14px" weight="bold" color={pathname === link.href ? "primary" : "link"}>
                    {link.text}
                  </TextBuilder>
                </motion.a>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavBarMobile;
