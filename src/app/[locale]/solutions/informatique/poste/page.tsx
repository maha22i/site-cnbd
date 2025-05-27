"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Breadcrumbs from "@/components/navigation/Breadcrumbs";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslations } from "next-intl";

const faqs = [
  { q: "Quels types de postes informatiques proposez-vous ?", a: "Nous proposons une large gamme de postes informatiques : ordinateurs fixes, portables, tout-en-un, stations de travail graphiques et postes de travail virtualisés. Chaque solution est adaptée aux besoins spécifiques de votre activité et de vos collaborateurs." },
  { q: "Quels sont les avantages de la virtualisation des postes de travail ?", a: "La virtualisation offre de nombreux avantages : centralisation de la gestion, sécurité renforcée, mobilité accrue, réduction des coûts et prolongation de la durée de vie des équipements existants." },
  { q: "Comment choisir les postes informatiques adaptés à mon entreprise ?", a: "Nous réalisons un audit de vos besoins en prenant en compte les applications utilisées, le niveau de performance requis, l'ergonomie nécessaire et votre budget. Cette approche nous permet de vous proposer une solution sur-mesure parfaitement adaptée." },
  { q: "Proposez-vous également l'installation et la maintenance des postes ?", a: "Oui, nous assurons l'installation, la configuration et la maintenance de l'ensemble de votre parc informatique. Nos services d'infogérance permettent une gestion proactive et un support réactif en cas de problème." },
];

