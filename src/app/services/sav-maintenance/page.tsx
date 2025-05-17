"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Breadcrumbs from "@/components/navigation/Breadcrumbs";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

const engagements = [
  {
    title: "Maintenance préventive",
    description: "Nous planifions des interventions régulières pour anticiper les pannes, optimiser les performances de vos matériels et prolonger leur durée de vie. Nos techniciens effectuent des contrôles, des mises à jour et des vérifications de sécurité sur l'ensemble de votre parc.",
    icon: (
      <svg className="w-8 h-8 text-cnbd-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
      </svg>
    ),
  },
  {
    title: "Maintenance curative",
    description: "En cas de dysfonctionnement, notre équipe intervient rapidement pour diagnostiquer et résoudre les incidents, sur site ou à distance. Nous nous engageons sur des délais d'intervention courts pour limiter l'impact sur votre activité.",
    icon: (
      <svg className="w-8 h-8 text-cnbd-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
      </svg>
    ),
  },
  {
    title: "Support technique réactif",
    description: "Notre assistance est disponible par téléphone, email ou via un portail client dédié. Nous assurons un suivi personnalisé de chaque demande, avec un interlocuteur unique pour plus de simplicité.",
    icon: (
      <svg className="w-8 h-8 text-cnbd-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
      </svg>
    ),
  },
  {
    title: "Gestion des pièces détachées",
    description: "Nous disposons d'un stock de pièces détachées pour garantir des réparations rapides. Si nécessaire, nous proposons le prêt ou le remplacement temporaire de matériel pour éviter toute interruption de service.",
    icon: (
      <svg className="w-8 h-8 text-cnbd-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 7h-7m7 10h-7m7-5h-7"></path>
        <path d="M3 7h2m-2 5h2m-2 5h2"></path>
      </svg>
    ),
  },
  {
    title: "Contrats sur-mesure",
    description: "Nous adaptons nos offres à vos besoins : maintenance ponctuelle, contrat annuel, ou pack tout inclus. Vous choisissez le niveau de service qui correspond à votre organisation et à vos exigences.",
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
];

const pourquoiNous = [
  {
    title: "Sécurité et tranquillité d'esprit",
    description: "Vous bénéficiez d'un suivi régulier et d'une prise en charge rapide en cas de problème.",
    icon: (
      <svg className="w-8 h-8 text-cnbd-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
      </svg>
    ),
  },
  {
    title: "Optimisation des investissements",
    description: "Un matériel bien entretenu dure plus longtemps et reste performant.",
    icon: (
      <svg className="w-8 h-8 text-cnbd-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
      </svg>
    ),
  },
  {
    title: "Simplicité",
    description: "Un seul interlocuteur pour tous vos besoins de maintenance et de support technique.",
    icon: (
      <svg className="w-8 h-8 text-cnbd-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    ),
  },
];

export default function SAVMaintenancePage() {
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
                  <span className="block">Service Après-Vente</span>
                  <span className="text-cnbd-red">& Maintenance</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-lg leading-relaxed">
                  Un accompagnement technique complet pour la sérénité de vos équipements. Nous garantissons la continuité de votre activité et la longévité de vos équipements.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="/contact" className="inline-flex items-center bg-cnbd-red text-white px-8 py-4 rounded-full font-bold hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:translate-y-[-2px] group">
                    Demander un devis
                    <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </a>
                  <a href="#engagements" className="inline-flex items-center bg-white text-cnbd-black border-2 border-gray-200 px-8 py-4 rounded-full font-bold hover:border-cnbd-red/30 transition-all duration-300 shadow-lg hover:shadow-xl hover:translate-y-[-2px]">
                    Découvrir nos engagements
                  </a>
                </div>
              </div>
              
              <div className="relative" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="300">
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-cnbd-red/5 rounded-full blur-2xl -z-10"></div>
                <div className="relative overflow-hidden rounded-[2rem] shadow-2xl border-8 border-white">
                  <Image 
                    src="/image-defaut.jpg" 
                    alt="Service Après-Vente et Maintenance CNBD" 
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

        {/* Nos engagements section */}
        <section id="engagements" className="container mx-auto px-4 max-w-5xl py-16">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-cnbd-red mb-4">Nos engagements</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Des services complets pour garantir la performance de vos équipements
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {engagements.map((engagement, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="bg-cnbd-red/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  {engagement.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{engagement.title}</h3>
                <p className="text-gray-700">{engagement.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Une équipe d'experts section */}
        <section className="container mx-auto px-4 max-w-5xl py-16 bg-white rounded-3xl shadow-lg my-16">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-cnbd-red mb-4">Une équipe d'experts à votre service</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Des techniciens qualifiés pour tous vos besoins
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div data-aos="fade-right">
              <p className="text-lg text-gray-700 mb-6">
                Nos techniciens sont formés en continu aux dernières technologies et interviennent sur toute la France. Leur expertise couvre l'ensemble de vos solutions : informatique, serveurs, réseaux, téléphonie, impression, affichage dynamique, GED, etc.
              </p>
              <p className="text-lg text-gray-700">
                Nous privilégions la proximité et la réactivité pour vous offrir un service fiable et performant.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4" data-aos="fade-left">
              {pourquoiNous.map((item, index) => (
                <div key={index} className="bg-gray-50 rounded-2xl p-6">
                  <div className="bg-cnbd-red/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-700">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-cnbd-black text-white rounded-3xl shadow-xl mb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6" data-aos="fade-up">Besoin d'un service de maintenance ?</h2>
              <p className="text-lg mb-8" data-aos="fade-up" data-aos-delay="100">
                Contactez-nous pour mettre en place un contrat de maintenance adapté à votre parc informatique et bureautique. Nos conseillers sont à votre écoute pour vous proposer une solution personnalisée.
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