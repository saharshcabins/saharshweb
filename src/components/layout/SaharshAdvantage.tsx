import React from "react";
import MultiColorText from "../shared/MultiColorText";
import TextBuilder from "../shared/TextBuilder";

const SaharshAdvantage = () => {
  const comparisonData = [
    {
      feature: "Construction Time",
      saharsh: "30-60% Faster Delivery",
      traditional: "12-24+ Months",
    },
    {
      feature: "Cost Predictability",
      saharsh: "Fixed, upfront pricing. No surprises.",
      traditional: "Prone to budget overruns and hidden costs.",
    },
    {
      feature: "Quality Control",
      saharsh: "Precision factory manufacturing to exacting standards.",
      traditional: "Variable quality dependent on on-site skill and conditions.",
    },
    {
      feature: "On-Site Disruption",
      saharsh: "Minimal. Weeks of quiet assembly.",
      traditional: "Months of noise, dust, and traffic.",
    },
    {
      feature: "Sustainability",
      saharsh: "Up to 90% less material waste; reduced energy use.",
      traditional: "Significant on-site wastage and higher carbon footprint.",
    },
    {
      feature: "All-Weather Durability",
      saharsh: "Engineered with high-quality steel for India's climate.",
      traditional: "Susceptible to weather-related delays and damage.",
    },
  ];
 const comparisonDataMobile = [
    {
      feature: "Construction Time",
      saharsh: "30-60% Faster Delivery",
      traditional: "12-24+ Months",
    },
    {
      feature: "Cost Predictability",
      saharsh: "Fixed, upfront pricing. No surprises.",
      traditional: "Prone to budget overruns and hidden costs.",
    },
    {
      feature: "Quality Control",
      saharsh: "Precision factory manufacturing to exacting standards.",
      traditional: "Variable quality dependent on on-site skill and conditions.",
    },
    {
      feature: "On-Site Disruption",
      saharsh: "Minimal. Weeks of quiet assembly.",
      traditional: "Months of noise, dust, and traffic.",
    }
  ];
  return (
    <div className="w-full flex flex-col items-center gap-12 py-16 px-4">
      {/* Title */}
      <MultiColorText
        fontSize="36px"
        items={[
          { text: "The ", color: "dark", weight: "semibold" },
          { text: "Saharsh ", color: "primary", weight: "bold" },
          { text: "Advantage", color: "dark", weight: "semibold" },
        ]}
      />

      {/* Table - Desktop */}
      <div className="hidden md:block w-full max-w-[1200px]">
        <div className="bg-white rounded-[24px]  border border-[var(--color-primary)] py-1 overflow-hidden">
          {/* Header */}
          <div className="grid grid-cols-3 bg-primary text-white">
            <div className="py-4 px-6">
              <TextBuilder weight="bold" color="primary">
                Feature
              </TextBuilder>
            </div>
            <div className="py-4 px-6">
              <TextBuilder weight="bold" color="primary">
                Saharsh Cabins
              </TextBuilder>
            </div>
            <div className="py-4 px-6">
              <TextBuilder weight="bold" color="primary">
                Traditional Construction
              </TextBuilder>
            </div>
          </div>

          {/* Rows */}
          {comparisonData.map((row, index) => (
            <div
              key={index}
              className={`grid grid-cols-3 ${
                index % 2 === 0 ? "bg-gray-50" : "bg-white"
              }`}
            >
              <div className="py-4 px-6 border-b border-gray-200">
                <TextBuilder weight="semibold" color="dark">
                  {row.feature}
                </TextBuilder>
              </div>
              <div className="py-4 px-6 border-b border-gray-200">
                <TextBuilder weight="medium" color="dark">
                  {row.saharsh}
                </TextBuilder>
              </div>
              <div className="py-4 px-6 border-b border-gray-200">
                <TextBuilder weight="normal" color="dark">
                  {row.traditional}
                </TextBuilder>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cards - Mobile */}
      <div className="md:hidden w-full max-w-[600px] space-y-6">
        {comparisonDataMobile.map((row, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6">
            <div className="mb-4 pb-2 border-b-2 border-primary">
              <TextBuilder fontSize="24px" weight="bold" color="dark">
                {row.feature}
              </TextBuilder>
            </div>
            
            <div className="space-y-3">
              <div>
                <TextBuilder fontSize="20px" weight="semibold" color="primary" className="block mb-1">
                  Saharsh Cabins
                </TextBuilder>
                <TextBuilder weight="medium" fontSize="22px" color="dark">
                  {row.saharsh}
                </TextBuilder>
              </div>

              <div>
                <TextBuilder fontSize="20px" weight="semibold" color="muted" className="block mb-1">
                  Traditional Construction
                </TextBuilder>
                <TextBuilder weight="normal" color="dark" fontSize="22px">
                  {row.traditional}
                </TextBuilder>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SaharshAdvantage;