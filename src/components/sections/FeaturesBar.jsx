import { FaGift, FaHeadset, FaWifi, FaBolt, FaArrowUp, FaGlobe } from 'react-icons/fa';

const features = [
  { icon: <FaGift className="text-white w-5 h-5 flex-shrink-0" aria-hidden="true" />, label: '100MB Free Trial' },
  { icon: <FaHeadset className="text-white w-5 h-5 flex-shrink-0" aria-hidden="true" />, label: '24/7 Support' },
  { icon: <FaWifi className="text-white w-5 h-5 flex-shrink-0" aria-hidden="true" />, label: 'Hotspot Included' },
  { icon: <FaBolt className="text-white w-5 h-5 flex-shrink-0" aria-hidden="true" />, label: '5G Networks' },
  { icon: <FaArrowUp className="text-white w-5 h-5 flex-shrink-0" aria-hidden="true" />, label: 'Easy Top-Ups' },
  { icon: <FaGlobe className="text-white w-5 h-5 flex-shrink-0" aria-hidden="true" />, label: '1 eSIM, 130+ countries' },
];

export function FeaturesBar() {
  return (
    <div className="pt-20 md:pt-24 px-4 md:px-8">
      <div className="max-w-[1480px] mx-auto">
        <div className="bg-[var(--color-brand)] rounded-full px-8 py-3.5 overflow-x-auto">
          <ul className="flex items-center justify-between gap-x-6 min-w-max md:min-w-0">
            {features.map((f) => (
              <li key={f.label} className="flex items-center gap-2">
                {f.icon}
                <span className="text-white text-base font-medium whitespace-nowrap">{f.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
