'use client';
import { useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import Image from 'next/image';
import Link from 'next/link';

const slides = [
  {
    id: 1,
    line1: 'Ready when you are.',
    line2: "Let's VOY.",
    description: 'Test your eSIM at home today — it takes less time than boarding.',
    ctaPrimary: { label: 'Get a Plan', href: '#' },
    ctaSecondary: { label: 'Test at Home', href: '#' },
    image: '/home/view1.png',
    gradient: 'cta-overlay-1',
  },
  {
    id: 2,
    line1: 'Always Connected.',
    line2: 'Explore 130+ Countries.',
    description: 'One eSIM. Every destination. Instant activation — no physical SIM card needed.',
    ctaPrimary: { label: 'View Plans', href: '#' },
    ctaSecondary: { label: 'Learn More', href: '#' },
    image: '/home/view2.svg',
    gradient: 'cta-overlay-2',
  },
];

const displaySlides = [...slides, ...slides];

function AutoplayPlugin(slider) {
  let timeout;
  let mouseOver = false;

  function clearNextTimeout() {
    clearTimeout(timeout);
  }

  function nextTimeout() {
    clearTimeout(timeout);
    if (mouseOver) return;
    timeout = setTimeout(() => slider.next(), 5000);
  }

  slider.on('created', () => {
    slider.container.addEventListener('mouseover', () => {
      mouseOver = true;
      clearNextTimeout();
    });
    slider.container.addEventListener('mouseout', () => {
      mouseOver = false;
      nextTimeout();
    });
    nextTimeout();
  });

  slider.on('dragChecked', clearNextTimeout);
  slider.on('animationEnded', nextTimeout);
  slider.on('updated', nextTimeout);
}

function SlideCard({ slide }) {
  return (
    <div className="rounded-[14px] md:rounded-[46px] border border-white md:border-[6px] overflow-hidden relative cta-card h-[152px] md:h-[500px]">
      <div
        className="absolute top-[-120px] right-[-60px] w-[380px] h-[380px] opacity-30 pointer-events-none dots-pattern hidden md:block"
        aria-hidden="true"
      />

      <div className="absolute top-4 start-4 md:top-[60px] md:start-[60px] flex flex-col gap-2 md:gap-5 z-10 w-[calc(100%-2rem)] md:w-[460px]">
        <h2 className="font-bold text-white text-[15.7px] md:text-[41px] leading-[1.2]">
          <span className="block">{slide.line1}</span>
          <span className="block">{slide.line2}</span>
        </h2>
        <p className="text-white/80 text-xs md:text-[18px] leading-relaxed">{slide.description}</p>
        <div className="flex items-center gap-2 md:gap-4">
          <Link
            href={slide.ctaPrimary.href}
            className="bg-white text-[#0c6ab6] font-semibold text-xs md:text-[17px] px-4 md:px-8 py-2 md:py-4 rounded-full hover:bg-white/90 transition-colors whitespace-nowrap"
          >
            {slide.ctaPrimary.label}
          </Link>
          <Link
            href={slide.ctaSecondary.href}
            className="bg-white/16 border border-white/50 text-white font-semibold text-xs md:text-[17px] px-4 md:px-8 py-2 md:py-4 rounded-full hover:bg-white/25 transition-colors whitespace-nowrap"
          >
            {slide.ctaSecondary.label}
          </Link>
        </div>
      </div>

      <div className="absolute inset-0">
        <Image
          src={slide.image}
          alt={slide.line2}
          fill
          className="object-cover object-right"
          loading="lazy"
        />
      </div>

      <div className={`absolute inset-0 pointer-events-none ${slide.gradient}`} aria-hidden="true" />
    </div>
  );
}

export function CtaSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const [sliderRef, instanceRef] = useKeenSlider(
    {
      loop: true,
      mode: 'snap',
      slides: {
        perView: 'auto',
        spacing: 48,
        origin: 'center',
      },
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
    },
    [AutoplayPlugin]
  );

  return (
    <section className="bg-white py-12 overflow-hidden">
      <div ref={sliderRef} className="keen-slider overflow-visible">
        {displaySlides.map((slide, i) => (
          <div key={i} className="keen-slider__slide cta-keen-slide">
            <SlideCard slide={slide} />
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-2 mt-8">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => instanceRef.current?.moveToIdx(i)}
            className={`rounded-full transition-all duration-300 ${
              currentSlide % slides.length === i
                ? 'w-1.5 h-1.5 md:w-6 md:h-3 bg-[#1491f8] md:bg-[#0c6ab6]'
                : 'w-1.5 h-1.5 md:w-3 md:h-3 bg-[#393939]/20 md:bg-[#0c6ab6]/30'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
