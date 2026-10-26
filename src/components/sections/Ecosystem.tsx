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
    accent: "#1e4fe0",
    name: "OrynDoc Reach",
    headline: "Patients find you, book you, and come back.",
    desc: "A branded doctor profile, a QR-accessible booking page, and Value that puts your practice in front of the patients searching for you. Reach handles the appointment and the communication around it: confirmations, reminders, and the follow-ups that most practices quietly drop.",
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
    accent: "#0d9fa6",
    name: "OrynDoc Assist",
    headline: "A multi-agent copilot, live in the room during the visit.",
    desc: "Assist starts with structured, empathetic patient onboarding before the visit, then stays active through the consultation itself. A multi-agent system listens to the conversation in real time and surfaces possible conditions, lab tests to confirm them, and medication ideas, while exploring other possibilities worth considering, all grounded in the patient's full history so it can answer effectively.",
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
    accent: "#5b5fef",
    name: "OrynDoc Practice",
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
    accent: "#0ea5e9",
    name: "OrynDoc Voice",
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
    accent: "#334467",
    name: "OrynDoc Assure",
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
          Five products. One connected practice.
        </motion.h2>

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
                  <h3 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
                    {product.name}
                  </h3>
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