export default function PosteInformatiquePage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const t = useTranslations('poste_page');

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
                
                </div>
{/*                 
                <div className="mt-12 flex items-center gap-4">
                  <div className="bg-white p-3 rounded-full shadow-md">
                    <svg className="w-6 h-6 text-cnbd-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">Solutions personnalisées et évolutives</span>
                </div> */}
              </div>
              
              <div className="relative" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="300">
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-cnbd-red/5 rounded-full blur-2xl -z-10"></div>
                <div className="relative overflow-hidden rounded-[2rem] shadow-2xl border-8 border-white">
                  <Image 
                    src="/poste1.jpg" 
                    alt="Postes Informatiques Professionnels" 
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
                        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                        <line x1="8" y1="21" x2="16" y2="21"></line>
                        <line x1="12" y1="17" x2="12" y2="21"></line>
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold">{t('badges.performance.title')}</div>
                      <div className="text-sm text-gray-500">{t('badges.performance.subtitle')}</div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -left-10 bottom-20 bg-white rounded-2xl shadow-xl p-4 backdrop-blur">
                  <div className="flex items-center gap-3">
                    <div className="bg-cnbd-red/10 p-2 rounded-lg">
                      <svg className="w-8 h-8 text-cnbd-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold">{t('badges.economic.title')}</div>
                      <div className="text-sm text-gray-500">{t('badges.economic.subtitle')}</div>
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

        <section id="solutions" className="container mx-auto px-4 max-w-5xl flex flex-col gap-12 py-8 md:py-16">
          {/* Types de postes informatiques */}
          <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col gap-8" data-aos="fade-right">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-cnbd-red mb-3">{t('sections.types.title')}</h2>
                <p className="text-gray-700">
                  {t('sections.types.content')}
                </p>
              </div>
              <div className="flex-1 flex justify-center">
                <Image src="/poste2.jpg" alt="Postes informatiques variés" width={600} height={300} className="object-contain bg-white rounded-xl shadow p-2" />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-cnbd-red/10 p-3 rounded-full">
                    <svg className="w-8 h-8 text-cnbd-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                      <line x1="8" y1="21" x2="16" y2="21"></line>
                      <line x1="12" y1="17" x2="12" y2="21"></line>
                    </svg>
                  </div>
                  <h3 className="font-bold text-xl">{t('sections.office.title')}</h3>
                </div>
                <p className="text-gray-700 mb-3">{t('sections.office.content')}</p>
                <ul className="text-gray-700 space-y-2 pl-4">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <li key={i}>• {t(`sections.office.items.${i}`)}</li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-cnbd-red/10 p-3 rounded-full">
                    <svg className="w-8 h-8 text-cnbd-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18"></path>
                    </svg>
                  </div>
                  <h3 className="font-bold text-xl">{t('sections.graphics.title')}</h3>
                </div>
                <p className="text-gray-700 mb-3">{t('sections.graphics.content')}</p>
                <ul className="text-gray-700 space-y-2 pl-4">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <li key={i}>• {t(`sections.graphics.items.${i}`)}</li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-cnbd-red/10 p-3 rounded-full">
                    <svg className="w-8 h-8 text-cnbd-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                      <line x1="12" y1="18" x2="12.01" y2="18"></line>
                    </svg>
                  </div>
                  <h3 className="font-bold text-xl">{t('sections.mobile.title')}</h3>
                </div>
                <p className="text-gray-700 mb-3">{t('sections.mobile.content')}</p>
                <ul className="text-gray-700 space-y-2 pl-4">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <li key={i}>• {t(`sections.mobile.items.${i}`)}</li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-cnbd-red/10 p-3 rounded-full">
                    <svg className="w-8 h-8 text-cnbd-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2 2a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2z"></path>
                      <path d="M2 10a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4z"></path>
                      <path d="M2 18a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4z"></path>
                    </svg>
                  </div>
                  <h3 className="font-bold text-xl">{t('sections.virtual.title')}</h3>
                </div>
                <p className="text-gray-700 mb-3">{t('sections.virtual.content')}</p>
                <ul className="text-gray-700 space-y-2 pl-4">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <li key={i}>• {t(`sections.virtual.items.${i}`)}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Solutions de virtualisation */}
          <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col md:flex-row gap-8 items-center" data-aos="fade-left">
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-cnbd-red mb-3">{t('sections.virtualization.title')}</h2>
              <p className="text-gray-700 mb-4">
                {t('sections.virtualization.content')}
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-cnbd-red/10 p-2 rounded-full mt-1">
                    <svg className="w-5 h-5 text-cnbd-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">{t('sections.virtualization.benefits.management.title')}</h3>
                    <p className="text-gray-700 text-sm">{t('sections.virtualization.benefits.management.description')}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-cnbd-red/10 p-2 rounded-full mt-1">
                    <svg className="w-5 h-5 text-cnbd-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">{t('sections.virtualization.benefits.security.title')}</h3>
                    <p className="text-gray-700 text-sm">{t('sections.virtualization.benefits.security.description')}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-cnbd-red/10 p-2 rounded-full mt-1">
                    <svg className="w-5 h-5 text-cnbd-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">{t('sections.virtualization.benefits.mobility.title')}</h3>
                    <p className="text-gray-700 text-sm">{t('sections.virtualization.benefits.mobility.description')}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-cnbd-red/10 p-2 rounded-full mt-1">
                    <svg className="w-5 h-5 text-cnbd-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">{t('sections.virtualization.benefits.cost.title')}</h3>
                    <p className="text-gray-700 text-sm">{t('sections.virtualization.benefits.cost.description')}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <Image src="/poste3.jpg" alt="Solutions de virtualisation" width={500} height={400} className="rounded-xl shadow-lg object-cover" />
            </div>
          </div>

          {/* Ergonomie et confort */}
          <div className="bg-white rounded-2xl shadow-xl p-8" data-aos="fade-right">
            <div className="flex flex-col md:flex-row gap-8 items-center mb-6">
              <div className="flex-1 flex justify-center">
                <Image src="/image-defaut.jpg" alt="Poste de travail ergonomique" width={500} height={400} className="rounded-xl shadow-lg object-cover" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-cnbd-red mb-3">{t('sections.ergonomics.title')}</h2>
                <p className="text-gray-700">
                  {t('sections.ergonomics.content')}
                </p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-6 rounded-xl shadow-md text-center">
                <div className="bg-white shadow-md rounded-lg p-4 mx-auto w-20 h-20 flex items-center justify-center mb-4">
                  <svg className="w-10 h-10 text-cnbd-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                    <line x1="8" y1="21" x2="16" y2="21"></line>
                    <line x1="12" y1="17" x2="12" y2="21"></line>
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">{t('sections.ergonomics.items.screens.title')}</h3>
                <p className="text-gray-600 text-sm">{t('sections.ergonomics.items.screens.description')}</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl shadow-md text-center">
                <div className="bg-white shadow-md rounded-lg p-4 mx-auto w-20 h-20 flex items-center justify-center mb-4">
                  <svg className="w-10 h-10 text-cnbd-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">{t('sections.ergonomics.items.peripherals.title')}</h3>
                <p className="text-gray-600 text-sm">{t('sections.ergonomics.items.peripherals.description')}</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl shadow-md text-center">
                <div className="bg-white shadow-md rounded-lg p-4 mx-auto w-20 h-20 flex items-center justify-center mb-4">
                  <svg className="w-10 h-10 text-cnbd-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">{t('sections.ergonomics.items.furniture.title')}</h3>
                <p className="text-gray-600 text-sm">{t('sections.ergonomics.items.furniture.description')}</p>
              </div>
            </div>
          </div>

          {/* Comment choisir vos équipements */}
          <div className="bg-white rounded-2xl shadow-xl p-8" data-aos="fade-left">
            <h2 className="text-2xl font-bold text-cnbd-red mb-6 text-center">{t('sections.choose.title')}</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-xl shadow-md">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-cnbd-red/10 p-3 rounded-full flex-shrink-0">
                    <svg className="w-6 h-6 text-cnbd-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
                      <polyline points="10 17 15 12 10 7"></polyline>
                      <line x1="15" y1="12" x2="3" y2="12"></line>
                    </svg>
                  </div>
                  <h3 className="font-bold text-lg">{t('sections.choose.options.needs.title')}</h3>
                </div>
                <p className="text-gray-700">
                  {t('sections.choose.options.needs.description')}
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl shadow-md">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-cnbd-red/10 p-3 rounded-full flex-shrink-0">
                    <svg className="w-6 h-6 text-cnbd-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
                      <line x1="7" y1="7" x2="7.01" y2="7"></line>
                    </svg>
                  </div>
                  <h3 className="font-bold text-lg">{t('sections.choose.options.quality.title')}</h3>
                </div>
                <p className="text-gray-700">
                  {t('sections.choose.options.quality.description')}
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl shadow-md">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-cnbd-red/10 p-3 rounded-full flex-shrink-0">
                    <svg className="w-6 h-6 text-cnbd-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="3" y1="9" x2="21" y2="9"></line>
                      <line x1="9" y1="21" x2="9" y2="9"></line>
                    </svg>
                  </div>
                  <h3 className="font-bold text-lg">{t('sections.choose.options.scalability.title')}</h3>
                </div>
                <p className="text-gray-700">
                  {t('sections.choose.options.scalability.description')}
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl shadow-md">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-cnbd-red/10 p-3 rounded-full flex-shrink-0">
                    <svg className="w-6 h-6 text-cnbd-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                  </div>
                  <h3 className="font-bold text-lg">{t('sections.choose.options.expert.title')}</h3>
                </div>
                <p className="text-gray-700">
                  {t('sections.choose.options.expert.description')}
                </p>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <a href="/contact" className="inline-flex items-center bg-cnbd-red text-white px-6 py-3 rounded-full font-bold hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:translate-y-[-2px] group">
                {t('sections.choose.cta')}
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="container mx-auto px-4 max-w-5xl py-8">
          <div className="bg-white rounded-2xl shadow-xl p-8" data-aos="fade-up">
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
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
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