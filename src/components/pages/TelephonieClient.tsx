'use client';

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Breadcrumbs from "../navigation/Breadcrumbs";
import AOS from "aos";
import "aos/dist/aos.css";
import { Phone, Headphones, Users, Smartphone, Smile, DollarSign, TrendingUp, Shield, BarChart, Plus, Check, ChevronDown } from 'lucide-react';
import { useTranslations } from "next-intl";

const faqs = [
  { q: "Quels types de solutions de téléphonie proposez-vous ?", a: "Nous proposons une gamme complète de solutions de téléphonie d'entreprise : téléphonie sur IP (VoIP), centrex, communications unifiées, standard téléphonique virtuel, solutions mobiles et fixes." },
  { q: "Quels sont les avantages de la téléphonie IP par rapport à la téléphonie traditionnelle ?", a: "La téléphonie IP offre une réduction des coûts, une flexibilité accrue, une meilleure intégration avec vos outils informatiques, des fonctionnalités avancées et une évolutivité selon vos besoins." },
  { q: "Pouvez-vous gérer la transition entre notre système actuel et une nouvelle solution ?", a: "Oui, nous assurons une transition en douceur avec un minimum d'impact sur votre activité. Nous gérons l'installation, la configuration, le transfert de numéros et la formation des utilisateurs." },
  { q: "Proposez-vous des solutions adaptées aux TPE/PME ?", a: "Absolument. Nos solutions sont modulables et s'adaptent parfaitement aux besoins et budgets des TPE/PME, tout en offrant des fonctionnalités professionnelles." },
];

