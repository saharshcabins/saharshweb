"use client";

import { useState } from "react";
import styles from "./global-alliances.module.css";
import Button from "@/components/shared/Button";
import Image from "next/image";

interface FormFields {
  full_name: string;
  corp_email: string;
  company: string;
  designation: string;
  website: string;
  market: string;
  message: string;
}

const initialFields: FormFields = {
  full_name: "",
  corp_email: "",
  company: "",
  designation: "",
  website: "",
  market: "",
  message: "",
};


export default function GlobalAlliancesPage() {
  const [fields, setFields] = useState<FormFields>(initialFields);
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit() {
    setStatus("loading");
    try {
      const res = await fetch("/api/partner-alliance", {
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
    const section = document.getElementById("alliance-form");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className={styles.pageRoot}>

      {/* ===================================================================
          HERO SECTION
          FIX #2 - On mobile heroContent is wrapped in a frosted dark-glass
          card (backdrop-blur-md bg-black/50 p-6 rounded-[24px]) so body
          text is always legible over the high-detail cabin photography.
          FIX #5 - partnerBadge gets mb-14 + max-w-[calc(100vw-32px)].
      =================================================================== */}
      <section className={styles.hero}>
        <div className={styles.heroBg} />

        <div
          className={[
            styles.heroContent,
            "flex flex-col items-start justify-end pb-6",
          ].join(" ")}
        >
          {/*
            FIX #2 - Frosted glass isolation card (mobile only).
            md: variants restore the transparent desktop layout.
          */}
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
            <h1 className={styles.heroH1}>
              <span style={{ color: "var(--color-primary)" }}>Monetize</span>{" "}
              Your Global Network.
            </h1>

            <p className={styles.heroSub}>
              Partner with India&apos;s premier luxury modular manufacturer.
              Introduce international hospitality projects, eco-resort
              developments, or premium estate builds to Saharsh, and secure a
              substantial, transparent profit-sharing stake in the construction
              contract value.
            </p>

            <a
              href="#alliance-form"
              className={styles.heroCTALink}
              onClick={(e) => {
                e.preventDefault();
                scrollToForm();
              }}
            >
              <Button text="Apply For Global Alliance" onClick={scrollToForm} />
            </a>
          </div>
        </div>

        {/*
          FIX #5 - Marriott badge safe-zone.
          mb-14 (56px) clears the device home bar + WhatsApp widget.
          max-w-[calc(100vw-32px)] prevents text overflow at 360px.
        */}
        <div
          className={[
            styles.partnerBadge,
            "mb-14 max-w-[calc(100vw-32px)]",
          ].join(" ")}
        >
          PREFERRED PARTNER - OUTDOORS BY MARRIOTT BONVOY
        </div>
      </section>

      {/* Trust section */}
      <section className={styles.trustSection}>
        <div className={styles.trustInner}>
          <div className={styles.trustLeft}>
            <h2 className={styles.sectionH2}>
              Execution You Can{" "}
              <span style={{ color: "var(--color-primary)" }}>Trust.</span>
            </h2>
            <p className={styles.sectionBody}>
              We turn high-end architectural concepts into flawless,
              factory-precise reality. Our manufacturing standards are proven on
              the ground by our project execution for world-renowned hospitality
              names like the Marriott group. When you introduce your clients to
              Saharsh, you are partnering with an established team that provides
              absolute design flexibility, an uncompromised 120-day delivery
              schedule across the globe, and complete transparency from the
              first blueprint to final on-site positioning.
            </p>
            <div className={styles.pillarList}>
              <div className={styles.pillarItem}>
                <span className={styles.pillarIcon}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                  </svg>
                </span>
                <div className={styles.pillarText}>
                  <h3 className={styles.pillarTitle}>Architecture-First Manufacturing</h3>
                  <p className={styles.pillarSub}>
                    We manufacture around the design intent - preserving the
                    spatial experience, materials, and luxury detailing
                    envisioned by your architect.
                  </p>
                </div>
              </div>
              <div className={styles.pillarItem}>
                <span className={styles.pillarIcon}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </span>
                <div className={styles.pillarText}>
                  <h3 className={styles.pillarTitle}>Predictable Delivery at Scale</h3>
                  <p className={styles.pillarSub}>
                    Factory-controlled workflows eliminate on-site uncertainty
                    and accelerate timelines for hospitality and resort
                    developments.
                  </p>
                </div>
              </div>
              <div className={styles.pillarItem}>
                <span className={styles.pillarIcon}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </span>
                <div className={styles.pillarText}>
                  <h3 className={styles.pillarTitle}>Complete Referral Protection</h3>
                  <p className={styles.pillarSub}>
                    Clear communication, protected NDAs, and accountable
                    delivery systems ensure confidence from first conversation
                    to final handover.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.showcaseBlock}>
            <Image
              src="/assets/products/lakeside-cabin/main.webp"
              alt="Saharsh  -  Lakeside Cabin"
              fill
              className={styles.showcaseImg}
              sizes="(max-width: 768px) 100vw, 420px"
            />
          </div>
        </div>
      </section>

      {/* Commission strip */}
      <div className={styles.commissionStrip}>
        <div className={styles.commissionInner}>
          <span className={styles.commissionLabel}>Your Earning Potential</span>
          <span className={styles.commissionDivider} />
          <span className={styles.commissionText}>
            Partners earn a{" "}
            <strong>transparent, pre-agreed profit-sharing stake</strong>{" "}
            calculated on verified contract value  -  paid on execution, not on
            promise.
          </span>
          <a
            href="#alliance-form"
            className={styles.commissionCTA}
            onClick={(e) => {
              e.preventDefault();
              scrollToForm();
            }}
          >
            Discuss Terms
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
            <div className={styles.statNum}>120</div>
            <div className={styles.statLabel}>Day Global Delivery</div>
          </div>
          <div className={styles.statBox}>
            <div className={styles.statNum}>INTL</div>
            <div className={styles.statLabel}>Code Compliant Standards</div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className={styles.hiwSection}>
        <h2 className={styles.sectionH2}>
          From Introduction to{" "}
          <span style={{ color: "var(--color-primary)" }}>Commission</span>{" "}
           -  Four Clean Steps.
        </h2>
        <div className={styles.allianceGrid}>
          <div className={styles.allianceCard}>
            <div className={styles.allianceNum}>01</div>
            <h3 className={styles.allianceCardTitle}>Submit Your Dossier</h3>
            <p className={styles.allianceCardBody}>
              Complete the Global Alliance Application below with your firm
              details, active market geography, and the type of projects you
              typically consult on. Our team reviews every submission within 3
              business days.
            </p>
          </div>
          <div className={styles.allianceCard}>
            <div className={styles.allianceNum}>02</div>
            <h3 className={styles.allianceCardTitle}>Technical Integration</h3>
            <p className={styles.allianceCardBody}>
              We review existing 3D models or conceptual layouts, mapping out
              precise structural translations, material specifications, and
              off-site assembly logistics tailored to your project geography.
            </p>
          </div>
          <div className={styles.allianceCard}>
            <div className={styles.allianceNum}>03</div>
            <h3 className={styles.allianceCardTitle}>Project Introduction</h3>
            <p className={styles.allianceCardBody}>
              Once your alliance is activated, you introduce qualified project
              leads directly to Saharsh&apos;s global partnerships team under
              NDA protection, with your referral formally registered.
            </p>
          </div>
          <div className={styles.allianceCard}>
            <div className={styles.allianceNum}>04</div>
            <h3 className={styles.allianceCardTitle}>Commission Release</h3>
            <p className={styles.allianceCardBody}>
              On contract execution, your commission is calculated transparently
              on verified contract value and released in accordance with the
              agreed payment schedule.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className={styles.testimonialSection}>
        <div className={styles.testimonialInner}>
          <div className={styles.testimonialBadge}>Partner Confidence</div>
          <blockquote className={styles.testimonialQuote}>
            &ldquo;The manufacturing precision and NDA-protected referral
            process gave us the confidence to introduce Saharsh to our most
            discerning hospitality clients globally. The 120-day delivery
            commitment was honoured without exception.&rdquo;
          </blockquote>
          <div className={styles.testimonialMeta}>
            <span className={styles.testimonialAuthor}>
               -  Senior Estate Advisor, Middle East Portfolio
            </span>
            <span className={styles.testimonialDivider}>·</span>
            <span className={styles.testimonialFirm}>
              International Luxury Hospitality Group
            </span>
          </div>
        </div>
      </section>

      {/* ===================================================================
          ALLIANCE FORM
          FIX #4 - Submit button wrapped in pb-[100px] md:pb-0 safe-zone
          so the WhatsApp widget never occludes it on short viewports.
      =================================================================== */}
      <section className={styles.formSection} id="alliance-form">
        <div className={styles.formWrapper}>
          <div className={styles.formIntro}>
            <h2 className={styles.formH2}>
              Join the Saharsh Global{" "}
              <span style={{ color: "var(--color-primary)" }}>Network.</span>
            </h2>
            <p className={styles.formSubtext}>
              We partner exclusively with internationally active brokers, estate
              advisors, and hospitality consultants. Complete the dossier below
              to connect directly with our global partnerships team.
            </p>
            <div className={styles.divider} />
            <div className={styles.trustBadgeRow}>
              <span className={styles.trustBadge}>NDA Protected</span>
              <span className={styles.trustBadge}>3-Day Review</span>
              <span className={styles.trustBadge}>12 Active Markets</span>
            </div>
            <p className={styles.note}>
              All submissions are treated with strict professional
              confidentiality and reviewed under internal NDA protocols within 3
              business days.
            </p>
          </div>

          {status === "success" ? (
            <div className={styles.successMsg}>
              <h3>Application Received</h3>
              <p>
                Our partnerships team will review your dossier and be in touch
                within 3 business days.
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
                    id="corp_email"
                    name="corp_email"
                    type="email"
                    placeholder="Corporate Email Address *"
                    required
                    value={fields.corp_email}
                    onChange={handleChange}
                    className={styles.formInput}
                  />
                </div>
                <div className={styles.formRow}>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Company / Firm Name *"
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
                    placeholder="Designation / Role *"
                    required
                    value={fields.designation}
                    onChange={handleChange}
                    className={styles.formInput}
                  />
                </div>
                <div className={styles.formRow}>
                  <input
                    id="website"
                    name="website"
                    type="url"
                    placeholder="Company Website (https://...)"
                    value={fields.website}
                    onChange={handleChange}
                    className={styles.formInput}
                  />
                </div>
                <div className={styles.formRow}>
                  <div className={styles.selectWrapper}>
                    <select
                      id="market"
                      name="market"
                      required
                      value={fields.market}
                      onChange={handleChange}
                      className={styles.formSelect}
                    >
                      <option value="" disabled>
                        Primary Market / Region of Operation *
                      </option>
                      <option value="middle-east">Middle East</option>
                      <option value="southeast-asia">Southeast Asia</option>
                      <option value="europe">Europe</option>
                      <option value="north-america">North America</option>
                      <option value="africa">Africa</option>
                      <option value="south-asia">South Asia</option>
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
                  placeholder="Briefly describe the type of projects you work with and what you're looking to introduce..."
                  value={fields.message}
                  onChange={handleChange}
                  className={styles.formTextarea}
                  rows={5}
                />
              </div>

              <div className="pb-[100px] md:pb-0" style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: 32, gap: 12 }}>
                <Button
                  text={status === "loading" ? "Submitting..." : "Submit Application"}
                  onClick={handleSubmit}
                  disabled={status === "loading"}
                />
                {status === "error" && (
                  <p className={styles.errorMsg}>
                    Something went wrong. Please try again or email us directly.
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
