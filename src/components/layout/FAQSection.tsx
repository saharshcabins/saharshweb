import React from "react";
import MultiColorText from "../shared/MultiColorText";
import MultiColorTextMobile from "../shared/MultiTextBuilderMobile";

const faqData = [
  {
    question: "Can your units meet international hospitality brand specifications?",
    answer: (
      <>
        Yes. Our manufacturing has been validated against international hospitality
        specifications, including for{" "}
        <strong>Outdoors by Marriott Bonvoy</strong>. We work with your brand
        guidelines, architect, and operations team from design through to
        commissioning.
      </>
    ),
  },
  {
    question: "How do you guarantee consistency across a multi-unit resort project?",
    answer: (
      <>
        Every unit is manufactured under identical quality protocols regardless of
        order volume. Our projects at various locations pan-India are a live
        demonstration of this at scale.
      </>
    ),
  },
  {
    question: "What does your 10–12 week delivery actually include?",
    answer: (
      <>
        Everything. Design finalisation, manufacturing, quality inspection,
        logistics, on-site installation, and systems commissioning.{" "}
        <strong>
          You hand us the brief and site access. We hand you a revenue-ready
          property.
        </strong>
      </>
    ),
  },
  {
    question: "Can you handle ADA compliance and international accessibility standards?",
    answer: (
      <>
        Yes. We are currently manufacturing ADA-compliant units for the US market
        in active partnership with international hospitality operators, and can
        build to any specified accessibility standard.
      </>
    ),
  },
  {
    question: "What is the starting investment for a luxury modular cottage?",
    answer: (
      <>
        Our premium luxury cottage range starts from <strong>₹8 lakhs</strong>,
        depending on size and specification. We provide a locked price before
        manufacturing begins — no hidden costs, no budget overruns.
      </>
    ),
  },
];

const FAQSection = () => {
  return (
    <>
    {/* ==========================================
       HOME SECTION: FAQ
       Purpose:
       Address the most critical objections and questions from serious buyers and operators.
       Primary conversion objective:
       Eliminate remaining hesitation and reinforce brand authority before the final conversion step.
    ========================================== */}
    <section
      id="faq"
      data-section="faq"
      className="w-full flex flex-col md:flex-row gap-12 md:gap-20 py-16 px-[7%]"
      style={{ backgroundColor: "var(--section-accent)" }}
    >
      {/* Left: Header */}
      <div className="w-full md:w-[35%] flex-shrink-0">
        <p className="eyebrow-label mb-4">Common Questions</p>
        {/* Mobile heading - only show on mobile */}
        <div className="block md:hidden">
          <MultiColorTextMobile
            fontSize="30px"
            className="text-start leading-tight"
            items={[
              { text: "Questions We Hear ", color: "dark", weight: "bold" },
              { text: "Most Often", color: "primary", weight: "bold" },
            ]}
          />
        </div>
        {/* Desktop heading - only show on tablet and up */}
        <div className="hidden md:block">
          <MultiColorText
            fontSize="48px"
            className="text-start leading-tight"
            items={[
              { text: "Questions We Hear ", color: "dark", weight: "bold", breakAfter: true },
              { text: "Most Often", color: "primary", weight: "bold" },
            ]}
          />
        </div>
      </div>

      {/* Right: FAQ list */}
      <div
        className="flex-1 flex flex-col divide-y"
        style={{ borderColor: "var(--light-border)" }}
      >
        {faqData.map((faq, index) => (
          <div key={index} className="py-7">
            <h3
              className="text-[15px] md:text-[16px] mb-3 leading-snug"
              style={{
                color: "var(--text-dark)",
                fontFamily: "var(--font-sans)",
                fontWeight: 600,
              }}
            >
              {faq.question}
            </h3>
            <p
              className="text-[13px] md:text-[14px] leading-relaxed body-text-premium"
            >
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
    </>
  );
};

export default FAQSection;
