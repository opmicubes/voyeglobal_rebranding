import { PlansArticleSection } from '@/components/sections/PlansArticleSection';
import { PlansListingSection } from '@/components/sections/PlansListingSection';
import { FamilyPromoSection } from '@/components/sections/FamilyPromoSection';
import { WhyBuySection } from '@/components/sections/WhyBuySection';
import { HowItWorksSection } from '@/components/sections/HowItWorksSection';
import { PhoneSupportSection } from '@/components/sections/PhoneSupportSection';
import { FaqSection } from '@/components/sections/FaqSection';
import { CtaSection } from '@/components/sections/CtaSection';

export default function EsimCountryPage({ params }) {
  return (
    <main>
      <PlansListingSection category={params.country} />
      <FamilyPromoSection />
      <PlansArticleSection />
      <WhyBuySection />
      <HowItWorksSection />
      <PhoneSupportSection devices={[]} />
      <FaqSection />
      <CtaSection />
    </main>
  );
}
