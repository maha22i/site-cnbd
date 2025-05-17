"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Breadcrumbs from "@/components/navigation/Breadcrumbs";
import AOS from "aos";
import "aos/dist/aos.css";

const faqs = [
  { q: "Quels types de postes informatiques proposez-vous ?", a: "Nous proposons une large gamme de postes informatiques : ordinateurs fixes, portables, tout-en-un, stations de travail graphiques et postes de travail virtualisés. Chaque solution est adaptée aux besoins spécifiques de votre activité et de vos collaborateurs." },
  { q: "Quels sont les avantages de la virtualisation des postes de travail ?", a: "La virtualisation offre de nombreux avantages : centralisation de la gestion, sécurité renforcée, mobilité accrue, réduction des coûts et prolongation de la durée de vie des équipements existants." },
  { q: "Comment choisir les postes informatiques adaptés à mon entreprise ?", a: "Nous réalisons un audit de vos besoins en prenant en compte les applications utilisées, le niveau de performance requis, l'ergonomie nécessaire et votre budget. Cette approche nous permet de vous proposer une solution sur-mesure parfaitement adaptée." },
  { q: "Proposez-vous également l'installation et la maintenance des postes ?", a: "Oui, nous assurons l'installation, la configuration et la maintenance de l'ensemble de votre parc informatique. Nos services d'infogérance permettent une gestion proactive et un support réactif en cas de problème." },
];

