import React, { useState } from "react";
import MultiColorText from "../shared/MultiColorText";
import TextBuilder from "../shared/TextBuilder";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqData = [
    {
      question: "Are prefab cabins as durable as brick-and-mortar buildings?",
      answer:
        "Absolutely. Our cabins are engineered using high-quality structural steel and materials designed for longevity and resilience. They are built to withstand harsh weather conditions and meet rigorous quality standards, offering a lifespan of 25 to 50 years or more, comparable to traditional structures.",
    },
    {
      question: "Can the cabins be customized?",
      answer:
        "Yes. Customization is at the core of what we do. From the floor plan and dimensions to the choice of windows, doors, flooring, and interior finishes, we work with you to create a space that perfectly matches your functional needs and aesthetic preferences.",
    },
    {
      question: "How does the cost compare to traditional construction?",
      answer:
        "Modular construction is significantly more cost-effective. You save money through reduced labor costs, minimal material waste, and a dramatically shorter construction timeline, which for commercial projects means a faster return on investment. Our pricing is transparent and fixed upfront, protecting you from the budget overruns common in conventional projects.",
    },
    {
      question: "What is the lifespan of a Saharsh Cabin?",
      answer:
        "Our cabins are built to last. With proper maintenance, you can expect a service life of 25-50 years. We use durable, corrosion-resistant materials to ensure your investment stands the test of time.",
    },
    {
      question: "Do I need special permissions to install a cabin?",
      answer:
        "Permission requirements vary by location and land type, particularly for agricultural land. While you are ultimately responsible for securing local approvals, our experienced team will guide you through the process and provide the necessary structural documents to help streamline your application and avoid common pitfalls.",
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
              className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
            >
              <TextBuilder
                size="lg"
                weight="semibold"
                color="dark"
                className="pr-4"
              >
                {faq.question}
              </TextBuilder>

              {/* Plus/Minus Icon */}
              <div
                className={`flex-shrink-0 w-6 h-6 flex items-center justify-center transition-transform duration-300 ${
                  openIndex === index ? "rotate-45" : ""
                }`}
              >
                <TextBuilder size="2xl" weight="light" color="primary">
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
                <TextBuilder weight="normal" color="muted" className="leading-relaxed">
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