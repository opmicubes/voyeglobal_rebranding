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
    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[var(--color-brand)]/10" aria-label="Yes">
      <LuCheck className="w-4 h-4 text-[var(--color-brand)]" aria-hidden="true" />
    </span>
  ) : (
    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[var(--color-surface-alt)]" aria-label="No">
      <LuX className="w-4 h-4 text-[var(--color-text-muted)]" aria-hidden="true" />
    </span>
  );
}

export function ComparisonSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <div className="text-center mb-12">
          <p className="text-[var(--color-accent)] text-sm font-semibold uppercase tracking-widest mb-3">
            VOY VS. OTHER ESIM SERVICE PROVIDERS
          </p>
        </div>

        <div className="overflow-x-auto rounded-[var(--radius-xl)] border border-[var(--color-border)] shadow-[var(--shadow-card)]">
          <table className="w-full min-w-[640px] bg-white">
            <thead>
              <tr>
                <th className="text-start ps-6 py-5 text-sm font-semibold text-[var(--color-text-secondary)] w-[40%]">Feature</th>
                {competitors.map((c, i) => (
                  <th key={c} className={`text-center py-5 px-4 text-base font-bold ${i === 0 ? 'text-[var(--color-brand)] bg-[var(--color-surface-blue)]' : 'text-[var(--color-text-secondary)]'}`}>
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
                    <td key={i} className={`text-center py-4 px-4 ${i === 0 ? 'bg-[var(--color-surface-blue)]/40' : ''}`}>
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
    </section>
  );
}
