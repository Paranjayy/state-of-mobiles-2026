"use client";
import { useState, useMemo } from "react";
import { phones, tablets, laptops, pcs } from "@/data/devices";

type DeviceKind = "all" | "phone" | "tablet" | "laptop" | "pc";

type SortKey =
  | "price-asc"
  | "price-desc"
  | "antutu-desc"
  | "battery-desc"
  | "charging-desc"
  | "name-asc"
  | "ram-desc"
  | "performance-desc";

type GroupKey = "none" | "category" | "brand" | "type";

type AnyDevice = {
  id: string;
  brand: string;
  name: string;
  price: number;
  priceFormatted: string;
  category: string;
  type: string;
  image: string;
  tags: string[];
  verdict: string;
  releaseDate: string;
  benchmarks: any;
  specs: any;
  pickFor?: string;
  pickLabel?: string;
};

const allDevices: (AnyDevice & { kind: DeviceKind })[] = [
  ...phones.map((p) => ({ ...p, kind: "phone" as const })),
  ...tablets.map((t) => ({ ...t, kind: "tablet" as const })),
  ...laptops.map((l) => ({ ...l, kind: "laptop" as const })),
  ...pcs.map((c) => ({ ...c, kind: "pc" as const })),
];

export default function DatabaseView() {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState<SortKey>("price-asc");
  const [groupBy, setGroupBy] = useState<GroupKey>("none");
  const [view, setView] = useState<"table" | "cards">("table");
  const [kindFilter, setKindFilter] = useState<DeviceKind>("all");
  const [priceMin, setPriceMin] = useState(0);
  const [priceMax, setPriceMax] = useState(400000);
  const [filterBrand, setFilterBrand] = useState<string>("all");

  const filtered = useMemo(() => {
    let result = allDevices.filter((d) => {
      if (kindFilter !== "all" && d.kind !== kindFilter) return false;
      if (search) {
        const q = search.toLowerCase();
        const haystack = [
          d.name,
          d.brand,
          d.specs?.processor || "",
          d.specs?.gpu || "",
          ...(d.tags || []),
          d.type,
        ]
          .join(" ")
          .toLowerCase();
        if (!haystack.includes(q)) return false;
      }
      if (d.price < priceMin || d.price > priceMax) return false;
      if (filterBrand !== "all" && d.brand !== filterBrand) return false;
      return true;
    });

    result = [...result].sort((a, b) => {
      switch (sort) {
        case "price-asc":
          return a.price - b.price;
        case "price-desc":
          return b.price - a.price;
        case "name-asc":
          return a.name.localeCompare(b.name);
        case "ram-desc":
          return (b.specs?.ram || 0) - (a.specs?.ram || 0);
        case "antutu-desc":
          return (b.benchmarks?.antutu || 0) - (a.benchmarks?.antutu || 0);
        case "battery-desc":
          return (
            (b.benchmarks?.batteryLife || 0) - (a.benchmarks?.batteryLife || 0)
          );
        case "charging-desc":
          return (
            (b.benchmarks?.chargingSpeed || 0) -
            (a.benchmarks?.chargingSpeed || 0)
          );
        case "performance-desc":
          return (
            (b.benchmarks?.antutu ||
              b.benchmarks?.pcbMark ||
              b.benchmarks?.cinebenchR23Multi ||
              0) -
            (a.benchmarks?.antutu ||
              a.benchmarks?.pcbMark ||
              a.benchmarks?.cinebenchR23Multi ||
              0)
          );
      }
    });

    return result;
  }, [search, sort, priceMin, priceMax, filterBrand, kindFilter]);

  const grouped = useMemo(() => {
    if (groupBy === "none") return { "All Devices": filtered };
    const groups: Record<string, typeof filtered> = {};
    filtered.forEach((d) => {
      let key: string;
      switch (groupBy) {
        case "category":
          key = d.category.toUpperCase();
          break;
        case "brand":
          key = d.brand;
          break;
        case "type":
          key = d.type.toUpperCase();
          break;
        default:
          key = "All";
      }
      if (!groups[key]) groups[key] = [];
      groups[key].push(d);
    });
    return groups;
  }, [filtered, groupBy]);

  const brands = Array.from(new Set(allDevices.map((d) => d.brand))).sort();

  const kindLabel = (k: DeviceKind) => {
    const map = {
      all: "All",
      phone: "Phones",
      tablet: "Tablets",
      laptop: "Laptops",
      pc: "PCs",
    };
    return map[k];
  };

  // Count by kind
  const counts = {
    all: allDevices.length,
    phone: phones.length,
    tablet: tablets.length,
    laptop: laptops.length,
    pc: pcs.length,
  };

  return (
    <div className="space-y-5">
      {/* Kind tabs */}
      <div className="flex flex-wrap gap-2">
        {(["all", "phone", "tablet", "laptop", "pc"] as DeviceKind[]).map(
          (k) => (
            <button
              key={k}
              onClick={() => setKindFilter(k)}
              className={`px-4 py-2 rounded-lg text-xs font-mono uppercase tracking-wider border transition-colors ${
                kindFilter === k
                  ? "bg-[var(--color-accent)] text-[var(--color-bg)] border-[var(--color-accent)]"
                  : "bg-[var(--color-surface)] text-[var(--color-text-dim)] border-[var(--color-border)] hover:text-[var(--color-text)]"
              }`}
            >
              {kindLabel(k)} <span className="opacity-60">· {counts[k]}</span>
            </button>
          ),
        )}
      </div>

      {/* Controls bar */}
      <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-4 md:p-5">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
          <div className="md:col-span-5">
            <label className="block text-[10px] font-mono uppercase tracking-[0.2em] text-[var(--color-text-muted)] mb-1.5">
              Search
            </label>
            <div className="relative">
              <svg
                className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)]"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
              <input
                type="text"
                placeholder="Name, brand, processor, GPU, tag…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-[var(--color-surface-2)] border border-[var(--color-border)] rounded-lg pl-10 pr-3 py-2.5 text-sm text-[var(--color-text)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent)]/50"
              />
            </div>
          </div>

          <div className="md:col-span-3">
            <label className="block text-[10px] font-mono uppercase tracking-[0.2em] text-[var(--color-text-muted)] mb-1.5">
              Sort by
            </label>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as SortKey)}
              className="w-full bg-[var(--color-surface-2)] border border-[var(--color-border)] rounded-lg px-3 py-2.5 text-sm text-[var(--color-text)] focus:outline-none focus:border-[var(--color-accent)]/50"
            >
              <option value="price-asc">Price (Low → High)</option>
              <option value="price-desc">Price (High → Low)</option>
              <option value="performance-desc">Performance (best first)</option>
              <option value="antutu-desc">AnTuTu Score</option>
              <option value="battery-desc">Battery Life</option>
              <option value="charging-desc">Charging Speed</option>
              <option value="ram-desc">RAM</option>
              <option value="name-asc">Name (A-Z)</option>
            </select>
          </div>

          <div className="md:col-span-2">
            <label className="block text-[10px] font-mono uppercase tracking-[0.2em] text-[var(--color-text-muted)] mb-1.5">
              Group by
            </label>
            <select
              value={groupBy}
              onChange={(e) => setGroupBy(e.target.value as GroupKey)}
              className="w-full bg-[var(--color-surface-2)] border border-[var(--color-border)] rounded-lg px-3 py-2.5 text-sm text-[var(--color-text)] focus:outline-none focus:border-[var(--color-accent)]/50"
            >
              <option value="none">No grouping</option>
              <option value="category">Price tier</option>
              <option value="brand">Brand</option>
              <option value="type">Type</option>
            </select>
          </div>

          <div className="md:col-span-2">
            <label className="block text-[10px] font-mono uppercase tracking-[0.2em] text-[var(--color-text-muted)] mb-1.5">
              View
            </label>
            <div className="flex gap-1 bg-[var(--color-surface-2)] border border-[var(--color-border)] rounded-lg p-1">
              {(["table", "cards"] as const).map((v) => (
                <button
                  key={v}
                  onClick={() => setView(v)}
                  className={`flex-1 px-2 py-1.5 rounded text-[10px] font-mono uppercase tracking-wider transition-colors ${
                    view === v
                      ? "bg-[var(--color-accent)] text-[var(--color-bg)]"
                      : "text-[var(--color-text-dim)] hover:text-[var(--color-text)]"
                  }`}
                >
                  {v}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 mt-3 pt-3 border-t border-[var(--color-border)]">
          <div className="md:col-span-5">
            <label className="block text-[10px] font-mono uppercase tracking-[0.2em] text-[var(--color-text-muted)] mb-1.5">
              Price: ₹{priceMin.toLocaleString()} – ₹{priceMax.toLocaleString()}
            </label>
            <div className="flex gap-2">
              <input
                type="range"
                min="0"
                max="400000"
                step="1000"
                value={priceMin}
                onChange={(e) => setPriceMin(Number(e.target.value))}
                className="flex-1 accent-[var(--color-accent)]"
              />
              <input
                type="range"
                min="0"
                max="400000"
                step="1000"
                value={priceMax}
                onChange={(e) => setPriceMax(Number(e.target.value))}
                className="flex-1 accent-[var(--color-accent)]"
              />
            </div>
          </div>

          <div className="md:col-span-4">
            <label className="block text-[10px] font-mono uppercase tracking-[0.2em] text-[var(--color-text-muted)] mb-1.5">
              Brand
            </label>
            <select
              value={filterBrand}
              onChange={(e) => setFilterBrand(e.target.value)}
              className="w-full bg-[var(--color-surface-2)] border border-[var(--color-border)] rounded-lg px-3 py-2 text-sm text-[var(--color-text)] focus:outline-none focus:border-[var(--color-accent)]/50"
            >
              <option value="all">All brands</option>
              {brands.map((b) => (
                <option key={b} value={b}>
                  {b}
                </option>
              ))}
            </select>
          </div>

          <div className="md:col-span-3 flex items-end justify-end">
            <button
              onClick={() => {
                setSearch("");
                setPriceMin(0);
                setPriceMax(400000);
                setFilterBrand("all");
                setKindFilter("all");
              }}
              className="px-3 py-2 text-[10px] font-mono uppercase tracking-wider text-[var(--color-text-dim)] hover:text-[var(--color-text)]"
            >
              Clear filters ↺
            </button>
            <div className="ml-auto text-[11px] font-mono text-[var(--color-text-muted)] pl-4">
              <span className="text-[var(--color-accent)] font-semibold">
                {filtered.length}
              </span>{" "}
              of {allDevices.length} devices
            </div>
          </div>
        </div>
      </div>

      {/* View */}
      {view === "table" && (
        <div className="space-y-5">
          {Object.entries(grouped).map(([group, items]) => (
            <div key={group}>
              {groupBy !== "none" && (
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-px flex-1 bg-[var(--color-border)]" />
                  <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
                    {group} · {items.length}
                  </span>
                  <div className="h-px flex-1 bg-[var(--color-border)]" />
                </div>
              )}
              <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-[10px] font-mono uppercase tracking-[0.15em] text-[var(--color-text-muted)] border-b border-[var(--color-border)]">
                      <th className="text-left px-4 py-3">Device</th>
                      <th className="text-left px-4 py-3 hidden md:table-cell">
                        Type
                      </th>
                      <th className="text-right px-4 py-3">Price</th>
                      <th className="text-right px-4 py-3 hidden lg:table-cell">
                        Chip
                      </th>
                      <th className="text-right px-4 py-3 hidden md:table-cell">
                        RAM
                      </th>
                      <th className="text-right px-4 py-3 hidden lg:table-cell">
                        Score
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((d, i) => {
                      const score =
                        d.benchmarks?.antutu ||
                        d.benchmarks?.pcbMark ||
                        d.benchmarks?.cinebenchR23Multi ||
                        0;
                      return (
                        <tr
                          key={d.id}
                          className={`hover:bg-[var(--color-surface-2)] transition-colors ${
                            i !== items.length - 1
                              ? "border-b border-[var(--color-border)]"
                              : ""
                          }`}
                        >
                          <td className="px-4 py-3">
                            <div className="flex items-center gap-3">
                              <img
                                src={d.image}
                                alt={d.name}
                                className="h-8 w-8 object-contain flex-shrink-0"
                                onError={(e) =>
                                  ((
                                    e.target as HTMLImageElement
                                  ).style.display = "none")
                                }
                              />
                              <div className="min-w-0">
                                <div className="text-[10px] font-mono uppercase tracking-[0.15em] text-[var(--color-text-muted)] truncate">
                                  {d.brand}
                                </div>
                                <div className="font-medium text-[var(--color-text)] truncate">
                                  {d.name}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-4 py-3 hidden md:table-cell">
                            <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--color-text-dim)] border border-[var(--color-border)] px-1.5 py-0.5 rounded">
                              {d.type}
                            </span>
                          </td>
                          <td className="px-4 py-3 text-right font-mono text-[var(--color-accent)] font-semibold">
                            {d.priceFormatted}
                          </td>
                          <td className="px-4 py-3 text-right font-mono text-[var(--color-text-dim)] hidden lg:table-cell text-[11px]">
                            {(d.specs?.processor || "")
                              .split(" ")
                              .slice(0, 3)
                              .join(" ")}
                          </td>
                          <td className="px-4 py-3 text-right font-mono text-[var(--color-text-dim)] hidden md:table-cell">
                            {d.specs?.ram || "—"}GB
                          </td>
                          <td className="px-4 py-3 text-right font-mono text-[var(--color-text)] font-semibold hidden lg:table-cell">
                            {score > 0 ? (score / 1000).toFixed(1) + "K" : "—"}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      )}

      {view === "cards" && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
          {filtered.map((d) => (
            <div
              key={d.id}
              className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-3 hover:border-[var(--color-accent)]/30 transition-colors"
            >
              <div className="aspect-square bg-[var(--color-surface-2)] rounded-lg flex items-center justify-center mb-2 overflow-hidden">
                <img
                  src={d.image}
                  alt={d.name}
                  className="h-full w-full object-contain p-2"
                  onError={(e) =>
                    ((e.target as HTMLImageElement).style.display = "none")
                  }
                />
              </div>
              <div className="text-[9px] font-mono uppercase tracking-[0.15em] text-[var(--color-text-muted)]">
                {d.brand}
              </div>
              <div className="text-xs font-semibold text-[var(--color-text)] truncate">
                {d.name}
              </div>
              <div className="flex items-center justify-between mt-1.5">
                <span className="text-[11px] font-mono text-[var(--color-accent)] font-semibold">
                  {d.priceFormatted}
                </span>
                <span className="text-[10px] font-mono text-[var(--color-text-muted)]">
                  {d.type}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {filtered.length === 0 && (
        <div className="text-center py-16 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl">
          <p className="text-[var(--color-text-dim)] text-lg">
            No devices match your filters
          </p>
          <button
            onClick={() => {
              setSearch("");
              setPriceMin(0);
              setPriceMax(400000);
              setFilterBrand("all");
            }}
            className="mt-3 text-[var(--color-accent)] font-mono text-sm underline"
          >
            Clear all filters
          </button>
        </div>
      )}
    </div>
  );
}
