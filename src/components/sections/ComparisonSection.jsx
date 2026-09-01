import { LuCheck, LuX } from 'react-icons/lu';

const features = [
  'One eSIM for all supported destinations',
  '24/7 live chat support',
  'Free 100MB to try your eSIM at home',
  'Best-value unlimited plans',
  'Max. plan validity — Up to 365 days',
  'Real-time data usage alerts',
  'Family Plans',
  'Internet on cruises',
  'Full hotspot access on every plan',
  'Corporate / team plans',
];

const competitors = ['Voye', 'Yesim', 'Airalo', 'eSIM+'];

const checkData = {
  'One eSIM for all supported destinations': [true, false, false, false],
  '24/7 live chat support': [true, false, true, false],
  'Free 100MB to try your eSIM at home': [true, false, false, false],
  'Best-value unlimited plans': [true, true, false, true],
  'Max. plan validity — Up to 365 days': [true, false, false, false],
  'Real-time data usage alerts': [true, false, false, false],
  'Family Plans': [true, true, false, true],
  'Internet on cruises': [true, false, false, false],
  'Full hotspot access on every plan': [true, false, true, false],
  'Corporate / team plans': [true, false, false, true],
};

function Check({ yes }) {
  return yes ? (
    <LuCheck className="w-5 h-5 text-[var(--color-brand)]" aria-label="Yes" />
  ) : (
    <LuX className="w-5 h-5 text-[var(--color-text-muted)]" aria-label="No" />
  );
}

export function ComparisonSection() {
  return (
    <section className="pt-2">
      <div className="w-full rounded-[80px] bg-[linear-gradient(to_bottom,#EBF6FE00_1%,#ffffff_19%,#ffffff_71%,#B5DEFF_100%)] pb-12 md:pb-16">
        <div className="max-w-[1408px] mx-auto px-5 md:px-10">
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-black/25" />
          <p className="text-[var(--color-text-dark)] text-base font-semibold uppercase tracking-widest whitespace-nowrap">
            VOY VS. OTHER ESIM SERVICE PROVIDERS
          </p>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-black/25" />
        </div>

        <div className="overflow-x-auto rounded-[var(--radius-xl)]  shadow-[var(--shadow-card)]">
          <table className="w-full min-w-[640px] bg-white">
            <thead>
              <tr className="border-b border-[var(--color-border)]">
                <th className="text-start ps-6 py-5 text-sm font-semibold text-[var(--color-text-secondary)] w-[40%]">Feature</th>
                {competitors.map((c, i) => (
                  <th key={c} className={`text-center py-5 px-4 text-base font-bold ${i === 0 ? 'text-white bg-[#077AD5]' : 'text-[var(--color-text-secondary)]'}`}>
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--color-border)]">
              {features.map((feature) => (
                <tr key={feature} className="hover:bg-[var(--color-surface)]/50">
                  <td className="ps-6 py-4 text-base text-[var(--color-text-primary)] font-medium">{feature}</td>
                  {(checkData[feature] ?? [false, false, false, false]).map((val, i) => (
                    <td key={i} className={`text-center py-4 px-4 ${i === 0 ? 'bg-[#E6F2FB]' : ''}`}>
                      <div className="flex justify-center">
                        <Check yes={val} />
                      </div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        </div>
      </div>
    </section>
  );
}
