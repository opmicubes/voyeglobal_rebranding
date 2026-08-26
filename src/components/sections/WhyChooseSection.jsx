import Image from 'next/image';

export function WhyChooseSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-[1400px] mx-auto px-5 md:px-20">
        {/* Eyebrow label only — no H2 */}
        <p className="text-[#e3ceda] text-sm font-semibold uppercase tracking-widest mb-10 text-center">
          WHY CHOOSE VOY GLOBAL&apos;S ESIM
        </p>

        {/* 2×2 grid — 4 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">

          {/* Card 1 — Affordable Rates (price display card) */}
          <div className="bg-[var(--color-surface)] rounded-[var(--radius-xl)] p-8 flex flex-col justify-between min-h-[280px]">
            <div>
              <h3 className="text-[var(--color-text-dark)] font-semibold text-[var(--text-h5)] mb-3">
                Affordable Rates
              </h3>
              <p className="text-[var(--color-text-secondary)] text-sm leading-[var(--leading-relaxed)] mb-6">
                Get the best value eSIM plans starting from just $2.99. No hidden fees, no surprises.
              </p>
            </div>
            {/* Price highlight */}
            <div className="flex items-end gap-4">
              <div className="bg-white rounded-[var(--radius-lg)] shadow-[var(--shadow-subtle)] px-5 py-4 flex items-center gap-3">
                <span className="text-2xl" aria-hidden="true">🇯🇵</span>
                <div>
                  <p className="text-xs text-[var(--color-text-muted)] mb-0.5">Japan</p>
                  <p className="text-[var(--text-h4)] font-bold text-[var(--color-brand)]">$2.99</p>
                </div>
              </div>
              <div className="bg-white rounded-[var(--radius-lg)] shadow-[var(--shadow-subtle)] px-4 py-3 opacity-60">
                <p className="text-sm text-[var(--color-text-muted)] line-through">$4.99</p>
                <p className="text-xs text-[var(--color-text-muted)]">others</p>
              </div>
            </div>
          </div>

          {/* Card 2 — Instant Connectivity (photo card) */}
          <div className="rounded-[var(--radius-xl)] overflow-hidden relative min-h-[280px]">
            <Image
              src="/home/choose1.png"
              alt="Instant connectivity with Voye eSIM"
              fill
              sizes="(max-width: 640px) 100vw, 50vw"
              className="object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-brand-dark)]/80 to-transparent" />
            <div className="absolute bottom-0 start-0 p-6">
              <h3 className="text-white font-semibold text-[var(--text-h5)]">Instant Connectivity</h3>
              <p className="text-white/80 text-sm mt-1">Activate on arrival, go online in minutes.</p>
            </div>
          </div>

          {/* Card 3 — Global Coverage (photo card) */}
          <div className="rounded-[var(--radius-xl)] overflow-hidden relative min-h-[280px]">
            <Image
              src="/home/choose2.png"
              alt="Global coverage across 130+ countries"
              fill
              sizes="(max-width: 640px) 100vw, 50vw"
              className="object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-brand-dark)]/80 to-transparent" />
            <div className="absolute bottom-0 start-0 p-6">
              <h3 className="text-white font-semibold text-[var(--text-h5)]">Global Coverage</h3>
              <p className="text-white/80 text-sm mt-1">Stay connected across 130+ countries.</p>
            </div>
          </div>

          {/* Card 4 — 24/7 Support (photo card) */}
          <div className="rounded-[var(--radius-xl)] overflow-hidden relative min-h-[280px]">
            <Image
              src="/home/choose3.png"
              alt="24/7 support in 40 languages"
              fill
              sizes="(max-width: 640px) 100vw, 50vw"
              className="object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-brand-dark)]/80 to-transparent" />
            <div className="absolute bottom-0 start-0 p-6">
              <h3 className="text-white font-semibold text-[var(--text-h5)]">24/7 Support in 40 Languages</h3>
              <p className="text-white/80 text-sm mt-1">Real help, any time, in your language.</p>
            </div>
          </div>
        </div>

        {/* Bottom banner */}
        <div className="relative rounded-[var(--radius-2xl)] overflow-hidden h-56 md:h-72">
          <Image
            src="/home/sec3.png"
            alt="Travelers around the world connected with Voye Global"
            fill
            sizes="100vw"
            className="object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
