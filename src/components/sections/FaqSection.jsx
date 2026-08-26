'use client';
import { useState } from 'react';
import { LuChevronDown } from 'react-icons/lu';

const faqs = [
  {
    question: "Can I use Voye's eSIM anywhere in the world?",
    answer: "Almost! Voye eSIM coverage reaches up to 130+ countries globally. If you're looking for a specific location, make sure you check our coverage map or contact our support team for the latest destination updates.",
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

function FaqItem({ question, answer }) {
  const [open, setOpen] = useState(false);
  const id = question.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');

  return (
    <div className="border border-[var(--color-border)] rounded-[var(--radius-lg)] overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={id}
        className="w-full text-start px-6 py-5 flex items-center justify-between gap-4 hover:bg-[var(--color-surface)] transition-colors"
      >
        <span className="text-base md:text-lg font-semibold text-[var(--color-text-dark)]">{question}</span>
        <span className={`flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-brand)] transition-transform ${open ? 'rotate-180' : ''}`} aria-hidden="true">
          <LuChevronDown className="w-3 h-3" aria-hidden="true" />
        </span>
      </button>
      {open && (
        <div id={id} className="px-6 pb-5">
          <p className="text-base text-[var(--color-text-secondary)] leading-[var(--leading-relaxed)]">{answer}</p>
        </div>
      )}
    </div>
  );
}

export function FaqSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-[1400px] mx-auto px-5 md:px-20">
        <div className="text-center mb-12">
          <p className="text-[var(--color-accent)] text-sm font-semibold uppercase tracking-widest mb-3">FAQs</p>
          <h2 className="font-semibold text-[var(--color-text-dark)] text-[var(--text-h2)]">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="max-w-3xl mx-auto flex flex-col gap-4">
          {faqs.map((faq) => (
            <FaqItem key={faq.question} {...faq} />
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <a href="#" className="text-[var(--color-brand)] text-base font-semibold border border-[var(--color-brand)] px-8 py-3 rounded-[var(--radius-pill)] hover:bg-[var(--color-brand)] hover:text-white transition-all">
            View All FAQs
          </a>
        </div>
      </div>
    </section>
  );
}
