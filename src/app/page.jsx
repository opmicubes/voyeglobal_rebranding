import { fetchEsimCategoriesWithEn } from '@/lib/gql/queries/esimCategories';
import { fetchEsimProductsNew } from '@/lib/gql/queries/esimProductsNew';
import { fetchSupportedDevicesServer } from '@/lib/gql/queries/supportedDevices';
import { fetchPopularPlansAndPrices } from '@/lib/gql/queries/popularPlansAndPrices';
import { getCurrentSite } from '@/lib/site/context';
import { FaWhatsapp } from 'react-icons/fa';
import { AnnouncementBar } from '@/components/sections/AnnouncementBar';
import { Navbar } from '@/components/layout/Navbar';
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
import { Footer } from '@/components/layout/Footer';

export default async function HomePage() {
  const { config, theme, content } = await getCurrentSite();

  let countries = null;
  let regional = null;
  let globalCats = null;
  let cruisePlans = null;
  let globalPlans = null;
  let devices = [];
  let popularPlans = [];

  const settled = await Promise.allSettled([
    fetchEsimCategoriesWithEn({ place: 'local', item_count: 200 }),
    fetchEsimCategoriesWithEn({ place: 'regional' }),
    fetchEsimCategoriesWithEn({ place: 'global' }),
    fetchEsimProductsNew({ category: 'cruises', place: 'local', language: 'en' }),
    fetchEsimProductsNew({ category: 'global', place: 'global' }),
    fetchSupportedDevicesServer('en'),
    fetchPopularPlansAndPrices('en'),
  ]);

  const [r0, r1, r2, r3, r4, r5, r6] = settled;

  if (r0.status === 'fulfilled') countries = r0.value;
  else console.error('[HomePage] countries failed:', r0.reason?.message);

  if (r1.status === 'fulfilled') regional = r1.value;
  else console.error('[HomePage] regional failed:', r1.reason?.message);

  if (r2.status === 'fulfilled') globalCats = r2.value;
  else console.error('[HomePage] globalCats failed:', r2.reason?.message);

  if (r3.status === 'fulfilled') cruisePlans = r3.value;
  else console.error('[HomePage] cruisePlans failed:', r3.reason?.message);

  if (r4.status === 'fulfilled') globalPlans = r4.value;
  else console.error('[HomePage] globalPlans failed:', r4.reason?.message);

  if (r5.status === 'fulfilled') devices = r5.value;
  else console.error('[HomePage] devices failed:', r5.reason?.message);

  if (r6.status === 'fulfilled') popularPlans = r6.value;
  else console.error('[HomePage] popularPlans failed:', r6.reason?.message);

  console.log('[HomePage] popularPlans count:', popularPlans?.length, '| first 3:', popularPlans?.slice(0, 3)?.map(p => p.name));
  console.log('[HomePage] countries count:', countries?.categories?.length);

  return (
    <>
      <AnnouncementBar
        text={content.announcement.text}
        couponCode={content.announcement.couponCode}
      />
      <Navbar logo={theme.logo} siteName={config.name} />
      <main>
        <HeroSection />
        <FeaturesBar />
        <PlansSection
          countries={countries?.categories ?? []}
          regional={regional?.categories ?? []}
          globalPlans={globalPlans?.normal_plan ?? []}
          cruisePlans={cruisePlans?.normal_plan ?? []}
          popularPlans={popularPlans}
        />
        <GatewaySection />
        <WhyChooseSection />
        <HowItWorksSection />
        <PhoneSupportSection devices={devices} />
        <ComparisonSection />
        <TrustedSection />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer logo={theme.logo} siteName={config.name} />
      <a
        href="https://wa.me/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="fixed bottom-6 end-6 z-50 w-12 h-12 bg-[var(--color-brand)] rounded-full flex items-center justify-center hover:bg-[var(--color-brand-dark)] transition-colors shadow-[var(--shadow-brand)]"
      >
        <FaWhatsapp className="w-6 h-6 text-white" aria-hidden="true" />
      </a>
    </>
  );
}
