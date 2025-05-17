"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Breadcrumbs from "@/components/navigation/Breadcrumbs";
import AOS from "aos";
import "aos/dist/aos.css";

const faqs = [
  { q: "Quels types de solutions de téléphonie proposez-vous ?", a: "Nous proposons une gamme complète de solutions de téléphonie d'entreprise : téléphonie sur IP (VoIP), centrex, communications unifiées, standard téléphonique virtuel, solutions mobiles et fixes." },
  { q: "Quels sont les avantages de la téléphonie IP par rapport à la téléphonie traditionnelle ?", a: "La téléphonie IP offre une réduction des coûts, une flexibilité accrue, une meilleure intégration avec vos outils informatiques, des fonctionnalités avancées et une évolutivité selon vos besoins." },
  { q: "Pouvez-vous gérer la transition entre notre système actuel et une nouvelle solution ?", a: "Oui, nous assurons une transition en douceur avec un minimum d'impact sur votre activité. Nous gérons l'installation, la configuration, le transfert de numéros et la formation des utilisateurs." },
  { q: "Proposez-vous des solutions adaptées aux TPE/PME ?", a: "Absolument. Nos solutions sont modulables et s'adaptent parfaitement aux besoins et budgets des TPE/PME, tout en offrant des fonctionnalités professionnelles." },
];

