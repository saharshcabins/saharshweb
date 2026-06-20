"use client";

import { useState } from "react";
import styles from "./architects.module.css";
import Button from "@/components/shared/Button";
import Image from "next/image";

interface FormFields {
  full_name: string;
  email: string;
  firm_name: string;
  role: string;
  website: string;
  specialisation: string;
  message: string;
}

type FormErrors = {
  full_name?: string;
  email?: string;
  firm_name?: string;
  role?: string;
  specialisation?: string;
};

const initialFields: FormFields = {
  full_name: "",
  email: "",
  firm_name: "",
  role: "",
  website: "",
  specialisation: "",
  message: "",
};


export default function ArchitectsPage() {
  const [fields, setFields] = useState<FormFields>(initialFields);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errors, setErrors] = useState<FormErrors>({});

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [e.target.name]: undefined }));
    }
  }

  function validate(): boolean {
    const newErrors: FormErrors = {};
    if (!fields.full_name.trim()) newErrors.full_name = "Full name is required.";
    if (!fields.email.trim()) newErrors.email = "Email address is required.";
    if (!fields.firm_name.trim()) newErrors.firm_name = "Firm name is required.";
    if (!fields.role.trim()) newErrors.role = "Role is required.";
    if (!fields.specialisation) newErrors.specialisation = "Specialisation is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit() {
    if (!validate()) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/partner-architects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      });
      if (!res.ok) throw new Error("Network response was not ok");
      setStatus("success");
      setFields(initialFields);
    } catch {
      setStatus("error");
    }
  }

  const scrollToForm = () => {
    // Use requestAnimationFrame to ensure scroll happens after layout is complete
    requestAnimationFrame(() => {
      const section = document.getElementById("architect-form");
      if (section) {
        // Add a small delay to ensure all elements are fully rendered
        setTimeout(() => {
          section.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    });
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
            <p className={styles.heroEyebrow}>Design Partners</p>

            <h1 className={styles.heroH1}>
              You Dream It.<br />
              <span style={{ color: "var(--color-primary)" }}>We Build It.</span>
            </h1>

            <p className={styles.heroSub}>
              Saharsh Cabins is the manufacturing partner architects trust to
              translate vision into structure  -  without substitution, without
              shortcuts, and without compromising what makes the design
              extraordinary. You hold the creative authority. We hold the
              execution.
            </p>

            <a
              href="#architect-form"
              className={styles.heroCTALink}
              onClick={(e) => {
                e.preventDefault();
                scrollToForm();
              }}
            >
              <Button text="Explore a Design Partnership" onClick={scrollToForm} />
            </a>
          </div>
        </div>

      </section>

      {/* ==========================================
          TRUST SECTION
          ========================================== */}
      <section className={styles.trustSection}>
        <div className={styles.trustInner}>
          <div className={styles.trustLeft}>
            <h2 className={styles.sectionH2}>
              We Build What{" "}
              <span style={{ color: "var(--color-primary)" }}>You Draw.</span>
            </h2>
            <p className={styles.sectionBody}>
              We don&apos;t value-engineer the design to suit our process  -  we
              resource our process to honour your design. The geometry, the
              material palette, the proportions, the detailing  -  all of it is
              treated as non-negotiable. Our job is to find a way to make your
              vision happen. Not a version of it.
            </p>
            <div className={styles.pillarList}>
              <div className={styles.pillarItem}>
                <span className={styles.pillarIcon}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <path d="M3 9h18M9 21V9" />
                  </svg>
                </span>
                <div className={styles.pillarText}>
                  <h3 className={styles.pillarTitle}>We Respect the Geometry</h3>
                  <p className={styles.pillarSub}>
                    Your drawings become our manufacturing brief  -  spatial
                    dimensions, ceiling heights, openings, and structural
                    intent are preserved exactly. We come back to you before
                    any deviation, not after.
                  </p>
                </div>
              </div>
              <div className={styles.pillarItem}>
                <span className={styles.pillarIcon}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="3" />
                    <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
                  </svg>
                </span>
                <div className={styles.pillarText}>
                  <h3 className={styles.pillarTitle}>We Honour the Material Spec</h3>
                  <p className={styles.pillarSub}>
                    DGU aluminium windows, hardwood cladding, bespoke finishes  - 
                    we source the material you specify. If a substitution is ever
                    unavoidable, we present alternatives for your approval. Never
                    a surprise on site.
                  </p>
                </div>
              </div>
              <div className={styles.pillarItem}>
                <span className={styles.pillarIcon}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </span>
                <div className={styles.pillarText}>
                  <h3 className={styles.pillarTitle}>A True Working Partnership</h3>
                  <p className={styles.pillarSub}>
                    You stay involved throughout  -  not just at brief and
                    handover. We share production milestones, photos, and
                    material samples at every key stage so you can course-correct
                    before it matters.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.showcaseBlock}>
            <Image
              src="/assets/products/qbinn-tusker/img-2.webp"
              alt="Saharsh Cabins  -  Qbinn Tusker Villa"
              fill
              className={styles.showcaseImg}
              sizes="(max-width: 768px) 100vw, 420px"
            />
          </div>
        </div>
      </section>

      {/* Partnership value strip  -  no commission, just craft */}
      <div className={styles.commissionStrip}>
        <div className={styles.commissionInner}>
          <span className={styles.commissionLabel}>Our Promise to You</span>
          <span className={styles.commissionDivider} />
          <span className={styles.commissionText}>
            No value engineering. No silent substitutions. No surprises on site.{" "}
            <strong>Your design intent is our manufacturing brief</strong>  -  from
            the first structural translation to final on-site positioning.
          </span>
          <a
            href="#architect-form"
            className={styles.commissionCTA}
            onClick={(e) => {
              e.preventDefault();
              scrollToForm();
            }}
          >
            Start a Conversation
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

      {/* How Design Partnership Works */}
      <section className={styles.hiwSection}>
        <h2 className={styles.sectionH2}>
          How{" "}
          <span style={{ color: "var(--color-primary)" }}>Design Partnership</span>
          {" "}Works.
        </h2>
        <div className={styles.allianceGrid}>
          <div className={styles.allianceCard}>
            <div className={styles.allianceNum}>01</div>
            <h3 className={styles.allianceCardTitle}>Share Your Concept</h3>
            <p className={styles.allianceCardBody}>
              Bring us your drawings, 3D models, or even rough conceptual
              sketches. We study the intent, not just the dimensions  -  and
              respond with preliminary structural feasibility within 3 business
              days.
            </p>
          </div>
          <div className={styles.allianceCard}>
            <div className={styles.allianceNum}>02</div>
            <h3 className={styles.allianceCardTitle}>Technical Translation</h3>
            <p className={styles.allianceCardBody}>
              Our structural team converts your design into factory-ready shop
              drawings, preserving every spatial decision and material
              specification. You review and approve before a single component
              is cut.
            </p>
          </div>
          <div className={styles.allianceCard}>
            <div className={styles.allianceNum}>03</div>
            <h3 className={styles.allianceCardTitle}>Production with Oversight</h3>
            <p className={styles.allianceCardBody}>
              Your project enters our factory on a fixed schedule with design
              oversight built in. We document and share every production
              milestone  -  and flag any material or structural decision that
              affects design intent before executing it.
            </p>
          </div>
          <div className={styles.allianceCard}>
            <div className={styles.allianceNum}>04</div>
            <h3 className={styles.allianceCardTitle}>On-Site Handover</h3>
            <p className={styles.allianceCardBody}>
              We deliver, position, and install the structure at site. You walk
              through the finished space against your drawings. That is the
              standard we hold ourselves to  -  and the conversation we welcome
              at every handover.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className={styles.testimonialSection}>
        <div className={styles.testimonialInner}>
          <div className={styles.testimonialBadge}>Design Partner</div>
          <blockquote className={styles.testimonialQuote}>
            &ldquo;Working with Saharsh Cabins was unlike any manufacturing
            engagement we&apos;ve had before. They followed our drawings with
            absolute precision  -  every material we specified arrived on site,
            nothing was substituted without a call first. The finished structure
            is exactly what we drew.&rdquo;
          </blockquote>
          <div className={styles.testimonialMeta}>
            <span className={styles.testimonialAuthor}>
               -  Principal Architect, Bangalore Design Studio
            </span>
            <span className={styles.testimonialDivider}>·</span>
            <span className={styles.testimonialFirm}>
              Luxury Hospitality Practice
            </span>
          </div>
        </div>
      </section>

      {/* ==========================================
          PARTNERSHIP FORM
          ========================================== */}
      <section className={styles.formSection} id="architect-form">
        <div className={styles.formWrapper}>
          <div className={styles.formIntro}>
            <h2 className={styles.formH2}>
              Start a{" "}
              <span style={{ color: "var(--color-primary)" }}>Design Partnership.</span>
            </h2>
            <p className={styles.formSubtext}>
              We work with architects, interior designers, and design
              consultants on luxury hospitality, resort, and high-end residential
              projects. This is a working partnership  -  no referral
              arrangements, just shared craft and a commitment to getting every
              detail right.
            </p>
            <div className={styles.divider} />
            <div className={styles.trustBadgeRow}>
              <span className={styles.trustBadge}>NDA Protected</span>
              <span className={styles.trustBadge}>No Value Engineering</span>
              <span className={styles.trustBadge}>Design-First Manufacturing</span>
            </div>
            <p className={styles.note}>
              We review every submission and respond with preliminary structural
              feasibility within 3 business days.
            </p>
          </div>

          {status === "success" ? (
            <div className={styles.successMsg}>
              <h3>Submission Received</h3>
              <p>
                Our team will review your brief and come back with preliminary
                feasibility within 3 business days.
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
                  {errors.full_name && <p className={styles.errorMsg}>{errors.full_name}</p>}
                </div>
                <div className={styles.formRow}>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Professional Email Address *"
                    required
                    value={fields.email}
                    onChange={handleChange}
                    className={styles.formInput}
                  />
                  {errors.email && <p className={styles.errorMsg}>{errors.email}</p>}
                </div>
                <div className={styles.formRow}>
                  <input
                    id="firm_name"
                    name="firm_name"
                    type="text"
                    placeholder="Firm / Studio Name *"
                    required
                    value={fields.firm_name}
                    onChange={handleChange}
                    className={styles.formInput}
                  />
                  {errors.firm_name && <p className={styles.errorMsg}>{errors.firm_name}</p>}
                </div>
                <div className={styles.formRow}>
                  <div className={styles.selectWrapper}>
                    <select
                      id="role"
                      name="role"
                      required
                      value={fields.role}
                      onChange={handleChange}
                      className={styles.formSelect}
                    >
                      <option value="" disabled>Your Role *</option>
                      <option value="principal-architect">Principal Architect</option>
                      <option value="interior-designer">Interior Designer</option>
                      <option value="landscape-architect">Landscape Architect</option>
                      <option value="design-consultant">Design Consultant</option>
                      <option value="other">Other</option>
                    </select>
                    <span className={styles.selectChevron}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </span>
                  </div>
                  {errors.role && <p className={styles.errorMsg}>{errors.role}</p>}
                </div>
                <div className={styles.formRow}>
                  <input
                    id="website"
                    name="website"
                    type="url"
                    placeholder="Portfolio / Website (https://...)"
                    value={fields.website}
                    onChange={handleChange}
                    className={styles.formInput}
                  />
                </div>
                <div className={styles.formRow}>
                  <div className={styles.selectWrapper}>
                    <select
                      id="specialisation"
                      name="specialisation"
                      value={fields.specialisation}
                      onChange={handleChange}
                      className={styles.formSelect}
                    >
                      <option value="" disabled>Project Specialisation *</option>
                      <option value="glamping-eco-resorts">Glamping &amp; Eco-Resorts</option>
                      <option value="luxury-residential">Luxury Residential</option>
                      <option value="hospitality-hotels">Hospitality &amp; Hotels</option>
                      <option value="commercial">Commercial</option>
                      <option value="mixed-use">Mixed-Use Development</option>
                      <option value="other">Other</option>
                    </select>
                    <span className={styles.selectChevron}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </span>
                  </div>
                  {errors.specialisation && <p className={styles.errorMsg}>{errors.specialisation}</p>}
                </div>
              </div>

              <div className={styles.formRow}>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your current or upcoming project  -  what you're designing, the brief, and what you're hoping a manufacturing partner can deliver..."
                  value={fields.message}
                  onChange={handleChange}
                  className={styles.formTextarea}
                  rows={5}
                />
              </div>

              <div className="pb-[100px] md:pb-0" style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: 32, gap: 12 }}>
                <Button
                  text={status === "loading" ? "Submitting..." : "Submit Brief"}
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
