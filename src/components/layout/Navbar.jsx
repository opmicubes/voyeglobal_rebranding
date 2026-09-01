'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { LuGlobe, LuShoppingCart, LuX, LuMenu } from 'react-icons/lu';
import { FaRegCircleUser } from 'react-icons/fa6';

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-[200] bg-white border-b border-[var(--color-border)]">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 h-16 md:h-[72px] flex items-center gap-6">

        {/* Logo */}
        <Link href="/" className="flex-shrink-0" aria-label="Voye Global — home">
          <Image
            src="/home/voyelogo.svg"
            alt="Voye Global"
            width={90}
            height={37}
            priority
          />
        </Link>

        {/* Nav links — immediately after logo, left-aligned */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
          {['Plans', 'About', 'Support', 'Refer & Earn'].map((item) => (
            <Link
              key={item}
              href="#"
              className="text-sm font-medium text-[var(--color-text-primary)] hover:text-[var(--color-brand)] transition-colors whitespace-nowrap"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Spacer — pushes right icons to the end */}
        <div className="flex-1" />

        {/* Right icons group */}
        <div className="flex items-center gap-3 md:gap-4">

          {/* Language selector */}
          <button
            aria-label="Select language"
            className="hidden md:flex items-center bg-[#F2F2F2] px-2 py-1.5 rounded-full gap-1.5 text-sm font-medium text-[var(--color-text-primary)] hover:text-[var(--color-brand)] transition-colors"
          >
            <LuGlobe className="w-[18px] h-[18px] " aria-hidden="true" />
            <span>EN</span>
          </button>

          {/* Cart */}
          <button aria-label="Cart" className="hidden md:flex bg-[#F2F2F2] px-2 py-1.5 items-center justify-center w-9 h-9 rounded-full hover:bg-[var(--color-surface)] transition-colors text-[var(--color-text-primary)] hover:text-[var(--color-brand)]">
            <LuShoppingCart className="w-5 h-5" aria-hidden="true" />
          </button>

          {/* User */}
          <button aria-label="Account" className="hidden md:flex bg-[#F2F2F2] px-2 py-1.5 items-center justify-center w-9 h-9 rounded-full hover:bg-[var(--color-surface)] transition-colors text-[var(--color-text-primary)] hover:text-[var(--color-brand)]">
            <FaRegCircleUser className="w-5 h-5" aria-hidden="true" />
          </button>

          {/* Burger / Menu — visible on both desktop and mobile */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            className="flex items-center justify-center w-9 h-9 rounded-full bg-[#F2F2F2] px-2 py-1.5 rounded-full hover:bg-[var(--color-surface)] transition-colors text-[var(--color-text-primary)]"
          >
            {menuOpen ? <LuX className="w-[22px] h-[22px]" aria-hidden="true" /> : <LuMenu className="w-[22px] h-[22px]" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile / full menu drawer */}
      {menuOpen && (
        <div className="absolute top-full start-0 end-0 bg-white border-t border-[var(--color-border)] px-5 pb-5 pt-3 z-[199] shadow-md">
          <nav className="flex flex-col gap-4" aria-label="Menu">
            {['Plans', 'About', 'Support', 'Refer & Earn'].map((item) => (
              <Link key={item} href="#" className="text-base text-[var(--color-text-primary)] py-1 hover:text-[var(--color-brand)] transition-colors">
                {item}
              </Link>
            ))}
            <div className="flex items-center gap-4 pt-3 border-t border-[var(--color-border)]">
              <button className="flex items-center gap-1.5 text-sm font-medium text-[var(--color-text-secondary)]">
                <LuGlobe className="w-4 h-4" aria-hidden="true" />
                EN
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
