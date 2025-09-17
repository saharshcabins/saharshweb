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
    | "link"
    | "dark-light"
    | "lighter";
  fontSize?: string; // e.g. "56px" or "3vw"
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
  // Tailwind size mapping
  const sizeClasses = {
    xs: "text-xs",
    sm: "text-sm",
    base: "text-base",
    lg: "text-lg",
    xl: "text-xl",
    "2xl": "text-2xl",
    "3xl": "text-3xl",
    "4xl": "text-4xl",
  };

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
    "dark-light": "text-[var(--text-dark-light)]",
    lighter:"text-[var(--text-lighter)]"
  };

  // Auto responsive scaling if pixel font size is given
  const computedStyle =
    fontSize && fontSize.endsWith("px")
      ? {
          fontSize: `clamp(${parseInt(fontSize) * 0.6}px, 5vw, ${fontSize})`,
        }
      : fontSize
      ? { fontSize }
      : undefined;

  return (
    <span
      className={clsx(
        sizeClasses[size],
        weightClasses[weight],
        colorClasses[color],
        className
      )}
      style={computedStyle}
    >
      {children}
    </span>
  );
};

export default TextBuilder;
