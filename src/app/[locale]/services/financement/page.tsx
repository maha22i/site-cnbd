"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Breadcrumbs from "@/components/navigation/Breadcrumbs";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import { useTranslations } from "next-intl";

const faqs = [
  { q: "Quels sont les avantages du leasing informatique ?", a: "Le leasing vous permet de disposer des dernières technologies sans mobiliser votre trésorerie, avec des loyers mensuels fixes qui facilitent la gestion budgétaire. Vous préservez votre capacité d'emprunt et bénéficiez d'une solution flexible." },
  { q: "Quelle est la durée minimale et maximale d'un contrat de leasing ?", a: "Nos contrats de leasing s'étendent généralement de 2 à 5 ans selon vos besoins et le type d'équipement. Nous adaptons la durée à votre cycle d'investissement et à l'évolution technologique de vos équipements." },
  { q: "Que se passe-t-il à la fin du contrat de leasing ?", a: "À l'échéance, vous avez trois options : renouveler votre parc avec de nouveaux équipements, racheter le matériel à sa valeur résiduelle, ou simplement restituer les équipements. Nous vous accompagnons dans votre choix." },
  { q: "Quels équipements peuvent être financés par leasing ?", a: "Tous vos équipements informatiques peuvent être financés : postes de travail, serveurs, réseaux, solutions de sauvegarde, téléphonie, imprimantes, écrans interactifs, logiciels, et même les prestations d'installation et de maintenance." },
];

