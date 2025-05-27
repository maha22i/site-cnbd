'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '../i18n/navigation';

const HeroSlider = () => {
  const t = useTranslations();
  
  const slides = [
  {
    id: 1,
    title: t('hero.slide1.title'),
    subtitle: t('hero.slide1.subtitle'),
    description: t('hero.slide1.description'),
    image: "/slider1.png",
    badge: t('hero.slide1.badge'),
    cta: [
      { text: t('hero.slide1.cta1'), link: "/solutions", primary: true },
      { text: t('hero.slide1.cta2'), link: "/contact", primary: false }
    ]
  },
  {
    id: 2,
    title: t('hero.slide2.title'),
    subtitle: t('hero.slide2.subtitle'),
    description: t('hero.slide2.description'),
    image: "/slider2.png",
    badge: t('hero.slide2.badge'),
    cta: [
      { text: t('hero.slide2.cta1'), link: "/services/cybersecurite", primary: true },
      { text: t('hero.slide2.cta2'), link: "/services", primary: false }
    ]
  },
  {
    id: 3,
    title: t('hero.slide3.title'),
    subtitle: t('hero.slide3.subtitle'),
    description: t('hero.slide3.description'),
    image: "/slider3.png",
    badge: t('hero.slide3.badge'),
    cta: [
      { text: t('hero.slide3.cta1'), link: "/solutions/informatique/hebergement", primary: true },
      { text: t('hero.slide3.cta2'), link: "/services", primary: false }
    ]
  },
  {
    id: 4,
    title: t('hero.slide4.title'),
    subtitle: t('hero.slide4.subtitle'),
    description: t('hero.slide4.description'),
    image: "/image3.jpg",
    badge: t('hero.slide4.badge'),
    cta: [
      { text: t('hero.slide4.cta1'), link: "/support", primary: true },
      { text: t('hero.slide4.cta2'), link: "/services/support", primary: false }
    ]
  }
];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = useCallback(() => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setTimeout(() => setIsAnimating(false), 800);
    }
  }, [isAnimating]);

  const prevSlide = useCallback(() => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      setTimeout(() => setIsAnimating(false), 800);
    }
  }, [isAnimating]);

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <div className="relative h-[450px] sm:h-[550px] md:h-[650px] lg:h-[700px] overflow-hidden bg-cnbd-black group">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-800 ease-in-out transform z-10
            ${index === currentSlide ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-105 pointer-events-none'}`}
        >
          {/* Background Image + Overlay */}
          <div className="absolute inset-0">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover object-center w-full h-full scale-105 transition-transform duration-1000"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-cnbd-black/90 via-cnbd-black/70 to-cnbd-black/50" />
          </div>

          {/* Content Card */}
          <div className="relative h-full flex items-center justify-center md:justify-start container mx-auto px-4 sm:px-6">
            <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl shadow-2xl p-6 sm:p-8 lg:p-12 w-full max-w-lg sm:max-w-xl lg:max-w-2xl mt-8 sm:mt-0 md:ml-8 lg:ml-16 xl:ml-32 animate-fade-up">
              {/* Badge */}
              <div className="inline-block mb-3 sm:mb-4 px-3 sm:px-4 py-1 rounded-full bg-cnbd-red/90 text-white text-xs font-semibold tracking-wider shadow-md animate-fade-in">
                {slide.badge}
              </div>
              {/* Subtitle */}
              <span className="block text-cnbd-red font-semibold mb-2 tracking-wider uppercase text-xs sm:text-sm lg:text-base animate-fade-in" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
                {slide.subtitle}
              </span>
              {/* Title */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-3 sm:mb-4 leading-tight animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
                {slide.title}
              </h2>
              {/* Description */}
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 mb-6 sm:mb-8 leading-relaxed animate-fade-in" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
                {slide.description}
              </p>
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fade-in" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
                {slide.cta.map((btn, i) => (
                  <Link
                    key={btn.text}
                    href={btn.link}
                    className={
                      btn.primary
                        ? "px-5 sm:px-6 lg:px-7 py-3 bg-cnbd-red text-white font-bold rounded-lg shadow-lg hover:bg-red-700 transition-all duration-300 transform hover:scale-105 hover:shadow-cnbd-red/30 text-center text-sm sm:text-base"
                        : "px-5 sm:px-6 lg:px-7 py-3 bg-white/10 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-cnbd-black transition-all duration-300 transform hover:scale-105 text-center text-sm sm:text-base"
                    }
                  >
                    {btn.text}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 md:left-8 lg:left-10 top-1/2 -translate-y-1/2 p-2 sm:p-3 lg:p-4 rounded-full bg-white/10 text-white hover:bg-cnbd-red/80 hover:text-white transition-all duration-200 backdrop-blur-md z-20 shadow-lg border border-white/20"
        aria-label="Slide précédente"
      >
        <svg className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 md:right-8 lg:right-10 top-1/2 -translate-y-1/2 p-2 sm:p-3 lg:p-4 rounded-full bg-white/10 text-white hover:bg-cnbd-red/80 hover:text-white transition-all duration-200 backdrop-blur-md z-20 shadow-lg border border-white/20"
        aria-label="Slide suivante"
      >
        <svg className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 sm:space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 w-6 sm:h-3 sm:w-8 rounded-full transition-all duration-300 border border-white/30
              ${index === currentSlide 
                ? 'bg-cnbd-red shadow-lg scale-110' 
                : 'bg-white/40 hover:bg-cnbd-red/60'}`}
            aria-label={`Aller au slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

// Animations CSS à ajouter dans le global.css ou tailwind.config.js :
// .animate-fade-in { animation: fadeIn 0.8s both; }
// .animate-fade-up { animation: fadeUp 1s both; }
// @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
// @keyframes fadeUp { from { opacity: 0; transform: translateY(40px);} to { opacity: 1; transform: none; } } 

export default HeroSlider;