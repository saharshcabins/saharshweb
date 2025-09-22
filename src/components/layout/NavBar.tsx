// components/NavBar.tsx

import React from "react";
import TextBuilder from "../shared/TextBuilder";
import Image from "next/image";
import { motion } from "framer-motion";

const NavBar = () => {
  const NavLinks = [
    { text: "Work", href: "#work" },
    { text: "About Us", href: "#about-us" }, // If you have an About Us section, add an ID for it
    { text: "Contact Us", href: "#contact-us" },
  ];

  return (
    <motion.div
      className="bg-[var(--nav-bg-color)] p-4 md:p-6 rounded-[24px] w-full mx-auto"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-wrap md:flex-nowrap items-center gap-4">
        {/* Logo */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <Image
            unoptimized
            src="/assets/logo/logo.svg"
            height={50}
            width={140}
            alt="saharsh-logo"
          />
        </div>

        {/* Navigation Links */}
        <div className="flex flex-row flex-wrap md:flex-nowrap ml-auto gap-6 md:gap-16">
          {NavLinks.map((link) => (
            <a key={link.text} href={link.href}>
              <TextBuilder
                fontSize="1.5vw"
                weight="bold"
                color="link"
              >
                {link.text}
              </TextBuilder>
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default NavBar;