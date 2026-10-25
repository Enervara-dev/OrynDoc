"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Lock, Users2 } from "lucide-react";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { WorkspaceMockup } from "./WorkspaceMockup";

const FEATURES = [
  { icon: ShieldCheck, label: "Role-based access" },
  { icon: Lock, label: "Permission boundaries" },
  { icon: Users2, label: "Secure & audit-ready" },
];

export function PracticeTransformation() {
  return (
    <section id="practice-workspace" className="relative overflow-hidden bg-surface-tint py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer(0.1)}
          >
            <motion.h2
              variants={fadeUp}
              className="text-balance font-display text-4xl font-semibold leading-[1.08] text-ink sm:text-5xl"
            >
              One workspace.
              <br />
              Every role sees
              <br />
              <span className="text-blue">what matters.</span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-md leading-relaxed text-ink-soft"
            >
              Doctors and the staff they authorize manage the practice from a
              single workspace: appointments, records, and billing in one
              place, with administrative assistance that respects the
              permission boundaries the doctor sets.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-8">
              {FEATURES.map(({ icon: Icon, label }) => (
                <div key={label} className="flex flex-col items-start gap-2.5">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-soft text-blue">
                    <Icon size={20} strokeWidth={1.75} />
                  </span>
                  <span className="text-sm font-medium text-ink">{label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="pb-10 sm:pb-12"
          >
            <WorkspaceMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
