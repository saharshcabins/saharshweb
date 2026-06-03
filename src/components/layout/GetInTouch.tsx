"use client";
import React, { useState } from "react";
import styles from "./GetInTouch.module.css";

// ─── Data ──────────────────────────────────────────────────────────────────────

const projectTypeOptions = [
  "Luxury Cottage",
  "Luxury Villa",
  "Resort Development",
  "Portable Cafe",
  "Sales Office",
  "International Export",
];

const investmentOptions = [
  "Under ₹10 Lakh",
  "₹10L – ₹25L",
  "₹25L – ₹50L",
  "₹50L – ₹1 Crore",
  "₹1 Crore – ₹3 Crore",
  "Above ₹3 Crore",
];

const timelineOptions = ["4 – 8 Weeks", "2 – 6 Months", "6+ Months", "Flexible"];

const contactMethodOptions = ["WhatsApp", "Phone Call", "Email", "On-Site Visit"];

// ─── Types ─────────────────────────────────────────────────────────────────────

type FormErrors = {
  name?: string;
  phone?: string;
  email?: string;
  location?: string;
  projectTypes?: string;
  investment?: string;
};

// ─── Pill selector ─────────────────────────────────────────────────────────────

function PillGroup({
  options,
  selected,
  onToggle,
}: {
  options: string[];
  selected: string[];
  onToggle: (opt: string) => void;
}) {
  return (
    <div className={styles.pillGroup}>
      {options.map((opt) => {
        const active = selected.includes(opt);
        return (
          <button
            key={opt}
            type="button"
            onClick={() => onToggle(opt)}
            className={`${styles.pill} ${active ? styles.active : ""}`}
          >
            {opt}
          </button>
        );
      })}
    </div>
  );
}

// ─── Single-select pill ────────────────────────────────────────────────────────

function SinglePillGroup({
  options,
  selected,
  onSelect,
}: {
  options: string[];
  selected: string;
  onSelect: (opt: string) => void;
}) {
  return (
    <PillGroup
      options={options}
      selected={selected ? [selected] : []}
      onToggle={(opt) => onSelect(selected === opt ? "" : opt)}
    />
  );
}

// ─── Component ─────────────────────────────────────────────────────────────────

