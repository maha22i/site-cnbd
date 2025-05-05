"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Breadcrumbs from "@/components/navigation/Breadcrumbs";
import AOS from "aos";
import "aos/dist/aos.css";

const faqs = [
  { q: "Qu'est-ce qu'une GED ?", a: "La GED (Gestion Électronique des Documents) est un système permettant de numériser, stocker, organiser et partager les documents de l'entreprise de façon sécurisée et centralisée." },
  { q: "Est-ce que mes documents sont en sécurité ?", a: "Oui, nos solutions garantissent la sécurité, la traçabilité et la sauvegarde automatique de vos documents, avec gestion fine des droits d'accès." },
  { q: "Comment se passe la transition vers la GED ?", a: "Nous vous accompagnons à chaque étape : audit, numérisation, intégration, formation et support continu." },
  { q: "Quels sont les coûts d'une solution GED ?", a: "Le coût dépend de la taille de votre structure et des fonctionnalités choisies. Contactez-nous pour un devis personnalisé ou un audit gratuit." },
];

export default function GedDigitalisationPage() {
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
                  <span className="block">GED &</span>
                  <span className="text-cnbd-red">Digitalisation</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-lg leading-relaxed">
                  Optimisez la gestion de vos documents et accélérez la transformation digitale de votre entreprise grâce à nos solutions performantes et sécurisées.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="/contact" className="inline-flex items-center bg-cnbd-red text-white px-8 py-4 rounded-full font-bold hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:translate-y-[-2px] group">
                    Demander un devis
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
                    alt="GED & Digitalisation" 
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
                      <div className="font-bold">Sécurité maximale</div>
                      <div className="text-sm text-gray-500">Protection de vos données</div>
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
                      <div className="font-bold">Gain de temps</div>
                      <div className="text-sm text-gray-500">Processus optimisés</div>
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
          {/* Pourquoi choisir la GED */}
          <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col md:flex-row gap-8 items-center" data-aos="fade-right">
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-cnbd-red mb-3">Les enjeux de la transformation digitale</h2>
              <p className="text-gray-700">
                La gestion électronique des documents (GED) et la digitalisation sont aujourd'hui des leviers essentiels pour améliorer la productivité, la sécurité et la réactivité des entreprises. En passant au numérique, vous simplifiez l'accès à l'information, réduisez les coûts liés au papier, et garantissez la conformité de vos processus.
              </p>
            </div>
            <div className="flex-1 flex justify-center">
              <Image src="/digitale.webp" alt="Logo CNBD" width={600} height={300} className="object-contain bg-white rounded-xl shadow p-2" />
            </div>
          </div>

          {/* Nos solutions GED */}
          <div className="bg-gray-50 rounded-2xl shadow-lg p-8" data-aos="fade-left">
            <h2 className="text-2xl font-bold text-cnbd-red mb-3">Une solution complète et personnalisée</h2>
            <p className="text-gray-700 mb-6">CNBD vous accompagne dans la mise en place d'une solution GED adaptée à vos besoins, quel que soit la taille de votre structure. Notre offre inclut :</p>
            <ul className="grid md:grid-cols-2 gap-4 text-gray-800">
              <li className="flex items-center gap-3"><span className="inline-flex items-center justify-center bg-cnbd-red/10 text-cnbd-red rounded-full w-8 h-8"><svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg></span>Analyse de vos processus documentaires existants</li>
              <li className="flex items-center gap-3"><span className="inline-flex items-center justify-center bg-cnbd-red/10 text-cnbd-red rounded-full w-8 h-8"><svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg></span>Numérisation et indexation de vos documents papier</li>
              <li className="flex items-center gap-3"><span className="inline-flex items-center justify-center bg-cnbd-red/10 text-cnbd-red rounded-full w-8 h-8"><svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg></span>Intégration d'une plateforme GED intuitive et sécurisée</li>
              <li className="flex items-center gap-3"><span className="inline-flex items-center justify-center bg-cnbd-red/10 text-cnbd-red rounded-full w-8 h-8"><svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg></span>Gestion des droits d'accès et traçabilité des actions</li>
              <li className="flex items-center gap-3"><span className="inline-flex items-center justify-center bg-cnbd-red/10 text-cnbd-red rounded-full w-8 h-8"><svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg></span>Automatisation des workflows (validation, signature électronique, archivage)</li>
              <li className="flex items-center gap-3"><span className="inline-flex items-center justify-center bg-cnbd-red/10 text-cnbd-red rounded-full w-8 h-8"><svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg></span>Accompagnement et formation de vos équipes</li>
            </ul>
          </div>

          {/* Les avantages de la GED */}
          <div className="bg-white rounded-2xl shadow-xl p-8" data-aos="fade-up">
            <h2 className="text-2xl font-bold text-cnbd-red mb-3">Les bénéfices pour votre entreprise</h2>
            <ul className="grid md:grid-cols-3 gap-6 text-gray-800">
              <li className="flex flex-col items-center text-center gap-2"><span className="inline-flex items-center justify-center bg-cnbd-red/10 text-cnbd-red rounded-full w-14 h-14 mb-2">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8L21 10h-9l1-8z" /></svg>
              </span><span className="font-semibold">Gain de temps</span><span className="text-gray-600 text-sm">Recherche et partage de documents instantanés</span></li>
              <li className="flex flex-col items-center text-center gap-2"><span className="inline-flex items-center justify-center bg-cnbd-red/10 text-cnbd-red rounded-full w-14 h-14 mb-2">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
              </span><span className="font-semibold">Sécurité</span><span className="text-gray-600 text-sm">Protection des données sensibles et sauvegardes automatiques</span></li>
              <li className="flex flex-col items-center text-center gap-2"><span className="inline-flex items-center justify-center bg-cnbd-red/10 text-cnbd-red rounded-full w-14 h-14 mb-2">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>
              </span><span className="font-semibold">Conformité</span><span className="text-gray-600 text-sm">Respect des normes légales et RGPD</span></li>
              <li className="flex flex-col items-center text-center gap-2"><span className="inline-flex items-center justify-center bg-cnbd-red/10 text-cnbd-red rounded-full w-14 h-14 mb-2">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M16 8l-8 8M8 8l8 8"/></svg>
              </span><span className="font-semibold">Réduction des coûts</span><span className="text-gray-600 text-sm">Moins de papier, moins d'espace de stockage</span></li>
              <li className="flex flex-col items-center text-center gap-2"><span className="inline-flex items-center justify-center bg-cnbd-red/10 text-cnbd-red rounded-full w-14 h-14 mb-2">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>
              </span><span className="font-semibold">Mobilité</span><span className="text-gray-600 text-sm">Accès aux documents depuis n'importe où, sur tous supports</span></li>
              <li className="flex flex-col items-center text-center gap-2"><span className="inline-flex items-center justify-center bg-cnbd-red/10 text-cnbd-red rounded-full w-14 h-14 mb-2">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              </span><span className="font-semibold">Collaboration</span><span className="text-gray-600 text-sm">Travail en équipe facilité, même à distance</span></li>
            </ul>
          </div>

          {/* Fonctionnalités clés */}
          <div className="bg-gray-50 rounded-2xl shadow-lg p-8" data-aos="fade-left">
            <h2 className="text-2xl font-bold text-cnbd-red mb-3">Ce que notre GED vous apporte</h2>
            <ul className="grid md:grid-cols-2 gap-6 text-gray-800">
              <li className="flex items-center gap-4">
                <span className="inline-flex items-center justify-center bg-cnbd-red/10 text-cnbd-red rounded-full w-12 h-12">
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                </span>Numérisation et import automatique de documents
              </li>
              <li className="flex items-center gap-4">
                <span className="inline-flex items-center justify-center bg-cnbd-red/10 text-cnbd-red rounded-full w-12 h-12">
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                </span>Classement intelligent et recherche avancée
              </li>
              <li className="flex items-center gap-4">
                <span className="inline-flex items-center justify-center bg-cnbd-red/10 text-cnbd-red rounded-full w-12 h-12">
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>
                </span>Gestion des versions et historique des modifications
              </li>
              <li className="flex items-center gap-4">
                <span className="inline-flex items-center justify-center bg-cnbd-red/10 text-cnbd-red rounded-full w-12 h-12">
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                </span>Partage sécurisé et gestion des droits d'accès
              </li>
              <li className="flex items-center gap-4">
                <span className="inline-flex items-center justify-center bg-cnbd-red/10 text-cnbd-red rounded-full w-12 h-12">
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 17.8L5.8 21 7 14.1 2 9.3l7-1L12 2l3 6.3 7 1-5 4.8 1.2 6.9z"></path></svg>
                </span>Signature électronique intégrée
              </li>
              <li className="flex items-center gap-4">
                <span className="inline-flex items-center justify-center bg-cnbd-red/10 text-cnbd-red rounded-full w-12 h-12">
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                </span>Archivage légal et destruction automatique selon les règles définies
              </li>
              <li className="flex items-center gap-4">
                <span className="inline-flex items-center justify-center bg-cnbd-red/10 text-cnbd-red rounded-full w-12 h-12">
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"></path><path d="M18.4 8.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0z"></path><line x1="8.5" y1="16.5" x2="17.5" y2="16.5"></line></svg>
                </span>Tableaux de bord et statistiques d'utilisation
              </li>
            </ul>
          </div>

          {/* Digitalisation des processus métiers */}
          <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col md:flex-row gap-8 items-center" data-aos="fade-right">
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-cnbd-red mb-3">Au-delà de la gestion documentaire</h2>
              <p className="text-gray-700">La digitalisation ne s'arrête pas à la gestion des documents. Nous vous aidons à automatiser l'ensemble de vos processus métiers : gestion des factures, contrats, ressources humaines, dossiers clients, etc. Gagnez en efficacité et en traçabilité sur toutes vos opérations.</p>
            </div>
            <div className="flex-1 flex justify-center">
              <Image src="/image-defaut.jpg" alt="Digitalisation des processus métiers" width={320} height={220} className="rounded-xl shadow-lg object-cover" />
            </div>
          </div>

          {/* Accompagnement & support */}
          <div className="bg-gray-50 rounded-2xl shadow-lg p-8 flex flex-col md:flex-row gap-8 items-center" data-aos="fade-left">
            <div className="flex-1 flex justify-center">
            <Image src="/logo-cnbd.png" alt="Logo CNBD" width={600} height={300} className="object-contain bg-white rounded-xl shadow p-2" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-cnbd-red mb-3">Un partenaire à vos côtés</h2>
              <p className="text-gray-700">CNBD vous accompagne à chaque étape : audit, déploiement, formation, support technique. Notre équipe reste disponible pour assurer la réussite de votre projet de digitalisation.</p>
            </div>
          </div>

          {/* Appel à l'action */}
          <div className="bg-cnbd-red rounded-2xl shadow-xl p-8 text-white text-center flex flex-col items-center gap-6" data-aos="zoom-in">
            <h2 className="text-2xl font-bold mb-2">Prêt à digitaliser votre entreprise ?</h2>
            <p className="text-lg mb-4">Contactez-nous dès aujourd'hui pour une démonstration personnalisée ou un audit gratuit de vos besoins en gestion documentaire.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="/contact" className="px-6 py-3 bg-white text-cnbd-red font-bold rounded-lg shadow-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">Demander une devis</a>
             
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