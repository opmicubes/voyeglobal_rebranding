'use client';
import { useState, useRef } from 'react';
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
    <div className="rounded-[14px] md:rounded-[46px] border border-white md:border-[6px] overflow-hidden relative cta-card h-full">
      <div
        className="absolute top-[-120px] right-[-60px] w-[380px] h-[380px] opacity-30 pointer-events-none dots-pattern hidden md:block"
        aria-hidden="true"
      />

      <div className="absolute top-[clamp(16px,4.7vw,60px)] start-[clamp(16px,4.7vw,60px)] flex flex-col gap-[clamp(8px,1.2vw,20px)] z-10 w-[min(calc(100%-2rem),clamp(200px,38vw,460px))]">
        <h2 className="font-bold text-white text-[clamp(12px,3.3vw,41px)] leading-[1.2]">
          <span className="block">{slide.line1}</span>
          <span className="block">{slide.line2}</span>
        </h2>
        <p className="text-white/80 text-[clamp(10px,1.4vw,18px)] leading-relaxed">{slide.description}</p>
        <div className="flex items-center gap-2 md:gap-4">
          <Link
            href={slide.ctaPrimary.href}
            className="bg-white text-[#0c6ab6] font-semibold text-[clamp(10px,1.3vw,17px)] px-[clamp(12px,2vw,32px)] py-[clamp(6px,0.9vw,16px)] rounded-full hover:bg-white/90 transition-colors whitespace-nowrap"
          >
            {slide.ctaPrimary.label}
          </Link>
          <Link
            href={slide.ctaSecondary.href}
            className="bg-white/16 border border-white/50 text-white font-semibold text-[clamp(10px,1.3vw,17px)] px-[clamp(12px,2vw,32px)] py-[clamp(6px,0.9vw,16px)] rounded-full hover:bg-white/25 transition-colors whitespace-nowrap"
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
          className="object-contain object-right-bottom"
          loading="eager"
        />
      </div>

      <div className={`absolute inset-0 pointer-events-none ${slide.gradient}`} aria-hidden="true" />
    </div>
  );
}

export function CtaSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const minScaleRef = useRef(0.9);

  const [sliderRef, instanceRef] = useKeenSlider(
    {
      loop: true,
      mode: 'snap',
      slides: {
        perView: 'auto',
        spacing: -30,
        origin: 'center',
      },
      breakpoints: {
        '(max-width: 767px)': {
          slides: { perView: 'auto', spacing: 8, origin: 'center' },
        },
      },
      created(slider) {
        const cr = slider.container.getBoundingClientRect();
        const cc = cr.left + cr.width / 2;
        const min = minScaleRef.current;
        const rects = Array.from(slider.slides).map(s => s.getBoundingClientRect());
        rects.forEach((rect, i) => {
          const dist = Math.abs(rect.left + rect.width / 2 - cc) / rect.width;
          slider.slides[i].style.setProperty('--slide-scale', (min + (1 - min) * (1 - Math.min(dist, 1))).toFixed(3));
        });
      },
      detailsChanged(slider) {
        const cr = slider.container.getBoundingClientRect();
        const cc = cr.left + cr.width / 2;
        const min = minScaleRef.current;
        const rects = Array.from(slider.slides).map(s => s.getBoundingClientRect());
        rects.forEach((rect, i) => {
          const dist = Math.abs(rect.left + rect.width / 2 - cc) / rect.width;
          slider.slides[i].style.setProperty('--slide-scale', (min + (1 - min) * (1 - Math.min(dist, 1))).toFixed(3));
        });
      },
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
    },
    [AutoplayPlugin]
  );

  return (
    <section className="bg-white py-12 overflow-hidden">
      <div ref={sliderRef} className="keen-slider cta-slider overflow-visible">
        {displaySlides.map((slide, i) => (
          <div key={i} className="keen-slider__slide cta-keen-slide">
            <div className="cta-card-outer">
              <SlideCard slide={slide} />
            </div>
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
