"use client";
import React, { useState } from "react";
import styles from "./GetInTouch.module.css";
import Button from "@/components/shared/Button";

interface FormFields {
  full_name: string;
  email: string;
  phone: string;
  location: string;
  project_type: string;
  investment: string;
  timeline: string;
  contact_method: string;
  message: string;
}

const initialFields: FormFields = {
  full_name: "",
  email: "",
  phone: "",
  location: "",
  project_type: "",
  investment: "",
  timeline: "",
  contact_method: "",
  message: "",
};

type FormErrors = {
  full_name?: string;
  email?: string;
  phone?: string;
  location?: string;
  project_type?: string;
  investment?: string;
};

const GetInTouch = () => {
  const [fields, setFields] = useState<FormFields>(initialFields);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errors, setErrors] = useState<FormErrors>({});

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    // Clear error for this field
    if (errors[e.target.name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [e.target.name]: undefined }));
    }
  }

  function validate(): boolean {
    const newErrors: FormErrors = {};
    if (!fields.full_name.trim()) newErrors.full_name = "Full name is required.";
    if (!fields.email.trim()) newErrors.email = "Email address is required.";
    if (!fields.phone.trim()) newErrors.phone = "Contact number is required.";
    if (!fields.location.trim()) newErrors.location = "Site location is required.";
    if (!fields.project_type) newErrors.project_type = "Project type is required.";
    if (!fields.investment) newErrors.investment = "Estimated budget is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit() {
    if (!validate()) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          Name: fields.full_name,
          Email: fields.email,
          Phone: fields.phone,
          "Project Location": fields.location,
          Interest: fields.project_type,
          Budget: fields.investment,
          Timeline: fields.timeline,
          "Contact Method": fields.contact_method,
          Notes: fields.message,
        }),
      });
      if (!res.ok) throw new Error("Network response was not ok");
      setStatus("success");
      setFields(initialFields);
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className={styles.formSection} id="consultation-form">
      <div className={styles.formWrapper}>
        <div className={styles.formIntro}>
          <h2 className={styles.formH2}>
            Let&apos;s Build Something{" "}
            <span style={{ color: "var(--color-primary)" }}>Remarkable.</span>
          </h2>
          <p className={styles.formSubtext}>
            Share the details of your project. Our team will review your brief and arrange a
            dedicated conversation at your convenience.
          </p>
          <span className={styles.divider} />
          <div className={styles.trustBadgeRow}>
            <span className={styles.trustBadge}>Marriott Approved</span>
            <span className={styles.trustBadge}>48-Hour Response</span>
            <span className={styles.trustBadge}>Custom Floor Plans</span>
          </div>
          <p className={styles.note}>
            All submissions are treated with strict professional confidentiality.
          </p>
        </div>

        {status === "success" ? (
          <div className={styles.successMsg}>
            <h3>Consultation Request Received</h3>
            <p>
              Our team will review your brief and be in touch within 48 hours to discuss your
              vision and project requirements.
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
                  name="email"
                  type="email"
                  placeholder="Email Address *"
                  required
                  value={fields.email}
                  onChange={handleChange}
                  className={styles.formInput}
                />
                {errors.email && <p className={styles.errorMsg}>{errors.email}</p>}
              </div>
              <div className={styles.formRow}>
                <input
                  name="phone"
                  type="tel"
                  placeholder="Contact Number *"
                  required
                  value={fields.phone}
                  onChange={handleChange}
                  className={styles.formInput}
                />
                {errors.phone && <p className={styles.errorMsg}>{errors.phone}</p>}
              </div>
              <div className={styles.formRow}>
                <input
                  name="location"
                  type="text"
                  placeholder="Site Location *"
                  required
                  value={fields.location}
                  onChange={handleChange}
                  className={styles.formInput}
                />
                {errors.location && <p className={styles.errorMsg}>{errors.location}</p>}
              </div>
              <div className={styles.formRow}>
                <div className={styles.selectWrapper}>
                  <select
                    name="project_type"
                    value={fields.project_type}
                    onChange={handleChange}
                    className={styles.formSelect}
                  >
                    <option value="">Project Type *</option>
                    <option value="Luxury Cottage">Luxury Cottage</option>
                    <option value="Luxury Villa">Luxury Villa</option>
                    <option value="Resort Development">Resort Development</option>
                    <option value="Portable Cafe">Portable Cafe</option>
                    <option value="Sales Office">Sales Office</option>
                    <option value="International Export">International Export</option>
                  </select>
                  <span className={styles.selectChevron}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </span>
                </div>
                {errors.project_type && <p className={styles.errorMsg}>{errors.project_type}</p>}
              </div>
              <div className={styles.formRow}>
                <div className={styles.selectWrapper}>
                  <select
                    name="investment"
                    value={fields.investment}
                    onChange={handleChange}
                    className={styles.formSelect}
                  >
                    <option value="">Estimated Budget *</option>
                    <option value="Under ₹10 Lakh">Under ₹10 Lakh</option>
                    <option value="₹10L – ₹25L">₹10L – ₹25L</option>
                    <option value="₹25L – ₹50L">₹25L – ₹50L</option>
                    <option value="₹50L – ₹1 Crore">₹50L – ₹1 Crore</option>
                    <option value="₹1 Crore – ₹3 Crore">₹1 Crore – ₹3 Crore</option>
                    <option value="Above ₹3 Crore">Above ₹3 Crore</option>
                  </select>
                  <span className={styles.selectChevron}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </span>
                </div>
                {errors.investment && <p className={styles.errorMsg}>{errors.investment}</p>}
              </div>
              <div className={styles.formRow}>
                <div className={styles.selectWrapper}>
                  <select
                    name="timeline"
                    value={fields.timeline}
                    onChange={handleChange}
                    className={styles.formSelect}
                  >
                    <option value="">Timeline</option>
                    <option value="4 – 8 Weeks">4 – 8 Weeks</option>
                    <option value="2 – 6 Months">2 – 6 Months</option>
                    <option value="6+ Months">6+ Months</option>
                    <option value="Flexible">Flexible</option>
                  </select>
                  <span className={styles.selectChevron}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </span>
                </div>
              </div>
              <div className={styles.formRow}>
                <div className={styles.selectWrapper}>
                  <select
                    name="contact_method"
                    value={fields.contact_method}
                    onChange={handleChange}
                    className={styles.formSelect}
                  >
                    <option value="">Preferred Contact</option>
                    <option value="WhatsApp">WhatsApp</option>
                    <option value="Phone Call">Phone Call</option>
                    <option value="Email">Email</option>
                    <option value="On-Site Visit">On-Site Visit</option>
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
                name="message"
                placeholder="Briefly describe your project and what you&apos;re looking to build..."
                value={fields.message}
                onChange={handleChange}
                className={styles.formTextarea}
                rows={5}
              />
            </div>

            <div className={styles.submitButtonContainer}>
              <Button
                text={status === "loading" ? "Submitting..." : "Submit Consultation Request"}
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
  );
};

export default GetInTouch;
