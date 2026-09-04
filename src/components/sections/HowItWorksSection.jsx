'use client';
import { useState } from 'react';
import Image from 'next/image';
import { LuCheck } from 'react-icons/lu';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

const steps = [
  { id: 'step1' },
  { id: 'step2' },
  { id: 'step3' },
];

function Step1Card() {
  return (
    <div className="relative bg-white rounded-[24px] overflow-hidden flex flex-col shadow-[var(--shadow-subtle)] h-[420px]">
      <div className="p-6 pb-0 md:px-5 pt-8">
        <span className="bg-[var(--color-brand)] text-[#e9ebee] md:text-white text-[12px] font-medium md:text-[18px] md:font-medium px-4 py-1.5 rounded-[10px] md:rounded-[16px] mb-6 inline-block">
          Step 1
        </span>
        <h3 className="font-bold md:font-semibold text-[#2a2a2e] text-[14.6px] md:text-[20px] mb-4">
          Select your plan
        </h3>
        <p className="text-[#3f4043] text-[12px] md:text-[18px] leading-relaxed">
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
  );
}

function Step2Card() {
  return (
    <div className="relative bg-white rounded-[24px] overflow-hidden flex flex-col shadow-[var(--shadow-subtle)] h-[420px]">
      <div className="p-6 md:pt-8 md:px-5">
        <span className="bg-[var(--color-brand)] text-[#e9ebee] md:text-white text-[12px] font-medium md:text-[18px] md:font-medium px-4 py-1.5 rounded-[10px] md:rounded-[16px] mb-6 inline-block">
          Step 2
        </span>
        <h3 className="font-bold md:font-semibold text-[#2a2a2e] text-[14.6px] md:text-[20px] mb-4">
          Install your eSIM
        </h3>
        <p className="text-[#3f4043] text-[12px] md:text-[18px] leading-relaxed">
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
  );
}

function Step3Card() {
  return (
    <div className="relative bg-white rounded-[24px] overflow-hidden flex flex-col shadow-[var(--shadow-subtle)] h-[420px]">
      <div className="p-6 pb-0 md:px-5 pt-8">
        <span className="bg-[var(--color-brand)] text-[#e9ebee] md:text-white text-[12px] font-medium md:text-[18px] md:font-medium px-4 py-1.5 rounded-[10px] md:rounded-[16px] mb-6 inline-block">
          Step 3
        </span>
        <h3 className="font-bold md:font-semibold text-[#2a2a2e] text-[14.6px] md:text-[20px] mb-4">
          Activate &amp; enjoy your trip
        </h3>
        <p className="text-[#3f4043] text-[12px] md:text-[18px] leading-relaxed">
          Activate your plan, connect to the local network, and start enjoying seamless coverage from the moment you land.
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
  );
}

const STEP_COMPONENTS = [Step1Card, Step2Card, Step3Card];

export function HowItWorksSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const [sliderRef] = useKeenSlider({
    loop: false,
    mode: 'snap',
    slides: { perView: 1, spacing: 0 },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  return (
    <section className="bg-[#f7f7f7] px-5 pt-24 pb-10 -mt-[4rem] md:px-0 md:pt-28 md:pb-16">
      <div className="max-w-[1408px] mx-auto md:px-8">

        <div className="flex items-center justify-center gap-4 mb-10">
          <div style={{ background: 'linear-gradient(to-right, transparent, #000000/25)' }} className="flex-1 h-px bg-gradient-to-r from-transparent to-black/25" />
          <p className="text-[var(--color-text-dark)] text-[12.4px] md:text-[24px] font-normal md:font-medium uppercase tracking-widest whitespace-nowrap">
            HOW VOY&apos;S ESIM WORKS
          </p>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-black/25" />
        </div>

        {/* Mobile slider */}
        <div className="md:hidden">
          <div ref={sliderRef} className="keen-slider">
            {STEP_COMPONENTS.map((Step, i) => (
              <div key={i} className="keen-slider__slide">
                <Step />
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-2 mt-4">
            {steps.map((_, i) => (
              <span
                key={i}
                className={`block rounded-full transition-all duration-300 ${
                  currentSlide === i
                    ? 'w-1.5 h-1.5 bg-[#1491f8]'
                    : 'w-1.5 h-1.5 bg-[#393939]/20'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Desktop grid */}
        <div className="hidden md:grid grid-cols-3 md:gap-5">
          <Step1Card />
          <Step2Card />
          <Step3Card />
        </div>

      </div>
    </section>
  );
}
