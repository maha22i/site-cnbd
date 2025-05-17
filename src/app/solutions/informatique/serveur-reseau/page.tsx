"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Breadcrumbs from "@/components/navigation/Breadcrumbs";
import AOS from "aos";
import "aos/dist/aos.css";

const faqs = [
  { q: "Quels types de serveurs proposez-vous ?", a: "Nous proposons différents types de serveurs physiques (rack, tour, lames) ainsi que des solutions de virtualisation (VMware, Hyper-V) adaptées à vos besoins spécifiques et à vos contraintes budgétaires." },
  { q: "Quels sont les avantages de la virtualisation des serveurs ?", a: "La virtualisation des serveurs permet de réduire les coûts d'infrastructure, d'optimiser l'utilisation des ressources, de simplifier la gestion du système d'information, de faciliter la sauvegarde et la restauration, et d'améliorer la disponibilité et la flexibilité de vos applications." },
  { q: "Quelles solutions de stockage proposez-vous ?", a: "Nous proposons des solutions de stockage NAS et SAN conçues pour offrir une capacité, une performance et une fiabilité optimales. Nos solutions sont évolutives et s'adaptent à la croissance de votre entreprise." },
  { q: "Comment sécurisez-vous les réseaux d'entreprise ?", a: "Nous mettons en place des solutions de sécurité robustes comprenant des firewalls, des antivirus et des systèmes de détection d'intrusion. Nous définissons également une politique de sécurité adaptée à vos besoins et sensibilisons vos collaborateurs aux bonnes pratiques." },
];

