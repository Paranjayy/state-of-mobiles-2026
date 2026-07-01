"use client";
import { useState, useMemo } from "react";
import { allPhones, type Phone } from "@/data/phones";

type SortKey =
  | "price-asc"
  | "price-desc"
  | "antutu-desc"
  | "battery-desc"
  | "charging-desc"
  | "name-asc"
  | "ram-desc";

type GroupKey = "none" | "category" | "brand" | "processor" | "displayType";

export default function DatabaseView() {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState<SortKey>("price-asc");
  const [groupBy, setGroupBy] = useState<GroupKey>("none");
  const [view, setView] = useState<"table" | "cards" | "compare">("table");
  const [priceMin, setPriceMin] = useState(0);
  const [priceMax, setPriceMax] = useState(250000);
  const [filterBrand, setFilterBrand] = useState<string>("all");
  const [filterOIS, setFilterOIS] = useState(false);

  const filtered = useMemo(() => {
    let result = allPhones.filter((p) => {
      if (search) {
        const q = search.toLowerCase();
        if (
          !p.name.toLowerCase().includes(q) &&
          !p.brand.toLowerCase().includes(q) &&
          !p.specs.processor.toLowerCase().includes(q) &&
          !p.tags.some((t) => t.toLowerCase().includes(q))
        ) {
          return false;
        }
      }
      if (p.price < priceMin || p.price > priceMax) return false;
      if (filterBrand !== "all" && p.brand !== filterBrand) return false;
      if (filterOIS && !p.specs.cameraOIS) return false;
      return true;
    });

    result = [...result].sort((a, b) => {
      switch (sort) {
        case "price-asc":
          return a.price - b.price;
        case "price-desc":
          return b.price - a.price;
        case "antutu-desc":
          return b.benchmarks.antutu - a.benchmarks.antutu;
        case "battery-desc":
          return b.specs.batteryMah - a.specs.batteryMah;
        case "charging-desc":
          return b.benchmarks.chargingSpeed - a.benchmarks.chargingSpeed;
        case "name-asc":
          return a.name.localeCompare(b.name);
        case "ram-desc":
          return b.specs.ram - a.specs.ram;
      }
    });

    return result;
  }, [search, sort, priceMin, priceMax, filterBrand, filterOIS]);

  const grouped = useMemo(() => {
    if (groupBy === "none") return { "All Phones": filtered };
    const groups: Record<string, Phone[]> = {};
    filtered.forEach((p) => {
      let key: string;
      switch (groupBy) {
        case "category":
          key = p.category.toUpperCase();
          break;
        case "brand":
          key = p.brand;
          break;
        case "processor":
          key = p.specs.processorCategory.toUpperCase();
          break;
        case "displayType":
          key = p.specs.displayType;
          break;
        default:
          key = "All";
      }
      if (!groups[key]) groups[key] = [];
      groups[key].push(p);
    });
    return groups;
  }, [filtered, groupBy]);

  const brands = Array.from(new Set(allPhones.map((p) => p.brand))).sort();

  return (
    <div className="space-y-6">
      {/* Controls bar */}
      <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-4 md:p-5">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
          {/* Search */}
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
                placeholder="Name, brand, processor, tag…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-[var(--color-surface-2)] border border-[var(--color-border)] rounded-lg pl-10 pr-3 py-2.5 text-sm text-[var(--color-text)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent)]/50"
              />
            </div>
          </div>

          {/* Sort */}
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
              <option value="antutu-desc">AnTuTu Score</option>
              <option value="battery-desc">Battery Capacity</option>
              <option value="charging-desc">Charging Speed</option>
              <option value="ram-desc">RAM</option>
              <option value="name-asc">Name (A-Z)</option>
            </select>
          </div>

          {/* Group by */}
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
              <option value="category">Category</option>
              <option value="brand">Brand</option>
              <option value="processor">Chip tier</option>
              <option value="displayType">Display type</option>
            </select>
          </div>

          {/* View toggle */}
          <div className="md:col-span-2">
            <label className="block text-[10px] font-mono uppercase tracking-[0.2em] text-[var(--color-text-muted)] mb-1.5">
              View
            </label>
            <div className="flex gap-1 bg-[var(--color-surface-2)] border border-[var(--color-border)] rounded-lg p-1">
              {(["table", "cards", "compare"] as const).map((v) => (
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

        {/* Advanced filters row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 mt-3 pt-3 border-t border-[var(--color-border)]">
          <div className="md:col-span-4">
            <label className="block text-[10px] font-mono uppercase tracking-[0.2em] text-[var(--color-text-muted)] mb-1.5">
              Price: ₹{priceMin.toLocaleString()} – ₹{priceMax.toLocaleString()}
            </label>
            <div className="flex gap-2">
              <input
                type="range"
                min="0"
                max="250000"
                step="1000"
                value={priceMin}
                onChange={(e) => setPriceMin(Number(e.target.value))}
                className="flex-1 accent-[var(--color-accent)]"
              />
              <input
                type="range"
                min="0"
                max="250000"
                step="1000"
                value={priceMax}
                onChange={(e) => setPriceMax(Number(e.target.value))}
                className="flex-1 accent-[var(--color-accent)]"
              />
            </div>
          </div>

          <div className="md:col-span-3">
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

          <div className="md:col-span-3 flex items-end">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={filterOIS}
                onChange={(e) => setFilterOIS(e.target.checked)}
                className="accent-[var(--color-accent)]"
              />
              <span className="text-sm text-[var(--color-text-dim)]">
                OIS only (stabilized camera)
              </span>
            </label>
          </div>

          <div className="md:col-span-2 flex items-end justify-end">
            <div className="text-[11px] font-mono text-[var(--color-text-muted)]">
              <span className="text-[var(--color-accent)] font-semibold">
                {filtered.length}
              </span>{" "}
              of {allPhones.length} phones
            </div>
          </div>
        </div>
      </div>

      {/* View render */}
      {view === "table" && (
        <div className="space-y-6">
          {Object.entries(grouped).map(([group, phones]) => (
            <div key={group}>
              {groupBy !== "none" && (
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-px flex-1 bg-[var(--color-border)]" />
                  <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
                    {group} · {phones.length}
                  </span>
                  <div className="h-px flex-1 bg-[var(--color-border)]" />
                </div>
              )}
              <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl overflow-hidden overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-[10px] font-mono uppercase tracking-[0.15em] text-[var(--color-text-muted)] border-b border-[var(--color-border)]">
                      <th className="text-left px-4 py-3">Phone</th>
                      <th className="text-right px-4 py-3">Price</th>
                      <th className="text-right px-4 py-3">AnTuTu</th>
                      <th className="text-right px-4 py-3">Battery</th>
                      <th className="text-right px-4 py-3 hidden md:table-cell">
                        Charging
                      </th>
                      <th className="text-right px-4 py-3 hidden md:table-cell">
                        RAM
                      </th>
                      <th className="text-right px-4 py-3 hidden lg:table-cell">
                        Camera
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {phones.map((p, i) => (
                      <tr
                        key={p.id}
                        className={`hover:bg-[var(--color-surface-2)] transition-colors ${
                          i !== phones.length - 1
                            ? "border-b border-[var(--color-border)]"
                            : ""
                        }`}
                      >
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-3">
                            <img
                              src={p.image}
                              alt={p.name}
                              className="h-8 w-8 object-contain"
                              onError={(e) =>
                                ((e.target as HTMLImageElement).style.display = "none")
                              }
                            />
                            <div>
                              <div className="text-[10px] font-mono uppercase tracking-[0.15em] text-[var(--color-text-muted)]">
                                {p.brand}
                              </div>
                              <div className="font-medium text-[var(--color-text)]">
                                {p.name}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-3 text-right font-mono text-[var(--color-accent)]">
                          {p.priceFormatted}
                        </td>
                        <td className="px-4 py-3 text-right font-mono text-[var(--color-text-dim)]">
                          {(p.benchmarks.antutu / 1000).toFixed(0)}K
                        </td>
                        <td className="px-4 py-3 text-right font-mono text-[var(--color-text-dim)]">
                          {p.specs.batteryMah.toLocaleString()}
                        </td>
                        <td className="px-4 py-3 text-right font-mono text-[var(--color-text-dim)] hidden md:table-cell">
                          {p.benchmarks.chargingSpeed}W
                        </td>
                        <td className="px-4 py-3 text-right font-mono text-[var(--color-text-dim)] hidden md:table-cell">
                          {p.specs.ram}GB
                        </td>
                        <td className="px-4 py-3 text-right font-mono text-[var(--color-text-dim)] hidden lg:table-cell">
                          {p.specs.cameraMain}MP
                          {p.specs.cameraOIS && (
                            <span className="ml-1 text-[var(--color-accent)]">
                              •OIS
                            </span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      )}

      {view === "cards" && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {filtered.map((p) => (
            <div
              key={p.id}
              className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-3 hover:border-[var(--color-accent)]/30 transition-colors"
            >
              <div className="aspect-square bg-[var(--color-surface-2)] rounded-lg flex items-center justify-center mb-2 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.name}
                  className="h-full w-full object-contain p-2"
                  onError={(e) =>
                    ((e.target as HTMLImageElement).style.display = "none")
                  }
                />
              </div>
              <div className="text-[9px] font-mono uppercase tracking-[0.15em] text-[var(--color-text-muted)]">
                {p.brand}
              </div>
              <div className="text-xs font-semibold text-[var(--color-text)] truncate">
                {p.name}
              </div>
              <div className="flex items-center justify-between mt-1.5">
                <span className="text-[11px] font-mono text-[var(--color-accent)] font-semibold">
                  {p.priceFormatted}
                </span>
                <span className="text-[10px] font-mono text-[var(--color-text-muted)]">
                  {(p.benchmarks.antutu / 1000).toFixed(0)}K
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {view === "compare" && (
        <div className="text-center py-12 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl">
          <p className="text-[var(--color-text-dim)] mb-2">
            Use the dedicated comparator below for detailed side-by-side
            comparisons
          </p>
          <a
            href="#compare"
            className="inline-block mt-2 px-4 py-2 bg-[var(--color-accent)] text-[var(--color-bg)] rounded-lg font-mono text-sm font-semibold"
          >
            Open Comparator ↓
          </a>
        </div>
      )}

      {filtered.length === 0 && (
        <div className="text-center py-16 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl">
          <p className="text-[var(--color-text-dim)] text-lg">No phones match your filters</p>
          <button
            onClick={() => {
              setSearch("");
              setPriceMin(0);
              setPriceMax(250000);
              setFilterBrand("all");
              setFilterOIS(false);
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
