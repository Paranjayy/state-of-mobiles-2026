"use client";
import { useEffect, useRef, useState } from "react";
import { phones, tablets, laptops, pcs } from "@/data/devices";
import DeviceCard from "@/components/DeviceCard";
import Comparator from "@/components/Comparator";
import DatabaseView from "@/components/DatabaseView";
import BenchmarkChart from "@/components/BenchmarkChart";

/* ─── Reveal Hook ─── */
function useReveal(threshold = 0.08) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -40px 0px" },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, visible } = useReveal();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(28px)",
        transition: `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

/* ─── Navigation ─── */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  const links = [
    { label: "Database", href: "#database" },
    { label: "Bench", href: "#benchmarks" },
    { label: "Compare", href: "#compare" },
    { label: "Phones", href: "#phones" },
    { label: "Tablets", href: "#tablets" },
    { label: "Laptops", href: "#laptops" },
    { label: "PCs", href: "#pcs" },
    { label: "Picks", href: "#picks" },
  ];

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 h-14 flex items-center justify-between px-5 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--color-bg)]/90 backdrop-blur-xl border-b border-[var(--color-border)]"
          : "bg-transparent"
      }`}
    >
      <a
        href="#"
        className="font-mono text-[11px] tracking-[0.2em] uppercase text-[var(--color-accent)]"
      >
        State of Devices
      </a>
      <div className="hidden xl:flex items-center gap-4">
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="text-[var(--color-text-dim)] text-[10px] font-medium tracking-wide uppercase hover:text-[var(--color-text)] transition-colors"
          >
            {l.label}
          </a>
        ))}
      </div>
      <a
        href="#database"
        className="md:hidden text-[10px] font-mono uppercase tracking-wider text-[var(--color-accent)]"
      >
        Search ↓
      </a>
    </nav>
  );
}

/* ─── Hero ─── */
function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-5 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[var(--color-accent)]/[0.02] blur-[120px]" />
      </div>

      <div className="relative z-10">
        <Reveal>
          <div className="inline-flex items-center gap-3 mb-8">
            <div className="h-px w-8 bg-[var(--color-accent)]/40" />
            <span className="font-mono text-[11px] tracking-[0.3em] uppercase text-[var(--color-accent)]">
              July 2026 Edition
            </span>
            <div className="h-px w-8 bg-[var(--color-accent)]/40" />
          </div>
        </Reveal>

        <Reveal delay={100}>
          <h1 className="font-display text-[clamp(2.5rem,9vw,7.5rem)] font-extralight leading-[0.92] tracking-tight mb-6">
            State of{" "}
            <span className="italic text-[var(--color-accent)]">Devices</span>
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <p className="text-[var(--color-text-dim)] text-lg max-w-2xl mx-auto font-light leading-relaxed mb-10">
            Every phone, tablet, laptop, and PC worth buying in 2026. Search,
            filter, compare, benchmark — from ₹7K to ₹4L.
          </p>
        </Reveal>

        <Reveal delay={300}>
          <div className="flex items-center justify-center gap-6 md:gap-12 mb-12 flex-wrap">
            {[
              { num: phones.length.toString(), label: "Phones" },
              { num: tablets.length.toString(), label: "Tablets" },
              { num: laptops.length.toString(), label: "Laptops" },
              { num: pcs.length.toString(), label: "PCs" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-mono text-2xl md:text-3xl font-medium text-[var(--color-accent)]">
                  {s.num}
                </div>
                <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-[var(--color-text-muted)] mt-1">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={400}>
          <a
            href="#database"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-accent)] text-[var(--color-bg)] rounded-full font-mono text-sm font-semibold hover:scale-105 transition-transform"
          >
            Open Database
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </Reveal>
      </div>
    </section>
  );
}