export default function ServeurReseauPage() {
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
                  <span className="block">Serveurs</span>
                  <span className="text-cnbd-red">& Réseaux</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-lg leading-relaxed">
                  Nous vous accompagnons dans la conception, l'installation et la maintenance de votre infrastructure serveur et réseau adaptée à vos besoins et à votre budget.
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
                  <span className="text-gray-700 font-medium">Solutions performantes, sécurisées et évolutives</span>
                </div>
              </div>
              
              <div className="relative" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="300">
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-cnbd-red/5 rounded-full blur-2xl -z-10"></div>
                <div className="relative overflow-hidden rounded-[2rem] shadow-2xl border-8 border-white">
                  <Image 
                    src="/image-defaut.jpg" 
                    alt="Serveurs et infrastructure réseau professionnelle" 
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
                        <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                        <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                        <line x1="6" y1="6" x2="6.01" y2="6"></line>
                        <line x1="6" y1="18" x2="6.01" y2="18"></line>
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold">Performance optimale</div>
                      <div className="text-sm text-gray-500">Pour vos applications</div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -left-10 bottom-20 bg-white rounded-2xl shadow-xl p-4 backdrop-blur">
                  <div className="flex items-center gap-3">
                    <div className="bg-cnbd-red/10 p-2 rounded-lg">
                      <svg className="w-8 h-8 text-cnbd-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold">Sécurité maximale</div>
                      <div className="text-sm text-gray-500">Protection de vos données</div>
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
          {/* Serveurs physiques */}
          <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col gap-8" data-aos="fade-right">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-cnbd-red mb-3">Serveurs physiques</h2>
                <p className="text-gray-700">
                  Nos serveurs physiques sont conçus pour offrir une performance optimale et une fiabilité à toute épreuve, répondant aux exigences des applications les plus gourmandes en ressources.
                </p>
                <p className="text-gray-700 mt-3">
                  Choisissez parmi nos serveurs rack, tour ou lames, en fonction de vos contraintes d'espace, de budget et de performance.
                </p>
                <p className="text-gray-700 mt-3">
                  Nous sélectionnons des composants de haute qualité pour garantir la longévité et la stabilité de vos serveurs.
                </p>
              </div>
              <div className="flex-1 flex justify-center">
                <Image src="/image-defaut.jpg" alt="Serveurs physiques" width={600} height={300} className="object-contain bg-white rounded-xl shadow p-2" />
              </div>
            </div>
          </div>
          
          {/* Virtualisation */}
          <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col gap-8" data-aos="fade-left">
            <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-cnbd-red mb-3">Virtualisation</h2>
                <p className="text-gray-700">
                  La virtualisation des serveurs vous permet de réduire vos coûts d'infrastructure, d'optimiser l'utilisation de vos ressources et de simplifier la gestion de votre système d'information.
                </p>
                <p className="text-gray-700 mt-3">
                  Grâce à nos solutions de virtualisation VMware et Hyper-V, vous pouvez consolider plusieurs serveurs physiques sur une seule machine, tout en améliorant la disponibilité et la flexibilité de vos applications.
                </p>
                <p className="text-gray-700 mt-3">
                  La virtualisation facilite la sauvegarde et la restauration de vos serveurs, ainsi que la mise en place de plans de reprise d'activité.
                </p>
              </div>
              <div className="flex-1 flex justify-center">
                <Image src="/image-defaut.jpg" alt="Solutions de virtualisation" width={600} height={300} className="object-contain bg-white rounded-xl shadow p-2" />
              </div>
            </div>
          </div>
          
          {/* Solutions de stockage */}
          <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col gap-8" data-aos="fade-right">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-cnbd-red mb-3">Solutions de stockage</h2>
                <p className="text-gray-700">
                  Sécurisez vos données avec nos solutions de stockage NAS et SAN, conçues pour offrir une capacité, une performance et une fiabilité optimales.
                </p>
                <p className="text-gray-700 mt-3">
                  Nous vous aidons à mettre en place une stratégie de sauvegarde et de restauration efficace pour protéger vos données contre les pertes et les incidents.
                </p>
                <p className="text-gray-700 mt-3">
                  Nos solutions de stockage sont évolutives et s'adaptent à la croissance de votre entreprise.
                </p>
              </div>
              <div className="flex-1 flex justify-center">
                <Image src="/image-defaut.jpg" alt="Solutions de stockage" width={600} height={300} className="object-contain bg-white rounded-xl shadow p-2" />
              </div>
            </div>
          </div>
          
          {/* Réseaux locaux (LAN) */}
          <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col gap-8" data-aos="fade-left">
            <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-cnbd-red mb-3">Réseaux locaux (LAN)</h2>
                <p className="text-gray-700">
                  Nous concevons et installons des réseaux locaux performants et sécurisés, adaptés aux besoins de votre entreprise.
                </p>
                <p className="text-gray-700 mt-3">
                  Nos experts vous conseillent sur le choix des équipements (switches, routeurs, bornes Wi-Fi) et vous accompagnent dans la configuration de votre réseau.
                </p>
                <p className="text-gray-700 mt-3">
                  Nous mettons en place des solutions de sécurité pour protéger votre réseau contre les intrusions et les attaques externes.
                </p>
              </div>
              <div className="flex-1 flex justify-center">
                <Image src="/image-defaut.jpg" alt="Réseaux locaux" width={600} height={300} className="object-contain bg-white rounded-xl shadow p-2" />
              </div>
            </div>
          </div>
          
          {/* Réseaux étendus (WAN) */}
          <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col gap-8" data-aos="fade-right">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-cnbd-red mb-3">Réseaux étendus (WAN)</h2>
                <p className="text-gray-700">
                  Nous vous proposons des solutions de connectivité Internet performantes et fiables, adaptées à vos besoins.
                </p>
                <p className="text-gray-700 mt-3">
                  Sécurisez vos communications avec nos solutions VPN, qui permettent de créer des tunnels chiffrés entre vos différents sites.
                </p>
                <p className="text-gray-700 mt-3">
                  Nous vous aidons à choisir la liaison spécialisée la plus adaptée à vos besoins en termes de bande passante et de disponibilité.
                </p>
              </div>
              <div className="flex-1 flex justify-center">
                <Image src="/image-defaut.jpg" alt="Réseaux étendus" width={600} height={300} className="object-contain bg-white rounded-xl shadow p-2" />
              </div>
            </div>
          </div>
          
          {/* Sécurité réseau */}
          <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col gap-8" data-aos="fade-left">
            <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-cnbd-red mb-3">Sécurité réseau</h2>
                <p className="text-gray-700">
                  Protégez votre réseau contre les menaces informatiques avec nos solutions de sécurité robustes et éprouvées.
                </p>
                <p className="text-gray-700 mt-3">
                  Nous mettons en place des firewalls, des antivirus et des solutions de détection d'intrusion pour sécuriser votre système d'information.
                </p>
                <p className="text-gray-700 mt-3">
                  Nous vous aidons à définir une politique de sécurité adaptée à vos besoins et à sensibiliser vos collaborateurs aux bonnes pratiques.
                </p>
              </div>
              <div className="flex-1 flex justify-center">
                <Image src="/image-defaut.jpg" alt="Sécurité réseau" width={600} height={300} className="object-contain bg-white rounded-xl shadow p-2" />
              </div>
            </div>
          </div>
        </section>
        
        {/* Section CNBD vous accompagne */}
        <section className="bg-gradient-to-br from-cnbd-red/5 to-white py-16 mb-16">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-12" data-aos="fade-up">
              <h2 className="text-3xl font-bold mb-6">CNBD vous accompagne</h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                CNBD vous accompagne dans la conception, l'installation et la maintenance de votre infrastructure serveur et réseau.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300" data-aos="fade-up" data-aos-delay="100">
                <div className="bg-cnbd-red/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-cnbd-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Solutions sur-mesure</h3>
                <p className="text-gray-700">
                  Nous vous proposons des solutions sur-mesure, adaptées à vos besoins et à votre budget.
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
                <h3 className="text-xl font-bold mb-2">Expertise à votre service</h3>
                <p className="text-gray-700">
                  Nos experts sont à votre disposition pour vous conseiller et vous accompagner dans la mise en place de votre système d'information.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300" data-aos="fade-up" data-aos-delay="300">
                <div className="bg-cnbd-red/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-cnbd-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="9" y1="9" x2="15" y2="15"></line>
                    <line x1="15" y1="9" x2="9" y2="15"></line>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Supervision et maintenance</h3>
                <p className="text-gray-700">
                  Nous assurons la supervision et la maintenance de votre infrastructure pour garantir sa performance et sa disponibilité.
                </p>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <p className="text-xl text-gray-700 font-medium mb-8" data-aos="fade-up" data-aos-delay="400">
                Avec CNBD, vous bénéficiez d'une infrastructure serveur et réseau performante, sécurisée et évolutive.
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
            <p className="text-gray-700 mb-6">Vous avez d'autres questions sur nos solutions serveur et réseau ?</p>
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