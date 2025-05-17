"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Breadcrumbs from "@/components/navigation/Breadcrumbs";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

const faqs = [
  { q: "Qu'est-ce qu'un audit RGPD ?", a: "Un audit RGPD est une évaluation complète de vos pratiques de traitement des données personnelles pour identifier les écarts par rapport aux exigences du Règlement Général sur la Protection des Données et proposer des actions correctives." },
  { q: "Combien de temps dure un audit de sécurité ?", a: "La durée d'un audit de sécurité dépend de la taille de votre organisation et de la complexité de vos systèmes. En général, il peut prendre de quelques jours à plusieurs semaines." },
  { q: "Comment se déroule une mission de conseil en conformité RGPD ?", a: "Notre mission de conseil commence par une évaluation de votre situation actuelle, suivie de la définition d'un plan d'action personnalisé. Nous vous accompagnons ensuite dans la mise en œuvre des mesures nécessaires pour atteindre et maintenir la conformité." },
  { q: "Faut-il désigner un Délégué à la Protection des Données (DPO) ?", a: "La désignation d'un DPO est obligatoire pour certaines organisations, notamment les organismes publics et les entreprises dont l'activité principale implique un suivi régulier et systématique des personnes à grande échelle. Nous pouvons vous conseiller sur cette obligation et proposer des services de DPO externalisé." },
];

