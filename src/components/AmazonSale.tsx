"use client";
import { useState, useEffect } from "react";
import { allPhones, tablets, laptops, pcs } from "@/data/devices";

// Sale end: July 3, 2026 11:59 PM IST
const SALE_END = new Date("2026-07-03T23:59:00+05:30").getTime();
const SALE_START = new Date("2026-07-02T00:00:00+05:30").getTime();

type SaleDeal = {
  deviceId: string;
  originalPrice: number;
  salePrice: number;
  bankOffer?: string;
  couponCode?: string;
  label: "Lightning" | "Best Deal" | "Editor's Pick" | "Budget King";
};

const saleDeals: SaleDeal[] = [
  { deviceId: "oneplus-n6", originalPrice: 19999, salePrice: 16999, bankOffer: "₹2000 ICICI cashback", couponCode: "PRIME2000", label: "Best Deal" },
  { deviceId: "redmi-note-14-pro-plus", originalPrice: 18999, salePrice: 14999, bankOffer: "₹1000 HDFC discount", label: "Lightning" },
  { deviceId: "moto-g36", originalPrice: 14999, salePrice: 11999, bankOffer: "₹1000 bank discount", label: "Budget King" },
  { deviceId: "poco-f7", originalPrice: 22999, salePrice: 18999, bankOffer: "₹2000 exchange bonus", label: "Best Deal" },
  { deviceId: "nothing-phone-4b", originalPrice: 22999, salePrice: 18999, bankOffer: "₹2000 bank cashback", label: "Editor's Pick" },
  { deviceId: "iqoo-z10", originalPrice: 24999, salePrice: 20999, bankOffer: "₹2000 coupon + bank offer", couponCode: "GAMING2K", label: "Lightning" },
  { deviceId: "samsung-m16", originalPrice: 13999, salePrice: 10999, bankOffer: "₹1500 HDFC discount", label: "Budget King" },
  { deviceId: "oneplus-nord-ce5", originalPrice: 19999, salePrice: 16499, bankOffer: "₹1500 bank cashback", label: "Best Deal" },
  { deviceId: "asus-vivobook-s-15", originalPrice: 69990, salePrice: 57990, bankOffer: "₹5000 SBI card discount", label: "Editor's Pick" },
  { deviceId: "macbook-air-m3-13", originalPrice: 99900, salePrice: 89900, bankOffer: "₹10000 instant discount", label: "Lightning" },
  { deviceId: "ipad-11", originalPrice: 39900, salePrice: 32900, bankOffer: "₹3000 bank discount + free case", label: "Best Deal" },
  { deviceId: "ipad-air-m3", originalPrice: 64900, salePrice: 54900, bankOffer: "₹5000 bank discount + Apple Pencil", label: "Editor's Pick" },
];

const allDevices = [...allPhones, ...tablets, ...laptops, ...pcs];

