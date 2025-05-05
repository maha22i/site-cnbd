"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Breadcrumbs from "@/components/navigation/Breadcrumbs";
import AOS from "aos";
import "aos/dist/aos.css";

const faqs = [
  { q: "Qu'est-ce que l'infogérance ?", a: "L'infogérance est un service qui consiste à déléguer tout ou partie de la gestion de votre système d'information à un prestataire spécialisé comme CNBD, afin de garantir la disponibilité, la sécurité et l'évolutivité de vos outils informatiques." },
  { q: "Quels sont les délais d'intervention ?", a: "Nos équipes assurent une surveillance proactive 24/7 et des interventions rapides. Les délais précis dépendent du contrat de service choisi et du niveau de criticité de l'incident." },
  { q: "Comment se passe la transition vers l'infogérance ?", a: "La transition se déroule en plusieurs étapes : audit initial de votre infrastructure, définition du périmètre de services, mise en place des outils de supervision, phase de transition progressive, et enfin exploitation complète." },
  { q: "Quels sont les coûts d'une prestation d'infogérance ?", a: "Le coût dépend de la taille de votre structure, du nombre de postes et serveurs à gérer, et des services inclus. Contactez-nous pour un devis personnalisé adapté à vos besoins." },
];

export default function InfogerancePage() {
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
                  <span className="block">Infogérance &</span>
                  <span className="text-cnbd-red">Services Managés</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-lg leading-relaxed">
                  Confiez la gestion de votre parc informatique à des experts et concentrez-vous sur le développement de votre activité. CNBD vous accompagne avec des solutions d'infogérance sur-mesure, fiables et sécurisées.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="/contact" className="inline-flex items-center bg-cnbd-red text-white px-8 py-4 rounded-full font-bold hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:translate-y-[-2px] group">
                    Demander un audit
                    <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </a>
                  <a href="#avantages" className="inline-flex items-center bg-white text-cnbd-black border-2 border-gray-200 px-8 py-4 rounded-full font-bold hover:border-cnbd-red/30 transition-all duration-300 shadow-lg hover:shadow-xl hover:translate-y-[-2px]">
                    Découvrir les avantages
                  </a>
                </div>
                
                <div className="mt-12 flex items-center gap-4">
                  <div className="bg-white p-3 rounded-full shadow-md">
                    <svg className="w-6 h-6 text-cnbd-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">Solution complète et sur-mesure</span>
                </div>
              </div>
              
              <div className="relative" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="300">
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-cnbd-red/5 rounded-full blur-2xl -z-10"></div>
                <div className="relative overflow-hidden rounded-[2rem] shadow-2xl border-8 border-white">
                  <Image 
                    src="/image-defaut.jpg" 
                    alt="Infogérance & Services Managés" 
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
                      <div className="font-bold">Sécurité renforcée</div>
                      <div className="text-sm text-gray-500">Protection de vos systèmes</div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -left-10 bottom-20 bg-white rounded-2xl shadow-xl p-4 backdrop-blur">
                  <div className="flex items-center gap-3">
                    <div className="bg-cnbd-red/10 p-2 rounded-lg">
                      <svg className="w-8 h-8 text-cnbd-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M13 2L3 14h9l-1 8L21 10h-9l1-8z"></path>
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold">Disponibilité maximale</div>
                      <div className="text-sm text-gray-500">Surveillance 24/7</div>
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
          {/* Pourquoi choisir l'infogérance */}
          <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col md:flex-row gap-8 items-center" data-aos="fade-right">
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-cnbd-red mb-3">Les enjeux de l'infogérance pour les entreprises</h2>
              <p className="text-gray-700">
                L'informatique est au cœur de la performance des entreprises. L'infogérance permet de déléguer tout ou partie de la gestion de votre système d'information à un prestataire spécialisé, pour garantir disponibilité, sécurité et évolutivité de vos outils informatiques, tout en maîtrisant vos coûts.
              </p>
            </div>
            <div className="flex-1 flex justify-center">
              <Image src="/digitale.webp" alt="Infogérance" width={600} height={300} className="object-contain bg-white rounded-xl shadow p-2" />
            </div>
          </div>

          {/* Nos offres d'infogérance */}
          <div className="bg-gray-50 rounded-2xl shadow-lg p-8" data-aos="fade-left">
            <h2 className="text-2xl font-bold text-cnbd-red mb-3">Une gestion complète et proactive de votre informatique</h2>
            <p className="text-gray-700 mb-6">CNBD propose des solutions d'infogérance adaptées à vos besoins, de la PME au grand compte :</p>
            <ul className="grid md:grid-cols-2 gap-4 text-gray-800">
              <li className="flex items-center gap-3"><span className="inline-flex items-center justify-center bg-cnbd-red/10 text-cnbd-red rounded-full w-8 h-8"><svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg></span>Supervision et maintenance de votre parc informatique</li>
              <li className="flex items-center gap-3"><span className="inline-flex items-center justify-center bg-cnbd-red/10 text-cnbd-red rounded-full w-8 h-8"><svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg></span>Gestion des serveurs, postes de travail, réseaux et périphériques</li>
              <li className="flex items-center gap-3"><span className="inline-flex items-center justify-center bg-cnbd-red/10 text-cnbd-red rounded-full w-8 h-8"><svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg></span>Surveillance proactive 24/7 et interventions rapides</li>
              <li className="flex items-center gap-3"><span className="inline-flex items-center justify-center bg-cnbd-red/10 text-cnbd-red rounded-full w-8 h-8"><svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg></span>Gestion des sauvegardes et de la sécurité des données</li>
              <li className="flex items-center gap-3"><span className="inline-flex items-center justify-center bg-cnbd-red/10 text-cnbd-red rounded-full w-8 h-8"><svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg></span>Assistance utilisateurs (helpdesk, support à distance et sur site)</li>
              <li className="flex items-center gap-3"><span className="inline-flex items-center justify-center bg-cnbd-red/10 text-cnbd-red rounded-full w-8 h-8"><svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg></span>Gestion des mises à jour et des licences logicielles</li>
              <li className="flex items-center gap-3"><span className="inline-flex items-center justify-center bg-cnbd-red/10 text-cnbd-red rounded-full w-8 h-8"><svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg></span>Conseil et accompagnement à l'évolution de votre infrastructure</li>
            </ul>
          </div>

          {/* Les avantages de l'infogérance */}
          <div id="avantages" className="bg-white rounded-2xl shadow-xl p-8" data-aos="fade-up">
            <h2 className="text-2xl font-bold text-cnbd-red mb-3">Les bénéfices pour votre entreprise</h2>
            <ul className="grid md:grid-cols-3 gap-6 text-gray-800">
              <li className="flex flex-col items-center text-center gap-2"><span className="inline-flex items-center justify-center bg-cnbd-red/10 text-cnbd-red rounded-full w-14 h-14 mb-2">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
              </span><span className="font-semibold">Sécurité renforcée</span><span className="text-gray-600 text-sm">Protection contre les cybermenaces, sauvegardes régulières</span></li>
              <li className="flex flex-col items-center text-center gap-2"><span className="inline-flex items-center justify-center bg-cnbd-red/10 text-cnbd-red rounded-full w-14 h-14 mb-2">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
              </span><span className="font-semibold">Disponibilité maximale</span><span className="text-gray-600 text-sm">Surveillance continue, détection et résolution rapide des incidents</span></li>
              <li className="flex flex-col items-center text-center gap-2"><span className="inline-flex items-center justify-center bg-cnbd-red/10 text-cnbd-red rounded-full w-14 h-14 mb-2">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
              </span><span className="font-semibold">Maîtrise des coûts</span><span className="text-gray-600 text-sm">Forfaits adaptés, budget informatique prévisible</span></li>
              <li className="flex flex-col items-center text-center gap-2"><span className="inline-flex items-center justify-center bg-cnbd-red/10 text-cnbd-red rounded-full w-14 h-14 mb-2">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="14 2 18 6 7 17 3 17 3 13 14 2"></polygon><line x1="3" y1="22" x2="21" y2="22"></line></svg>
              </span><span className="font-semibold">Expertise</span><span className="text-gray-600 text-sm">Accès à des compétences pointues sans recruter en interne</span></li>
              <li className="flex flex-col items-center text-center gap-2"><span className="inline-flex items-center justify-center bg-cnbd-red/10 text-cnbd-red rounded-full w-14 h-14 mb-2">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
              </span><span className="font-semibold">Sérénité</span><span className="text-gray-600 text-sm">Concentrez-vous sur votre métier, nous gérons votre informatique</span></li>
              <li className="flex flex-col items-center text-center gap-2"><span className="inline-flex items-center justify-center bg-cnbd-red/10 text-cnbd-red rounded-full w-14 h-14 mb-2">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path></svg>
              </span><span className="font-semibold">Évolutivité</span><span className="text-gray-600 text-sm">Solutions qui s'adaptent à la croissance de votre entreprise</span></li>
            </ul>
          </div>

          {/* Fonctionnalités et services inclus */}
          <div className="bg-gray-50 rounded-2xl shadow-lg p-8" data-aos="fade-left">
            <h2 className="text-2xl font-bold text-cnbd-red mb-3">Ce que comprend notre infogérance</h2>
            <ul className="grid md:grid-cols-2 gap-6 text-gray-800">
              <li className="flex items-center gap-4">
                <span className="inline-flex items-center justify-center bg-cnbd-red/10 text-cnbd-red rounded-full w-12 h-12">
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
                </span>Audit initial de votre infrastructure
              </li>
              <li className="flex items-center gap-4">
                <span className="inline-flex items-center justify-center bg-cnbd-red/10 text-cnbd-red rounded-full w-12 h-12">
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><circle cx="12" cy="8" r="3"></circle></svg>
                </span>Mise en place d'outils de supervision
              </li>
              <li className="flex items-center gap-4">
                <span className="inline-flex items-center justify-center bg-cnbd-red/10 text-cnbd-red rounded-full w-12 h-12">
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
                </span>Maintenance préventive et curative
              </li>
              <li className="flex items-center gap-4">
                <span className="inline-flex items-center justify-center bg-cnbd-red/10 text-cnbd-red rounded-full w-12 h-12">
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
                </span>Gestion des incidents et des demandes
              </li>
              <li className="flex items-center gap-4">
                <span className="inline-flex items-center justify-center bg-cnbd-red/10 text-cnbd-red rounded-full w-12 h-12">
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
                </span>Reporting régulier sur l'état de votre parc
              </li>
              <li className="flex items-center gap-4">
                <span className="inline-flex items-center justify-center bg-cnbd-red/10 text-cnbd-red rounded-full w-12 h-12">
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                </span>Conseils d'optimisation et d'évolution
              </li>
            </ul>
          </div>

          {/* Sécurité & conformité */}
          <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col md:flex-row gap-8 items-center" data-aos="fade-right">
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-cnbd-red mb-3">Protégez vos données et respectez la réglementation</h2>
              <p className="text-gray-700">La sécurité de vos données est notre priorité. Nous mettons en place des solutions de protection avancées (antivirus, firewall, sauvegardes externalisées, plan de reprise d'activité) et veillons au respect des normes (RGPD, etc.).</p>
            </div>
            <div className="flex-1 flex justify-center">
              <Image src="/image-defaut.jpg" alt="Sécurité informatique" width={320} height={220} className="rounded-xl shadow-lg object-cover" />
            </div>
          </div>

          {/* Accompagnement & support */}
          <div className="bg-gray-50 rounded-2xl shadow-lg p-8 flex flex-col md:flex-row gap-8 items-center" data-aos="fade-left">
            <div className="flex-1 flex justify-center">
              <Image src="/logo-cnbd.png" alt="Logo CNBD" width={600} height={300} className="object-contain bg-white rounded-xl shadow p-2" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-cnbd-red mb-3">Un partenaire de confiance à vos côtés</h2>
              <p className="text-gray-700">CNBD vous accompagne au quotidien avec une équipe réactive et disponible. Notre support technique est accessible par téléphone, email ou via un portail dédié, pour répondre à toutes vos demandes.</p>
            </div>
          </div>

          {/* Mise en avant du partenariat Canon */}
          <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col md:flex-row gap-8 items-center" data-aos="fade-right">
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-cnbd-red mb-3">L'expertise Canon au service de votre infrastructure</h2>
              <p className="text-gray-700">En tant que distributeur officiel Canon, nous intégrons les solutions matérielles et logicielles Canon dans nos prestations d'infogérance, pour une infrastructure performante et homogène.</p>
            </div>
            <div className="flex-1 flex justify-center">
              <Image src="/image-defaut.jpg" alt="Partenariat Canon" width={320} height={220} className="rounded-xl shadow-lg object-cover" />
            </div>
          </div>

          {/* Appel à l'action */}
          <div className="bg-cnbd-red rounded-2xl shadow-xl p-8 text-white text-center flex flex-col items-center gap-6" data-aos="zoom-in">
            <h2 className="text-2xl font-bold mb-2">Prêt à sécuriser et optimiser votre informatique ?</h2>
            <p className="text-lg mb-4">Contactez-nous pour un audit gratuit de votre parc informatique ou pour découvrir nos offres d'infogérance sur-mesure.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="/contact" className="px-6 py-3 bg-white text-cnbd-red font-bold rounded-lg shadow-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">Demander un audit</a>
              <a href="/contact" className="px-6 py-3 bg-transparent border-2 border-white text-white font-bold rounded-lg shadow-lg hover:bg-white/10 transition-all duration-300 transform hover:scale-105">Être rappelé</a>
            </div>
          </div>

          {/* FAQ */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mt-8" data-aos="fade-up">
            <h2 className="text-2xl font-bold text-cnbd-red mb-6 text-center">Questions fréquentes</h2>
            <div className="space-y-6 max-w-3xl mx-auto">
              {faqs.map((item, i) => (
                <div key={i} className="bg-gray-50 rounded-lg shadow p-6" data-aos="fade-up" data-aos-delay={i*100}>
                  <h3 className="font-bold text-cnbd-red mb-2">{item.q}</h3>
                  <p className="text-gray-700">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
} 