"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Breadcrumbs from "@/components/navigation/Breadcrumbs";
import AOS from "aos";
import "aos/dist/aos.css";

const faqs = [
  { q: "Pourquoi mettre en place une solution de sauvegarde ?", a: "Une solution de sauvegarde est votre assurance contre la perte de données en cas d'incident (panne matérielle, virus, erreur humaine, sinistre). Elle permet de restaurer rapidement vos données et de reprendre votre activité avec un minimum d'impact." },
  { q: "Quelle solution de sauvegarde est la plus adaptée à mon entreprise ?", a: "Cela dépend de plusieurs facteurs : volume de données, criticité, budget, etc. Nous proposons des solutions locales pour les petites structures (économiques mais limitées) et des solutions externalisées (cloud) offrant une protection optimale contre tous types de risques." },
  { q: "Quelles sont les mesures de sécurité essentielles pour une entreprise ?", a: "Une stratégie de sécurité complète comprend généralement : firewall pour contrôler le trafic réseau, antivirus pour protéger contre les logiciels malveillants, systèmes de détection d'intrusion, gestion stricte des accès, et formation des utilisateurs aux bonnes pratiques." },
  { q: "Comment se mettre en conformité avec le RGPD ?", a: "Nous vous accompagnons dans votre mise en conformité au RGPD en réalisant un audit de vos pratiques, en mettant en place des procédures de protection des données personnelles, et en vous conseillant sur les mesures techniques et organisationnelles à adopter." },
];

