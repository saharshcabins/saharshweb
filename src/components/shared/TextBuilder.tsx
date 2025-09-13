import { FC, ReactNode } from "react";
import clsx from "clsx";

type TextBuilderProps = {
  children: ReactNode;
  size?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl";
  weight?: "light" | "normal" | "medium" | "semibold" | "bold" | "extrabold";
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
  fontSize?: string; // Desktop font size e.g. "56px"
  className?: string;
};

const TextBuilder: FC<TextBuilderProps> = ({
  children,
  size = "base",
  weight = "normal",
  color = "dark",
  fontSize,
  className,
}) => {
  const weightClasses = {
    light: "font-light",
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
    extrabold: "font-extrabold",
  };

  const colorClasses = {
    primary: "text-[var(--color-primary)]",
    secondary: "text-[var(--color-secondary)]",
    accent: "text-[var(--color-accent)]",
    muted: "text-[var(--text-muted)]",
    light: "text-[var(--text-light)]",
    dark: "text-[var(--text-dark)]",
    foreground: "text-[var(--color-foreground)]",
    background: "text-[var(--color-background)]",
    danger: "text-red-600",
    link: "text-[var(--link-color)]",
  };

  // Automatic responsive scaling
const computedStyle = fontSize
  ? {
      fontSize: `clamp(${parseInt(fontSize) * 0.6}px, 5vw, ${fontSize})`,
    }
  : undefined;


  return (
    <span
      className={clsx(weightClasses[weight], colorClasses[color], className)}
      style={computedStyle}
    >
      {children}
    </span>
  );
};

export default TextBuilder;
