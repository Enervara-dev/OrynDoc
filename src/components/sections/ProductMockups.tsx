import type { ReactNode } from "react";
import { Mic, QrCode, ShieldCheck, Link2 } from "lucide-react";

function Panel({
  children,
  accent,
  label,
}: {
  children: ReactNode;
  accent: string;
  label: string;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-[0_24px_48px_-24px_rgba(15,23,60,0.16)]">
      <div
        className="flex items-center gap-2 border-b border-line px-5 py-3 text-[11px] font-semibold"
        style={{ color: accent }}
      >
        <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: accent }} />
        {label}
      </div>
      <div className="p-5">{children}</div>
    </div>
  );
}

export function ReachMockup({ accent }: { accent: string }) {
  return (
    <Panel accent={accent} label="Booking page">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold text-ink">Dr. Asha Verma</p>
          <p className="text-xs text-ink-soft">Internal Medicine</p>
        </div>
        <span
          className="flex h-9 w-9 items-center justify-center rounded-lg"
          style={{ backgroundColor: `${accent}14`, color: accent }}
        >
          <QrCode size={18} />
        </span>
      </div>
      <div className="mt-4 grid grid-cols-4 gap-1.5">
        {["9:00", "9:30", "10:00", "10:30"].map((t, i) => (
          <div
            key={t}
            className={`rounded-md px-1.5 py-2 text-center text-[10px] font-medium ${
              i === 1 ? "text-white" : "bg-surface-tint text-ink-soft"
            }`}
            style={i === 1 ? { backgroundColor: accent } : undefined}
          >
            {t}
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-center justify-between rounded-lg bg-surface-tint px-3 py-2 text-[11px] text-ink-soft">
        <span>Next follow-up</span>
        <span className="font-semibold" style={{ color: accent }}>
          Auto-scheduled
        </span>
      </div>
    </Panel>
  );
}

export function AssistMockup({ accent }: { accent: string }) {
  return (
    <Panel accent={accent} label="Live during consultation">
      <div className="max-w-[85%] rounded-xl rounded-tl-sm bg-surface-tint px-3 py-2 text-[11px] text-ink-soft">
        Patient reports evening chest tightness, three days, worse on
        exertion.
      </div>
      <div
        className="mt-3 rounded-xl border p-3"
        style={{ borderColor: `${accent}35`, backgroundColor: `${accent}0c` }}
      >
        <p className="text-[10px] font-semibold uppercase" style={{ color: accent }}>
          Copilot suggests
        </p>
        <ul className="mt-2 space-y-1.5 text-[11px] text-ink">
          <li>Possible: stable angina, GERD, costochondritis</li>
          <li>Lab tests: ECG, troponin panel</li>
          <li>History: prior hypertension, no smoking</li>
        </ul>
      </div>
    </Panel>
  );
}

export function PracticeMockup({ accent }: { accent: string }) {
  return (
    <Panel accent={accent} label="Operations">
      <div className="flex items-end gap-2">
        {[40, 70, 55, 85, 60].map((h, i) => (
          <div
            key={i}
            className="flex-1 overflow-hidden rounded-t-md bg-surface-tint"
            style={{ height: 64 }}
          >
            <div
              className="w-full rounded-t-md"
              style={{
                height: `${h}%`,
                marginTop: `${100 - h}%`,
                backgroundColor: accent,
                opacity: 0.85,
              }}
            />
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-center justify-between text-[11px] text-ink-soft">
        <span>Today&apos;s patients</span>
        <span
          className="rounded-full px-2.5 py-1 font-semibold"
          style={{ backgroundColor: `${accent}14`, color: accent }}
        >
          Billing synced
        </span>
      </div>
    </Panel>
  );
}

export function VoiceMockup({ accent }: { accent: string }) {
  return (
    <Panel accent={accent} label="Call activity">
      <div className="flex items-center gap-3">
        <span
          className="flex h-10 w-10 items-center justify-center rounded-full"
          style={{ backgroundColor: `${accent}14`, color: accent }}
        >
          <Mic size={18} />
        </span>
        <div>
          <p className="text-xs font-medium text-ink">Reminder call · 24h out</p>
          <p className="text-[11px] text-ink-soft">to Priya Nair</p>
        </div>
      </div>
      <div className="mt-4 flex h-10 items-center gap-1">
        {[6, 14, 9, 20, 11, 16, 7, 18, 10].map((h, i) => (
          <span
            key={i}
            className="w-1 rounded-full"
            style={{ height: h, backgroundColor: accent, opacity: 0.55 + (i % 3) * 0.12 }}
          />
        ))}
      </div>
    </Panel>
  );
}

export function AssureMockup({ accent }: { accent: string }) {
  return (
    <Panel accent={accent} label="Consent & access log">
      <div className="flex items-center gap-3">
        <span
          className="flex h-10 w-10 items-center justify-center rounded-full"
          style={{ backgroundColor: `${accent}14`, color: accent }}
        >
          <ShieldCheck size={18} />
        </span>
        <p className="text-xs font-medium text-ink">3 active permissions</p>
      </div>
      <ul className="mt-4 space-y-2.5 text-[11px] text-ink-soft">
        <li className="flex items-center justify-between border-t border-line pt-2.5">
          <span className="flex items-center gap-1.5">
            <Link2 size={11} /> Front desk: scheduling access
          </span>
          <span className="font-semibold" style={{ color: accent }}>
            Granted
          </span>
        </li>
        <li className="flex items-center justify-between border-t border-line pt-2.5">
          <span className="flex items-center gap-1.5">
            <Link2 size={11} /> Patient record: read receipt
          </span>
          <span className="font-semibold" style={{ color: accent }}>
            Logged
          </span>
        </li>
        <li className="flex items-center justify-between border-t border-line pt-2.5">
          <span className="flex items-center gap-1.5">
            <Link2 size={11} /> Data export request
          </span>
          <span className="font-medium text-ink-soft">Pending review</span>
        </li>
      </ul>
    </Panel>
  );
}