export default function TelephonieClient() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const t = useTranslations('telephonie_page');

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
                <div className="relative overflow-hidden rounded-[2rem] shadow-2xl border-8 border-white">
                  <Image 
                    src="/telephonie1.jpg" 
                    alt="Solutions de Téléphonie d'Entreprise" 
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
                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"></path>
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold">{t('badges.unified.title')}</div>
                      <div className="text-sm text-gray-500">{t('badges.unified.subtitle')}</div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -left-10 bottom-20 bg-white rounded-2xl shadow-xl p-4 backdrop-blur">
                  <div className="flex items-center gap-3">
                    <div className="bg-cnbd-red/10 p-2 rounded-lg">
                      <svg className="w-8 h-8 text-cnbd-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold">{t('badges.mobility.title')}</div>
                      <div className="text-sm text-gray-500">{t('badges.mobility.subtitle')}</div>
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
          {/* Les enjeux de la téléphonie moderne */}
          <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col md:flex-row gap-8 items-center" data-aos="fade-right">
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-cnbd-red mb-3">{t('sections.transformation.title')}</h2>
              <p className="text-gray-700">
                {t('sections.transformation.content')}
              </p>
            </div>
            <div className="flex-1 flex justify-center">
              <Image src="/telephonie2.jpg" alt="Téléphonie moderne" width={600} height={300} className="object-contain bg-white rounded-xl shadow p-2" />
            </div>
          </div>

          {/* Nos solutions de téléphonie */}
          <div className="bg-gray-50 rounded-2xl shadow-lg p-8" data-aos="fade-left">
            <h2 className="text-2xl font-bold text-cnbd-red mb-3">{t('sections.solutions.title')}</h2>
            <p className="text-gray-700 mb-6">{t('sections.solutions.content')}</p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-cnbd-red/10 p-3 rounded-full">
                    <Phone className="w-8 h-8 text-cnbd-red" />
                  </div>
                  <h3 className="font-bold text-xl">{t('sections.solutions.items.voip.title')}</h3>
                </div>
                <p className="text-gray-700">{t('sections.solutions.items.voip.description')}</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-cnbd-red/10 p-3 rounded-full">
                    <Headphones className="w-8 h-8 text-cnbd-red" />
                  </div>
                  <h3 className="font-bold text-xl">{t('sections.solutions.items.virtual.title')}</h3>
                </div>
                <p className="text-gray-700">{t('sections.solutions.items.virtual.description')}</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-cnbd-red/10 p-3 rounded-full">
                    <Users className="w-8 h-8 text-cnbd-red" />
                  </div>
                  <h3 className="font-bold text-xl">{t('sections.solutions.items.unified.title')}</h3>
                </div>
                <p className="text-gray-700">{t('sections.solutions.items.unified.description')}</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-cnbd-red/10 p-3 rounded-full">
                    <Smartphone className="w-8 h-8 text-cnbd-red" />
                  </div>
                  <h3 className="font-bold text-xl">{t('sections.solutions.items.mobile.title')}</h3>
                </div>
                <p className="text-gray-700">{t('sections.solutions.items.mobile.description')}</p>
              </div>
            </div>
          </div>

          {/* Les avantages de nos solutions */}
          <div id="avantages" className="bg-white rounded-2xl shadow-xl p-8" data-aos="fade-up">
            <h2 className="text-2xl font-bold text-cnbd-red mb-8">{t('sections.benefits.title')}</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center gap-2">
                <span className="inline-flex items-center justify-center bg-cnbd-red/10 text-cnbd-red rounded-full w-14 h-14 mb-2">
                  <Smile className="w-8 h-8" />
                </span>
                <span className="font-semibold">{t('sections.benefits.items.experience.title')}</span>
                <span className="text-gray-600 text-sm">{t('sections.benefits.items.experience.description')}</span>
              </div>
              
              <div className="flex flex-col items-center text-center gap-2">
                <span className="inline-flex items-center justify-center bg-cnbd-red/10 text-cnbd-red rounded-full w-14 h-14 mb-2">
                  <DollarSign className="w-8 h-8" />
                </span>
                <span className="font-semibold">{t('sections.benefits.items.cost.title')}</span>
                <span className="text-gray-600 text-sm">{t('sections.benefits.items.cost.description')}</span>
              </div>
              
              <div className="flex flex-col items-center text-center gap-2">
                <span className="inline-flex items-center justify-center bg-cnbd-red/10 text-cnbd-red rounded-full w-14 h-14 mb-2">
                  <TrendingUp className="w-8 h-8" />
                </span>
                <span className="font-semibold">{t('sections.benefits.items.performance.title')}</span>
                <span className="text-gray-600 text-sm">{t('sections.benefits.items.performance.description')}</span>
              </div>
              
              <div className="flex flex-col items-center text-center gap-2">
                <span className="inline-flex items-center justify-center bg-cnbd-red/10 text-cnbd-red rounded-full w-14 h-14 mb-2">
                  <Shield className="w-8 h-8" />
                </span>
                <span className="font-semibold">{t('sections.benefits.items.security.title')}</span>
                <span className="text-gray-600 text-sm">{t('sections.benefits.items.security.description')}</span>
              </div>
              
              <div className="flex flex-col items-center text-center gap-2">
                <span className="inline-flex items-center justify-center bg-cnbd-red/10 text-cnbd-red rounded-full w-14 h-14 mb-2">
                  <BarChart className="w-8 h-8" />
                </span>
                <span className="font-semibold">{t('sections.benefits.items.scalability.title')}</span>
                <span className="text-gray-600 text-sm">{t('sections.benefits.items.scalability.description')}</span>
              </div>
              
              <div className="flex flex-col items-center text-center gap-2">
                <span className="inline-flex items-center justify-center bg-cnbd-red/10 text-cnbd-red rounded-full w-14 h-14 mb-2">
                  <Plus className="w-8 h-8" />
                </span>
                <span className="font-semibold">{t('sections.benefits.items.integration.title')}</span>
                <span className="text-gray-600 text-sm">{t('sections.benefits.items.integration.description')}</span>
              </div>
            </div>
          </div>
          
          {/* Fonctionnalités incluses */}
          <div className="bg-gray-50 rounded-2xl shadow-lg p-8" data-aos="fade-left">
            <h2 className="text-2xl font-bold text-cnbd-red mb-6">{t('sections.features.title')}</h2>
            <div className="grid md:grid-cols-2 gap-4 text-gray-800">
              <ul className="space-y-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="inline-flex items-center justify-center bg-cnbd-red/10 text-cnbd-red rounded-full w-8 h-8">
                      <Check className="w-5 h-5" />
                    </span>
                    {t(`sections.features.items.${i}`)}
                  </li>
                ))}
              </ul>
              <ul className="space-y-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <li key={i + 5} className="flex items-center gap-3">
                    <span className="inline-flex items-center justify-center bg-cnbd-red/10 text-cnbd-red rounded-full w-8 h-8">
                      <Check className="w-5 h-5" />
                    </span>
                    {t(`sections.features.items.${i + 5}`)}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Notre approche */}
        <section className="container mx-auto px-4 max-w-5xl ">
          <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col md:flex-row gap-8 items-center" data-aos="fade-right">
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-cnbd-red mb-3">{t('sections.approach.title')}</h2>
              <p className="text-gray-700 mb-4">
                {t('sections.approach.intro')}
              </p>
              <ol className="space-y-4 mt-6">
                {Array.from({ length: 4 }).map((_, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="bg-cnbd-red text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">{i + 1}</div>
                    <div>
                      <h3 className="font-semibold text-lg">{t(`sections.approach.steps.${i}.title`)}</h3>
                      <p className="text-gray-600">{t(`sections.approach.steps.${i}.description`)}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
            <div className="flex-1 flex justify-center">
              <Image src="/telephonie3.jpg" alt="Notre approche" width={400} height={400} className="rounded-xl shadow-lg" />
            </div>
          </div>
        </section>

        {/* Matériel et équipements */}
        <section className="container mx-auto px-4 max-w-5xl py-12">
          <div className="bg-white rounded-2xl shadow-xl p-8" data-aos="fade-up">
            <h2 className="text-2xl font-bold text-cnbd-red mb-6">{t('sections.equipment.title')}</h2>
            <p className="text-gray-700 mb-6">
              {t('sections.equipment.intro')}
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-6 rounded-xl text-center">
                <div className="bg-white shadow-md rounded-lg p-4 mx-auto w-28 h-28 flex items-center justify-center mb-4">
                  <Image src="/image-defaut.jpg" alt="Téléphones IP" width={80} height={80} className="object-contain" />
                </div>
                <h3 className="font-semibold mb-2">{t('sections.equipment.items.phones.title')}</h3>
                <p className="text-gray-600 text-sm">{t('sections.equipment.items.phones.description')}</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl text-center">
                <div className="bg-white shadow-md rounded-lg p-4 mx-auto w-28 h-28 flex items-center justify-center mb-4">
                  <Image src="/image-defaut.jpg" alt="IPBX" width={80} height={80} className="object-contain" />
                </div>
                <h3 className="font-semibold mb-2">{t('sections.equipment.items.ipbx.title')}</h3>
                <p className="text-gray-600 text-sm">{t('sections.equipment.items.ipbx.description')}</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl text-center">
                <div className="bg-white shadow-md rounded-lg p-4 mx-auto w-28 h-28 flex items-center justify-center mb-4">
                  <Image src="/image-defaut.jpg" alt="Casques" width={80} height={80} className="object-contain" />
                </div>
                <h3 className="font-semibold mb-2">{t('sections.equipment.items.headsets.title')}</h3>
                <p className="text-gray-600 text-sm">{t('sections.equipment.items.headsets.description')}</p>
              </div>
            </div>
          </div>
        </section>
             {/* Appel à l'action */}
             <section className="container mx-auto px-4 max-w-5xl">
               <div className="bg-cnbd-red rounded-2xl shadow-xl p-8 text-white text-center flex flex-col items-center gap-6" data-aos="zoom-in">
                 <h2 className="text-2xl font-bold mb-2">{t('cta_section.title')}</h2>
                 <p className="text-lg mb-4">{t('cta_section.content')}</p>
                 <div className="flex flex-wrap gap-4 justify-center">
                   <a href="/contact" className="px-6 py-3 bg-white text-cnbd-red font-bold rounded-lg shadow-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">{t('cta_section.button1')}</a>
                   <a href="/contact" className="px-6 py-3 bg-transparent border-2 border-white text-white font-bold rounded-lg shadow-lg hover:bg-white/10 transition-all duration-300 transform hover:scale-105">{t('cta_section.button2')}</a>
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
                         <ChevronDown 
                           className={`w-5 h-5 text-cnbd-red transform transition-transform duration-300 ${
                             openIndex === i ? 'rotate-180' : ''
                           }`}
                         />
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