function useCountdown(target: number) {
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    const tick = () => {
      const now = Date.now();
      const diff = Math.max(0, target - now);
      setIsLive(now >= SALE_START);
      setTime({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [target]);

  return { time, isLive };
}

export default function AmazonSale() {
  const { time, isLive } = useCountdown(SALE_END);
  const [sortBy, setSortBy] = useState<"discount" | "price">("discount");

  const deals = saleDeals
    .map((deal) => {
      const device = allDevices.find((d) => d.id === deal.deviceId) as any;
      if (!device) return null;
      return { ...deal, device, discount: Math.round((1 - deal.salePrice / deal.originalPrice) * 100) };
    })
    .filter(Boolean)
    .sort((a, b) => {
      if (sortBy === "discount") return b!.discount - a!.discount;
      return a!.device.price - b!.device.price;
    });

  const labelColors: Record<string, string> = {
    Lightning: "bg-orange-500/10 text-orange-400 border-orange-500/20",
    "Best Deal": "bg-[var(--color-green)]/10 text-[var(--color-green)] border-[var(--color-green)]/20",
    "Editor's Pick": "bg-purple-500/10 text-purple-400 border-purple-500/20",
    "Budget King": "bg-[var(--color-accent)]/10 text-[var(--color-accent)] border-[var(--color-accent)]/20",
  };

  return (
    <div className="space-y-6">
      {/* Countdown banner */}
      <div className={`relative overflow-hidden rounded-2xl p-6 md:p-8 ${isLive ? "bg-gradient-to-r from-[var(--color-accent)]/10 to-[var(--color-green)]/10 border border-[var(--color-accent)]/30" : "bg-[var(--color-surface)] border border-[var(--color-border)]"}`}>
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-2xl">🛒</span>
            <div>
              <h3 className="font-display text-2xl md:text-3xl font-light italic">
                {isLive ? (
                  <>Amazon <span className="text-[var(--color-accent)]">Sale is LIVE!</span></>
                ) : (
                  <>Amazon <span className="text-[var(--color-accent)]">Sale</span> Starts Tomorrow</>
                )}
              </h3>
              <p className="text-[var(--color-text-dim)] text-sm mt-0.5">
                {isLive
                  ? "Grab these deals before they expire!"
                  : "Deals drop July 2 — bookmark this page!"}
              </p>
            </div>
          </div>

          {/* Countdown */}
          <div className="flex gap-3 md:gap-5 mt-4">
            {[
              { val: time.days, label: "Days" },
              { val: time.hours, label: "Hrs" },
              { val: time.minutes, label: "Min" },
              { val: time.seconds, label: "Sec" },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <div className={`w-14 h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center font-mono text-xl md:text-2xl font-bold ${isLive ? "bg-[var(--color-bg)] text-[var(--color-accent)]" : "bg-[var(--color-surface-2)] text-[var(--color-text)]"}`}>
                  {String(item.val).padStart(2, "0")}
                </div>
                <div className="text-[9px] font-mono uppercase tracking-[0.15em] text-[var(--color-text-muted)] mt-1">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sort */}
      <div className="flex items-center justify-between">
        <div className="text-[11px] font-mono text-[var(--color-text-muted)]">
          {deals.length} deals · Updated live
        </div>
        <div className="flex gap-1 bg-[var(--color-surface-2)] border border-[var(--color-border)] rounded-lg p-1">
          {(["discount", "price"] as const).map((s) => (
            <button
              key={s}
              onClick={() => setSortBy(s)}
              className={`px-3 py-1 rounded text-[10px] font-mono uppercase tracking-wider transition-colors ${
                sortBy === s
                  ? "bg-[var(--color-accent)] text-[var(--color-bg)]"
                  : "text-[var(--color-text-dim)] hover:text-[var(--color-text)]"
              }`}
            >
              {s === "discount" ? "% Off" : "Price Low"}
            </button>
          ))}
        </div>
      </div>

      {/* Deals grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {deals.map((deal) => {
          if (!deal) return null;
          const d = deal.device;
          return (
            <div key={deal.deviceId} className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl overflow-hidden hover:border-[var(--color-accent)]/20 transition-all group">
              <div className="relative h-40 bg-gradient-to-b from-[var(--color-surface-2)] to-[var(--color-surface)] flex items-center justify-center">
                <img
                  src={d.image}
                  alt={d.name}
                  className="h-32 w-auto object-contain group-hover:scale-105 transition-transform"
                  onError={(e) => ((e.target as HTMLImageElement).style.display = "none")}
                />
                <div className="absolute top-3 left-3">
                  <span className={`px-2 py-0.5 rounded text-[9px] font-mono uppercase tracking-wider border ${labelColors[deal.label]}`}>
                    {deal.label === "Lightning" ? "⚡" : deal.label === "Best Deal" ? "🔥" : deal.label === "Editor's Pick" ? "✦" : "👑"} {deal.label}
                  </span>
                </div>
                <div className="absolute top-3 right-3 bg-orange-500 text-white font-mono text-sm font-bold px-2 py-1 rounded-lg">
                  -{deal.discount}%
                </div>
              </div>
              <div className="p-4">
                <div className="text-[10px] font-mono uppercase tracking-[0.15em] text-[var(--color-text-muted)]">{d.brand}</div>
                <div className="text-sm font-medium text-[var(--color-text)] truncate mb-2">{d.name}</div>
                <div className="flex items-end gap-2 mb-2">
                  <span className="text-lg font-mono text-[var(--color-green)] font-bold">{deal.salePrice.toLocaleString()}</span>
                  <span className="text-xs font-mono text-[var(--color-text-muted)] line-through">{deal.originalPrice.toLocaleString()}</span>
                  <span className="text-[10px] font-mono text-[var(--color-green)] ml-auto">Save ₹{(deal.originalPrice - deal.salePrice).toLocaleString()}</span>
                </div>
                {deal.bankOffer && (
                  <div className="text-[10px] text-[var(--color-text-dim)] bg-[var(--color-surface-2)] rounded px-2 py-1">
                    🏦 {deal.bankOffer}
                  </div>
                )}
                {deal.couponCode && (
                  <div className="mt-1.5 text-[10px] font-mono">
                    🎟️ Code: <span className="text-[var(--color-accent)] bg-[var(--color-accent)]/10 px-1.5 py-0.5 rounded border border-[var(--color-accent)]/20">{deal.couponCode}</span>
                  </div>
                )}
                <div className="mt-3 flex items-center gap-2">
                  {d.specs?.processor && (
                    <span className="text-[9px] font-mono text-[var(--color-text-muted)] border border-[var(--color-border)] px-1.5 py-0.5 rounded truncate max-w-[120px]">
                      {d.specs.processor.split(" ").slice(0, 2).join(" ")}
                    </span>
                  )}
                  {d.specs?.batteryMah && (
                    <span className="text-[9px] font-mono text-[var(--color-text-muted)] border border-[var(--color-border)] px-1.5 py-0.5 rounded">
                      {d.specs.batteryMah}mAh
                    </span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
