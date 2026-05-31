import Image from "next/image";
import React from "react";
import TextBuilder from "../shared/TextBuilder";

interface CabinSectionProps {
  data: {
    description: string;
    features: string[];
    image?: string | null;
  };
}

export default function CabinSection({ data }: CabinSectionProps) {
  return (
    <div className="py-16 gap-14 flex flex-col items-center">
      {/* Description + Features */}
      <div className="flex flex-row justify-between w-full px-[100px]">
        {/* Description */}
        <div>
          <TextBuilder fontSize="24px" color="dark" className="leading-[1.25]">
            {data.description}
          </TextBuilder>
        </div>

        {/* Feature Circles */}
        <div className="flex flex-row gap-[50px]">
          {data.features.map((label, idx) => (
            <div key={idx} className="flex flex-col items-center gap-[7px]">
              <div className="w-[60px] h-[60px] border border-[var(--color-primary)] rounded-full"></div>
              <TextBuilder fontSize="20px" color="dark" weight="medium">
                {label}
              </TextBuilder>
            </div>
          ))}
        </div>
      </div>

      {/* Image */}
      {data.image ? (
        <Image
          unoptimized
          src={data.image}
          alt="product"
          width={1097}
          height={557}
          className="rounded-[24px] object-cover"
        />
      ) : (
        <div className="w-[1097px] h-[557px] bg-gray-200 rounded-[24px]" />
      )}
    </div>
  );
}
