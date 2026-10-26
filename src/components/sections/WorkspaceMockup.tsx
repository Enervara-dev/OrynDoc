import Image from "next/image";
import {
  LayoutDashboard,
  CalendarCheck,
  Users,
  FileText,
  Receipt,
  MessageSquare,
  BarChart3,
  Settings,
  Search,
  Bell,
  ChevronDown,
  Settings2,
  Check,
  X,
  Lock,
  UserCheck2,
} from "lucide-react";

const NAV_ITEMS = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: CalendarCheck, label: "Appointments" },
  { icon: Users, label: "Patients" },
  { icon: FileText, label: "Clinical records" },
  { icon: Receipt, label: "Billing" },
  { icon: MessageSquare, label: "Messages" },
  { icon: BarChart3, label: "Reports" },
  { icon: Settings, label: "Settings" },
];

const PERMISSIONS = [
  { key: "appointments", label: "Appointments", icon: CalendarCheck },
  { key: "records", label: "Clinical records", icon: FileText },
  { key: "billing", label: "Billing", icon: Receipt },
  { key: "checkin", label: "Check-in", icon: UserCheck2 },
] as const;

const ROLES = [
  {
    role: "Doctor",
    access: "Full access",
    accent: "#1e4fe0",
    avatar: "https://i.pravatar.cc/80?img=47",
    desc: "Complete visibility into schedule, records, billing, and every permission grant in the practice.",
    grants: { appointments: true, records: true, billing: true, checkin: true },
  },
  {
    role: "Front desk",
    access: "Scoped access",
    accent: "#0d9fa6",
    avatar: "https://i.pravatar.cc/80?img=32",
    desc: "Scheduling and check-in tools, without exposure to clinical notes or billing detail.",
    grants: { appointments: true, records: false, billing: false, checkin: true },
  },
  {
    role: "Practice admin",
    access: "Delegated access",
    accent: "#5b5fef",
    avatar: "https://i.pravatar.cc/80?img=13",
    desc: "Operational and billing permissions, granted explicitly by the doctor and revocable at any time.",
    grants: { appointments: true, records: false, billing: true, checkin: true },
  },
];

