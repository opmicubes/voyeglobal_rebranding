'use client';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

function buildSearchList(devices) {
  const list = [];
  for (const d of devices) {
    for (const m of d.models ?? []) {
      list.push({ brand: d.brand, model: m });
    }
  }
  return list;
}

function DeviceSearch({ devices }) {
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);
  const wrapperRef = useRef(null);

  const [results, setResults] = useState([]);
  const allDevices = buildSearchList(devices);

  useEffect(() => {
    function handleClickOutside(e) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  function handleChange(e) {
    setQuery(e.target.value);
    if (e.target.value.trim() === '') {
      setOpen(false);
      setSearched(false);
      setResults([]);
    }
  }

  function triggerSearch() {
    setLoading(true);
    setSearched(true);
    setTimeout(() => {
      const q = query.trim().toLowerCase();
      const filtered = q.length > 0
        ? allDevices.filter(
            (d) =>
              d.model.toLowerCase().includes(q) ||
              d.brand.toLowerCase().includes(q)
          ).slice(0, 8)
        : [];
      setResults(filtered);
      setOpen(true);
      setLoading(false);
    }, 300);
  }

  return (
    <div>
      <p className="text-[12.5px] text-gray-600 mb-2">Search your device to check eSIM compatibility:</p>
      <div className="flex flex-col sm:flex-row gap-3 mb-4" ref={wrapperRef}>
        <div className="flex-1 relative">
          <input
            type="text"
            value={query}
            onChange={handleChange}
            onKeyDown={(e) => { if (e.key === 'Enter' && !loading) triggerSearch(); }}
            placeholder="Insert your model"
            className="w-full border border-[#c9ced4] bg-white rounded-[8.5px] md:rounded-[var(--radius-md)] px-4 py-1.5 md:py-3 text-[12.5px] md:text-[18px] text-[var(--color-text-primary)] placeholder:text-[#6b7280] outline-none focus-visible:border-[var(--color-brand)] focus-visible:ring-2 focus-visible:ring-[var(--color-brand)]/20 transition"
            aria-label="Search your phone model"
            autoComplete="off"
          />
          {open && results.length > 0 && (
            <ul className="absolute top-full start-0 end-0 z-50 mt-1 bg-white border border-[var(--color-border)] rounded-[var(--radius-md)] shadow-lg overflow-y-auto max-h-[240px]">
              {results.map((item, i) => (
                <li key={i} className="px-4 py-2.5 text-sm border-b border-[var(--color-border)] last:border-0">
                  <span className="font-medium text-[var(--color-text-dark)]">{item.model}</span>
                  <span className="text-[var(--color-text-muted)] ms-2">{item.brand}</span>
                </li>
              ))}
            </ul>
          )}
          {open && searched && results.length === 0 && query.trim().length > 0 && (
            <ul className="absolute top-full start-0 end-0 z-50 mt-1 bg-white border border-[var(--color-border)] rounded-[var(--radius-md)] shadow-lg">
              <li className="px-4 py-3 text-sm text-[var(--color-text-muted)]">No matching device found.</li>
            </ul>
          )}
        </div>
        <button
          onClick={triggerSearch}
          disabled={loading}
          className="bg-[var(--color-brand)] text-white font-semibold text-[12.5px] md:text-[18px] px-6 py-1.5 md:py-3 rounded-[var(--radius-md)] hover:bg-[var(--color-brand-dark)] transition-colors whitespace-nowrap disabled:opacity-70 flex items-center gap-2"
        >
          {loading && (
            <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" aria-hidden="true" />
          )}
          Check Now
        </button>
      </div>
      <Link href="#" className="text-[#1000F3] hover:underline text-[12.5px] md:text-base">
        Or check out the full list of supported devices →
      </Link>
    </div>
  );
}

export function PhoneSupportSection({ devices = [] }) {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-[1408px] mx-auto px-4 md:px-8">
        <div className="bg-[#fff4e2] rounded-[20px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch">
            <div className="p-5 md:px-14 md:py-16 flex flex-col justify-center">
              <h2 className="text-[#2a2a2e] text-[16.6px] font-normal md:text-[40px] md:font-bold leading-snug mb-4">
                Does my phone support eSIM?
              </h2>
              <p className="text-[#2a2a2e] text-[12.5px] md:text-[22px] mb-4 md:mb-8 leading-relaxed">
                Voye Global provides a comprehensive compatibility guide on their website to help you verify if your device can use their eSIM service.
              </p>

              <DeviceSearch devices={devices} />
            </div>

            <div className="relative min-h-[280px] lg:min-h-0 mt-6 overflow-hidden">
              <Image
                src="/home/phone-vector.svg"
                alt=""
                width={868}
                height={576}
                className="absolute bottom-0 end-0 z-0 max-w-none h-full w-auto"
                aria-hidden="true"
              />
              <Image
                src="/home/support.png"
                alt="Checking phone eSIM compatibility"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain object-right-bottom z-10"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
