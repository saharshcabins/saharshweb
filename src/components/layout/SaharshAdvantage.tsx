import React from "react";
import MultiColorText from "../shared/MultiColorText";
import MultiColorTextMobile from "../shared/MultiTextBuilderMobile";
import TextBuilder from "../shared/TextBuilder";

const principles = [
  {
    number: "01",
    title: "Precision Engineering",
    description:
      "Every structure is produced within controlled manufacturing environments where tolerances, materials, and quality standards remain consistent from the first unit to the last.",
  },
  {
    number: "02",
    title: "Accelerated Timelines",
    description:
      "Manufacturing and site preparation progress in parallel, allowing projects to become operational months sooner than conventional construction.",
  },
  {
    number: "03",
    title: "Financial Certainty",
    description:
      "Factory-controlled production reduces variables, protects budgets, and provides a level of cost predictability rarely achievable through traditional site construction.",
  },
];

const SaharshAdvantage = () => {
  return (
    <>
    {/* ==========================================
       HOME SECTION: WHY SAHARSH
       Purpose:
       Competitive differentiation and institutional positioning.
       Primary conversion objective:
       Eliminate alternatives in the buyer's mind.
    ========================================== */}
    <section
      id="why-saharsh"
      data-section="why-saharsh"
      className="px-[7%] py-[60px] md:py-[80px] lg:py-[100px]"
      style={{
        background: "var(--section-light)",
      }}
    >
      {/* Heading */}
      <div style={{ marginBottom: 28, textAlign: "center" }}>
        <p className="eyebrow-label mb-4">The Difference</p>
        <MultiColorTextMobile
          fontSize="30px"
          className="text-center sm:block md:block lg:hidden"
          items={[
            { text: "Built Faster.", color: "dark", weight: "bold" },
            { text: " Finished Better.", color: "primary", weight: "bold" },
          ]}
        />
        <MultiColorText
          fontSize="clamp(48px, 5.208vw, 75px)"
          className="text-center max-lg:hidden lg:block"
          items={[
            { text: "Built Faster.", color: "dark", weight: "bold" },
            { text: " Finished Better.", color: "primary", weight: "bold" },
          ]}
        />
      </div>

      {/* Positioning statement */}
      <div style={{ margin: "0 auto 72px", textAlign: "center", lineHeight: 1.6 }}>
        <TextBuilder fontSize="20px" color="dark-light">
          We are not the cheapest option in modular. We are the right option
          for operators who cannot afford inconsistency in quality, delivery,
          or guest experience.
        </TextBuilder>
      </div>

      {/* Three principles — card variant */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {principles.map((p, i) => (
          <div
            key={i}
            style={{
              background: "var(--text-dark)",
              borderRadius: 16,
              padding: "40px 36px 44px",
              display: "flex",
              flexDirection: "column",
              transition: "transform 0.25s ease, box-shadow 0.25s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
              (e.currentTarget as HTMLDivElement).style.boxShadow = "0 16px 48px rgba(0,0,0,0.22)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
              (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
            }}
          >
            {/* Number */}
            <span
              style={{
                fontSize: 52,
                fontWeight: 800,
                color: "var(--color-primary)",
                lineHeight: 1,
                letterSpacing: "-0.03em",
                display: "block",
                marginBottom: 24,
                fontFamily: "var(--font-sans)",
              }}
            >
              {p.number}
            </span>

            {/* Orange accent bar */}
            <div
              style={{
                width: 36,
                height: 3,
                background: "var(--color-primary)",
                borderRadius: 2,
                marginBottom: 32,
              }}
            />

            {/* Title */}
            <h3
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 18,
                fontWeight: 700,
                color: "var(--text-light)",
                marginBottom: 16,
                lineHeight: 1.3,
              }}
            >
              {p.title}
            </h3>

            {/* Description */}
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 14,
                lineHeight: 1.8,
                color: "rgba(255,255,255,0.62)",
                margin: 0,
              }}
            >
              {p.description}
            </p>
          </div>
        ))}
      </div>
    </section>
    </>
  );
};

export default SaharshAdvantage;
