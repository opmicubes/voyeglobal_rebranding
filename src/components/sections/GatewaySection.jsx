import Image from 'next/image';

export function GatewaySection() {
  return (
    <section className="relative z-0 w-full">

      {/* Background image — full screen width */}
      <Image
        src="/home/sec3.png"
        alt="Traveler using Voye Global eSIM"
        fill
        className="object-cover object-center"
        sizes="100vw"
        loading="lazy"
      />

      {/* Right-side dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-l from-black/50 via-black/10 to-transparent" aria-hidden="true" />

      {/* Outer padding — matches PlansSection section px */}
      <div className="relative z-10 w-full px-4 md:px-8 py-20 min-h-[500px] md:min-h-[580px] flex items-center">
      {/* Inner centering — matches PlansSection inner div */}
      <div className="max-w-[1408px] mx-auto w-full">
      {/* White card */}
      <div className="w-full sm:w-[50%] lg:w-[650px] bg-white opacity-70 rounded-2xl p-6 md:p-9 flex flex-col justify-center gap-6 shadow-[var(--shadow-card)]">

        {/* Section 1 */}
        <div>
          <h2 className="text-[var(--color-text-dark)] font-semibold text-xl md:text-2xl leading-snug mb-3">
            Your Gateway to Seamless Global Connectivity
          </h2>
          <p className="text-[var(--color-text-primary)] text-sm leading-relaxed">
            In an age where staying connected is paramount, whether for business, leisure, or personal needs,{' '}
            <strong className="text-[var(--color-text-dark)] font-semibold">
              Voye Global stands out as a beacon of reliable, affordable, and easy-to-use connectivity solutions.
            </strong>
          </p>
        </div>

        {/* Divider */}
        <div className="h-px bg-[var(--color-border)]" aria-hidden="true" />

        {/* Section 2 */}
        <div>
          <h3 className="text-[var(--color-text-dark)] font-semibold text-lg leading-snug mb-3">
            What Voye Global Offers
          </h3>
          <p className="text-[var(--color-text-primary)] text-sm leading-relaxed">
            Voye Global simplifies global connectivity, making it accessible to everyone. Our eSIM (embedded SIM) transforms how travelers connect worldwide.
          </p>
        </div>
      </div>
      </div>
      </div>
    </section>
  );
}
