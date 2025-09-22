import Image from "next/image";
import React from "react";
import TextBuilder from "../shared/TextBuilder";
import { Copyright } from "@/utils/svgUtils";

const Footer = () => {
  const links = [
    { label: "Our Work", href: "#work" },
    { label: "Contact Us", href: "#contact-us" },
    { label: "About Us", href: "/about" }, // example for About Us page
  ];

  return (
    <div className="h-[460px] p-[100px] bg-[var(--text-dark)] flex flex-col justify-between">
      <div className="w-full grid grid-cols-[45%_55%] gap-[28px]">
        <div className="flex flex-col justify-between h-full">
          <Image
            unoptimized
            src="/assets/logo/logo_light.svg"
            height={51}
            width={176}
            alt="footer-logo"
          />
          <TextBuilder fontSize="16px" color="light60" className="w-[90%]">
            Saharsh Cabins began with a simple yet powerful vision: to create
            innovative, sustainable, and customizable portable cabins that
            redefine living and working spaces.
          </TextBuilder>
        </div>

        <div className="flex flex-col gap-[12px] h-full">
          <TextBuilder
            fontSize="20px"
            weight="bold"
            color="primary"
            className="pb-[8px]"
          >
            Quick links
          </TextBuilder>
          {links.map((link, index) => (
            <a key={index} href={link.href} className="hover:underline cursor-pointer">
              <TextBuilder fontSize="16px" color="light">
                {link.label}
              </TextBuilder>
            </a>
          ))}
        </div>
      </div>

      <div className="flex flex-row items-end gap-1">
        <TextBuilder fontSize="14px" color="light">
          Copyright
        </TextBuilder>
        <Copyright />

        <TextBuilder fontSize="14px" color="light">
          2025 All Rights Reserved
        </TextBuilder>
      </div>
    </div>
  );
};

export default Footer;
