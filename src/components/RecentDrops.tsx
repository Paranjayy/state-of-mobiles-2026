"use client";
import { allPhones, tablets, laptops, pcs } from "@/data/devices";

const allDevices = [...allPhones, ...tablets, ...laptops, ...pcs] as any[];

export default function RecentDrops() {
  // Sort by release date desc
  const recent = [...allDevices]
    .filter((d) => d.releaseDate)
    .sort((a, b) => b.releaseDate.localeCompare(a.releaseDate))
    .slice(0, 8);

  // Group by month
  const grouped: Record<string, any[]> = {};
  recent.forEach((d) => {
    const month = d.releaseDate.slice(0, 7);
    if (!grouped[month]) grouped[month] = [];
    grouped[month].push(d);
  });

  const monthNames: Record<string, string> = {
    "2026-07": "July 2026",
    "2026-06": "June 2026",
    "2026-05": "May 2026",
    "2026-04": "April 2026",
    "2026-03": "March 2026",
    "2026-02": "February 2026",
    "2026-01": "January 2026",
    "2025-12": "December 2025",
    "2025-11": "November 2025",
    "2025-10": "October 2025",
    "2025-09": "September 2025",
    "2025-08": "August 2025",
    "2025-07": "July 2025",
  };

  return (
    <div className="space-y-6">
      {Object.entries(grouped).map(([month, devices]) => (
        <div key={month}>
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px flex-1 bg-[var(--color-border)]" />
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
              {monthNames[month] || month} · {devices.length}
            </span>
            <div className="h-px flex-1 bg-[var(--color-border)]" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {devices.map((d) => (
              <div
                key={d.id}
                className="flex items-center gap-3 p-3 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl hover:border-[var(--color-accent)]/30 transition-colors"
              >
                <img
                  src={d.image}
                  alt={d.name}
                  className="h-14 w-14 object-contain flex-shrink-0"
                  onError={(e) => ((e.target as HTMLImageElement).style.display = "none")}
                />
                <div className="flex-1 min-w-0">
                  <div className="text-[10px] font-mono uppercase tracking-[0.15em] text-[var(--color-text-muted)]">
                    {d.brand} · <span className="text-[var(--color-accent)]">NEW</span>
                  </div>
                  <div className="text-sm font-medium text-[var(--color-text)] truncate">
                    {d.name}
                  </div>
                  <div className="text-[11px] text-[var(--color-text-dim)] truncate mt-0.5">
                    {d.verdict.slice(0, 80)}…
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-mono text-[var(--color-accent)] font-semibold">
                    {d.priceFormatted}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
