"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Copyright } from "@/utils/svgUtils";
import { InstagramIcon, Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const exploreLinks = [
  { label: "Our Projects", href: "/ourprojects" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contactus" },
];

const partnerLinks = [
  { label: "Global Alliances", href: "/partners/global-alliances" },
  { label: "Architects & Designers", href: "/partners/architects" },
  { label: "Builders & Developers", href: "/partners/developers" },
];

const manufacturingLocations = [
  { city: "Bangalore", isHQ: true },
  { city: "Mumbai",    isHQ: false },
  { city: "Nagpur",    isHQ: false },
  { city: "Cuttack",   isHQ: false },
];

const Footer = () => {
  const handleEmailClick = () => {
    const email = "sales@saharsh.co";
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
      window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`, "_blank");
    } else {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <div className="relative bg-[var(--text-dark)] overflow-hidden">

      {/* ── Main content ── */}
      <div className="px-[7%] pt-[72px] pb-[40px]">

        {/* ── Four-column grid ── */}
        <div
          className="grid grid-cols-1 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-12 lg:gap-8"
          style={{ paddingBottom: 48, borderBottom: "1px solid rgba(255,255,255,0.08)" }}
        >

          {/* ── Col 1: Brand ── */}
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <Image
              src="/assets/logo/logo_light.svg"
              height={44}
              width={156}
              alt="Saharsh Cabins"
            />
            <p
              style={{
                fontSize: 13,
                lineHeight: 1.75,
                color: "rgba(255,255,255,0.45)",
                maxWidth: 300,
                fontFamily: "var(--font-eudoxus), sans-serif",
              }}
            >
              India's premier manufacturer of high end luxury modular structures — engineered in controlled environments, installed anywhere in the world.
            </p>

            {/* Contact line */}
            <a
              href="mailto:sales@saharsh.co"
              style={{
                fontSize: 13,
                color: "rgba(255,255,255,0.55)",
                textDecoration: "none",
                fontFamily: "var(--font-eudoxus), sans-serif",
                borderBottom: "1px solid rgba(255,255,255,0.15)",
                paddingBottom: 2,
                alignSelf: "flex-start",
                transition: "color 0.2s, border-color 0.2s",
              }}
              className="hover:text-white hover:border-white/40"
            >
              sales@saharsh.co
            </a>

            {/* Social icons */}
            <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
              <a
                href="https://www.instagram.com/saharshcabins/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "rgba(255,255,255,0.5)", transition: "color 0.2s" }}
                className="hover:text-white"
              >
                <InstagramIcon size={18} />
              </a>
              <a
                href="https://wa.me/+917019438018"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "rgba(255,255,255,0.5)", transition: "color 0.2s" }}
                className="hover:text-white"
              >
                <FaWhatsapp size={18} />
              </a>
              <button
                onClick={handleEmailClick}
                style={{ color: "rgba(255,255,255,0.5)", background: "none", border: "none", cursor: "pointer", padding: 0, transition: "color 0.2s" }}
                className="hover:text-white"
              >
                <Mail size={18} />
              </button>
            </div>
          </div>

          {/* ── Col 2: Explore ── */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <p
              style={{
                fontSize: 10,
                fontWeight: 600,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--color-primary)",
                fontFamily: "var(--font-eudoxus), sans-serif",
              }}
            >
              Explore
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {exploreLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  style={{
                    fontSize: 14,
                    color: "rgba(255,255,255,0.55)",
                    textDecoration: "none",
                    fontFamily: "var(--font-eudoxus), sans-serif",
                    transition: "color 0.2s",
                  }}
                  className="hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* ── Col 3: Partner Program ── */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <p
              style={{
                fontSize: 10,
                fontWeight: 600,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--color-primary)",
                fontFamily: "var(--font-eudoxus), sans-serif",
              }}
            >
              Partner With Us
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {partnerLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  style={{
                    fontSize: 14,
                    color: "rgba(255,255,255,0.55)",
                    textDecoration: "none",
                    fontFamily: "var(--font-eudoxus), sans-serif",
                    transition: "color 0.2s",
                  }}
                  className="hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* ── Col 4: Manufacturing Locations ── */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <p
              style={{
                fontSize: 10,
                fontWeight: 600,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--color-primary)",
                fontFamily: "var(--font-eudoxus), sans-serif",
              }}
            >
              Manufacturing
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {manufacturingLocations.map((loc) => (
                <div key={loc.city} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div
                    style={{
                      width: 5,
                      height: 5,
                      borderRadius: "50%",
                      backgroundColor: "rgba(201,122,65,0.65)",
                      flexShrink: 0,
                    }}
                  />
                  <span
                    style={{
                      fontSize: 14,
                      color: "rgba(255,255,255,0.55)",
                      fontFamily: "var(--font-eudoxus), sans-serif",
                    }}
                  >
                    {loc.city}
                  </span>
                  {loc.isHQ && (
                    <span
                      style={{
                        fontSize: 9,
                        fontWeight: 600,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        color: "var(--color-primary)",
                        border: "1px solid rgba(201,122,65,0.4)",
                        borderRadius: 3,
                        padding: "1px 5px",
                        fontFamily: "var(--font-eudoxus), sans-serif",
                      }}
                    >
                      HQ
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: 28,
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
            <span
              style={{
                fontSize: 12,
                color: "rgba(255,255,255,0.3)",
                fontFamily: "var(--font-eudoxus), sans-serif",
              }}
            >
              Copyright
            </span>
            <Copyright />
            <span
              style={{
                fontSize: 12,
                color: "rgba(255,255,255,0.3)",
                fontFamily: "var(--font-eudoxus), sans-serif",
              }}
            >
              2026 Saharsh Cabins. All Rights Reserved.
            </span>
          </div>

          <span
            style={{
              fontSize: 12,
              color: "rgba(255,255,255,0.2)",
              fontFamily: "var(--font-eudoxus), sans-serif",
              letterSpacing: "0.04em",
            }}
          >
            Designed with precision. Built to last.
          </span>
        </div>
      </div>

      {/* ── Decorative background watermark ── */}
      <Image
        src="/assets/footer/logo_bg.webp"
        alt=""
        width={660}
        height={630}
        className="absolute bottom-0 right-0 pointer-events-none select-none"
        style={{ width: "420px", height: "auto", opacity: 0.05, objectFit: "contain" }}
      />
    </div>
  );
};

export default Footer;
