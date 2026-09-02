'use client';
import { useState } from 'react';
import { LuX } from 'react-icons/lu';
export function AnnouncementBar() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="bg-[#033359] text-white text-[12px] md:text-sm py-2 md:py-2.5 px-4 flex items-center justify-center gap-2">
      <p className="text-center">
        ⚡ Use coupon code{' '}
        <span className="font-semibold bg-white text-[var(--color-brand)] px-1.5 py-0.5 rounded text-xs mx-1">
          APP15
        </span>{' '}
        for 15% off first order!
      </p>
      <button
        onClick={() => setVisible(false)}
        aria-label="Dismiss announcement"
        className="flex-shrink-0 text-white/70 hover:text-white transition-colors p-1"
      >
        <LuX className="w-4 h-4" aria-hidden="true" />
      </button>
    </div>
  );
}
