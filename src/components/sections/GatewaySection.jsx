import Image from 'next/image';

export function GatewaySection() {
  return (
    <section className="relative z-0 w-full">

      {/* Background image — mobile */}
      <Image
        src="/home/gateway-mob.png"
        alt=""
        fill
        className="object-cover object-top -z-10 md:hidden"
        sizes="100vw"
        aria-hidden="true"
      />

      {/* Background image — desktop */}
      <Image
        src="/home/sec3.png"
        alt="Traveler using Voye Global eSIM"
        fill
        className="object-cover object-center -z-10 hidden md:block"
        sizes="100vw"
        loading="lazy"
      />

      {/* Outer padding — matches PlansSection section px */}
      <div className="relative z-10 w-full pt-23 pb-7 px-5 md:px-8 min-h-[820px] md:min-h-[800px] flex items-start md:items-center">
      {/* Inner centering — matches PlansSection inner div */}
      <div className="max-w-[1408px] mx-auto w-full">
      {/* White card */}
      <div className="w-full md:w-[60%] lg:w-[650px] bg-white/50 backdrop-blur-[70px] border border-white/70 rounded-[20px] md:rounded-[20px] p-6 md:p-9 flex flex-col justify-center gap-5 md:gap-6">

        {/* Section 1 */}
        <div className="flex flex-col gap-2">
          <h2 className="text-[var(--color-text-dark)] font-medium md:font-medium text-[16.6px] md:text-[36px] leading-snug">
            Your Gateway to Seamless Global Connectivity
          </h2>
          <p className="text-[#2a2a2e] text-[12.5px] md:text-[22px] leading-relaxed">
            In an age where staying connected is paramount, whether for business, leisure, or personal needs,{' '}
            <strong className="text-[var(--color-text-dark)] font-semibold md:font-bold">
              Voye Global stands out as a beacon of reliable, affordable, and easy-to-use connectivity solutions.
            </strong>
          </p>
        </div>

        {/* Section 2 */}
        <div className="flex flex-col gap-2">
          <h3 className="text-[var(--color-text-dark)] font-medium md:font-medium text-[16.6px] md:text-[36px] leading-snug">
            What Voye Global Offers
          </h3>
          <p className="text-[#2a2a2e] text-[12.5px] md:text-[22px] leading-relaxed">
            Voye Global simplifies global connectivity, making it accessible to everyone. Our eSIM (embedded SIM) transforms how travelers connect worldwide.
          </p>
        </div>
      </div>
      </div>
      </div>
    </section>
  );
}
