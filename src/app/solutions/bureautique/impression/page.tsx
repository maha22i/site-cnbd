"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Breadcrumbs from "@/components/navigation/Breadcrumbs";
import AOS from "aos";
import "aos/dist/aos.css";

const faqs = [
  { q: "Quels types de solutions d'impression proposez-vous ?", a: "Nous proposons une gamme complète de solutions d'impression : imprimantes, multifonctions (MFP), systèmes de gestion documentaire, solutions de numérisation et d'archivage adaptés à tous types d'entreprises." },
  { q: "Comment réduire mes coûts d'impression ?", a: "Nous réalisons un audit complet de vos usages pour optimiser votre parc, mettons en place des outils de suivi des consommations et proposons des solutions de gestion des impressions pour réduire le gaspillage." },
  { q: "Quels sont les avantages d'une solution d'impression gérée ?", a: "Les solutions gérées offrent une maintenance préventive, un approvisionnement automatique en consommables, un reporting détaillé et un support technique dédié, vous permettant de vous concentrer sur votre cœur de métier." },
  { q: "Comment assurez-vous la sécurité des documents imprimés ?", a: "Nous implémentons des solutions d'impression sécurisée par code ou badge, de chiffrement des données, et des systèmes conformes au RGPD pour garantir la confidentialité de vos documents sensibles." },
];

