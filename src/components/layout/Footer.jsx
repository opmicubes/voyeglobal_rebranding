import Image from 'next/image';

const footerLinks = {
  Plans: ['Global Plans', 'Regional Plans', 'Country Plans', 'Family Plans', 'Cruise Plans'],
  Company: ['About', 'Business Solutions', 'Become a Partner', 'Blog'],
  Support: ['Help Center', 'Supported Devices', 'Contact Us', 'Refer & Earn'],
  Resources: ['User Guides', 'FAQs', 'Community Forum', 'Webinars'],
  Account: ['Login', 'Register', 'Account Settings', 'Subscription Details'],
};

export function Footer() {
  return (
    <footer className="relative bg-[var(--color-surface-blue)] border-t border-[var(--color-border)] overflow-hidden">
      {/* Skyline background image — positioned at bottom */}
      <div className="absolute bottom-0 start-0 end-0 h-48 md:h-64 pointer-events-none" aria-hidden="true">
        <Image
          src="/home/footer.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-bottom"
        />
      </div>

      {/* Footer content — above the skyline */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-5 md:px-10 pt-14 pb-52 md:pb-64">
        {/* Logo */}
        <div className="mb-12">
          <Image
            src="/home/voyelogo.svg"
            alt="Voye Global"
            width={175}
            height={71}
          />
        </div>

        {/* Links grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-[13px] font-bold text-[var(--color-text-dark)] mb-4 uppercase tracking-wide">
                {category}
              </h3>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-[var(--color-text-primary)] hover:text-[var(--color-brand)] transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[var(--color-border)] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[13px] text-[var(--color-text-primary)]">© 2026 VOY. All rights reserved.</p>
          <p className="text-[13px] text-[var(--color-text-primary)]">Terms · Privacy · Cookies</p>
        </div>
      </div>
    </footer>
  );
}
