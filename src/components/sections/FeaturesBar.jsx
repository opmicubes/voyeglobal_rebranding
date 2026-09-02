import { FaGift, FaHeadset, FaWifi, FaBolt, FaArrowUp, FaGlobe } from 'react-icons/fa';

const features = [
  { icon: <FaGift className="text-white w-3 h-3 md:w-5 md:h-5 flex-shrink-0" aria-hidden="true" />, label: '100MB Free Trial' },
  { icon: <FaHeadset className="text-white w-3 h-3 md:w-5 md:h-5 flex-shrink-0" aria-hidden="true" />, label: '24/7 Support' },
  { icon: <FaBolt className="text-white w-3 h-3 md:w-5 md:h-5 flex-shrink-0" aria-hidden="true" />, label: '5G Networks' },
  { icon: <FaWifi className="text-white w-3 h-3 md:w-5 md:h-5 flex-shrink-0" aria-hidden="true" />, label: 'Hotspot Included' },
  { icon: <FaGlobe className="text-white w-3 h-3 md:w-5 md:h-5 flex-shrink-0" aria-hidden="true" />, label: '1 eSIM 130+ countries' },
  { icon: <FaArrowUp className="text-white w-3 h-3 md:w-5 md:h-5 flex-shrink-0" aria-hidden="true" />, label: 'Easy Top-Ups' },
];

export function FeaturesBar() {
  return (
    <div className="pt-20 md:pt-24 px-4 md:px-8">
      <div className="max-w-[1480px] mx-auto">
        <div className="bg-[var(--color-brand)] rounded-[20px] md:rounded-full px-3 md:px-8 py-1.5 md:py-3.5">
          <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5 md:flex md:flex-nowrap md:items-center md:justify-between md:gap-x-6 md:gap-y-0">
            {features.map((f) => (
              <li key={f.label} className="flex items-center gap-2">
                {f.icon}
                <span className="text-white text-[10.4px] md:text-base font-normal md:font-medium whitespace-nowrap">{f.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
