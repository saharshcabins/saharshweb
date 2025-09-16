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
  weight?: "light" | "normal" | "medium" | "semibold" | "bold" | "extrabold";
  breakAfter?: boolean; // will insert a <wbr /> instead of <br />
};

type MultiColorTextProps = {
  items: MultiColorTextItem[];
  size?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl";
  weight?: "light" | "normal" | "medium" | "semibold" | "bold" | "extrabold";
  fontSize?: string;
  className?: string;
};

const MultiColorText: FC<MultiColorTextProps> = ({
  items,
  size = "base",
  weight = "normal",
  fontSize,
  className,
}) => {
  return (
    <span
      className={`inline-block text-center leading-snug ${className || ""}`}
    >
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <TextBuilder
            size={size}
            weight={item.weight || weight}
            color={item.color || "dark"}
            fontSize={fontSize}
            className="leading-[1.2]"
          >
            {item.text}
          </TextBuilder>
          {item.breakAfter && (
            <>
              {/* Hard break on large screens */}
              <br className="hidden lg:block" />
              {/* Soft break fallback on small screens */}
              <wbr className="block lg:hidden" />
            </>
          )}
        </React.Fragment>
      ))}
    </span>
  );
};

export default MultiColorText;
