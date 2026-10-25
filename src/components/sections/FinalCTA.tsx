"use client";

import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/motion";
import { OnboardingForm } from "./OnboardingForm";

export function FinalCTA() {
  return (
    <section id="onboard" className="relative bg-surface-tint py-24 lg:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
            className="flex flex-col lg:justify-center"
          >
            <h2 className="text-balance font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
              A connected practice isn&apos;t a future upgrade.{" "}
              <span className="text-blue">It&apos;s where you start.</span>
            </h2>
            <p className="mt-5 max-w-md leading-relaxed text-ink-soft">
              Tell us about your practice, and our team will set up your
              OrynDoc profile and walk you through Reach, Assist, Practice,
              Voice, and Assure, at your pace.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
          >
            <OnboardingForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
