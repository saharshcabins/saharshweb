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


// "use client";
// import React, { useRef, useEffect, useState } from "react";
// import MultiColorText from "../shared/MultiColorText";
// import TextBuilder from "../shared/TextBuilder";
// import OurProcessCard from "../ui/OurProcessCard";
// import { Cube, HomeIcon, NoteIcon, Repair } from "@/utils/svgUtils";
// import Image from "next/image";

// const processItems = [
//   {
//     title: "Requirements & Assessments",
//     description:
//       "Understanding your requirements, budget, and project scope led to the initial discussion of design possibilities and technical specifications.",
//     imageSrc: "/assets/our_process/requirement.png",
//     icon: <NoteIcon />,
//   },
//   {
//     title: "Designs & Quotations",
//     description:
//       "After developing conceptual designs and layouts, a detailed quotation outlining costs and timelines was provided.",
//     imageSrc: "/assets/our_process/design.png",
//     icon: <HomeIcon />,
//   },
//   {
//     title: "Manufacturing & Quality Control",
//     description:
//       "Ensuring top-notch quality during the manufacturing process with thorough checks and adherence to standards.",
//     imageSrc: "/assets/our_process/manufacturing.png",
//     icon: <Cube />,
//   },
//   {
//     title: "Delivery & Installation",
//     description:
//       "Careful delivery and professional installation to ensure the project is completed efficiently and safely.",
//     imageSrc: "/assets/our_process/delivery.png",
//     icon: <Repair />,
//   },
// ];

// const OurProcess = () => {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const stickyRef = useRef<HTMLDivElement>(null);
//   const [scrollWidth, setScrollWidth] = useState(0);

//   useEffect(() => {
//     if (stickyRef.current) {
//       setScrollWidth(stickyRef.current.scrollWidth - window.innerWidth);
//     }
//   }, []);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (!containerRef.current || !stickyRef.current) return;
//       const { top } = containerRef.current.getBoundingClientRect();
//       const progress =
//         Math.min(Math.max(-top, 0), scrollWidth) / scrollWidth; // 0 → 1
//       stickyRef.current.style.transform = `translateX(-${
//         progress * scrollWidth
//       }px)`;
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [scrollWidth]);

//   return (
//     <div className="relative w-full pb-30" ref={containerRef}>
//       {/* set height = scrollable width so we can scroll enough */}
//       <div style={{ height: `calc(100vh + ${scrollWidth}px)` }}>
//         {/* Sticky header */}
//         <div className="sticky top-0 h-screen flex flex-col bg-white">
//           {/* Top Section */}
//           <div className="flex flex-row  justify-between items-center p-[5%] pb-[6%] gap-8 w-[90%]">
//             <div className="flex flex-col items-start justify-between gap-8">
//               <MultiColorText
//                 fontSize="56px"
//                 items={[
//                   { text: "Our Proven", color: "dark", weight: "medium" },
//                   { text: " Process", color: "primary", weight: "bold" },
//                 ]}
//               />
//               <TextBuilder fontSize="24px" color="dark">
//                 From sleek architecture to luxurious interiors &{" "}
//                 <br className="hidden lg:block" />
//                 scenic landscapes come together to create
//                 <br className="hidden lg:block" /> living spaces that inspire
//                 and rejuvenate.
//               </TextBuilder>
//             </div>
//             <Image
//               src="/assets/logo/logo_icon.svg"
//               alt="logo-saharsh"
//               width={200}
//               height={200}
//               className="object-contain"
//             />
//           </div>

//           {/* Horizontal Cards */}
//           <div
//             ref={stickyRef}
//             className="flex flex-row gap-0 transition-transform duration-75"
//           >
//             {processItems.map((item, index) => (
//               <OurProcessCard
//                 key={`process-${index}`}
//                 index={index}
//                 icon={item.icon}
//                 title={item.title}
//                 description={item.description}
//                 imageSrc={item.imageSrc}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OurProcess;


// "use client";

// import React, { useRef, useEffect, useState } from "react";
// import MultiColorText from "../shared/MultiColorText";
// import TextBuilder from "../shared/TextBuilder";
// import OurProcessCard from "../ui/OurProcessCard";
// import { Cube, HomeIcon, NoteIcon, Repair } from "@/utils/svgUtils";
// import Image from "next/image";

