"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Breadcrumbs from "@/components/navigation/Breadcrumbs";
import AOS from "aos";
import "aos/dist/aos.css";

const faqs = [
  { q: "Quelle solution d'hébergement me recommandez-vous ?", a: "Cela dépend de vos besoins spécifiques. L'hébergement mutualisé convient aux petits sites, le VPS aux sites en croissance, le dédié aux sites exigeants en performance et sécurité, et le cloud aux sites avec des besoins variables. Nous vous conseillons après analyse de votre projet." },
  { q: "Comment assurez-vous la sécurité de mon site web ?", a: "Nous mettons en place des mesures de sécurité rigoureuses comprenant firewalls, systèmes de détection d'intrusion, antivirus et sauvegardes régulières pour protéger votre site contre les attaques et les pertes de données." },
  { q: "Quels sont les avantages d'un hébergement cloud ?", a: "L'hébergement cloud offre une flexibilité et une évolutivité inégalées. Vous pouvez adapter vos ressources en fonction de vos besoins, ne payer que ce que vous consommez, et bénéficier d'une infrastructure robuste et redondante garantissant une disponibilité maximale." },
  { q: "Que faire en cas de problème technique ?", a: "Notre équipe de support technique est disponible 24h/24 et 7j/7 pour répondre à vos questions et résoudre vos problèmes. Vous n'êtes jamais seul face à vos problèmes d'hébergement avec CNBD." },
];

