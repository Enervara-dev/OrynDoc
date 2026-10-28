"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Cloud, Sparkles, ShieldCheck } from "lucide-react";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const BADGES = [
  {
    icon: Cloud,
    name: "AWS Activate",
    sub: "for Startups",
    logo: "/logos/aws-activate.svg",
    color: "#ff9900",
    glow: "rgba(255,153,0,0.35)",
  },
  {
    icon: Sparkles,
    name: "Microsoft",
    sub: "for Startups",
    logo: "/logos/microsoft-for-startups.svg",
    color: "#00a4ef",
    glow: "rgba(0,164,239,0.35)",
  },
  {
    icon: ShieldCheck,
    name: "DPDP Compliant",
    sub: "Data protection, India",
    logo: "/logos/dpdp-compliant.svg",
    color: "#0d9fa6",
    glow: "rgba(13,159,166,0.35)",
  },
];

function BadgeMark({
  icon: Icon,
  logo,
  name,
  color,
}: {
  icon: typeof Cloud;
  logo: string;
  name: string;
  color: string;
}) {
  const [failed, setFailed] = useState(false);

  if (!failed) {
    return (
      <Image
        src={logo}
        alt={name}
        width={112}
        height={36}
        unoptimized
        onError={() => setFailed(true)}
        className="h-9 w-auto max-w-[7rem] object-contain"
      />
    );
  }

  return (
    <span
      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
      style={{ backgroundColor: `${color}16`, color }}
    >
      <Icon size={18} strokeWidth={1.9} />
    </span>
  );
}

export function BackedBy() {
  return (
    <section className="relative border-y border-line bg-white py-10 lg:py-12">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue/40 to-transparent"
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer(0.1)}
          className="flex flex-col items-center gap-6 sm:flex-row sm:justify-center sm:gap-10"
        >
          <motion.span
            variants={fadeUp}
            className="shrink-0 text-xs font-semibold uppercase tracking-wide text-ink-soft"
          >
            Backed by
          </motion.span>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5">
            {BADGES.map(({ icon, name, sub, logo, color, glow }) => (
              <motion.div
                key={name}
                variants={fadeUp}
                whileHover={{
                  y: -4,
                  scale: 1.03,
                  borderColor: `${color}55`,
                  boxShadow: `0 16px 32px -12px ${glow}`,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="flex items-center gap-3 rounded-xl border border-line bg-white px-4 py-3 shadow-sm"
              >
                <BadgeMark icon={icon} logo={logo} name={name} color={color} />
                <div className="leading-tight">
                  <p className="text-sm font-semibold text-ink">{name}</p>
                  <p className="text-[11px] text-ink-soft">{sub}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
