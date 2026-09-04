export const revalidate = 86400;

import { Suspense } from 'react';
import { fetchEsimCategoriesWithEn } from '@/lib/gql/queries/esimCategories';
import { fetchEsimProductsNew } from '@/lib/gql/queries/esimProductsNew';
import { fetchSupportedDevicesServer } from '@/lib/gql/queries/supportedDevices';
import { fetchPopularPlansAndPrices } from '@/lib/gql/queries/popularPlansAndPrices';
import { HeroSection } from '@/components/sections/HeroSection';
import { FeaturesBar } from '@/components/sections/FeaturesBar';
import { PlansSection } from '@/components/sections/PlansSection';
import { GatewaySection } from '@/components/sections/GatewaySection';
import { WhyChooseSection } from '@/components/sections/WhyChooseSection';
import { HowItWorksSection } from '@/components/sections/HowItWorksSection';
import { TrustedSection } from '@/components/sections/TrustedSection';
import { PhoneSupportSection } from '@/components/sections/PhoneSupportSection';
import { ComparisonSection } from '@/components/sections/ComparisonSection';
import { FaqSection } from '@/components/sections/FaqSection';
import { CtaSection } from '@/components/sections/CtaSection';

const PLAN_TABS = ['Global', 'Regional', 'Country', 'Family Plans', 'Cruise'];

