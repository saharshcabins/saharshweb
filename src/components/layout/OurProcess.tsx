import React from "react";
import MultiColorText from "../shared/MultiColorText";
import TextBuilder from "../shared/TextBuilder";
import OurProcessCard from "../ui/OurProcessCard";
import { Cube, HomeIcon, NoteIcon, Repair } from "@/utils/svgUtils";

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
      <div className="flex justify-between items-start gap-8 w-[90%] flex-wrap ">
        <MultiColorText
          fontSize="56px"
          weight="semibold"
          items={[
            { text: "Our", color: "dark" },
            { text: " Process", color: "primary" },
          ]}
        />
        <TextBuilder
          className="w-[50%] min-w-[300px]"
          fontSize="24px"
          color="dark"
        >
          We believe in a transparent and collaborative process, ensuring that
          your vision for a portable cabin is realized with precision and
          efficiency.
        </TextBuilder>
      </div>
      <div className="w-full mx-auto h-[1px] rounded-full bg-[rgba(0,0,0,0.3)] mt-[10px]" />

      <div className="flex flex-col gap-[60px] w-[90%]   mt-[60px]">
        {processItems.map((item, index) => (
          <React.Fragment key={`process-${index}`}>
            <OurProcessCard
              icon={item.icon}
              title={item.title}
              description={item.description}
              imageSrc={item.imageSrc}
            />
            {/* Divider except after the last item */}
            {index !== processItems.length - 1 && (
              <div className="w-full mx-auto h-[1px] rounded-full bg-[rgba(0,0,0,0.3)]" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default OurProcess;
