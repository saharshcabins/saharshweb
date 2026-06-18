import React, { useState } from "react";
import MultiColorText from "../shared/MultiColorText";
import MultiColorTextMobile from "../shared/MultiTextBuilderMobile";
import TextBuilder from "../shared/TextBuilder";

const principles = [
  {
    number: "01",
    title: "Precision Engineering",
    description:
      "Every structure is produced in controlled environments where tolerances, materials, and quality standards remain consistent from the first unit to the last.",
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
  const [activeId, setActiveId] = useState<number | null>(null);

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

      {/* Three principles — first card featured, two supporting below on mobile / beside on desktop */}
      <div className="flex flex-col gap-6 md:gap-8">
        {/* Featured first card — full width, larger number, gold border */}
        {(() => {
          const p = principles[0];
          const isActive = activeId === 0;
          return (
            <div
              key={0}
              className="group flex flex-col rounded-2xl transition-all duration-300 border cursor-pointer w-full"
              style={{
                background: "var(--text-dark)",
                padding: "48px 44px 52px",
                borderColor: isActive ? "var(--color-primary)" : "rgba(201,122,65,0.45)",
                boxShadow: "0 0 0 1px rgba(201,122,65,0.12)",
              }}
              onClick={() => setActiveId(isActive ? null : 0)}
            >
              <div className="flex flex-col md:flex-row md:items-start md:gap-16">
                <span
                  className="transition-colors duration-300 flex-shrink-0"
                  style={{
                    fontSize: 72,
                    fontWeight: 800,
                    lineHeight: 1,
                    letterSpacing: "-0.04em",
                    display: "block",
                    marginBottom: 24,
                    fontFamily: "var(--font-sans)",
                    color: isActive ? "var(--color-primary)" : "rgba(255,255,255,0.9)",
                  }}
                >
                  {p.number}
                </span>
                <div className="flex flex-col flex-1">
                  <div
                    className="transition-colors duration-300"
                    style={{
                      width: 48,
                      height: 3,
                      borderRadius: 2,
                      marginBottom: 20,
                      backgroundColor: isActive ? "var(--color-primary)" : "rgba(255,255,255,0.9)",
                    }}
                  />
                  <h3
                    className="transition-colors duration-300"
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: 22,
                      fontWeight: 700,
                      marginBottom: 16,
                      lineHeight: 1.3,
                      color: isActive ? "var(--color-primary)" : "rgba(255,255,255,1)",
                    }}
                  >
                    {p.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: 15,
                      lineHeight: 1.8,
                      color: "rgba(255,255,255,0.78)",
                      margin: 0,
                      maxWidth: "60ch",
                    }}
                  >
                    {p.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })()}

        {/* Two supporting cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {principles.slice(1).map((p, idx) => {
            const i = idx + 1;
            const isActive = activeId === i;
            return (
              <div
                key={i}
                className="group flex flex-col rounded-2xl transition-all duration-300 border cursor-pointer w-full"
                style={{
                  background: "var(--text-dark)",
                  padding: "40px 36px 44px",
                  borderColor: isActive ? "var(--color-primary)" : "var(--light-border)",
                }}
                onClick={() => setActiveId(isActive ? null : i)}
              >
                <span
                  className="transition-colors duration-300"
                  style={{
                    fontSize: 52,
                    fontWeight: 800,
                    lineHeight: 1,
                    letterSpacing: "-0.03em",
                    display: "block",
                    marginBottom: 24,
                    fontFamily: "var(--font-sans)",
                    color: isActive ? "var(--color-primary)" : "rgba(255,255,255,0.9)",
                  }}
                >
                  {p.number}
                </span>
                <div
                  className="transition-colors duration-300"
                  style={{
                    width: 36,
                    height: 3,
                    borderRadius: 2,
                    marginBottom: 32,
                    backgroundColor: isActive ? "var(--color-primary)" : "rgba(255,255,255,0.9)",
                  }}
                />
                <h3
                  className="transition-colors duration-300"
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 18,
                    fontWeight: 700,
                    marginBottom: 16,
                    lineHeight: 1.3,
                    color: isActive ? "var(--color-primary)" : "rgba(255,255,255,1)",
                  }}
                >
                  {p.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 14,
                    lineHeight: 1.8,
                    color: "rgba(255,255,255,0.78)",
                    margin: 0,
                  }}
                >
                  {p.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
    </>
  );
};

export default SaharshAdvantage;
