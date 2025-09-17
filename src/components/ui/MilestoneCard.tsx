import React from "react";
import TextBuilder from "../shared/TextBuilder";
import { ArrowDown, ArrowNew } from "@/utils/svgUtils";

interface MilestoneCardProps {
  year: string;
  title: string;
  description: string;
  isActive: boolean;
  isStacked: boolean;
}
const MilestoneCard: React.FC<MilestoneCardProps> = ({
  year,
  title,
  description,
  isActive,
}) => {
  return (
    <div className="fle flex-row ">
 <div className="flex flex-col border border-[var(--color-primary)] bg-[var(--text-primary)] rounded-[24px] gap-[57px] px-[40px] py-[50px] w-full jusitfy-between">
      <div className="flex flex-row items-center justify-between">
        <TextBuilder fontSize="72px" color="primary" weight="bold">
          2013
        </TextBuilder>
        <div className="px-[12px] py-[25px]  rounded-[40px] flex items-center justify-center border border-[var(--color-primary)] ">
          <div className="w-[25px] h-[25px] text-[var(--text-light)] flex items-center">
            <ArrowDown />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[29px]">
        <TextBuilder fontSize="30px" weight="bold" color="light">
          Company Inception
        </TextBuilder>
        <TextBuilder fontSize="20px" color="lighter" className="leading-[1.25]">
          Laying the foundation for Saharsh Cabins with the first manufacturing
          plant in Mumbai
        </TextBuilder>
      </div>
    </div>
    <div className="bg-white">

    </div>
    </div>
   
  );
};

export default MilestoneCard;

// import React from "react";
// import TextBuilder from "../shared/TextBuilder";
// import { ArrowDown } from "@/utils/svgUtils";

// interface MilestoneCardProps {
//   year: string;
//   title: string;
//   description: string;
//   isActive: boolean;
//   isStacked: boolean;
//   onNext: () => void;
// }

// const MilestoneCard: React.FC<MilestoneCardProps> = ({
//   year,
//   title,
//   description,
//   isActive,
//   isStacked,
//   onNext,
// }) => {
//   return (
//     <div
//       className={`flex flex-col border border-[var(--color-primary)] 
//       bg-[var(--text-primary)] rounded-[24px] gap-[40px] px-[40px] py-[50px] 
//       transition-all duration-500 ${
//         isActive ? "opacity-100" : "opacity-60"
//       }`}
//     >
//       {/* Header */}
//       <div className="flex flex-row items-center justify-between">
//         <TextBuilder fontSize="72px" color="primary" weight="bold">
//           {year}
//         </TextBuilder>

//         {isActive && (
//           <button
//             onClick={onNext}
//             className="px-[12px] py-[25px] rounded-[40px] flex items-center justify-center border border-[var(--color-primary)]"
//           >
//             <div className="w-[25px] h-[25px] text-[var(--text-light)] flex items-center">
//               <ArrowDown />
//             </div>
//           </button>
//         )}
//       </div>

//       {/* Body */}
//       <div className="flex flex-col gap-[20px]">
//         <TextBuilder fontSize="30px" weight="bold" color="light">
//           {title}
//         </TextBuilder>
//         <TextBuilder fontSize="20px" color="lighter" className="leading-[1.25]">
//           {description}
//         </TextBuilder>
//       </div>
//     </div>
//   );
// };

// export default MilestoneCard;
