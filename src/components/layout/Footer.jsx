import Image from 'next/image';
import Link from 'next/link';

const footerLinks = {
  Plans: ['Global Plans', 'Regional Plans', 'Country Plans', 'Family Plans', 'Cruise Plans'],
  Company: ['About', 'Business Solutions', 'Become a Partner', 'Blog'],
  Support: ['Help Center', 'Supported Devices', 'Contact Us', 'Refer & Earn'],
  Resources: ['User Guides', 'FAQs', 'Community Forum', 'Webinars'],
  Account: ['Login', 'Register', 'Account Settings', 'Subscription Details'],
};

export function Footer() {
  return (
    <footer className="relative bg-white overflow-hidden">
      {/* Landmark skyline — fixed pixel height so absolute % collapse bug doesn't apply */}
      <div className="absolute bottom-0 start-0 end-0 h-72 md:h-150 pointer-events-none" aria-hidden="true">
        <Image
          src="/home/footer1.png"
          alt=""
          fill
          sizes="100vw"
          priority
          className="object-cover object-bottom"
        />
        <div className="absolute inset-x-0 top-0 h-2/5 bg-gradient-to-b from-white to-transparent" aria-hidden="true" />
      </div>

      {/* Content — z-10 sits above image; pb-56 md:pb-80 lets image top overlap with content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-8 md:px-16 pt-14 pb-56 md:pb-60">
        {/* Logo — centered */}
        <div className="flex justify-center mb-16">
          <Image
            src="/home/voyelogo.svg"
            alt="Voye Global"
            width={175}
            height={71}
          />
        </div>

        {/* Nav columns */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-10">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-[13px] font-bold text-[var(--color-text-dark)] mb-4 uppercase tracking-widest">
                {category}
              </h3>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-sm text-[var(--color-text-primary)] hover:text-[var(--color-brand)] transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-black/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[13px] text-[var(--color-text-secondary)]">© 2026 VOY. All rights reserved.</p>
          <p className="text-[13px] text-[var(--color-text-secondary)]">
            <Link href="#" className="hover:text-[var(--color-brand)] transition-colors">Terms</Link>
            {' · '}
            <Link href="#" className="hover:text-[var(--color-brand)] transition-colors">Privacy</Link>
            {' · '}
            <Link href="#" className="hover:text-[var(--color-brand)] transition-colors">Cookies</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
