'use client';
import { useState, useEffect, useReducer } from 'react';
import Image from 'next/image';
import { LuChartBar, LuChevronUp, LuChevronDown } from 'react-icons/lu';
import { FaInfoCircle } from 'react-icons/fa';
import { fetchEsimProductsNewClient } from '@/lib/gql/queries/esimProductsNewClient';

function fetchReducer(state, action) {
  switch (action.type) {
    case 'FETCH_START': return { productData: null, loading: true, fetchError: false };
    case 'FETCH_SUCCESS': return { productData: action.payload, loading: false, fetchError: false };
    case 'FETCH_ERROR': return { productData: null, loading: false, fetchError: true };
    default: return state;
  }
}

function PlanCard({ plan }) {
  const priceStr = typeof plan.price === 'number' ? `${plan.price} USD` : (plan.price ?? '');

  // Parse speed only when unlimited_data_msg matches "X GB/ Day ..." pattern
  let speedAmount = null;
  let speedLabel = null;
  if (plan.unlimited_data_msg) {
    const match = plan.unlimited_data_msg.match(/^(\d[\d.]*\s*GB\s*\/\s*Day)\s*(.*)?$/i);
    if (match) {
      speedAmount = match[1].trim();
      speedLabel = match[2]?.trim() || 'High speed data';
    }
  }

  // Determine if plan.data already contains "GB" so we don't double-render it
  const dataRaw = String(plan.data ?? '');
  const dataHasGB = dataRaw.toUpperCase().includes('GB');
  const dataDisplay = dataHasGB ? dataRaw.replace(/GB/gi, '').trim() : dataRaw;

  // Determine if plan.valid_for already contains "Days"
  const validRaw = String(plan.valid_for ?? '');
  const validHasDays = validRaw.toLowerCase().includes('day');
  const validDisplay = validHasDays ? validRaw.replace(/days?/gi, '').trim() : validRaw.split(' ')[0];

  return (
    <div className="flex flex-col">
      {/* Top badge strip — two floating tabs above card */}
      <div className="flex items-end gap-0">
        <div className="bg-[#A8D9FF] rounded-tl-[6px] rounded-tr-[6px] px-3 py-1 ml-4">
          <span className="font-[600] text-[10px] md:text-[12px] leading-[12px] text-[#1A1A1A] uppercase tracking-wider">
            Popular Plan
          </span>
        </div>
        <div className="bg-[#F7F7F7] rounded-tl-[6px]  mr-4 rounded-tr-[6px] px-3 py-1 ms-auto">
          <span className="font-[600] text-[10px] md:text-[12px] leading-[12px] text-[#696983] uppercase tracking-wider">
            Previously Bought
          </span>
        </div>
      </div>

      {/* Gradient card body */}
      <div className="bg-gradient-to-r from-[#A8D9FF] from-[27%] to-[#F7F7F7] to-[55%] rounded-[16px] p-2 flex flex-col gap-2">

        {/* White inner specs box */}
        <div className="bg-white rounded-[12px] px-4 py-3 flex items-center justify-between gap-2">
          {/* Data label */}
          <div className="flex items-center gap-1 min-w-0">
            <span className="font-[600] text-[14px] md:text-[16px] leading-[22.4px] text-[#0B1215] truncate">
              {dataDisplay}
            </span>
            <span className="font-[400] text-[12px] md:text-[14px] leading-[19.6px] text-[#626364]">GB</span>
            <div className="w-[2px] h-[2px] rounded-full bg-[#0B1215] flex-shrink-0 mx-1" />
            <span className="font-[600] text-[14px] md:text-[16px] leading-[22.4px] text-[#0B1215] flex-shrink-0">
              {validDisplay}
            </span>
            <span className="font-[400] text-[12px] md:text-[14px] leading-[19.6px] text-[#626364] flex-shrink-0">
              Days
            </span>
          </div>
          {/* Price + Add */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <span className="font-[600] text-[14px] md:text-[16px] leading-[22.4px] text-[#0B1215]">
              {priceStr}
            </span>
            <button className="bg-[#077AD5] border border-[#077AD5] rounded-[8px] px-4 py-2 text-[#E6F2FB] font-[500] text-[13px] md:text-[14px] leading-5 hover:bg-[#066fc2] transition-colors">
              Add
            </button>
          </div>
        </div>

        {/* Speed strip — sits on gradient */}
        {speedAmount && (
          <div className="flex items-center gap-1 px-4 pb-1">
            <span className="font-[600] text-[13px] md:text-[16px] leading-[22.4px] text-[#0B1215]">
              {speedAmount}
            </span>
            {speedLabel && (
              <span className="font-[400] text-[12px] md:text-[14px] leading-[19.6px] text-[#626364]">
                {speedLabel}
              </span>
            )}
          </div>
        )}

      </div>
    </div>
  );
}

export function PlansListingSection({ category = 'japan' }) {
  const [activeTab, setActiveTab] = useState('Unlimited');
  const [noteOpen, setNoteOpen] = useState(true);
  const [{ productData, loading, fetchError }, dispatch] = useReducer(fetchReducer, {
    productData: null,
    loading: true,
    fetchError: false,
  });

  useEffect(() => {
    let cancelled = false;
    dispatch({ type: 'FETCH_START' });
    fetchEsimProductsNewClient({ category, place: 'local', language: 'en', currency: 'USD' })
      .then((res) => {
        if (!cancelled) {
          console.log('[EsimPage API] fetchEsimProductsNewClient raw:', res);
          dispatch({ type: 'FETCH_SUCCESS', payload: res });
        }
      })
      .catch(() => { if (!cancelled) dispatch({ type: 'FETCH_ERROR' }); });
    return () => { cancelled = true; };
  }, [category]);

  const rawPlans = activeTab === 'Unlimited'
    ? (productData?.unlimited_plan ?? [])
    : (productData?.normal_plan ?? []);

  return (
    <section className="bg-white py-8 md:py-16 px-4 md:px-8">

      {/* Two-column layout: photo left, content right */}
      <div className="flex flex-col md:flex-row gap-y-6 md:gap-x-[61px]">

        {/* LEFT — cherry blossom photo */}
        <div className="relative md:w-[40%] h-[280px] md:h-auto flex-shrink-0">
          <Image
            src="/plans/japan_hero.png"
            alt="Japan"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 40vw"
          />
        </div>

        {/* RIGHT — plan content */}
        <div className="flex-1 flex flex-col gap-10">

          {/* Japan header row */}
          <div className="flex items-center justify-between gap-4">
            {/* Flag + name */}
            <div className="flex items-center gap-4">
              {/* Japan flag: round, white bg + centered red circle, 1px black border */}
              <div className="w-[52px] h-[52px] md:w-[83px] md:h-[83px] rounded-full bg-white border border-[#E0E0E0] flex-shrink-0 flex items-center justify-center">
                <div className="w-[26px] h-[26px] md:w-[42px] md:h-[42px] rounded-full bg-[#bc002d]" />
              </div>
              <div className="flex flex-col gap-1">
                <p className="font-[700] text-[20px] md:text-[24px] leading-[39px] tracking-[-0.96px] text-black">
                  Japan
                </p>
                <span className="inline-flex items-center bg-[#F5F5F5] rounded-full px-3 py-0.5 text-[13px] md:text-[16px] leading-[39px] tracking-[-0.96px] text-black font-[400]">
                  {loading ? '...' : `${rawPlans.length} Plans`}
                </span>
              </div>
            </div>

            {/* Networks box */}
            <div className="hidden md:flex flex-col gap-2 bg-[#F7F7F7] rounded-[12px] px-6 py-3">
              <div className="flex items-center gap-2">
                <LuChartBar className="w-5 h-5 text-[#077AD5]" aria-hidden="true" />
                <span className="font-[700] text-[16px] leading-[22.4px] text-[#077AD5]">Networks</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="text-[14px] leading-[19.6px] text-[#333333] font-[400]">NTT DOCOMO, Inc.</span>
                <span className="bg-[#E6F2FB] rounded-full px-2.5 py-0.5 text-[11px] font-[700] leading-[16.5px] tracking-[0.3px] text-[#077AD5]">
                  5G, 4G, 3G
                </span>
                <button className="text-[13px] leading-[18.2px] text-[#077AD5] font-[400] underline">+2 Other</button>
              </div>
            </div>
          </div>

          {/* Tab bar */}
          <div className="bg-[#F7F7F7] rounded-full p-2 flex items-center gap-3">
            {['Fixed', 'Unlimited'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 text-center py-4 px-10 rounded-full text-[15px] md:text-[16px] font-[500] leading-6 transition-all ${
                  activeTab === tab
                    ? 'bg-[#0774D5] text-white'
                    : 'text-[#022847]'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Note accordion */}
          <div className="bg-[#F7F7F7] border border-[rgba(0,0,0,0.1)] rounded-[20px] overflow-hidden">
            {/* Header */}
            <div
              className="flex items-center justify-between px-6 py-3 border-b border-[#E5E7EB] cursor-pointer"
              onClick={() => setNoteOpen(!noteOpen)}
              role="button"
              tabIndex={0}
              aria-expanded={noteOpen}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setNoteOpen(!noteOpen);
                }
              }}
            >
              <div className="flex items-center gap-2">
                <FaInfoCircle className="w-[17px] h-[17px] text-[#077AD5]" aria-hidden="true" />
                <span className="font-[600] text-[16px] leading-[22.4px] text-[#2A2A2E]">Note:</span>
              </div>
              {noteOpen
                ? <LuChevronUp className="w-5 h-5 text-[#2A2A2E]" aria-hidden="true" />
                : <LuChevronDown className="w-5 h-5 text-[#2A2A2E]" aria-hidden="true" />
              }
            </div>
            {/* Body */}
            {noteOpen && (
              <div className="bg-white px-5 py-5">
                <ul className="list-disc text-[#2A2A2E] font-[400] text-[14px] md:text-[16px]">
                  <li className="ms-6 leading-[1.6] mb-0">
                    Unlimited plans include up to 3GB of high-speed data per day.
                  </li>
                  <li className="ms-6 leading-[1.6]">
                    If you exceed this limit your speed will be slowed down. However, it will still support basic functions like texting and GPS navigation. The data limit resets daily.
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Plan cards grid */}
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-x-3 md:gap-y-10">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex flex-col animate-pulse">
                  <div className="flex gap-0">
                    <div className="h-6 w-24 bg-[#A8D9FF] rounded-tl-[6px] rounded-tr-[6px]" />
                    <div className="h-6 w-28 bg-[#F0F0F0] rounded-tl-[6px] rounded-tr-[6px] ms-auto" />
                  </div>
                  <div className="bg-gradient-to-b from-[#A8D9FF] to-[#F7F7F7] rounded-[16px] p-2 flex flex-col gap-2">
                    <div className="bg-white rounded-[12px] h-14" />
                    <div className="h-6 px-4">
                      <div className="h-4 w-32 bg-[#c8e4f8] rounded" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : fetchError ? (
            <p className="text-center py-10 text-[var(--color-text-secondary)] text-[14px]">
              Could not load plans. Please try again.
            </p>
          ) : rawPlans.length === 0 ? (
            <p className="text-center py-10 text-[var(--color-text-secondary)] text-[14px]">
              No plans available.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-x-3 md:gap-y-10">
              {rawPlans.map((plan) => (
                <PlanCard key={plan.id ?? plan.name} plan={plan} />
              ))}
            </div>
          )}

        </div>
      </div>

    </section>
  );
}