export default function TelephoniePage() {
  useEffect(() => {
    AOS.init({ once: true, duration: 900, offset: 80 });
  }, []);

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
                  <span className="block">Solutions de</span>
                  <span className="text-cnbd-red">Téléphonie</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-lg leading-relaxed">
                  Optimisez vos communications professionnelles avec des solutions de téléphonie modernes, évolutives et adaptées à vos besoins. CNBD vous accompagne pour une transition en douceur vers la téléphonie d'entreprise nouvelle génération.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="/contact" className="inline-flex items-center bg-cnbd-red text-white px-8 py-4 rounded-full font-bold hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:translate-y-[-2px] group">
                    Demander un devis
                    <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </a>
                  <a href="#avantages" className="inline-flex items-center bg-white text-cnbd-black border-2 border-gray-200 px-8 py-4 rounded-full font-bold hover:border-cnbd-red/30 transition-all duration-300 shadow-lg hover:shadow-xl hover:translate-y-[-2px]">
                    Découvrir nos solutions
                  </a>
                </div>
                
                <div className="mt-12 flex items-center gap-4">
                  <div className="bg-white p-3 rounded-full shadow-md">
                    <svg className="w-6 h-6 text-cnbd-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">Solutions complètes et sur-mesure</span>
                </div>
              </div>
              
              <div className="relative" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="300">
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-cnbd-red/5 rounded-full blur-2xl -z-10"></div>
                <div className="relative overflow-hidden rounded-[2rem] shadow-2xl border-8 border-white">
                  <Image 
                    src="/image-defaut.jpg" 
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
                      <div className="font-bold">Communications unifiées</div>
                      <div className="text-sm text-gray-500">Simplicité et performance</div>
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
                      <div className="font-bold">Mobilité totale</div>
                      <div className="text-sm text-gray-500">Toujours connecté</div>
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
          {/* Les enjeux de la téléphonie moderne */}
          <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col md:flex-row gap-8 items-center" data-aos="fade-right">
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-cnbd-red mb-3">La téléphonie au cœur de la transformation digitale</h2>
              <p className="text-gray-700">
                La téléphonie professionnelle évolue avec la révolution numérique. Les solutions traditionnelles laissent place à des systèmes intégrés, flexibles et connectés qui s'adaptent aux nouveaux modes de travail. CNBD vous accompagne dans cette évolution avec des solutions innovantes qui répondent aux enjeux actuels : mobilité, collaboration à distance, expérience client optimisée et maîtrise des coûts.
              </p>
            </div>
            <div className="flex-1 flex justify-center">
              <Image src="/digitale.webp" alt="Téléphonie moderne" width={600} height={300} className="object-contain bg-white rounded-xl shadow p-2" />
            </div>
          </div>

          {/* Nos solutions de téléphonie */}
          <div className="bg-gray-50 rounded-2xl shadow-lg p-8" data-aos="fade-left">
            <h2 className="text-2xl font-bold text-cnbd-red mb-3">Des solutions complètes pour vos communications</h2>
            <p className="text-gray-700 mb-6">CNBD propose une gamme complète de solutions de téléphonie adaptées à toutes les tailles d'entreprise :</p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-cnbd-red/10 p-3 rounded-full">
                    <svg className="w-8 h-8 text-cnbd-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"></path>
                    </svg>
                  </div>
                  <h3 className="font-bold text-xl">Téléphonie IP (VoIP)</h3>
                </div>
                <p className="text-gray-700">Transformez votre infrastructure de communication avec la technologie IP. Réduisez vos coûts tout en bénéficiant de fonctionnalités avancées et d'une intégration parfaite avec vos outils informatiques.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-cnbd-red/10 p-3 rounded-full">
                    <svg className="w-8 h-8 text-cnbd-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line>
                    </svg>
                  </div>
                  <h3 className="font-bold text-xl">Standard téléphonique virtuel</h3>
                </div>
                <p className="text-gray-700">Centralisez la gestion de vos appels avec un standard moderne et flexible. Personnalisez vos accueils, gérez les files d'attente et dirigez les appels efficacement sans infrastructure physique complexe.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-cnbd-red/10 p-3 rounded-full">
                    <svg className="w-8 h-8 text-cnbd-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line>
                    </svg>
                  </div>
                  <h3 className="font-bold text-xl">Communications unifiées</h3>
                </div>
                <p className="text-gray-700">Intégrez votre téléphonie avec vos outils de messagerie, visioconférence et partage de documents. Simplifiez la collaboration et améliorez la productivité avec une solution tout-en-un.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-cnbd-red/10 p-3 rounded-full">
                    <svg className="w-8 h-8 text-cnbd-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-6.117 1.182 1.181-6.117L5 9l.257-.257A6 6 0 0118 8z"></path><line x1="11.05" y1="11.05" x2="16.01" y2="16.01"></line>
                    </svg>
                  </div>
                  <h3 className="font-bold text-xl">Téléphonie mobile intégrée</h3>
                </div>
                <p className="text-gray-700">Synchronisez vos appareils fixes et mobiles au sein d'un écosystème cohérent. Restez joignable où que vous soyez, tout en préservant l'équilibre vie professionnelle/vie privée.</p>
              </div>
            </div>
          </div>

          {/* Les avantages de nos solutions */}
          <div id="avantages" className="bg-white rounded-2xl shadow-xl p-8" data-aos="fade-up">
            <h2 className="text-2xl font-bold text-cnbd-red mb-8">Les bénéfices pour votre entreprise</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center gap-2">
                <span className="inline-flex items-center justify-center bg-cnbd-red/10 text-cnbd-red rounded-full w-14 h-14 mb-2">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle><path d="M16 16s-1.5-2-4-2-4 2-4 2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line>
                  </svg>
                </span>
                <span className="font-semibold">Expérience client améliorée</span>
                <span className="text-gray-600 text-sm">Accueil professionnel, réduction des temps d'attente, suivi des appels</span>
              </div>
              
              <div className="flex flex-col items-center text-center gap-2">
                <span className="inline-flex items-center justify-center bg-cnbd-red/10 text-cnbd-red rounded-full w-14 h-14 mb-2">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                  </svg>
                </span>
                <span className="font-semibold">Réduction des coûts</span>
                <span className="text-gray-600 text-sm">Économies sur les factures, optimisation des ressources, ROI rapide</span>
              </div>
              
              <div className="flex flex-col items-center text-center gap-2">
                <span className="inline-flex items-center justify-center bg-cnbd-red/10 text-cnbd-red rounded-full w-14 h-14 mb-2">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                  </svg>
                </span>
                <span className="font-semibold">Performance optimisée</span>
                <span className="text-gray-600 text-sm">Communications fluides, gain de temps, productivité accrue</span>
              </div>
              
              <div className="flex flex-col items-center text-center gap-2">
                <span className="inline-flex items-center justify-center bg-cnbd-red/10 text-cnbd-red rounded-full w-14 h-14 mb-2">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 9.9-1"></path>
                  </svg>
                </span>
                <span className="font-semibold">Sécurité renforcée</span>
                <span className="text-gray-600 text-sm">Communications cryptées, protection contre les fraudes</span>
              </div>
              
              <div className="flex flex-col items-center text-center gap-2">
                <span className="inline-flex items-center justify-center bg-cnbd-red/10 text-cnbd-red rounded-full w-14 h-14 mb-2">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>
                  </svg>
                </span>
                <span className="font-semibold">Évolutivité</span>
                <span className="text-gray-600 text-sm">Adaptation facile à la croissance de votre entreprise</span>
              </div>
              
              <div className="flex flex-col items-center text-center gap-2">
                <span className="inline-flex items-center justify-center bg-cnbd-red/10 text-cnbd-red rounded-full w-14 h-14 mb-2">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line>
                  </svg>
                </span>
                <span className="font-semibold">Intégration multicanal</span>
                <span className="text-gray-600 text-sm">Unification des canaux de communication (téléphone, chat, email)</span>
              </div>
            </div>
          </div>
          
          {/* Fonctionnalités incluses */}
          <div className="bg-gray-50 rounded-2xl shadow-lg p-8" data-aos="fade-left">
            <h2 className="text-2xl font-bold text-cnbd-red mb-6">Fonctionnalités disponibles</h2>
            <div className="grid md:grid-cols-2 gap-4 text-gray-800">
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <span className="inline-flex items-center justify-center bg-cnbd-red/10 text-cnbd-red rounded-full w-8 h-8">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  Standard automatique et menus vocaux personnalisables
                </li>
                <li className="flex items-center gap-3">
                  <span className="inline-flex items-center justify-center bg-cnbd-red/10 text-cnbd-red rounded-full w-8 h-8">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  Transfert d'appels et mise en attente
                </li>
                <li className="flex items-center gap-3">
                  <span className="inline-flex items-center justify-center bg-cnbd-red/10 text-cnbd-red rounded-full w-8 h-8">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  Conférences téléphoniques multi-participants
                </li>
                <li className="flex items-center gap-3">
                  <span className="inline-flex items-center justify-center bg-cnbd-red/10 text-cnbd-red rounded-full w-8 h-8">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  Suivi des appels et statistiques en temps réel
                </li>
                <li className="flex items-center gap-3">
                  <span className="inline-flex items-center justify-center bg-cnbd-red/10 text-cnbd-red rounded-full w-8 h-8">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  Musiques d'attente et messages d'accueil
                </li>
              </ul>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <span className="inline-flex items-center justify-center bg-cnbd-red/10 text-cnbd-red rounded-full w-8 h-8">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  Intégration CRM et applications métier
                </li>
                <li className="flex items-center gap-3">
                  <span className="inline-flex items-center justify-center bg-cnbd-red/10 text-cnbd-red rounded-full w-8 h-8">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  Messagerie vocale avancée et transcription
                </li>
                <li className="flex items-center gap-3">
                  <span className="inline-flex items-center justify-center bg-cnbd-red/10 text-cnbd-red rounded-full w-8 h-8">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  Applications mobiles pour téléphonie d'entreprise
                </li>
                <li className="flex items-center gap-3">
                  <span className="inline-flex items-center justify-center bg-cnbd-red/10 text-cnbd-red rounded-full w-8 h-8">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  Enregistrement des appels et archivage
                </li>
                <li className="flex items-center gap-3">
                  <span className="inline-flex items-center justify-center bg-cnbd-red/10 text-cnbd-red rounded-full w-8 h-8">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  Numéros virtuels et portabilité des numéros existants
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Notre approche */}
        <section className="container mx-auto px-4 max-w-5xl py-12">
          <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col md:flex-row gap-8 items-center" data-aos="fade-right">
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-cnbd-red mb-3">Notre approche en téléphonie d'entreprise</h2>
              <p className="text-gray-700 mb-4">
                Chez CNBD, nous privilégions une approche consultative pour comprendre parfaitement vos besoins avant de vous proposer une solution. Notre méthodologie en 4 étapes garantit une transition fluide et un succès à long terme :
              </p>
              <ol className="space-y-4 mt-6">
                <li className="flex gap-4">
                  <div className="bg-cnbd-red text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">1</div>
                  <div>
                    <h3 className="font-semibold text-lg">Audit et analyse</h3>
                    <p className="text-gray-600">Évaluation de votre infrastructure existante, identification de vos besoins et objectifs spécifiques.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="bg-cnbd-red text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">2</div>
                  <div>
                    <h3 className="font-semibold text-lg">Conception sur-mesure</h3>
                    <p className="text-gray-600">Élaboration d'une solution adaptée à votre structure, vos processus et votre budget.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="bg-cnbd-red text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">3</div>
                  <div>
                    <h3 className="font-semibold text-lg">Implémentation progressive</h3>
                    <p className="text-gray-600">Mise en place de la solution avec un minimum d'impact sur votre activité, formation des utilisateurs.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="bg-cnbd-red text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">4</div>
                  <div>
                    <h3 className="font-semibold text-lg">Suivi et optimisation</h3>
                    <p className="text-gray-600">Support continu, maintenance préventive et optimisations régulières pour maximiser votre retour sur investissement.</p>
                  </div>
                </li>
              </ol>
            </div>
            <div className="flex-1 flex justify-center">
              <Image src="/image-defaut.jpg" alt="Notre approche" width={400} height={400} className="rounded-xl shadow-lg" />
            </div>
          </div>
        </section>

        {/* Cas client */}
        <section className="container mx-auto px-4 max-w-5xl py-12">
          <h2 className="text-3xl font-bold text-center mb-10" data-aos="fade-up">Ils ont fait confiance à CNBD</h2>
          
          <div className="bg-gray-50 rounded-2xl shadow-lg p-8 mb-8" data-aos="fade-up">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="bg-white p-4 rounded-xl shadow-md">
                <Image src="/image-defaut.jpg" alt="Logo client" width={150} height={80} className="object-contain" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-xl mb-2">Cabinet d'avocats Schmitt & Associés</h3>
                <p className="text-gray-700 italic mb-4">
                  "La solution de téléphonie IP mise en place par CNBD a révolutionné notre manière de communiquer. Nos collaborateurs peuvent désormais travailler de n'importe où tout en restant joignables sur leur ligne professionnelle. Un gain de temps et d'efficacité considérable !"
                </p>
                <p className="text-gray-600 font-medium">Marie Schmitt, Associée fondatrice</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-2xl shadow-lg p-8" data-aos="fade-up" data-aos-delay="100">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="bg-white p-4 rounded-xl shadow-md">
                <Image src="/image-defaut.jpg" alt="Logo client" width={150} height={80} className="object-contain" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-xl mb-2">Groupe industriel TechnoFab</h3>
                <p className="text-gray-700 italic mb-4">
                  "Avec 5 sites répartis dans toute la France, nous avions besoin d'unifier nos communications. CNBD a implémenté une solution centralisée qui a permis de réduire nos coûts de 40% tout en améliorant la qualité de service pour nos clients."
                </p>
                <p className="text-gray-600 font-medium">Thomas Durand, Directeur des Systèmes d'Information</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50" id="faq">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-12" data-aos="fade-up">Questions fréquentes</h2>
            <div className="space-y-6">
              {faqs.map((item, i) => (
                <div key={i} className="bg-white rounded-lg shadow p-6" data-aos="fade-up" data-aos-delay={i*100}>
                  <h3 className="font-bold text-cnbd-red mb-2">{item.q}</h3>
                  <p className="text-gray-700">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Matériel et équipements */}
        <section className="container mx-auto px-4 max-w-5xl py-12">
          <div className="bg-white rounded-2xl shadow-xl p-8" data-aos="fade-up">
            <h2 className="text-2xl font-bold text-cnbd-red mb-6">Équipements et matériel téléphonique</h2>
            <p className="text-gray-700 mb-6">
              En complément de nos solutions logicielles, nous proposons une gamme complète d'équipements téléphoniques adaptés à vos besoins :
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-6 rounded-xl text-center">
                <div className="bg-white shadow-md rounded-lg p-4 mx-auto w-28 h-28 flex items-center justify-center mb-4">
                  <Image src="/image-defaut.jpg" alt="Téléphones IP" width={80} height={80} className="object-contain" />
                </div>
                <h3 className="font-semibold mb-2">Téléphones IP professionnels</h3>
                <p className="text-gray-600 text-sm">Des postes adaptés à tous les usages : standards, conférences, réception...</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl text-center">
                <div className="bg-white shadow-md rounded-lg p-4 mx-auto w-28 h-28 flex items-center justify-center mb-4">
                  <Image src="/image-defaut.jpg" alt="IPBX" width={80} height={80} className="object-contain" />
                </div>
                <h3 className="font-semibold mb-2">Centraux téléphoniques (IPBX)</h3>
                <p className="text-gray-600 text-sm">Solutions physiques ou virtuelles pour centraliser vos communications</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl text-center">
                <div className="bg-white shadow-md rounded-lg p-4 mx-auto w-28 h-28 flex items-center justify-center mb-4">
                  <Image src="/image-defaut.jpg" alt="Casques" width={80} height={80} className="object-contain" />
                </div>
                <h3 className="font-semibold mb-2">Casques et accessoires</h3>
                <p className="text-gray-600 text-sm">Équipements ergonomiques pour le confort de vos collaborateurs</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-cnbd-black text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6" data-aos="fade-up">Prêt à moderniser votre système de téléphonie ?</h2>
              <p className="text-lg mb-8" data-aos="fade-up" data-aos-delay="100">
                Contactez-nous dès aujourd'hui pour une étude personnalisée et un devis adapté à vos besoins spécifiques. Nos experts sont à votre disposition pour vous guider dans votre transition vers une téléphonie moderne et performante.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href="/contact" 
                  className="inline-flex items-center px-6 py-3 bg-cnbd-red text-white font-medium rounded-md hover:bg-red-700 transition-colors duration-200"
                  data-aos="zoom-in" data-aos-delay="200"
                >
                  Demander un devis gratuit
                </a>
                <a 
                  href="tel:+33123456789" 
                  className="inline-flex items-center px-6 py-3 bg-white text-cnbd-black font-medium rounded-md hover:bg-gray-100 transition-colors duration-200"
                  data-aos="zoom-in" data-aos-delay="250"
                >
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"></path>
                  </svg>
                  Nous appeler
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
} 