export default function HebergementPage() {
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
                  <span className="block">Hébergement</span>
                  <span className="text-cnbd-red">Web</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-lg leading-relaxed">
                  Des solutions d'hébergement web performantes, sécurisées et adaptées à vos besoins pour une présence en ligne optimale.
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
                  <span className="text-gray-700 font-medium">Solutions fiables et performantes</span>
                </div>
              </div>
              
              <div className="relative" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="300">
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-cnbd-red/5 rounded-full blur-2xl -z-10"></div>
                <div className="relative overflow-hidden rounded-[2rem] shadow-2xl border-8 border-white">
                  <Image 
                    src="/image-defaut.jpg" 
                    alt="Solutions d'hébergement web professionnelles" 
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
                      <div className="font-bold">Haute disponibilité</div>
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
          {/* Importance de l'hébergement */}
          <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col gap-8" data-aos="fade-right">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-cnbd-red mb-3">L'importance d'un hébergement de qualité</h2>
                <p className="text-gray-700">
                  Votre hébergement est la fondation de votre présence en ligne. Un hébergement fiable et performant assure la disponibilité de votre site web et la satisfaction de vos visiteurs.
                </p>
                <p className="text-gray-700 mt-3">
                  Ne laissez pas un hébergement de mauvaise qualité compromettre votre image de marque et vos efforts de marketing.
                </p>
                <p className="text-gray-700 mt-3">
                  Avec CNBD, bénéficiez d'un hébergement professionnel qui vous permet de vous concentrer sur votre activité, en toute sérénité.
                </p>
              </div>
              <div className="flex-1 flex justify-center">
                <Image src="/image-defaut.jpg" alt="Hébergement de qualité" width={600} height={300} className="object-contain bg-white rounded-xl shadow p-2" />
              </div>
            </div>
          </div>
          {/* Hébergement mutualisé */}
          <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col gap-8" data-aos="fade-left">
            <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-cnbd-red mb-3">Hébergement mutualisé</h2>
                <p className="text-gray-700">
                  L'hébergement mutualisé est une solution économique et simple pour les sites web qui débutent. C'est un excellent choix pour les blogs personnels, les petites entreprises et les sites vitrines.
                </p>
                <p className="text-gray-700 mt-3">
                  Bien que les ressources soient partagées, nous optimisons nos serveurs pour garantir une performance satisfaisante pour tous nos clients.
                </p>
                <p className="text-gray-700 mt-3">
                  Notre hébergement mutualisé inclut toutes les fonctionnalités essentielles pour lancer votre site web rapidement et facilement.
                </p>
              </div>
              <div className="flex-1 flex justify-center">
                <Image src="/image-defaut.jpg" alt="Hébergement mutualisé" width={600} height={300} className="object-contain bg-white rounded-xl shadow p-2" />
              </div>
            </div>
          </div>
          {/* Hébergement VPS */}
          <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col gap-8" data-aos="fade-right">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-cnbd-red mb-3">Hébergement VPS</h2>
                <p className="text-gray-700">
                  L'hébergement VPS vous offre plus de puissance et de flexibilité que l'hébergement mutualisé. C'est la solution idéale pour les sites web qui connaissent une croissance rapide ou qui nécessitent des ressources spécifiques.
                </p>
                <p className="text-gray-700 mt-3">
                  Avec un VPS, vous disposez de ressources dédiées (CPU, mémoire, espace disque) et d'un contrôle total sur votre serveur.
                </p>
                <p className="text-gray-700 mt-3">
                  Nos VPS sont basés sur des technologies de virtualisation performantes et sont hébergés dans des datacenters sécurisés.
                </p>
              </div>
              <div className="flex-1 flex justify-center">
                <Image src="/image-defaut.jpg" alt="Hébergement VPS" width={600} height={300} className="object-contain bg-white rounded-xl shadow p-2" />
              </div>
            </div>
          </div>
          {/* Hébergement dédié */}
          <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col gap-8" data-aos="fade-left">
            <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-cnbd-red mb-3">Hébergement dédié</h2>
                <p className="text-gray-700">
                  L'hébergement dédié est la solution ultime pour les sites web qui exigent une performance maximale et une sécurité renforcée. Vous disposez d'un serveur physique entièrement dédié à votre site web.
                </p>
                <p className="text-gray-700 mt-3">
                  Avec un serveur dédié, vous avez un contrôle total sur l'environnement d'hébergement et vous pouvez personnaliser la configuration en fonction de vos besoins.
                </p>
                <p className="text-gray-700 mt-3">
                  Nos serveurs dédiés sont équipés de matériel de pointe et sont hébergés dans des datacenters de niveau entreprise.
                </p>
              </div>
              <div className="flex-1 flex justify-center">
                <Image src="/image-defaut.jpg" alt="Hébergement dédié" width={600} height={300} className="object-contain bg-white rounded-xl shadow p-2" />
              </div>
            </div>
          </div>
          {/* Hébergement cloud */}
          <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col gap-8" data-aos="fade-right">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-cnbd-red mb-3">Hébergement cloud</h2>
                <p className="text-gray-700">
                  L'hébergement cloud vous offre une flexibilité et une évolutivité inégalées. Vous pouvez adapter vos ressources en fonction de vos besoins et ne payer que ce que vous consommez.
                </p>
                <p className="text-gray-700 mt-3">
                  Nos solutions d'hébergement cloud sont basées sur des infrastructures robustes et redondantes, ce qui garantit une disponibilité maximale de votre site web.
                </p>
                <p className="text-gray-700 mt-3">
                  L'hébergement cloud est idéal pour les sites web qui connaissent des pics de trafic ou qui ont des besoins en ressources variables.
                </p>
              </div>
              <div className="flex-1 flex justify-center">
                <Image src="/image-defaut.jpg" alt="Hébergement cloud" width={600} height={300} className="object-contain bg-white rounded-xl shadow p-2" />
              </div>
            </div>
          </div>
          {/* Sécurité */}
          <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col gap-8" data-aos="fade-left">
            <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-cnbd-red mb-3">Sécurité renforcée</h2>
                <p className="text-gray-700">
                  La sécurité de vos données est notre priorité. Nous mettons en place des mesures de sécurité rigoureuses pour protéger votre site web contre les attaques informatiques.
                </p>
                <p className="text-gray-700 mt-3">
                  Nos serveurs sont protégés par des firewalls, des systèmes de détection d'intrusion et des antivirus.
                </p>
                <p className="text-gray-700 mt-3">
                  Nous effectuons des sauvegardes régulières de vos données pour vous protéger contre les pertes et les incidents.
                </p>
              </div>
              <div className="flex-1 flex justify-center">
                <Image src="/image-defaut.jpg" alt="Sécurité hébergement" width={600} height={300} className="object-contain bg-white rounded-xl shadow p-2" />
              </div>
            </div>
          </div>
        </section>
        {/* Section support technique */}
        <section className="bg-gradient-to-br from-cnbd-red/5 to-white py-16 mb-16">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-12" data-aos="fade-up">
              <h2 className="text-3xl font-bold mb-6">Support technique 24/7</h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Notre équipe de support technique est à votre disposition 24h/24 et 7j/7 pour répondre à toutes vos questions et vous aider à résoudre les problèmes.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300" data-aos="fade-up" data-aos-delay="100">
                <div className="bg-cnbd-red/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-cnbd-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Support réactif</h3>
                <p className="text-gray-700">
                  Nous sommes passionnés par l'hébergement web et nous mettons tout en œuvre pour vous offrir un service de qualité.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300" data-aos="fade-up" data-aos-delay="200">
                <div className="bg-cnbd-red/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-cnbd-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="21 8 21 21 3 21 3 8"></polyline>
                    <rect x="1" y="3" width="22" height="5"></rect>
                    <line x1="10" y1="12" x2="14" y2="12"></line>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Maintenance proactive</h3>
                <p className="text-gray-700">
                  Nous assurons la maintenance et la supervision de votre hébergement pour garantir sa performance et sa disponibilité.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300" data-aos="fade-up" data-aos-delay="300">
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
                  Avec CNBD, vous n'êtes jamais seul face à vos problèmes d'hébergement. Nos experts sont là pour vous accompagner.
                </p>
              </div>
            </div>
            <div className="text-center mt-12">
              <p className="text-xl text-gray-700 font-medium mb-8" data-aos="fade-up" data-aos-delay="400">
                Confiez l'hébergement de votre site web à des experts et profitez d'une présence en ligne optimale.
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
            <p className="text-gray-700 mb-6">Vous avez d'autres questions sur nos solutions d'hébergement ?</p>
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