const avantages = [
  {
    title: "Flexibilité",
    description: "Des solutions personnalisées selon la taille de votre entreprise et la nature de vos projets.",
    icon: (
      <svg className="w-8 h-8 text-cnbd-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
      </svg>
    ),
  },
  {
    title: "Accompagnement",
    description: "Un interlocuteur unique vous guide dans le choix de la solution la plus adaptée à vos besoins.",
    icon: (
      <svg className="w-8 h-8 text-cnbd-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    ),
  },
  {
    title: "Simplicité",
    description: "Nous gérons l'ensemble des démarches administratives avec nos partenaires financiers.",
    icon: (
      <svg className="w-8 h-8 text-cnbd-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
        <polyline points="14 2 14 8 20 8"></polyline>
        <line x1="16" y1="13" x2="8" y2="13"></line>
        <line x1="16" y1="17" x2="8" y2="17"></line>
        <polyline points="10 9 9 9 8 9"></polyline>
      </svg>
    ),
  },
  {
    title: "Technologie à jour",
    description: "Renouvelez facilement votre parc informatique pour rester à la pointe de l'innovation.",
    icon: (
      <svg className="w-8 h-8 text-cnbd-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
        <line x1="8" y1="21" x2="16" y2="21"></line>
        <line x1="12" y1="17" x2="12" y2="21"></line>
      </svg>
    ),
  },
];

const equipements = [
  "Postes informatiques",
  "Serveurs",
  "Réseaux",
  "Solutions de sauvegarde",
  "Téléphonie",
  "Imprimantes",
  "Écrans interactifs",
];

export default function FinancementPage() {
  const t = useTranslations('financing');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    { q: t('faqs.q1'), a: t('faqs.a1') },
    { q: t('faqs.q2'), a: t('faqs.a2') },
    { q: t('faqs.q3'), a: t('faqs.a3') },
    { q: t('faqs.q4'), a: t('faqs.a4') },
  ];
  
  const avantages = [
    {
      title: t('advantages.flexibility.title'),
      description: t('advantages.flexibility.description'),
      icon: (
        <svg className="w-8 h-8 text-cnbd-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
        </svg>
      ),
    },
    {
      title: t('advantages.support.title'),
      description: t('advantages.support.description'),
      icon: (
        <svg className="w-8 h-8 text-cnbd-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
    },
    {
      title: t('advantages.simplicity.title'),
      description: t('advantages.simplicity.description'),
      icon: (
        <svg className="w-8 h-8 text-cnbd-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="16" y1="13" x2="8" y2="13"></line>
          <line x1="16" y1="17" x2="8" y2="17"></line>
          <polyline points="10 9 9 9 8 9"></polyline>
        </svg>
      ),
    },
    {
      title: t('advantages.technology.title'),
      description: t('advantages.technology.description'),
      icon: (
        <svg className="w-8 h-8 text-cnbd-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
        </svg>
      ),
    },
  ];
  
  const equipements = [
    t('equipment.computers'),
    t('equipment.servers'),
    t('equipment.networks'),
    t('equipment.backup'),
    t('equipment.telephony'),
    t('equipment.printers'),
    t('equipment.displays'),
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
                    {t('hero.cta.quote')}
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
                    {t('hero.cta.discover')}
                  </button>
                </div>
              </div>
              
              <div className="relative" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="300">
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-cnbd-red/5 rounded-full blur-2xl -z-10"></div>
                <div className="relative overflow-hidden rounded-[2rem] shadow-2xl border-8 border-white">
                  <Image 
                    src="/financement1.png" 
                    alt={t('hero.image.alt')} 
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
                        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold">{t('hero.badge1.title')}</div>
                      <div className="text-sm text-gray-500">{t('hero.badge1.subtitle')}</div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -left-10 bottom-20 bg-white rounded-2xl shadow-xl p-4 backdrop-blur">
                  <div className="flex items-center gap-3">
                    <div className="bg-cnbd-red/10 p-2 rounded-lg">
                      <svg className="w-8 h-8 text-cnbd-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold">{t('hero.badge2.title')}</div>
                      <div className="text-sm text-gray-500">{t('hero.badge2.subtitle')}</div>
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
          {/* Pourquoi le leasing */}
          <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col md:flex-row gap-8 items-center" data-aos="fade-right">
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-cnbd-red mb-3">{t('why.title')}</h2>
              <p className="text-gray-700">
                {t('why.description')}
              </p>
            </div>
            <div className="flex-1 flex justify-center">
              <Image src="/financement2.png" alt={t('why.image.alt')} width={400} height={100} className="object-contain bg-white rounded-xl shadow p-2" />
            </div>
          </div>

          {/* Nos avantages */}
          <div id="avantages" className="bg-gray-50 rounded-2xl shadow-lg p-8" data-aos="fade-left">
            <h2 className="text-2xl font-bold text-cnbd-red mb-3">{t('advantages.title')}</h2>
            <p className="text-gray-700 mb-6">{t('advantages.description')}</p>
            <div className="grid md:grid-cols-2 gap-6">
              {avantages.map((avantage, index) => (
                <div key={index} className="flex items-start gap-4 bg-white p-4 rounded-xl">
                  <div className="bg-cnbd-red/10 p-2 rounded-lg">
                    {avantage.icon}
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">{avantage.title}</h4>
                    <p className="text-gray-700">{avantage.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Avantages du leasing */}
          <div className="bg-white rounded-2xl shadow-xl p-8" data-aos="fade-up">
            <h2 className="text-2xl font-bold text-cnbd-red mb-3">{t('benefits.title')}</h2>
            <ul className="grid md:grid-cols-3 gap-6 text-gray-800">
              <li className="flex flex-col items-center text-center gap-2">
                <span className="inline-flex items-center justify-center bg-cnbd-red/10 text-cnbd-red rounded-full w-14 h-14 mb-2">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="1" x2="12" y2="23"></line>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                  </svg>
                </span>
                <span className="font-semibold">{t('benefits.cash.title')}</span>
                <span className="text-gray-600 text-sm">{t('benefits.cash.description')}</span>
              </li>
              <li className="flex flex-col items-center text-center gap-2">
                <span className="inline-flex items-center justify-center bg-cnbd-red/10 text-cnbd-red rounded-full w-14 h-14 mb-2">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                  </svg>
                </span>
                <span className="font-semibold">{t('benefits.budget.title')}</span>
                <span className="text-gray-600 text-sm">{t('benefits.budget.description')}</span>
              </li>
              <li className="flex flex-col items-center text-center gap-2">
                <span className="inline-flex items-center justify-center bg-cnbd-red/10 text-cnbd-red rounded-full w-14 h-14 mb-2">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                    <line x1="12" y1="22.08" x2="12" y2="12"></line>
                  </svg>
                </span>
                <span className="font-semibold">{t('benefits.technology.title')}</span>
                <span className="text-gray-600 text-sm">{t('benefits.technology.description')}</span>
              </li>
              <li className="flex flex-col items-center text-center gap-2">
                <span className="inline-flex items-center justify-center bg-cnbd-red/10 text-cnbd-red rounded-full w-14 h-14 mb-2">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                  </svg>
                </span>
                <span className="font-semibold">{t('benefits.simplicity.title')}</span>
                <span className="text-gray-600 text-sm">{t('benefits.simplicity.description')}</span>
              </li>
              <li className="flex flex-col items-center text-center gap-2">
                <span className="inline-flex items-center justify-center bg-cnbd-red/10 text-cnbd-red rounded-full w-14 h-14 mb-2">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 11H1v3h8v3l3-4-3-4z"></path>
                    <path d="M22 12h-7"></path>
                  </svg>
                </span>
                <span className="font-semibold">{t('benefits.flexibility.title')}</span>
                <span className="text-gray-600 text-sm">{t('benefits.flexibility.description')}</span>
              </li>
              <li className="flex flex-col items-center text-center gap-2">
                <span className="inline-flex items-center justify-center bg-cnbd-red/10 text-cnbd-red rounded-full w-14 h-14 mb-2">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <rect x="8" y="8" width="8" height="8" rx="1" ry="1"></rect>
                  </svg>
                </span>
                <span className="font-semibold">{t('benefits.borrowing.title')}</span>
                <span className="text-gray-600 text-sm">{t('benefits.borrowing.description')}</span>
              </li>
            </ul>
          </div>

          {/* Équipements éligibles */}
          <div className="bg-gray-50 rounded-2xl shadow-lg p-8" data-aos="fade-left">
            <h2 className="text-2xl font-bold text-cnbd-red mb-3">{t('equipment.title')}</h2>
            <p className="text-gray-700 mb-6">{t('equipment.description')}</p>
            <div className="grid md:grid-cols-4 gap-4">
              {equipements.map((equipement, index) => (
                <div key={index} className="bg-white rounded-xl p-4 text-center hover:shadow-md transition-all duration-300">
                  <div className="bg-cnbd-red/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-cnbd-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                      <line x1="8" y1="21" x2="16" y2="21"></line>
                      <line x1="12" y1="17" x2="12" y2="21"></line>
                    </svg>
                  </div>
                  <h3 className="font-semibold text-sm">{equipement}</h3>
                </div>
              ))}
            </div>
          </div>

          {/* Process et Partenaires */}
          <div className="bg-white rounded-2xl shadow-xl p-8 space-y-12">
            {/* Process de financement */}
            <div className="flex flex-col md:flex-row gap-8 items-center" data-aos="fade-right">
              <div className="flex-1 flex justify-center">
                <Image src="/financement3.png" alt={t('process.image.alt')} width={320} height={220} className="rounded-xl shadow-lg object-cover" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-red-600 mb-3">{t('process.title')}</h2>
                <p className="text-gray-700">{t('process.description')}</p>
              </div>
            </div>

            <div className="h-px bg-gray-200 w-full"></div>

            {/* Partenaires financiers */}
            <div className="flex flex-col md:flex-row gap-8 items-center" data-aos="fade-left">
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-red-600 mb-3">{t('partners.title')}</h2>
                <p className="text-gray-700">{t('partners.description')}</p>
              </div>
              <div className="flex-1 flex justify-center">
                <Image src="/financement4.png" alt={t('partners.image.alt')} width={320} height={220} className="rounded-xl shadow-lg object-cover" />
              </div>
            </div>
          </div>

          {/* Appel à l'action */}
          <div className="bg-cnbd-red rounded-2xl shadow-xl p-8 text-white text-center flex flex-col items-center gap-6" data-aos="zoom-in">
            <h2 className="text-2xl font-bold mb-2">{t('cta.title')}</h2>
            <p className="text-lg mb-4">{t('cta.description')}</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="/contact" className="px-6 py-3 bg-white text-cnbd-red font-bold rounded-lg shadow-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">{t('cta.simulation')}</a>
              <a href="/contact" className="px-6 py-3 bg-transparent border-2 border-white text-white font-bold rounded-lg shadow-lg hover:bg-white/10 transition-all duration-300 transform hover:scale-105">{t('cta.callback')}</a>
            </div>
          </div>

          {/* FAQ */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mt-8" data-aos="fade-up">
            <h2 className="text-2xl font-bold text-cnbd-red mb-6 text-center">{t('faqs.title')}</h2>
            <div className="space-y-4 max-w-3xl mx-auto">
              {faqs.map((item, i) => (
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
                    <h3 className="font-bold text-cnbd-red">{item.q}</h3>
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
                      {item.a}
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