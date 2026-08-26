'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { LuChevronLeft, LuChevronRight } from 'react-icons/lu';

const slides = [
  {
    id: 1,
    bg: 'from-[var(--color-brand-dark)] to-[#033a6b]',
    eyebrow: 'Ready when you are.',
    title: "Let's VOY.",
    description: 'Test your eSIM at home today — it takes less time than boarding.',
    ctaPrimary: { label: 'Get a Plan', href: '#' },
    ctaSecondary: { label: 'Test at Home', href: '#' },
    image: null,
  },
  {
    id: 2,
    bg: 'from-[#0a5fa8] to-[var(--color-brand-dark)]',
    eyebrow: 'Always Connected.',
    title: 'Explore 130+ Countries.',
    description: 'One eSIM. Every destination. Instant activation — no physical SIM card needed.',
    ctaPrimary: { label: 'View Plans', href: '#' },
    ctaSecondary: { label: 'Learn More', href: '#' },
    image: '/home/view1.png',
  },
];

export function CtaSection() {
  const [current, setCurrent] = useState(0);
  const total = slides.length;

  useEffect(() => {
    const timer = setInterval(() => setCurrent((c) => (c + 1) % total), 5000);
    return () => clearInterval(timer);
  }, [total]);

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);
  const slide = slides[current];

  return (
    <section className="overflow-hidden">
      <div className={`bg-gradient-to-br ${slide.bg} transition-all duration-700 py-16 md:py-24 relative`}>
        <div className="max-w-[1400px] mx-auto px-5 md:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Text + CTAs */}
            <div>
              <p className="text-white/60 text-sm font-medium uppercase tracking-widest mb-3">
                {slide.eyebrow}
              </p>
              <h2 className="font-bold text-white leading-[var(--leading-tight)] mb-6 text-[clamp(2rem,4vw,var(--text-h1))]">
                {slide.title}
              </h2>
              <p className="text-white/80 text-[var(--text-xl)] mb-10 leading-[var(--leading-relaxed)]">
                {slide.description}
              </p>
              <div className="flex flex-wrap gap-4 mb-10">
                <Link
                  href={slide.ctaPrimary.href}
                  className="bg-white text-[var(--color-brand)] font-semibold text-base px-8 py-3.5 rounded-[var(--radius-pill)] hover:bg-[var(--color-brand-light)] transition-colors"
                >
                  {slide.ctaPrimary.label}
                </Link>
                <Link
                  href={slide.ctaSecondary.href}
                  className="border border-white/40 text-white font-semibold text-base px-8 py-3.5 rounded-[var(--radius-pill)] hover:bg-white/10 transition-colors"
                >
                  {slide.ctaSecondary.label}
                </Link>
              </div>

              {/* Navigation */}
              <div className="flex items-center gap-3">
                <button
                  onClick={prev}
                  aria-label="Previous slide"
                  className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
                >
                  <LuChevronLeft className="w-4 h-4" aria-hidden="true" />
                </button>
                <div className="flex gap-2">
                  {slides.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrent(i)}
                      aria-label={`Go to slide ${i + 1}`}
                      className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? 'w-6 bg-white' : 'w-1.5 bg-white/35'}`}
                    />
                  ))}
                </div>
                <button
                  onClick={next}
                  aria-label="Next slide"
                  className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
                >
                  <LuChevronRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </div>

            {/* Image / Mockup */}
            <div className="flex justify-center lg:justify-end">
              {slide.image ? (
                <div className="relative w-full max-w-md aspect-[4/3] rounded-2xl overflow-hidden shadow-[var(--shadow-strong)]">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    className="object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-[var(--color-brand-dark)]/20" aria-hidden="true" />
                </div>
              ) : (
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
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
