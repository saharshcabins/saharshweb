// components/GetInTouch.tsx
"use client";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import MultiColorText from "../shared/MultiColorText";
import MultiColorTextMobile from "../shared/MultiTextBuilderMobile";
import Button from "../shared/Button";

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
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: 8,
        marginTop: 16,
      }}
    >
      {options.map((opt) => {
        const active = selected.includes(opt);
        return (
          <button
            key={opt}
            type="button"
            onClick={() => onToggle(opt)}
            style={{
              padding: "9px 18px",
              minHeight: 44,
              display: "flex",
              alignItems: "center",
              border: active
                ? "1px solid var(--color-primary)"
                : "1px solid rgba(15,27,38,0.15)",
              borderRadius: 2,
              background: active ? "rgba(201,122,65,0.06)" : "transparent",
              fontFamily: "var(--font-eudoxus), sans-serif",
              fontSize: 12,
              fontWeight: active ? 500 : 400,
              letterSpacing: "0.04em",
              color: active ? "var(--color-primary)" : "var(--text-dark)",
              cursor: "pointer",
              transition: "border-color 0.18s ease, background 0.18s ease, color 0.18s ease",
            }}
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

// ─── Field wrapper ─────────────────────────────────────────────────────────────

function Field({
  label,
  required,
  error,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        style={{
          display: "block",
          fontFamily: "var(--font-eudoxus), sans-serif",
          fontSize: 10,
          fontWeight: 500,
          letterSpacing: "0.22em",
          textTransform: "uppercase" as const,
          color: error ? "#c0392b" : "var(--color-primary)",
          marginBottom: 0,
        }}
      >
        {label}
        {required && (
          <span style={{ marginLeft: 4, opacity: 0.6 }}>*</span>
        )}
      </label>
      {children}
      {error && (
        <p
          style={{
            fontFamily: "var(--font-eudoxus), sans-serif",
            fontSize: 11,
            color: "#c0392b",
            marginTop: 6,
            letterSpacing: "0.02em",
          }}
        >
          {error}
        </p>
      )}
    </div>
  );
}

// ─── Shared input style ────────────────────────────────────────────────────────

const inputStyle: React.CSSProperties = {
  display: "block",
  width: "100%",
  background: "transparent",
  border: "none",
  borderBottom: "1px solid rgba(15,27,38,0.18)",
  borderRadius: 0,
  padding: "14px 0 12px",
  fontFamily: "var(--font-eudoxus), sans-serif",
  fontSize: 15,
  color: "var(--text-dark)",
  outline: "none",
  transition: "border-color 0.2s ease",
};

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
    if (!location.trim()) e.location = "Please provide a project location.";
    if (projectTypes.length === 0) e.projectTypes = "Select at least one project type.";
    if (!investment) e.investment = "Please indicate an investment range.";
    return e;
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
        toast.success("Your enquiry has been received. We will be in touch shortly.");
        setName(""); setPhone(""); setEmail(""); setLocation(""); setNotes("");
        setProjectTypes([]); setInvestment(""); setTimeline(""); setContactMethod("");
        setErrors({});
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
    {/* ==========================================
       HOME SECTION: CONSULTATION FORM
       Purpose:
       Capture high-intent leads through a structured private consultation request.
       Primary conversion objective:
       Convert page visitors into qualified project enquiries.
    ========================================== */}
    <section
      id="consultation-form"
      data-section="consultation-form"
      className="px-[7%] pt-[72px] pb-[80px] md:pt-[96px] md:pb-[104px] lg:pt-[120px] lg:pb-[140px]"
      style={{
        background: "var(--section-accent)",
      }}
    >
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            fontFamily: "var(--font-eudoxus), sans-serif",
            fontSize: 13,
            letterSpacing: "0.02em",
          },
        }}
      />

      {/* ── Two-column grid: editorial intro | form ─────────────────────────── */}
      <div
        className="grid grid-cols-1 lg:grid-cols-[38%_62%] gap-16 lg:gap-24"
      >
        {/* ── Left: editorial introduction ──────────────────────────────────── */}
        <div className="lg:pt-2">
          <div style={{ marginBottom: 28 }}>
            <p className="eyebrow-label mb-4">Start the Conversation</p>
            <MultiColorTextMobile
              fontSize="30px"
              className="text-start sm:block md:block lg:hidden"
              items={[
                { text: "Let's Build Something", color: "dark", weight: "bold", breakAfter: true },
                { text: "Remarkable.", color: "primary", weight: "bold" },
              ]}
            />
            <MultiColorText
              fontSize="56px"
              className="text-start max-lg:hidden lg:block"
              items={[
                { text: "Let's Build Something", color: "dark", weight: "bold", breakAfter: true },
                { text: "Remarkable.", color: "primary", weight: "bold" },
              ]}
            />
          </div>

          <p
            style={{
              fontFamily: "var(--font-eudoxus), sans-serif",
              fontSize: 14,
              lineHeight: 1.8,
              color: "var(--text-dark-light)",
              fontWeight: 400,
              maxWidth: 340,
            }}
          >
            Share the details of your project. Our team will review your brief
            and arrange a dedicated conversation at your convenience.
          </p>

          {/* Thin rule + contact detail */}
          <div
            style={{
              marginTop: 48,
              paddingTop: 32,
              borderTop: "1px solid rgba(15,27,38,0.1)",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-eudoxus), sans-serif",
                fontSize: 10,
                fontWeight: 500,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "rgba(15,27,38,0.4)",
                marginBottom: 8,
              }}
            >
              Direct Enquiries
            </p>
            <a
              href="mailto:sales@saharsh.co"
              style={{
                fontFamily: "var(--font-eudoxus), sans-serif",
                fontSize: 14,
                color: "var(--text-dark)",
                textDecoration: "none",
                borderBottom: "1px solid rgba(15,27,38,0.2)",
                paddingBottom: 1,
                transition: "border-color 0.2s ease",
              }}
            >
              sales@saharsh.co
            </a>
          </div>
        </div>

        {/* ── Right: form ───────────────────────────────────────────────────── */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 52,
          }}
        >
          {/* Full Name */}
          <Field label="Full Name" required error={errors.name}>
            <input
              type="text"
              placeholder="Your full name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                if (errors.name) setErrors((p) => ({ ...p, name: undefined }));
              }}
              style={inputStyle}
              onFocus={(e) => (e.target.style.borderBottomColor = "var(--color-primary)")}
              onBlur={(e) => (e.target.style.borderBottomColor = "rgba(15,27,38,0.18)")}
            />
          </Field>

          {/* Contact Number */}
          <Field label="Contact Number" required error={errors.phone}>
            <input
              type="tel"
              placeholder="+91 or International"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
                if (errors.phone) setErrors((p) => ({ ...p, phone: undefined }));
              }}
              style={inputStyle}
              onFocus={(e) => (e.target.style.borderBottomColor = "var(--color-primary)")}
              onBlur={(e) => (e.target.style.borderBottomColor = "rgba(15,27,38,0.18)")}
            />
          </Field>

          {/* Email */}
          <Field label="Email Address">
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={inputStyle}
              onFocus={(e) => (e.target.style.borderBottomColor = "var(--color-primary)")}
              onBlur={(e) => (e.target.style.borderBottomColor = "rgba(15,27,38,0.18)")}
            />
          </Field>

          {/* Project Type */}
          <Field label="Project Type" required error={errors.projectTypes}>
            <PillGroup
              options={projectTypeOptions}
              selected={projectTypes}
              onToggle={toggleProjectType}
            />
          </Field>

          {/* Site Location */}
          <Field label="Site Location" required error={errors.location}>
            <input
              type="text"
              placeholder="City, State, Country"
              value={location}
              onChange={(e) => {
                setLocation(e.target.value);
                if (errors.location) setErrors((p) => ({ ...p, location: undefined }));
              }}
              style={inputStyle}
              onFocus={(e) => (e.target.style.borderBottomColor = "var(--color-primary)")}
              onBlur={(e) => (e.target.style.borderBottomColor = "rgba(15,27,38,0.18)")}
            />
          </Field>

          {/* Estimated Investment */}
          <Field label="Estimated Investment" required error={errors.investment}>
            <SinglePillGroup
              options={investmentOptions}
              selected={investment}
              onSelect={(opt) => {
                setInvestment(opt);
                if (errors.investment) setErrors((p) => ({ ...p, investment: undefined }));
              }}
            />
          </Field>

          {/* Preferred Timeline */}
          <Field label="Preferred Timeline">
            <SinglePillGroup
              options={timelineOptions}
              selected={timeline}
              onSelect={setTimeline}
            />
          </Field>

          {/* Preferred Consultation Method */}
          <Field label="Preferred Consultation Method">
            <SinglePillGroup
              options={contactMethodOptions}
              selected={contactMethod}
              onSelect={setContactMethod}
            />
          </Field>

          {/* Additional Notes */}
          <Field label="Additional Notes">
            <textarea
              placeholder="Tell us anything else relevant to your brief."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={4}
              style={{
                ...inputStyle,
                resize: "none",
                paddingTop: 14,
                lineHeight: 1.7,
              }}
              onFocus={(e) => (e.target.style.borderBottomColor = "var(--color-primary)")}
              onBlur={(e) => (e.target.style.borderBottomColor = "rgba(15,27,38,0.18)")}
            />
          </Field>

          {/* Submit */}
          <div style={{ paddingTop: 8 }}>
            <Button
              text={isSubmitting ? "Sending…" : "Submit Consultation Request"}
              onClick={handleSubmit}
              disabled={isSubmitting}
            />

            <p
              style={{
                marginTop: 16,
                fontFamily: "var(--font-eudoxus), sans-serif",
                fontSize: 11,
                color: "rgba(15,27,38,0.4)",
                letterSpacing: "0.04em",
                lineHeight: 1.6,
              }}
            >
              Your information is handled with complete discretion and will never
              be shared with third parties.
            </p>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default GetInTouch;