export default function ImpressionPage() {
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
                  <span className="block">Solutions</span>
                  <span className="text-cnbd-red">d'Impression</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-lg leading-relaxed">
                  Des solutions d'impression sur mesure pour votre entreprise. Optimisez la gestion de vos systèmes d'impression avec des solutions complètes, performantes et évolutives.
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
                    alt="Solutions d'Impression pour Entreprise" 
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
                        <rect x="6" y="2" width="12" height="6" rx="2" ry="2"></rect>
                        <line x1="12" y1="8" x2="12" y2="10"></line>
                        <line x1="8" y1="10" x2="16" y2="10"></line>
                        <rect x="4" y="10" width="16" height="12" rx="2" ry="2"></rect>
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold">Gestion optimisée</div>
                      <div className="text-sm text-gray-500">Maîtrise des coûts</div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -left-10 bottom-20 bg-white rounded-2xl shadow-xl p-4 backdrop-blur">
                  <div className="flex items-center gap-3">
                    <div className="bg-cnbd-red/10 p-2 rounded-lg">
                      <svg className="w-8 h-8 text-cnbd-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                        <circle cx="9" cy="10" r="2"></circle>
                        <path d="M15 8h.01"></path>
                        <path d="M17 8h.01"></path>
                        <path d="M15 12h.01"></path>
                        <path d="M17 12h.01"></path>
                        <path d="M7 16h10"></path>
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold">Sécurité avancée</div>
                      <div className="text-sm text-gray-500">Protection RGPD</div>
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

        <section id="services" className="container mx-auto px-4 max-w-5xl flex flex-col gap-12 py-8 md:py-16">
          {/* Nos services d'impression */}
          <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col md:flex-row gap-8 items-center" data-aos="fade-right">
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-cnbd-red mb-3">Nos services d'impression</h2>
              <p className="text-gray-700">
                Nous vous aidons à choisir, installer et gérer un parc d'imprimantes et de multifonctions (MFP) répondant à vos exigences en matière de volume, de rapidité, de qualité et de sécurité. Nos solutions couvrent l'ensemble de vos besoins : impression, copie, numérisation, gestion documentaire, et archivage.
              </p>
            </div>
            <div className="flex-1 flex justify-center">
              <Image src="/digitale.webp" alt="Services d'impression" width={600} height={300} className="object-contain bg-white rounded-xl shadow p-2" />
            </div>
          </div>

          {/* Les avantages CNBD */}
          <div id="avantages" className="bg-gray-50 rounded-2xl shadow-lg p-8" data-aos="fade-left">
            <h2 className="text-2xl font-bold text-cnbd-red mb-3">Les avantages CNBD</h2>
            <p className="text-gray-700 mb-6">Nos solutions d'impression vous offrent de nombreux avantages pour optimiser votre environnement de travail :</p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-cnbd-red/10 p-3 rounded-full">
                    <svg className="w-8 h-8 text-cnbd-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                    </svg>
                  </div>
                  <h3 className="font-bold text-xl">Maîtrise des coûts</h3>
                </div>
                <p className="text-gray-700">Nous analysons vos usages pour optimiser votre parc et réduire vos dépenses d'impression. Suivi des consommations, outils de tracking et reporting détaillé vous permettent de garder le contrôle sur votre budget.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-cnbd-red/10 p-3 rounded-full">
                    <svg className="w-8 h-8 text-cnbd-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle><polyline points="16 12 12 8 8 12"></polyline><line x1="12" y1="16" x2="12" y2="8"></line>
                    </svg>
                  </div>
                  <h3 className="font-bold text-xl">Productivité et simplicité</h3>
                </div>
                <p className="text-gray-700">Nos équipements sont simples à utiliser et intégrés à vos outils métiers. Nous assurons la maintenance complète de votre parc pour garantir une disponibilité maximale.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-cnbd-red/10 p-3 rounded-full">
                    <svg className="w-8 h-8 text-cnbd-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 9.9-1"></path>
                    </svg>
                  </div>
                  <h3 className="font-bold text-xl">Sécurité et conformité</h3>
                </div>
                <p className="text-gray-700">Protégez vos documents sensibles grâce à l'impression sécurisée par code ou badge, conforme aux exigences RGPD. Vos données sont traitées en toute confidentialité.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-cnbd-red/10 p-3 rounded-full">
                    <svg className="w-8 h-8 text-cnbd-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"></path><path d="M7 3.6v4h4"></path><path d="M17 21v-4h-4"></path><path d="M3 7.6V5a2 2 0 0 1 2-2h2.6"></path><path d="M21 16.4V19a2 2 0 0 1-2 2h-2.6"></path>
                    </svg>
                  </div>
                  <h3 className="font-bold text-xl">Engagement environnemental</h3>
                </div>
                <p className="text-gray-700">Réduisez votre impact écologique avec des solutions favorisant la diminution de la consommation de papier, la gestion des déchets et l'optimisation énergétique.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-cnbd-red/10 p-3 rounded-full">
                    <svg className="w-8 h-8 text-cnbd-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline>
                    </svg>
                  </div>
                  <h3 className="font-bold text-xl">Gestion documentaire avancée</h3>
                </div>
                <p className="text-gray-700">Numérisez, indexez et archivez rapidement vos documents pour faciliter leur recherche et leur partage au sein de votre organisation.</p>
              </div>
            </div>
          </div>

          {/* Accompagnement de bout en bout */}
          <div className="bg-white rounded-2xl shadow-xl p-8" data-aos="fade-up">
            <h2 className="text-2xl font-bold text-cnbd-red mb-8">Un accompagnement de bout en bout</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center gap-2">
                <span className="inline-flex items-center justify-center bg-cnbd-red/10 text-cnbd-red rounded-full w-14 h-14 mb-2">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                  </svg>
                </span>
                <span className="font-semibold">Audit et conseil</span>
                <span className="text-gray-600 text-sm">Analyse de vos besoins, étude personnalisée, recommandations adaptées</span>
              </div>
              
              <div className="flex flex-col items-center text-center gap-2">
                <span className="inline-flex items-center justify-center bg-cnbd-red/10 text-cnbd-red rounded-full w-14 h-14 mb-2">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line>
                  </svg>
                </span>
                <span className="font-semibold">Installation et formation</span>
                <span className="text-gray-600 text-sm">Mise en place des équipements, configuration, formation de vos équipes</span>
              </div>
              
              <div className="flex flex-col items-center text-center gap-2">
                <span className="inline-flex items-center justify-center bg-cnbd-red/10 text-cnbd-red rounded-full w-14 h-14 mb-2">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path><circle cx="12" cy="12" r="3"></circle>
                  </svg>
                </span>
                <span className="font-semibold">Support et maintenance</span>
                <span className="text-gray-600 text-sm">Assistance technique, maintenance préventive, intervention rapide</span>
              </div>
            </div>
          </div>

          {/* Carte d'information et contact */}
          <div className="bg-cnbd-red text-white rounded-2xl shadow-xl p-8" data-aos="fade-up">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-bold mb-4">Demandez votre étude personnalisée</h2>
                <p className="leading-relaxed mb-6">
                  Vous souhaitez moderniser votre parc d'impression, réduire vos coûts ou renforcer la sécurité de vos documents ? Contactez-nous pour une étude gratuite et découvrez comment CNBD peut transformer votre gestion d'impression en un atout pour votre entreprise.
                </p>
                <a href="/contact" className="inline-flex items-center bg-white text-cnbd-red px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:translate-y-[-2px] group">
                  Nous contacter
                  <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cnbd-red to-transparent opacity-40 rounded-xl z-10"></div>
                <div className="rounded-xl overflow-hidden border-4 border-white/30 relative z-0">
                  <Image 
                    src="/image-defaut.jpg" 
                    alt="Contact CNBD pour solutions d'impression" 
                    width={600} 
                    height={400}
                    className="object-cover w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="container mx-auto px-4 max-w-5xl py-16">
          <div className="bg-white rounded-2xl shadow-xl p-8" data-aos="fade-up">
            <h2 className="text-2xl font-bold text-cnbd-red mb-8 text-center">Questions fréquentes sur nos solutions d'impression</h2>
            <div className="divide-y divide-gray-200">
              {faqs.map((faq, index) => (
                <div key={index} className="py-5">
                  <details className="group">
                    <summary className="flex justify-between items-center font-semibold cursor-pointer list-none">
                      <span className="text-lg">{faq.q}</span>
                      <span className="transition group-open:rotate-180">
                        <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
                        </svg>
                      </span>
                    </summary>
                    <p className="text-gray-600 mt-3 group-open:animate-fadeIn">{faq.a}</p>
                  </details>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
} 