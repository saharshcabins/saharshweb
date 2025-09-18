import React from "react";
import Image from "next/image";
import MultiColorText from "../shared/MultiColorText";
import { Cube, HomeIcon, NoteIcon, Repair } from "@/utils/svgUtils";
import TextBuilderMobile from "../shared/TextBuilderMobile";

const OurProcessMobile = () => {
  const processItems = [
    {
      title: "Requirements & Assessments",
      description:
        "Understanding your requirements, budget, and project scope led to the initial discussion of design possibilities and technical specifications.",
      icon: <NoteIcon />,
    },
    {
      title: "Designs & Quotations",
      description:
        "After developing conceptual designs and layouts, a detailed quotation outlining costs and timelines was provided.",
      icon: <HomeIcon />,
    },
    {
      title: "Manufacturing & Quality Control",
      description:
        "Ensuring top-notch quality during the manufacturing process with thorough checks and adherence to standards.",
      icon: <Cube />,
    },
    {
      title: "Delivery & Installation",
      description:
        "Careful delivery and professional installation to ensure the project is completed efficiently and safely.",
      icon: <Repair />,
    },
  ];

  return (
    <div className="w-full flex flex-col gap-[30px]">
      {/* Header */}
      <div className="flex flex-row items-start justify-between w-[90%] gap-4 mx-auto">
        <div className="flex flex-col items-start justify-between gap-[16px]">
          <MultiColorText
            fontSize="22px"
            items={[
              { text: "Our Proven", color: "dark", weight: "medium" },
              { text: " Process", color: "primary", weight: "bold" },
            ]}
          />
          <TextBuilderMobile fontSize="12px" color="dark">
            From sleek architecture to luxurious interiors & scenic landscapes
            come together to create living spaces that inspire and rejuvenate.
          </TextBuilderMobile>
        </div>
        <Image
          unoptimized
          src="/assets/logo/logo_icon.svg"
          alt="logo-saharsh"
          width={49}
          height={45}
          className="object-contain"
        />
      </div>

      {/* Process Steps */}
      <div className="flex flex-col">
        {processItems.map((item, index) => (
          <div
            key={index}
            className="flex flex-col px-[20px] text-end py-[24px] gap-[42px] border-b border-[var(--text-dark-50)]"
          >
            <div className="flex flex-row justify-between">
              <div className="w-[34px] h-[38px] text-[var(--color-primary)]">
                {item.icon}
              </div>
              <TextBuilderMobile fontSize="16px" weight="bold" color="dark">
                {item.title.includes("&") ? (
                  <>
                    {item.title.split("&")[0].trim()} &<br />
                    {item.title.split("&")[1].trim()}
                  </>
                ) : (
                  item.title
                )}
              </TextBuilderMobile>
            </div>
            <TextBuilderMobile fontSize="12px" color="dark-light">
              {item.description}
            </TextBuilderMobile>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurProcessMobile;
