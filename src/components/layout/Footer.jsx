import Image from 'next/image';
import Link from 'next/link';

const footerLinks = {
  Plans: ['Global eSIM', 'Regional eSIM', 'Family Plans', 'Cruise eSIM'],
  Company: ['About', 'Business Solutions', 'Become a Partner', 'Blog'],
  Support: ['Help Center', 'Supported Devices', 'Contact Us', 'Refer & Earn'],
  Legal: ['Terms of Service', 'Privacy Policy', 'Cookie Policy'],
  Resources: ['User Guides', 'FAQs', 'Community Forum', 'Webinars'],
  Account: ['Login', 'Register', 'Account Settings', 'Subscription Details'],
};

export function Footer() {
  return (
    <footer className="bg-[linear-gradient(to_bottom,_#FFFFFF_53%,_#BBE1FF_100%)] md:bg-[linear-gradient(to_bottom,_#FFFFFF_33%,_#BBE1FF_100%)]">
      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-5 md:px-16 pt-6 pb-2 md:pt-14 md:pb-12">
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
        <div className="grid grid-cols-2 md:grid-cols-5 gap-x-1.5 gap-y-10 md:gap-8 mb-10">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className={category === 'Legal' ? 'md:hidden' : ''}>
              <h3 className="text-[12.5px] md:text-[13px] font-bold text-[#033359] mb-4 uppercase tracking-widest">
                {category}
              </h3>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-[13.5px] md:text-sm text-[#626364] hover:text-[var(--color-brand)] transition-colors"
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
        <div className="border-t border-black/10 pt-6 flex flex-row items-center justify-between gap-3">
          <p className="text-[10.4px] md:text-[13px] text-[var(--color-text-secondary)]">© 2026 VOY. All rights reserved.</p>
          <p className="text-[10.4px] md:text-[13px] text-[var(--color-text-secondary)]">
            <Link href="#" className="hover:text-[var(--color-brand)] transition-colors">Terms</Link>
            {' · '}
            <Link href="#" className="hover:text-[var(--color-brand)] transition-colors">Privacy</Link>
            {' · '}
            <Link href="#" className="hover:text-[var(--color-brand)] transition-colors">Cookies</Link>
          </p>
        </div>
      </div>

      {/* Mobile skyline */}
      <div className="md:hidden w-full -mt-[140px]" aria-hidden="true">
        <Image
          src="/home/footer-vector.svg"
          alt=""
          width={800}
          height={280}
          sizes="100vw"
          priority
          className="w-full h-[280px] object-cover object-bottom"
        />
      </div>

      {/* Desktop skyline — fill approach inside positioned container */}
      <div className="hidden md:block relative w-full h-[400px] -mt-[200px]" aria-hidden="true">
        <Image
          src="/home/footer-vector.svg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-bottom"
        />
      </div>

    </footer>
  );
}
