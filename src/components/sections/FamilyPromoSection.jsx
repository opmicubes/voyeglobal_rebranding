import Image from 'next/image';
import Link from 'next/link';
import { LuGlobe, LuChevronRight } from 'react-icons/lu';

export function FamilyPromoSection() {
  return (
    <section className="bg-white py-8 md:py-12 px-4 md:px-8">
      <div className="max-w-[1331px] mx-auto">
        <div className="isolate rounded-[30px] bg-[#F7F7F7] md:rounded-[60px] overflow-hidden flex flex-col md:flex-row mb-4 md:mb-6">
          <div className="md:shrink-0 p-6 md:p-10 flex flex-col justify-center">
            <p className="mb-0">
              <span className="text-[20px] md:text-[32px] font-normal text-[#1a1a1a]">Traveling with </span>
              <span className="text-[20px] md:text-[32px] font-bold text-[#077AD5]">Family?</span>
            </p>
            <Link
              href="#"
              className="mt-4 inline-flex w-fit bg-[#077AD5] text-white text-[13px] md:text-[15px] font-semibold px-5 py-2.5 rounded-full hover:bg-[#066fc2] transition-colors"
            >
              Explore Family Plans
            </Link>
          </div>
          <div className="flex-1 w-full overflow-hidden max-h-[240px] md:max-h-[320px]">
            <Image
              src="/plans/family_travels.png"
              alt="Family travel"
              width={0}
              height={0}
              className="w-full h-auto block"
              priority
              sizes="(max-width: 768px) 100vw, 70vw"
            />
          </div>
        </div>

        <div className="bg-[#e8f4ff] rounded-[16px] md:rounded-[20px] p-4 md:p-6">
          <p className="text-[14px] md:text-[18px] font-semibold text-[#1a1a1a] mb-4 text-center">
            Stay Connected Beyond Japan with Regional &amp; Global eSIM Plans
          </p>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white rounded-[12px] px-4 py-3 flex items-center justify-between cursor-pointer hover:shadow-sm transition-shadow">
              <div className="flex items-center gap-3">
                <LuGlobe className="text-[#077AD5] w-5 h-5 flex-shrink-0" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-[14px] text-[#1a1a1a]">Asia</p>
                  <p className="text-[12px] text-[#666]">Starting at $3.99</p>
                </div>
              </div>
              <LuChevronRight className="w-4 h-4 text-[#555]" aria-hidden="true" />
            </div>
            <div className="bg-white rounded-[12px] px-4 py-3 flex items-center justify-between cursor-pointer hover:shadow-sm transition-shadow">
              <div className="flex items-center gap-3">
                <LuGlobe className="text-[#077AD5] w-5 h-5 flex-shrink-0" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-[14px] text-[#1a1a1a]">Global</p>
                  <p className="text-[12px] text-[#666]">Starting at $3.99</p>
                </div>
              </div>
              <LuChevronRight className="w-4 h-4 text-[#555]" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
