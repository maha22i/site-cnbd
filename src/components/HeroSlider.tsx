'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const slides = [
  {
    id: 1,
    title: "Votre partenaire IT de confiance",
    subtitle: "Solutions informatiques innovantes pour entreprises exigeantes",
    description: "Bénéficiez d'une expertise reconnue, d'un accompagnement sur-mesure et des dernières technologies pour booster votre performance.",
    image: "/image.png",
    badge: "Top Service",
    cta: [
      { text: "Découvrir nos solutions", link: "/solutions", primary: true },
      { text: "Contactez un expert", link: "/contact", primary: false }
    ]
  },
  {
    id: 2,
    title: "Cybersécurité avancée",
    subtitle: "Protégez vos données, rassurez vos clients",
    description: "Nos solutions de cybersécurité protègent votre entreprise contre toutes les menaces actuelles. Audit, conseil, déploiement et supervision.",
    image: "/image1.jpeg",
    badge: "Nouveau",
    cta: [
      { text: "Audit gratuit", link: "/services/cybersecurite", primary: true },
      { text: "En savoir plus", link: "/services", primary: false }
    ]
  },
  {
    id: 3,
    title: "Cloud & Hébergement sécurisé",
    subtitle: "Votre infrastructure, partout, tout le temps",
    description: "Passez au cloud souverain et sécurisé : flexibilité, performance, sauvegarde et continuité d'activité garanties.",
    image: "/image2.jpg",
    badge: "Recommandé",
    cta: [
      { text: "Découvrir le cloud", link: "/solutions/informatique/hebergement", primary: true },
      { text: "Nos services", link: "/services", primary: false }
    ]
  },
  {
    id: 4,
    title: "Support & Maintenance 24/7",
    subtitle: "Un accompagnement humain, réactif et expert",
    description: "Notre équipe technique veille sur votre SI et intervient à distance ou sur site, à tout moment.",
    image: "/image3.jpg",
    badge: "Support 24/7",
    cta: [
      { text: "Obtenir de l'aide", link: "/support", primary: true },
      { text: "Découvrir le support", link: "/services/support", primary: false }
    ]
  }
];

export default function HeroSlider() {
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
    <div className="relative h-[500px] md:h-[700px] overflow-hidden bg-cnbd-black group">
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
              className="object-cover object-center w-full h-full scale-105 md:scale-100 transition-transform duration-1000"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-cnbd-black/90 via-cnbd-black/60 to-cnbd-black/40" />
            {/* Parallax/Zoom subtle effect */}
          </div>

          {/* Content Card */}
          <div className="relative h-full flex items-center justify-start container mx-auto px-4">
            <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl shadow-2xl p-8 md:p-12 max-w-xl mt-24 md:mt-0 animate-fade-up md:ml-32">
              {/* Badge */}
              <div className="inline-block mb-4 px-4 py-1 rounded-full bg-cnbd-red/90 text-white text-xs font-semibold tracking-wider shadow-md animate-fade-in">
                {slide.badge}
              </div>
              {/* Subtitle */}
              <span className="block text-cnbd-red font-semibold mb-2 tracking-wider uppercase text-sm md:text-base animate-fade-in" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
                {slide.subtitle}
              </span>
              {/* Title */}
              <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
                {slide.title}
              </h2>
              {/* Description */}
              <p className="text-lg md:text-xl text-gray-200 mb-8 animate-fade-in" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
                {slide.description}
              </p>
              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
                {slide.cta.map((btn, i) => (
                  <Link
                    key={btn.text}
                    href={btn.link}
                    className={
                      btn.primary
                        ? "px-7 py-3 bg-cnbd-red text-white font-bold rounded-lg shadow-lg hover:bg-red-700 transition-all duration-300 transform hover:scale-105 hover:shadow-cnbd-red/30"
                        : "px-7 py-3 bg-white/10 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-cnbd-black transition-all duration-300 transform hover:scale-105"
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
        className="absolute left-2 md:left-10 top-1/2 -translate-y-1/2 p-3 md:p-4 rounded-full bg-white/10 text-white hover:bg-cnbd-red/80 hover:text-white transition-all duration-200 backdrop-blur-md z-20 shadow-lg border border-white/20"
        aria-label="Slide précédente"
      >
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 md:right-10 top-1/2 -translate-y-1/2 p-3 md:p-4 rounded-full bg-white/10 text-white hover:bg-cnbd-red/80 hover:text-white transition-all duration-200 backdrop-blur-md z-20 shadow-lg border border-white/20"
        aria-label="Slide suivante"
      >
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-3 w-8 rounded-full transition-all duration-300 border border-white/30
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