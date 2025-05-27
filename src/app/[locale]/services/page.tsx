"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/navigation/Breadcrumbs";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ServicesPage() {
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
        <section className="relative min-h-[80vh] flex items-center mb-16">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-gray-100 to-white"></div>
            <div className="absolute right-0 top-0 w-3/4 h-full bg-cnbd-red/5 rounded-bl-[200px] transform -rotate-3"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-cnbd-black leading-tight mb-6" data-aos="fade-up">
                <span className="block">Nos</span>
                <span className="text-cnbd-red">Services</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed" data-aos="fade-up" data-aos-delay="100">
                Des services complets pour accompagner votre entreprise dans sa transformation numérique et assurer la protection de vos systèmes d'information.
              </p>
            </div>
          </div>
        </section>

        {/* Services Cards Section */}
        <section className="container mx-auto px-4 max-w-6xl py-16">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1" data-aos="fade-up" data-aos-delay="0">
              <div className="h-48 relative overflow-hidden">
                <Image 
                  src="/image-defaut.jpg" 
                  alt="Audits & Conseils" 
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <h3 className="absolute bottom-4 left-6 text-white font-bold text-2xl">Audits & Conseils</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-6">
                  Nos experts vous accompagnent dans l'évaluation de vos systèmes et la mise en conformité avec les réglementations en vigueur, notamment le RGPD. Nous réalisons des audits complets et vous proposons des solutions adaptées à vos besoins.
                </p>
                <Link href="/services/audits-conseils" className="inline-flex items-center bg-cnbd-red text-white px-6 py-3 rounded-lg font-medium hover:bg-red-700 transition-all duration-300 shadow-md hover:shadow-lg">
                  Découvrir
                  <svg className="ml-2 w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1" data-aos="fade-up" data-aos-delay="100">
              <div className="h-48 relative overflow-hidden">
                <Image 
                  src="/image-defaut.jpg" 
                  alt="Financement" 
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <h3 className="absolute bottom-4 left-6 text-white font-bold text-2xl">Financement</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-6">
                  CNBD vous propose des solutions de financement adaptées à vos projets informatiques. Que ce soit par la location évolutive, le crédit-bail ou d'autres formules, nous vous aidons à optimiser vos investissements IT.
                </p>
                <Link href="/services/financement" className="inline-flex items-center bg-cnbd-red text-white px-6 py-3 rounded-lg font-medium hover:bg-red-700 transition-all duration-300 shadow-md hover:shadow-lg">
                  Découvrir
                  <svg className="ml-2 w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1" data-aos="fade-up" data-aos-delay="200">
              <div className="h-48 relative overflow-hidden">
                <Image 
                  src="/image-defaut.jpg" 
                  alt="Services après vente & maintenance" 
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <h3 className="absolute bottom-4 left-6 text-white font-bold text-2xl">SAV & Maintenance</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-6">
                  Notre équipe de techniciens qualifiés assure le support et la maintenance de vos équipements informatiques. Nous garantissons un service réactif et professionnel pour minimiser les temps d'indisponibilité.
                </p>
                <Link href="/services/sav-maintenance" className="inline-flex items-center bg-cnbd-red text-white px-6 py-3 rounded-lg font-medium hover:bg-red-700 transition-all duration-300 shadow-md hover:shadow-lg">
                  Découvrir
                  <svg className="ml-2 w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Pourquoi choisir nos services */}
        <section className="container mx-auto px-4 max-w-5xl py-16 bg-white rounded-3xl shadow-lg my-16">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-cnbd-red mb-4">Pourquoi choisir nos services</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Des solutions personnalisées et adaptées à vos besoins
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4" data-aos="fade-right">
              <div className="bg-cnbd-red/10 p-3 rounded-full">
                <svg className="w-6 h-6 text-cnbd-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Expertise professionnelle</h3>
                <p className="text-gray-700">Notre équipe est composée d'experts certifiés dans leurs domaines respectifs, garantissant un service de haute qualité.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4" data-aos="fade-left">
              <div className="bg-cnbd-red/10 p-3 rounded-full">
                <svg className="w-6 h-6 text-cnbd-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Sécurité renforcée</h3>
                <p className="text-gray-700">Nous mettons en place des mesures de sécurité robustes pour protéger vos données et vos systèmes contre les menaces.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4" data-aos="fade-right">
              <div className="bg-cnbd-red/10 p-3 rounded-full">
                <svg className="w-6 h-6 text-cnbd-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Solutions sur mesure</h3>
                <p className="text-gray-700">Chaque entreprise est unique. Nous adaptons nos services à vos besoins spécifiques pour maximiser votre retour sur investissement.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4" data-aos="fade-left">
              <div className="bg-cnbd-red/10 p-3 rounded-full">
                <svg className="w-6 h-6 text-cnbd-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                  <line x1="9" y1="9" x2="9.01" y2="9"></line>
                  <line x1="15" y1="9" x2="15.01" y2="9"></line>
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Satisfaction client</h3>
                <p className="text-gray-700">Votre satisfaction est notre priorité. Nous nous engageons à fournir un service de qualité supérieure et un support réactif.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-cnbd-black text-white rounded-3xl shadow-xl mb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6" data-aos="fade-up">Besoin d'un service particulier ?</h2>
              <p className="text-lg mb-8" data-aos="fade-up" data-aos-delay="100">
                Contactez-nous dès aujourd'hui pour discuter de vos besoins spécifiques et découvrir comment nous pouvons vous aider à atteindre vos objectifs.
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