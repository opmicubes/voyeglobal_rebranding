import Image from 'next/image';

export function PlansArticleSection() {
  return (
    <section className="relative min-h-[400px] md:min-h-[650px]">
      <Image
        src="/plans/japan-hero.png"
        alt="Japan"
        fill
        className="object-cover object-center"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
      <div className="relative max-w-[1400px] mx-auto px-5 md:px-12 min-h-[400px] md:min-h-[650px] flex items-center py-10">
        <div className="bg-white/80 backdrop-blur-[50px] border border-white rounded-[20px] md:rounded-[40px] p-6 md:p-10 w-full md:w-[48%]">
          <h1 className="text-[22px] md:text-[40px] font-bold text-[#1a1a1a] mb-4 md:mb-6">
            Japan eSIM for Instant Activation Before You Fly
          </h1>
          <p className="text-[13px] md:text-[16px] text-[#444] leading-relaxed mb-4">
            Planning a trip to Japan? With a Japan eSIM, staying connected is effortless from the moment you land. Skip the queues at airport SIM counters and forget the hassle of swapping physical SIM cards. Buy your Japan eSIM online before departure, activate instantly, and enjoy high-speed mobile data throughout your journey – no store visits, no waiting, no surprises.
          </p>
          <p className="text-[13px] md:text-[16px] text-[#444] leading-relaxed">
            Whether you&apos;re navigating the fast-paced streets of Tokyo, exploring cultural landmarks in Kyoto, or enjoying food adventures in Osaka, Voye Global&apos;s{' '}
            <strong>eSIM for Japan travel</strong>{' '}
            ensures stable 4G/5G connectivity with dependable nationwide coverage and 24/7 multilingual customer support.
          </p>
        </div>
      </div>
    </section>
  );
}
