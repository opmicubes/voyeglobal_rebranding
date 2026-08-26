import Image from 'next/image';
import Link from 'next/link';

const stats = [
  { value: '200,000+', label: 'Travelers Worldwide' },
  { value: '130+', label: 'Countries Covered' },
  { value: '4.8★', label: 'Average Rating' },
  { value: '24/7', label: 'Customer Support' },
];

export function TrustedSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-[1400px] mx-auto px-5 md:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: image grid — 2 images stacked */}
          <div className="grid grid-cols-2 gap-4 h-[400px] md:h-[480px]">
            <div className="relative rounded-[var(--radius-xl)] overflow-hidden row-span-2">
              <Image
                src="/home/view1.png"
                alt="Happy traveler using Voye eSIM"
                fill
                className="object-cover"
                loading="lazy"
              />
            </div>
            <div className="relative rounded-[var(--radius-xl)] overflow-hidden">
              <Image
                src="/home/view2.svg"
                alt="Traveler exploring with Voye connectivity"
                fill
                className="object-cover"
                loading="lazy"
              />
            </div>
            {/* Third cell — stat card */}
            <div className="rounded-[var(--radius-xl)] bg-[var(--color-surface-blue)] flex flex-col items-center justify-center gap-2 p-4">
              <span className="text-[var(--color-brand)] font-bold text-4xl">4.8★</span>
              <span className="text-[var(--color-text-secondary)] text-sm text-center">App Store Rating</span>
            </div>
          </div>

          {/* Right: text + stats */}
          <div>
            <p className="text-[var(--color-accent)] text-sm font-semibold uppercase tracking-widest mb-3">
              MORE ABOUT VOY
            </p>
            <h2 className="font-bold text-[var(--color-text-dark)] leading-[var(--leading-tight)] mb-4 text-[var(--text-h2)]">
              Trusted by{' '}
              <span className="text-[var(--color-brand)]">200,000+ Travelers</span>{' '}
              Worldwide
            </h2>
            <p className="text-[var(--text-xl)] text-[var(--color-text-primary)] mb-10 leading-[var(--leading-relaxed)]">
              Hassle-free eSIM service with global coverage, competitive rates, and dedicated support.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-10">
              {stats.map((s) => (
                <div key={s.label} className="bg-[var(--color-surface)] rounded-[var(--radius-lg)] p-5">
                  <p className="font-bold text-[var(--color-brand)] text-[var(--text-h3)]">
                    {s.value}
                  </p>
                  <p className="text-sm text-[var(--color-text-secondary)] mt-1">{s.label}</p>
                </div>
              ))}
            </div>

            <Link href="#" className="inline-block bg-[var(--color-brand)] text-white font-semibold text-base px-8 py-3.5 rounded-[var(--radius-pill)] hover:bg-[var(--color-brand-dark)] transition-colors shadow-[var(--shadow-brand)]">
              Purchase Your eSIM
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
