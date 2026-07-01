"use client";
import { useState, useEffect } from "react";
import { allPhones, tablets, laptops, pcs } from "@/data/devices";

type AnyDevice = any;

const allDevices: AnyDevice[] = [
  ...allPhones,
  ...tablets,
  ...laptops,
  ...pcs,
];

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      }
      if (e.key === "Escape" && open) {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open]);

  const results = query
    ? allDevices
        .filter((d) => {
          const q = query.toLowerCase();
          return (
            d.name.toLowerCase().includes(q) ||
            d.brand.toLowerCase().includes(q) ||
            d.specs?.processor?.toLowerCase().includes(q) ||
            d.specs?.gpu?.toLowerCase().includes(q) ||
            d.tags?.some((t: string) => t.toLowerCase().includes(q)) ||
            d.type?.toLowerCase().includes(q)
          );
        })
        .slice(0, 8)
    : allDevices.slice(0, 8);

  useEffect(() => {
    setSelected(0);
  }, [query, open]);

  const navigate = (device: AnyDevice) => {
    const sectionId = device.type + "s";
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setOpen(false);
      setQuery("");
    }
  };

  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelected((s) => Math.min(s + 1, results.length - 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelected((s) => Math.max(s - 1, 0));
      } else if (e.key === "Enter" && results[selected]) {
        navigate(results[selected]);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, results, selected]);

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 left-6 z-30 px-3 py-2 bg-[var(--color-surface)]/90 backdrop-blur border border-[var(--color-border)] rounded-lg text-[10px] font-mono uppercase tracking-wider text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:border-[var(--color-accent)]/30 transition-colors"
        title="Open command palette (⌘K)"
      >
        <span className="opacity-50">⌘K</span> Search
      </button>
    );
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 md:pt-32 px-4 bg-black/60 backdrop-blur-sm"
      onClick={() => setOpen(false)}
    >
      <div
        className="w-full max-w-2xl bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Input */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-[var(--color-border)]">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[var(--color-text-muted)]">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search any device — phones, laptops, tablets, PCs…"
            className="flex-1 bg-transparent text-base text-[var(--color-text)] placeholder:text-[var(--color-text-muted)] focus:outline-none"
          />
          <kbd className="px-2 py-0.5 text-[10px] font-mono bg-[var(--color-surface-2)] border border-[var(--color-border)] rounded text-[var(--color-text-muted)]">
            ESC
          </kbd>
        </div>

        {/* Results */}
        <div className="max-h-[60vh] overflow-y-auto">
          {results.length === 0 ? (
            <div className="px-5 py-8 text-center text-[var(--color-text-dim)]">
              No devices found for "{query}"
            </div>
          ) : (
            <div className="py-2">
              {results.map((d, i) => (
                <button
                  key={d.id}
                  onClick={() => navigate(d)}
                  onMouseEnter={() => setSelected(i)}
                  className={`w-full px-4 py-3 flex items-center gap-3 text-left transition-colors ${
                    i === selected ? "bg-[var(--color-surface-2)]" : ""
                  }`}
                >
                  <img
                    src={d.image}
                    alt={d.name}
                    className="h-10 w-10 object-contain flex-shrink-0"
                    onError={(e) => ((e.target as HTMLImageElement).style.display = "none")}
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono uppercase tracking-[0.15em] text-[var(--color-text-muted)]">
                        {d.brand}
                      </span>
                      <span className="text-[10px] font-mono px-1.5 py-0.5 bg-[var(--color-surface-2)] border border-[var(--color-border)] rounded text-[var(--color-text-dim)]">
                        {d.type}
                      </span>
                    </div>
                    <div className="text-sm text-[var(--color-text)] font-medium truncate">
                      {d.name}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-mono text-[var(--color-accent)] font-semibold">
                      {d.priceFormatted}
                    </div>
                    <div className="text-[10px] font-mono text-[var(--color-text-muted)]">
                      {d.category}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-5 py-3 border-t border-[var(--color-border)] flex items-center gap-4 text-[10px] font-mono uppercase tracking-wider text-[var(--color-text-muted)]">
          <span className="flex items-center gap-1">
            <kbd className="px-1.5 py-0.5 bg-[var(--color-surface-2)] border border-[var(--color-border)] rounded">↑</kbd>
            <kbd className="px-1.5 py-0.5 bg-[var(--color-surface-2)] border border-[var(--color-border)] rounded">↓</kbd>
            Navigate
          </span>
          <span className="flex items-center gap-1">
            <kbd className="px-1.5 py-0.5 bg-[var(--color-surface-2)] border border-[var(--color-border)] rounded">↵</kbd>
            Open
          </span>
          <span className="ml-auto">{results.length} results</span>
        </div>
      </div>
    </div>
  );
}
