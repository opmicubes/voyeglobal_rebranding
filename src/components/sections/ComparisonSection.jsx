import {  LuX } from 'react-icons/lu';
import { GiCheckMark} from 'react-icons/gi';


const features = [
  'One eSIM for all supported destinations',
  '24/7 live chat support',
  'Free 100MB to try your eSIM at home',
  'Best-value unlimited plans',
  'Max. plan validity',
  'Real-time data usage alerts to your personal phone number',
  'Family Plans',
  'Internet on cruises',
  'Full hotspot access on every plan',
  'Corporate / team plans',
];

const competitors = ['Voye', 'Airalo', 'Holafly', 'Nomad', 'Saily', 'Ubigi'];

const checkData = {
  'One eSIM for all supported destinations': [true, false, false, false, false, false],
  '24/7 live chat support':                  [true, true,  true,  true,  true,  false],
  'Free 100MB to try your eSIM at home':     [true, false, false, false, false, false],
  'Best-value unlimited plans':              [true, false, true,  false, false, false],
  'Real-time data usage alerts to your personal phone number': [true, false, false, false, false, false],
  'Family Plans':                            [true, false, false, false, false, false],
  'Internet on cruises':                     [true, false, false, true,  true,  true],
  'Full hotspot access on every plan':       [true, true,  true,  false, true,  true],
  'Corporate / team plans':                  [true, true,  false, false, false, false],
};

// Rows that show text values instead of check/cross icons
const textData = {
  'Max. plan validity': Array(6).fill('Up to 365 days'),
};

function Check({ yes }) {
  return yes ? (
    <GiCheckMark className="w-5 h-5 text-[var(--color-brand)]" aria-label="Yes" />
  ) : (
    <LuX className="w-5 h-5 text-gray-300" aria-label="No" />
  );
}

export function ComparisonSection() {
  return (
    <section className="pt-2">
      <div className="w-full rounded-[40px] md:rounded-[80px] bg-[linear-gradient(to_bottom,#EBF6FE00_1%,#ffffff_19%,#ffffff_51%,#B5DEFF_100%)] pb-12 md:pb-16">
        <div className="max-w-[1408px] mx-auto px-5 md:px-10">
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-black/25" />
          <p className="text-[var(--color-text-dark)] text-[12.4px] md:text-[24px] font-normal md:font-medium uppercase tracking-widest whitespace-nowrap">
            VOY VS. OTHER ESIM SERVICE PROVIDERS
          </p>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-black/25" />
        </div>

        <div className="overflow-x-auto rounded-[var(--radius-xl)]  shadow-[var(--shadow-card)]">
          <table className="w-full min-w-[640px] bg-white">
            <thead>
              <tr className="border-b border-[var(--color-border)]">
                <th className="text-start ps-6 py-5 text-[10.4px] md:text-[14px] font-normal text-[#1a1a2e] min-w-[14rem]">Feature</th>
                {competitors.map((c, i) => (
                  <th key={c} className={`text-center py-5 px-4 min-w-[10rem] ${i === 0 ? 'bg-[#077AD5]' : 'text-[var(--color-text-secondary)]'}`}>
                    <span className={`text-[14.9px] md:text-[20px] font-semibold ${i === 0 ? 'text-[#e8e8e8]' : ''}`}>{c}</span>
                    {i === 0 && <div className="text-[11.9px] md:text-[16px] font-normal mt-0.5 text-[#e8e8e8]/80">★ Best Choice</div>}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--color-border)]">
              {features.map((feature) => (
                <tr key={feature} className="hover:bg-[var(--color-surface)]/50">
                  <td className="ps-6 py-4 text-[12.5px] md:text-[18px] text-[#1a1a2e] font-medium">{feature}</td>
                  {textData[feature]
                    ? textData[feature].map((val, i) => (
                        <td key={i} className={`text-center py-4 px-4 ${i === 0 ? 'bg-[#E6F2FB]' : ''}`}>
                          <span className={`text-[12.5px] md:text-[16px] font-medium ${i === 0 ? 'text-[#077AD5]' : 'text-[var(--color-text-secondary)]'}`}>{val}</span>
                        </td>
                      ))
                    : (checkData[feature] ?? [false, false, false, false, false, false]).map((val, i) => (
                        <td key={i} className={`text-center py-4 px-4 ${i === 0 ? 'bg-[#E6F2FB]' : ''}`}>
                          <div className="flex justify-center">
                            <Check yes={val} />
                          </div>
                        </td>
                      ))
                  }
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
