"use client";

import React, { useState, useEffect } from "react";
import TextBuilder from "../shared/TextBuilder";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLink = { text: string; href: string; dropdown?: { text: string; href: string }[] };

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
  const [isPartnersOpen, setIsPartnersOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const router = useRouter();
  const pathname = usePathname();

  const NavLinks: NavLink[] = [
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

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
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

      if (currentScrollY < 10) {
        setShowNav(true);
        setLastScrollY(currentScrollY);
        return;
      }

      if (Math.abs(currentScrollY - lastScrollY) < 10) return;
      setShowNav(currentScrollY < lastScrollY);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (href: string) => {
    const targets = Array.from(document.querySelectorAll(href)) as HTMLElement[];
    const target = targets.find((el) => el.offsetParent !== null) ?? targets[0];
    if (!target) return;
    const top = target.getBoundingClientRect().top + window.scrollY - 96;
    window.scrollTo({ top, behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/") {
      e.preventDefault();
      scrollToTop();
      setShowNav(true);
    }
  };

  return (
    <motion.div
      className={`fixed top-4 md:top-3 left-1/2 -translate-x-1/2 z-50
        transition-transform duration-300
        ${showNav ? "translate-y-0" : "-translate-y-[150%]"}
        bg-[var(--nav-bg-color)] p-4 md:px-6 lg:px-8 rounded-[24px]
        w-[90%] lg:w-[90%]`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 flex-shrink-0" onClick={handleLogoClick}>
          <Image
            src="/assets/logo/logo.svg"
            height={50}
            width={140}
            alt="saharsh-logo"
            className="md:h-[50px] md:w-[140px] h-[30px] w-[90px]"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center ml-auto gap-6 md:gap-12">
          {NavLinks.map((link: NavLink) => {
            if (link.dropdown) {
              const isActive = pathname.startsWith(link.href);
              return (
                <div
                  key={link.text}
                  className="relative"
                  onMouseEnter={() => setIsPartnersOpen(true)}
                  onMouseLeave={() => setIsPartnersOpen(false)}
                >
                  <button
                    className="flex items-center gap-1 focus:outline-none"
                    style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}
                    onClick={(e) => {
                      e.preventDefault();
                      setIsPartnersOpen(!isPartnersOpen);
                    }}
                  >
                    <TextBuilder fontSize="14px" weight="bold" color={isActive ? "primary" : "link"}>
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
                        marginTop: "1px",
                        opacity: 0.6,
                      }}
                    >
                      <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  <AnimatePresence>
                    {isPartnersOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.18, ease: "easeOut" }}
                        className="absolute top-full left-0 mt-2 rounded-[12px] overflow-hidden shadow-lg z-50"
                        style={{
                          background: "var(--nav-bg-color)",
                          border: "1px solid rgba(255,255,255,0.08)",
                          minWidth: "220px",
                        }}
                      >
                        {/* ── Replace your desktop Link mapping with this raw anchor wrapper ── */}
{link.dropdown.map((sub) => (
  <a
    key={sub.text}
    href={sub.href}
    className="block px-5 py-3 transition-colors hover:bg-white/5 cursor-pointer"
    onClick={(e) => {
      e.preventDefault();
      setIsPartnersOpen(false);

      if (pathname === sub.href) {
        scrollToTop();
      } else {
        // Force the router to manually switch locations if on a different page
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
            
            const isActive =
              link.text === "Contact Us"
                ? pathname.replace(/\/$/, "") === "/contactus"
                : !link.href.startsWith("#") &&
                  pathname.replace(/\/$/, "") === link.href.replace(/\/$/, "");
            return (
              <a
                key={link.text}
                href={link.href}
                className="cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  if (link.href.startsWith("#")) {
                    setTimeout(() => scrollToSection(link.href), 350);
                  } else if (pathname.replace(/\/$/, "") === link.href.replace(/\/$/, "")) {
                    scrollToTop();
                  } else {
                    router.push(link.href);
                  }
                }}
              >
                <TextBuilder fontSize="14px" weight="bold" color={isActive ? "primary" : "link"}>
                  {link.text}
                </TextBuilder>
              </a>
            );
          })}
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="block md:hidden text-[var(--text-link)] focus:outline-none ml-auto p-[10px] -mr-[10px]"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="absolute top-full left-0 right-0 mt-2 flex flex-col items-start gap-4 md:hidden bg-[var(--nav-bg-color)] rounded-[16px] px-6 py-4 shadow-xl z-50"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {NavLinks.map((link: NavLink) => {
              if (link.dropdown) {
                return (
                  <div key={link.text} className="w-full">
                    <button
                      className="w-full flex items-center justify-between py-[10px]"
                      style={{ background: "none", border: "none", cursor: "pointer", paddingLeft: 0, paddingRight: 0 }}
                      onClick={() => setIsPartnersOpen(!isPartnersOpen)}
                    >
                      <TextBuilder fontSize="20px" weight="bold" color="link">
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
                            <Link
                              key={sub.text}
                              href={sub.href}
                              className="block py-1"
                              onClick={(e) => {
                                if (pathname === sub.href) {
                                  e.preventDefault();
                                  scrollToTop();
                                }
                                setIsMenuOpen(false);
                                setIsPartnersOpen(false);
                              }}
                            >
                              <TextBuilder fontSize="16px" weight="bold" color={pathname === sub.href ? "primary" : "link"}>
                                {sub.text}
                              </TextBuilder>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }
              const isActive =
                link.text === "Contact Us"
                  ? pathname.replace(/\/$/, "") === "/contactus"
                  : !link.href.startsWith("#") &&
                    pathname.replace(/\/$/, "") === link.href.replace(/\/$/, "");
              return (
                <motion.a
                  key={link.text}
                  href={link.href}
                  className="w-full text-left py-[10px]"
                  variants={linkVariants}
                  onClick={(e) => {
                    e.preventDefault();
                    if (link.href.startsWith("#")) {
                      setIsMenuOpen(false);
                      setTimeout(() => scrollToSection(link.href), 350);
                    } else if (pathname.replace(/\/$/, "") === link.href.replace(/\/$/, "")) {
                      setIsMenuOpen(false);
                      scrollToTop();
                    } else {
                      setIsMenuOpen(false);
                      router.push(link.href);
                    }
                  }}
                >
                  <TextBuilder fontSize="20px" weight="bold" color={isActive ? "primary" : "link"}>
                    {link.text}
                  </TextBuilder>
                </motion.a>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default NavBar;
