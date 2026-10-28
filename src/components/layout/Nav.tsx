"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const PRODUCT_LINKS = [
  { href: "#reach", label: "Reach" },
  { href: "#assist", label: "Assist" },
  { href: "#practice", label: "Practice" },
  { href: "#voice", label: "Voice" },
  { href: "#assure", label: "Assure" },
];

const PAGE_LINKS = [{ href: "#journey", label: "Patient journey" }];

const ALL_LINKS = [...PRODUCT_LINKS, ...PAGE_LINKS];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = ALL_LINKS.map((link) =>
      document.getElementById(link.href.slice(1)),
    ).filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-line"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 lg:px-10"
      >
        <a href="#top" className="flex items-center">
          <Image
            src="/logo.png"
            alt="OrynDoc"
            width={707}
            height={353}
            priority
            className="h-16 w-auto sm:h-20"
          />
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {PRODUCT_LINKS.map((link) => (
            <li key={link.href} className="relative">
              <a
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  active === link.href ? "text-blue" : "text-ink-soft hover:text-blue"
                }`}
              >
                {link.label}
              </a>
              {active === link.href && (
                <motion.span
                  layoutId="nav-active"
                  className="absolute -bottom-1.5 left-0 right-0 h-0.5 rounded-full bg-blue"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </li>
          ))}
          <li className="h-4 w-px bg-line" aria-hidden="true" />
          {PAGE_LINKS.map((link) => (
            <li key={link.href} className="relative">
              <a
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  active === link.href ? "text-blue" : "text-ink-soft hover:text-blue"
                }`}
              >
                {link.label}
              </a>
              {active === link.href && (
                <motion.span
                  layoutId="nav-active"
                  className="absolute -bottom-1.5 left-0 right-0 h-0.5 rounded-full bg-blue"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <a
            href="#onboard"
            className="rounded-lg bg-blue px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-dark"
          >
            Onboard your practice
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-ink lg:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden border-t border-line bg-white lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 py-4">
              {[...PRODUCT_LINKS, ...PAGE_LINKS].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-2 py-3 text-base text-ink-soft hover:bg-blue-soft hover:text-blue"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="#onboard"
                  onClick={() => setOpen(false)}
                  className="block rounded-lg bg-blue px-5 py-3 text-center text-sm font-semibold text-white"
                >
                  Onboard your practice
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
