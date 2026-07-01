"use client";
import { allPhones } from "@/data/devices";

// Mock price drop data — in production this would be from Flipkart/Amazon feeds
// For now, simulate based on category and show as "deals"
const priceDrops = [
  {
    deviceId: "redmi-note-14-pro-plus",
    originalPrice: 18999,
    currentPrice: 15999,
    dropPercent: 16,
    reason: "Republic Day Sale",
    expires: "5 days",
  },
  {
    deviceId: "iqoo-z10",
    originalPrice: 26999,
    currentPrice: 22999,
    dropPercent: 15,
    reason: "Festive Offer",
    expires: "3 days",
  },
  {
    deviceId: "oneplus-nord-ce5",
    originalPrice: 19999,
    currentPrice: 17999,
    dropPercent: 10,
    reason: "Bank Cashback",
    expires: "7 days",
  },
  {
    deviceId: "samsung-a37",
    originalPrice: 42990,
    currentPrice: 37990,
    dropPercent: 12,
    reason: "Limited Period",
    expires: "2 days",
  },
  {
    deviceId: "moto-g36",
    originalPrice: 14999,
    currentPrice: 12999,
    dropPercent: 13,
    reason: "Launch Offer",
    expires: "1 week",
  },
  {
    deviceId: "pixel-10-pro",
    originalPrice: 89999,
    currentPrice: 79999,
    dropPercent: 11,
    reason: "Holiday Sale",
    expires: "4 days",
  },
];

const allDevices = allPhones;

export default function PriceDrops() {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 mb-2">
        <div className="h-px flex-1 bg-[var(--color-border)]" />
        <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[var(--color-green)]">
          💰 Active Deals
        </span>
        <div className="h-px flex-1 bg-[var(--color-border)]" />
      </div>

      {priceDrops.map((drop) => {
        const device = allDevices.find((d) => d.id === drop.deviceId);
        if (!device) return null;
        return (
          <div
            key={drop.deviceId}
            className="flex items-center gap-4 p-4 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl hover:border-[var(--color-green)]/30 transition-colors"
          >
            <img
              src={device.image}
              alt={device.name}
              className="h-16 w-16 object-contain flex-shrink-0"
              onError={(e) => ((e.target as HTMLImageElement).style.display = "none")}
            />
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] font-mono uppercase tracking-[0.15em] text-[var(--color-text-muted)]">
                  {device.brand}
                </span>
                <span className="text-[10px] font-mono px-1.5 py-0.5 bg-[var(--color-green)]/10 border border-[var(--color-green)]/20 text-[var(--color-green)] rounded">
                  -{drop.dropPercent}%
                </span>
                <span className="text-[10px] font-mono text-[var(--color-text-muted)] truncate">
                  · {drop.reason}
                </span>
              </div>
              <div className="text-sm font-medium text-[var(--color-text)] truncate">
                {device.name}
              </div>
            </div>
            <div className="text-right">
              <div className="text-[11px] font-mono text-[var(--color-text-muted)] line-through">
                ₹{drop.originalPrice.toLocaleString()}
              </div>
              <div className="text-base font-mono text-[var(--color-green)] font-semibold">
                ₹{drop.currentPrice.toLocaleString()}
              </div>
              <div className="text-[10px] font-mono text-[var(--color-text-muted)]">
                Ends in {drop.expires}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
