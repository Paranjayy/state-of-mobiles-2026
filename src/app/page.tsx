"use client";
import { useEffect, useRef, useState } from "react";
import { categories, tablets } from "@/data/phones";
import PhoneCard from "@/components/PhoneCard";
import TabletCard from "@/components/TabletCard";

/* ─── Intersection Observer Hook ─── */
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
      { threshold, rootMargin: "0px 0px -40px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
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
    { label: "Budget", href: "#budget" },
    { label: "Mid-Range", href: "#midrange" },
    { label: "Premium", href: "#premium" },
    { label: "Flagship", href: "#flagship" },
    { label: "Ultra", href: "#ultra" },
    { label: "Tablets", href: "#tablets" },
    { label: "Your Picks", href: "#picks" },
  ];

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 h-14 flex items-center justify-between px-5 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--color-bg)]/90 backdrop-blur-xl border-b border-[var(--color-border)]"
          : "bg-transparent"
      }`}
    >
      <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-[var(--color-accent)]">
        State of Mobiles
      </span>
      <div className="hidden md:flex items-center gap-5">
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="text-[var(--color-text-dim)] text-xs font-medium tracking-wide uppercase hover:text-[var(--color-text)] transition-colors"
          >
            {l.label}
          </a>
        ))}
      </div>
    </nav>
  );
}

/* ─── Hero ─── */
function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-5 overflow-hidden">
      {/* Glow */}
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
            Every phone worth buying in 2026 — from the cheapest 5G warriors to
            the ultra-premium flagships. No second-hand, only new. All 5G. All
            killers.
          </p>
        </Reveal>

        <Reveal delay={300}>
          <div className="flex items-center justify-center gap-10 md:gap-16">
            {[
              { num: "24", label: "Phones" },
              { num: "₹7K–2.5L", label: "Price Range" },
              { num: "6", label: "Categories" },
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
          <div className="mt-16 animate-bounce">
            <a
              href="#budget"
              className="inline-flex flex-col items-center gap-2 text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors"
            >
              <span className="text-[10px] font-mono uppercase tracking-[0.2em]">
                Scroll to explore
              </span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 5v14M19 12l-7 7-7-7" />
              </svg>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ─── Category Section ─── */
function CategorySection({
  category,
  index,
}: {
  category: (typeof categories)[0];
  index: number;
}) {
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
            Based on your specific needs and budgets — here are the phones we'd
            actually buy.
          </p>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Mom's Pick */}
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
                <strong className="text-[var(--color-text)]">Why this one:</strong>{" "}
                Stock Android means zero confusion — no bloatware, no ads, no
                weird notifications. The pOLED display is bright and easy to read
                even in sunlight. 8GB RAM ensures the phone stays smooth for 3+
                years. The 50MP OIS camera takes great family photos.
              </p>
              <div className="flex flex-wrap gap-2 pt-4 border-t border-[var(--color-border)]">
                {["6.7\" pOLED 120Hz", "Snapdragon 6s Gen 3", "5000mAh", "Stock Android", "33W charging"].map(
                  (s) => (
                    <span
                      key={s}
                      className="px-2 py-0.5 rounded text-[10px] font-mono border border-[var(--color-border)] text-[var(--color-text-dim)]"
                    >
                      {s}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </Reveal>

        {/* Cousin's Pick */}
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
                <strong className="text-[var(--color-text)]">Why this one:</strong>{" "}
                Snapdragon 8s Gen 4 under 30K is absolutely insane value. This
                chip rivals last year&apos;s flagship Snapdragon 8 Gen 3. 100W
                SUPERVOOC means full charge in ~25 minutes. LTPO AMOLED display
                is flagship-grade. OxygenOS is clean and fast. 256GB storage
                means no worrying about space.
              </p>
              <div className="flex flex-wrap gap-2 pt-4 border-t border-[var(--color-border)]">
                {["6.78\" LTPO AMOLED", "Snapdragon 8s Gen 4", "5800mAh", "100W SUPERVOOC", "256GB"].map(
                  (s) => (
                    <span
                      key={s}
                      className="px-2 py-0.5 rounded text-[10px] font-mono border border-[var(--color-border)] text-[var(--color-text-dim)]"
                    >
                      {s}
                    </span>
                  )
                )}
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

      {categories.map((cat, i) => (
        <CategorySection key={cat.id} category={cat} index={i} />
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