export default function SauvegardeSecuritePage() {
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
                  <span className="block">Sauvegarde</span>
                  <span className="text-cnbd-red">& Sécurité</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-lg leading-relaxed">
                  Protégez vos données et votre entreprise contre les menaces informatiques avec nos solutions sur-mesure.
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
                  <span className="text-gray-700 font-medium">Solutions fiables et personnalisées</span>
                </div>
              </div>
              
              <div className="relative" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="300">
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-cnbd-red/5 rounded-full blur-2xl -z-10"></div>
                <div className="relative overflow-hidden rounded-[2rem] shadow-2xl border-8 border-white">
                  <Image 
                    src="/image-defaut.jpg" 
                    alt="Solutions de sauvegarde et sécurité" 
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
                      <div className="font-bold">Protection maximale</div>
                      <div className="text-sm text-gray-500">De vos données</div>
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
                      <div className="font-bold">Conformité RGPD</div>
                      <div className="text-sm text-gray-500">Respect réglementaire</div>
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
          {/* Importance de la sauvegarde */}
          <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col gap-8" data-aos="fade-right">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-cnbd-red mb-3">L'importance de la sauvegarde</h2>
                <p className="text-gray-700">
                  La sauvegarde de vos données est votre assurance en cas de perte, de vol, de sinistre ou d'attaque informatique. Ne prenez pas le risque de perdre des informations précieuses pour votre entreprise.
                </p>
                <p className="text-gray-700 mt-3">
                  Une stratégie de sauvegarde efficace vous permet de restaurer rapidement vos données et de reprendre votre activité en cas d'incident.
                </p>
                <p className="text-gray-700 mt-3">
                  CNBD vous aide à mettre en place une solution de sauvegarde adaptée à vos besoins et à votre budget.
                </p>
              </div>
              <div className="flex-1 flex justify-center">
                <Image src="/image-defaut.jpg" alt="Importance de la sauvegarde" width={600} height={300} className="object-contain bg-white rounded-xl shadow p-2" />
              </div>
            </div>
          </div>
          
          {/* Types de sauvegarde */}
          <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col gap-8" data-aos="fade-left">
            <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-cnbd-red mb-3">Types de sauvegarde</h2>
                <p className="text-gray-700">
                  La sauvegarde locale est une solution simple et économique pour les petites entreprises. Cependant, elle ne protège pas contre les sinistres qui pourraient affecter vos locaux.
                </p>
                <p className="text-gray-700 mt-3">
                  La sauvegarde externalisée (cloud) offre une protection optimale contre tous les types de risques. Vos données sont stockées dans des datacenters sécurisés et redondants.
                </p>
                <p className="text-gray-700 mt-3">
                  Le Plan de Reprise d'Activité (PRA) est une solution complète pour assurer la continuité de votre activité en cas de sinistre majeur. Il inclut la sauvegarde de vos données, la réplication de vos serveurs et la mise en place d'un site de secours.
                </p>
              </div>
              <div className="flex-1 flex justify-center">
                <Image src="/image-defaut.jpg" alt="Types de sauvegarde" width={600} height={300} className="object-contain bg-white rounded-xl shadow p-2" />
              </div>
            </div>
          </div>
          
          {/* Importance de la sécurité */}
          <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col gap-8" data-aos="fade-right">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-cnbd-red mb-3">L'importance de la sécurité</h2>
                <p className="text-gray-700">
                  La sécurité informatique est un enjeu majeur pour toutes les entreprises. Les menaces informatiques sont de plus en plus sophistiquées et peuvent causer des dommages considérables.
                </p>
                <p className="text-gray-700 mt-3">
                  Une stratégie de sécurité efficace vous permet de protéger vos données, vos systèmes et votre réputation contre les attaques informatiques.
                </p>
                <p className="text-gray-700 mt-3">
                  CNBD vous aide à identifier les risques et à mettre en place les solutions de sécurité adaptées à vos besoins.
                </p>
              </div>
              <div className="flex-1 flex justify-center">
                <Image src="/image-defaut.jpg" alt="Importance de la sécurité" width={600} height={300} className="object-contain bg-white rounded-xl shadow p-2" />
              </div>
            </div>
          </div>
          
          {/* Solutions de sécurité */}
          <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col gap-8" data-aos="fade-left">
            <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-cnbd-red mb-3">Solutions de sécurité</h2>
                <p className="text-gray-700">
                  Le firewall est la première ligne de défense de votre réseau. Il contrôle le trafic entrant et sortant et bloque les tentatives d'intrusion.
                </p>
                <p className="text-gray-700 mt-3">
                  L'antivirus protège vos ordinateurs contre les virus, les spywares et les autres logiciels malveillants.
                </p>
                <p className="text-gray-700 mt-3">
                  La détection d'intrusion permet de détecter les activités suspectes sur votre réseau et de réagir rapidement en cas d'attaque.
                </p>
                <p className="text-gray-700 mt-3">
                  La gestion des accès permet de contrôler qui a accès à quelles données et à quels systèmes.
                </p>
                <p className="text-gray-700 mt-3">
                  La sensibilisation des utilisateurs est un élément clé de votre stratégie de sécurité. Il est important de former vos collaborateurs aux bonnes pratiques en matière de sécurité informatique.
                </p>
              </div>
              <div className="flex-1 flex justify-center">
                <Image src="/image-defaut.jpg" alt="Solutions de sécurité" width={600} height={300} className="object-contain bg-white rounded-xl shadow p-2" />
              </div>
            </div>
          </div>
          
          {/* Conformité RGPD */}
          <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col gap-8" data-aos="fade-right">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-cnbd-red mb-3">Conformité RGPD</h2>
                <p className="text-gray-700">
                  La protection des données personnelles est une obligation légale. Le RGPD (Règlement Général sur la Protection des Données) impose des règles strictes en matière de collecte, de traitement et de stockage des données personnelles.
                </p>
                <p className="text-gray-700 mt-3">
                  CNBD vous aide à vous conformer aux exigences du RGPD et à protéger les données personnelles de vos clients et de vos collaborateurs.
                </p>
              </div>
              <div className="flex-1 flex justify-center">
                <Image src="/image-defaut.jpg" alt="Conformité RGPD" width={600} height={300} className="object-contain bg-white rounded-xl shadow p-2" />
              </div>
            </div>
          </div>
        </section>
        
        {/* Section d'accompagnement CNBD */}
        <section className="bg-gradient-to-br from-cnbd-red/5 to-white py-16 mb-16">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-12" data-aos="fade-up">
              <h2 className="text-3xl font-bold mb-6">CNBD vous accompagne</h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Nous vous proposons des solutions de sauvegarde et de sécurité sur-mesure, adaptées à vos besoins et à votre budget.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300" data-aos="fade-up" data-aos-delay="100">
                <div className="bg-cnbd-red/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-cnbd-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Stratégie sur-mesure</h3>
                <p className="text-gray-700">
                  Nous vous aidons à mettre en place une stratégie de protection efficace pour assurer la continuité de votre activité.
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
                <h3 className="text-xl font-bold mb-2">Experts à votre service</h3>
                <p className="text-gray-700">
                  Nos experts sont à votre disposition pour vous conseiller et vous accompagner dans la mise en place de vos solutions de sauvegarde et de sécurité.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300" data-aos="fade-up" data-aos-delay="300">
                <div className="bg-cnbd-red/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-cnbd-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    <circle cx="12" cy="8" r="3"></circle>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Supervision & maintenance</h3>
                <p className="text-gray-700">
                  Nous assurons la supervision et la maintenance de vos solutions de sauvegarde et de sécurité pour garantir leur efficacité.
                </p>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <p className="text-xl text-gray-700 font-medium mb-8" data-aos="fade-up" data-aos-delay="400">
                Avec CNBD, protégez vos données et votre entreprise contre les menaces informatiques.
              </p>
              <a href="/contact" className="inline-flex items-center bg-cnbd-red text-white px-8 py-4 rounded-full font-bold hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:translate-y-[-2px] group" data-aos="fade-up" data-aos-delay="500">
                Contactez nos experts
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="container mx-auto px-4 max-w-4xl mb-20">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl font-bold mb-3">Questions fréquentes</h2>
            <p className="text-gray-700">
              Voici les réponses aux questions que nos clients nous posent fréquemment
            </p>
          </div>
          
          <div className="space-y-4" data-aos="fade-up" data-aos-delay="100">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
                <details className="group">
                  <summary className="flex items-center justify-between gap-4 p-6 cursor-pointer">
                    <h3 className="font-bold text-lg text-gray-800">{faq.q}</h3>
                    <span className="relative flex-shrink-0 ml-1.5 w-5 h-5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="absolute transition-all duration-300 group-open:opacity-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" className="absolute opacity-0 transition-all duration-300 group-open:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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
          
          <div className="mt-12 text-center" data-aos="fade-up" data-aos-delay="200">
            <p className="text-gray-700 mb-6">Vous avez d'autres questions sur nos solutions de sauvegarde et de sécurité ?</p>
            <a href="/contact" className="inline-flex items-center bg-cnbd-red text-white px-8 py-4 rounded-full font-bold hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:translate-y-[-2px] group">
              Contactez-nous
              <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>
        </section>
      </div>
    </main>
  );
} 