"use client";
import { useState } from "react";
import type { Phone } from "@/data/phones";

export default function PhoneCard({ phone }: { phone: Phone }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div
      className={`group relative bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl overflow-hidden transition-all duration-300 hover:border-[var(--color-accent)]/20 hover:shadow-[0_0_40px_rgba(184,255,87,0.04)] ${
        phone.pickFor === "mom"
          ? "ring-1 ring-[var(--color-pink)]/30"
          : phone.pickFor === "cousin"
            ? "ring-1 ring-[var(--color-blue)]/30"
            : ""
      }`}
    >
      {phone.pickLabel && (
        <div
          className={`absolute top-4 left-4 z-10 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wider ${
            phone.pickFor === "mom"
              ? "bg-[var(--color-pink)]/10 text-[var(--color-pink)] border border-[var(--color-pink)]/20"
              : "bg-[var(--color-blue)]/10 text-[var(--color-blue)] border border-[var(--color-blue)]/20"
          }`}
        >
          {phone.pickLabel}
        </div>
      )}

      <div className="relative h-52 bg-gradient-to-b from-[var(--color-surface-2)] to-[var(--color-surface)] flex items-center justify-center overflow-hidden">
        {!imgError ? (
          <img
            src={phone.image}
            alt={`${phone.brand} ${phone.name}`}
            className="h-44 w-auto object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-500"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="flex flex-col items-center gap-2">
            <div className="w-20 h-36 rounded-2xl border-2 border-[var(--color-surface-3)] bg-[var(--color-surface-3)]/50 flex items-center justify-center">
              <span className="text-3xl">📱</span>
            </div>
          </div>
        )}
        <div className="absolute bottom-3 right-3 bg-[var(--color-bg)]/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-[var(--color-border)]">
          <span className="text-[var(--color-accent)] font-mono text-sm font-semibold">
            {phone.priceFormatted}
          </span>
        </div>
      </div>

      <div className="p-5">
        <div className="mb-3">
          <p className="text-[var(--color-text-muted)] text-[11px] font-mono uppercase tracking-[0.2em] mb-1">
            {phone.brand}
          </p>
          <h3 className="text-xl font-semibold text-[var(--color-text)] leading-tight">
            {phone.name}
          </h3>
        </div>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {phone.tags.map((tag) => {
            const isHighlight = phone.highlightTags?.includes(tag);
            return (
              <span
                key={tag}
                className={`px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider border ${
                  isHighlight
                    ? "border-[var(--color-accent)]/30 text-[var(--color-accent)] bg-[var(--color-accent)]/5"
                    : "border-[var(--color-border)] text-[var(--color-text-dim)]"
                }`}
              >
                {tag}
              </span>
            );
          })}
        </div>

        {/* Mini benchmark strip */}
        <div className="grid grid-cols-3 gap-2 mb-4 pt-3 border-t border-[var(--color-border)]">
          <div className="text-center">
            <div className="text-[9px] font-mono uppercase tracking-[0.15em] text-[var(--color-text-muted)]">
              AnTuTu
            </div>
            <div className="text-xs font-mono text-[var(--color-text)] font-semibold">
              {(phone.benchmarks.antutu / 1000).toFixed(0)}K
            </div>
          </div>
          <div className="text-center">
            <div className="text-[9px] font-mono uppercase tracking-[0.15em] text-[var(--color-text-muted)]">
              Battery
            </div>
            <div className="text-xs font-mono text-[var(--color-text)] font-semibold">
              {phone.specs.batteryMah >= 1000
                ? `${(phone.specs.batteryMah / 1000).toFixed(1)}K`
                : phone.specs.batteryMah}
              mAh
            </div>
          </div>
          <div className="text-center">
            <div className="text-[9px] font-mono uppercase tracking-[0.15em] text-[var(--color-text-muted)]">
              Charge
            </div>
            <div className="text-xs font-mono text-[var(--color-text)] font-semibold">
              {phone.benchmarks.chargingSpeed}W
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-x-4 gap-y-2.5 pt-3 border-t border-[var(--color-border)]">
          {Object.entries(phone.specs).map(([key, value]) => {
            if (
              [
                "displayType",
                "displaySize",
                "displayRefresh",
                "ram",
                "storage",
                "cameraMain",
                "cameraOIS",
                "batteryMah",
              ].includes(key)
            )
              return null;
            const labels: Record<string, string> = {
              display: "Display",
              processor: "Chip",
              ramStorage: "RAM / Storage",
              camera: "Camera",
              battery: "Battery",
              software: "Software",
              ipRating: "IP Rating",
            };
            return (
              <div key={key} className="flex flex-col">
                <span className="text-[10px] font-mono uppercase tracking-[0.15em] text-[var(--color-text-muted)]">
                  {labels[key] || key}
                </span>
                <span className="text-[13px] text-[var(--color-text-dim)] leading-snug mt-0.5">
                  {value as string}
                </span>
              </div>
            );
          })}
        </div>

        <div className="mt-4 p-3 bg-[var(--color-surface-2)] rounded-xl border-l-2 border-[var(--color-accent)]/40">
          <p className="text-[13px] text-[var(--color-text-dim)] leading-relaxed">
            {phone.verdict}
          </p>
        </div>
      </div>
    </div>
  );
}
