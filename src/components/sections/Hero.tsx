"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const reduceMotion = useReducedMotion();
  const [playing, setPlaying] = useState(false);
  const [timedOut, setTimedOut] = useState(false);
  const videoReady = Boolean(reduceMotion) || playing || timedOut;

  useEffect(() => {
    const fallback = window.setTimeout(() => setTimedOut(true), 2500);
    return () => window.clearTimeout(fallback);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || reduceMotion) return;
    video.play().catch(() => setTimedOut(true));
  }, [reduceMotion]);

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-white pt-32 pb-24 lg:pt-44 lg:pb-32"
    >
      <video
        ref={videoRef}
        aria-hidden="true"
        muted
        loop
        playsInline
        preload="auto"
        onPlaying={() => setPlaying(true)}
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/7580480-compressed.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-white/40" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent" />
      <div className="dot-grid absolute inset-0 opacity-60 [mask-image:linear-gradient(to_bottom,black,transparent)]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial="hidden"
          animate={videoReady ? "visible" : "hidden"}
          variants={staggerContainer(0.12, 0.1)}
          className="flex max-w-3xl flex-col justify-center"
        >
          <motion.h1
            variants={fadeUp}
            className="text-balance font-display text-4xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-[3.8rem]"
          >
            Better connected care starts with a{" "}
            <span className="text-blue">better connected</span> practice.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-ink-soft"
          >
            OrynDoc is the operating system behind modern medical practices,
            connecting patient discovery, booking, consultations, operations,
            and follow-up into a single, dependable system of record.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#onboard"
              className="rounded-lg bg-blue px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue/25 transition-transform hover:-translate-y-0.5 hover:bg-blue-dark"
            >
              Onboard your practice
            </a>
            <a
              href="#ecosystem"
              className="rounded-lg border border-line bg-white/70 px-7 py-3.5 text-sm font-semibold text-ink backdrop-blur-sm transition-colors hover:border-blue hover:text-blue"
            >
              See how it connects
            </a>
          </motion.div>

          <motion.dl
            variants={fadeUp}
            className="mt-14 grid max-w-xl grid-cols-3 gap-6 border-t border-line pt-7"
          >
            {[
              ["Reach", "Discovery & booking"],
              ["Assist", "Patient onboarding"],
              ["Practice", "Operations & records"],
            ].map(([term, desc]) => (
              <div key={term}>
                <dt className="font-display text-lg font-semibold text-ink">
                  {term}
                </dt>
                <dd className="mt-1 text-sm text-ink-soft">{desc}</dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>
      </div>
    </section>
  );
}
