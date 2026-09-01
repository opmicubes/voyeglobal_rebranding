'use client';
import { useState } from 'react';
import { LuChevronRight } from 'react-icons/lu';
import Image from 'next/image';
import Link from 'next/link';

const TABS = ['Global', 'Regional', 'Country', 'Family Plans', 'Cruise'];

function normalizeCountryName(value) {
  return String(value ?? '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function buildPopularityRank(items = []) {
  const rank = new Map();
  items.forEach((item, index) => {
    const names = [item?.name, item?.englishName, item?.country_name, item?.countryName];
    for (const raw of names) {
      const key = normalizeCountryName(raw);
      if (!key || rank.has(key)) continue;
      rank.set(key, index);
    }
  });
  return rank;
}

function sortCountriesByPopularity(countries, popularityRank) {
  return [...countries].sort((a, b) => {
    const aKey = normalizeCountryName(a?.englishName || a?.name);
    const bKey = normalizeCountryName(b?.englishName || b?.name);

    const aRank = aKey && popularityRank.has(aKey) ? popularityRank.get(aKey) : Number.MAX_SAFE_INTEGER;
    const bRank = bKey && popularityRank.has(bKey) ? popularityRank.get(bKey) : Number.MAX_SAFE_INTEGER;

    if (aRank !== bRank) return aRank - bRank;

    return String(a?.name || '').localeCompare(String(b?.name || ''), undefined, { sensitivity: 'base' });
  });
}

function cleanList(arr) {
  return (arr ?? []).filter(
    (c) =>
      c.image &&
      !c.name.toLowerCase().includes('test') &&
      !c.name.toLowerCase().includes('sanjay') &&
      !c.name.toLowerCase().includes('wpml'),
  );
}

function CountryCard({ item }) {
  return (
    <Link
      href="#"
      className="bg-white rounded-lg px-3 py-3 lg:px-5 lg:py-4 flex items-center gap-2 lg:gap-4 shadow-[var(--shadow-subtle)] hover:shadow-[var(--shadow-card)] transition-shadow"
    >
      <div className="w-9 h-9 lg:w-11 lg:h-11 rounded-full overflow-hidden flex-shrink-0 relative border border-black/5">
        <Image src={item.image} alt={item.name} fill className="object-cover" sizes="44px" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-[var(--color-text-dark)] truncate">{item.name}</p>
        <p className="text-xs lg:text-sm text-[var(--color-text-secondary)] truncate">Starting at {item.lowest_price}</p>
      </div>
      <LuChevronRight className="text-[var(--color-text-muted)] w-4 h-4 flex-shrink-0 hidden lg:block" aria-hidden="true" />
    </Link>
  );
}

function RegionalCard({ item }) {
  return (
    <Link
      href="#"
      className="bg-white rounded-lg px-3 py-3 lg:px-5 lg:py-4 flex items-center gap-2 lg:gap-4 shadow-[var(--shadow-subtle)] hover:shadow-[var(--shadow-card)] transition-shadow"
    >
      <div className="w-9 h-9 lg:w-11 lg:h-11 rounded-full overflow-hidden flex-shrink-0 relative bg-[#f0f7ff] border border-black/5">
        <Image src={item.image} alt={item.name} fill className="object-contain p-1.5" sizes="44px" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-[var(--color-text-dark)] truncate">{item.name}</p>
        <p className="text-xs lg:text-sm text-[var(--color-text-secondary)] truncate">
          {item.supported_countries?.length ?? 0} · Starting at {item.lowest_price}
        </p>
      </div>
      <LuChevronRight className="text-[var(--color-text-muted)] w-4 h-4 flex-shrink-0 hidden lg:block" aria-hidden="true" />
    </Link>
  );
}

function PlanCard({ plan }) {
  const coverageLabel =
    plan.coverage && plan.coverage !== 'No specific coverage info available'
      ? `${plan.coverage} · `
      : '';
  return (
    <Link
      href="#"
      className="bg-white rounded-lg px-3 py-3 lg:px-5 lg:py-4 flex items-center gap-2 lg:gap-4 shadow-[var(--shadow-subtle)] hover:shadow-[var(--shadow-card)] transition-shadow"
    >
      <div className="w-9 h-9 lg:w-11 lg:h-11 rounded-full overflow-hidden flex-shrink-0 relative bg-[#f0f7ff] border border-black/5">
        {plan.country_flag ? (
          <Image src={plan.country_flag} alt="" fill className="object-contain p-1.5" sizes="44px" aria-hidden="true" />
        ) : (
          <div className="w-full h-full bg-[#e8f4ff] rounded-full" />
        )}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-[var(--color-text-dark)] truncate">
          {plan.data} · {plan.valid_for}
        </p>
        <p className="text-xs lg:text-sm text-[var(--color-text-secondary)] truncate">
          {coverageLabel}Starting at {plan.price}
        </p>
      </div>
      <LuChevronRight className="text-[var(--color-text-muted)] w-4 h-4 flex-shrink-0 hidden lg:block" aria-hidden="true" />
    </Link>
  );
}

export function PlansSection({
  countries = [],
  regional = [],
  globalPlans = [],
  cruisePlans = [],
  popularPlans = [],
}) {
  const [activeTab, setActiveTab] = useState('Country');

  const tabData = {
    Country: { items: sortCountriesByPopularity(cleanList(countries), buildPopularityRank(popularPlans)).slice(0, 12), Card: CountryCard },
    Regional: { items: cleanList(regional).sort((a, b) => a.name.localeCompare(b.name)), Card: RegionalCard },
    Global: { items: globalPlans.slice(0, 12), Card: PlanCard },
    Cruise: { items: cruisePlans, Card: PlanCard },
    'Family Plans': { items: [], Card: null },
  };

  const { items, Card } = tabData[activeTab] ?? { items: [], Card: null };

  return (
    <section className="bg-white py-12 md:py-16 px-4 md:px-8 relative z-10 rounded-b-[80px] -mb-16">
      <div className="max-w-[1408px] mx-auto bg-gradient-to-b from-[#A0D4FF] to-[#ECF7FF] rounded-3xl px-8 md:px-14 py-12">

        <div className="flex items-center justify-center gap-4 mb-10">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-black/25" />
          <p className="text-[var(--color-text-dark)] text-base font-semibold uppercase tracking-widest whitespace-nowrap">
            EXPLORE PLANS
          </p>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-black/25" />
        </div>

        <div className="flex justify-center mb-10">
          <div
            className="bg-white rounded-full p-1.5 flex items-center gap-1 shadow-[var(--shadow-subtle)] w-full"
            role="tablist"
          >
            {TABS.map((tab) => (
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

        {items.length > 0 && Card ? (
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {items.map((item) => (
              <Card key={item.id ?? item.name} item={item} plan={item} />
            ))}
          </div>
        ) : (
          <p className="text-center py-16 text-[var(--color-text-secondary)]">
            {activeTab === 'Family Plans' ? 'Family plans coming soon.' : 'No plans available.'}
          </p>
        )}

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
