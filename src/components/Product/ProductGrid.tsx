// components/ProductGrid.tsx

import React from "react";
import MultiColorText from "../shared/MultiColorText";

// Assuming you have a default gray color you like, or customize it in tailwind.config.js
// For example, if you want a custom gray that matches your image:
// In tailwind.config.js:
// theme: {
//   extend: {
//     colors: {
//       'custom-gray': '#E0E0E0', // Or whatever shade you prefer
//     },
//   },
// },



const ProductGrid = () => {
  const breakAfter = true; // or false

  return (
    <div className="container  mx-auto  p-4 lg:p-[100px]">
      {" "}
      {/* Responsive padding */}
      {/* Heading */}
      <MultiColorText
        className="text-start leading-[1.2]"
        fontSize="56px"
        items={[
          { text: "Spectacular ", color: "dark", weight: "medium", breakAfter },
          { text: "Interiors", color: "primary", weight: "semibold" },
        ]}
      />
      {/* Grid Layout */}
      <div className="grid grid-cols-2 gap-4 h-[990px] my-10 ">
        {" "}
        {/* Fixed height for demonstration, adjust as needed */}
        {/* Left Column (Main vertical item and bottom horizontal item) */}
        <div className="flex flex-col gap-4">
          {/* Top Left - Large Vertical */}
          <div className="flex-1 bg-gray-200 rounded-[24px] shadow-md flex items-center justify-center">
            {/* Placeholder for Image 1 */}
          </div>
          {/* Bottom Left - Medium Horizontal */}
          <div className="h-1/3 bg-gray-200 rounded-[24px] shadow-md flex items-center justify-center">
            {/* Placeholder for Image 2 */}
          </div>
        </div>
        {/* Right Column (Two horizontal items) */}
        <div className="flex flex-col gap-4">
          {/* Top Right - Small Horizontal */}
          <div className="h-1/3 bg-gray-200 rounded-[24px] shadow-md flex items-center justify-center">
            {/* Placeholder for Image 3 */}
          </div>
          {/* Bottom Right - Small Horizontal */}
          <div className="flex-1 bg-gray-200 rounded-[24px] shadow-md flex items-center justify-center">
            {/* Placeholder for Image 4 */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;
