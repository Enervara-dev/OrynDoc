"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  CalendarCheck,
  Eye,
  EyeOff,
  Info,
  Lock,
  Mail,
  ShieldCheck,
  Bell,
} from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/motion";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const HIGHLIGHTS = [
  { icon: CalendarCheck, title: "Your schedule, in one place", text: "Bookings, follow-ups and reminders stay in sync." },
  { icon: Bell, title: "Nothing slips after the visit", text: "Continuity of care runs on its own schedule." },
  { icon: ShieldCheck, title: "You control who sees what", text: "Role-based access, set by you, revocable anytime." },
];

export function LoginPage() {
  const router = useRouter();
  const reduceMotion = useReducedMotion();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const [notice, setNotice] = useState<string | null>(null);
  const [leaving, setLeaving] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors: { email?: string; password?: string } = {};
    if (!EMAIL_RE.test(email.trim())) nextErrors.email = "Enter a valid work email.";
    if (password.length < 8) nextErrors.password = "Password must be at least 8 characters.";
    setErrors(nextErrors);
    setNotice(null);
    if (Object.keys(nextErrors).length === 0) {
      setNotice("Sign-in isn't connected in this preview yet. New practices can start from onboarding.");
    }
  }

  function goToSignup() {
    setLeaving(true);
    window.setTimeout(() => router.push("/#onboard"), reduceMotion ? 0 : 900);
  }

  return (
    <main className="grid min-h-screen grid-cols-1 bg-white lg:grid-cols-[1.05fr_0.95fr]">
      <motion.aside
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative hidden overflow-hidden bg-navy text-white lg:flex lg:flex-col lg:justify-between lg:p-14"
      >
        <div className="dot-grid absolute inset-0 opacity-[0.08] [background-image:radial-gradient(#ffffff_1px,transparent_1px)]" />
        <div className="absolute -left-24 top-1/3 h-96 w-96 rounded-full bg-blue/30 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-teal/20 blur-3xl" />

        <div className="relative">
          <Link href="/" className="inline-flex items-center rounded-xl bg-white px-4 py-2 shadow-lg">
            <Image src="/logo.png" alt="OrynDoc" width={707} height={353} className="h-10 w-auto" />
          </Link>
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer(0.12, 0.2)}
          className="relative max-w-md"
        >
          <motion.h1
            variants={fadeUp}
            className="text-balance font-display text-4xl font-semibold leading-[1.1] tracking-tight"
          >
            Welcome back to your practice.
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-4 text-white/65 leading-relaxed">
            Pick up where your patients left off: schedules, consultations and follow-ups, all connected.
          </motion.p>

          <ul className="mt-10 flex flex-col gap-5">
            {HIGHLIGHTS.map(({ icon: Icon, title, text }) => (
              <motion.li key={title} variants={fadeUp} className="flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10 text-sky">
                  <Icon size={18} strokeWidth={1.8} />
                </span>
                <div>
                  <p className="font-semibold">{title}</p>
                  <p className="mt-0.5 text-sm text-white/55">{text}</p>
                </div>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <p className="relative text-xs text-white/40">
          Better connected care starts with a better connected practice.
        </p>
      </motion.aside>

      <div className="relative flex items-center justify-center px-6 py-16 sm:px-10">
        <Link
          href="/"
          className="absolute left-6 top-6 inline-flex items-center gap-2 text-sm font-medium text-ink-soft transition-colors hover:text-blue lg:left-10 lg:top-8"
        >
          <ArrowLeft size={16} /> Back to OrynDoc
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-md"
        >
          <div className="mb-8 lg:hidden">
            <Image src="/logo.png" alt="OrynDoc" width={707} height={353} className="h-12 w-auto" />
          </div>

          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink">Log in</h2>
          <p className="mt-2 text-sm text-ink-soft">Use the work email linked to your practice.</p>

          <form onSubmit={handleSubmit} noValidate className="mt-8 flex flex-col gap-5">
            <Field
              label="Work email"
              icon={Mail}
              id="email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={setEmail}
              error={errors.email}
              placeholder="you@practice.com"
            />

            <div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="password" className="text-sm font-medium text-ink">
                  Password
                </label>
                <div className="relative">
                  <Lock size={16} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-soft" />
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="At least 8 characters"
                    className={`w-full rounded-lg border bg-white py-3 pl-10 pr-11 text-sm text-ink outline-none transition-colors focus:border-blue focus:ring-4 focus:ring-blue/10 ${
                      errors.password ? "border-red-400" : "border-line"
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((v) => !v)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    className="absolute right-2.5 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-md text-ink-soft hover:text-blue"
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
                <AnimatePresence>
                  {errors.password && (
                    <motion.p
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="text-xs text-red-600"
                    >
                      {errors.password}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </div>

            <AnimatePresence>
              {notice && (
                <motion.div
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  role="status"
                  className="flex gap-3 rounded-lg border border-blue/20 bg-blue-soft p-4 text-sm text-ink"
                >
                  <Info size={16} className="mt-0.5 shrink-0 text-blue" />
                  <p>{notice}</p>
                </motion.div>
              )}
            </AnimatePresence>

            <motion.button
              type="submit"
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.99 }}
              className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-blue px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue/25 transition-colors hover:bg-blue-dark"
            >
              Log in
            </motion.button>
          </form>

          <div className="mt-8 flex items-center gap-4 text-xs text-ink-soft">
            <span className="h-px flex-1 bg-line" />
            New to OrynDoc?
            <span className="h-px flex-1 bg-line" />
          </div>

          <button
            type="button"
            onClick={goToSignup}
            className="group mt-6 flex w-full items-center justify-between rounded-xl border border-line bg-surface-tint px-5 py-4 text-left transition-colors hover:border-blue/40 hover:bg-blue-soft"
          >
            <span>
              <span className="block text-sm font-semibold text-ink">Sign up for your practice</span>
              <span className="mt-0.5 block text-xs text-ink-soft">Start with onboarding, our team sets up your profile.</span>
            </span>
            <ArrowRight size={18} className="text-blue transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>

      <AnimatePresence>
        {leaving && (
          <motion.div
            key="curtain"
            aria-hidden="true"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.6, ease: [0.76, 0, 0.24, 1] }}
            style={{ originY: 1 }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-gradient-to-br from-navy via-blue-dark to-blue text-white"
          >
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.5 }}
              className="font-display text-3xl font-semibold tracking-tight"
            >
              Let&apos;s set up your practice
            </motion.p>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
              style={{ originX: 0 }}
              className="mt-6 h-px w-48 bg-white/60"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

function Field({
  label,
  icon: Icon,
  id,
  error,
  value,
  onChange,
  ...rest
}: {
  label: string;
  icon: typeof Mail;
  id: string;
  error?: string;
  value: string;
  onChange: (v: string) => void;
  type: string;
  autoComplete: string;
  placeholder: string;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-medium text-ink">
        {label}
      </label>
      <div className="relative">
        <Icon size={16} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-soft" />
        <input
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          {...rest}
          className={`w-full rounded-lg border bg-white py-3 pl-10 pr-4 text-sm text-ink outline-none transition-colors focus:border-blue focus:ring-4 focus:ring-blue/10 ${
            error ? "border-red-400" : "border-line"
          }`}
        />
      </div>
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="text-xs text-red-600"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}
