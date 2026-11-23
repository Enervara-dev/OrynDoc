"use client";

import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/motion";
import {
  ReachMockup,
  AssistMockup,
  PracticeMockup,
  VoiceMockup,
  AssureMockup,
} from "./ProductMockups";

const PRODUCTS = [
  {
    id: "reach",
    status: "available" as const,
    accent: "var(--od-chart-1)",
    name: "Oryndoc Reach",
    headline: "Patients find you, book you, and come back.",
    desc: "A branded doctor profile, a QR-accessible booking page, and a public profile that puts your practice in front of the patients searching for you. Reach handles the appointment and the communication around it: confirmations, reminders, and the follow-ups that most practices quietly drop.",
    points: [
      "Doctor profile & QR-accessible booking page",
      "Availability, scheduling & appointment management",
      "Automated follow-up sequences, Reach's signature differentiator",
      "Optional, consent-based distribution to external platforms",
    ],
    Mockup: ReachMockup,
  },
  {
    id: "assist",
    status: "planned" as const,
    accent: "var(--od-chart-3)",
    name: "Oryndoc Assist",
    headline: "A multi-agent copilot, live in the room during the visit.",
    desc: "Assist starts with structured, empathetic patient onboarding before the visit, then stays active through the consultation itself. Later, it is designed to support the consultation itself with suggestions a doctor can review, always as an aid to clinical judgement, never a replacement for it.",
    points: [
      "Structured, conversational pre-visit onboarding and history collection",
      "Real-time conversation analysis during the consultation",
      "Differential diagnosis, lab test, and medication suggestions as the visit happens",
      "Full patient history available to the copilot throughout",
    ],
    Mockup: AssistMockup,
  },
  {
    id: "practice",
    status: "planned" as const,
    accent: "var(--od-chart-4)",
    name: "Oryndoc Practice",
    headline: "One workspace for the practice behind the practice.",
    desc: "Appointments, patient records, billing, and pharmacy integrations live in a single operational workspace, so staff stop reconciling spreadsheets and start running the day from one screen.",
    points: [
      "Unified appointment & patient-record administration",
      "Billing workflows and relevant pharmacy integrations",
      "Role-based access for doctors and practice staff",
    ],
    Mockup: PracticeMockup,
  },
  {
    id: "voice",
    status: "planned" as const,
    accent: "var(--od-chart-5)",
    name: "Oryndoc Voice",
    headline: "A voice channel that remembers every patient.",
    desc: "Voice handles the calls practices don't have staff time for: appointment confirmations, reminders, and structured follow-up check-ins, in a consistent, recorded, reviewable way.",
    points: [
      "Voice-based appointment handling & reminders",
      "Structured follow-up and check-in calls",
      "Reviewable call records tied to the patient timeline",
    ],
    Mockup: VoiceMockup,
  },
  {
    id: "assure",
    status: "planned" as const,
    accent: "var(--od-chart-5)",
    name: "Oryndoc Assure",
    headline: "Consent, access, and audit, underneath everything else.",
    desc: "Assure is the assurance layer running beneath the platform: who has access to what, what's been consented to, and what's been logged. We present only the capabilities that are verified or explicitly planned, nothing speculative.",
    points: [
      "Consent-aware data access across every product",
      "Permissioned, role-based visibility for staff",
      "Access and change logs available for review",
    ],
    Mockup: AssureMockup,
  },
];

export function Ecosystem() {
  return (
    <section id="ecosystem" className="relative bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          className="max-w-2xl text-balance font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl"
        >
          One connected practice, built product by product.
        </motion.h2>
        <p className="mt-4 max-w-2xl text-ink-soft">
          Reach is available today. The other products are in development; we describe what each is designed to do and
          label it clearly until it ships.
        </p>

        <div className="mt-20 flex flex-col gap-28">
          {PRODUCTS.map((product, i) => {
            const Mockup = product.Mockup;
            const reversed = i % 2 === 1;
            return (
              <motion.div
                key={product.id}
                id={product.id}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                variants={fadeUp}
                className={`grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                  reversed ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
                      {product.name}
                    </h3>
                    <span
                      className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                        product.status === "available"
                          ? "bg-[var(--od-success-subtle)] text-[var(--od-success)]"
                          : "bg-[var(--od-surface-sunken)] text-[var(--od-text-secondary)]"
                      }`}
                    >
                      {product.status === "available" ? "Available now" : "In development"}
                    </span>
                  </div>
                  <p className="mt-3 text-balance text-lg leading-snug text-ink">
                    {product.headline}
                  </p>
                  <p className="mt-3 max-w-lg leading-relaxed text-ink-soft">
                    {product.desc}
                  </p>
                  <ul className="mt-6 flex flex-col gap-2.5">
                    {product.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2.5 text-sm text-ink-soft"
                      >
                        <span
                          className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                          style={{ backgroundColor: product.accent }}
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mx-auto w-full max-w-sm">
                  <Mockup accent={product.accent} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
