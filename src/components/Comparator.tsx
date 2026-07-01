"use client";
import { useState, useMemo } from "react";
import type { Phone } from "@/data/phones";
import { allPhones } from "@/data/phones";

type Slot = "left" | "right";

export default function Comparator() {
  const [leftId, setLeftId] = useState<string>(allPhones[0].id);
  const [rightId, setRightId] = useState<string>(
    allPhones.find((p) => p.id === "iphone-16-pro")?.id || allPhones[1].id
  );

  const left = allPhones.find((p) => p.id === leftId)!;
  const right = allPhones.find((p) => p.id === rightId)!;

  const rows = useMemo(
    () => [
      {
        label: "Price",
        left: left.priceFormatted,
        right: right.priceFormatted,
        winner:
          left.price < right.price
            ? "left"
            : left.price > right.price
            ? "right"
            : null,
      },
      {
        label: "Display",
        left: left.specs.display,
        right: right.specs.display,
        winner: null,
      },
      {
        label: "Refresh Rate",
        left: `${left.specs.displayRefresh}Hz`,
        right: `${right.specs.displayRefresh}Hz`,
        winner:
          left.specs.displayRefresh > right.specs.displayRefresh
            ? "left"
            : right.specs.displayRefresh > left.specs.displayRefresh
            ? "right"
            : null,
      },
      {
        label: "Processor",
        left: left.specs.processor,
        right: right.specs.processor,
        winner: null,
      },
      {
        label: "AnTuTu Score",
        left: left.benchmarks.antutu.toLocaleString(),
        right: right.benchmarks.antutu.toLocaleString(),
        winner:
          left.benchmarks.antutu > right.benchmarks.antutu
            ? "left"
            : right.benchmarks.antutu > left.benchmarks.antutu
            ? "right"
            : null,
      },
      {
        label: "Geekbench (Single)",
        left: left.benchmarks.geekbenchSingle.toLocaleString(),
        right: right.benchmarks.geekbenchSingle.toLocaleString(),
        winner:
          left.benchmarks.geekbenchSingle > right.benchmarks.geekbenchSingle
            ? "left"
            : right.benchmarks.geekbenchSingle > left.benchmarks.geekbenchSingle
            ? "right"
            : null,
      },
      {
        label: "Geekbench (Multi)",
        left: left.benchmarks.geekbenchMulti.toLocaleString(),
        right: right.benchmarks.geekbenchMulti.toLocaleString(),
        winner:
          left.benchmarks.geekbenchMulti > right.benchmarks.geekbenchMulti
            ? "left"
            : right.benchmarks.geekbenchMulti > left.benchmarks.geekbenchMulti
            ? "right"
            : null,
      },
      {
        label: "RAM",
        left: `${left.specs.ram}GB`,
        right: `${right.specs.ram}GB`,
        winner:
          left.specs.ram > right.specs.ram
            ? "left"
            : right.specs.ram > left.specs.ram
            ? "right"
            : null,
      },
      {
        label: "Storage",
        left: `${left.specs.storage}GB`,
        right: `${right.specs.storage}GB`,
        winner:
          left.specs.storage > right.specs.storage
            ? "left"
            : right.specs.storage > left.specs.storage
            ? "right"
            : null,
      },
      {
        label: "Main Camera",
        left: `${left.specs.cameraMain}MP${left.specs.cameraOIS ? " + OIS" : ""}`,
        right: `${right.specs.cameraMain}MP${right.specs.cameraOIS ? " + OIS" : ""}`,
        winner: null,
      },
      {
        label: "Battery",
        left: `${left.specs.batteryMah}mAh`,
        right: `${right.specs.batteryMah}mAh`,
        winner:
          left.specs.batteryMah > right.specs.batteryMah
            ? "left"
            : right.specs.batteryMah > left.specs.batteryMah
            ? "right"
            : null,
      },
      {
        label: "Charging",
        left: `${left.benchmarks.chargingSpeed}W`,
        right: `${right.benchmarks.chargingSpeed}W`,
        winner:
          left.benchmarks.chargingSpeed > right.benchmarks.chargingSpeed
            ? "left"
            : right.benchmarks.chargingSpeed > left.benchmarks.chargingSpeed
            ? "right"
            : null,
      },
      {
        label: "IP Rating",
        left: left.specs.ipRating || "—",
        right: right.specs.ipRating || "—",
        winner: null,
      },
    ],
    [left, right]
  );

  const selectPhone = (slot: Slot, id: string) => {
    if (slot === "left") setLeftId(id);
    else setRightId(id);
  };

  return (
    <div className="space-y-6">
      {/* Phone selectors */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {(
          [
            { id: leftId, slot: "left" as Slot, phone: left },
            { id: rightId, slot: "right" as Slot, phone: right },
          ]
        ).map(({ slot, phone }) => (
          <div
            key={slot}
            className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-5"
          >
            <label className="block text-[10px] font-mono uppercase tracking-[0.2em] text-[var(--color-text-muted)] mb-2">
              {slot === "left" ? "Phone A" : "Phone B"}
            </label>
            <select
              value={phone.id}
              onChange={(e) => selectPhone(slot, e.target.value)}
              className="w-full bg-[var(--color-surface-2)] border border-[var(--color-border)] rounded-lg px-3 py-2.5 text-sm text-[var(--color-text)] focus:outline-none focus:border-[var(--color-accent)]/50"
            >
              {allPhones.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.brand} {p.name} — {p.priceFormatted}
                </option>
              ))}
            </select>
            <div className="mt-3 flex items-center gap-3">
              <img
                src={phone.image}
                alt={phone.name}
                className="h-16 w-auto object-contain"
                onError={(e) => ((e.target as HTMLImageElement).style.display = "none")}
              />
              <div>
                <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
                  {phone.brand}
                </p>
                <p className="text-sm font-semibold text-[var(--color-text)]">
                  {phone.name}
                </p>
                <p className="text-[11px] font-mono text-[var(--color-accent)]">
                  {phone.priceFormatted}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Comparison table */}
      <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl overflow-hidden">
        <div className="grid grid-cols-3 text-[10px] font-mono uppercase tracking-[0.2em] text-[var(--color-text-muted)] px-5 py-3 border-b border-[var(--color-border)]">
          <div>Spec</div>
          <div>{left.brand} {left.name.split(" ")[0]}</div>
          <div>{right.brand} {right.name.split(" ")[0]}</div>
        </div>
        {rows.map((row, i) => (
          <div
            key={row.label}
            className={`grid grid-cols-3 px-5 py-3 text-sm ${
              i !== rows.length - 1 ? "border-b border-[var(--color-border)]" : ""
            }`}
          >
            <div className="text-[var(--color-text-dim)] font-medium">
              {row.label}
            </div>
            <div
              className={`text-[var(--color-text)] ${
                row.winner === "left"
                  ? "text-[var(--color-accent)] font-semibold"
                  : ""
              }`}
            >
              {row.winner === "left" && "→ "}
              {row.left}
            </div>
            <div
              className={`text-[var(--color-text)] ${
                row.winner === "right"
                  ? "text-[var(--color-accent)] font-semibold"
                  : ""
              }`}
            >
              {row.winner === "right" && "← "}
              {row.right}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
