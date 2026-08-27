'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export function PhoneSupportSection() {
  const [query, setQuery] = useState('');

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-[1408px] mx-auto px-4 md:px-8">
        <div className="bg-[#FFF8E7] rounded-3xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch">
            <div className="px-8 md:px-14 py-12 md:py-16 flex flex-col justify-center">
              <h2 className="text-2xl md:text-3xl font-bold leading-snug mb-4">
                <span className="font-normal text-[var(--color-text-primary)]">Does my phone </span>
                <span className="font-bold text-[var(--color-brand)]">support eSIM?</span>
              </h2>
              <p className="text-sm md:text-base text-[var(--color-text-secondary)] mb-8 leading-relaxed">
                Voye Global provides a comprehensive compatibility guide on their website to help you verify if your device can use their eSIM service.
              </p>

              <p className="text-sm text-gray-600 mb-2">Search your device model to check if it&apos;s eSIM compatible:</p>
              <div className="flex flex-col sm:flex-row gap-3 mb-4">
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search your device model..."
                  className="flex-1 border border-[var(--color-border)] bg-white rounded-[var(--radius-md)] px-4 py-3 text-base text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] outline-none focus-visible:border-[var(--color-brand)] focus-visible:ring-2 focus-visible:ring-[var(--color-brand)]/20 transition"
                  aria-label="Search your phone model"
                />
                <button className="bg-[var(--color-brand)] text-white font-semibold text-base px-6 py-3 rounded-[var(--radius-md)] hover:bg-[var(--color-brand-dark)] transition-colors whitespace-nowrap">
                  Check Now
                </button>
              </div>
              <Link href="#" className="text-[#1000F3] hover:underline text-xs">
                Or check out the full list of supported devices →
              </Link>
            </div>

            <div className="relative min-h-[280px] lg:min-h-0 mt-6">
              {/* Decorative vector — bottom-right, 110% wide so rounded caps bleed off and clip */}
              <Image
                src="/home/phone-vector.svg"
                alt=""
                width={868}
                height={576}
                className="absolute bottom-0 end-0 z-0 max-w-none h-full w-auto"
                aria-hidden="true"
              />
              {/* Support photo — on top */}
              <Image
                src="/home/support.png"
                alt="Checking phone eSIM compatibility"
                fill
                className="object-contain object-right-bottom z-10"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
