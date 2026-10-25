"use client";

import { motion } from "framer-motion";
import { Stethoscope, Building2, Network } from "lucide-react";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const AUDIENCES = [
  {
    icon: Stethoscope,
    title: "Independent practitioners",
    desc: "Run a professional, branded presence and never lose a follow-up, without hiring extra front-desk staff.",
  },
  {
    icon: Building2,
    title: "Growing clinics",
    desc: "Coordinate multiple doctors, shared scheduling, and consistent patient communication as the clinic scales.",
  },
  {
    icon: Network,
    title: "Small-to-mid healthcare organizations",
    desc: "Standardize operations and follow-up across locations, with permissioned oversight for administrators.",
  },
];

export function ForWhom() {
  return (
    <section className="relative bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          className="max-w-2xl text-balance font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl"
        >
          From a single practitioner to a multi-location organization.
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer(0.1)}
          className="mt-14 grid grid-cols-1 divide-y divide-line sm:grid-cols-3 sm:divide-y-0 sm:divide-x"
        >
          {AUDIENCES.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              variants={fadeUp}
              className={`py-6 sm:py-0 sm:px-8 ${i === 0 ? "sm:pl-0" : ""} ${
                i === AUDIENCES.length - 1 ? "sm:pr-0" : ""
              }`}
            >
              <Icon size={24} strokeWidth={1.6} className="text-blue" />
              <h3 className="mt-5 font-display text-lg font-semibold text-ink">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                {desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
