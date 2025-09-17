// components/GetInTouch.tsx
"use client";
import React, { useState } from "react";
import MultiColorText from "../shared/MultiColorText";
import TextBuilder from "../shared/TextBuilder";
import InputBox from "../shared/Input";
import ProjectLabel from "../shared/ProjectLabel";
import Button from "../shared/Button";
import toast, { Toaster } from "react-hot-toast";

const projectLabels = [
  "2 BHK",
  "1 BHK",
  "Customized",
  "Cafe",
  "Skylighter",
  "Rustico",
];

const GetInTouch = () => {
  const [formData, setFormData] = useState<Record<string, string>>({
    Name: "",
    "Email Id": "",
    "Contact Number": "",
    "Message (Optional)": "",
  });
  const [selectedLabels, setSelectedLabels] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (key: string, value: string) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleLabelClick = (label: string) => {
    setSelectedLabels((prevLabels) =>
      prevLabels.includes(label)
        ? prevLabels.filter((l) => l !== label)
        : [...prevLabels, label]
    );
  };

 const handleSubmit = async () => {
  setIsSubmitting(true);

  const params = new URLSearchParams();

  for (const key in formData) {
    if (Object.prototype.hasOwnProperty.call(formData, key)) {
      params.append(key, formData[key]);
    }
  }

  params.append("Projects", selectedLabels.join(", "));

  try {
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbxWuThRqT9j4hy2D8lPAeO7zMuTbrfwZCcfAt6DIx8wOe07Yy5pfwyCT4TmBFAO4nta/exec",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: params.toString(),
      }
    );

    if (response.ok) {
      toast.success("Message sent successfully!", { position: "top-right" });

      setFormData({
        Name: "",
        "Email Id": "",
        "Contact Number": "",
        "Message (Optional)": "",
      });
      setSelectedLabels([]);
    } else {
      toast.error(`Failed to send: ${response.status}`, { position: "top-right" });
    }
  } catch (error) {
    toast.error("Failed to send message. Please try again.", {
      position: "top-right",
    });
    console.error("Error submitting form:", error);
  } finally {
    setIsSubmitting(false);
  }
};

  // ... (rest of the component JSX is the same)
  return (
    <div
      className="w-full min-h-screen p-[10%] pr-[4%]"
      style={{
        background:
          "linear-gradient(180deg, var(--text-light) 0%, var(--section-accent) 50%, var(--text-light) 100%)",
      }}
    >
      <Toaster />
      <div className="flex flex-row justify-between items-start">
        <MultiColorText
          fontSize="56px"
          className="text-start"
          items={[
            {
              text: "Love to hear from you,",
              color: "dark",
              weight: "medium",
              breakAfter: true,
            },
            { text: "get in touch!", color: "primary", weight: "bold" },
          ]}
        />
        <TextBuilder
          fontSize="20px"
          color="dark-light"
          className="w-[35%] pt-[15px]"
        >
          Understanding your requirements, budget, and project scope led the
          initial discussion of design possibilities and technical
          specifications.
        </TextBuilder>
      </div>

      <div className="mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           <InputBox
      placeholder="Name"
      value={formData.Name}
      onChange={(e) => handleInputChange("Name", e.target.value)} // Change here
    />
    <InputBox
      placeholder="Email Id"
      type="email"
      value={formData["Email Id"]}
      onChange={(e) => handleInputChange("Email Id", e.target.value)} // Change here
    />
    <InputBox
      placeholder="Contact Number"
      type="tel"
      value={formData["Contact Number"]}
      onChange={(e) => handleInputChange("Contact Number", e.target.value)} // Change here
    />
    <InputBox
      placeholder="Message (Optional)"
      value={formData["Message (Optional)"]}
      onChange={(e) => handleInputChange("Message (Optional)", e.target.value)} // Change here
    />
        </div>

        <div className="mt-12 flex flex-row md:flex-row items-start md:items-start gap-6">
          <TextBuilder
            fontSize="18px"
            color="dark50"
            className="whitespace-nowrap pt-1"
          >
            Select projects
            <br /> you're interested in:
          </TextBuilder>
          <div className="flex flex-wrap gap-3">
            {projectLabels.map((label, index) => (
              <ProjectLabel
                key={index}
                text={label}
                isActive={selectedLabels.includes(label)}
                onClick={() => handleLabelClick(label)}
              />
            ))}
          </div>
          <div className="">
            <Button
              text={isSubmitting ? "Sending..." : "Send"}
              className="w-full md:w-auto"
              onClick={handleSubmit}
              disabled={isSubmitting}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;