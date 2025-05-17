"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Breadcrumbs from "@/components/navigation/Breadcrumbs";
import AOS from "aos";
import "aos/dist/aos.css";

const faqs = [
  { q: "Quels types d'écrans interactifs proposez-vous ?", a: "Nous proposons une gamme complète d'écrans et de tableaux interactifs adaptés à tous les environnements professionnels : salles de réunion, open spaces, salles de classe, espaces de formation ou de créativité." },
  { q: "Peut-on connecter les écrans interactifs à nos systèmes existants ?", a: "Oui, nos solutions s'intègrent facilement à vos outils existants (visioconférence, partage de documents, applications collaboratives) et sont compatibles avec la plupart des systèmes d'exploitation et applications métiers." },
  { q: "Quelle est la durée de vie moyenne d'un écran interactif ?", a: "Nos écrans interactifs ont une durée de vie moyenne de 7 à 10 ans avec une utilisation normale. Nous proposons des contrats de maintenance pour assurer leur bon fonctionnement dans le temps." },
  { q: "Comment se déroule l'installation et la prise en main des écrans ?", a: "CNBD vous accompagne à chaque étape : installation, paramétrage et formation de vos équipes. Nos écrans sont intuitifs et conçus pour être facilement utilisables par tous, avec une prise en main rapide." },
];

