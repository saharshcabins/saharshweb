"use client";

import React, { useState, useEffect } from "react";
import TextBuilder from "../shared/TextBuilder";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
type NavLink = { text: string; href: string };

const getAbsoluteTop = (el: HTMLElement): number => {
  let top = 0;
  let current: HTMLElement | null = el;
  while (current) {
    top += current.offsetTop;
    current = current.offsetParent as HTMLElement | null;
  }
  return top;
};

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const router = useRouter();
  const NavLinks: NavLink[] = [
    // { text: "Work", href: "#work" },
    { text: "Our Projects", href: "/products" },
    { text: "Contact Us", href: "#contact-us" },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname]);
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

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (Math.abs(currentScrollY - lastScrollY) < 10) return;
      setShowNav(currentScrollY < lastScrollY);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (href: string) => {
    // Find all matches, pick the visible one (offsetParent is null when hidden)
    const targets = Array.from(
      document.querySelectorAll(href),
    ) as HTMLElement[];
    const target = targets.find((el) => el.offsetParent !== null) ?? targets[0];

    if (!target) return;

    const navbarHeight = 80;
    const absoluteTop = getAbsoluteTop(target);
    const targetPosition = absoluteTop - navbarHeight;

    // Use documentElement since scrollY is on <html> not <body>
    document.documentElement.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  };

  return (
    <motion.div
      className={`fixed top-8 md:top-3 left-1/2 -translate-x-1/2 z-50
        transition-transform duration-300
        ${showNav ? "translate-y-0" : "-translate-y-[150%]"}
        bg-[var(--nav-bg-color)] p-4 lg:p-4 lg:px-8 rounded-[24px]
        w-[90%] lg:w-[90%]`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div
          className="flex items-center gap-2 flex-shrink-0 cursor-pointer"
          onClick={() => {
            if (pathname === "/") {
              document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
            } else {
              router.push("/");
            }
          }}
        >
          <Image
            src="/assets/logo/logo.svg"
            height={50}
            width={140}
            alt="saharsh-logo"
            className="md:h-[50px] md:w-[140px] h-[30px] w-[90px]"
          />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex flex-row ml-auto gap-6 md:gap-12">
          {NavLinks.map((link: NavLink) => (
            <a
              key={link.text}
              href={link.href}
              onClick={(e) => {
                if (link.href.startsWith("#")) {
                  e.preventDefault();
                  scrollToSection(link.href);
                } else {
                  // normal route navigation
                  router.push(link.href);
                }
              }}
            >
              <TextBuilder fontSize="20px" weight="bold" color="link">
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
            {NavLinks.map((link: NavLink) => (
              <motion.a
                key={link.text}
                href={link.href}
                className="w-full text-left"
                variants={linkVariants}
                onClick={(e) => {
                  if (link.href.startsWith("#")) {
                    e.preventDefault();
                    setIsMenuOpen(false);
                    setTimeout(() => {
                      scrollToSection(link.href);
                    }, 350);
                  } else {
                    router.push(link.href);
                  }
                }}
              >
                <TextBuilder fontSize="20px" weight="bold" color="link">
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
