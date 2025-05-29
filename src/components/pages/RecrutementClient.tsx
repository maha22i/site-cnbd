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
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8 hover:shadow-2xl transition-all duration-300">
              <div className="mb-6">
                <h1 className="text-4xl font-bold bg-gradient-to-r from-cnbd-black to-gray-700 bg-clip-text text-transparent mb-4">
                  {t('recruitment.title')}
                </h1>
                <p className="text-gray-700 text-lg leading-relaxed">{t('recruitment.intro')}</p>
              </div>
              
              <div className="space-y-6 mb-8">
                <div 
                  className="group flex items-center gap-5 p-4 rounded-xl hover:bg-cnbd-red/5 transition-all duration-300 cursor-pointer"
                  data-aos="fade-up"
                  data-aos-delay="100"
                  role="listitem"
                  aria-label={t('recruitment.benefits.team')}
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-cnbd-red/20 rounded-full blur-md group-hover:blur-lg transition-all duration-300"></div>
                    <span className="relative inline-flex items-center justify-center bg-gradient-to-br from-cnbd-red to-red-600 text-white rounded-full w-14 h-14 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </span>
                  </div>
                  <div className="flex-1">
                    <span className="text-gray-800 font-semibold text-lg group-hover:text-cnbd-red transition-colors duration-300">
                      {t('recruitment.benefits.team')}
                    </span>
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-5 h-5 text-cnbd-red" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>

                <div 
                  className="group flex items-center gap-5 p-4 rounded-xl hover:bg-cnbd-red/5 transition-all duration-300 cursor-pointer"
                  data-aos="fade-up"
                  data-aos-delay="200"
                  role="listitem"
                  aria-label={t('recruitment.benefits.projects')}
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-cnbd-red/20 rounded-full blur-md group-hover:blur-lg transition-all duration-300"></div>
                    <span className="relative inline-flex items-center justify-center bg-gradient-to-br from-cnbd-red to-red-600 text-white rounded-full w-14 h-14 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                      </svg>
                    </span>
                  </div>
                  <div className="flex-1">
                    <span className="text-gray-800 font-semibold text-lg group-hover:text-cnbd-red transition-colors duration-300">
                      {t('recruitment.benefits.projects')}
                    </span>
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-5 h-5 text-cnbd-red" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>

                <div 
                  className="group flex items-center gap-5 p-4 rounded-xl hover:bg-cnbd-red/5 transition-all duration-300 cursor-pointer"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  role="listitem"
                  aria-label={t('recruitment.benefits.growth')}
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-cnbd-red/20 rounded-full blur-md group-hover:blur-lg transition-all duration-300"></div>
                    <span className="relative inline-flex items-center justify-center bg-gradient-to-br from-cnbd-red to-red-600 text-white rounded-full w-14 h-14 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 010 .639C13.536 17.072 13.52 18 13.52 18L13.52 18.009c0 .621.504 1.125 1.125 1.125h7.125c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H16.5L9 7.875l-4.306 4.307A11.95 11.95 0 014.5 12c0 .621-.504 1.125-1.125 1.125H2.25c-.621 0-1.125.504-1.125 1.125v3c0 .621.504 1.125 1.125 1.125z" />
                      </svg>
                    </span>
                  </div>
                  <div className="flex-1">
                    <span className="text-gray-800 font-semibold text-lg group-hover:text-cnbd-red transition-colors duration-300">
                      {t('recruitment.benefits.growth')}
                    </span>
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-5 h-5 text-cnbd-red" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>

              <div 
                className="relative bg-gradient-to-br from-gray-50 to-gray-100/80 rounded-2xl p-8 border border-gray-200/50 hover:shadow-lg transition-all duration-300 overflow-hidden"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-cnbd-red/10 rounded-full blur-2xl -translate-y-8 translate-x-8"></div>
                <div className="relative">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-2 h-8 bg-gradient-to-b from-cnbd-red to-red-600 rounded-full"></div>
                    <h3 className="text-cnbd-red font-bold text-xl">{t('recruitment.why.title')}</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-lg">{t('recruitment.why.content')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Formulaire à droite */}
          <div className="flex-1 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8 hover:shadow-2xl transition-all duration-300" data-aos="fade-left">
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-8 bg-gradient-to-b from-cnbd-red to-red-600 rounded-full"></div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-cnbd-red to-red-600 bg-clip-text text-transparent">{t('recruitment.form.title')}</h2>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">{t('recruitment.form.subtitle')}</p>
            </div>
            
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group" data-aos="fade-up" data-aos-delay="100">
                  <label htmlFor="lastname" className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                    <svg className="w-4 h-4 text-cnbd-red" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    {t('recruitment.form.lastname')}
                  </label>
                  <div className="relative">
                    <input 
                      type="text" 
                      name="lastname" 
                      id="lastname" 
                      required 
                      className="w-full rounded-xl border-2 border-gray-200 bg-gray-50/50 shadow-sm focus:ring-2 focus:ring-cnbd-red/20 focus:border-cnbd-red focus:bg-white transition-all duration-300 p-4 text-gray-800 placeholder-gray-400 group-hover:border-gray-300" 
                      placeholder={t('recruitment.form.lastname_placeholder')} 
                    />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cnbd-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                </div>
                
                <div className="group" data-aos="fade-up" data-aos-delay="150">
                  <label htmlFor="firstname" className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                    <svg className="w-4 h-4 text-cnbd-red" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    {t('recruitment.form.firstname')}
                  </label>
                  <div className="relative">
                    <input 
                      type="text" 
                      name="firstname" 
                      id="firstname" 
                      required 
                      className="w-full rounded-xl border-2 border-gray-200 bg-gray-50/50 shadow-sm focus:ring-2 focus:ring-cnbd-red/20 focus:border-cnbd-red focus:bg-white transition-all duration-300 p-4 text-gray-800 placeholder-gray-400 group-hover:border-gray-300" 
                      placeholder={t('recruitment.form.firstname_placeholder')} 
                    />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cnbd-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group" data-aos="fade-up" data-aos-delay="200">
                  <label htmlFor="email" className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                    <svg className="w-4 h-4 text-cnbd-red" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                    </svg>
                    {t('recruitment.form.email')}
                  </label>
                  <div className="relative">
                    <input 
                      type="email" 
                      name="email" 
                      id="email" 
                      required 
                      className="w-full rounded-xl border-2 border-gray-200 bg-gray-50/50 shadow-sm focus:ring-2 focus:ring-cnbd-red/20 focus:border-cnbd-red focus:bg-white transition-all duration-300 p-4 text-gray-800 placeholder-gray-400 group-hover:border-gray-300" 
                      placeholder={t('recruitment.form.email_placeholder')} 
                    />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cnbd-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                </div>
                
                <div className="group" data-aos="fade-up" data-aos-delay="250">
                  <label htmlFor="phone" className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                    <svg className="w-4 h-4 text-cnbd-red" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                    {t('recruitment.form.phone')}
                  </label>
                  <div className="relative">
                    <input 
                      type="tel" 
                      name="phone" 
                      id="phone" 
                      required 
                      className="w-full rounded-xl border-2 border-gray-200 bg-gray-50/50 shadow-sm focus:ring-2 focus:ring-cnbd-red/20 focus:border-cnbd-red focus:bg-white transition-all duration-300 p-4 text-gray-800 placeholder-gray-400 group-hover:border-gray-300" 
                      placeholder={t('recruitment.form.phone_placeholder')} 
                    />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cnbd-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                </div>
              </div>

              <div className="group" data-aos="fade-up" data-aos-delay="300">
                <label htmlFor="job" className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                  <svg className="w-4 h-4 text-cnbd-red" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                  </svg>
                  {t('recruitment.form.job')}
                </label>
                <div className="relative">
                  <input 
                    type="text" 
                    name="job" 
                    id="job" 
                    required 
                    className="w-full rounded-xl border-2 border-gray-200 bg-gray-50/50 shadow-sm focus:ring-2 focus:ring-cnbd-red/20 focus:border-cnbd-red focus:bg-white transition-all duration-300 p-4 text-gray-800 placeholder-gray-400 group-hover:border-gray-300" 
                    placeholder={t('recruitment.form.job_placeholder')} 
                  />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cnbd-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              </div>

              <div className="group" data-aos="fade-up" data-aos-delay="350">
                <label htmlFor="motivation" className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                  <svg className="w-4 h-4 text-cnbd-red" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                  </svg>
                  {t('recruitment.form.motivation')}
                </label>
                <div className="relative">
                  <textarea 
                    name="motivation" 
                    id="motivation" 
                    rows={5} 
                    required 
                    className="w-full rounded-xl border-2 border-gray-200 bg-gray-50/50 shadow-sm focus:ring-2 focus:ring-cnbd-red/20 focus:border-cnbd-red focus:bg-white transition-all duration-300 p-4 text-gray-800 placeholder-gray-400 resize-none group-hover:border-gray-300" 
                    placeholder={t('recruitment.form.motivation_placeholder')}
                  ></textarea>
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cnbd-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group" data-aos="fade-up" data-aos-delay="400">
                  <label htmlFor="cv" className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                    <svg className="w-4 h-4 text-cnbd-red" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m6.75 12H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                    </svg>
                    {t('recruitment.form.cv')} <span className="text-cnbd-red">*</span>
                  </label>
                  <div className="relative bg-gray-50 border-2 border-dashed border-gray-300 rounded-xl hover:border-cnbd-red hover:bg-cnbd-red/5 transition-all duration-300 group-hover:border-cnbd-red h-32">
                    <input 
                      type="file" 
                      name="cv" 
                      id="cv" 
                      accept=".pdf,.doc,.docx" 
                      required 
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" 
                    />
                    <div className="flex flex-col items-center justify-center h-full px-4 text-center">
                      <svg className="w-6 h-6 text-gray-400 group-hover:text-cnbd-red transition-colors duration-300 mb-2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                      <p className="text-sm text-gray-600 group-hover:text-cnbd-red transition-colors duration-300 font-medium">Cliquer pour télécharger</p>
                      <p className="text-xs text-gray-400 mt-1">PDF, DOC, DOCX (max 5MB)</p>
                    </div>
                  </div>
                </div>
                
                <div className="group" data-aos="fade-up" data-aos-delay="450">
                  <label htmlFor="cover" className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                    <svg className="w-4 h-4 text-cnbd-red" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                    </svg>
                    {t('recruitment.form.cover')} 
                  </label>
                  <div className="relative bg-gray-50 border-2 border-dashed border-gray-300 rounded-xl hover:border-cnbd-red hover:bg-cnbd-red/5 transition-all duration-300 group-hover:border-cnbd-red h-32">
                    <input 
                      type="file" 
                      name="cover" 
                      id="cover" 
                      accept=".pdf,.doc,.docx" 
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" 
                    />
                    <div className="flex flex-col items-center justify-center h-full px-4 text-center">
                      <svg className="w-6 h-6 text-gray-400 group-hover:text-cnbd-red transition-colors duration-300 mb-2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                      <p className="text-sm text-gray-600 group-hover:text-cnbd-red transition-colors duration-300 font-medium">Cliquer pour télécharger</p>
                      <p className="text-xs text-gray-400 mt-1">PDF, DOC, DOCX (max 5MB)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4" data-aos="fade-up" data-aos-delay="500">
                <button 
                  type="submit" 
                  className="group relative w-full py-3 px-6 bg-gradient-to-r from-cnbd-red to-red-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-cnbd-red opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative flex items-center justify-center gap-2">
                    <span>{t('recruitment.form.submit')}</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                    </svg>
                  </div>
                </button>
                
                <p className="text-center text-xs text-gray-500 mt-3 leading-relaxed">
                  En soumettant ce formulaire, vous acceptez que vos données soient traitées dans le cadre de votre candidature.
                </p>
              </div>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
} 