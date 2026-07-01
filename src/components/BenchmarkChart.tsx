"use client";
import { useState } from "react";
import { allPhones } from "@/data/phones";

type Metric = "antutu" | "battery" | "charging" | "geekbench";

export default function BenchmarkChart() {
  const [metric, setMetric] = useState<Metric>("antutu");

  const sorted = [...allPhones].sort((a, b) => {
    switch (metric) {
      case "antutu":
        return b.benchmarks.antutu - a.benchmarks.antutu;
      case "battery":
        return b.specs.batteryMah - a.specs.batteryMah;
      case "charging":
        return b.benchmarks.chargingSpeed - a.benchmarks.chargingSpeed;
      case "geekbench":
        return b.benchmarks.geekbenchSingle - a.benchmarks.geekbenchSingle;
    }
  });

  const max = (() => {
    switch (metric) {
      case "antutu":
        return Math.max(...allPhones.map((p) => p.benchmarks.antutu));
      case "battery":
        return Math.max(...allPhones.map((p) => p.specs.batteryMah));
      case "charging":
        return Math.max(...allPhones.map((p) => p.benchmarks.chargingSpeed));
      case "geekbench":
        return Math.max(...allPhones.map((p) => p.benchmarks.geekbenchSingle));
    }
  })();

  const formatVal = (p: typeof allPhones[0]) => {
    switch (metric) {
      case "antutu":
        return p.benchmarks.antutu.toLocaleString();
      case "battery":
        return `${p.specs.batteryMah}mAh`;
      case "charging":
        return `${p.benchmarks.chargingSpeed}W`;
      case "geekbench":
        return p.benchmarks.geekbenchSingle.toLocaleString();
    }
  };

  const getVal = (p: typeof allPhones[0]) => {
    switch (metric) {
      case "antutu":
        return p.benchmarks.antutu;
      case "battery":
        return p.specs.batteryMah;
      case "charging":
        return p.benchmarks.chargingSpeed;
      case "geekbench":
        return p.benchmarks.geekbenchSingle;
    }
  };

  const metricLabels: Record<Metric, { name: string; unit: string; desc: string }> = {
    antutu: {
      name: "AnTuTu",
      unit: "score",
      desc: "Overall system performance (CPU + GPU + RAM + UX)",
    },
    geekbench: {
      name: "Geekbench Single-Core",
      unit: "score",
      desc: "Single-core CPU performance — best indicator of day-to-day responsiveness",
    },
    battery: {
      name: "Battery Capacity",
      unit: "mAh",
      desc: "Raw battery size — larger = longer screen-on time",
    },
    charging: {
      name: "Charging Speed",
      unit: "watts",
      desc: "Peak wired charging wattage — higher = faster top-ups",
    },
  };

  return (
    <div className="space-y-5">
      {/* Metric selector */}
      <div className="flex flex-wrap gap-2">
        {(Object.keys(metricLabels) as Metric[]).map((m) => (
          <button
            key={m}
            onClick={() => setMetric(m)}
            className={`px-4 py-2 rounded-lg text-xs font-mono uppercase tracking-wider border transition-colors ${
              metric === m
                ? "bg-[var(--color-accent)] text-[var(--color-bg)] border-[var(--color-accent)]"
                : "bg-[var(--color-surface)] text-[var(--color-text-dim)] border-[var(--color-border)] hover:text-[var(--color-text)]"
            }`}
          >
            {metricLabels[m].name}
          </button>
        ))}
      </div>

      <p className="text-sm text-[var(--color-text-dim)]">
        {metricLabels[metric].desc}
      </p>

      {/* Chart */}
      <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-5">
        <div className="space-y-2">
          {sorted.map((p, i) => {
            const val = getVal(p);
            const pct = (val / max) * 100;
            const isTop3 = i < 3;
            return (
              <div key={p.id} className="flex items-center gap-3">
                <div className="w-5 text-[11px] font-mono text-[var(--color-text-muted)] text-right">
                  {i + 1}
                </div>
                <div className="w-32 md:w-40 flex-shrink-0">
                  <div className="text-[10px] font-mono uppercase tracking-[0.15em] text-[var(--color-text-muted)] truncate">
                    {p.brand}
                  </div>
                  <div className="text-xs text-[var(--color-text)] truncate font-medium">
                    {p.name}
                  </div>
                </div>
                <div className="flex-1 relative h-6 bg-[var(--color-surface-2)] rounded overflow-hidden">
                  <div
                    className={`h-full rounded transition-all duration-500 ${
                      isTop3
                        ? "bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent)]/60"
                        : "bg-[var(--color-text-muted)]/40"
                    }`}
                    style={{ width: `${pct}%` }}
                  />
                </div>
                <div className="w-20 text-right text-[11px] font-mono text-[var(--color-text)] font-semibold">
                  {formatVal(p)}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
