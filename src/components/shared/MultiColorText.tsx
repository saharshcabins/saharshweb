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
};

type MultiColorTextProps = {
  items: MultiColorTextItem[];
  size?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl";
  weight?: "light" | "normal" | "medium" | "semibold" | "bold" | "extrabold";
  fontSize?: string; // e.g., "56px"
  className?: string;
};

/**
 * Renders multiple pieces of text in one line with different colors and spacing.
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
        <TextBuilder
          key={index}
          size={size}
          weight={weight}
          color={item.color || "dark"}
          fontSize={fontSize} // pass custom font size if any
        >
          {item.text}
        </TextBuilder>
      ))}
    </span>
  );
};

export default MultiColorText;
