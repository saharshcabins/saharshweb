import React, { FC } from "react";
import TextBuilderMobile from "./TextBuilderMobile"; // Changed import to the mobile version

type MultiColorTextItem = {
  text: string;
  color?:
    | "primary"
    | "secondary"
    | "muted"
    | "light"
    | "dark"
    | "foreground"
    | "background"
    | "accent"
    | "danger"
    | "link"
    | "dark-light"
    | "lighter"
    | "light50"
    | "light25"
    | "light60"
    | "dark50"
    | "section50"; // Added more colors from the mobile TextBuilder
  weight?: "light" | "normal" | "medium" | "semibold" | "bold" | "extrabold";
  breakAfter?: boolean; // Now functions as a simple line break
};

type MultiColorTextProps = {
  items: MultiColorTextItem[];
  size?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl";
  weight?: "light" | "normal" | "medium" | "semibold" | "bold" | "extrabold";
  fontSize?: string;
  className?: string;
};

const MultiColorTextMobile: FC<MultiColorTextProps> = ({
  items,
  size = "base",
  weight = "normal",
  fontSize,
  className,
}) => {
  return (
    <span className={`inline-block text-center leading-snug ${className || ""}`}>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <TextBuilderMobile // Changed component to the mobile version
            size={size}
            weight={item.weight || weight}
            color={item.color || "dark"}
            fontSize={fontSize}
            className="leading-[1.2]"
          >
            {item.text}
          </TextBuilderMobile>
          {item.breakAfter && <br />}
        </React.Fragment>
      ))}
    </span>
  );
};

export default MultiColorTextMobile;