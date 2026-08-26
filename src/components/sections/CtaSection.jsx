export function CtaSection() {
  return (
    <section className="bg-[var(--color-brand-dark)] py-16 md:py-24 overflow-hidden relative">
      <div className="relative max-w-[1400px] mx-auto px-5 md:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-bold text-white leading-[var(--leading-tight)] mb-6 text-[clamp(2rem,4vw,var(--text-h1))]">
              Ready when you are.<br />
              Let&apos;s VOY.
            </h2>
            <p className="text-white/80 text-[var(--text-xl)] mb-10 leading-[var(--leading-relaxed)]">
              Test your eSIM at home today — it takes less time than boarding.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#"
                className="bg-white text-[var(--color-brand)] font-semibold text-base px-8 py-3.5 rounded-[var(--radius-pill)] hover:bg-[var(--color-brand-light)] transition-colors"
              >
                Get a Plan
              </a>
              <a
                href="#"
                className="border border-white/40 text-white font-semibold text-base px-8 py-3.5 rounded-[var(--radius-pill)] hover:bg-white/10 transition-colors"
              >
                Test at Home
              </a>
            </div>
          </div>

          {/* Phone mockup — SVG inline, no emoji */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-64 md:w-72">
              <div className="bg-white/10 border border-white/20 rounded-[var(--radius-3xl)] aspect-[9/18] flex items-center justify-center shadow-[var(--shadow-strong)]">
                <svg viewBox="0 0 80 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-32 opacity-70" aria-hidden="true">
                  <rect x="2" y="2" width="76" height="156" rx="12" stroke="white" strokeWidth="3" fill="none"/>
                  <rect x="28" y="8" width="24" height="4" rx="2" fill="white" opacity="0.4"/>
                  <rect x="8" y="20" width="64" height="100" rx="4" fill="white" opacity="0.08"/>
                  <rect x="20" y="130" width="40" height="5" rx="2.5" fill="white" opacity="0.3"/>
                  <text x="40" y="75" textAnchor="middle" fill="white" fontSize="8" fontFamily="sans-serif" opacity="0.6">eSIM</text>
                  <text x="40" y="87" textAnchor="middle" fill="white" fontSize="6" fontFamily="sans-serif" opacity="0.4">Active</text>
                </svg>
              </div>
              <div className="absolute -inset-4 bg-[var(--color-brand)]/20 rounded-[var(--radius-3xl)] blur-2xl -z-10" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
