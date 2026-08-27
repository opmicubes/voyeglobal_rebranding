import Image from 'next/image';
import { AiOutlineComment } from 'react-icons/ai';
import { FaWhatsapp, FaComments } from 'react-icons/fa';
import { IoChatbubblesOutline, IoMailOutline } from 'react-icons/io5';
import { LuPhoneCall, LuMail } from 'react-icons/lu';
import { PiPhoneCall } from 'react-icons/pi';
import { RiWhatsappFill } from 'react-icons/ri';

export function WhyChooseSection() {
  return (
    <section className="bg-white py-16 md:py-24 relative z-10 rounded-t-[40px] -mt-10">
      <div className="max-w-[1408px] mx-auto px-4 md:px-8">

        {/* Section header — same pattern as PlansSection */}
        <div className="flex items-center justify-center gap-4 mb-10">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-black/25" />
          <p className="text-[var(--color-text-dark)] text-base font-semibold uppercase tracking-widest whitespace-nowrap">
            WHY CHOOSE VOY GLOBAL&apos;S ESIM
          </p>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-black/25" />
        </div>

        {/* 2×2 grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

          {/* Card 1 — Affordable Rates */}
          <div className="bg-[#EBF4FD] rounded-2xl overflow-hidden flex flex-col">
            <div className="p-6 md:p-8">
              <h3 className="font-semibold text-[var(--color-text-dark)] text-xl mb-3">Affordable Rates</h3>
              <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
                Voye Global offers competitive eSIM pricing, helping you save significantly compared to traditional roaming charges.
              </p>
            </div>
            {/* Pricing widget — stacked 3D cards */}
            <div className="mt-auto px-6 pb-6 flex justify-center">
              <div className="relative w-full max-w-[260px] pb-32">

                {/* USA — back card, peeks out furthest below */}
                <div className="absolute top-[110px] inset-x-8 bg-white rounded-2xl shadow-sm px-3 py-3 flex items-center gap-3">
                  <div className="w-14 h-14 rounded-lg border border-gray-300 overflow-hidden relative flex-shrink-0">
                    <Image src="https://flagcdn.com/w80/us.png" alt="USA" fill className="object-cover" sizes="56px" />
                  </div>
                  <div>
                    <p className="text-lg font-bold text-[var(--color-text-dark)]">USA</p>
                    <p className="text-xl font-bold text-[var(--color-text-dark)]">$4.99</p>
                  </div>
                </div>

                {/* UAE — middle card, peeks out below Japan */}
                <div className="absolute top-[58px] inset-x-4 bg-white rounded-2xl shadow-md px-3 py-3 flex items-center gap-3 z-10">
                  <div className="w-14 h-14 rounded-lg border border-gray-300 overflow-hidden relative flex-shrink-0">
                    <Image src="https://flagcdn.com/w80/ae.png" alt="UAE" fill className="object-cover" sizes="56px" />
                  </div>
                  <div>
                    <p className="text-lg font-bold text-[var(--color-text-dark)]">UAE</p>
                    <p className="text-xl font-bold text-[var(--color-text-dark)]">$4.99</p>
                  </div>
                </div>

                {/* Japan — front card, fully visible on top */}
                <div className="relative bg-white rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,0.12)] px-3 py-3 flex items-center gap-4 z-20">
                  <div className="w-16 h-16 rounded-lg overflow-hidden border border-gray-300 relative flex-shrink-0">
                    <Image src="https://flagcdn.com/w80/jp.png" alt="Japan" fill className="object-cover" sizes="56px" />
                  </div>
                  <div>
                    <p className="text-lg font-bold text-[var(--color-text-dark)]">Japan</p>
                    <p className="text-xl font-bold text-[var(--color-text-dark)]">$2.99</p>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Card 2 — Instant Connectivity */}
          <div className="bg-[linear-gradient(to_right,#8FC3EB_20%,#8FC3EB_48%,#82BCE2_100%)] rounded-2xl overflow-hidden flex flex-col">
            <div className="p-6 md:p-8">
              <h3 className="font-semibold text-[var(--color-text-dark)] text-xl mb-3">Instant Connectivity</h3>
              <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
                Activate your eSIM on arrival and get online in minutes — no hunting for local SIM cards or navigating foreign kiosks.
              </p>
            </div>
            <div className="relative mt-auto h-52 md:h-64">
              <Image
                src="/home/choose1.png"
                alt="Instant connectivity with Voye eSIM"
                fill
                className="object-cover object-top"
                sizes="(max-width: 640px) 100vw, 50vw"
                loading="lazy"
              />
            </div>
          </div>

          {/* Card 3 — Global Coverage */}
          <div className="rounded-2xl overflow-hidden relative min-h-[380px] md:min-h-[420px]">
            <Image
              src="/home/choose2.png"
              alt="Global coverage across 130+ countries"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 50vw"
              loading="lazy"
            />
            {/* Subtle top gradient so text stays readable */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-transparent" aria-hidden="true" />
            <div className="absolute inset-0 p-6 md:p-8 flex flex-col">
              <h3 className="font-semibold text-white text-xl mb-3">Global coverage</h3>
              <p className="text-white/90 text-sm leading-relaxed">
                Stay connected across 130+ countries, from bustling cities to remote locales — ideal for frequent travelers and digital nomads.
              </p>
            </div>
          </div>

          {/* Card 4 — 24/7 Support */}
          <div className="bg-[#EBF4FD] rounded-2xl overflow-hidden flex flex-col min-h-[380px] md:min-h-[420px]">
            {/* Text — top */}
            <div className="p-6 pb-0 md:px-8 md:pt-8">
              <h3 className="font-semibold text-[var(--color-text-dark)] text-xl mb-3">24/7 Support in 40 languages</h3>
              <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
                Customer service is at the heart of Voye Global&apos;s offerings. We provide 24/7 support to ensure that any issues you encounter are swiftly resolved, allowing you to enjoy your travels without connectivity worries.
              </p>
            </div>
            {/* Image — fills remaining height, contained and aligned bottom-right */}
            <div className="relative flex-1">
              <Image
                src="/home/choose3.png"
                alt="24/7 support in 40 languages"
                fill
                className="object-contain object-right-bottom"
                sizes="(max-width: 640px) 100vw, 50vw"
                loading="lazy"
              />
              {/* Icon buttons — centered vertically */}
              <div className="absolute start-22 top-1/2 -translate-y-1/2 grid grid-cols-2 gap-6">
                <div className="w-16 h-16 rounded-full bg-[var(--color-brand)] flex items-center justify-center shadow-md">
                  <PiPhoneCall className="w-9 h-9 text-white" aria-hidden="true" />
                </div>
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-md">
                  <RiWhatsappFill className="w-10 h-10 text-[#25D366]" aria-hidden="true" />
                </div>
                <div className="w-16 h-16 rounded-full bg-[#C5E0F5] flex items-center justify-center shadow-md">
                  <AiOutlineComment className="w-9 h-9 text-[var(--color-brand)]" aria-hidden="true" />
                </div>
                <div className="w-16 h-16 rounded-full bg-[var(--color-brand)] flex items-center justify-center shadow-md">
                  <IoMailOutline className="w-9 h-9 text-white" aria-hidden="true" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
