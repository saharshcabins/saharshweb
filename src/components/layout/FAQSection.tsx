import React, { useState } from "react";
import MultiColorText from "../shared/MultiColorText";
import TextBuilder from "../shared/TextBuilder";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqData = [
    {
      question:
        "What is the difference between modular construction and traditional RCC construction?",
      answer:
        "Modular construction is built off-site in a controlled factory setting, making it significantly faster, more eco-friendly, and portable compared to traditional, labor-intensive RCC buildings.",
    },
    {
      question:
        "What materials are used in manufacturing the cabins and homes?",
      answer:
        "Drawing on our 15 years of expertise, we use high-grade galvanized steel frames paired with weather-resistant insulated sandwich panels and fiber cement boards for maximum durability.",
    },
    {
      question:
        "What are the construction and manufacturing timelines before shipping?",
      answer:
        "Turn-key project delivery typically takes just 10 - 12 weeks, and with our four facilities across India, we ensure rapid domestic delivery and efficient shipping for international exports.",
    },
    {
      question: "Are these structures customizable?",
      answer:
        "Yes, these structures are customiszable! You can fully customize floor plans, exterior cladding, interior finishes, and layouts to perfectly match the specific needs of your home, resort, or commercial space.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full flex flex-col items-center gap-12 py-16 px-4">
      {/* Title */}
      <MultiColorText
        fontSize="36px"
        items={[
          { text: "Frequently Asked ", color: "dark", weight: "semibold" },
          { text: "Questions", color: "primary", weight: "bold" },
        ]}
      />

      {/* FAQ Container */}
      <div className="w-full max-w-[900px] space-y-4">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200"
          >
            {/* Question Button */}
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex items-center justify-between p-4 sm:p-6 text-left hover:bg-gray-50 transition-colors"
            >
              <TextBuilder
                size="lg"
                weight="semibold"
                color="dark"
                className="pr-4 text-[14px] sm:text-[18px] md:text-[20px]"
              >
                {faq.question}
              </TextBuilder>

              {/* Plus/Minus Icon */}
              <div
                className={`flex-shrink-0 w-6 h-6 flex items-center justify-center transition-transform duration-300 ${
                  openIndex === index ? "rotate-45" : ""
                }`}
              >
                <TextBuilder
                  weight="light"
                  color="primary"
                  className="text-[18px] sm:text-[22px]"
                >
                  +
                </TextBuilder>
              </div>
            </button>

            {/* Answer */}
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index ? "max-h-96" : "max-h-0"
              }`}
            >
              <div className="px-6 pb-6 pt-2 border-t border-gray-100">
                <TextBuilder
                  weight="normal"
                  color="muted"
                  className="leading-relaxed text-[13px] sm:text-[15px] md:text-[16px]"
                >
                  {faq.answer}
                </TextBuilder>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