export default function AuditsConseilsPage() {
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
                  <span className="block">Audit &</span>
                  <span className="text-cnbd-red">Conseils</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-lg leading-relaxed">
                  Optimisez la protection de vos données et votre conformité avec nos services d'audit et de conseil personnalisés. CNBD vous accompagne pour sécuriser vos actifs numériques et respecter les exigences réglementaires.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="/contact" className="inline-flex items-center bg-cnbd-red text-white px-8 py-4 rounded-full font-bold hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:translate-y-[-2px] group">
                    Demander un devis
                    <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </a>
                  <a href="#services" className="inline-flex items-center bg-white text-cnbd-black border-2 border-gray-200 px-8 py-4 rounded-full font-bold hover:border-cnbd-red/30 transition-all duration-300 shadow-lg hover:shadow-xl hover:translate-y-[-2px]">
                    Découvrir nos services
                  </a>
                </div>
                
                <div className="mt-12 flex items-center gap-4">
                  <div className="bg-white p-3 rounded-full shadow-md">
                    <svg className="w-6 h-6 text-cnbd-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">Expertise RGPD et sécurité des données</span>
                </div>
              </div>
              
              <div className="relative" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="300">
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-cnbd-red/5 rounded-full blur-2xl -z-10"></div>
                <div className="relative overflow-hidden rounded-[2rem] shadow-2xl border-8 border-white">
                  <Image 
                    src="/image-defaut.jpg" 
                    alt="Audit et Conseils en protection des données" 
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
                      <div className="font-bold">Sécurité des données</div>
                      <div className="text-sm text-gray-500">Protection renforcée</div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -left-10 bottom-20 bg-white rounded-2xl shadow-xl p-4 backdrop-blur">
                  <div className="flex items-center gap-3">
                    <div className="bg-cnbd-red/10 p-2 rounded-lg">
                      <svg className="w-8 h-8 text-cnbd-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                        <path d="M9 3v18M15 3v18"></path>
                        <path d="M3 9h18M3 15h18"></path>
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold">Conformité RGPD</div>
                      <div className="text-sm text-gray-500">Expertise légale</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-10 left-0 right-0 flex justify-center">
            <a href="#services" className="rounded-full bg-white shadow-md p-3 animate-bounce hover:shadow-lg transition-shadow">
              <svg className="w-6 h-6 text-cnbd-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </a>
          </div>
        </section>

        {/* Services d'Audit Section */}
        <section id="services" className="container mx-auto px-4 max-w-5xl py-16">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-cnbd-red mb-4">Nos Services d'Audit</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Des analyses approfondies pour identifier les risques et améliorer la protection de vos données
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1" data-aos="fade-up" data-aos-delay="0">
              <div className="bg-cnbd-red/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-cnbd-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Audit de Conformité RGPD</h3>
              <p className="text-gray-700 mb-6">
                Nous réalisons un examen approfondi de vos pratiques de traitement des données personnelles pour nous assurer qu'elles sont conformes au Règlement Général sur la Protection des Données (RGPD). Cela inclut l'analyse de vos politiques de confidentialité, de vos procédures de consentement, de vos mesures de sécurité des données et de vos processus de gestion des violations de données.
              </p>
              <Link href="/contact" className="text-cnbd-red font-semibold flex items-center group">
                En savoir plus
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1" data-aos="fade-up" data-aos-delay="100">
              <div className="bg-cnbd-red/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-cnbd-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Audit de Sécurité des Données</h3>
              <p className="text-gray-700 mb-6">
                Nous évaluons la sécurité de vos systèmes d'information et de vos données personnelles. Cela comprend des tests d'intrusion, des analyses de vulnérabilité, des évaluations des risques et des recommandations pour renforcer votre posture de sécurité.
              </p>
              <Link href="/contact" className="text-cnbd-red font-semibold flex items-center group">
                En savoir plus
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1" data-aos="fade-up" data-aos-delay="200">
              <div className="bg-cnbd-red/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-cnbd-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line>
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                  <line x1="12" y1="22.08" x2="12" y2="12"></line>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Audit de Flux de Données</h3>
              <p className="text-gray-700 mb-6">
                Nous cartographions et analysons les flux de données au sein de votre organisation pour identifier les risques potentiels et les opportunités d'amélioration. Cela vous aide à comprendre comment les données sont collectées, utilisées, stockées et partagées, et à garantir leur conformité avec les réglementations en vigueur.
              </p>
              <Link href="/contact" className="text-cnbd-red font-semibold flex items-center group">
                En savoir plus
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Services de Conseil Section */}
        <section className="container mx-auto px-4 max-w-5xl py-16 bg-white rounded-3xl shadow-lg my-16">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-cnbd-red mb-4">Nos Services de Conseil</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Des solutions personnalisées pour répondre à vos besoins spécifiques en matière de protection des données
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-2xl shadow p-8 hover:shadow-lg transition-all duration-300" data-aos="fade-up" data-aos-delay="0">
              <div className="bg-cnbd-red/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-cnbd-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15.5 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5L15.5 3Z"></path>
                  <polyline points="15 3 15 9 21 9"></polyline>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Conseil en Conformité RGPD</h3>
              <p className="text-gray-700 mb-6">
                Nous vous accompagnons dans la mise en conformité de vos activités avec le RGPD. Cela inclut la définition de vos obligations, la mise en place de politiques et de procédures, la formation de votre personnel et la gestion des relations avec les autorités de contrôle.
              </p>
              <Link href="/contact" className="text-cnbd-red font-semibold flex items-center group">
                En savoir plus
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>

            <div className="bg-gray-50 rounded-2xl shadow p-8 hover:shadow-lg transition-all duration-300" data-aos="fade-up" data-aos-delay="100">
              <div className="bg-cnbd-red/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-cnbd-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Conseil en Sécurité des Données</h3>
              <p className="text-gray-700 mb-6">
                Nous vous aidons à renforcer la sécurité de vos données personnelles en vous fournissant des conseils personnalisés et des solutions adaptées à vos besoins. Cela comprend la mise en place de mesures de sécurité techniques et organisationnelles, la gestion des risques et la réponse aux incidents de sécurité.
              </p>
              <Link href="/contact" className="text-cnbd-red font-semibold flex items-center group">
                En savoir plus
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>

            <div className="bg-gray-50 rounded-2xl shadow p-8 hover:shadow-lg transition-all duration-300" data-aos="fade-up" data-aos-delay="200">
              <div className="bg-cnbd-red/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-cnbd-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="16"></line>
                  <line x1="8" y1="12" x2="16" y2="12"></line>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Conseil en Gestion des Données</h3>
              <p className="text-gray-700 mb-6">
                Nous vous conseillons sur la manière de gérer efficacement vos données personnelles, de leur collecte à leur suppression. Cela inclut la définition de politiques de conservation des données, la mise en place de processus de qualité des données et la gestion des demandes d'accès, de rectification et de suppression des données.
              </p>
              <Link href="/contact" className="text-cnbd-red font-semibold flex items-center group">
                En savoir plus
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Pourquoi nous choisir Section */}
        <section className="container mx-auto px-4 max-w-5xl py-16">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-cnbd-red mb-4">Pourquoi Choisir CNBD pour vos Audits et Conseils ?</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Notre expertise et notre approche font la différence
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-cnbd-red" data-aos="fade-up" data-aos-delay="0">
              <h3 className="text-xl font-bold mb-4">Expertise Spécialisée</h3>
              <p className="text-gray-700">
                Nos consultants sont des experts en protection des données et en sécurité de l'information, avec une connaissance approfondie des réglementations et des meilleures pratiques.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-cnbd-red" data-aos="fade-up" data-aos-delay="100">
              <h3 className="text-xl font-bold mb-4">Approche Personnalisée</h3>
              <p className="text-gray-700">
                Nous adaptons nos services à vos besoins spécifiques et à votre contexte organisationnel pour vous offrir des solutions sur mesure.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-cnbd-red" data-aos="fade-up" data-aos-delay="200">
              <h3 className="text-xl font-bold mb-4">Résultats Concrets</h3>
              <p className="text-gray-700">
                Nous vous fournissons des recommandations claires et réalisables pour améliorer votre conformité et votre sécurité des données.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="container mx-auto px-4 max-w-4xl py-16 bg-white rounded-3xl shadow-lg my-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-cnbd-red" data-aos="fade-up">Questions fréquentes</h2>
          <div className="space-y-6">
            {faqs.map((item, i) => (
              <div key={i} className="bg-gray-50 rounded-lg shadow p-6" data-aos="fade-up" data-aos-delay={i*100}>
                <h3 className="font-bold text-cnbd-red mb-2">{item.q}</h3>
                <p className="text-gray-700">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-cnbd-black text-white rounded-3xl shadow-xl mb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6" data-aos="fade-up">Prêt à renforcer la protection de vos données ?</h2>
              <p className="text-lg mb-8" data-aos="fade-up" data-aos-delay="100">
                Contactez-nous dès aujourd'hui pour discuter de vos besoins en matière d'audit et de conseil, et découvrez comment nos services peuvent vous aider à atteindre vos objectifs de conformité et de sécurité.
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