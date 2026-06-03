import React from "react";
import MultiColorTextMobile from "../shared/MultiTextBuilderMobile";
import TextBuilderMobile from "../shared/TextBuilderMobile";

const processItems = [
  {
    title: "Requirements & Assessments",
    description:
      "Understanding your requirements, budget, and project scope leads to the initial discussion of design possibilities and technical specifications.",
  },
  {
    title: "Designs & Quotations",
    description:
      "After developing conceptual designs and layouts, a detailed quotation outlining costs and timelines is provided.",
  },
  {
    title: "Manufacturing & Quality Control",
    description:
      "Ensuring top-notch quality during the manufacturing process with thorough checks and adherence to standards.",
  },
  {
    title: "Delivery & Installation",
    description:
      "Careful delivery and professional installation to ensure the project is completed efficiently and safely.",
  },
];

const OurProcessMobile = () => {
  return (
    <>
    {/* ==========================================
       HOME SECTION: DELIVERY PROCESS
       Purpose:
       Demystify the build journey from brief to commissioning in four structured steps.
       Primary conversion objective:
       Reduce friction by showing the buyer exactly what to expect from first enquiry to handover.
    ========================================== */}
    <section
      id="delivery-process"
      data-section="delivery-process"
      className="w-full flex flex-col px-4 py-12 gap-8"
      style={{ background: "var(--section-dark)" }}
    >
      {/* Header */}
      <div className="w-full flex flex-col gap-4 text-center items-center">
        <p className="eyebrow-label">How It Comes Together</p>
        <MultiColorTextMobile
          fontSize="30px"
          items={[
            { text: "From Concept ", color: "light", weight: "bold" },
            { text: "To Installation", color: "primary", weight: "bold" },
          ]}
        />
        <TextBuilderMobile fontSize="14px" color="light">
          <span className="body-text-premium">
            We guide you through a curated journey where architecture, interior
            design, and landscape artistry converge, transforming your vision
            into a sanctuary of rejuvenation through our precision-led workflow.
          </span>
        </TextBuilderMobile>
      </div>

      {/* Process Steps — unified vertical layout */}
      <div className="flex flex-col w-full">
        {processItems.map((item, index) => (
          <div
            key={index}
            className="process-step-unified"
          >
            {/* Number sits cleanly above the title */}
            <span className="process-step-number">{index + 1}</span>
            <span className="process-step-title">
              {item.title.includes("&") ? (
                <>
                  {item.title.split("&")[0].trim()} &amp;{" "}
                  {item.title.split("&")[1].trim()}
                </>
              ) : (
                item.title
              )}
            </span>
            <span className="process-step-desc">{item.description}</span>
          </div>
        ))}
      </div>
    </section>
    </>
  );
};

export default OurProcessMobile;
