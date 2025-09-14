import React from "react";
import TextBuilder from "../shared/TextBuilder";
import Image from "next/image";

const NavBar = () => {
  const NavLinks = [
    { text: "Work", href: "#" },
    { text: "About Us", href: "#" },
    { text: "Contact Us", href: "#" },
  ];

  return (
    <div className="bg-[var(--nav-bg-color)] p-4 md:p-6 rounded-[24px] w-full mx-auto">
      <div className="flex flex-wrap md:flex-nowrap items-center gap-4">
        {/* Logo */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <Image
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
                // use clamp so it scales smoothly but doesn’t get too small/too big
                fontSize=" 1.5vw"
                weight="bold"
                color="link"
              >
                {link.text}
              </TextBuilder>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
