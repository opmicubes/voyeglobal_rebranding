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

export default function HomePage() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesBar />
        <PlansSection />
        <GatewaySection />
        <WhyChooseSection />
        <HowItWorksSection />
        <TrustedSection />
        <PhoneSupportSection />
        <ComparisonSection />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
