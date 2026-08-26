import Link from 'next/link';

const steps = [
  {
    number: '01',
    label: 'Step 1',
    title: 'Select your plan',
    description: "Browse Voye Global's flexible plans — country, regional, or global — and choose the data and validity that fits your trip.",
  },
  {
    number: '02',
    label: 'Step 2',
    title: 'Install your eSIM',
    description: "After purchase, scan the QR code in your phone's SIM settings to install your eSIM instantly — no physical card needed.",
  },
  {
    number: '03',
    label: 'Step 3',
    title: 'Activate & enjoy your trip',
    description: 'Enable your Voye eSIM when you arrive and enjoy seamless, high-speed connectivity across 130+ countries from day one.',
  },
];

export function HowItWorksSection() {
  return (
    <section className="bg-[var(--color-surface)] py-16 md:py-20">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <div className="bg-[var(--color-surface-blue)] rounded-[var(--radius-2xl)] px-8 md:px-16 py-14">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-14">
            <div>
              <p className="text-[var(--color-accent)] text-sm font-semibold uppercase tracking-widest mb-3">
                HOW IT WORKS
              </p>
              <h2 className="font-semibold text-[var(--color-brand-dark)] leading-[var(--leading-snug)] text-[var(--text-h2)]">
                How Voy&apos;s eSIM Works
              </h2>
            </div>
            <Link href="#" className="text-[var(--color-brand)] text-base font-semibold border border-[var(--color-brand)] px-6 py-2.5 rounded-[var(--radius-pill)] hover:bg-[var(--color-brand)] hover:text-white transition-all self-start md:self-auto whitespace-nowrap">
              More About Voy →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-8 start-[16.666%] end-[16.666%] h-0.5 bg-[var(--color-brand)]/30 z-0" aria-hidden="true" />

            {steps.map((step) => (
              <div key={step.number} className="relative z-10 bg-white rounded-2xl p-6 shadow-[var(--shadow-subtle)] text-center md:text-start">
                <div className="flex items-center justify-center md:justify-start gap-4 mb-6">
                  <div className="w-16 h-16 bg-[var(--color-brand)] rounded-full flex items-center justify-center shadow-[var(--shadow-brand)] flex-shrink-0">
                    <span className="text-white font-bold text-lg">{step.number}</span>
                  </div>
                  <span className="text-base font-semibold text-[var(--color-brand)] border border-[var(--color-brand)]/30 px-3 py-1 rounded-[var(--radius-pill)] bg-white/60">
                    {step.label}
                  </span>
                </div>
                <h3 className="font-semibold text-[var(--color-brand-dark)] mb-3 text-[var(--text-h5)]">
                  {step.title}
                </h3>
                <p className="text-[var(--color-text-secondary)] text-base leading-[var(--leading-relaxed)]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
