import React from "react";
import MultiColorText from "../shared/MultiColorText";
import TextBuilder from "../shared/TextBuilder";
import TextBuilderMobile from "../shared/TextBuilderMobile";
import MultiColorTextMobile from "../shared/MultiTextBuilderMobile";

const checkIcon = () => (
  <svg
    style={{ flexShrink: 0, marginTop: 2 }}
    width="16"
    height="16"
    viewBox="0 0 18 18"
    fill="none"
  >
    <circle cx="9" cy="9" r="9" fill="rgba(255,255,255,0.2)" />
    <path
      d="M5 9.5L7.5 12L13 6.5"
      stroke="#fff"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const crossIcon = (
  <svg
    style={{ flexShrink: 0, marginTop: 2 }}
    width="16"
    height="16"
    viewBox="0 0 18 18"
    fill="none"
  >
    <circle cx="9" cy="9" r="9" fill="rgba(239,68,68,0.1)" />
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
    saharsh: "Get operational 30–60% faster — no waiting, no delays	",
    traditional: "Stuck for 12–24+ months before you even start operating	",
  },
  {
    saharsh: "Lock your budget upfront — no hidden costs, ever",
    traditional: "Budgets spiral out of control — surprises at every stage",
  },
  {
    saharsh: "Factory-built precision — zero compromise on quality	",
    traditional: "Quality depends on labor & site conditions — no consistency	",
  },
  {
    saharsh: "Install in weeks, not months — minimal site chaos	",
    traditional: "Endless noise, dust & disruption — impacts your business	",
  },
  {
    saharsh: "Cut waste by up to 90% — smarter, cleaner construction	",
    traditional: "Massive material wastage — inefficient and costly	",
  },
  {
    saharsh: "Built for Site conditions — durable, reliable, proven	",
    traditional: "Weather delays your progress — timelines keep slipping	",
  },
  {
    saharsh: "Scale instantly when you grow — no rework, no hassle	",
    traditional: "Hard to expand or modify later — you’re locked in	",
  },
  {
    saharsh: "Premium finish, every single time — consistency you can trust	",
    traditional: "Final output? Uncertain. — you pay more, risk more	",
  },
];

const SaharshAdvantage = () => {
  return (
    <div className="w-full flex flex-col items-center gap-14 md:py-20 px-4">
      {/* Title */}
      <div className="flex flex-col items-center gap-3 text-center md:hidden">
        <MultiColorTextMobile
          fontSize="30px"
          items={[
            { text: "The ", color: "dark", weight: "bold" },
            { text: "Saharsh ", color: "primary", weight: "bold" },
            { text: "Advantage", color: "dark", weight: "bold" },
          ]}
        />
        <TextBuilderMobile fontSize="14px">
          Why wait months when you can be ready in weeks?{" "}
        </TextBuilderMobile>
      </div>
      <div className="flex flex-col items-center gap-3 text-center max-md:hidden">
        <MultiColorText
          fontSize="75px"
          items={[
            { text: "The ", color: "dark", weight: "bold" },
            { text: "Saharsh ", color: "primary", weight: "bold" },
            { text: "Advantage", color: "dark", weight: "bold" },
          ]}
        />
        <TextBuilder fontSize="20px">
          Why wait months when you can be ready in weeks?{" "}
        </TextBuilder>
      </div>

      {/* Cards Grid */}
      <div
        style={{
          width: "100%",
          maxWidth: 900,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 16,
          alignItems: "start",
        }}
      >
        {/* ── Saharsh Cabins (highlighted) ── */}
        <div
          style={{
            borderRadius: 16,
            overflow: "hidden",
            background: "var(--color-primary)",
          }}
        >
          {/* Header */}
          <div style={{ padding: "24px 24px 0" }} className="flex flex-col">
            <span
              className="w-fit"
              style={{
                display: "inline-block",
                fontSize: 11,
                fontWeight: 500,
                padding: "3px 10px",
                borderRadius: 999,
                background: "rgba(255,255,255,0.2)",
                color: "#fff",
                marginBottom: 12,
              }}
            >
              ✦ Recommended
            </span>
            <TextBuilder fontSize="32px" weight="bold" color="light">
              Saharsh Cabins
            </TextBuilder>
            <TextBuilder fontSize="16px" weight="normal" color="light">
              Stop wasting time. Start building smarter.{" "}
            </TextBuilder>
          </div>

          {/* Divider */}
          <div
            style={{
              height: 0.5,
              margin: "16px 24px 0",
              background: "rgba(255,255,255,0.25)",
            }}
          />

          {/* Rows */}
          <ul style={{ padding: "0 24px 24px", margin: 0, listStyle: "none" }}>
            {comparisonData.map((row, i) => (
              <li
                className="items-center"
                key={i}
                style={{
                  display: "flex",
                  gap: 10,
                  padding: "12px 0",
                  minHeight: 48,
                  borderBottom:
                    i < comparisonData.length - 1
                      ? "0.5px solid rgba(255,255,255,0.15)"
                      : "none",
                }}
              >
                {checkIcon()}
                <TextBuilderMobile fontSize="14px" weight="normal" color="light">
                  {row.saharsh}
                </TextBuilderMobile>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Traditional Construction ── */}
        <div
          style={{
            borderRadius: 16,
            overflow: "hidden",
            background: "#fff",
            border: "0.5px solid var(--color-border, #e5e7eb)",
          }}
        >
          {/* Header */}
          <div style={{ padding: "24px 24px 0" }} className="flex flex-col">
            <span
              className="w-fit"
              style={{
                display: "inline-block",
                fontSize: 11,
                fontWeight: 500,
                padding: "3px 10px",
                borderRadius: 999,
                background: "#f3f4f6",
                color: "#6b7280",
                marginBottom: 12,
              }}
            >
              Traditional
            </span>
            <TextBuilder fontSize="32px" weight="bold" color="dark">
              Traditional Construction
            </TextBuilder>
            <TextBuilder fontSize="16px" weight="normal" color="muted">
              Slow. Unpredictable. Expensive.{" "}
            </TextBuilder>
          </div>

          {/* Divider */}
          <div
            style={{
              height: 0.5,
              margin: "16px 24px 0",
              background: "#e5e7eb",
            }}
          />

          {/* Rows */}
          <ul style={{ padding: "0 24px 24px", margin: 0, listStyle: "none" }}>
            {comparisonData.map((row, i) => (
              <li
                className="items-center"
                key={i}
                style={{
                  display: "flex",
                  gap: 10,
                  padding: "12px 0",
                  minHeight: 48,
                  borderBottom:
                    i < comparisonData.length - 1
                      ? "0.5px solid #e5e7eb"
                      : "none",
                }}
              >
                {crossIcon}
                <TextBuilderMobile fontSize="14px" weight="normal" color="dark">
                  {row.traditional}
                </TextBuilderMobile>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SaharshAdvantage;
