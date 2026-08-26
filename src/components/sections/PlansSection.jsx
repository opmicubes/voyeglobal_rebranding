'use client';
import { useState } from 'react';
import { LuChevronRight, LuArrowRight } from 'react-icons/lu';

const tabs = ['Global', 'Regional', 'Country', 'Family Plans', 'Cruise'];

const countryPlans = [
  { flag: '🇦🇪', country: 'UAE', price: '$3.99' },
  { flag: '🇩🇪', country: 'Germany', price: '$4.99' },
  { flag: '🇧🇷', country: 'Brazil', price: '$3.99' },
  { flag: '🇯🇵', country: 'Japan', price: '$2.99' },
  { flag: '🇮🇳', country: 'India', price: '$3.99' },
  { flag: '🇺🇸', country: 'USA', price: '$3.99' },
];

export function PlansSection() {
  const [activeTab, setActiveTab] = useState('Country');

  return (
    <section className="bg-[var(--color-surface-blue)] py-16 md:py-20">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">

        {/* Section header with lines on both sides */}
        <div className="flex items-center justify-center gap-4 mb-10">
          <div className="flex-1 max-w-[100px] h-px bg-[var(--color-brand)]" />
          <p className="text-[var(--color-brand)] text-base font-semibold uppercase tracking-widest whitespace-nowrap">
            EXPLORE PLANS
          </p>
          <div className="flex-1 max-w-[100px] h-px bg-[var(--color-brand)]" />
        </div>

        {/* Tabs inside white pill container */}
        <div className="flex justify-center mb-10">
          <div className="bg-white rounded-full p-1.5 flex items-center gap-1 shadow-[var(--shadow-subtle)]" role="tablist">
            {tabs.map((tab) => (
              <button
                key={tab}
                role="tab"
                aria-selected={activeTab === tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
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
            <a
              key={plan.country}
              href="#"
              className="bg-white rounded-2xl px-5 py-4 flex items-center gap-4 shadow-[var(--shadow-subtle)] hover:shadow-[var(--shadow-card)] transition-shadow"
            >
              <div className="w-11 h-11 rounded-full flex items-center justify-center bg-[var(--color-surface)] flex-shrink-0 text-2xl leading-none">
                {plan.flag}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-base font-semibold text-[var(--color-text-dark)]">{plan.country}</p>
                <p className="text-sm text-[var(--color-text-secondary)]">Starting at {plan.price}</p>
              </div>
              <LuChevronRight className="text-[var(--color-text-muted)] w-5 h-5 flex-shrink-0" aria-hidden="true" />
            </a>
          ))}
        </div>

        {/* View All button */}
        <div className="flex justify-center mt-8">
          <a
            href="#"
            className="flex items-center gap-2 text-[var(--color-brand)] text-base font-semibold border border-[var(--color-brand)] px-8 py-3 rounded-full hover:bg-[var(--color-brand)] hover:text-white transition-all group"
          >
            View All
            <LuArrowRight className="w-4 h-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
