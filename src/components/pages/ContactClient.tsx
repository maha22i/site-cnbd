'use client';

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Breadcrumbs from '../navigation/Breadcrumbs';
import { MapPinIcon, PhoneIcon, EnvelopeIcon, ClockIcon } from '@heroicons/react/24/outline';
import { useTranslations } from 'next-intl';

export default function ContactClient() {
  const t = useTranslations();
  
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
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8 hover:shadow-2xl transition-all duration-300">
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-8 bg-gradient-to-b from-cnbd-red to-red-600 rounded-full"></div>
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-cnbd-red to-red-600 bg-clip-text text-transparent">{t('contact.info.title')}</h2>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">{t('contact.info.subtitle', { default: 'Nous sommes à votre disposition pour répondre à toutes vos questions' })}</p>
              </div>
              
              <div className="space-y-6 mb-8">
                {/* Adresse */}
                <div 
                  className="group flex items-center gap-4 p-3 rounded-xl hover:bg-cnbd-red/5 transition-all duration-300 cursor-pointer"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-cnbd-red/20 rounded-full blur-md group-hover:blur-lg transition-all duration-300"></div>
                    <span className="relative inline-flex items-center justify-center bg-gradient-to-br from-cnbd-red to-red-600 text-white rounded-full w-12 h-12 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <MapPinIcon className="w-5 h-5" />
                    </span>
                  </div>
                  <div className="flex-1">
                    <span className="text-gray-800 font-semibold text-base group-hover:text-cnbd-red transition-colors duration-300 block mb-1">
                      {t('contact.info.address.label')}
                    </span>
                    <div className="text-gray-600 leading-relaxed text-sm">
                      <span className="block">64, allée de la main ferme</span>
                      <span className="block">93320 Les Pavillons sous Bois, <span className="font-medium text-cnbd-red">FRANCE</span></span>
                    </div>
                  </div>
                  
                </div>

                {/* Téléphone */}
                <div 
                  className="group flex items-center gap-4 p-3 rounded-xl hover:bg-cnbd-red/5 transition-all duration-300"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-cnbd-red/20 rounded-full blur-md group-hover:blur-lg transition-all duration-300"></div>
                    <span className="relative inline-flex items-center justify-center bg-gradient-to-br from-cnbd-red to-red-600 text-white rounded-full w-12 h-12 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <PhoneIcon className="w-5 h-5" />
                    </span>
                  </div>
                  <div className="flex-1">
                    <span className="text-gray-800 font-semibold text-base group-hover:text-cnbd-red transition-colors duration-300 block mb-1">
                      {t('contact.info.phone.label')}
                    </span>
                    <a 
                      href="tel:+33667360280" 
                      className="text-cnbd-red hover:text-red-700 font-medium text-base transition-colors duration-200"
                    >
                      +33 6 67 36 02 80
                    </a>
                  </div>
                  
                </div>

                {/* Email */}
                <div 
                  className="group flex items-center gap-4 p-3 rounded-xl hover:bg-cnbd-red/5 transition-all duration-300"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-cnbd-red/20 rounded-full blur-md group-hover:blur-lg transition-all duration-300"></div>
                    <span className="relative inline-flex items-center justify-center bg-gradient-to-br from-cnbd-red to-red-600 text-white rounded-full w-12 h-12 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <EnvelopeIcon className="w-5 h-5" />
                    </span>
                  </div>
                  <div className="flex-1">
                    <span className="text-gray-800 font-semibold text-base group-hover:text-cnbd-red transition-colors duration-300 block mb-1">
                      {t('contact.info.email.label')}
                    </span>
                    <a 
                      href="mailto:fguerlin@cnbd.fr" 
                      className="text-cnbd-red hover:text-red-700 font-medium text-base transition-colors duration-200"
                    >
                      fguerlin@cnbd.fr
                    </a>
                  </div>
                  
                </div>

                {/* Horaires */}
                <div 
                  className="group flex items-center gap-4 p-3 rounded-xl hover:bg-cnbd-red/5 transition-all duration-300"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-cnbd-red/20 rounded-full blur-md group-hover:blur-lg transition-all duration-300"></div>
                    <span className="relative inline-flex items-center justify-center bg-gradient-to-br from-cnbd-red to-red-600 text-white rounded-full w-12 h-12 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <ClockIcon className="w-5 h-5" />
                    </span>
                  </div>
                  <div className="flex-1">
                    <span className="text-gray-800 font-semibold text-base group-hover:text-cnbd-red transition-colors duration-300 block mb-1">
                      {t('contact.info.hours.label')}
                    </span>
                    <span className="text-gray-600 font-medium text-base">{t('contact.info.hours.value')}</span>
                  </div>
                 
                </div>
              </div>

              {/* Section d'appel rapide intégrée */}
              <div 
                className="relative bg-gradient-to-br from-gray-50 to-gray-100/80 rounded-2xl p-6 border border-gray-200/50 hover:shadow-lg transition-all duration-300 overflow-hidden"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-cnbd-red/10 rounded-full blur-2xl -translate-y-8 translate-x-8"></div>
                <div className="relative">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-2 h-8 bg-gradient-to-b from-cnbd-red to-red-600 rounded-full"></div>
                    <h3 className="text-cnbd-red font-bold text-xl">{t('contact.quick.title')}</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-6">{t('contact.quick.description')}</p>
                  
                  <a 
                    href="tel:+33667360280" 
                    className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cnbd-red to-red-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 gap-3 w-full"
                  >
                    <PhoneIcon className="w-5 h-5 group-hover:animate-pulse" />
                    <span>{t('contact.quick.cta')}</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Formulaire à droite */}
          <div className="flex-1 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8 md:p-10 hover:shadow-2xl transition-all duration-300" data-aos="fade-left">
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-8 bg-gradient-to-b from-cnbd-red to-red-600 rounded-full"></div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-cnbd-red to-red-600 bg-clip-text text-transparent">{t('contact.form.title')}</h1>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">{t('contact.form.description')}</p>
            </div>
            
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group" data-aos="fade-up" data-aos-delay="100">
                  <label htmlFor="lastname" className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                    <svg className="w-4 h-4 text-cnbd-red" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    {t('contact.form.lastname')}
                  </label>
                  <div className="relative">
                    <input 
                      type="text" 
                      name="lastname" 
                      id="lastname" 
                      required 
                      className="w-full rounded-xl border-2 border-gray-200 bg-gray-50/50 shadow-sm focus:ring-2 focus:ring-cnbd-red/20 focus:border-cnbd-red focus:bg-white transition-all duration-300 p-4 text-gray-800 placeholder-gray-400 group-hover:border-gray-300" 
                      placeholder={t('contact.form.lastname_placeholder')} 
                    />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cnbd-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                </div>
                <div className="group" data-aos="fade-up" data-aos-delay="150">
                  <label htmlFor="firstname" className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                    <svg className="w-4 h-4 text-cnbd-red" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    {t('contact.form.firstname')}
                  </label>
                  <div className="relative">
                    <input 
                      type="text" 
                      name="firstname" 
                      id="firstname" 
                      required 
                      className="w-full rounded-xl border-2 border-gray-200 bg-gray-50/50 shadow-sm focus:ring-2 focus:ring-cnbd-red/20 focus:border-cnbd-red focus:bg-white transition-all duration-300 p-4 text-gray-800 placeholder-gray-400 group-hover:border-gray-300" 
                      placeholder={t('contact.form.firstname_placeholder')} 
                    />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cnbd-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group" data-aos="fade-up" data-aos-delay="200">
                  <label htmlFor="email" className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                    <svg className="w-4 h-4 text-cnbd-red" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                    </svg>
                    {t('contact.form.email')}
                  </label>
                  <div className="relative">
                    <input 
                      type="email" 
                      name="email" 
                      id="email" 
                      required 
                      className="w-full rounded-xl border-2 border-gray-200 bg-gray-50/50 shadow-sm focus:ring-2 focus:ring-cnbd-red/20 focus:border-cnbd-red focus:bg-white transition-all duration-300 p-4 text-gray-800 placeholder-gray-400 group-hover:border-gray-300" 
                      placeholder={t('contact.form.email_placeholder')} 
                    />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cnbd-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                </div>
                <div className="group" data-aos="fade-up" data-aos-delay="250">
                  <label htmlFor="phone" className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                    <svg className="w-4 h-4 text-cnbd-red" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                    {t('contact.form.phone')}
                  </label>
                  <div className="relative">
                    <input 
                      type="tel" 
                      name="phone" 
                      id="phone" 
                      className="w-full rounded-xl border-2 border-gray-200 bg-gray-50/50 shadow-sm focus:ring-2 focus:ring-cnbd-red/20 focus:border-cnbd-red focus:bg-white transition-all duration-300 p-4 text-gray-800 placeholder-gray-400 group-hover:border-gray-300" 
                      placeholder={t('contact.form.phone_placeholder')} 
                    />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cnbd-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                </div>
              </div>

              <div className="group" data-aos="fade-up" data-aos-delay="300">
                <label htmlFor="subject" className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                  <svg className="w-4 h-4 text-cnbd-red" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
                  </svg>
                  {t('contact.form.subject')}
                </label>
                <div className="relative">
                  <input 
                    type="text" 
                    name="subject" 
                    id="subject" 
                    required 
                    className="w-full rounded-xl border-2 border-gray-200 bg-gray-50/50 shadow-sm focus:ring-2 focus:ring-cnbd-red/20 focus:border-cnbd-red focus:bg-white transition-all duration-300 p-4 text-gray-800 placeholder-gray-400 group-hover:border-gray-300" 
                    placeholder={t('contact.form.subject_placeholder')} 
                  />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cnbd-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              </div>

              <div className="group" data-aos="fade-up" data-aos-delay="350">
                <label htmlFor="message" className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                  <svg className="w-4 h-4 text-cnbd-red" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                  </svg>
                  {t('contact.form.message')}
                </label>
                <div className="relative">
                  <textarea 
                    name="message" 
                    id="message" 
                    rows={6} 
                    required 
                    className="w-full rounded-xl border-2 border-gray-200 bg-gray-50/50 shadow-sm focus:ring-2 focus:ring-cnbd-red/20 focus:border-cnbd-red focus:bg-white transition-all duration-300 p-4 text-gray-800 placeholder-gray-400 resize-none group-hover:border-gray-300" 
                    placeholder={t('contact.form.message_placeholder')}
                  ></textarea>
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cnbd-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              </div>

              <div className="pt-4" data-aos="fade-up" data-aos-delay="400">
                <button 
                  type="submit" 
                  className="group relative w-full py-4 px-8 bg-gradient-to-r from-cnbd-red to-red-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-cnbd-red opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative flex items-center justify-center gap-2">
                    <span>{t('contact.form.submit')}</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                    </svg>
                  </div>
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
} 