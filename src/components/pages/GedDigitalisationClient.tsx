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
                
                <div className="absolute -right-10 top-1/2 transform -translate-y-1/2 bg-white rounded-2xl shadow-xl p-5 backdrop-blur border border-gray-100 hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="bg-gradient-to-br from-cnbd-red/20 to-cnbd-red/5 p-3 rounded-xl shadow-inner">
                      <Image 
                        src="/icone/numeriser-le-document.png" 
                        alt="Numériser document" 
                        width={48}
                        height={48}
                        className="w-12 h-12 object-contain"
                      />
                    </div>
                    <div>
                      <div className="font-bold text-lg text-cnbd-black">{t('badges.security.title')}</div>
                      <div className="text-gray-600">{t('badges.security.subtitle')}</div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -left-10 bottom-20 bg-white rounded-2xl shadow-xl p-5 backdrop-blur border border-gray-100 hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-center gap-4">
                  <div className="bg-gradient-to-br from-cnbd-red/20 to-cnbd-red/5 p-3 rounded-xl shadow-inner">
                      <Image 
                        src="/icone/gain-temps.png" 
                        alt="Numériser document" 
                        width={48}
                        height={48}
                        className="w-12 h-12 object-contain"
                      />
                    </div>
                    <div>
                      <div className="font-bold text-lg text-cnbd-black">{t('badges.time.title')}</div>
                      <div className="text-gray-600">{t('badges.time.subtitle')}</div>
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
              {(['time', 'security', 'compliance', 'cost', 'mobility', 'collaboration'] as const).map((key) => (
                <li key={key} className="flex flex-col items-center text-center gap-3 p-4 hover:bg-white rounded-2xl transition-all duration-300 hover:shadow-lg">
                  <span className="inline-flex items-center justify-center bg-gradient-to-br from-cnbd-red/20 to-cnbd-red/5 text-cnbd-red rounded-xl w-20 h-20 mb-3 shadow-inner">
                    {key === 'time' && (
                      <Image 
                        src="/icone/gain-temps.png" 
                        alt="Gain de temps" 
                        width={48}
                        height={48}
                        className="w-12 h-12 object-contain"
                      />
                    )}
                    {key === 'security' && (
                     <Image 
                        src="/icone/securite.png" 
                        alt="securite" 
                        width={48}
                        height={48}
                        className="w-12 h-12 object-contain"
                      />
                    )}
                    {key === 'compliance' && (
                      <Image 
                      src="/icone/conformite.png" 
                      alt="conformite" 
                      width={48}
                      height={48}
                      className="w-12 h-12 object-contain"
                    />
                    )}
                    {key === 'cost' && (
                       <Image 
                       src="/icone/perte.png" 
                       alt="perte" 
                       width={48}
                       height={48}
                       className="w-12 h-12 object-contain"
                     />
                    )}
                    {key === 'mobility' && (
                       <Image 
                       src="/icone/la-flexibilite.png" 
                       alt="flexibilite" 
                       width={48}
                       height={48}
                       className="w-12 h-12 object-contain"
                     />
                    )}
                    {key === 'collaboration' && (
                     <Image 
                     src="/icone/relation.png" 
                     alt="relation" 
                     width={48}
                     height={48}
                     className="w-12 h-12 object-contain"
                   />
                    )}
                  </span>
                  <span className="font-bold text-lg text-cnbd-black mb-1">{t(`sections.benefits.items.${key}.title`)}</span>
                  <span className="text-gray-600 leading-relaxed">{t(`sections.benefits.items.${key}.description`)}</span>
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
                    {i === 0 ? (
                      <Image 
                        src="/icone/numeriser-le-document.png" 
                        alt="Numériser document" 
                        width={28}
                        height={28}
                        className="w-7 h-7 object-contain"
                      />
                    ) : i === 1 ? (
                      <Image 
                        src="/icone/controle-de-version.png" 
                        alt="Controle de version" 
                        width={28}
                        height={28}
                        className="w-7 h-7 object-contain"
                      />
                    ) : i === 2 ? (
                      <Image 
                        src="/icone/signature-numerique.png" 
                        alt="Signature numérique" 
                        width={28}
                        height={28}
                        className="w-7 h-7 object-contain"
                      />
                    ) : i === 3 ? (
                      <Image 
                        src="/icone/dm.png" 
                        alt="partager le document" 
                        width={28}
                        height={28}
                        className="w-7 h-7 object-contain"
                      />
                    ) : i === 4 ? (
                      <Image 
                        src="/icone/telephone-intelligent.png" 
                        alt="Téléphone intelligent" 
                        width={28}
                        height={28}
                        className="w-7 h-7 object-contain"
                      />
                    ) : i === 5 ? (
                      <Image 
                        src="/icone/archivage-des-donnees.png" 
                        alt="Archivage des données" 
                        width={28}
                        height={28}
                        className="w-7 h-7 object-contain"
                      />
                    ) : (
                      <Image 
                        src="/icone/tableau-de-bord.png" 
                        alt="Tableau de bord" 
                        width={28}
                        height={28}
                        className="w-7 h-7 object-contain"
                      />
                    )}
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