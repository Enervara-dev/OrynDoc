"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

export function HeroImage() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative flex w-full max-w-xl items-center justify-center">
      <motion.div
        aria-hidden="true"
        className="absolute bottom-2 left-1/2 h-12 w-72 -translate-x-1/2 rounded-full bg-ink/20 blur-2xl"
        animate={
          reduceMotion
            ? undefined
            : { scale: [1, 0.86, 1], opacity: [0.3, 0.16, 0.3] }
        }
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="relative w-full"
        animate={reduceMotion ? undefined : { y: [0, -16, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          src="/hero.png"
          alt="A doctor reviewing OrynDoc's connected workflow across new patients, appointments, communication, records, and follow-ups"
          width={1536}
          height={1024}
          priority
          sizes="(min-width: 1024px) 40vw, 90vw"
          className="h-auto w-full drop-shadow-[0_45px_60px_rgba(10,19,51,0.28)]"
        />
      </motion.div>
    </div>
  );
}
