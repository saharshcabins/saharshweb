import React from "react";
import MultiColorText from "../shared/MultiColorText";
import TextBuilder from "../shared/TextBuilder";

const checkIcon = (color = "var(--color-primary)") => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <circle cx="9" cy="9" r="9" fill={color} fillOpacity="0.12" />
    <path
      d="M5 9.5L7.5 12L13 6.5"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const crossIcon = (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <circle cx="9" cy="9" r="9" fill="#ef4444" fillOpacity="0.10" />
    <path
      d="M6 6l6 6M12 6l-6 6"
      stroke="#ef4444"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
);

const comparisonData = [
  {
    saharsh: "30–60% Faster Delivery",
    traditional: "12–24+ Months",
  },
  {
    saharsh: "Fixed, upfront pricing. No surprises.",
    traditional: "Prone to budget overruns & hidden costs.",
  },
  {
    saharsh: "Precision factory manufacturing.",
    traditional: "Variable on-site quality & conditions.",
  },
  {
    saharsh: "Minimal disruption. Weeks of quiet assembly.",
    traditional: "Months of noise, dust & traffic.",
  },
  {
    saharsh: "Up to 90% less material waste.",
    traditional: "Significant on-site wastage.",
  },
  {
    saharsh: "Engineered steel for India's climate.",
    traditional: "Susceptible to weather delays & damage.",
  },
];

const SaharshAdvantage = () => {
  return (
    <div className="w-full flex flex-col items-center gap-14 py-20 px-4">
      {/* Title */}
      <div className="flex flex-col items-center gap-3 text-center">
        <MultiColorText
          fontSize="75px"
          items={[
            { text: "The ", color: "dark", weight: "bold" },
            { text: "Saharsh ", color: "primary", weight: "bold" },
            { text: "Advantage", color: "dark", weight: "bold" },
          ]}
        />
        <TextBuilder fontSize="20px" >
 Build faster. Spend smarter. Get better results.        </TextBuilder>
      </div>

      {/* Cards Row */}
<div className="w-full max-w-[960px] grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        {/* ── Saharsh Cabins (highlighted) ── */}
        <div
          className="relative rounded-[24px] overflow-hidden"
          style={{
            background: "var(--color-primary)",
            boxShadow: "0 24px 60px -10px rgba(var(--color-primary-rgb, 0,0,0), 0.35)",
          }}
        >
          {/* Decorative circle */}
          <div
            className="absolute -top-10 -right-10 w-40 h-40 rounded-full opacity-20"
            style={{ background: "rgba(255,255,255,0.25)" }}
          />
          <div
            className="absolute -bottom-8 -left-8 w-28 h-28 rounded-full opacity-10"
            style={{ background: "rgba(255,255,255,0.3)" }}
          />

          <div className="relative z-10 p-8 flex flex-col gap-6">
            {/* Badge */}
            <div className="flex items-center gap-2">
              <span
                className="text-xs font-semibold px-3 py-1 rounded-full"
                style={{ background: "rgba(255,255,255,0.18)", color: "#fff" }}
              >
                ✦ Recommended
              </span>
            </div>

            {/* Heading */}
            <div>
              <TextBuilder fontSize="28px" weight="bold" color="light">
                Saharsh Cabins
              </TextBuilder>
              <TextBuilder fontSize="14px" weight="normal" color="light">
                Prefabricated. Precise. Future-ready.
              </TextBuilder>
            </div>

            {/* Divider */}
            <div className="h-px w-full bg-white opacity-20" />

            {/* Feature list */}
            <ul className="flex flex-col gap-4">
              {comparisonData.map((row, i) => (
                <li key={i} className="flex items-start gap-3">
                  {checkIcon("#fff")}
                  <TextBuilder fontSize="14px" weight="medium" color="light">
                    {row.saharsh}
                  </TextBuilder>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Traditional Construction ── */}
        <div
          className="relative rounded-[24px] overflow-hidden border"
          style={{
            background: "#fff",
            borderColor: "var(--color-border, #e5e7eb)",
            boxShadow: "0 8px 32px -8px rgba(0,0,0,0.08)",
          }}
        >
          {/* Decorative circle */}
          <div
            className="absolute -top-10 -right-10 w-36 h-36 rounded-full opacity-5"
            style={{ background: "#000" }}
          />

          <div className="relative z-10 p-8 flex flex-col gap-6">
            {/* Badge */}
            <div className="flex items-center gap-2">
              <span
                className="text-xs font-semibold px-3 py-1 rounded-full"
                style={{ background: "#f3f4f6", color: "#6b7280" }}
              >
                Traditional
              </span>
            </div>

            {/* Heading */}
            <div>
              <TextBuilder fontSize="28px" weight="bold" color="dark">
                Traditional Construction
              </TextBuilder>
              <TextBuilder fontSize="14px" weight="normal" color="muted">
                Conventional builds. Known trade-offs.
              </TextBuilder>
            </div>

            {/* Divider */}
            <div className="h-px w-full bg-gray-100" />

            {/* Feature list */}
            <ul className="flex flex-col gap-4">
              {comparisonData.map((row, i) => (
                <li key={i} className="flex items-start gap-3">
                  {crossIcon}
                  <TextBuilder fontSize="14px" weight="normal" color="dark">
                    {row.traditional}
                  </TextBuilder>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaharshAdvantage;