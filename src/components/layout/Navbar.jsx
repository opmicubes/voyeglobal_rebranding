'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { LuGlobe, LuShoppingCart, LuX, LuMenu } from 'react-icons/lu';
import { FaRegCircleUser } from 'react-icons/fa6';

export function Navbar({ logo, siteName = 'Home' }) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e) => { if (e.key === 'Escape') setMenuOpen(false); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  return (
    <header
      className="sticky top-0 z-[200] bg-white border-b border-[var(--color-border)]"
      onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget)) setMenuOpen(false); }}
    >
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 h-14 md:h-[60px] flex items-center gap-6">

        {/* Logo — brand asset if the site provides one, else a text wordmark */}
        <Link href="/" className="flex-shrink-0" aria-label={`${siteName} — home`}>
          {logo?.src ? (
            <Image
              src={logo.src}
              alt={logo.alt ?? siteName}
              width={logo.width ?? 80}
              height={logo.height ?? 25}
              priority
            />
          ) : (
            <span className="text-2xl font-bold text-[var(--color-brand)]">
              {siteName}
            </span>
          )}
        </Link>

        {/* Nav links — immediately after logo, left-aligned */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
          {['Plans', 'About', 'Support', 'Refer & Earn'].map((item) => (
            <Link
              key={item}
              href="#"
              className="text-base font-normal text-[var(--color-text-primary)] hover:text-[var(--color-brand)] transition-colors whitespace-nowrap"
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
            className="hidden md:flex items-center bg-[#F2F2F2] px-2 py-1.5 rounded-full gap-1.5 text-base font-semibold text-[var(--color-text-primary)] hover:text-[var(--color-brand)] transition-colors"
          >
            <LuGlobe className="w-[18px] h-[18px] " aria-hidden="true" />
            <span>EN</span>
          </button>

          {/* Cart */}
          <button aria-label="Cart" className="flex bg-[#F2F2F2] px-2 py-1.5 items-center justify-center w-[38px] h-[38px] rounded-full hover:bg-[var(--color-surface)] transition-colors text-[var(--color-text-primary)] hover:text-[var(--color-brand)]">
            <LuShoppingCart className="w-5 h-5" aria-hidden="true" />
          </button>

          {/* User */}
          <button aria-label="Account" className="flex bg-[#F2F2F2] px-2 py-1.5 items-center justify-center w-[38px] h-[38px] rounded-full hover:bg-[var(--color-surface)] transition-colors text-[var(--color-text-primary)] hover:text-[var(--color-brand)]">
            <FaRegCircleUser className="w-5 h-5" aria-hidden="true" />
          </button>

          {/* Burger / Menu — visible on both desktop and mobile */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            className="flex items-center justify-center w-9 h-9 rounded-full bg-[#F2F2F2] px-2 py-1.5 hover:bg-[var(--color-surface)] transition-colors text-[var(--color-text-primary)]"
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
