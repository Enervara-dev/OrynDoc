import Image from "next/image";

const PRODUCT_LINKS = [
  { href: "#reach", label: "Reach" },
  { href: "#assist", label: "Assist" },
  { href: "#practice", label: "Practice" },
  { href: "#voice", label: "Voice" },
  { href: "#assure", label: "Assure" },
];

const COMPANY_LINKS = [
  { href: "#journey", label: "Patient journey" },
  { href: "#onboard", label: "Onboard your practice" },
];

export function Footer() {
  return (
    <footer className="border-t border-line bg-white">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <a href="#top" className="flex items-center">
              <Image
                src="/logo.png"
                alt="OrynDoc"
                width={707}
                height={353}
                className="h-16 w-auto"
              />
            </a>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink-soft">
              The connected operating system for modern medical practices.
            </p>
            <a
              href="mailto:hello@enervara.com"
              className="mt-4 inline-block text-sm font-semibold text-blue underline underline-offset-2"
            >
              hello@enervara.com
            </a>
          </div>

          <nav aria-label="Products">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-ink-soft">
              Products
            </h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              {PRODUCT_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-ink-soft hover:text-blue"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Company">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-ink-soft">
              Company
            </h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              {COMPANY_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-ink-soft hover:text-blue"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-line pt-6 text-xs text-ink-soft sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; 2026 OrynDoc. All rights reserved.</p>
          <p>Better connected care starts with a better connected practice.</p>
        </div>
      </div>
    </footer>
  );
}
