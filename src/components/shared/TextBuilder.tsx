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
    | "lighter"
    | "light50"
    | "light25"
    | "light60"
    | "dark50"
    | "section50"
    | "section";
  fontSize?: string;       // responsive (clamp if px)
  fixedFontSize?: string;  // ✅ NEW: always fixed (no clamp)
  className?: string;
};

const TextBuilder: FC<TextBuilderProps> = ({
  children,
  size = "base",
  weight = "normal",
  color = "dark",
  fontSize,
  fixedFontSize,
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
    lighter: "text-[var(--text-lighter)]",
    light50: "text-[var(--text-light-50)]",
    light25: "text-[var(--text-light-25)]",
    light60: "text-[var(--text-light-60)]",
    dark50: "text-[var(--text-dark-50)]",
    section50: "text-[var(--section-accent-50)]",
    section: "text-[var(--section-accent)]",
  };

  // ✅ Priority:
  // 1. fixedFontSize → exact value (no clamp)
  // 2. fontSize (px) → responsive clamp
  // 3. fontSize (other units) → direct apply
  // 4. fallback → Tailwind size
  const computedStyle =
    fixedFontSize
      ? { fontSize: fixedFontSize }
      : fontSize && fontSize.endsWith("px")
      ? (() => {
          const px = parseInt(fontSize);
          const vw = parseFloat(((px / 1440) * 100).toFixed(3));
          const min = Math.round(px * 0.8);
          return { fontSize: `clamp(${min}px, ${vw}vw, ${fontSize})` };
        })()
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