/* ─── Section Header ─── */
function SectionHeader({
  tag,
  title,
  highlight,
  description,
}: {
  tag: string;
  title: string;
  highlight: string;
  description: string;
}) {
  return (
    <div className="mb-10">
      <div className="flex items-center gap-3 mb-4">
        <div className="h-px w-6 bg-[var(--color-accent)]" />
        <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-[var(--color-accent)]">
          {tag}
        </span>
      </div>
      <h2 className="font-display text-[clamp(2rem,5vw,4rem)] font-light leading-[1.05] tracking-tight">
        {title}
        <span className="italic text-[var(--color-accent)]">{highlight}</span>
      </h2>
      <p className="text-[var(--color-text-dim)] text-base max-w-xl mt-4 font-light leading-relaxed">
        {description}
      </p>
    </div>
  );
}

/* ─── Personal Picks ─── */
function PersonalPicks() {
  return (
    <section id="picks" className="py-16 md:py-24 px-5 max-w-7xl mx-auto">
      <Reveal>
        <SectionHeader
          tag="Personal Recommendations"
          title="Your "
          highlight="Picks"
          description="Based on your specific needs and budgets."
        />
      </Reveal>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Reveal delay={0}>
          <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-6 md:p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-[var(--color-pink)]/[0.03] rounded-full blur-[80px]" />
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-pink)]/10 border border-[var(--color-pink)]/20 text-[var(--color-pink)] text-[11px] font-mono tracking-wider mb-4">
                ♥ For Mom — Under ₹15,000
              </div>
              <h3 className="font-display text-3xl font-light italic mb-1">
                Motorola Moto G36 5G
              </h3>
              <p className="font-mono text-sm text-[var(--color-accent)] mb-4">
                ₹12,999 · 8GB / 128GB
              </p>
              <p className="text-[var(--color-text-dim)] text-sm leading-relaxed mb-4">
                <strong className="text-[var(--color-text)]">
                  Why this one:
                </strong>{" "}
                Stock Android means zero confusion. pOLED display is bright. 8GB
                RAM stays smooth for 3+ years. OIS camera for family photos.
              </p>
              <div className="flex flex-wrap gap-2 pt-4 border-t border-[var(--color-border)]">
                {[
                  "pOLED 120Hz",
                  "Snapdragon 6s Gen 3",
                  "5000mAh",
                  "Stock Android",
                  "33W",
                ].map((s) => (
                  <span
                    key={s}
                    className="px-2 py-0.5 rounded text-[10px] font-mono border border-[var(--color-border)] text-[var(--color-text-dim)]"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-6 md:p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-[var(--color-blue)]/[0.03] rounded-full blur-[80px]" />
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-blue)]/10 border border-[var(--color-blue)]/20 text-[var(--color-blue)] text-[11px] font-mono tracking-wider mb-4">
                ★ For Cousin — Under ₹38,000
              </div>
              <h3 className="font-display text-3xl font-light italic mb-1">
                OnePlus N6 5G
              </h3>
              <p className="font-mono text-sm text-[var(--color-accent)] mb-4">
                ₹29,999 · 8GB / 256GB
              </p>
              <p className="text-[var(--color-text-dim)] text-sm leading-relaxed mb-4">
                <strong className="text-[var(--color-text)]">
                  Why this one:
                </strong>{" "}
                Snapdragon 8s Gen 4 under 30K. 100W SUPERVOOC full in 25 mins.
                LTPO AMOLED, 256GB, clean OxygenOS.
              </p>
              <div className="flex flex-wrap gap-2 pt-4 border-t border-[var(--color-border)]">
                {[
                  "LTPO AMOLED",
                  "Snapdragon 8s Gen 4",
                  "5800mAh",
                  "100W",
                  "256GB",
                ].map((s) => (
                  <span
                    key={s}
                    className="px-2 py-0.5 rounded text-[10px] font-mono border border-[var(--color-border)] text-[var(--color-text-dim)]"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ─── Footer ─── */
function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] py-12 px-5 text-center">
      <p className="font-display text-2xl italic text-[var(--color-text)] mb-3">
        State of Devices
      </p>
      <p className="font-mono text-[11px] tracking-[0.1em] text-[var(--color-text-muted)]">
        July 2026 · All prices are India MRP · Phones are 5G · Built with ♥
      </p>
      <p className="font-mono text-[10px] text-[var(--color-text-muted)]/50 mt-2">
        Prices may vary. Check Flipkart / Amazon / Official stores for latest
        pricing.
      </p>
    </footer>
  );
}

/* ─── Device Section ─── */
function DeviceSection({
  id,
  tag,
  title,
  highlight,
  description,
  devices,
  gridCols = "grid-cols-1 md:grid-cols-2",
}: {
  id: string;
  tag: string;
  title: string;
  highlight: string;
  description: string;
  devices: any[];
  gridCols?: string;
}) {
  return (
    <section id={id} className="py-16 md:py-24 px-5 max-w-7xl mx-auto">
      <Reveal>
        <SectionHeader
          tag={tag}
          title={title}
          highlight={highlight}
          description={description}
        />
      </Reveal>

      <div className={`grid ${gridCols} gap-5`}>
        {devices.map((d, i) => (
          <Reveal key={d.id} delay={i * 60}>
            <DeviceCard device={d} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ─── Main Page ─── */
export default function Home() {
  return (
    <div className="min-h-screen">
      <Nav />
      <Hero />

      {/* Database */}
      <section id="database" className="py-16 md:py-24 px-5 max-w-7xl mx-auto">
        <Reveal>
          <SectionHeader
            tag="The Database"
            title="Search, sort, "
            highlight="filter"
            description="Every device in the database, queryable. Cross-category search across phones, tablets, laptops, and PCs."
          />
        </Reveal>
        <Reveal delay={100}>
          <DatabaseView />
        </Reveal>
      </section>

      {/* Benchmarks */}
      <section
        id="benchmarks"
        className="py-16 md:py-24 px-5 max-w-7xl mx-auto"
      >
        <Reveal>
          <SectionHeader
            tag="Real Benchmarks"
            title="The "
            highlight="numbers"
            description="AnTuTu, Geekbench, PCMark, Cinebench — actual performance numbers, no marketing fluff."
          />
        </Reveal>
        <Reveal delay={100}>
          <BenchmarkChart />
        </Reveal>
      </section>

      {/* Comparator */}
      <section id="compare" className="py-16 md:py-24 px-5 max-w-7xl mx-auto">
        <Reveal>
          <SectionHeader
            tag="Head-to-Head"
            title="Side by "
            highlight="side"
            description="Pick any two devices. See how they stack up across every dimension that matters."
          />
        </Reveal>
        <Reveal delay={100}>
          <Comparator />
        </Reveal>
      </section>

      {/* Phones by tier */}
      <DeviceSection
        id="phones"
        tag="Phones"
        title="Every "
        highlight="Phone"
        description={`${phones.length} phones from budget to ultra, sorted cheapest to most expensive. All 5G. All new.`}
        devices={phones}
      />

      {/* Tablets */}
      <DeviceSection
        id="tablets"
        tag="Tablets & iPads"
        title="Beyond "
        highlight="Phones"
        description={`${tablets.length} tablets — Android, iPad, every size. From budget media slates to creator powerhouses.`}
        devices={tablets}
        gridCols="grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      />

      {/* Laptops */}
      <DeviceSection
        id="laptops"
        tag="Laptops"
        title="Lap up the "
        highlight="Power"
        description={`${laptops.length} laptops — budget ultrabooks, gaming beasts, MacBooks, and creator workstations.`}
        devices={laptops}
        gridCols="grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      />

      {/* PCs */}
      <DeviceSection
        id="pcs"
        tag="Desktops & Workstations"
        title="The Big "
        highlight="Rigs"
        description={`${pcs.length} desktops — Mac mini, mini PCs, gaming towers, creator workstations, and full powerhouses.`}
        devices={pcs}
        gridCols="grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      />

      <PersonalPicks />
      <Footer />
    </div>
  );
}
