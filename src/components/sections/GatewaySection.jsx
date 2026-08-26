import Image from 'next/image';

export function GatewaySection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-[1400px] mx-auto px-5 md:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="font-semibold text-[var(--color-text-dark)] leading-[var(--leading-snug)] mb-6 text-[var(--text-h2)]">
              Your Gateway to Seamless Global Connectivity
            </h2>
            <p className="text-[var(--text-xl)] text-[var(--color-text-primary)] leading-[var(--leading-relaxed)]">
              In an age where staying connected is paramount, whether for business, leisure, or personal needs, Voye Global stands out as your premier eSIM provider, offering unparalleled global coverage and convenience.
            </p>
          </div>
          <div className="relative rounded-[var(--radius-2xl)] overflow-hidden aspect-[4/3] bg-[var(--color-surface-blue)]">
            <Image
              src="/home/about1.svg"
              alt="Gateway to global connectivity"
              fill
              className="object-cover"
              loading="lazy"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative rounded-[var(--radius-2xl)] overflow-hidden aspect-[4/3] bg-[var(--color-surface-blue)] order-2 lg:order-1">
            <Image
              src="/home/about2.svg"
              alt="What Voye Global offers"
              fill
              className="object-cover"
              loading="lazy"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="font-semibold text-[var(--color-text-dark)] leading-[var(--leading-snug)] mb-6 text-[var(--text-h2)]">
              What Voye Global Offers
            </h2>
            <p className="text-[var(--text-xl)] text-[var(--color-text-primary)] leading-[var(--leading-relaxed)]">
              Voye Global simplifies global connectivity, making it accessible to everyone. Our eSIM (embedded SIM) transforms how travelers stay connected — no physical SIM cards, no roaming surprises, just seamless data wherever you go.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