const GetInTouch = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [notes, setNotes] = useState("");
  const [projectTypes, setProjectTypes] = useState<string[]>([]);
  const [investment, setInvestment] = useState("");
  const [timeline, setTimeline] = useState("");
  const [contactMethod, setContactMethod] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [showSuccess, setShowSuccess] = useState(false);

  const toggleProjectType = (opt: string) => {
    setProjectTypes((prev) =>
      prev.includes(opt) ? prev.filter((o) => o !== opt) : [...prev, opt]
    );
    if (errors.projectTypes) setErrors((p) => ({ ...p, projectTypes: undefined }));
  };

  const validate = (): FormErrors => {
    const e: FormErrors = {};
    if (!name.trim()) e.name = "Please enter your name.";
    if (!phone.trim()) e.phone = "A contact number is required.";
    else if (!/^\+?[\d\s\-()]{7,20}$/.test(phone.trim()))
      e.phone = "Enter a valid phone number.";
    if (email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      e.email = "Enter a valid email address.";
    if (!location.trim()) e.location = "Please provide a project location.";
    if (projectTypes.length === 0) e.projectTypes = "Select at least one project type.";
    if (!investment) e.investment = "Please indicate an investment range.";
    return e;
  };

  const resetForm = () => {
    setName("");
    setPhone("");
    setEmail("");
    setLocation("");
    setNotes("");
    setProjectTypes([]);
    setInvestment("");
    setTimeline("");
    setContactMethod("");
    setErrors({});
  };

  const handleSubmit = async () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      const payload = {
        Name: name,
        Phone: phone,
        Email: email,
        "Project Location": location,
        Budget: investment,
        Interest: projectTypes.join(", "),
        Timeline: timeline,
        "Contact Method": contactMethod,
        Notes: notes,
      };

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setShowSuccess(true);
        resetForm();
        setTimeout(() => setShowSuccess(false), 5000);
      } else {
        setErrors({ name: "Failed to submit. Please try again." });
      }
    } catch {
      setErrors({ name: "An error occurred. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="consultation-form"
      data-section="consultation-form"
      className="px-[7%] py-[72px] md:py-[96px] lg:py-[120px]"
      style={{ background: "var(--section-accent)" }}
    >
      {/* Form Container */}
      <div className={styles.formContainer}>
        {/* Header */}
        <div className={styles.formHeader}>
          <h2 className={styles.formHeading}>Get In Touch</h2>
          <p className={styles.formSubheading}>
            Share the details of your project and we'll get back to you within 48 hours
          </p>
        </div>

        {/* Form Fields */}
        <div>
          {/* Name & Email */}
          <div className={styles.formGroup}>
            <div className={styles.inputGroup}>
              <label className={styles.label}>Full Name *</label>
              <input
                type="text"
                placeholder="Your full name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  if (errors.name) setErrors((p) => ({ ...p, name: undefined }));
                }}
                className={styles.input}
              />
              {errors.name && <p style={{ color: "#c0392b", fontSize: 12, marginTop: 6 }}>{errors.name}</p>}
            </div>
            <div className={styles.inputGroup}>
              <label className={styles.label}>Email Address</label>
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (errors.email) setErrors((p) => ({ ...p, email: undefined }));
                }}
                className={styles.input}
              />
              {errors.email && <p style={{ color: "#c0392b", fontSize: 12, marginTop: 6 }}>{errors.email}</p>}
            </div>
          </div>

          {/* Phone & Location */}
          <div className={styles.formGroup}>
            <div className={styles.inputGroup}>
              <label className={styles.label}>Contact Number *</label>
              <input
                type="tel"
                placeholder="+91 or International"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                  if (errors.phone) setErrors((p) => ({ ...p, phone: undefined }));
                }}
                className={styles.input}
              />
              {errors.phone && <p style={{ color: "#c0392b", fontSize: 12, marginTop: 6 }}>{errors.phone}</p>}
            </div>
            <div className={styles.inputGroup}>
              <label className={styles.label}>Site Location *</label>
              <input
                type="text"
                placeholder="City, State, Country"
                value={location}
                onChange={(e) => {
                  setLocation(e.target.value);
                  if (errors.location) setErrors((p) => ({ ...p, location: undefined }));
                }}
                className={styles.input}
              />
              {errors.location && <p style={{ color: "#c0392b", fontSize: 12, marginTop: 6 }}>{errors.location}</p>}
            </div>
          </div>

          {/* Project Type */}
          <div className={styles.formGroup + " " + styles.fullWidth}>
            <div>
              <label className={styles.label}>Project Type *</label>
              <PillGroup
                options={projectTypeOptions}
                selected={projectTypes}
                onToggle={toggleProjectType}
              />
              {errors.projectTypes && <p style={{ color: "#c0392b", fontSize: 12, marginTop: 6 }}>{errors.projectTypes}</p>}
            </div>
          </div>

          {/* Budget & Timeline & Contact Method */}
          <div className={styles.formGroup + " " + styles.threeCol}>
            <div className={styles.inputGroup}>
              <label className={styles.label}>Estimated Budget *</label>
              <SinglePillGroup
                options={investmentOptions}
                selected={investment}
                onSelect={(opt) => {
                  setInvestment(opt);
                  if (errors.investment) setErrors((p) => ({ ...p, investment: undefined }));
                }}
              />
              {errors.investment && <p style={{ color: "#c0392b", fontSize: 12, marginTop: 6 }}>{errors.investment}</p>}
            </div>
            <div className={styles.inputGroup}>
              <label className={styles.label}>Timeline</label>
              <SinglePillGroup
                options={timelineOptions}
                selected={timeline}
                onSelect={setTimeline}
              />
            </div>
            <div className={styles.inputGroup}>
              <label className={styles.label}>Preferred Contact</label>
              <SinglePillGroup
                options={contactMethodOptions}
                selected={contactMethod}
                onSelect={setContactMethod}
              />
            </div>
          </div>

          {/* Notes */}
          <div className={styles.formGroup + " " + styles.fullWidth}>
            <div className={styles.inputGroup}>
              <label className={styles.label}>Additional Notes</label>
              <textarea
                placeholder="Tell us anything else relevant to your project..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className={styles.textarea}
              />
            </div>
          </div>

          {/* Trust Badges */}
          <div className={styles.trustBadges}>
            <div className={styles.badge}>
              <div className={styles.badgeIcon}>✓</div>
              <div className={styles.badgeText}>Marriott Approved</div>
            </div>
            <div className={styles.badge}>
              <div className={styles.badgeIcon}>⚡</div>
              <div className={styles.badgeText}>48-Hour Response</div>
            </div>
            <div className={styles.badge}>
              <div className={styles.badgeIcon}>🏗</div>
              <div className={styles.badgeText}>Custom Floor Plans</div>
            </div>
          </div>

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className={styles.submitButton}
          >
            {isSubmitting ? "Submitting..." : "Submit Consultation Request"}
          </button>

          <p style={{
            marginTop: 16,
            fontSize: 12,
            color: "rgba(15,27,38,0.5)",
            textAlign: "center",
            lineHeight: 1.6,
          }}>
            Your information is handled with complete discretion and will never be shared with third parties.
          </p>
        </div>
      </div>

      {/* Success Modal */}
      {showSuccess && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <div className={styles.successIcon}>✓</div>
            <h3 className={styles.successHeading}>Request Received!</h3>
            <p className={styles.successMessage}>
              Thank you for reaching out. Our team will review your project details and contact you within 48 hours to discuss your vision.
            </p>
            <button
              onClick={() => setShowSuccess(false)}
              className={styles.modalButton}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default GetInTouch;
