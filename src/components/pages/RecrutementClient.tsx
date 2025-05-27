'use client';

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Breadcrumbs from '../navigation/Breadcrumbs';
import { useTranslations } from 'next-intl';

export default function RecrutementClient() {
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
          {/* Texte à gauche */}
          <div className="flex-1 flex flex-col gap-8" data-aos="fade-right">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h1 className="text-3xl font-bold text-cnbd-black mb-4">{t('recruitment.title')}</h1>
              <p className="text-gray-700 mb-6">{t('recruitment.intro')}</p>
              
              <ul className="space-y-4 mb-6">
                <li className="flex items-center gap-4">
                  <span className="inline-flex items-center justify-center bg-cnbd-red/10 text-cnbd-red rounded-full w-10 h-10">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  </span>
                  <span className="text-gray-800 font-medium">{t('recruitment.benefits.team')}</span>
                </li>
                <li className="flex items-center gap-4">
                  <span className="inline-flex items-center justify-center bg-cnbd-red/10 text-cnbd-red rounded-full w-10 h-10">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" /></svg>
                  </span>
                  <span className="text-gray-800 font-medium">{t('recruitment.benefits.projects')}</span>
                </li>
                <li className="flex items-center gap-4">
                  <span className="inline-flex items-center justify-center bg-cnbd-red/10 text-cnbd-red rounded-full w-10 h-10">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2a4 4 0 018 0v2M12 7a4 4 0 100 8 4 4 0 000-8z" /></svg>
                  </span>
                  <span className="text-gray-800 font-medium">{t('recruitment.benefits.growth')}</span>
                </li>
              </ul>

              <div className="bg-gray-50 rounded-xl p-6">
                <p className="text-cnbd-red font-bold text-lg mb-2">{t('recruitment.why.title')}</p>
                <p className="text-gray-700">{t('recruitment.why.content')}</p>
              </div>
            </div>
          </div>

          {/* Formulaire à droite */}
          <div className="flex-1 bg-white rounded-2xl shadow-xl p-8" data-aos="fade-left">
            <h2 className="text-2xl font-bold text-cnbd-red mb-3">{t('recruitment.form.title')}</h2>
            <p className="text-gray-600 mb-6">{t('recruitment.form.subtitle')}</p>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="lastname" className="block text-sm font-medium text-gray-700 mb-1">{t('recruitment.form.lastname')}</label>
                  <input 
                    type="text" 
                    name="lastname" 
                    id="lastname" 
                    required 
                    className="w-full rounded-lg border-gray-200 shadow-sm focus:ring-2 focus:ring-cnbd-red focus:border-transparent p-3" 
                    placeholder={t('recruitment.form.lastname_placeholder')} 
                  />
                </div>
                <div>
                  <label htmlFor="firstname" className="block text-sm font-medium text-gray-700 mb-1">{t('recruitment.form.firstname')}</label>
                  <input 
                    type="text" 
                    name="firstname" 
                    id="firstname" 
                    required 
                    className="w-full rounded-lg border-gray-200 shadow-sm focus:ring-2 focus:ring-cnbd-red focus:border-transparent p-3" 
                    placeholder={t('recruitment.form.firstname_placeholder')} 
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">{t('recruitment.form.email')}</label>
                  <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    required 
                    className="w-full rounded-lg border-gray-200 shadow-sm focus:ring-2 focus:ring-cnbd-red focus:border-transparent p-3" 
                    placeholder={t('recruitment.form.email_placeholder')} 
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">{t('recruitment.form.phone')}</label>
                  <input 
                    type="tel" 
                    name="phone" 
                    id="phone" 
                    required 
                    className="w-full rounded-lg border-gray-200 shadow-sm focus:ring-2 focus:ring-cnbd-red focus:border-transparent p-3" 
                    placeholder={t('recruitment.form.phone_placeholder')} 
                  />
                </div>
              </div>

              <div>
                <label htmlFor="job" className="block text-sm font-medium text-gray-700 mb-1">{t('recruitment.form.job')}</label>
                <input 
                  type="text" 
                  name="job" 
                  id="job" 
                  required 
                  className="w-full rounded-lg border-gray-200 shadow-sm focus:ring-2 focus:ring-cnbd-red focus:border-transparent p-3" 
                  placeholder={t('recruitment.form.job_placeholder')} 
                />
              </div>

              <div>
                <label htmlFor="motivation" className="block text-sm font-medium text-gray-700 mb-1">{t('recruitment.form.motivation')}</label>
                <textarea 
                  name="motivation" 
                  id="motivation" 
                  rows={5} 
                  required 
                  className="w-full rounded-lg border-gray-200 shadow-sm focus:ring-2 focus:ring-cnbd-red focus:border-transparent p-3" 
                  placeholder={t('recruitment.form.motivation_placeholder')}
                ></textarea>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="cv" className="block text-sm font-medium text-gray-700 mb-1">{t('recruitment.form.cv')}</label>
                  <input 
                    type="file" 
                    name="cv" 
                    id="cv" 
                    accept=".pdf" 
                    required 
                    className="w-full text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-cnbd-red/90 file:text-white hover:file:bg-cnbd-red transition-all duration-300" 
                  />
                </div>
                <div>
                  <label htmlFor="cover" className="block text-sm font-medium text-gray-700 mb-1">{t('recruitment.form.cover')}</label>
                  <input 
                    type="file" 
                    name="cover" 
                    id="cover" 
                    accept=".pdf" 
                    className="w-full text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-cnbd-red/90 file:text-white hover:file:bg-cnbd-red transition-all duration-300" 
                  />
                </div>
              </div>

              <button 
                type="submit" 
                className="w-full py-4 px-8 bg-cnbd-red text-white font-semibold rounded-lg shadow-lg hover:bg-red-700 transition-all duration-200 transform hover:scale-[1.02]"
              >
                {t('recruitment.form.submit')}
              </button>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
} 