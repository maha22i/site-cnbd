'use client';
import React, { useEffect } from 'react';
import Breadcrumbs from '../../components/navigation/Breadcrumbs';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { MapPinIcon, PhoneIcon, EnvelopeIcon, ClockIcon } from '@heroicons/react/24/outline';

export default function ContactPage() {
  useEffect(() => {
    AOS.init({ once: true, duration: 900, offset: 80 });
  }, []);

  return (
    <main className="bg-gray-50 min-h-screen relative overflow-hidden">
      {/* Texte décoratif CNBD */}
      <div 
        className="fixed inset-0 w-full h-full flex items-center justify-center z-0 overflow-hidden"
        style={{
          background: `linear-gradient(45deg, rgba(255,255,255,0) 45%, rgba(239,68,68,0.03) 50%, rgba(255,255,255,0) 55%),
                      linear-gradient(-45deg, rgba(255,255,255,0) 45%, rgba(239,68,68,0.03) 50%, rgba(255,255,255,0) 55%)`
        }}
      >
        <span className="text-[500px] font-black text-cnbd-red/[0.04] tracking-tight transform -rotate-12 whitespace-nowrap select-none">
          CNBD
        </span>
      </div>

      {/* Formes décoratives */}
      <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-cnbd-red/10 rounded-full blur-[120px] -translate-x-1/3 -translate-y-1/3 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-cnbd-red/10 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-cnbd-red/10 rounded-full blur-[120px] -translate-x-1/3 translate-y-1/3 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-cnbd-red/10 rounded-full blur-[120px] translate-x-1/3 translate-y-1/3 pointer-events-none" />
      
      {/* Contenu */}
      <div className="relative z-10">
        <div className="container mx-auto px-4 max-w-4xl pt-[100px]">
          <Breadcrumbs />
        </div>
        <section className="container mx-auto px-4 max-w-5xl flex flex-col md:flex-row gap-8 py-12">
          {/* Infos de contact à gauche */}
          <div className="flex-1 flex flex-col gap-8" data-aos="fade-right">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-cnbd-red mb-6">Nos coordonnées</h2>
              <ul className="space-y-6 text-gray-700">
                <li className="flex items-start gap-4">
                  <MapPinIcon className="w-6 h-6 text-cnbd-red flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold block mb-1">Adresse</span>
                    <span className="block">64, allée de la main ferme</span>
                    <span>93320 Les Pavillons sous Bois, FRANCE</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <PhoneIcon className="w-6 h-6 text-cnbd-red flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold block mb-1">Téléphone</span>
                    <a href="tel:+33667360280" className="text-cnbd-red hover:underline block">+33 6 67 36 02 80</a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <EnvelopeIcon className="w-6 h-6 text-cnbd-red flex-shrink-0 mt-1" />  
                  <div>
                    <span className="font-semibold block mb-1">Email</span>
                    <a href="mailto:fguerlin@cnbd.fr" className="text-cnbd-red hover:underline">fguerlin@cnbd.fr</a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <ClockIcon className="w-6 h-6 text-cnbd-red flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold block mb-1">Horaires</span>
                    <span>Lun - Ven : 9h - 18h</span>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h2 className="text-xl font-bold text-cnbd-black mb-3">Besoin d'une réponse rapide ?</h2>
              <p className="text-gray-700 mb-4">Appelez-nous ou envoyez-nous un email, notre équipe vous répond sous 24h ouvrées.</p>
              <a 
                href="tel:+33667360280" 
                className="inline-flex items-center px-6 py-3 bg-cnbd-red text-white rounded-lg font-semibold shadow-md hover:bg-red-700 transition-all duration-200 gap-2"
              >
                <PhoneIcon className="w-5 h-5" />
                <span>Appeler maintenant</span>
              </a>
            </div>
          </div>

          {/* Formulaire à droite */}
          <div className="flex-1 bg-white rounded-2xl shadow-xl p-8 md:p-10" data-aos="fade-left">
            <h1 className="text-3xl font-bold text-cnbd-black mb-3">Contactez-nous</h1>
            <p className="text-gray-600 mb-8">Une question, un projet, besoin d'un conseil ? Remplissez le formulaire, notre équipe vous répondra rapidement.</p>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="lastname" className="block text-sm font-medium text-gray-700 mb-1">Nom</label>
                  <input 
                    type="text" 
                    name="lastname" 
                    id="lastname" 
                    required 
                    className="w-full rounded-lg border-gray-200 shadow-sm focus:ring-2 focus:ring-cnbd-red focus:border-transparent p-3" 
                    placeholder="Votre nom" 
                  />
                </div>
                <div>
                  <label htmlFor="firstname" className="block text-sm font-medium text-gray-700 mb-1">Prénom</label>
                  <input 
                    type="text" 
                    name="firstname" 
                    id="firstname" 
                    required 
                    className="w-full rounded-lg border-gray-200 shadow-sm focus:ring-2 focus:ring-cnbd-red focus:border-transparent p-3" 
                    placeholder="Votre prénom" 
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    required 
                    className="w-full rounded-lg border-gray-200 shadow-sm focus:ring-2 focus:ring-cnbd-red focus:border-transparent p-3" 
                    placeholder="Votre email" 
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Téléphone</label>
                  <input 
                    type="tel" 
                    name="phone" 
                    id="phone" 
                    className="w-full rounded-lg border-gray-200 shadow-sm focus:ring-2 focus:ring-cnbd-red focus:border-transparent p-3" 
                    placeholder="Votre téléphone" 
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Sujet</label>
                <input 
                  type="text" 
                  name="subject" 
                  id="subject" 
                  required 
                  className="w-full rounded-lg border-gray-200 shadow-sm focus:ring-2 focus:ring-cnbd-red focus:border-transparent p-3" 
                  placeholder="Sujet de votre demande" 
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea 
                  name="message" 
                  id="message" 
                  rows={6} 
                  required 
                  className="w-full rounded-lg border-gray-200 shadow-sm focus:ring-2 focus:ring-cnbd-red focus:border-transparent p-3" 
                  placeholder="Votre message..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full py-4 px-8 bg-cnbd-red text-white font-semibold rounded-lg shadow-lg hover:bg-red-700 transition-all duration-200 transform hover:scale-[1.02]"
              >
                Envoyer le message
              </button>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
} 