// const processItems = [
//   {
//     title: "Requirements & Assessments",
//     description:
//       "Understanding your requirements, budget, and project scope led to the initial discussion of design possibilities and technical specifications.",
//     imageSrc: "/assets/our_process/requirement.png",
//     icon: <NoteIcon />,
//   },
//   {
//     title: "Designs & Quotations",
//     description:
//       "After developing conceptual designs and layouts, a detailed quotation outlining costs and timelines was provided.",
//     imageSrc: "/assets/our_process/design.png",
//     icon: <HomeIcon />,
//   },
//   {
//     title: "Manufacturing & Quality Control",
//     description:
//       "Ensuring top-notch quality during the manufacturing process with thorough checks and adherence to standards.",
//     imageSrc: "/assets/our_process/manufacturing.png",
//     icon: <Cube />,
//   },
//   {
//     title: "Delivery & Installation",
//     description:
//       "Careful delivery and professional installation to ensure the project is completed efficiently and safely.",
//     imageSrc: "/assets/our_process/delivery.png",
//     icon: <Repair />,
//   },
// ];

// const OurProcess = () => {
//   const sectionRef = useRef<HTMLDivElement>(null);
//   const [activeCardIndex, setActiveCardIndex] = useState(0);
//   const [cardScrollProgress, setCardScrollProgress] = useState(0);

//   useEffect(() => {
//     const scrollSensitivity = 0.05;

//     const handleWheel = (e: WheelEvent) => {
//       if (!sectionRef.current) return;

//       const rect = sectionRef.current.getBoundingClientRect();
//       const inView = rect.top <= 0 && rect.bottom >= window.innerHeight;

//       if (inView) {
//         e.preventDefault();
//         const scrollDelta = e.deltaY;

//         setCardScrollProgress((prev) => {
//           let newProgress = prev + (scrollDelta > 0 ? scrollSensitivity : -scrollSensitivity);
//           newProgress = Math.min(Math.max(newProgress, 0), 1);
//           return newProgress;
//         });

//         if (cardScrollProgress >= 1 && activeCardIndex < processItems.length - 1) {
//           setActiveCardIndex((prev) => prev + 1);
//           setCardScrollProgress(0);
//         } else if (cardScrollProgress <= 0 && activeCardIndex > 0) {
//           setActiveCardIndex((prev) => prev - 1);
//           setCardScrollProgress(1);
//         }
//       }
//     };

//     window.addEventListener("wheel", handleWheel, { passive: false });

//     return () => {
//       window.removeEventListener("wheel", handleWheel);
//     };
//   }, [activeCardIndex, cardScrollProgress]);

//   const fullWidth = 400;
//   const collapsedWidth = 131;
//   const gap = 20;

//   let translateX = 0;
//   for (let i = 0; i < activeCardIndex; i++) {
//     translateX += fullWidth - collapsedWidth + gap;
//   }
//   translateX += cardScrollProgress * (fullWidth - collapsedWidth + gap);

//   return (
//     <div
//       ref={sectionRef}
//       className="relative w-full overflow-hidden"
//       style={{ height: `${processItems.length * 100}vh` }}
//     >
//       <div className="sticky top-0 h-screen flex flex-col items-center justify-center">
//         <div className="flex flex-row justify-between items-center p-[5%] pb-[2%] gap-8 w-[90%]">
//           <div className="flex flex-col items-start justify-between gap-8">
//             <MultiColorText
//               fontSize="56px"
//               items={[
//                 { text: "Our Proven", color: "dark", weight: "medium" },
//                 { text: " Process", color: "primary", weight: "bold" },
//               ]}
//             />
//             <TextBuilder className="" fontSize="24px" color="dark">
//               From sleek architecture to luxurious interiors & <br className="hidden lg:block" />
//               scenic landscapes come together to create <br className="hidden lg:block" /> living spaces that inspire and
//               rejuvenate.
//             </TextBuilder>
//           </div>
//           <Image
//             src="/assets/logo/logo_icon.svg"
//             alt="logo-saharsh"
//             width={200}
//             height={200}
//             className="object-contain"
//           />
//         </div>
//         <div
//           className="flex mt-[60px] w-full transition-transform duration-700 ease-in-out"
//           style={{ transform: `translateX(-${translateX}px)` }}
//         >
//           {processItems.map((item, index) => {
//             let width = fullWidth;
//             if (index < activeCardIndex) {
//               width = collapsedWidth;
//             } else if (index === activeCardIndex) {
//               width = fullWidth - (fullWidth - collapsedWidth) * cardScrollProgress;
//             }

//             return (
//               <div
//                 key={`process-card-${index}`}
//                 className="flex-shrink-0"
//                 style={{
//                   width: `${width}px`,
//                 }}
//               >
//                 <OurProcessCard
//                   imageSrc={item.imageSrc}
//                   index={index}
//                   icon={item.icon}
//                   title={item.title}
//                   description={item.description}
//                   isCollapsed={index < activeCardIndex}
//                 />
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OurProcess;