"use client";

import { useState } from "react";
import styles from "./developers.module.css";
import Button from "@/components/shared/Button";
import Image from "next/image";

interface FormFields {
  full_name: string;
  email: string;
  company: string;
  designation: string;
  project_location: string;
  structure_type: string;
  message: string;
}

const initialFields: FormFields = {
  full_name: "",
  email: "",
  company: "",
  designation: "",
  project_location: "",
  structure_type: "",
  message: "",
};


export default function DevelopersPage() {
  const [fields, setFields] = useState<FormFields>(initialFields);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit() {
    setStatus("loading");
    try {
      const res = await fetch("/api/partner-developers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      });
      if (!res.ok) throw new Error("Network response was not ok");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  const scrollToForm = () => {
    const section = document.getElementById("developer-form");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className={styles.pageRoot}>

      {/* ==========================================
          HERO SECTION
          ========================================== */}
      <section className={styles.hero}>
        <div className={styles.heroBg} />

        <div
          className={[
            styles.heroContent,
            "flex flex-col items-start justify-end pb-6",
          ].join(" ")}
        >
          <div
            className="
              w-full
              backdrop-blur-md bg-black/50
              p-6 rounded-[24px]
              border border-white/10
              md:bg-transparent md:backdrop-blur-none
              md:p-0 md:rounded-none md:border-0
            "
          >
            <p className={styles.heroEyebrow}>Builders &amp; Developers</p>

            <h1 className={styles.heroH1}>
              Built Premium.<br />
              <span style={{ color: "var(--color-primary)" }}>Deployed Fast.</span>
            </h1>

            <p className={styles.heroSub}>
              India&apos;s leading real estate developers trust Saharsh Cabins to
              deploy premium marketing suites, engineer accommodation hubs,
              canteens, and site offices  — fully furnished and operational in
              weeks. Because your project launch cannot wait for conventional
              construction.
            </p>

            <a
              href="#developer-form"
              className={styles.heroCTALink}
              onClick={(e) => {
                e.preventDefault();
                scrollToForm();
              }}
            >
              <Button text="Discuss Your Project" onClick={scrollToForm} />
            </a>
          </div>
        </div>

        <div
          className={[
            styles.partnerBadge,
            "mb-14 max-w-[calc(100vw-32px)]",
          ].join(" ")}
        >
          PREFERRED PARTNER  — OUTDOORS BY MARRIOTT BONVOY
        </div>
      </section>

      {/* ==========================================
          TRUST SECTION
          ========================================== */}
      <section className={styles.trustSection}>
        <div className={styles.trustInner}>
          <div className={styles.trustLeft}>
            <h2 className={styles.sectionH2}>
              Built Premium.{" "}
              <span style={{ color: "var(--color-primary)" }}>Deployed Fast.</span>
            </h2>
            <p className={styles.sectionBody}>
              Conventional construction for a marketing suite or engineer hub
              takes 4-6 months and leaves behind a permanent, unrecoverable
              cost. Saharsh Cabins delivers fully furnished, premium-grade
              modular infrastructure in 7-8 weeks  -  factory-built to your
              specifications, transported to site, and operational from day
              one. When the development completes, the unit relocates to your
              next project or is sold as a high-value asset.
            </p>
            <div className={styles.pillarList}>
              <div className={styles.pillarItem}>
                <span className={styles.pillarIcon}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </span>
                <div className={styles.pillarText}>
                  <h3 className={styles.pillarTitle}>7-8 Week Delivery, Always</h3>
                  <p className={styles.pillarSub}>
                    Factory-controlled production means no weather delays, no
                    labour shortages, no missed milestones. Your marketing suite
                    is ready before your first buyer visit  -  not after it.
                  </p>
                </div>
              </div>
              <div className={styles.pillarItem}>
                <span className={styles.pillarIcon}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="7" width="20" height="14" rx="2" />
                    <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                  </svg>
                </span>
                <div className={styles.pillarText}>
                  <h3 className={styles.pillarTitle}>A Recoverable Asset</h3>
                  <p className={styles.pillarSub}>
                    Unlike a permanent structure, a Saharsh modular unit is a
                    tangible, reusable asset. Move it to your next project when
                    this one sells  — or liquidate it and recover a significant
                    portion of the investment.
                  </p>
                </div>
              </div>
              <div className={styles.pillarItem}>
                <span className={styles.pillarIcon}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </span>
                <div className={styles.pillarText}>
                  <h3 className={styles.pillarTitle}>Pan-India Deployment</h3>
                  <p className={styles.pillarSub}>
                    From metro CBDs to township projects on the urban periphery,
                    our logistics network manages transport, foundation, and
                    final positioning anywhere in India.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.showcaseBlock}>
            <Image
              src="/assets/products/marketing-office/img-1.webp"
              alt="Saharsh Cabins - Premium Marketing Office"
              fill
              className={styles.showcaseImg}
              sizes="(max-width: 768px) 100vw, 420px"
            />
          </div>
        </div>
      </section>

      {/* What we build for developers  -  use-cases strip */}
      <div className={styles.commissionStrip}>
        <div className={styles.commissionInner}>
          <span className={styles.commissionLabel}>What We Build</span>
          <span className={styles.commissionDivider} />
          <span className={styles.commissionText}>
            <strong>Marketing Suites</strong> &nbsp;·&nbsp;{" "}
            <strong>Engineer Accommodation Hubs</strong> &nbsp;·&nbsp;{" "}
            <strong>Canteens &amp; Cafés</strong> &nbsp;·&nbsp;{" "}
            <strong>Site Offices</strong> &nbsp;·&nbsp;{" "}
            <strong>Model Apartments</strong>
          </span>
          <a
            href="#developer-form"
            className={styles.commissionCTA}
            onClick={(e) => {
              e.preventDefault();
              scrollToForm();
            }}
          >
            Discuss Your Requirement
          </a>
        </div>
      </div>

      {/* Stats strip */}
      <section className={styles.statsGridStrip}>
        <div className={styles.statsInner}>
          <div className={styles.statBox}>
            <div className={styles.statNum}>15</div>
            <div className={styles.statLabel}>Years Manufacturing Experience</div>
          </div>
          <div className={styles.statBox}>
            <div className={styles.statNum}>1000+</div>
            <div className={styles.statLabel}>Projects Delivered</div>
          </div>
          <div className={styles.statBox}>
            <div className={styles.statNum}>7-8</div>
            <div className={styles.statLabel}>Week Standard Delivery</div>
          </div>
          <div className={styles.statBox}>
            <div className={styles.statNum}>PAN</div>
            <div className={styles.statLabel}>India Installation Network</div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className={styles.hiwSection}>
        <h2 className={styles.sectionH2}>
          From Brief to{" "}
          <span style={{ color: "var(--color-primary)" }}>Operational</span>
          {" "} -  Four Steps.
        </h2>
        <div className={styles.allianceGrid}>
          <div className={styles.allianceCard}>
            <div className={styles.allianceNum}>01</div>
            <h3 className={styles.allianceCardTitle}>Share Your Brief</h3>
            <p className={styles.allianceCardBody}>
              Tell us what you need  -  the type of structure, site location,
              configuration, and your target operational date. Our team responds
              with a preliminary proposal and feasibility assessment within 48
              hours.
            </p>
          </div>
          <div className={styles.allianceCard}>
            <div className={styles.allianceNum}>02</div>
            <h3 className={styles.allianceCardTitle}>Design &amp; Quotation</h3>
            <p className={styles.allianceCardBody}>
              We prepare floor plan options and a detailed quotation tailored to
              your project and brand. Custom interiors, your corporate identity,
              and bespoke exterior treatments are all incorporated at this stage.
            </p>
          </div>
          <div className={styles.allianceCard}>
            <div className={styles.allianceNum}>03</div>
            <h3 className={styles.allianceCardTitle}>Factory Production</h3>
            <p className={styles.allianceCardBody}>
              Your unit enters our controlled manufacturing environment on a
              confirmed schedule. You receive milestone updates throughout  - 
              so your site team, sales team, and launch calendar stay
              synchronised.
            </p>
          </div>
          <div className={styles.allianceCard}>
            <div className={styles.allianceNum}>04</div>
            <h3 className={styles.allianceCardTitle}>Installation &amp; Handover</h3>
            <p className={styles.allianceCardBody}>
              We transport, position, and commission the structure at your
              site  -  fully furnished, branded, utilities connected, and ready
              for the first visitor. Your team walks into a completed space,
              not a work in progress.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonial  -  drawn from the real Total Environment project */}
      <section className={styles.testimonialSection}>
        <div className={styles.testimonialInner}>
          <div className={styles.testimonialBadge}>Delivered Project</div>
          <blockquote className={styles.testimonialQuote}>
            &ldquo;We needed a 2,000 sq. ft. premium marketing office
            operational before our project launch. Saharsh Cabins delivered a
            three-unit, 40&apos; modular suite that impressed every buyer who
            walked through it  — fully furnished, branded, and ready in under 8
            weeks.&rdquo;
          </blockquote>
          <div className={styles.testimonialMeta}>
            <span className={styles.testimonialAuthor}>
               — Total Environment &lsquo;Down by the Water&rsquo;
            </span>
            <span className={styles.testimonialDivider}>·</span>
            <span className={styles.testimonialFirm}>
              Jakkur, Bangalore
            </span>
          </div>
        </div>
      </section>

      {/* ==========================================
          ENQUIRY FORM
          ========================================== */}
      <section className={styles.formSection} id="developer-form">
        <div className={styles.formWrapper}>
          <div className={styles.formIntro}>
            <h2 className={styles.formH2}>
              Tell Us About{" "}
              <span style={{ color: "var(--color-primary)" }}>Your Project.</span>
            </h2>
            <p className={styles.formSubtext}>
              Share your project brief and we will put together a tailored
              modular infrastructure proposal  — floor plan options, indicative
              pricing, and a delivery schedule that works around your launch
              timeline.
            </p>
            <div className={styles.divider} />
            <div className={styles.trustBadgeRow}>
              <span className={styles.trustBadge}>48-Hour Response</span>
              <span className={styles.trustBadge}>Custom Floor Plans</span>
              <span className={styles.trustBadge}>Pan-India Installation</span>
            </div>
            <p className={styles.note}>
              All project enquiries are reviewed within 48 hours. Initial
              consultations are complimentary.
            </p>
          </div>

          {status === "success" ? (
            <div className={styles.successMsg}>
              <h3>Enquiry Received</h3>
              <p>
                Our team will review your project brief and come back with a
                preliminary proposal within 48 hours.
              </p>
            </div>
          ) : (
            <form
              className={styles.allianceForm}
              onSubmit={(e) => e.preventDefault()}
              noValidate
            >
              <div className={styles.formGrid2}>
                <div className={styles.formRow}>
                  <input
                    id="full_name"
                    name="full_name"
                    type="text"
                    placeholder="Full Name *"
                    required
                    value={fields.full_name}
                    onChange={handleChange}
                    className={styles.formInput}
                  />
                </div>
                <div className={styles.formRow}>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email Address *"
                    required
                    value={fields.email}
                    onChange={handleChange}
                    className={styles.formInput}
                  />
                </div>
                <div className={styles.formRow}>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Company / Developer Name *"
                    required
                    value={fields.company}
                    onChange={handleChange}
                    className={styles.formInput}
                  />
                </div>
                <div className={styles.formRow}>
                  <input
                    id="designation"
                    name="designation"
                    type="text"
                    placeholder="Your Role / Designation *"
                    required
                    value={fields.designation}
                    onChange={handleChange}
                    className={styles.formInput}
                  />
                </div>
                <div className={styles.formRow}>
                  <input
                    id="project_location"
                    name="project_location"
                    type="text"
                    placeholder="Project Name &amp; Location *"
                    required
                    value={fields.project_location}
                    onChange={handleChange}
                    className={styles.formInput}
                  />
                </div>
                <div className={styles.formRow}>
                  <div className={styles.selectWrapper}>
                    <select
                      id="structure_type"
                      name="structure_type"
                      value={fields.structure_type}
                      onChange={handleChange}
                      className={styles.formSelect}
                    >
                      <option value="" disabled>Structure Required</option>
                      <option value="marketing-suite">Marketing Suite / Sales Office</option>
                      <option value="engineer-accommodation">Engineer Accommodation Hub</option>
                      <option value="canteen-cafe">Canteen &amp; Café</option>
                      <option value="model-apartment">Model Apartment</option>
                      <option value="site-office">Site Office</option>
                      <option value="multiple">Multiple Structures</option>
                      <option value="other">Other</option>
                    </select>
                    <span className={styles.selectChevron}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>

              <div className={styles.formRow}>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your requirement  -  size, configuration, timeline, and anything specific to your project or brand..."
                  value={fields.message}
                  onChange={handleChange}
                  className={styles.formTextarea}
                  rows={5}
                />
              </div>

              <div className="pb-[100px] md:pb-0" style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: 32, gap: 12 }}>
                <Button
                  text={status === "loading" ? "Submitting..." : "Submit Enquiry"}
                  onClick={handleSubmit}
                  disabled={status === "loading"}
                />
                {status === "error" && (
                  <p className={styles.errorMsg}>
                    Something went wrong. Please try again or contact us directly.
                  </p>
                )}
              </div>
            </form>
          )}
        </div>
      </section>

    </main>
  );
}