export function WorkspaceMockup() {
  return (
    <div className="relative">
      <div
        aria-hidden="true"
        className="absolute -right-10 -top-16 h-72 w-72 rounded-full bg-blue-soft blur-3xl"
      />

      <div className="relative overflow-hidden rounded-2xl border border-line bg-white shadow-[0_40px_80px_-32px_rgba(15,23,60,0.25)]">
        <div className="flex items-center gap-4 border-b border-line px-5 py-3.5">
          <div className="flex items-center gap-1.5">
            <Image
              src="/logo.png"
              alt="OrynDoc"
              width={707}
              height={353}
              className="h-9 w-auto"
            />
            <span className="font-display text-sm font-normal text-ink-soft">
              Workspace
            </span>
          </div>
          <div className="ml-2 hidden flex-1 items-center gap-2 rounded-lg bg-surface-tint px-3 py-1.5 text-xs text-ink-soft sm:flex">
            <Search size={14} />
            Search patients, appointments…
          </div>
          <span className="relative ml-auto flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-ink-soft">
            <Bell size={16} />
            <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-blue" />
          </span>
          <div className="flex shrink-0 items-center gap-2">
            <span className="h-8 w-8 overflow-hidden rounded-full">
              <Image
                src="https://i.pravatar.cc/80?img=47"
                alt=""
                width={32}
                height={32}
                className="h-full w-full object-cover"
              />
            </span>
            <div className="hidden leading-tight sm:block">
              <p className="text-xs font-semibold text-ink">Dr. Asha Verma</p>
              <p className="text-[11px] text-ink-soft">Internal Medicine</p>
            </div>
            <ChevronDown size={14} className="hidden text-ink-soft sm:block" />
          </div>
        </div>

        <div className="flex">
          <div className="hidden w-44 shrink-0 flex-col gap-1 border-r border-line p-3 md:flex">
            {NAV_ITEMS.map(({ icon: Icon, label, active }) => (
              <span
                key={label}
                className={`flex items-center gap-2.5 rounded-lg px-3 py-2 text-xs font-medium ${
                  active ? "bg-blue-soft text-blue" : "text-ink-soft"
                }`}
              >
                <Icon size={15} strokeWidth={1.9} />
                {label}
              </span>
            ))}
          </div>

          <div className="flex-1 p-5 sm:p-6">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h4 className="font-display text-base font-semibold text-ink">
                  Roles &amp; access
                </h4>
                <p className="mt-0.5 text-xs text-ink-soft">
                  Manage what each role can see and do in your practice.
                </p>
              </div>
              <span className="flex items-center gap-1.5 rounded-lg border border-line px-3 py-1.5 text-xs font-semibold text-ink">
                <Settings2 size={13} />
                Manage roles
              </span>
            </div>

            <div className="mt-5 flex flex-col divide-y divide-line">
              {ROLES.map((r) => (
                <div
                  key={r.role}
                  className="flex flex-col gap-4 py-4 pl-3 first:pt-0 last:pb-0 sm:flex-row sm:items-center"
                  style={{ borderLeft: `3px solid ${r.accent}` }}
                >
                  <div className="flex flex-1 items-start gap-3">
                    <span className="h-9 w-9 shrink-0 overflow-hidden rounded-full">
                      <Image
                        src={r.avatar}
                        alt=""
                        width={36}
                        height={36}
                        className="h-full w-full object-cover"
                      />
                    </span>
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-sm font-semibold text-ink">
                          {r.role}
                        </span>
                        <span
                          className="rounded-full px-2 py-0.5 text-[10px] font-semibold"
                          style={{ backgroundColor: `${r.accent}14`, color: r.accent }}
                        >
                          {r.access}
                        </span>
                      </div>
                      <p className="mt-1 max-w-xs text-xs leading-relaxed text-ink-soft">
                        {r.desc}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-1.5 sm:w-48 sm:shrink-0">
                    {PERMISSIONS.map(({ key, label, icon: Icon }) => {
                      const granted = r.grants[key];
                      return (
                        <span
                          key={key}
                          className={`flex items-center gap-1.5 rounded-md px-2 py-1.5 text-[10px] font-medium ${
                            granted ? "bg-teal/10 text-teal" : "bg-ink/5 text-ink-soft"
                          }`}
                        >
                          <Icon size={11} />
                          {label}
                          {granted ? (
                            <Check size={11} className="ml-auto" />
                          ) : (
                            <X size={11} className="ml-auto" />
                          )}
                        </span>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-8 left-3 hidden max-w-[15rem] items-start gap-2.5 rounded-xl border border-line bg-white p-4 shadow-[0_20px_40px_-20px_rgba(15,23,60,0.3)] sm:flex">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-soft text-blue">
          <Lock size={15} />
        </span>
        <div>
          <p className="text-xs font-semibold text-ink">You control access</p>
          <p className="mt-0.5 text-[11px] leading-snug text-ink-soft">
            Grant, modify, or revoke permissions anytime.
          </p>
        </div>
      </div>

      <div className="absolute -bottom-10 -right-4 hidden w-44 rounded-xl border border-line bg-white p-4 shadow-[0_20px_40px_-20px_rgba(15,23,60,0.3)] sm:block">
        <p className="text-xs font-semibold text-ink">Permissions</p>
        <ul className="mt-2.5 flex flex-col gap-2">
          {PERMISSIONS.map(({ key, label }, i) => (
            <li key={key} className="flex items-center justify-between text-[11px] text-ink-soft">
              {label}
              <span
                className={`relative h-4 w-7 rounded-full transition-colors ${
                  i !== 1 ? "bg-blue" : "bg-ink/15"
                }`}
              >
                <span
                  className={`absolute top-0.5 h-3 w-3 rounded-full bg-white transition-all ${
                    i !== 1 ? "left-3.5" : "left-0.5"
                  }`}
                />
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
