import Image from 'next/image';
import { LuCheck } from 'react-icons/lu';

export function HowItWorksSection() {
  return (
    <section className="bg-[var(--color-surface)] py-16 md:py-20">
      <div className="max-w-[1408px] mx-auto px-4 md:px-8">

        <div className="flex items-center justify-center gap-4 mb-10">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-black/25" />
          <p className="text-[var(--color-text-dark)] text-base font-semibold uppercase tracking-widest whitespace-nowrap">
            HOW VOY&apos;S ESIM WORKS
          </p>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-black/25" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Step 1 */}
          <div className="relative bg-white rounded-2xl overflow-hidden flex flex-col shadow-[var(--shadow-subtle)] h-[420px]">
            <div className="p-6 pb-0 md:px-8 pt-8">
              <span className="bg-[var(--color-brand)] text-white text-sm font-semibold px-4 py-1.5 rounded-sm mb-5 inline-block">
                Step 1
              </span>
              <h3 className="font-bold text-[var(--color-text-dark)] text-lg mb-3">
                Select your plan
              </h3>
              <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
                Choose the ideal data and validity for your trip from Voye Global&apos;s flexible options.
              </p>
            </div>
            <div className="flex-1 min-h-0 px-5 pt-3">
              <div className="relative h-full min-h-52 rounded-t-xl overflow-hidden">
                <Image
                  src="/home/how-works.png"
                  alt="Select your plan"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="absolute bottom-0 inset-x-0 h-12 bg-gradient-to-t from-white to-transparent pointer-events-none" aria-hidden="true" />
          </div>

          {/* Step 2 */}
          <div className="relative bg-white rounded-2xl overflow-hidden flex flex-col shadow-[var(--shadow-subtle)] h-[420px]">
            <div className="p-6 md:p-8">
              <span className="bg-[var(--color-brand)] text-white text-sm font-semibold px-4 py-1.5 rounded-sm mb-5 inline-block">
                Step 2
              </span>
              <h3 className="font-bold text-[var(--color-text-dark)] text-lg mb-3">
                Install your eSIM
              </h3>
              <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
                Install your eSIM in just a few simple steps — no physical SIM card needed.
              </p>
            </div>
            <div className="flex-1 overflow-hidden px-5">
              <div className="w-4/6 mx-auto aspect-square bg-[#D4E9FF] rounded-xl flex flex-col items-center justify-center gap-3">
                <div className="w-16 h-16 rounded-full bg-[var(--color-brand)] flex items-center justify-center">
                  <LuCheck className="w-8 h-8 text-white" aria-hidden="true" />
                </div>
                <p className="text-[var(--color-text-dark)] font-semibold text-base">eSIM installed</p>
              </div>
            </div>
            <div className="absolute bottom-0 inset-x-0 h-12 bg-gradient-to-t from-white to-transparent pointer-events-none" aria-hidden="true" />
          </div>

          {/* Step 3 */}
          <div className="relative bg-white rounded-2xl overflow-hidden flex flex-col shadow-[var(--shadow-subtle)] h-[420px]">
            <div className="p-6 pb-0 md:px-8 pt-8">
              <span className="bg-[var(--color-brand)] text-white text-sm font-semibold px-4 py-1.5 rounded-sm mb-5 inline-block">
                Step 3
              </span>
              <h3 className="font-bold text-[var(--color-text-dark)] text-lg mb-3">
                Activate &amp; enjoy your trip
              </h3>
              <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
                • Activate your plan, connect to the local network, and start enjoying seamless coverage from the moment you land.
              </p>
            </div>
            <div className="flex-1 min-h-0 px-5 pt-3">
              <div className="relative h-full min-h-52 rounded-t-xl overflow-hidden">
                <Image
                  src="/home/how-works3.png"
                  alt="Activate your eSIM"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="absolute bottom-0 inset-x-0 h-12 bg-gradient-to-t from-white to-transparent pointer-events-none" aria-hidden="true" />
          </div>

        </div>
      </div>
    </section>
  );
}
