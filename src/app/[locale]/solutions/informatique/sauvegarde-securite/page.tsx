"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Breadcrumbs from "@/components/navigation/Breadcrumbs";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function SauvegardeSecuritePage() {
  const t = useTranslations('informatique.sauvegarde');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    { 
      q: t('faq.items.0.question'), 
      a: t('faq.items.0.answer')
    },
    { 
      q: t('faq.items.1.question'), 
      a: t('faq.items.1.answer') 
    },
    { 
      q: t('faq.items.2.question'), 
      a: t('faq.items.2.answer') 
    },
    { 
      q: t('faq.items.3.question'), 
      a: t('faq.items.3.answer') 
    },
  ];

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
        
        {/* Hero section */}
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
                  <span className="block">{t('hero.title')}</span>
                  <span className="text-cnbd-red">{t('hero.subtitle')}</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-lg leading-relaxed">
                  {t('hero.description')}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/contact" className="inline-flex items-center bg-cnbd-red text-white px-8 py-4 rounded-full font-bold hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:translate-y-[-2px] group">
                    {t('hero.cta1')}
                    <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </Link>
                  <button 
                    onClick={() => {
                      const element = document.getElementById('securite');
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
                <div className="relative overflow-hidden rounded-[2rem] shadow-2xl border-8 border-white">
                  <Image 
                    src="/image-defaut.jpg" 
                    alt={t('images.alt.hero')} 
                    width={800} 
                    height={600}
                    className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-cnbd-red/30 to-transparent opacity-60"></div>
                </div>
                
                <div className="absolute -right-10 top-1/2 transform -translate-y-1/2 bg-white rounded-2xl shadow-xl p-4 backdrop-blur">
                  <div className="flex items-center gap-3">
                    <div className="bg-cnbd-red/10 p-2 rounded-lg">
                      <svg className="w-8 h-8 text-cnbd-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold">{t('badges.protection.title')}</div>
                      <div className="text-sm text-gray-500">{t('badges.protection.subtitle')}</div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -left-10 bottom-20 bg-white rounded-2xl shadow-xl p-4 backdrop-blur">
                  <div className="flex items-center gap-3">
                    <div className="bg-cnbd-red/10 p-2 rounded-lg">
                      <svg className="w-8 h-8 text-cnbd-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold">{t('badges.gdpr.title')}</div>
                      <div className="text-sm text-gray-500">{t('badges.gdpr.subtitle')}</div>
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

        <section id="solutions" className="container mx-auto px-4 max-w-5xl flex flex-col gap-12 py-8 md:py-5">
          {/* Importance de la sauvegarde */}
          <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col gap-8" data-aos="fade-right">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-cnbd-red mb-3">{t('sections.importance.title')}</h2>
                <p className="text-gray-700">
                  {t('sections.importance.paragraph1')}
                </p>
                <p className="text-gray-700 mt-3">
                  {t('sections.importance.paragraph2')}
                </p>
                <p className="text-gray-700 mt-3">
                  {t('sections.importance.paragraph3')}
                </p>
              </div>
              <div className="flex-1 flex justify-center">
                <Image src="/sauvegarde2.png" alt={t('images.alt.importance')} width={600} height={300} className="object-contain bg-white rounded-xl shadow p-2" />
              </div>
            </div>
          </div>
          
          {/* Types de sauvegarde */}
          <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col gap-8" data-aos="fade-left">
            <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-cnbd-red mb-3">{t('sections.types.title')}</h2>
                <p className="text-gray-700">
                  {t('sections.types.paragraph1')}
                </p>
                <p className="text-gray-700 mt-3">
                  {t('sections.types.paragraph2')}
                </p>
                <p className="text-gray-700 mt-3">
                  {t('sections.types.paragraph3')}
                </p>
              </div>
              <div className="flex-1 flex justify-center">
                <Image src="/sauvegarde1.png" alt={t('images.alt.types')} width={600} height={300} className="object-contain bg-white rounded-xl shadow p-2" />
              </div>
            </div>
          </div>
          
          {/* Importance de la sécurité */}
          <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col gap-8" data-aos="fade-right">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-cnbd-red mb-3">{t('sections.security_importance.title')}</h2>
                <p className="text-gray-700">
                  {t('sections.security_importance.paragraph1')}
                </p>
                <p className="text-gray-700 mt-3">
                  {t('sections.security_importance.paragraph2')}
                </p>
                <p className="text-gray-700 mt-3">
                  {t('sections.security_importance.paragraph3')}
                </p>
              </div>
              <div className="flex-1 flex justify-center">
                <Image src="/securite1.png" alt={t('images.alt.security_importance')} width={600} height={300} className="object-contain bg-white rounded-xl shadow p-2" />
              </div>
            </div>
          </div>
          
          {/* Solutions de sécurité */}
          <div id="securite" className="bg-white rounded-2xl shadow-xl p-8 flex flex-col gap-8" data-aos="fade-left">
            <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-cnbd-red mb-3">{t('sections.security_solutions.title')}</h2>
                <p className="text-gray-700">
                  {t('sections.security_solutions.paragraph1')}
                </p>
                <p className="text-gray-700 mt-3">
                  {t('sections.security_solutions.paragraph2')}
                </p>
                <p className="text-gray-700 mt-3">
                  {t('sections.security_solutions.paragraph3')}
                </p>
                <p className="text-gray-700 mt-3">
                  {t('sections.security_solutions.paragraph4')}
                </p>
                <p className="text-gray-700 mt-3">
                  {t('sections.security_solutions.paragraph5')}
                </p>
              </div>
              <div className="flex-1 flex justify-center">
                <Image src="/securite2.png" alt={t('images.alt.security_solutions')} width={600} height={300} className="object-contain bg-white rounded-xl shadow p-2" />
              </div>
            </div>
           
          </div>
          
          {/* Conformité RGPD */}
          <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col gap-8" data-aos="fade-right">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-cnbd-red mb-3">{t('sections.gdpr.title')}</h2>
                <p className="text-gray-700">
                  {t('sections.gdpr.paragraph1')}
                </p>
                <p className="text-gray-700 mt-3">
                  {t('sections.gdpr.paragraph2')}
                </p>
              </div>
              <div className="flex-1 flex justify-center">
                <Image src="/rgpd.png" alt={t('images.alt.gdpr')} width={600} height={300} className="object-contain bg-white rounded-xl shadow p-2" />
              </div>
            </div>
          </div>
        </section>
        
        {/* Section d'accompagnement CNBD */}
        <section className="bg-gradient-to-br from-cnbd-red/5 to-white py-16 mb-16">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-12" data-aos="fade-up">
              <h2 className="text-3xl font-bold mb-6">{t('sections.support.title')}</h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                {t('sections.support.description')}
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300" data-aos="fade-up" data-aos-delay="100">
                <div className="bg-cnbd-red/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-cnbd-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">{t('sections.support.features.strategy.title')}</h3>
                <p className="text-gray-700">
                  {t('sections.support.features.strategy.description')}
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300" data-aos="fade-up" data-aos-delay="200">
                <div className="bg-cnbd-red/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-cnbd-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">{t('sections.support.features.experts.title')}</h3>
                <p className="text-gray-700">
                  {t('sections.support.features.experts.description')}
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300" data-aos="fade-up" data-aos-delay="300">
                <div className="bg-cnbd-red/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-cnbd-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    <circle cx="12" cy="8" r="3"></circle>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">{t('sections.support.features.supervision.title')}</h3>
                <p className="text-gray-700">
                  {t('sections.support.features.supervision.description')}
                </p>
              </div>
            </div>
          
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="container mx-auto px-4 max-w-4xl mb-20">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl font-bold mb-3">{t('faq.title')}</h2>
            <p className="text-gray-700">
              {t('faq.subtitle')}
            </p>
          </div>
          
          <div className="space-y-4" data-aos="fade-up" data-aos-delay="100">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
                <details className="group" open={openIndex === index}>
                  <summary 
                    className="flex items-center justify-between gap-4 p-6 cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault();
                      toggleFaq(index);
                    }}
                  >
                    <h3 className="font-bold text-lg text-gray-800">{faq.q}</h3>
                    <span className="relative flex-shrink-0 ml-1.5 w-5 h-5">
                      <svg xmlns="http://www.w3.org/2000/svg" className={`absolute transition-all duration-300 ${openIndex === index ? 'opacity-0' : 'opacity-100'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" className={`absolute transition-all duration-300 ${openIndex === index ? 'opacity-100' : 'opacity-0'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 12h16" />
                      </svg>
                    </span>
                  </summary>
                  <div className="px-6 pb-6 pt-0">
                    <p className="text-gray-700">{faq.a}</p>
                  </div>
                </details>
              </div>
            ))}
          </div>
        </section>

        {/* Appel à l'action */}
        <section className="container mx-auto px-4 max-w-5xl mb-20">
          <div className="bg-cnbd-red rounded-2xl shadow-xl p-8 text-white text-center flex flex-col items-center gap-6" data-aos="zoom-in">
            <h2 className="text-2xl font-bold mb-2">{t('cta.title')}</h2>
            <p className="text-lg mb-4">{t('cta.description')}</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="px-6 py-3 bg-white text-cnbd-red font-bold rounded-lg shadow-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">{t('cta.button1')}</Link>
              <Link href="/contact" className="px-6 py-3 bg-transparent border-2 border-white text-white font-bold rounded-lg shadow-lg hover:bg-white/10 transition-all duration-300 transform hover:scale-105">{t('cta.button2')}</Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
} 