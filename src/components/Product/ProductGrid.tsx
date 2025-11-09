import React from "react";
import MultiColorText from "../shared/MultiColorText";

interface ProductGridProps {
  data: {
    titleDark: string;
    titleHighlight: string;
    images: (string | null)[]; // allow null/undefined for missing images
  };
}

const ProductGrid: React.FC<ProductGridProps> = ({ data }) => {
  const breakAfter = true;

  return (
    <div className="container mx-auto p-4 lg:p-[100px]">
      {/* Heading */}
      <MultiColorText
        className="text-start leading-[1.2]"
        fontSize="56px"
        items={[
          { text: `${data.titleDark} `, color: "dark", weight: "medium", breakAfter },
          { text: data.titleHighlight, color: "primary", weight: "semibold" },
        ]}
      />

      {/* Grid Layout */}
      <div className="grid grid-cols-2 gap-4 h-[990px] my-10">
        {/* Left Column */}
        <div className="flex flex-col gap-4">
          {/* Top Left - Large Vertical */}
          <div
            className="flex-1 rounded-[24px] shadow-md flex items-center justify-center bg-gray-200 bg-cover bg-center"
            style={{
              backgroundImage: data.images[0]
                ? `url(${data.images[0]})`
                : "none",
            }}
          ></div>

          {/* Bottom Left - Medium Horizontal */}
          <div
            className="h-1/3 rounded-[24px] shadow-md flex items-center justify-center bg-gray-200 bg-cover bg-center"
            style={{
              backgroundImage: data.images[1]
                ? `url(${data.images[1]})`
                : "none",
            }}
          ></div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-4">
          {/* Top Right - Small Horizontal */}
          <div
            className="h-1/3 rounded-[24px] shadow-md flex items-center justify-center bg-gray-200 bg-cover bg-center"
            style={{
              backgroundImage: data.images[2]
                ? `url(${data.images[2]})`
                : "none",
            }}
          ></div>

          {/* Bottom Right - Large Vertical */}
          <div
            className="flex-1 rounded-[24px] shadow-md flex items-center justify-center bg-gray-200 bg-cover bg-center"
            style={{
              backgroundImage: data.images[3]
                ? `url(${data.images[3]})`
                : "none",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;
