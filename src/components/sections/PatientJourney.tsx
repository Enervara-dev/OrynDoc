"use client";

import { motion } from "framer-motion";
import { Search, CalendarCheck, BellRing, Stethoscope, RefreshCcw } from "lucide-react";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const STEPS = [
  {
    icon: Search,
    title: "Discovers",
    desc: "Finds the doctor's profile via search, a shared link, or a QR code at the clinic.",
  },
  {
    icon: CalendarCheck,
    title: "Books",
    desc: "Picks an open slot and confirms the visit in under a minute, no call required.",
  },
  {
    icon: BellRing,
    title: "Is reminded",
    desc: "Gets a confirmation and reminder through their preferred channel ahead of the visit.",
  },
  {
    icon: Stethoscope,
    title: "Is seen",
    desc: "Arrives to a clinician who already has their intake history and context in hand.",
  },
  {
    icon: RefreshCcw,
    title: "Is followed up with",
    desc: "Receives the right check-in afterward, automatically scheduled, not left to chance.",
  },
];

export function PatientJourney() {
  return (
    <section id="journey" className="relative bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          className="max-w-2xl text-balance font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl"
        >
          What connected care looks like from the patient&apos;s side.
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer(0.12)}
          className="relative mt-16"
        >
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-7 hidden h-px bg-line lg:block"
          />
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
            {STEPS.map(({ icon: Icon, title, desc }, i) => (
              <motion.div key={title} variants={fadeUp} className="relative">
                <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-line bg-white text-blue">
                  <Icon size={22} strokeWidth={1.75} />
                </div>
                <span className="absolute left-16 top-4 font-display text-sm text-ink-soft/50 lg:hidden">
                  {i + 1}
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-ink">
                  {title}
                </h3>
                <p className="mt-2 max-w-[14rem] text-sm leading-relaxed text-ink-soft">
                  {desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
