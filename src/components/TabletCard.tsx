"use client";
import { useState } from "react";

type Tablet = {
  id: string;
  brand: string;
  name: string;
  price: number;
  priceFormatted: string;
  image: string;
  specs: {
    display: string;
    processor: string;
    ramStorage: string;
    battery: string;
  };
  verdict: string;
};

export default function TabletCard({ tablet }: { tablet: Tablet }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="group relative bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl overflow-hidden transition-all duration-300 hover:border-[var(--color-accent)]/20">
      {/* Image */}
      <div className="relative h-44 bg-gradient-to-b from-[var(--color-surface-2)] to-[var(--color-surface)] flex items-center justify-center overflow-hidden">
        {!imgError ? (
          <img
            src={tablet.image}
            alt={`${tablet.brand} ${tablet.name}`}
            className="h-36 w-auto object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-500"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="flex flex-col items-center gap-2">
            <div className="w-28 h-20 rounded-xl border-2 border-[var(--color-surface-3)] bg-[var(--color-surface-3)]/50 flex items-center justify-center">
              <span className="text-3xl">📟</span>
            </div>
          </div>
        )}
        <div className="absolute bottom-3 right-3 bg-[var(--color-bg)]/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-[var(--color-border)]">
          <span className="text-[var(--color-accent)] font-mono text-sm font-semibold">
            {tablet.priceFormatted}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <p className="text-[var(--color-text-muted)] text-[11px] font-mono uppercase tracking-[0.2em] mb-1">
          {tablet.brand}
        </p>
        <h3 className="text-lg font-semibold text-[var(--color-text)] leading-tight mb-3">
          {tablet.name}
        </h3>

        <div className="grid grid-cols-2 gap-x-4 gap-y-2 pt-3 border-t border-[var(--color-border)]">
          {Object.entries(tablet.specs).map(([key, value]) => {
            const labels: Record<string, string> = {
              display: "Display",
              processor: "Chip",
              ramStorage: "RAM / Storage",
              battery: "Battery",
            };
            return (
              <div key={key} className="flex flex-col">
                <span className="text-[10px] font-mono uppercase tracking-[0.15em] text-[var(--color-text-muted)]">
                  {labels[key] || key}
                </span>
                <span className="text-[13px] text-[var(--color-text-dim)] leading-snug mt-0.5">
                  {value}
                </span>
              </div>
            );
          })}
        </div>

        <div className="mt-3 p-3 bg-[var(--color-surface-2)] rounded-xl border-l-2 border-[var(--color-accent)]/40">
          <p className="text-[13px] text-[var(--color-text-dim)] leading-relaxed">
            {tablet.verdict}
          </p>
        </div>
      </div>
    </div>
  );
}
