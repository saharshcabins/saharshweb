// components/GetInTouch.tsx
"use client";
import React, { useState, useRef, useEffect } from "react";
import MultiColorText from "../shared/MultiColorText";
import TextBuilder from "../shared/TextBuilder";
import InputBox from "../shared/Input";
import Button from "../shared/Button";
import toast, { Toaster } from "react-hot-toast";
import MultiColorTextMobile from "../shared/MultiTextBuilderMobile";

const interestOptions = [
  "Luxury Cottage",
  "Luxury Villa",
  "Marketing Sales Office",
  "Portable Cafe",
  "Resort",
  "International Export",
];

const budgetOptions = [
  "8 lakh - 15 lakh",
  "15 lakh - 30 lakh",
  "30 lakh - 50 lakh",
  "50 lakh - 1 crore",
  "1 crore - 3 crore",
  "3 crore +",
];

type FormErrors = {
  Name?: string;
  Phone?: string;
  "Project Location"?: string;
  Budget?: string;
  Interest?: string;
};

const GetInTouch = () => {
  const [formData, setFormData] = useState<Record<string, string>>({
    Name: "",
    Phone: "",
    "Project Location": "",
    Email: "",
  });
  const [budget, setBudget] = useState<string>("");
  const [budgetOpen, setBudgetOpen] = useState(false);
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [interestOpen, setInterestOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const budgetRef = useRef<HTMLDivElement>(null);
  const interestRef = useRef<HTMLDivElement>(null);

  const handleInputChange = (key: string, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
    if (errors[key as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [key]: undefined }));
    }
  };

  const handleBudgetSelect = (option: string) => {
    setBudget(option);
    setBudgetOpen(false);
    if (errors.Budget) {
      setErrors((prev) => ({ ...prev, Budget: undefined }));
    }
  };

  const handleInterestToggle = (option: string) => {
    setSelectedInterests((prev) =>
      prev.includes(option) ? prev.filter((o) => o !== option) : [...prev, option]
    );
    if (errors.Interest) {
      setErrors((prev) => ({ ...prev, Interest: undefined }));
    }
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (budgetRef.current && !budgetRef.current.contains(e.target as Node)) {
        setBudgetOpen(false);
      }
      if (interestRef.current && !interestRef.current.contains(e.target as Node)) {
        setInterestOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const validate = (): FormErrors => {
    const newErrors: FormErrors = {};

    if (!formData.Name.trim()) newErrors.Name = "Name is required.";

    if (!formData.Phone.trim()) {
      newErrors.Phone = "Phone number is required.";
    } else if (!/^\+?[\d\s\-()]{7,15}$/.test(formData.Phone.trim())) {
      newErrors.Phone = "Enter a valid phone number.";
    }

    if (!formData["Project Location"].trim())
      newErrors["Project Location"] = "Project location is required.";

    if (!budget) newErrors.Budget = "Please select a budget range.";

    if (selectedInterests.length === 0)
      newErrors.Interest = "Please select at least one interest.";

    return newErrors;
  };

  const handleSubmit = async () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    const params = new URLSearchParams();
    for (const key in formData) {
      if (Object.prototype.hasOwnProperty.call(formData, key)) {
        params.append(key, formData[key]);
      }
    }
    params.append("Interested In", selectedInterests.join(", "));
    params.append("Budget", budget);

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxWuThRqT9j4hy2D8lPAeO7zMuTbrfwZCcfAt6DIx8wOe07Yy5pfwyCT4TmBFAO4nta/exec",
        {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: params.toString(),
        }
      );

      if (response.ok) {
        toast.success("Message sent successfully!", { position: "top-right" });
        setFormData({ Name: "", Phone: "", "Project Location": "", Email: "" });
        setSelectedInterests([]);
        setBudget("");
        setErrors({});
      } else {
        toast.error(`Failed to send: ${response.status}`, { position: "top-right" });
      }
    } catch (error) {
      toast.error("Failed to send message. Please try again.", { position: "top-right" });
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const ErrorMsg = ({ msg }: { msg?: string }) =>
    msg ? <p className="mt-1 text-[12px] md:text-[13px] text-red-500 pl-2">{msg}</p> : null;

  const interestDisplayLabel =
    selectedInterests.length === 0
      ? "Interested In *"
      : selectedInterests.length === 1
      ? selectedInterests[0]
      : `${selectedInterests[0]} +${selectedInterests.length - 1} more`;

  return (
    <div
      id="contact-us"
      className="w-full px-6 py-12 md:px-[10%] md:pr-[4%]"
      style={{
        background:
          "linear-gradient(180deg, var(--text-light) 0%, var(--section-accent) 50%, var(--text-light) 100%)",
      }}
    >
      <Toaster />
      {/* ✅ removed duplicate id="contact-us" from this inner div */}
      <div className="flex flex-col md:flex-col justify-between  md:items-center gap-4">
        <MultiColorTextMobile
          fontSize="24px"
          className="text-start sm:block md:block lg:hidden"
          items={[
            { text: "Love to hear from you,", color: "dark", weight: "medium", breakAfter: true },
            { text: "get in touch!", color: "primary", weight: "bold" },
          ]}
        />
        <MultiColorText
          fontSize="75px"
          className="text-center max-lg:hidden lg:block"
          items={[
            { text: "Love to hear from you,", color: "dark", weight: "medium", breakAfter: true },
            { text: "get in touch!", color: "primary", weight: "bold" },
          ]}
        />
        <TextBuilder
          fontSize="20px"
          color="dark-light"
          className="w-full  pt-[5px] md:pt-[15px] text-center"
        >
          Understanding your requirements, budget, and project scope led <br />the initial discussion of
          design possibilities and technical specifications.
        </TextBuilder>
      </div>

      <div className="mt-12 md:mt-16">
        {/* Row 1: Name + Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <InputBox
              placeholder="Name *"
              value={formData.Name}
              onChange={(e) => handleInputChange("Name", e.target.value)}
              className={errors.Name ? "border-red-400" : ""}
            />
            <ErrorMsg msg={errors.Name} />
          </div>
          <div>
            <InputBox
              placeholder="Phone *"
              type="tel"
              value={formData.Phone}
              onChange={(e) => handleInputChange("Phone", e.target.value)}
              className={errors.Phone ? "border-red-400" : ""}
            />
            <ErrorMsg msg={errors.Phone} />
          </div>
        </div>

        {/* Row 2: Project Location + Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div>
            <InputBox
              placeholder="Project Location *"
              value={formData["Project Location"]}
              onChange={(e) => handleInputChange("Project Location", e.target.value)}
              className={errors["Project Location"] ? "border-red-400" : ""}
            />
            <ErrorMsg msg={errors["Project Location"]} />
          </div>
          <div>
            <InputBox
              placeholder="Email"
              type="email"
              value={formData.Email}
              onChange={(e) => handleInputChange("Email", e.target.value)}
            />
          </div>
        </div>

        {/* Row 3: Budget + Interested In */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {/* Budget */}
          <div className="relative" ref={budgetRef}>
            <div
              onClick={() => setBudgetOpen((prev) => !prev)}
              className="w-full cursor-pointer h-[52px] md:h-[65px] border bg-white rounded-[12px] md:rounded-[16px] px-[16px] md:px-[36px] flex items-center justify-between transition-all duration-300 select-none"
              style={{
                borderColor: errors.Budget
                  ? "rgb(248 113 113)"
                  : budgetOpen
                  ? "var(--color-primary)"
                  : "var(--text-dark-25)",
              }}
            >
              <span
                className="text-[14px] md:text-[18px]"
                style={{ color: "var(--text-dark-50)", opacity: budget ? 1 : 0.5 }}
              >
                {budget || "Budget *"}
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`w-4 h-4 transition-transform duration-200 flex-shrink-0 ${budgetOpen ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="var(--text-dark-25)"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </div>

            {budgetOpen && (
              <ul className="absolute z-50 w-full mt-1 bg-white rounded-[12px] md:rounded-[16px] overflow-hidden shadow-lg border border-[var(--text-dark-25)]">
                {budgetOptions.map((option, i) => (
                  <li
                    key={i}
                    className="px-[16px] md:px-[36px] py-3 text-[14px] md:text-[18px] text-[var(--text-dark-50)] cursor-pointer hover:bg-[var(--section-accent)] transition-colors duration-150"
                    style={{
                      borderBottom:
                        i < budgetOptions.length - 1 ? "1px solid var(--text-dark-25)" : "none",
                    }}
                    onClick={() => handleBudgetSelect(option)}
                  >
                    {option}
                  </li>
                ))}
              </ul>
            )}
            <ErrorMsg msg={errors.Budget} />
          </div>

          {/* Interested In */}
          <div className="relative" ref={interestRef}>
            <div
              onClick={() => setInterestOpen((prev) => !prev)}
              className="w-full cursor-pointer h-[52px] md:h-[65px] border bg-white rounded-[12px] md:rounded-[16px] px-[16px] md:px-[36px] flex items-center justify-between transition-all duration-300 select-none"
              style={{
                borderColor: errors.Interest
                  ? "rgb(248 113 113)"
                  : interestOpen
                  ? "var(--color-primary)"
                  : "var(--text-dark-25)",
              }}
            >
              <span
                className="text-[14px] md:text-[18px] truncate pr-2"
                style={{
                  color: "var(--text-dark-50)",
                  opacity: selectedInterests.length > 0 ? 1 : 0.5,
                }}
              >
                {interestDisplayLabel}
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`w-4 h-4 transition-transform duration-200 flex-shrink-0 ${interestOpen ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="var(--text-dark-25)"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </div>

            {interestOpen && (
              <ul className="absolute z-50 w-full mt-1 bg-white rounded-[12px] md:rounded-[16px] overflow-hidden shadow-lg border border-[var(--text-dark-25)]">
                {interestOptions.map((option, i) => {
                  const isSelected = selectedInterests.includes(option);
                  return (
                    <li
                      key={i}
                      className="px-[16px] md:px-[36px] py-3 text-[14px] md:text-[18px] cursor-pointer flex items-center justify-between transition-colors duration-150"
                      style={{
                        color: isSelected ? "var(--color-primary)" : "var(--text-dark-50)",
                        backgroundColor: isSelected ? "var(--section-accent)" : "white",
                        borderBottom:
                          i < interestOptions.length - 1 ? "1px solid var(--text-dark-25)" : "none",
                      }}
                      onClick={() => handleInterestToggle(option)}
                    >
                      <span>{option}</span>
                      {isSelected && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-4 flex-shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="var(--color-primary)"
                          strokeWidth={2.5}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </li>
                  );
                })}
              </ul>
            )}
            <ErrorMsg msg={errors.Interest} />
          </div>
        </div>

        {/* Submit */}
        <div className="mt-8 flex justify-center">
          <Button
            text={isSubmitting ? "Sending..." : "Submit"}
            className="w-full md:w-auto"
            onClick={handleSubmit}
            disabled={isSubmitting}
          />
        </div>

        {/* Direct contact */}
        <div className="border-t mt-4 border-gray-200 pt-6 text-center space-y-2">
          <TextBuilder weight="medium" color="dark" fontSize="20px" className="block">
            Or Reach Us Directly
          </TextBuilder>
          <div className="space-y-1">
            <TextBuilder weight="normal" color="muted" className="block">
              Call: +91-701-9495-021
            </TextBuilder>
            <TextBuilder weight="normal" color="muted" className="block">
              Email: sales@saharsh.co
            </TextBuilder>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;