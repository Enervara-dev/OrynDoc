"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { fadeUp, viewportOnce } from "@/lib/motion";

const FAQS = [
  {
    q: "Do I have to adopt all five products at once?",
    a: "No. Reach is the flagship entry point for discovery, booking, and follow-up. Assist, Practice, Voice, and Assure can be added as the practice is ready for them, not all on day one.",
  },
  {
    q: "Does the Assist copilot replace the doctor's judgment?",
    a: "No. Assist surfaces possible conditions, lab tests, and medication ideas in real time during the consultation, but every diagnosis and decision stays with the doctor.",
  },
  {
    q: "Who can see a patient's information?",
    a: "Access is role-based and set by the doctor. Front-desk staff and practice admins only see what they're explicitly granted, and that access can be changed or revoked at any time.",
  },
  {
    q: "Can patients choose how they're contacted?",
    a: "Yes. Patients set a communication preference once, SMS, email, or voice, and every confirmation, reminder, and follow-up respects it.",
  },
  {
    q: "What happens to my existing patient records?",
    a: "Practice brings appointments, records, and billing into one workspace going forward. Our team works with you during onboarding to bring in what you already have.",
  },
  {
    q: "How fast can a practice get started?",
    a: "A doctor can register and have a working, branded profile live the same day. Additional products like Voice and Assist get enabled as the practice needs them.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          className="text-balance text-center font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl"
        >
          Questions practices usually ask
        </motion.h2>

        <div className="mt-12 flex flex-col divide-y divide-line border-t border-line">
          {FAQS.map((item, i) => {
            const open = openIndex === i;
            return (
              <div key={item.q}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? null : i)}
                  aria-expanded={open}
                  className="flex w-full items-center justify-between gap-6 py-5 text-left"
                >
                  <span className="font-display text-base font-semibold text-ink sm:text-lg">
                    {item.q}
                  </span>
                  <motion.span
                    animate={{ rotate: open ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-soft text-blue"
                  >
                    <Plus size={15} />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-xl pb-5 text-sm leading-relaxed text-ink-soft">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
