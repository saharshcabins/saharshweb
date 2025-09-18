import Image from "next/image";
import React from "react";
import TextBuilder from "../shared/TextBuilder";
import { Copyright } from "@/utils/svgUtils";

const FooterMobile = () => {
  return (
    <div className="relative h-[522px] py-[63px] px-[30px]  bg-[var(--text-dark)] flex flex-col justify-between overflow-hidden">
      <div className="flex flex-col gap-[32px]">
        <div className="flex flex-col justify-between gap-[25px]">
          <Image
            unoptimized
            src="/assets/logo/logo_light.svg"
            height={51}
            width={176}
            alt="footer-logo"
          />
          <TextBuilder fontSize="12px" color="light60" className="w-[90%]">
            Saharsh Cabins began with a simple yet powerful vision: to create
            innovative, sustainable, and customizable portable cabins that
            redefine living and working spaces.
          </TextBuilder>
        </div>

        <div className="flex flex-col gap-[12px] h-full">
          <TextBuilder
            fontSize="16px"
            weight="bold"
            color="primary"
            className="pb-[8px]"
          >
            Quick links
          </TextBuilder>
          {["Our Work", "Contact Us", "About Us"].map((link, index) => (
            <TextBuilder key={index} fontSize="12px" color="light">
              {link}
            </TextBuilder>
          ))}
        </div>
      </div>

      <div className="flex flex-row items-end gap-1 z-10">
        <TextBuilder fontSize="12px" color="light">
          Copyright
        </TextBuilder>
        <Copyright />
        <TextBuilder fontSize="12px" color="light">
          2025 All Rights Reserved
        </TextBuilder>
      </div>

      {/* Absolute bottom-right image */}
 <Image
  unoptimized
  src="/assets/footer/logo_bg.png"
  alt="footer-decor"
  width={346}
  height={322}
  className="absolute bottom-0 right-[-30] w-[346px] h-[322px] object-contain opacity-10 z-0"
/>

    </div>
  );
};

export default FooterMobile;