export default function PosteInformatiquePage() {
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
                  <span className="block">Postes</span>
                  <span className="text-cnbd-red">Informatiques</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-lg leading-relaxed">
                  Nous vous proposons des postes informatiques sur-mesure, adaptés aux besoins de chaque utilisateur et aux exigences de votre activité.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="/contact" className="inline-flex items-center bg-cnbd-red text-white px-8 py-4 rounded-full font-bold hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:translate-y-[-2px] group">
                    Demander un devis
                    <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </a>
                  <a href="#solutions" className="inline-flex items-center bg-white text-cnbd-black border-2 border-gray-200 px-8 py-4 rounded-full font-bold hover:border-cnbd-red/30 transition-all duration-300 shadow-lg hover:shadow-xl hover:translate-y-[-2px]">
                    Découvrir nos solutions
                  </a>
                </div>
                
                <div className="mt-12 flex items-center gap-4">
                  <div className="bg-white p-3 rounded-full shadow-md">
                    <svg className="w-6 h-6 text-cnbd-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">Solutions personnalisées et évolutives</span>
                </div>
              </div>
              
              <div className="relative" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="300">
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-cnbd-red/5 rounded-full blur-2xl -z-10"></div>
                <div className="relative overflow-hidden rounded-[2rem] shadow-2xl border-8 border-white">
                  <Image 
                    src="/image-defaut.jpg" 
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
                      <div className="font-bold">Performance optimale</div>
                      <div className="text-sm text-gray-500">Pour tous vos besoins</div>
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
                      <div className="font-bold">Solutions économiques</div>
                      <div className="text-sm text-gray-500">Adaptées à votre budget</div>
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
                <h2 className="text-2xl font-bold text-cnbd-red mb-3">Types de postes informatiques</h2>
                <p className="text-gray-700">
                  Les postes informatiques sont au cœur de la productivité de votre entreprise. CNBD vous propose une gamme complète de solutions adaptées à chaque profil d'utilisateur et à chaque contexte d'utilisation, de la bureautique classique aux applications les plus exigeantes.
                </p>
              </div>
              <div className="flex-1 flex justify-center">
                <Image src="/image-defaut.jpg" alt="Postes informatiques variés" width={600} height={300} className="object-contain bg-white rounded-xl shadow p-2" />
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
                  <h3 className="font-bold text-xl">Postes bureautiques</h3>
                </div>
                <p className="text-gray-700 mb-3">Ordinateurs fixes, portables ou tout-en-un adaptés aux tâches de bureautique classiques :</p>
                <ul className="text-gray-700 space-y-2 pl-4">
                  <li>• Traitement de texte, tableurs, présentations</li>
                  <li>• Navigation internet et messagerie</li>
                  <li>• Gestion administrative et comptable</li>
                  <li>• Solutions faciles à déployer et à maintenir</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-cnbd-red/10 p-3 rounded-full">
                    <svg className="w-8 h-8 text-cnbd-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18"></path>
                    </svg>
                  </div>
                  <h3 className="font-bold text-xl">Stations de travail graphiques</h3>
                </div>
                <p className="text-gray-700 mb-3">Solutions puissantes pour les métiers créatifs et techniques :</p>
                <ul className="text-gray-700 space-y-2 pl-4">
                  <li>• CAO/DAO et modélisation 3D</li>
                  <li>• Montage vidéo et traitement d'image</li>
                  <li>• Machines puissantes avec processeurs performants</li>
                  <li>• Cartes graphiques professionnelles et écrans haute définition</li>
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
                  <h3 className="font-bold text-xl">Postes mobiles</h3>
                </div>
                <p className="text-gray-700 mb-3">Solutions pour les collaborateurs en déplacement ou en télétravail :</p>
                <ul className="text-gray-700 space-y-2 pl-4">
                  <li>• Ordinateurs portables ultralégers et performants</li>
                  <li>• Tablettes professionnelles</li>
                  <li>• Accessoires de mobilité (stations d'accueil, sacoches, etc.)</li>
                  <li>• Solutions de connexion sécurisée à distance</li>
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
                  <h3 className="font-bold text-xl">Postes virtualisés</h3>
                </div>
                <p className="text-gray-700 mb-3">Solutions de virtualisation pour une gestion centralisée :</p>
                <ul className="text-gray-700 space-y-2 pl-4">
                  <li>• VDI (Virtual Desktop Infrastructure)</li>
                  <li>• Clients légers et ordinateurs reconditionnés</li>
                  <li>• Accès aux applications depuis n'importe quel appareil</li>
                  <li>• Sécurité et disponibilité accrues</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Solutions de virtualisation */}
          <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col md:flex-row gap-8 items-center" data-aos="fade-left">
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-cnbd-red mb-3">Solutions de virtualisation</h2>
              <p className="text-gray-700 mb-4">
                La virtualisation des postes de travail représente une révolution dans la gestion du parc informatique. CNBD vous accompagne dans la mise en place de ces solutions innovantes qui apportent flexibilité, sécurité et réduction des coûts.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-cnbd-red/10 p-2 rounded-full mt-1">
                    <svg className="w-5 h-5 text-cnbd-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Centralisation de la gestion</h3>
                    <p className="text-gray-700 text-sm">Facilitez la gestion des mises à jour, des correctifs et des licences logicielles.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-cnbd-red/10 p-2 rounded-full mt-1">
                    <svg className="w-5 h-5 text-cnbd-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Sécurité renforcée</h3>
                    <p className="text-gray-700 text-sm">Les données sont stockées sur un serveur centralisé, réduisant les risques de perte ou de vol.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-cnbd-red/10 p-2 rounded-full mt-1">
                    <svg className="w-5 h-5 text-cnbd-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Mobilité accrue</h3>
                    <p className="text-gray-700 text-sm">Accédez à votre bureau virtuel depuis n'importe quel appareil, où que vous soyez.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-cnbd-red/10 p-2 rounded-full mt-1">
                    <svg className="w-5 h-5 text-cnbd-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Réduction des coûts</h3>
                    <p className="text-gray-700 text-sm">Prolongez la durée de vie des anciens ordinateurs et réduisez les coûts de maintenance.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <Image src="/image-defaut.jpg" alt="Solutions de virtualisation" width={500} height={400} className="rounded-xl shadow-lg object-cover" />
            </div>
          </div>

          {/* Ergonomie et confort */}
          <div className="bg-white rounded-2xl shadow-xl p-8" data-aos="fade-right">
            <div className="flex flex-col md:flex-row gap-8 items-center mb-6">
              <div className="flex-1 flex justify-center">
                <Image src="/image-defaut.jpg" alt="Poste de travail ergonomique" width={500} height={400} className="rounded-xl shadow-lg object-cover" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-cnbd-red mb-3">Ergonomie et confort de travail</h2>
                <p className="text-gray-700">
                  L'ergonomie des postes de travail est essentielle pour le bien-être et la productivité de vos collaborateurs. CNBD vous aide à créer un environnement de travail ergonomique et confortable pour améliorer la productivité et le bien-être de vos collaborateurs.
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
                <h3 className="font-semibold mb-2">Écrans adaptés</h3>
                <p className="text-gray-600 text-sm">Écrans réglables en hauteur avec filtres anti-lumière bleue pour réduire la fatigue visuelle.</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl shadow-md text-center">
                <div className="bg-white shadow-md rounded-lg p-4 mx-auto w-20 h-20 flex items-center justify-center mb-4">
                  <svg className="w-10 h-10 text-cnbd-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Périphériques ergonomiques</h3>
                <p className="text-gray-600 text-sm">Claviers et souris ergonomiques pour prévenir les troubles musculo-squelettiques.</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl shadow-md text-center">
                <div className="bg-white shadow-md rounded-lg p-4 mx-auto w-20 h-20 flex items-center justify-center mb-4">
                  <svg className="w-10 h-10 text-cnbd-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Mobilier adapté</h3>
                <p className="text-gray-600 text-sm">Sièges et bureaux ajustables pour adopter une posture correcte et alternative entre position assise et debout.</p>
              </div>
            </div>
          </div>

          {/* Comment choisir vos équipements */}
          <div className="bg-white rounded-2xl shadow-xl p-8" data-aos="fade-left">
            <h2 className="text-2xl font-bold text-cnbd-red mb-6 text-center">Comment bien choisir vos postes informatiques</h2>
            
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
                  <h3 className="font-bold text-lg">Définir vos besoins</h3>
                </div>
                <p className="text-gray-700">
                  Identifiez précisément les applications utilisées, le niveau de performance requis, les contraintes de mobilité et les besoins spécifiques de chaque utilisateur.
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
                  <h3 className="font-bold text-lg">Privilégier la qualité</h3>
                </div>
                <p className="text-gray-700">
                  Optez pour des marques reconnues offrant fiabilité, durabilité et service après-vente efficace. Un matériel de qualité représente un investissement rentable à long terme.
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
                  <h3 className="font-bold text-lg">Penser évolutivité</h3>
                </div>
                <p className="text-gray-700">
                  Choisissez des équipements évolutifs qui pourront être mis à niveau facilement (RAM, stockage, etc.) pour s'adapter à l'évolution de vos besoins.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl shadow-md">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-cnbd-red/10 p-3 rounded-full flex-shrink-0">
                    <svg className="w-6 h-6 text-cnbd-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                  </div>
                  <h3 className="font-bold text-lg">Faire appel à un expert</h3>
                </div>
                <p className="text-gray-700">
                  CNBD vous accompagne dans le choix des équipements les plus adaptés à vos besoins et à votre budget, en vous apportant notre expertise et nos conseils personnalisés.
                </p>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <a href="/contact" className="inline-flex items-center bg-cnbd-red text-white px-6 py-3 rounded-full font-bold hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:translate-y-[-2px] group">
                Demander un conseil personnalisé
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
} 