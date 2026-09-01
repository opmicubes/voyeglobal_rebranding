'use client';
import { useState } from 'react';
import { LuChevronDown, LuChevronUp } from 'react-icons/lu';
import Link from 'next/link';

const faqs = [
  {
    question: "Can I use Voye's eSIM anywhere in the world?",
    answer: "Almost! Voye eSIM coverage reaches up to 130+ countries globally. If you're looking for a specific location, make sure you look it up first and see if we support it!\n\nFew notes:\nCruises between destinations are also supported- You can find the supported cruises here.\nSome locations have unstable network infrastructure, which might lead to a bad reception. For example the Sinay desert in Egypt is known for bad reception. While we will try to give you the best experience, we cannot vouch it for these areas.",
  },
  {
    question: 'Do all Mobile Devices support eSIM?',
    answer: 'Not all devices support eSIM. Most modern flagship smartphones from Apple, Samsung, Google, and other major brands support eSIM. Check our compatibility guide to verify your specific model.',
  },
  {
    question: 'How do I activate my eSIM?',
    answer: "After purchase, you'll receive a QR code by email. Go to your phone's SIM/Cellular settings, select \"Add eSIM\" or \"Add Data Plan,\" and scan the QR code. Activation takes under 5 minutes.",
  },
  {
    question: 'Can I use my eSIM and my regular SIM at the same time?',
    answer: 'Yes! Most eSIM-compatible phones support dual SIM, letting you keep your regular SIM for calls and texts while using the Voye eSIM for data abroad.',
  },
];

function FaqItem({ question, answer, open, onToggle }) {
  return (
    <div className="bg-[#f8f9fa] rounded-3xl p-5 md:p-10">
      <button
        onClick={() => onToggle()}
        aria-expanded={open}
        className="w-full text-start flex items-start justify-between gap-4 md:gap-16"
      >
        <span className="text-lg md:text-2xl font-semibold text-[#2a2a2e]">{question}</span>
        {open
          ? <LuChevronUp className="w-6 h-6 flex-shrink-0 mt-1 text-black" aria-hidden="true" />
          : <LuChevronDown className="w-6 h-6 flex-shrink-0 mt-1 text-black" aria-hidden="true" />
        }
      </button>
      {open && (
        <p className="mt-5 text-sm md:text-lg text-[#18191d] leading-relaxed whitespace-pre-line">
          {answer}
        </p>
      )}
    </div>
  );
}

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-[1228px] mx-auto px-4 md:px-8">
        <div className="flex items-center justify-center gap-4 mb-10">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-black/25" />
          <p className="text-[var(--color-text-dark)] text-base font-semibold uppercase tracking-widest whitespace-nowrap">FAQS</p>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-black/25" />
        </div>

        <div className="flex flex-col gap-3 mb-10">
          {faqs.map((faq, i) => (
            <FaqItem
              key={faq.question}
              {...faq}
              open={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>

        <div className="flex justify-center">
          <Link href="#" className="text-[#066fc2] text-base md:text-xl font-medium hover:underline">
            View All
          </Link>
        </div>
      </div>
    </section>
  );
}
