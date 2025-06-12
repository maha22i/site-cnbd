"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Breadcrumbs from "@/components/navigation/Breadcrumbs";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslations } from "next-intl";

export default function SAVMaintenanceClient() {
  const t = useTranslations("SAVMaintenancePage");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const engagements = [
    {
      title: t('engagements.items.0.title'),
      description: t('engagements.items.0.description'),
      icon: (
        <svg className="w-8 h-8 text-cnbd-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>
      ),
    },
    {
      title: t('engagements.items.1.title'),
      description: t('engagements.items.1.description'),
      icon: (
        <svg className="w-8 h-8 text-cnbd-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      ),
    },
    {
      title: t('engagements.items.2.title'),
      description: t('engagements.items.2.description'),
      icon: (
        <svg className="w-8 h-8 text-cnbd-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 7h-7m7 10h-7m7-5h-7"></path>
          <path d="M3 7h2m-2 5h2m-2 5h2"></path>
        </svg>
      ),
    },
    {
      title: t('engagements.items.3.title'),
      description: t('engagements.items.3.description'),
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
      title: t('whyUs.security.title'),
      description: t('whyUs.security.description'),
      icon: (
        <svg className="w-8 h-8 text-cnbd-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>
      ),
    },
    {
      title: t('whyUs.optimization.title'),
      description: t('whyUs.optimization.description'),
      icon: (
        <svg className="w-8 h-8 text-cnbd-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
        </svg>
      ),
    },
    {
      title: t('whyUs.simplicity.title'),
      description: t('whyUs.simplicity.description'),
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
  
  const faqs = [
    { q: t('faq.items.0.question'), a: t('faq.items.0.answer') },
    { q: t('faq.items.1.question'), a: t('faq.items.1.answer') },
    { q: t('faq.items.2.question'), a: t('faq.items.2.answer') },
    { q: t('faq.items.3.question'), a: t('faq.items.3.answer') },
  ];

  useEffect(() => {
    AOS.init({ once: true, duration: 900, offset: 80 });
  }, []);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
                 <span className="block">{t('hero.title1')}</span>
                 <span className="text-cnbd-red">{t('hero.title2')}</span>
               </h1>
               <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-lg leading-relaxed">
                 {t('hero.description')}
               </p>
               <div className="flex flex-wrap gap-4">
                 <a href="/contact" className="inline-flex items-center bg-cnbd-red text-white px-8 py-4 rounded-full font-bold hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:translate-y-[-2px] group">
                   {t('hero.cta1')}
                   <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                     <path d="M5 12h14M12 5l7 7-7 7"/>
                   </svg>
                 </a>
                 <button 
                   onClick={() => {
                     const element = document.getElementById('services');
                     if (element) {
                       const offset = 100;
                       const elementPosition = element.getBoundingClientRect().top;
                       const offsetPosition = elementPosition + window.pageYOffset - offset;
                       
                       window.scrollTo({
                         top: offsetPosition,
                         behavior: 'smooth'
                       });
                     }
                   }}
                   className="inline-flex items-center bg-white text-cnbd-black border-2 border-gray-200 px-8 py-4 rounded-full font-bold hover:border-cnbd-red/30 transition-all duration-300 shadow-lg hover:shadow-xl hover:translate-y-[-2px]"
                 >
                   {t('hero.cta2')}
                 </button>
               </div>
             </div>
             
             <div className="relative" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="300">
               <div className="absolute bottom-0 right-0 w-64 h-64 bg-cnbd-red/5 rounded-full blur-2xl -z-10"></div>
               <div className="relative overflow-hidden rounded-[2rem] shadow-2xl border-8 border-white">
                 <Image 
                   src="/maintenance1.png" 
                   alt={t('hero.imageAlt')} 
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
                       <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
                     </svg>
                   </div>
                   <div>
                     <div className="font-bold">{t('hero.feature1.title')}</div>
                     <div className="text-sm text-gray-500">{t('hero.feature1.description')}</div>
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
                     <div className="font-bold">{t('hero.feature2.title')}</div>
                     <div className="text-sm text-gray-500">{t('hero.feature2.description')}</div>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
         
         <div className="absolute bottom-10 left-0 right-0 flex justify-center">
           <a href="#services" className="rounded-full bg-white shadow-md p-3 animate-bounce hover:shadow-lg transition-shadow">
             <svg className="w-6 h-6 text-cnbd-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
               <polyline points="6 9 12 15 18 9"></polyline>
             </svg>
           </a>
         </div>
       </section>

       {/* Nos engagements section */}
       <section id="engagements" className="container mx-auto px-4 max-w-5xl py-4">
         <div className="text-center mb-16" data-aos="fade-up">
           <h2 className="text-3xl md:text-4xl font-bold text-cnbd-red mb-4">{t('engagements.title')}</h2>
           <p className="text-xl text-gray-700 max-w-3xl mx-auto">
             {t('engagements.description')}
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

       {/* Pourquoi nous choisir section */}
       <section id="pourquoi-nous" className="container mx-auto px-4 max-w-5xl py-12">
         <div className="text-center mb-16" data-aos="fade-up">
           <h2 className="text-3xl md:text-4xl font-bold text-cnbd-red mb-4">{t('whyUs.title')}</h2>
           <p className="text-xl text-gray-700 max-w-3xl mx-auto">
             {t('whyUs.description')}
           </p>
         </div>
         
         <div className="grid md:grid-cols-3 gap-8">
           {pourquoiNous.map((item, index) => (
             <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300" data-aos="fade-up" data-aos-delay={index * 100}>
               <div className="bg-cnbd-red/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                 {item.icon}
               </div>
               <h3 className="text-xl font-bold mb-4">{item.title}</h3>
               <p className="text-gray-700">{item.description}</p>
             </div>
           ))}
         </div>
       </section>

       <section id="services" className="container mx-auto px-4 max-w-5xl flex flex-col gap-12 py-8 md:py-16">
         {/* Enjeux du SAV et maintenance */}
         <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col md:flex-row gap-8 items-center" data-aos="fade-right">
           <div className="flex-1">
             <h2 className="text-2xl font-bold text-cnbd-red mb-3">{t('services.importance.title')}</h2>
             <p className="text-gray-700">
               {t('services.importance.description')}
             </p>
           </div>
           <div className="flex-1 flex justify-center">
             <Image src="/maintenance2.png" alt={t('services.importance.imageAlt')} width={400} height={100} className="object-contain bg-white rounded-xl shadow p-2" />
           </div>
         </div>

         {/* Nos services de maintenance */}
         <div className="bg-gray-50 rounded-2xl shadow-lg p-8" data-aos="fade-left">
           <h2 className="text-2xl font-bold text-cnbd-red mb-3">{t('services.maintenance.title')}</h2>
           <p className="text-gray-700 mb-6">{t('services.maintenance.subtitle')}</p>
           <ul className="grid md:grid-cols-2 gap-4 text-gray-800">
             <li className="flex items-center gap-3"><span className="inline-flex items-center justify-center bg-cnbd-red/10 text-cnbd-red rounded-full w-8 h-8"><svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg></span>{t('services.maintenance.items.0')}</li>
             <li className="flex items-center gap-3"><span className="inline-flex items-center justify-center bg-cnbd-red/10 text-cnbd-red rounded-full w-8 h-8"><svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg></span>{t('services.maintenance.items.1')}</li>
             <li className="flex items-center gap-3"><span className="inline-flex items-center justify-center bg-cnbd-red/10 text-cnbd-red rounded-full w-8 h-8"><svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg></span>{t('services.maintenance.items.2')}</li>
             <li className="flex items-center gap-3"><span className="inline-flex items-center justify-center bg-cnbd-red/10 text-cnbd-red rounded-full w-8 h-8"><svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg></span>{t('services.maintenance.items.3')}</li>
             <li className="flex items-center gap-3"><span className="inline-flex items-center justify-center bg-cnbd-red/10 text-cnbd-red rounded-full w-8 h-8"><svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg></span>{t('services.maintenance.items.4')}</li>
             <li className="flex items-center gap-3"><span className="inline-flex items-center justify-center bg-cnbd-red/10 text-cnbd-red rounded-full w-8 h-8"><svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg></span>{t('services.maintenance.items.5')}</li>
           </ul>
         </div>

         {/* Types d'équipements couverts */}
         <div className="bg-gray-50 rounded-2xl shadow-lg p-8" data-aos="fade-left">
           <h2 className="text-2xl font-bold text-cnbd-red mb-3 text-center">{t('services.equipment.title')}</h2>
           <p className="text-gray-700 text-center mb-8">{t('services.equipment.subtitle')}</p>
           <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-6">
             <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group">
               <div className="relative h-48 overflow-hidden">
                 <Image 
                   src="/poste1.jpg" 
                   alt={t('services.equipment.items.computers.title')} 
                   width={400} 
                   height={300}
                   className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
               </div>
               <div className="p-6">
                 <div className="flex items-center gap-3 mb-3">
                   <span className="inline-flex items-center justify-center bg-cnbd-red/10 text-cnbd-red rounded-full w-10 h-10">
                     <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
                   </span>
                   <h3 className="font-bold text-gray-800">{t('services.equipment.items.computers.title')}</h3>
                 </div>
                 <p className="text-gray-600 text-sm">{t('services.equipment.items.computers.description')}</p>
               </div>
             </div>

             <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group">
               <div className="relative h-48 overflow-hidden">
                 <Image 
                   src="/imprimante1.png" 
                   alt={t('services.equipment.items.printers.title')} 
                   width={400} 
                   height={300}
                   className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
               </div>
               <div className="p-6">
                 <div className="flex items-center gap-3 mb-3">
                   <span className="inline-flex items-center justify-center bg-cnbd-red/10 text-cnbd-red rounded-full w-10 h-10">
                     <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect></svg>
                   </span>
                   <h3 className="font-bold text-gray-800">{t('services.equipment.items.printers.title')}</h3>
                 </div>
                 <p className="text-gray-600 text-sm">{t('services.equipment.items.printers.description')}</p>
               </div>
             </div>

             <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group">
               <div className="relative h-48 overflow-hidden">
                 <Image 
                   src="/telephonie1.jpg" 
                   alt={t('services.equipment.items.telephony.title')} 
                   width={400} 
                   height={300}
                   className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
               </div>
               <div className="p-6">
                 <div className="flex items-center gap-3 mb-3">
                   <span className="inline-flex items-center justify-center bg-cnbd-red/10 text-cnbd-red rounded-full w-10 h-10">
                     <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                   </span>
                   <h3 className="font-bold text-gray-800">{t('services.equipment.items.telephony.title')}</h3>
                 </div>
                 <p className="text-gray-600 text-sm">{t('services.equipment.items.telephony.description')}</p>
               </div>
             </div>

             <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group">
               <div className="relative h-48 overflow-hidden">
                 <Image 
                   src="/ecran1.png" 
                   alt={t('services.equipment.items.displays.title')} 
                   width={400} 
                   height={300}
                   className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
               </div>
               <div className="p-6">
                 <div className="flex items-center gap-3 mb-3">
                   <span className="inline-flex items-center justify-center bg-cnbd-red/10 text-cnbd-red rounded-full w-10 h-10">
                     <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
                   </span>
                   <h3 className="font-bold text-gray-800">{t('services.equipment.items.displays.title')}</h3>
                 </div>
                 <p className="text-gray-600 text-sm">{t('services.equipment.items.displays.description')}</p>
               </div>
             </div>

             <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group">
               <div className="relative h-48 overflow-hidden">
                 <Image 
                   src="/ged-image.jpg" 
                   alt={t('services.equipment.items.ged.title')} 
                   width={400} 
                   height={300}
                   className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
               </div>
               <div className="p-6">
                 <div className="flex items-center gap-3 mb-3">
                   <span className="inline-flex items-center justify-center bg-cnbd-red/10 text-cnbd-red rounded-full w-10 h-10">
                     <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                   </span>
                   <h3 className="font-bold text-gray-800">{t('services.equipment.items.ged.title')}</h3>
                 </div>
                 <p className="text-gray-600 text-sm">{t('services.equipment.items.ged.description')}</p>
               </div>
             </div>

             <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group">
               <div className="relative h-48 overflow-hidden">
                 <Image 
                   src="/image/image1.png" 
                   alt={t('services.equipment.items.office.title')} 
                   width={400} 
                   height={300}
                   className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
               </div>
               <div className="p-6">
                 <div className="flex items-center gap-3 mb-3">
                   <span className="inline-flex items-center justify-center bg-cnbd-red/10 text-cnbd-red rounded-full w-10 h-10">
                     <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
                   </span>
                   <h3 className="font-bold text-gray-800">{t('services.equipment.items.office.title')}</h3>
                 </div>
                 <p className="text-gray-600 text-sm">{t('services.equipment.items.office.description')}</p>
               </div>
             </div>
           </div>
         </div>

         {/* Équipe d'experts */}
         <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col md:flex-row gap-8 items-center" data-aos="fade-right">
           <div className="flex-1">
             <h2 className="text-2xl font-bold text-cnbd-red mb-3">{t('services.experts.title')}</h2>
             <p className="text-gray-700">{t('services.experts.description')}</p>
           </div>
           <div className="flex-1 flex justify-center">
             <Image src="/image-defaut.jpg" alt={t('services.experts.imageAlt')} width={320} height={220} className="rounded-xl shadow-lg object-cover" />
           </div>
         </div>

         {/* Partenariat et support */}
         <div className="bg-gray-50 rounded-2xl shadow-lg p-8 flex flex-col md:flex-row gap-8 items-center" data-aos="fade-left">
           <div className="flex-1 flex justify-center">
             <Image src="/logo-cnbd.png" alt={t('services.partnership.imageAlt')} width={600} height={300} className="object-contain bg-white rounded-xl shadow p-2" />
           </div>
           <div className="flex-1">
             <h2 className="text-2xl font-bold text-cnbd-red mb-3">{t('services.partnership.title')}</h2>
             <p className="text-gray-700">{t('services.partnership.description')}</p>
           </div>
         </div>

         {/* Appel à l'action */}
         <div className="bg-cnbd-red rounded-2xl shadow-xl p-8 text-white text-center flex flex-col items-center gap-6" data-aos="zoom-in">
           <h2 className="text-2xl font-bold mb-2">{t('cta.title')}</h2>
           <p className="text-lg mb-4">{t('cta.description')}</p>
           <div className="flex flex-wrap gap-4 justify-center">
             <a href="/contact" className="px-6 py-3 bg-white text-cnbd-red font-bold rounded-lg shadow-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">{t('cta.button1')}</a>
             <a href="/contact" className="px-6 py-3 bg-transparent border-2 border-white text-white font-bold rounded-lg shadow-lg hover:bg-white/10 transition-all duration-300 transform hover:scale-105">{t('cta.button2')}</a>
           </div>
         </div>

         {/* FAQ */}
         <div className="bg-white rounded-2xl shadow-xl p-8 mt-8" data-aos="fade-up">
           <h2 className="text-2xl font-bold text-cnbd-red mb-6 text-center">{t('faq.title')}</h2>
           <div className="space-y-4 max-w-3xl mx-auto">
             {faqs.map((item, i) => (
               <div 
                 key={i} 
                 className="bg-gray-50 rounded-xl overflow-hidden transition-all duration-300"
                 data-aos="fade-up" 
                 data-aos-delay={i*100}
               >
                 <button
                   onClick={() => toggleFaq(i)}
                   className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors duration-200"
                 >
                   <h3 className="font-bold text-cnbd-red">{item.q}</h3>
                   <svg
                     className={`w-5 h-5 text-cnbd-red transform transition-transform duration-300 ${
                       openIndex === i ? 'rotate-180' : ''
                     }`}
                     fill="none"
                     stroke="currentColor"
                     viewBox="0 0 24 24"
                   >
                     <path
                       strokeLinecap="round"
                       strokeLinejoin="round"
                       strokeWidth={2}
                       d="M19 9l-7 7-7-7"
                     />
                   </svg>
                 </button>
                 <div
                   className={`overflow-hidden transition-all duration-300 ease-in-out ${
                     openIndex === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                   }`}
                 >
                   <div className="px-6 pb-4 text-gray-700">
                     {item.a}
                   </div>
                 </div>
               </div>
             ))}
           </div>
         </div>
       </section>
     </div>
   </main>

  );
}