"use client";
import { useEffect, useRef, useState } from "react";
import { categories, tablets } from "@/data/phones";
import PhoneCard from "@/components/PhoneCard";
import TabletCard from "@/components/TabletCard";
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
    { label: "Benchmarks", href: "#benchmarks" },
    { label: "Compare", href: "#compare" },
    { label: "Budget", href: "#budget" },
    { label: "Mid", href: "#midrange" },
    { label: "Premium", href: "#premium" },
    { label: "Flagship", href: "#flagship" },
    { label: "Ultra", href: "#ultra" },
    { label: "Tablets", href: "#tablets" },
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
        State of Mobiles
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
          <h1 className="font-display text-[clamp(3rem,10vw,8rem)] font-extralight leading-[0.92] tracking-tight mb-6">
            State of{" "}
            <span className="italic text-[var(--color-accent)]">Mobiles</span>
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <p className="text-[var(--color-text-dim)] text-lg max-w-xl mx-auto font-light leading-relaxed mb-10">
            Every phone worth buying in 2026. Search, filter, compare, and
            benchmark — the complete guide from ₹7K to ₹2.5L. All 5G. All new.
          </p>
        </Reveal>

        <Reveal delay={300}>
          <div className="flex items-center justify-center gap-10 md:gap-16 mb-12">
            {[
              { num: "24", label: "Phones" },
              { num: "₹7K–2.5L", label: "Price Range" },
              { num: "6", label: "Categories" },
              { num: "100%", label: "5G" },
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
            Explore Database
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

/* ─── Category Section ─── */
function CategorySection({ category }: { category: (typeof categories)[0] }) {
  return (
    <section id={category.id} className="py-16 md:py-24 px-5 max-w-7xl mx-auto">
      <Reveal>
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-6 bg-[var(--color-accent)]" />
            <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-[var(--color-accent)]">
              {category.tag}
            </span>
          </div>
          <h2 className="font-display text-[clamp(2rem,5vw,4rem)] font-light leading-[1.05] tracking-tight">
            {category.title}
            <span className="italic text-[var(--color-accent)]">
              {category.titleHighlight}
            </span>
          </h2>
          <p className="text-[var(--color-text-dim)] text-base max-w-xl mt-4 font-light leading-relaxed">
            {category.description}
          </p>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {category.phones.map((phone, i) => (
          <Reveal key={phone.id} delay={i * 80}>
            <PhoneCard phone={phone} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ─── Personal Picks ─── */
function PersonalPicks() {
  return (
    <section id="picks" className="py-16 md:py-24 px-5 max-w-7xl mx-auto">
      <Reveal>
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-6 bg-[var(--color-accent)]" />
            <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-[var(--color-accent)]">
              Personal Recommendations
            </span>
          </div>
          <h2 className="font-display text-[clamp(2rem,5vw,4rem)] font-light leading-[1.05] tracking-tight">
            Your{" "}
            <span className="italic text-[var(--color-accent)]">Picks</span>
          </h2>
          <p className="text-[var(--color-text-dim)] text-base max-w-xl mt-4 font-light">
            Based on your specific needs and budgets.
          </p>
        </div>
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
                Stock Android means zero confusion — no bloatware, no ads. The
                pOLED display is bright and easy to read. 8GB RAM ensures the
                phone stays smooth for 3+ years. 50MP OIS camera takes great
                family photos.
              </p>
              <div className="flex flex-wrap gap-2 pt-4 border-t border-[var(--color-border)]">
                {[
                  '6.7" pOLED 120Hz',
                  "Snapdragon 6s Gen 3",
                  "5000mAh",
                  "Stock Android",
                  "33W charging",
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
                Snapdragon 8s Gen 4 under 30K is absolutely insane value. 100W
                SUPERVOOC means full charge in ~25 minutes. LTPO AMOLED display
                is flagship-grade. OxygenOS is clean and fast. 256GB storage
                means no worrying about space.
              </p>
              <div className="flex flex-wrap gap-2 pt-4 border-t border-[var(--color-border)]">
                {[
                  '6.78" LTPO AMOLED',
                  "Snapdragon 8s Gen 4",
                  "5800mAh",
                  "100W SUPERVOOC",
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
        State of Mobiles
      </p>
      <p className="font-mono text-[11px] tracking-[0.1em] text-[var(--color-text-muted)]">
        July 2026 · All prices are India MRP · All phones are new with 5G
      </p>
      <p className="font-mono text-[10px] text-[var(--color-text-muted)]/50 mt-2">
        Prices may vary. Check Flipkart / Amazon / Official stores for latest
        pricing.
      </p>
    </footer>
  );
}

/* ─── Main Page ─── */
export default function Home() {
  return (
    <div className="min-h-screen">
      <Nav />
      <Hero />

      {/* Database / Search & Filter */}
      <section id="database" className="py-16 md:py-24 px-5 max-w-7xl mx-auto">
        <Reveal>
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-6 bg-[var(--color-accent)]" />
              <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-[var(--color-accent)]">
                The Database
              </span>
            </div>
            <h2 className="font-display text-[clamp(2rem,5vw,4rem)] font-light leading-[1.05] tracking-tight">
              Search, sort,{" "}
              <span className="italic text-[var(--color-accent)]">filter</span>
            </h2>
            <p className="text-[var(--color-text-dim)] text-base max-w-xl mt-4 font-light">
              Every phone in the database, queryable. Like a Notion table for
              mobile phones.
            </p>
          </div>
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
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-6 bg-[var(--color-accent)]" />
              <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-[var(--color-accent)]">
                Real Benchmarks
              </span>
            </div>
            <h2 className="font-display text-[clamp(2rem,5vw,4rem)] font-light leading-[1.05] tracking-tight">
              The{" "}
              <span className="italic text-[var(--color-accent)]">numbers</span>
            </h2>
            <p className="text-[var(--color-text-dim)] text-base max-w-xl mt-4 font-light">
              AnTuTu scores, Geekbench performance, battery capacity, charging
              speed — actual numbers, no marketing fluff.
            </p>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <BenchmarkChart />
        </Reveal>
      </section>

      {/* Comparator */}
      <section id="compare" className="py-16 md:py-24 px-5 max-w-7xl mx-auto">
        <Reveal>
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-6 bg-[var(--color-accent)]" />
              <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-[var(--color-accent)]">
                Head-to-Head
              </span>
            </div>
            <h2 className="font-display text-[clamp(2rem,5vw,4rem)] font-light leading-[1.05] tracking-tight">
              Side by{" "}
              <span className="italic text-[var(--color-accent)]">side</span>
            </h2>
            <p className="text-[var(--color-text-dim)] text-base max-w-xl mt-4 font-light">
              Pick any two phones. See how they stack up across every dimension
              that matters.
            </p>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <Comparator />
        </Reveal>
      </section>

      {/* Categories */}
      {categories.map((cat) => (
        <CategorySection key={cat.id} category={cat} />
      ))}

      {/* Tablets */}
      <section id="tablets" className="py-16 md:py-24 px-5 max-w-7xl mx-auto">
        <Reveal>
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-6 bg-[var(--color-accent)]" />
              <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-[var(--color-accent)]">
                Tablets & iPads
              </span>
            </div>
            <h2 className="font-display text-[clamp(2rem,5vw,4rem)] font-light leading-[1.05] tracking-tight">
              Beyond{" "}
              <span className="italic text-[var(--color-accent)]">Phones</span>
            </h2>
            <p className="text-[var(--color-text-dim)] text-base max-w-xl mt-4 font-light">
              The tablet renaissance continues. From budget Android tablets to
              the iPad Pro M4.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {tablets.map((t, i) => (
            <Reveal key={t.id} delay={i * 80}>
              <TabletCard tablet={t} />
            </Reveal>
          ))}
        </div>
      </section>

      <PersonalPicks />
      <Footer />
    </div>
  );
}
