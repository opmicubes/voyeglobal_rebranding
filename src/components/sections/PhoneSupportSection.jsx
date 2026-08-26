'use client';
import { useState } from 'react';
import Image from 'next/image';

export function PhoneSupportSection() {
  const [query, setQuery] = useState('');

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-[1400px] mx-auto px-5 md:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="leading-[var(--leading-tight)] mb-6 text-[var(--text-h2)]">
              <span className="font-normal text-[var(--color-text-primary)]">Does my phone </span>
              <span className="font-bold text-[var(--color-brand)]">support eSIM?</span>
            </h2>
            <p className="text-[var(--text-xl)] text-[var(--color-text-primary)] mb-8 leading-[var(--leading-relaxed)]">
              Voye Global provides a comprehensive compatibility guide on their website to help you verify if your device can use their eSIM service.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-4">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search your device model..."
                className="flex-1 border border-[var(--color-border)] rounded-[var(--radius-md)] px-4 py-3 text-base text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] outline-none focus-visible:border-[var(--color-brand)] focus-visible:ring-2 focus-visible:ring-[var(--color-brand)]/20 transition"
                aria-label="Search your phone model"
              />
              <button className="bg-[var(--color-brand)] text-white font-semibold text-base px-6 py-3 rounded-[var(--radius-md)] hover:bg-[var(--color-brand-dark)] transition-colors whitespace-nowrap">
                Check Now
              </button>
            </div>
            <a href="#" className="text-[var(--color-brand)] text-base hover:underline">
              Or check out the full list of compatible devices →
            </a>
          </div>

          <div className="relative rounded-[var(--radius-2xl)] overflow-hidden aspect-[4/3]">
            <Image
              src="/home/support.png"
              alt="Checking phone eSIM compatibility"
              fill
              className="object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
