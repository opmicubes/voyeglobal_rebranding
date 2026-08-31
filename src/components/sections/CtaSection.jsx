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
    gradient: 'linear-gradient(to right, #081D40 42%, rgba(8,29,64,0.85) 58%, transparent 80%)',
  },
  {
    id: 2,
    line1: 'Always Connected.',
    line2: 'Explore 130+ Countries.',
    description: 'One eSIM. Every destination. Instant activation — no physical SIM card needed.',
    ctaPrimary: { label: 'View Plans', href: '#' },
    ctaSecondary: { label: 'Learn More', href: '#' },
    image: '/home/view2.svg',
    gradient: 'linear-gradient(to right, #033C6A 35%, rgba(3,60,106,0.7) 52%, transparent 70%)',
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
    <div className="rounded-[46px] border-[6px] border-white overflow-hidden relative cta-card h-[500px]">
      <div
        className="absolute top-[-120px] right-[-60px] w-[380px] h-[380px] opacity-30 pointer-events-none dots-pattern"
        aria-hidden="true"
      />

      <div className="absolute top-[60px] left-[60px] flex flex-col gap-5 z-10 w-[460px]">
        <h2 className="font-bold text-white text-[38px] leading-[1.2]">
          <span className="block">{slide.line1}</span>
          <span className="block">{slide.line2}</span>
        </h2>
        <p className="text-white/80 text-base leading-relaxed">{slide.description}</p>
        <div className="flex items-center gap-4">
          <Link
            href={slide.ctaPrimary.href}
            className="bg-white text-[#0c6ab6] font-semibold text-base px-8 py-4 rounded-full hover:bg-white/90 transition-colors whitespace-nowrap"
          >
            {slide.ctaPrimary.label}
          </Link>
          <Link
            href={slide.ctaSecondary.href}
            className="bg-white/16 border border-white/50 text-white font-semibold text-base px-8 py-4 rounded-full hover:bg-white/25 transition-colors whitespace-nowrap"
          >
            {slide.ctaSecondary.label}
          </Link>
        </div>
      </div>

      {slide.image.endsWith('.svg') ? (
        <div
          className="absolute inset-0 cta-card-image"
          role="img"
          aria-label={slide.line2}
          style={{ '--bg-image': `url(${slide.image})` }}
        />
      ) : (
        <div className="absolute top-0 end-0 h-full">
          <Image
            src={slide.image}
            alt={slide.line2}
            width={900}
            height={500}
            className="h-full w-auto max-w-none block"
            loading="lazy"
          />
        </div>
      )}

      <div
        className="absolute inset-0 pointer-events-none cta-card-overlay"
        style={{ '--overlay-gradient': slide.gradient }}
        aria-hidden="true"
      />
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
                ? 'w-6 h-3 bg-[#0c6ab6]'
                : 'w-3 h-3 bg-[#0c6ab6]/30'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
