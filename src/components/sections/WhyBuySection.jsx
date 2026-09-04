import { LuGlobe, LuSmartphone, LuContrast, LuLayoutGrid, LuPhoneCall, LuArrowDownUp } from 'react-icons/lu';

const features = [
  {
    icon: LuGlobe,
    title: 'Instant Delivery & Connectivity',
    desc: 'No waiting for a physical card to arrive. Your Japan eSIM is delivered instantly to your inbox - scan the QR code before your flight and connect to high-speed 4G/5G the moment you land.',
  },
  {
    icon: LuSmartphone,
    title: 'Easy Japan eSIM Setup',
    desc: 'No airport SIM counters. No local vendor searches. Simply scan your QR code, follow the on-screen steps, and your eSIM Japan is live - ready to connect across Japan before you even leave the gate.',
  },
  {
    icon: LuContrast,
    title: 'Eco-Friendly eSIM in Japan',
    desc: "Choosing an eSIM in Japan means zero plastic packaging, no physical card production, and nothing to throw away. It's the modern, paperless way to stay connected - better for your trip and better for the planet.",
  },
  {
    icon: LuLayoutGrid,
    title: 'Reliable Japan eSIM Coverage',
    desc: "Voye Global's Japan eSIM connects to major carrier networks including NTT DOCOMO, KDDI, and SoftBank - delivering a strong, reliable signal across Tokyo, Kyoto, Osaka, Hiroshima, and rural regions nationwide.",
  },
  {
    icon: LuPhoneCall,
    title: '24/7 Multilingual Customer Support',
    desc: "Have a question before departure or need help mid-trip? Voye Global's support team is available 24/7 via WhatsApp, live chat, and email - in multiple languages, whenever you need them.",
  },
  {
    icon: LuArrowDownUp,
    title: 'Flexible Japan eSIM Data Plans',
    desc: 'From a 5GB plan for a short city break to unlimited data for a month-long adventure, Voye Global has a Japan eSIM plan to match every trip. Fixed plans start from $9 - no contracts, no hidden fees.',
  },
];

export function WhyBuySection() {
  return (
    <section className="bg-white py-12 md:py-20 px-4 md:px-8">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex items-center justify-center gap-4 mb-6 md:mb-10">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-black/20" />
          <p className="text-[#1a1a1a] text-[11px] md:text-[18px] font-medium uppercase tracking-widest whitespace-nowrap text-center">
            WHY BUY A JAPAN ESIM FROM VOYE GLOBAL?
          </p>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-black/20" />
        </div>

        <p className="text-[13px] md:text-[16px] text-[#444] leading-relaxed max-w-[900px] mx-auto mb-10 md:mb-14">
          Forget searching for public Wi-Fi, swapping physical SIM cards, or paying expensive roaming charges. A Japan eSIM from Voye Global keeps you connected from the moment you arrive with instant activation, reliable nationwide coverage, flexible prepaid data plans, and secure 4G/5G connectivity across Japan.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {features.map((f) => (
            <div key={f.title} className="bg-[#f8f9fa] rounded-[16px] md:rounded-[20px] p-6 md:p-8">
              <f.icon className="w-8 h-8 text-[#1a1a1a] mb-4" aria-hidden="true" />
              <h3 className="text-[15px] md:text-[18px] font-bold text-[#1a1a1a] mb-3">{f.title}</h3>
              <p className="text-[13px] md:text-[15px] text-[#555] leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
