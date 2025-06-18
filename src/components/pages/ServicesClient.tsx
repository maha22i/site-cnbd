"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { Link } from '../../i18n/navigation';
import Breadcrumbs from "@/components/navigation/Breadcrumbs";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ServicesClient() {
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
                  Nos experts vous accompagnent dans l'évaluation de vos systèmes et la mise en conformité avec les réglementations en vigueur, notamment le RGPD.
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
                  CNBD vous propose des solutions de financement adaptées à vos projets informatiques pour optimiser vos investissements IT.
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
                  Notre équipe de techniciens qualifiés assure le support et la maintenance de vos équipements informatiques.
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

        {/* Contact CTA */}
        <section className="py-16 bg-cnbd-black text-white rounded-3xl shadow-xl mb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6" data-aos="fade-up">Besoin d'un service particulier ?</h2>
              <p className="text-lg mb-8" data-aos="fade-up" data-aos-delay="100">
                Contactez-nous dès aujourd'hui pour discuter de vos besoins spécifiques.
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