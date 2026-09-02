import Image from 'next/image';
import { SiAppstore } from 'react-icons/si';

export function TrustedSection() {
  return (
    <section className="bg-[var(--color-surface)] py-16 md:py-20 rounded-b-[80px]">
      <div className="max-w-[1408px] mx-auto px-4 md:px-8">

        <div className="flex items-center justify-center gap-4 mb-10">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-black/25" />
          <p className="text-[var(--color-text-dark)] text-[12.4px] md:text-base font-semibold uppercase tracking-widest whitespace-nowrap">
            MORE ABOUT VOY
          </p>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-black/25" />
        </div>

        {/* Mobile gradient cards */}
        <div className="md:hidden grid grid-cols-1 gap-6">

          {/* LEFT CARD — mobile */}
          <div className="bg-gradient-to-br from-[#9cdbff] to-[#e2edff] rounded-[13.5px] p-5">
            <p className="text-[12px] font-bold text-[var(--color-text-dark)]">Trusted by</p>
            <p className="text-[12px] font-bold text-[var(--color-text-dark)]">
              <span className="font-bold">200,000+ Travelers</span> Worldwide
            </p>
            <div className="flex items-center gap-4 mt-5">
              <div className="flex items-center gap-2">
                <SiAppstore className="w-6 h-6 p-1 bg-white rounded-[5.5px] text-[var(--color-text-dark)]" aria-hidden="true" />
                <span className="font-semibold text-[13.1px] text-[var(--color-text-dark)]">4.5/5</span>
              </div>
              <div className="w-px h-6 bg-[var(--color-border)]" />
              <div className="flex items-center gap-2">
                <Image className="w-6 h-6 p-1 bg-white rounded-[5.5px]" src="/home/play-store.svg" alt="Google Play" width={24} height={24} aria-hidden="true" />
                <span className="font-semibold text-[13.1px] text-[var(--color-text-dark)]">4.6/5</span>
              </div>
            </div>
            <div className="mt-5">
              <button className="text-[12px] font-semibold text-[#077ad5] bg-white rounded-[8px] px-2 py-0.5">Download App</button>
            </div>
          </div>

          {/* RIGHT CARD — mobile */}
          <div className="bg-gradient-to-br from-[#ffffff] to-[#c5e5ff] rounded-[13.5px] p-5">
            <p className="text-[var(--color-text-dark)] text-[14px] font-light mb-1">Send $5 to a friend.</p>
            <p className="text-[var(--color-text-dark)] text-[14px] font-light mb-6">Get $5 for your next eSIM.</p>
            <button className="text-[12px] font-semibold text-[#077ad5] bg-white rounded-[8px] px-2 py-0.5">
              Refer and Earn
            </button>
          </div>

        </div>

        {/* Desktop photo cards — original tall layout */}
        <div className="hidden md:grid grid-cols-2 gap-6">

          {/* LEFT CARD — desktop */}
          <div className="relative rounded-3xl overflow-hidden min-h-[620px]">
            <Image
              src="/home/about1.png"
              alt="Trusted travelers worldwide"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              loading="lazy"
            />
            <div className="absolute top-0 start-0 p-12 z-10">
              <p className="text-2xl text-[var(--color-text-dark)]">Trusted by</p>
              <p className="text-2xl text-[var(--color-text-dark)]">
                <span className="font-bold">200k+ Travelers</span> Worldwide
              </p>
              <div className="flex items-center gap-4 mt-5">
                <div className="flex items-center gap-2">
                  <SiAppstore className="w-10 h-10 p-2 bg-white rounded-sm text-[var(--color-text-dark)]" aria-hidden="true" />
                  <span className="font-bold text-lg text-[var(--color-text-dark)]">4.5</span>
                  <span className="text-[var(--color-text-secondary)] text-base">/5</span>
                </div>
                <div className="w-px h-6 bg-[var(--color-border)]" />
                <div className="flex items-center gap-2">
                  <Image className="w-10 h-10 p-2 bg-white rounded-sm" src="/home/play-store.svg" alt="Google Play" width={32} height={32} aria-hidden="true" />
                  <span className="font-bold text-lg text-[var(--color-text-dark)]">4.6</span>
                  <span className="text-[var(--color-text-secondary)] text-base">/5</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT CARD — desktop */}
          <div className="relative rounded-3xl overflow-hidden min-h-[820px]">
            <Image
              src="/home/about2.png"
              alt="Friends sharing referral"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              loading="lazy"
            />
            <div className="absolute top-0 start-0 p-12 z-10">
              <p className="text-white text-2xl mb-1">Send $5 to a friend.</p>
              <p className="text-white text-2xl font-bold mb-6">Get $5 for your next eSIM.</p>
              <button className="bg-white text-[var(--color-brand)] font-semibold text-base px-7 py-3 rounded-md hover:bg-white/90 transition-colors">
                Refer and Earn
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
