import React from "react";
import MultiColorText from "../shared/MultiColorText";
import TextBuilder from "../shared/TextBuilder";
import OurProcessCard from "../ui/OurProcessCard";
import { Cube, HomeIcon, NoteIcon, Repair } from "@/utils/svgUtils";
import Image from "next/image";

const processItems = [
  {
    title: "Requirements & Assessments",
    description:
      "Understanding your requirements, budget, and project scope led to the initial discussion of design possibilities and technical specifications.",
    imageSrc: "/assets/our_process/requirement.png",
    icon: <NoteIcon />,
  },
  {
    title: "Designs & Quotations",
    description:
      "After developing conceptual designs and layouts, a detailed quotation outlining costs and timelines was provided.",
    imageSrc: "/assets/our_process/design.png",
    icon: <HomeIcon />,
  },
  {
    title: "Manufacturing & Quality Control",
    description:
      "Ensuring top-notch quality during the manufacturing process with thorough checks and adherence to standards.",
    imageSrc: "/assets/our_process/manufacturing.png",
    icon: <Cube />,
  },
  {
    title: "Delivery & Installation",
    description:
      "Careful delivery and professional installation to ensure the project is completed efficiently and safely.",
    imageSrc: "/assets/our_process/delivery.png",
    icon: <Repair />,
  },
];

const OurProcess = () => {
  return (
    <div className="flex flex-col  items-center">
      <div className="flex flex-row justify-between items-center p-[5%] pb-[2%] gap-8 w-[90%]  ">
        <div className="flex flex-col items-start justify-between gap-8">
          <MultiColorText
            fontSize="56px"
            items={[
              { text: "Our Proven", color: "dark", weight: "medium" },
              { text: " Process", color: "primary", weight: "bold" },
            ]}
          />
          <TextBuilder className="" fontSize="24px" color="dark">
            From sleek architecture to luxurious interiors &{" "}
            <br className="hidden lg:block" />
            scenic landscapes come together to create{" "}
            <br className="hidden lg:block" /> living spaces that inspire and
            rejuvenate.
          </TextBuilder>
        </div>
        <Image
          src="/assets/logo/logo_icon.svg"
          alt="logo-saharsh"
          width={200}
          height={200}
          className="object-contain"
        />
      </div>

<div className="flex flex-row mt-[60px] w-full overflow-hidden">
  {processItems.map((item, index) => (
    <OurProcessCard
      key={`process-${index}`}
      index={index}
      icon={item.icon}
      title={item.title}
      description={item.description}
      imageSrc={item.imageSrc}
    />
  ))}
</div>



    </div>
  );
};

export default OurProcess;
