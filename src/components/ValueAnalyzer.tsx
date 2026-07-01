"use client";
import { useMemo, useState } from "react";
import {
  allPhones,
  tablets,
  laptops,
  pcs,
  type Phone,
  type Tablet,
  type Laptop,
  type PC,
} from "@/data/devices";

type AnyDevice = (Phone | Tablet | Laptop | PC) & { kind: string };

const allDevices: AnyDevice[] = [
  ...allPhones.map((p) => ({ ...p, kind: "phone" })),
  ...tablets.map((t) => ({ ...t, kind: "tablet" })),
  ...laptops.map((l) => ({ ...l, kind: "laptop" })),
  ...pcs.map((c) => ({ ...c, kind: "pc" })),
] as any[];

export default function ValueAnalyzer() {
  const [metric, setMetric] = useState<
    "performance" | "battery" | "screen" | "camera"
  >("performance");

  // Compute value score for each device
  const scored = useMemo(() => {
    return allDevices.map((d) => {
      let score = 0;
      let maxScore = 0;

      if (metric === "performance") {
        const perf =
          (d.benchmarks as any).antutu ||
          (d.benchmarks as any).pcbMark ||
          (d.benchmarks as any).cinebenchR23Multi ||
          0;
        const maxPerf = Math.max(
          ...allDevices.map(
            (x) =>
              (x.benchmarks as any).antutu ||
              (x.benchmarks as any).pcbMark ||
              (x.benchmarks as any).cinebenchR23Multi ||
              0,
          ),
        );
        score = perf;
        maxScore = maxPerf;
      } else if (metric === "battery") {
        const bat = (d.benchmarks as any).batteryLife || 0;
        const maxBat = Math.max(
          ...allDevices.map((x) => (x.benchmarks as any).batteryLife || 0),
        );
        score = bat;
        maxScore = maxBat;
      } else if (metric === "screen") {
        // Score = size * refresh / 10
        const screen = parseFloat((d.specs as any).displaySize || "0") || 0;
        const refresh =
          (d.specs as any).refresh || (d.specs as any).displayRefresh || 60;
        const screenScore = screen * refresh;
        const maxScreen = Math.max(
          ...allDevices.map((x) => {
            const s = parseFloat((x.specs as any).displaySize || "0") || 0;
            const r =
              (x.specs as any).refresh || (x.specs as any).displayRefresh || 60;
            return s * r;
          }),
        );
        score = screenScore;
        maxScore = maxScreen;
      } else if (metric === "camera") {
        // Camera score for phones/tablets
        const camMP = (d.specs as any).cameraMain || 0;
        const oisBonus = (d.specs as any).cameraOIS ? 20 : 0;
        const camScore = camMP + oisBonus;
        const maxCam = Math.max(
          ...allDevices.map((x) => {
            const mp = (x.specs as any).cameraMain || 0;
            const ois = (x.specs as any).cameraOIS ? 20 : 0;
            return mp + ois;
          }),
        );
        score = camScore;
        maxScore = maxCam;
      }

      // Value = (score/price) * 1000 — higher = better value
      const value = d.price > 0 ? (score / d.price) * 1000 : 0;
      const efficiency = maxScore > 0 ? (score / maxScore) * 100 : 0;

      return { device: d, score, value, efficiency, maxScore };
    });
  }, [metric]);

  // Group by device kind and pick top 3 per kind
  const topByKind = useMemo(() => {
    const groups: Record<string, typeof scored> = {
      phone: [],
      tablet: [],
      laptop: [],
      pc: [],
    };
    scored.forEach((s) => {
      const kind = (s.device as any).kind || "phone";
      if (groups[kind]) groups[kind].push(s);
    });

    Object.keys(groups).forEach((k) => {
      groups[k].sort((a, b) => b.value - a.value);
      groups[k] = groups[k].slice(0, 3);
    });

    return groups;
  }, [scored]);

  // Overall top value
  const topValue = useMemo(() => {
    return [...scored].sort((a, b) => b.value - a.value).slice(0, 5);
  }, [scored]);

  const metricLabels = {
    performance: "Performance / ₹",
    battery: "Battery life / ₹",
    screen: "Screen real estate / ₹",
    camera: "Camera MP / ₹",
  };

  return (
    <div className="space-y-6">
      {/* Metric selector */}
      <div className="flex flex-wrap gap-2">
        {(["performance", "battery", "screen", "camera"] as const).map((m) => (
          <button
            key={m}
            onClick={() => setMetric(m)}
            className={`px-4 py-2 rounded-lg text-xs font-mono uppercase tracking-wider border transition-colors ${
              metric === m
                ? "bg-[var(--color-accent)] text-[var(--color-bg)] border-[var(--color-accent)]"
                : "bg-[var(--color-surface)] text-[var(--color-text-dim)] border-[var(--color-border)] hover:text-[var(--color-text)]"
            }`}
          >
            {metricLabels[m]}
          </button>
        ))}
      </div>

      <p className="text-sm text-[var(--color-text-dim)]">
        Calculated as{" "}
        <code className="text-[var(--color-accent)] font-mono">
          raw_score ÷ price × 1000
        </code>{" "}
        — higher = more bang for your buck.
      </p>

      {/* Top 5 overall value picks */}
      <div>
        <h3 className="text-[11px] font-mono uppercase tracking-[0.2em] text-[var(--color-text-muted)] mb-3">
          🏆 Top 5 Value Champions (All Categories)
        </h3>
        <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl overflow-hidden">
          {topValue.map((s, i) => {
            const d = s.device as any;
            return (
              <div
                key={d.id}
                className={`grid grid-cols-12 gap-3 px-4 py-3 items-center hover:bg-[var(--color-surface-2)] transition-colors ${
                  i !== topValue.length - 1
                    ? "border-b border-[var(--color-border)]"
                    : ""
                }`}
              >
                <div className="col-span-1 text-[11px] font-mono text-[var(--color-text-muted)]">
                  #{i + 1}
                </div>
                <div className="col-span-2 flex items-center gap-2">
                  <img
                    src={d.image}
                    alt={d.name}
                    className="h-8 w-8 object-contain"
                    onError={(e) =>
                      ((e.target as HTMLImageElement).style.display = "none")
                    }
                  />
                </div>
                <div className="col-span-4">
                  <div className="text-[10px] font-mono uppercase tracking-[0.15em] text-[var(--color-text-muted)]">
                    {d.brand} · {d.kind}
                  </div>
                  <div className="text-sm text-[var(--color-text)] font-medium truncate">
                    {d.name}
                  </div>
                </div>
                <div className="col-span-2 text-right font-mono text-[var(--color-accent)] text-sm font-semibold">
                  {d.priceFormatted}
                </div>
                <div className="col-span-2">
                  <div className="text-[10px] font-mono text-[var(--color-text-muted)]">
                    Efficiency
                  </div>
                  <div className="relative h-2 bg-[var(--color-surface-2)] rounded overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-green)]"
                      style={{ width: `${s.efficiency}%` }}
                    />
                  </div>
                  <div className="text-[10px] font-mono text-[var(--color-text)] mt-0.5">
                    {s.efficiency.toFixed(0)}%
                  </div>
                </div>
                <div className="col-span-1 text-right font-mono text-[var(--color-accent)] font-semibold">
                  {s.value.toFixed(2)}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* By category */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {(["phone", "tablet", "laptop", "pc"] as const).map((kind) => (
          <div key={kind}>
            <h3 className="text-[11px] font-mono uppercase tracking-[0.2em] text-[var(--color-text-muted)] mb-3">
              Best Value · {kind}s
            </h3>
            <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl overflow-hidden">
              {topByKind[kind]?.map((s, i) => {
                const d = s.device as any;
                return (
                  <div
                    key={d.id}
                    className={`grid grid-cols-12 gap-2 px-4 py-3 items-center hover:bg-[var(--color-surface-2)] transition-colors ${
                      i !== topByKind[kind].length - 1
                        ? "border-b border-[var(--color-border)]"
                        : ""
                    }`}
                  >
                    <div className="col-span-1 text-[11px] font-mono text-[var(--color-text-muted)]">
                      #{i + 1}
                    </div>
                    <div className="col-span-2">
                      <img
                        src={d.image}
                        alt={d.name}
                        className="h-7 w-7 object-contain"
                        onError={(e) =>
                          ((e.target as HTMLImageElement).style.display =
                            "none")
                        }
                      />
                    </div>
                    <div className="col-span-5">
                      <div className="text-[10px] font-mono uppercase tracking-[0.15em] text-[var(--color-text-muted)] truncate">
                        {d.brand}
                      </div>
                      <div className="text-xs text-[var(--color-text)] truncate">
                        {d.name}
                      </div>
                    </div>
                    <div className="col-span-2 text-right font-mono text-[var(--color-accent)] text-xs font-semibold">
                      {d.priceFormatted}
                    </div>
                    <div className="col-span-2 text-right">
                      <div className="text-[10px] font-mono text-[var(--color-text-muted)]">
                        Value
                      </div>
                      <div className="text-xs font-mono text-[var(--color-green)] font-semibold">
                        {s.value.toFixed(1)}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
