"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Breadcrumbs from "@/components/navigation/Breadcrumbs";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

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
                  <span className="block">Solutions de</span>
                  <span className="text-cnbd-red">Financement</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-lg leading-relaxed">
                  Des solutions de financement flexibles et adaptées pour vos équipements informatiques. Bénéficiez de contrats de location (leasing) sur mesure pour optimiser vos investissements.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="/contact" className="inline-flex items-center bg-cnbd-red text-white px-8 py-4 rounded-full font-bold hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:translate-y-[-2px] group">
                    Demander un devis
                    <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </a>
                  <a href="#avantages" className="inline-flex items-center bg-white text-cnbd-black border-2 border-gray-200 px-8 py-4 rounded-full font-bold hover:border-cnbd-red/30 transition-all duration-300 shadow-lg hover:shadow-xl hover:translate-y-[-2px]">
                    Découvrir nos avantages
                  </a>
                </div>
              </div>
              
              <div className="relative" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="300">
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-cnbd-red/5 rounded-full blur-2xl -z-10"></div>
                <div className="relative overflow-hidden rounded-[2rem] shadow-2xl border-8 border-white">
                  <Image 
                    src="/image-defaut.jpg" 
                    alt="Solutions de financement CNBD" 
                    width={800} 
                    height={600}
                    className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-cnbd-red/30 to-transparent opacity-60"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pourquoi le leasing section */}
        <section className="container mx-auto px-4 max-w-5xl py-16">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-cnbd-red mb-4">Pourquoi choisir le financement par leasing ?</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Une solution flexible pour optimiser vos investissements informatiques
            </p>
          </div>
          
          <div className="bg-white rounded-3xl shadow-lg p-8 mb-16" data-aos="fade-up">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Avantages du leasing</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-cnbd-red mt-1 mr-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Disposez des dernières technologies sans mobiliser votre trésorerie</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-cnbd-red mt-1 mr-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Maîtrisez votre budget avec des loyers mensuels fixes</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-cnbd-red mt-1 mr-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Préservez votre capacité d'investissement</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-cnbd-red mt-1 mr-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Choisissez de renouveler, restituer ou acquérir votre matériel à la fin du contrat</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-2xl font-bold mb-4">Nos avantages</h3>
                <div className="space-y-4">
                  {avantages.map((avantage, index) => (
                    <div key={index} className="flex items-start">
                      <div className="bg-cnbd-red/10 p-2 rounded-lg mr-4">
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
            </div>
          </div>
        </section>

        {/* Équipements éligibles section */}
        <section className="container mx-auto px-4 max-w-5xl py-16 bg-white rounded-3xl shadow-lg my-16">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-cnbd-red mb-4">Pour quels équipements ?</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Nos solutions de financement couvrent l'ensemble de vos besoins informatiques
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8" data-aos="fade-up">
            {equipements.map((equipement, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300">
                <div className="bg-cnbd-red/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-cnbd-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                    <line x1="8" y1="21" x2="16" y2="21"></line>
                    <line x1="12" y1="17" x2="12" y2="21"></line>
                  </svg>
                </div>
                <h3 className="font-bold text-lg">{equipement}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-cnbd-black text-white rounded-3xl shadow-xl mb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6" data-aos="fade-up">Prêt à optimiser vos investissements ?</h2>
              <p className="text-lg mb-8" data-aos="fade-up" data-aos-delay="100">
                Contactez-nous pour obtenir une simulation personnalisée et découvrir comment nos solutions de financement peuvent répondre à vos besoins.
              </p>
              <Link 
                href="/contact" 
                className="inline-flex items-center px-6 py-3 bg-cnbd-red text-white font-medium rounded-md hover:bg-red-700 transition-colors duration-200"
                data-aos="zoom-in" data-aos-delay="200"
              >
                Nous contacter
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
} 