export default function EcransInteractifsPage() {
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
                  <span className="block">Écrans et Tableaux</span>
                  <span className="text-cnbd-red">Interactifs</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-lg leading-relaxed">
                  Réinventez vos réunions et formations avec l'interactivité. Transformez vos espaces de travail en véritables lieux de collaboration dynamique.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="/contact" className="inline-flex items-center bg-cnbd-red text-white px-8 py-4 rounded-full font-bold hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:translate-y-[-2px] group">
                    Demander une démo
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
                  <span className="text-gray-700 font-medium">Solutions de dernière génération</span>
                </div>
              </div>
              
              <div className="relative" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="300">
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-cnbd-red/5 rounded-full blur-2xl -z-10"></div>
                <div className="relative overflow-hidden rounded-[2rem] shadow-2xl border-8 border-white">
                  <Image 
                    src="/image-defaut.jpg" 
                    alt="Écrans et Tableaux Interactifs" 
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
                      <div className="font-bold">Collaboration dynamique</div>
                      <div className="text-sm text-gray-500">Réunions interactives</div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -left-10 bottom-20 bg-white rounded-2xl shadow-xl p-4 backdrop-blur">
                  <div className="flex items-center gap-3">
                    <div className="bg-cnbd-red/10 p-2 rounded-lg">
                      <svg className="w-8 h-8 text-cnbd-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold">Formation efficace</div>
                      <div className="text-sm text-gray-500">Engagement accru</div>
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
          {/* Nos solutions interactives */}
          <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col md:flex-row gap-8 items-center" data-aos="fade-right">
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-cnbd-red mb-3">Nos solutions interactives</h2>
              <p className="text-gray-700">
                Nous sélectionnons pour vous des écrans et tableaux interactifs de dernière génération, adaptés à tous les environnements professionnels : salles de réunion, open spaces, salles de classe, espaces de formation ou de créativité. Nos solutions s'intègrent facilement à vos outils existants (visioconférence, partage de documents, applications collaboratives).
              </p>
            </div>
            <div className="flex-1 flex justify-center">
              <Image src="/digitale.webp" alt="Écrans interactifs" width={600} height={300} className="object-contain bg-white rounded-xl shadow p-2" />
            </div>
          </div>

          {/* Les avantages des écrans interactifs */}
          <div id="avantages" className="bg-gray-50 rounded-2xl shadow-lg p-8" data-aos="fade-left">
            <h2 className="text-2xl font-bold text-cnbd-red mb-3">Les atouts des écrans interactifs CNBD</h2>
            <p className="text-gray-700 mb-6">Nos écrans interactifs vous offrent de nombreux avantages pour transformer vos réunions et formations :</p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-cnbd-red/10 p-3 rounded-full">
                    <svg className="w-8 h-8 text-cnbd-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  </div>
                  <h3 className="font-bold text-xl">Collaboration sans frontières</h3>
                </div>
                <p className="text-gray-700">Facilitez le travail d'équipe, même à distance. Les participants peuvent intervenir, annoter et partager des contenus en temps réel, où qu'ils se trouvent.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-cnbd-red/10 p-3 rounded-full">
                    <svg className="w-8 h-8 text-cnbd-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                    </svg>
                  </div>
                  <h3 className="font-bold text-xl">Productivité accrue</h3>
                </div>
                <p className="text-gray-700">Gagnez du temps lors de vos réunions grâce à des outils intuitifs qui favorisent l'échange d'idées, la prise de notes collaborative et la sauvegarde instantanée des travaux.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-cnbd-red/10 p-3 rounded-full">
                    <svg className="w-8 h-8 text-cnbd-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                  </div>
                  <h3 className="font-bold text-xl">Flexibilité et simplicité</h3>
                </div>
                <p className="text-gray-700">Nos écrans sont compatibles avec la plupart des systèmes d'exploitation et applications métiers. L'interface tactile et les fonctionnalités avancées rendent leur utilisation accessible à tous.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-cnbd-red/10 p-3 rounded-full">
                    <svg className="w-8 h-8 text-cnbd-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                  </div>
                  <h3 className="font-bold text-xl">Partage en temps réel</h3>
                </div>
                <p className="text-gray-700">Diffusez vos présentations, documents ou vidéos instantanément à tous les participants, sur place ou à distance, pour une communication fluide et efficace.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-cnbd-red/10 p-3 rounded-full">
                    <svg className="w-8 h-8 text-cnbd-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"></path>
                    </svg>
                  </div>
                  <h3 className="font-bold text-xl">Formation et créativité</h3>
                </div>
                <p className="text-gray-700">Idéal pour les sessions de brainstorming, les ateliers de formation ou les présentations interactives, l'écran interactif stimule l'engagement et la créativité de vos équipes.</p>
              </div>
            </div>
          </div>

          {/* Accompagnement sur mesure */}
          <div className="bg-white rounded-2xl shadow-xl p-8" data-aos="fade-up">
            <h2 className="text-2xl font-bold text-cnbd-red mb-8">Un accompagnement sur mesure</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center gap-2">
                <span className="inline-flex items-center justify-center bg-cnbd-red/10 text-cnbd-red rounded-full w-14 h-14 mb-2">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="3" y1="9" x2="21" y2="9"></line>
                    <line x1="9" y1="21" x2="9" y2="9"></line>
                  </svg>
                </span>
                <span className="font-semibold">Conseil et choix</span>
                <span className="text-gray-600 text-sm">Analyse de vos besoins, recommandations adaptées à votre environnement</span>
              </div>
              
              <div className="flex flex-col items-center text-center gap-2">
                <span className="inline-flex items-center justify-center bg-cnbd-red/10 text-cnbd-red rounded-full w-14 h-14 mb-2">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
                  </svg>
                </span>
                <span className="font-semibold">Installation et paramétrage</span>
                <span className="text-gray-600 text-sm">Mise en place, configuration et intégration à votre infrastructure existante</span>
              </div>
              
              <div className="flex flex-col items-center text-center gap-2">
                <span className="inline-flex items-center justify-center bg-cnbd-red/10 text-cnbd-red rounded-full w-14 h-14 mb-2">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                  </svg>
                </span>
                <span className="font-semibold">Formation et maintenance</span>
                <span className="text-gray-600 text-sm">Formation de vos équipes et support technique pour une utilisation optimale</span>
              </div>
            </div>
          </div>

          {/* Carte d'information et contact */}
          <div className="bg-cnbd-red text-white rounded-2xl shadow-xl p-8" data-aos="fade-up">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-bold mb-4">Demandez une démonstration</h2>
                <p className="leading-relaxed mb-6">
                  Vous souhaitez découvrir comment un écran interactif peut transformer vos réunions ou vos formations ? Contactez-nous pour une démonstration personnalisée et un devis sur mesure.
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
                    alt="Démonstration d'écrans interactifs CNBD" 
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
            <h2 className="text-2xl font-bold text-cnbd-red mb-8 text-center">Questions fréquentes sur nos écrans interactifs</h2>
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