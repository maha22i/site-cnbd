'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Breadcrumbs from '../navigation/Breadcrumbs';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslations } from 'next-intl';

export default function GedDigitalisationClient() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const t = useTranslations('ged_page');

  useEffect(() => {
    AOS.init({ once: true, duration: 900, offset: 80 });
  }, []);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="bg-gray-50 min-h-screen relative overflow-hidden">
      {/* Décorations de fond */}
      <div className="fixed inset-0 w-full h-full flex items-center justify-center z-0 overflow-hidden pointer-events-none">
        <span className="text-[500px] font-black text-cnbd-red/[0.04] tracking-tight transform -rotate-12 whitespace-nowrap select-none">
          CNBD
        </span>
      </div>
      <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-cnbd-red/10 rounded-full blur-[120px] -translate-x-1/3 -translate-y-1/3 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-cnbd-red/10 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-cnbd-red/10 rounded-full blur-[120px] -translate-x-1/3 translate-y-1/3 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-cnbd-red/10 rounded-full blur-[120px] translate-x-1/3 translate-y-1/3 pointer-events-none" />

      {/* Contenu principal */}
      <div className="relative z-10">
        <div className="container mx-auto px-4 max-w-4xl pt-[100px]">
          <Breadcrumbs />
        </div>
        {/* Hero section - Plein écran et moderne */}
        <section className="relative min-h-[90vh] flex items-center mb-16">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-gray-100 to-white"></div>
            <div className="absolute right-0 top-0 w-3/4 h-full bg-cnbd-red/5 rounded-bl-[200px] transform -rotate-3"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div data-aos="fade-right" data-aos-duration="1000">
                <div className="absolute -top-10 -left-10 w-64 h-64 bg-cnbd-red/10 rounded-full blur-3xl -z-10"></div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-cnbd-black leading-tight mb-6">
                  <span className="block">{t('hero.title1')}</span>
                  <span className="text-cnbd-red">{t('hero.title2')}</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-lg leading-relaxed">
                  {t('hero.description')}
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="/contact" className="inline-flex items-center bg-cnbd-red text-white px-8 py-4 rounded-full font-bold hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:translate-y-[-2px] group">
                    {t('hero.cta1')}
                    <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </a>
                  <button 
                    onClick={() => {
                      const element = document.getElementById('avantages');
                      if (element) {
                        const offset = 100;
                        const elementPosition = element.getBoundingClientRect().top;
                        const offsetPosition = elementPosition + window.pageYOffset - offset;
                        
                        window.scrollTo({
                          top: offsetPosition,
                          behavior: 'smooth'
                        });
                      }
                    }}
                    className="inline-flex items-center bg-white text-cnbd-black border-2 border-gray-200 px-8 py-4 rounded-full font-bold hover:border-cnbd-red/30 transition-all duration-300 shadow-lg hover:shadow-xl hover:translate-y-[-2px]"
                  >
                    {t('hero.cta2')}
                  </button>
                </div>
              </div>
              
              <div className="relative" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="300">
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-cnbd-red/5 rounded-full blur-2xl -z-10"></div>
                <div className="relative overflow-hidden rounded-[1.5rem] shadow-xl border-4 border-white">
                  <Image 
                    src="/ged-image.jpg" 
                    alt="GED & Digitalisation" 
                    width={200} 
                    height={240}
                    className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-cnbd-red/30 to-transparent opacity-60"></div>
                </div>
                
                <div className="absolute -right-10 top-1/2 transform -translate-y-1/2 bg-white rounded-2xl shadow-xl p-4 backdrop-blur">
                  <div className="flex items-center gap-3">
                    <div className="bg-cnbd-red/10 p-2 rounded-lg">
                      <svg className="w-8 h-8 text-cnbd-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 12l2 2 4-4"></path>
                        <path d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9c2.5 0 4.74 1.02 6.36 2.64"></path>
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold">{t('badges.security.title')}</div>
                      <div className="text-sm text-gray-500">{t('badges.security.subtitle')}</div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -left-10 bottom-20 bg-white rounded-2xl shadow-xl p-4 backdrop-blur">
                  <div className="flex items-center gap-3">
                    <div className="bg-cnbd-red/10 p-2 rounded-lg">
                      <svg className="w-8 h-8 text-cnbd-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12,6 12,12 16,14"></polyline>
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold">{t('badges.time.title')}</div>
                      <div className="text-sm text-gray-500">{t('badges.time.subtitle')}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-10 left-0 right-0 flex justify-center">
            <a href="#solutions" className="rounded-full bg-white shadow-md p-3 animate-bounce hover:shadow-lg transition-shadow">
              <svg className="w-6 h-6 text-cnbd-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </a>
          </div>
        </section>

        <section id="solutions" className="container mx-auto px-4 max-w-5xl flex flex-col gap-12 py-8 md:py-4">
          {/* Pourquoi choisir la GED */}
          <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col md:flex-row gap-8 items-center" data-aos="fade-right">
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-cnbd-red mb-3">{t('sections.digital_transformation.title')}</h2>
              <p className="text-gray-700">
                {t('sections.digital_transformation.content')}
              </p>
            </div>
            <div className="flex-1 flex justify-center">
              <Image src="/digitale.webp" alt="Logo CNBD" width={600} height={300} className="object-contain bg-white rounded-xl shadow p-2" />
            </div>
          </div>

          {/* Nos solutions GED */}
          <div className="bg-gray-50 rounded-2xl shadow-lg p-8" data-aos="fade-left">
            <h2 className="text-2xl font-bold text-cnbd-red mb-3">{t('sections.solution.title')}</h2>
            <p className="text-gray-700 mb-6">{t('sections.solution.content')}</p>
            <ul className="grid md:grid-cols-2 gap-4 text-gray-800">
              {Array.from({ length: 6 }).map((_, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="inline-flex items-center justify-center bg-cnbd-red/10 text-cnbd-red rounded-full w-8 h-8">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  {t(`sections.solution.items.${i}`)}
                </li>
              ))}
            </ul>
          </div>

          {/* Les avantages de la GED */}
          <div id="avantages" className="bg-white rounded-2xl shadow-xl p-8" data-aos="fade-up">
            <h2 className="text-2xl font-bold text-cnbd-red mb-3">{t('sections.benefits.title')}</h2>
            <ul className="grid md:grid-cols-3 gap-6 text-gray-800">
              {['time', 'security', 'compliance', 'cost', 'mobility', 'collaboration'].map((key) => (
                <li key={key} className="flex flex-col items-center text-center gap-2">
                  <span className="inline-flex items-center justify-center bg-cnbd-red/10 text-cnbd-red rounded-full w-14 h-14 mb-2">
                    {key === 'time' && (
                      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12,6 12,12 16,14"></polyline>
                      </svg>
                    )}
                    {key === 'security' && (
                      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                      </svg>
                    )}
                    {key === 'compliance' && (
                      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                        <polyline points="14,2 14,8 20,8"></polyline>
                        <line x1="16" y1="13" x2="8" y2="13"></line>
                        <line x1="16" y1="17" x2="8" y2="17"></line>
                        <polyline points="10,9 9,9 8,9"></polyline>
                      </svg>
                    )}
                    {key === 'cost' && (
                      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="12" y1="1" x2="12" y2="23"></line>
                        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                      </svg>
                    )}
                    {key === 'mobility' && (
                      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                        <line x1="8" y1="21" x2="16" y2="21"></line>
                        <line x1="12" y1="17" x2="12" y2="21"></line>
                      </svg>
                    )}
                    {key === 'collaboration' && (
                      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                    )}
                  </span>
                  <span className="font-semibold">{t(`sections.benefits.items.${key}.title`)}</span>
                  <span className="text-gray-600 text-sm">{t(`sections.benefits.items.${key}.description`)}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Fonctionnalités clés */}
          <div className="bg-gray-50 rounded-2xl shadow-lg p-8" data-aos="fade-left">
            <h2 className="text-2xl font-bold text-cnbd-red mb-3">{t('sections.features.title')}</h2>
            <ul className="grid md:grid-cols-2 gap-6 text-gray-800">
              {Array.from({ length: 7 }).map((_, i) => (
                <li key={i} className="flex items-center gap-4">
                  <span className="inline-flex items-center justify-center bg-cnbd-red/10 text-cnbd-red rounded-full w-12 h-12">
                    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      {i === 0 && (
                        <>
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                          <polyline points="14,2 14,8 20,8"></polyline>
                          <line x1="16" y1="13" x2="8" y2="13"></line>
                          <line x1="16" y1="17" x2="8" y2="17"></line>
                          <polyline points="10,9 9,9 8,9"></polyline>
                        </>
                      )}
                      {i === 1 && (
                        <>
                          <circle cx="11" cy="11" r="8"></circle>
                          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        </>
                      )}
                      {i === 2 && (
                        <>
                          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                          <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
                        </>
                      )}
                      {i === 3 && (
                        <>
                          <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                          <path d="m7 11V7a5 5 0 0 1 10 0v4"></path>
                        </>
                      )}
                      {i === 4 && (
                        <>
                          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                        </>
                      )}
                      {i === 5 && (
                        <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path>
                      )}
                      {i === 6 && (
                        <>
                          <path d="M3 3v18h18"></path>
                          <path d="m19 9-5 5-4-4-3 3"></path>
                        </>
                      )}
                    </svg>
                  </span>
                  {t(`sections.features.items.${i}`)}
                </li>
              ))}
            </ul>
          </div>

          {/* Digitalisation des processus métiers */}
          <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col md:flex-row gap-8 items-center" data-aos="fade-right">
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-cnbd-red mb-3">{t('sections.beyond_docs.title')}</h2>
              <p className="text-gray-700">{t('sections.beyond_docs.content')}</p>
            </div>
            <div className="flex-1 flex justify-center">
              <Image src="/image-defaut.jpg" alt="Digitalisation des processus métiers" width={320} height={220} className="rounded-xl shadow-lg object-cover" />
            </div>
          </div>

          {/* Accompagnement & support */}
          <div className="bg-gray-50 rounded-2xl shadow-lg p-8 flex flex-col md:flex-row gap-8 items-center" data-aos="fade-left">
            <div className="flex-1 flex justify-center">
              <Image src="/logo-cnbd.png" alt="Logo CNBD" width={600} height={300} className="object-contain bg-white rounded-xl shadow p-2" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-cnbd-red mb-3">{t('sections.partnership.title')}</h2>
              <p className="text-gray-700">{t('sections.partnership.content')}</p>
            </div>
          </div>

          {/* Appel à l'action */}
          <div className="bg-cnbd-red rounded-2xl shadow-xl p-8 text-white text-center flex flex-col items-center gap-6" data-aos="zoom-in">
            <h2 className="text-2xl font-bold mb-2">{t('cta_section.title')}</h2>
            <p className="text-lg mb-4">{t('cta_section.content')}</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="/contact" className="px-6 py-3 bg-white text-cnbd-red font-bold rounded-lg shadow-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">{t('cta_section.button')}</a>
            </div>
          </div>

          {/* FAQ */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mt-8" data-aos="fade-up">
            <h2 className="text-2xl font-bold text-cnbd-red mb-6 text-center">{t('faq.title')}</h2>
            <div className="space-y-4 max-w-3xl mx-auto">
              {Array.from({ length: 4 }).map((_, i) => (
                <div 
                  key={i}
                  className="bg-gray-50 rounded-xl overflow-hidden transition-all duration-300"
                  data-aos="fade-up" 
                  data-aos-delay={i*100}
                >
                  <button
                    onClick={() => toggleFaq(i)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors duration-200"
                  >
                    <h3 className="font-bold text-cnbd-red">{t(`faq.items.${i}.question`)}</h3>
                    <svg
                      className={`w-5 h-5 text-cnbd-red transform transition-transform duration-300 ${
                        openIndex === i ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      openIndex === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-6 pb-4 text-gray-700">
                      {t(`faq.items.${i}.answer`)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
} 