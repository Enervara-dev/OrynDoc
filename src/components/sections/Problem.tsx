"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/motion";

const FRICTIONS = [
  {
    n: "01",
    title: "Discovery and booking are scattered",
    desc: "A phone line, a listing site, a WhatsApp number, a front-desk notebook: patients find and book a doctor through a different channel every time, with no single source of truth.",
  },
  {
    n: "02",
    title: "Consultations happen without full context",
    desc: "Doctors walk into the room without the patient's history already summarized, leaving less of the visit for the conversation that actually matters.",
  },
  {
    n: "03",
    title: "Operations are stitched together by hand",
    desc: "Appointments, records, and billing live in separate tools, so staff spend hours reconciling details that should already match.",
  },
  {
    n: "04",
    title: "Care goes quiet after the visit",
    desc: "Follow-ups, reminders, and who still has access to what depend on someone remembering to act, so continuity of care is left to chance.",
  },
];

export function Problem() {
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
          Every patient touchpoint runs through a different, disconnected
          system.
        </motion.h2>
      </div>

      <div className="relative mt-4">
        {FRICTIONS.map((item, i) => (
          <StackCard
            key={item.n}
            item={item}
            index={i}
            isLast={i === FRICTIONS.length - 1}
          />
        ))}
      </div>
    </section>
  );
}

function StackCard({
  item,
  index,
  isLast,
}: {
  item: (typeof FRICTIONS)[number];
  index: number;
  isLast: boolean;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.85, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.4, 1]);

  return (
    <div
      ref={containerRef}
      className={`relative ${isLast ? "h-[80vh]" : "h-[130vh]"}`}
    >
      <div
        className="sticky top-28 flex h-[60vh] items-center justify-center px-6"
        style={{ zIndex: index + 1 }}
      >
        <motion.div
          style={{ scale, opacity, marginTop: index * 18 }}
          className="w-full max-w-2xl rounded-2xl border border-line bg-white p-9 shadow-[0_30px_60px_-28px_rgba(15,23,60,0.28)] sm:p-12"
        >
          <span className="font-display text-sm font-semibold text-blue">
            {item.n}
          </span>
          <h3 className="mt-3 font-display text-2xl font-semibold text-ink sm:text-3xl">
            {item.title}
          </h3>
          <p className="mt-3 max-w-lg text-base leading-relaxed text-ink-soft">
            {item.desc}
          </p>
        </motion.div>
      </div>
    </div>
  );
}