function PlansSkeleton() {
  return (
    <section className="bg-white py-8 md:py-12 md:px-8 relative z-10 rounded-b-[30px] md:rounded-b-[80px] -mb-16">
      <div className="max-w-[1408px] mx-auto bg-gradient-to-b from-[#a0d4ff] via-[#d9eeff] to-white rounded-[20px] md:rounded-[60px] pt-10 px-[22px] pb-5 md:px-14 md:py-12">

        {/* EXPLORE PLANS — real text, not a placeholder */}
        <div className="flex items-center justify-center gap-4 mb-5 md:mb-10">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-black/25" />
          <p className="text-[var(--color-text-dark)] text-[12.4px] md:text-[24px] font-normal md:font-medium uppercase tracking-widest whitespace-nowrap">
            EXPLORE PLANS
          </p>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-black/25" />
        </div>

        {/* Real tab labels — not placeholder bars */}
        <div className="flex justify-center mb-10">
          <div className="bg-white rounded-full p-1.5 flex items-center gap-1 shadow-[var(--shadow-subtle)] w-full">
            {PLAN_TABS.map((tab) => (
              <span
                key={tab}
                className={`flex-1 text-center py-2 lg:py-3 xl:py-5 rounded-full text-[12px] md:text-[20px] font-medium ${
                  tab === 'Country'
                    ? 'bg-[var(--color-brand)] text-white shadow-[var(--shadow-brand)]'
                    : 'text-[var(--color-text-primary)]'
                }`}
              >
                {tab}
              </span>
            ))}
          </div>
        </div>

        {/* ONLY the card grid pulses — this is the API data */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 animate-pulse">
          {[1,2,3,4,5,6,7,8,9,10,11,12].map((i) => (
            <div key={i} className="h-16 md:h-20 bg-white rounded-[12px] md:rounded-[16px] flex items-center gap-3 px-3 md:px-4">
              {/* Flag circle */}
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#c8e4f8] flex-shrink-0" />
              {/* Text lines */}
              <div className="flex-1 space-y-2">
                <div className="h-3 md:h-3.5 bg-[#c8e4f8] rounded w-3/4" />
                <div className="h-2.5 md:h-3 bg-[#ddf0ff] rounded w-1/2" />
              </div>
              {/* Chevron stub */}
              <div className="w-4 h-4 bg-[#ddf0ff] rounded hidden md:block" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

function PhoneSkeleton() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-[1408px] mx-auto px-4 md:px-8">
        <div className="bg-[#fff4e2] rounded-[20px] animate-pulse p-5 md:px-14 md:py-16">
          {/* Title placeholder */}
          <div className="h-6 md:h-10 w-64 bg-black/10 rounded mb-4" />
          {/* Body text placeholder */}
          <div className="h-4 w-full bg-black/10 rounded mb-2" />
          <div className="h-4 w-3/4 bg-black/10 rounded mb-8" />
          {/* Device card placeholders */}
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1 h-12 bg-black/10 rounded-[8px]" />
            <div className="h-12 w-32 bg-black/10 rounded-[8px]" />
          </div>
        </div>
      </div>
    </section>
  );
}

async function PlansSectionData() {
  let countries = null;
  let regional = null;
  let globalCats = null;
  let cruisePlans = null;
  let globalPlans = null;
  let popularPlans = [];

  const settled = await Promise.allSettled([
    fetchEsimCategoriesWithEn({ place: 'local', item_count: 200 }),
    fetchEsimCategoriesWithEn({ place: 'regional' }),
    fetchEsimCategoriesWithEn({ place: 'global' }),
    fetchEsimProductsNew({ category: 'cruises', place: 'local', language: 'en' }),
    fetchEsimProductsNew({ category: 'global', place: 'global' }),
    fetchPopularPlansAndPrices('en'),
  ]);

  const [r0, r1, r2, r3, r4, r5] = settled;

  if (r0.status === 'fulfilled') countries = r0?.value;
  else console.log('[PlansSectionData] countries failed:', r0.reason?.message);

  if (r1.status === 'fulfilled') regional = r1?.value;
  else console.log('[PlansSectionData] regional failed:', r1.reason?.message);

  if (r2.status === 'fulfilled') globalCats = r2?.value;
  else console.log('[PlansSectionData] globalCats failed:', r2.reason?.message);

  if (r3.status === 'fulfilled') cruisePlans = r3?.value;
  else console.log('[PlansSectionData] cruisePlans failed:', r3.reason?.message);

  if (r4.status === 'fulfilled') globalPlans = r4?.value;
  else console.log('[PlansSectionData] globalPlans failed:', r4.reason?.message);

  if (r5.status === 'fulfilled') popularPlans = r5?.value;
  else console.log('[PlansSectionData] popularPlans failed:', r5.reason?.message);

  console.log('[PlansSectionData] popularPlans count:', popularPlans?.length, '| first 3:', popularPlans?.slice(0, 3)?.map(p => p.name));
  console.log('[PlansSectionData] countries count:', countries?.categories?.length);
  console.log('[HomePage API] PlansSectionData raw:', { r0: r0.status === 'fulfilled' ? r0.value : r0.reason, r1: r1.status === 'fulfilled' ? r1.value : r1.reason, r2: r2.status === 'fulfilled' ? r2.value : r2.reason, r3: r3.status === 'fulfilled' ? r3.value : r3.reason, r4: r4.status === 'fulfilled' ? r4.value : r4.reason, r5: r5.status === 'fulfilled' ? r5.value : r5.reason });

  return (
    <PlansSection
      countries={countries?.categories ?? []}
      regional={regional?.categories ?? []}
      globalPlans={globalPlans?.normal_plan ?? []}
      cruisePlans={cruisePlans?.normal_plan ?? []}
      popularPlans={popularPlans}
    />
  );
}

async function PhoneSupportData() {
  let devices = [];

  const settled = await Promise.allSettled([
    fetchSupportedDevicesServer('en'),
  ]);

  const [r0] = settled;

  if (r0.status === 'fulfilled') devices = r0?.value;
  else console.log('[PhoneSupportData] devices failed:', r0.reason?.message);
  console.log('[HomePage API] PhoneSupportData raw:', r0.status === 'fulfilled' ? r0.value : r0.reason);

  return <PhoneSupportSection devices={devices} />;
}

export default async function HomePage() {
  return (
    <main>
      <HeroSection />
      <FeaturesBar />
      <Suspense fallback={<PlansSkeleton />}>
        <PlansSectionData />
      </Suspense>
      <GatewaySection />
      <WhyChooseSection />
      <HowItWorksSection />
      <Suspense fallback={<PhoneSkeleton />}>
        <PhoneSupportData />
      </Suspense>
      <ComparisonSection />
      <TrustedSection />
      <FaqSection />
      <CtaSection />
    </main>
  );
}
