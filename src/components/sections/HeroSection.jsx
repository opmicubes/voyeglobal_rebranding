'use client';
import Image from 'next/image';
import { LuSearch } from 'react-icons/lu';

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-[#C7E1FA] to-[#EBF4FD] min-h-[254px] md:min-h-[680px] rounded-b-[40px] md:rounded-b-none overflow-visible">

      <div className="absolute inset-y-0 start-0 w-2/5 md:w-[38%] overflow-hidden" aria-hidden="true">
        <Image
          src="/home/hero1.png"
          alt=""
          fill
          sizes="38vw"
          className="object-cover object-center"
          priority
        />
      </div>

      <div className="absolute inset-y-0 end-0 w-2/5 md:w-[38%] overflow-hidden" aria-hidden="true">
        <Image
          src="/home/hero2.png"
          alt=""
          fill
          sizes="38vw"
          className="object-cover object-center"
          priority
        />
      </div>

      <div className="relative z-20 flex flex-col items-center justify-center text-center min-h-[254px] md:min-h-[680px] px-4 md:pb-16">
        <div className="mb-2 md:mb-4">
          <Image
            src="/home/voye.svg"
            alt="Voye Global"
            width={246}
            height={100}
            priority
            className="h-[29px] sm:h-[40px] md:h-[60px]  xl:h-[100px] w-auto"
          />
        </div>

        <h1 className="text-[var(--color-brand-dark)] leading-[1.1] text-[16px] sm:text-[30px] font-light md:font-medium xl:text-[60px]">
          Always Connected.
        </h1>

      </div>

      <div className="absolute bottom-0 start-1/2 -translate-x-1/2 translate-y-1/2 z-30 w-full max-w-2xl px-4">
        <div className="bg-white rounded-[var(--radius-pill)] px-3 py-2.5 md:px-5 md:py-3.5 flex items-center gap-3 shadow-[0_4px_24px_rgba(7,122,213,0.12),0_1px_4px_rgba(0,0,0,0.06)]">
          <LuSearch className="w-5 h-5 text-[var(--color-text-muted)] flex-shrink-0" aria-hidden="true" />
          <input
            type="text"
            placeholder="Heading next to?"
            className="flex-1 text-[22px] text-[var(--color-text-primary)] placeholder:text-[var(--color-text-secondary)] outline-none bg-transparent"
            aria-label="Search destination"
          />
        </div>
      </div>
    </section>
  );
}
