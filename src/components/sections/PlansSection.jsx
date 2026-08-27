'use client';
import { useState } from 'react';
import { LuChevronRight } from 'react-icons/lu';
import Image from 'next/image';
import Link from 'next/link';

const tabs = ['Global', 'Regional', 'Country', 'Family Plans', 'Cruise'];

const countryPlans = [
  { code: 'ae', country: 'UAE', price: '$3.99' },
  { code: 'de', country: 'Germany', price: '$4.99' },
  { code: 'br', country: 'Brazil', price: '$3.99' },
  { code: 'jp', country: 'Japan', price: '$2.99' },
  { code: 'in', country: 'India', price: '$3.99' },
  { code: 'us', country: 'USA', price: '$3.99' },
  { code: 'gb', country: 'UK', price: '$4.99' },
  { code: 'fr', country: 'France', price: '$4.99' },
  { code: 'sg', country: 'Singapore', price: '$3.49' },
  { code: 'au', country: 'Australia', price: '$5.99' },
  { code: 'ca', country: 'Canada', price: '$4.49' },
  { code: 'th', country: 'Thailand', price: '$2.99' },
];

export function PlansSection() {
  const [activeTab, setActiveTab] = useState('Country');

  return (
    <section className="bg-white py-12 md:py-16 px-4 md:px-8 relative z-10 rounded-b-[80px] -mb-16">
      <div className="max-w-[1408px] mx-auto bg-gradient-to-b from-[#A0D4FF] to-[#ECF7FF] rounded-3xl px-8 md:px-14 py-12">

        {/* Section header with lines on both sides */}
        <div className="flex items-center justify-center gap-4 mb-10">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-black/25" />
          <p className="text-[var(--color-text-dark)] text-base font-semibold uppercase tracking-widest whitespace-nowrap">
            EXPLORE PLANS
          </p>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-black/25" />
        </div>

        {/* Tabs inside white pill container */}
        <div className="flex justify-center mb-10">
          <div className="bg-white rounded-full p-1.5 flex items-center gap-1 shadow-[var(--shadow-subtle)] w-full" role="tablist">
            {tabs.map((tab) => (
              <button
                key={tab}
                role="tab"
                aria-selected={activeTab === tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 text-center py-3 rounded-full text-sm font-medium transition-all ${
                  activeTab === tab
                    ? 'bg-[var(--color-brand)] text-white shadow-[var(--shadow-brand)]'
                    : 'text-[var(--color-text-primary)] hover:text-[var(--color-brand)]'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Plan cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {countryPlans.map((plan) => (
            <Link
              key={plan.country}
              href="#"
              className="bg-white rounded-lg px-5 py-4 flex items-center gap-4 shadow-[var(--shadow-subtle)] hover:shadow-[var(--shadow-card)] transition-shadow"
            >
              <div className="w-11 h-11 rounded-full overflow-hidden flex-shrink-0 relative">
                <Image
                  src={`https://flagcdn.com/w80/${plan.code}.png`}
                  alt={plan.country}
                  fill
                  className="object-cover"
                  sizes="44px"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-base font-semibold text-[var(--color-text-dark)]">{plan.country}</p>
                <p className="text-sm text-[var(--color-text-secondary)]">Starting at {plan.price}</p>
              </div>
              <LuChevronRight className="text-[var(--color-text-muted)] w-5 h-5 flex-shrink-0" aria-hidden="true" />
            </Link>
          ))}
        </div>

        {/* View All button */}
        <div className="flex justify-center mt-8">
          <Link
            href="#"
            className="flex items-center gap-2 text-[var(--color-brand)] text-base font-semibold hover:underline transition-all"
          >
            View All
            <LuChevronRight className="w-3.5 h-3.5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
