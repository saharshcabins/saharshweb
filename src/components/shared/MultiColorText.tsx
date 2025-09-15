import React, { FC } from "react";
import TextBuilder from "./TextBuilder";

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
    | "link";
  weight?: "light" | "normal" | "medium" | "semibold" | "bold" | "extrabold"; // ✅ per-item weight
  breakAfter?: boolean; // ✅ allow line break
};

type MultiColorTextProps = {
  items: MultiColorTextItem[];
  size?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl";
  weight?: "light" | "normal" | "medium" | "semibold" | "bold" | "extrabold"; // default fallback
  fontSize?: string;
  className?: string;
};

/**
 * Renders multiple pieces of text in one line with different colors, spacing, and optional breaks.
 */
const MultiColorText: FC<MultiColorTextProps> = ({
  items,
  size = "base",
  weight = "normal",
  fontSize,
  className,
}) => {
  return (
    <span className={className}>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <TextBuilder
            size={size}
            weight={item.weight || weight} // ✅ apply per-item weight if given
            color={item.color || "dark"}
            fontSize={fontSize}
          >
            {item.text}
          </TextBuilder>
          {item.breakAfter && <br />} {/* ✅ optional line break */}
        </React.Fragment>
      ))}
    </span>
  );
};

export default MultiColorText;
