import Image from "next/image";
import React from "react";
import TextBuilder from "../shared/TextBuilder";
import { Copyright } from "@/utils/svgUtils";

const Footer = () => {
  const links = [
    { label: "Our Work", href: "#work" },
    { label: "Contact Us", href: "#contact-us" },
    { label: "About Us", href: "/about" },
  ];

  return (
    <div className="relative bg-[var(--text-dark)] overflow-hidden">
      {/* Main container */}
      <div className="flex flex-col justify-between 
                      h-[522px] py-[63px] px-[30px] 
                      lg:h-[460px] lg:p-[100px]">
        {/* Top Section */}
        <div className="flex flex-col gap-[32px] lg:grid lg:grid-cols-[45%_55%] lg:gap-[28px] lg:h-full">
          {/* Logo + description */}
          <div className="flex flex-col max-lg:justify-between gap-[25px] lg:gap-[36px]">
            <Image
              
              src="/assets/logo/logo_light.svg"
              height={51}
              width={176}
              alt="footer-logo"
            />
            <TextBuilder
              fontSize="12px"
              color="light60"
              className="w-[90%] lg:fontSize-[16px]"
            >
              Saharsh Cabins began with a simple yet powerful vision: to create
              innovative, sustainable, and customizable portable cabins that
              redefine living and working spaces.
            </TextBuilder>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-[12px]">
            <TextBuilder
              fontSize="16px"
              weight="bold"
              color="primary"
              className="pb-[8px] lg:text-[20px]"
            >
              Quick links
            </TextBuilder>
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="hover:underline cursor-pointer"
              >
                <TextBuilder
                  fontSize="12px"
                  color="light"
                  className="lg:text-[16px]"
                >
                  {link.label}
                </TextBuilder>
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-row items-end gap-1 z-10 mt-[20px] lg:mt-0">
          <TextBuilder fontSize="12px" color="light" className="lg:text-[14px]">
            Copyright
          </TextBuilder>
          <Copyright />
          <TextBuilder fontSize="12px" color="light" className="lg:text-[14px]">
            2025 All Rights Reserved
          </TextBuilder>
        </div>
      </div>

      {/* Decorative background image (for both mobile & desktop) */}
      <Image
        
        src="/assets/footer/logo_bg.webp"
        alt="footer-decor"
        width={346}
        height={322}
        className="absolute bottom-0 right-[-60] w-[346px] h-[322px] lg:bottom-[-100] lg:right-[-120]  opacity-10 object-contain 
                   lg:w-[660px] lg:h-[630px]"
      />
    </div>
  );
};

export default Footer;
