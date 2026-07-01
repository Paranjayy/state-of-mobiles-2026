"use client";
import { useState, useEffect } from "react";
import { allPhones, tablets, laptops, pcs, type Phone, type Tablet, type Laptop, type PC } from "@/data/devices";

type WatchItem = {
  id: string;
  kind: "phone" | "tablet" | "laptop" | "pc";
  addedAt: number;
  targetPrice?: number;
};

const STORAGE_KEY = "state-of-devices-watchlist";

export function useWatchlist() {
  const [items, setItems] = useState<WatchItem[]>([]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) setItems(JSON.parse(stored));
    } catch {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {}
  }, [items]);

  const add = (id: string, kind: WatchItem["kind"], targetPrice?: number) => {
    if (items.find((i) => i.id === id)) return;
    setItems([...items, { id, kind, addedAt: Date.now(), targetPrice }]);
  };

  const remove = (id: string) => {
    setItems(items.filter((i) => i.id !== id));
  };

  const has = (id: string) => items.some((i) => i.id === id);

  const getDevice = (item: WatchItem): (Phone | Tablet | Laptop | PC) | undefined => {
    const all = [...allPhones, ...tablets, ...laptops, ...pcs] as any[];
    return all.find((d) => d.id === item.id);
  };

  return { items, add, remove, has, getDevice };
}

export function WatchlistPanel() {
  const { items, remove, getDevice } = useWatchlist();
  const [open, setOpen] = useState(false);

  if (items.length === 0) return null;

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-40 px-4 py-3 bg-[var(--color-accent)] text-[var(--color-bg)] rounded-full font-mono text-sm font-semibold shadow-2xl hover:scale-105 transition-transform"
      >
        ♥ {items.length} Watched
      </button>

      {/* Panel */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-end md:items-center md:justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl w-full max-w-2xl max-h-[80vh] overflow-y-auto">
            <div className="p-5 border-b border-[var(--color-border)] flex items-center justify-between sticky top-0 bg-[var(--color-surface)] z-10">
              <div>
                <h3 className="font-display text-2xl font-light italic">Your Watchlist</h3>
                <p className="text-[11px] font-mono text-[var(--color-text-muted)] mt-0.5">
                  {items.length} devices saved
                </p>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="w-8 h-8 rounded-lg bg-[var(--color-surface-2)] hover:bg-[var(--color-surface-3)] text-[var(--color-text)]"
              >
                ✕
              </button>
            </div>
            <div className="p-4 space-y-2">
              {items.map((item) => {
                const device = getDevice(item) as any;
                if (!device) return null;
                return (
                  <div
                    key={item.id}
                    className="flex items-center gap-3 p-3 bg-[var(--color-surface-2)] rounded-xl"
                  >
                    <img
                      src={device.image}
                      alt={device.name}
                      className="h-12 w-12 object-contain"
                      onError={(e) => ((e.target as HTMLImageElement).style.display = "none")}
                    />
                    <div className="flex-1 min-w-0">
                      <div className="text-[10px] font-mono uppercase tracking-[0.15em] text-[var(--color-text-muted)]">
                        {device.brand} · {item.kind}
                      </div>
                      <div className="text-sm font-medium text-[var(--color-text)] truncate">
                        {device.name}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-mono text-[var(--color-accent)] font-semibold">
                        {device.priceFormatted}
                      </div>
                      {item.targetPrice && (
                        <div className="text-[10px] font-mono text-[var(--color-text-muted)]">
                          Alert: {item.targetPrice.toLocaleString()}
                        </div>
                      )}
                    </div>
                    <button
                      onClick={() => remove(item.id)}
                      className="w-8 h-8 rounded-lg text-[var(--color-text-muted)] hover:text-[var(--color-red)] hover:bg-[var(--color-surface-3)]"
                      title="Remove"
                    >
                      ✕
                    </button>
                  </div>
                );
              })}
            </div>
            <div className="p-4 border-t border-[var(--color-border)]">
              <button
                onClick={() => {
                  if (confirm("Clear entire watchlist?")) {
                    items.forEach((i) => remove(i.id));
                  }
                }}
                className="text-[11px] font-mono text-[var(--color-text-muted)] hover:text-[var(--color-red)] uppercase tracking-wider"
              >
                Clear all
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export function WatchlistButton({ deviceId, kind, deviceName }: { deviceId: string; kind: WatchItem["kind"]; deviceName: string }) {
  const { has, add, remove } = useWatchlist();
  const isWatched = has(deviceId);

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        if (isWatched) remove(deviceId);
        else add(deviceId, kind);
      }}
      className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
        isWatched
          ? "bg-[var(--color-pink)]/20 text-[var(--color-pink)]"
          : "bg-[var(--color-surface-2)] text-[var(--color-text-muted)] hover:text-[var(--color-pink)] hover:bg-[var(--color-pink)]/10"
      }`}
      title={isWatched ? `Remove ${deviceName} from watchlist` : `Add ${deviceName} to watchlist`}
    >
      {isWatched ? "♥" : "♡"}
    </button>
  );
}
