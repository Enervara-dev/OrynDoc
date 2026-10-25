"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Loader2 } from "lucide-react";

const PRACTICE_SIZES = [
  "Independent practitioner",
  "Growing clinic (2–10 doctors)",
  "Multi-location organization",
];

type Status = "idle" | "submitting" | "success" | "error";

export function OnboardingForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: data.get("name"),
      practiceName: data.get("practiceName"),
      email: data.get("email"),
      phone: data.get("phone"),
      practiceSize: data.get("practiceSize"),
      message: data.get("message"),
    };

    try {
      const res = await fetch("/api/onboard", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error ?? "Something went wrong. Please try again.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong. Please try again.",
      );
    }
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center gap-3 rounded-2xl border border-line bg-white p-10 text-center"
        role="status"
      >
        <CheckCircle2 className="text-teal" size={40} strokeWidth={1.5} />
        <h3 className="font-display text-xl font-semibold text-ink">
          Request received
        </h3>
        <p className="max-w-sm text-sm leading-relaxed text-ink-soft">
          Thank you, our team will reach out by email shortly to begin
          setting up your OrynDoc profile.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-2 text-sm font-semibold text-blue underline underline-offset-2"
        >
          Submit another request
        </button>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 rounded-2xl border border-line bg-white p-8 sm:p-10"
      aria-describedby={status === "error" ? "onboard-error" : undefined}
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Full name" name="name" autoComplete="name" required />
        <Field
          label="Practice name"
          name="practiceName"
          autoComplete="organization"
          required
        />
        <Field
          label="Work email"
          name="email"
          type="email"
          autoComplete="email"
          required
        />
        <Field label="Phone (optional)" name="phone" type="tel" autoComplete="tel" />
      </div>

      <label className="flex flex-col gap-1.5 text-sm">
        <span className="font-medium text-ink">Practice size</span>
        <select
          name="practiceSize"
          required
          defaultValue=""
          className="rounded-lg border border-line bg-white px-4 py-3 text-sm text-ink outline-none focus:border-blue"
        >
          <option value="" disabled>
            Select one
          </option>
          {PRACTICE_SIZES.map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
      </label>

      <label className="flex flex-col gap-1.5 text-sm">
        <span className="font-medium text-ink">
          Anything we should know? (optional)
        </span>
        <textarea
          name="message"
          rows={3}
          className="resize-none rounded-lg border border-line bg-white px-4 py-3 text-sm text-ink outline-none focus:border-blue"
        />
      </label>

      {status === "error" && (
        <p id="onboard-error" role="alert" className="text-sm text-red-700">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="flex items-center justify-center gap-2 rounded-lg bg-blue px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-blue-dark disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "submitting" && (
          <Loader2 size={16} className="animate-spin" />
        )}
        {status === "submitting" ? "Submitting…" : "Request onboarding"}
      </button>

      <p className="text-center text-xs text-ink-soft">
        By submitting, you consent to OrynDoc contacting you about your
        onboarding request.
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  autoComplete,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  autoComplete?: string;
  required?: boolean;
}) {
  return (
    <label className="flex flex-col gap-1.5 text-sm">
      <span className="font-medium text-ink">
        {label}
        {required && <span className="text-blue"> *</span>}
      </span>
      <input
        type={type}
        name={name}
        autoComplete={autoComplete}
        required={required}
        className="rounded-lg border border-line bg-white px-4 py-3 text-sm text-ink outline-none focus:border-blue"
      />
    </label>
  );
}
