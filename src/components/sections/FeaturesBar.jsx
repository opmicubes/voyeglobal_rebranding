import { FaGift, FaHeadset, FaWifi, FaBolt, FaArrowUp, FaGlobe } from 'react-icons/fa';

const features = [
  { icon: <FaGift className="text-white w-3 h-3 xl:w-5 xl:h-5 flex-shrink-0" aria-hidden="true" />, label: '100MB Free Trial' },
  { icon: <FaHeadset className="text-white w-3 h-3 xl:w-5 xl:h-5 flex-shrink-0" aria-hidden="true" />, label: '24/7 Support' },
  { icon: <FaWifi className="text-white w-3 h-3 xl:w-5 xl:h-5 flex-shrink-0" aria-hidden="true" />, label: 'Hotspot Included' },
  { icon: <FaBolt className="text-white w-3 h-3 xl:w-5 xl:h-5 flex-shrink-0" aria-hidden="true" />, label: '5G Networks' },
  { icon: <FaArrowUp className="text-white w-3 h-3 xl:w-5 xl:h-5 flex-shrink-0" aria-hidden="true" />, label: 'Easy Top-Ups' },
  { icon: <FaGlobe className="text-white w-3 h-3 xl:w-5 xl:h-5 flex-shrink-0" aria-hidden="true" />, label: '1 eSIM 130+ countries' },
];

export function FeaturesBar() {
  return (
    <div className="pt-14 md:pt-18 px-4 md:px-6 xl:px-8">
      <div className="max-w-[1480px] mx-auto">
        <div className="bg-[var(--color-brand)] rounded-[20px] xl:rounded-full px-3 xl:px-8 py-1.5 xl:py-3.5">
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-2.5 xl:flex xl:flex-nowrap xl:items-center xl:justify-between xl:gap-x-0 xl:gap-y-0">
            {features.flatMap((f, i) => [
              i > 0 && (
                <li key={`sep-${i}`} className="hidden xl:block w-px h-5 bg-white/40 flex-shrink-0" aria-hidden="true" />
              ),
              <li key={f.label} className="flex items-center gap-2">
                {f.icon}
                <span className="text-white text-[10px] xl:text-[20px] md:text-[16px] whitespace-nowrap">{f.label}</span>
              </li>,
            ]).filter(Boolean)}
          </ul>
        </div>
      </div>
    </div>
  );
}
