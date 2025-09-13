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
    <div className="bg-[var(--nav-bg-color)] p-[20px] rounded-[24px]">
      <div className="flex flex-row gap-4 items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src="/assets/logo/logo.svg"
            height={50}
            width={176}
            alt="saharsh-logo"
          />
          {/* <div className="text-[23px] font-bold tracking-[-0.01em]">
            Saharsh
          </div> */}
        </div>

        {/* Navigation Links */}
        <div className="flex flex-row justify-between ml-auto w-[35%]">
          {NavLinks.map((link) => (
            <a key={link.text} href={link.href}>
              <TextBuilder fontSize="20px" weight="bold" color="link">
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
