'use client';

import Image from 'next/image';
import { Link } from '../../i18n/navigation';
import HeroSlider from '@/components/HeroSlider';
import { useEffect } from 'react';
import { useTranslations } from 'next-intl';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function HomeContent() {
  const t = useTranslations();
  
  useEffect(() => {
    AOS.init({ once: true, duration: 900, offset: 80 });
  }, []);

  // Features array moved inside the component to access t() function
  const features = [
    {
      title: t('home.expertise.it_equipment.title'),
      description: t('home.expertise.it_equipment.description'),
      icon: ({ className }: { className: string }) => (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: t('home.expertise.software.title'),
      description: t('home.expertise.software.description'),
      icon: ({ className }: { className: string }) => (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: t('home.expertise.services.title'),
      description: t('home.expertise.services.description'),
      icon: ({ className }: { className: string }) => (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
  ];

  // Solutions and expertises array moved inside the component
  const solutionsExpertises = [
    { title: t('solutions.ged'), icon: '📄', href: '/ged-digitalisation', desc: t('home.solutions_list.ged'), image: '/ged-image.jpg' },
    { title: t('solutions.infogerance'), icon: '🖥️', href: '/infogerance', desc: t('home.solutions_list.infogerance'), image: '/infogerance-image.jpg' },
    { title: t('solutions.telephonie'), icon: '📞', href: '/telephonie', desc: t('home.solutions_list.telephonie'), image: '/telephonie1.jpg' },
    { title: t('solutions.informatique'), icon: '💻', href: '/solutions/informatique', desc: t('home.solutions_list.informatique'), image: '/poste1.jpg' },
    { title: t('solutions.bureautique'), icon: '🖨️', href: '/solutions/bureautique', desc: t('home.solutions_list.bureautique'), image: '/impression1.png' },
    { title: t('home.solutions_list.cybersecurity.title'), icon: '🛡️', href: '/services', desc: t('home.solutions_list.cybersecurity.description'), image: '/securite1.png' },
    { title: t('services.audits.title.part1') + ' ' + t('services.audits.title.part2'), icon: '🔍', href: '/services/audits-conseils', desc: t('home.solutions_list.audits'), image: '/audit1.png' },
    { title: t('services.financement'), icon: '💶', href: '/services/financement', desc: t('home.solutions_list.financement'), image: '/financement1.png' },
    { title: t('services.sav'), icon: '🔧', href: '/services/sav-maintenance', desc: t('home.solutions_list.sav'), image: '/maintenance1.png' },
  ];

  return (
    <main className="pt-[30px]">
      <HeroSlider />
      
      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-white via-gray-50/50 to-white" id="expertise">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-4" data-aos="fade-up">
              {t('home.expertise.title')}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cnbd-red to-red-600 mx-auto rounded-full" data-aos="fade-up" data-aos-delay="100"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="group p-8 bg-white/80 backdrop-blur-sm border border-gray-100 rounded-2xl hover:shadow-2xl hover:shadow-cnbd-red/10 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
                data-aos="zoom-in" data-aos-delay={index * 100}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cnbd-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="text-cnbd-red mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-16 w-16" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-center text-gray-900 group-hover:text-cnbd-red transition-colors duration-300">{feature.title}</h3>
                  <p className="text-gray-600 text-center leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chiffres clés Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden" id="chiffres-cles">
        {/* Arrière-plan animé avec particules */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.03%22%3E%3Ccircle cx=%227%22 cy=%227%22 r=%227%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        {/* Éléments flottants animés */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-2 h-2 bg-cnbd-red/30 rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-16 w-3 h-3 bg-red-400/20 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-24 left-20 w-1 h-1 bg-white/40 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-40 right-8 w-2 h-2 bg-cnbd-red/25 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-red-300/30 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute top-16 right-1/3 w-2 h-2 bg-white/20 rounded-full animate-bounce" style={{ animationDelay: '2.5s' }}></div>
        </div>

        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 relative" data-aos="fade-up">
              {t('home.stats.title')}
              <div className="absolute -inset-2 bg-gradient-to-r from-cnbd-red/20 to-red-400/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </h2>
            <p className="text-gray-300 text-lg relative" data-aos="fade-up" data-aos-delay="100">
              {t('home.stats.subtitle')}
            </p>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-cnbd-red to-red-400 group-hover:w-full transition-all duration-500"></div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
            {/* Clients satisfaits */}
            <div className="group relative" data-aos="fade-up" data-aos-delay="0">
              <div className="absolute inset-0 bg-gradient-to-r from-cnbd-red/20 to-red-400/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-110"></div>
              <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:border-cnbd-red/40 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cnbd-red to-red-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                <div className="relative">
                  <p className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-cnbd-red to-red-400 bg-clip-text text-transparent mb-2 transition-all duration-300 group-hover:scale-110 animate-[countUp_2s_ease-out_forwards]">
                    +500
                  </p>
                  <p className="text-gray-300 text-sm md:text-base font-medium group-hover:text-white transition-colors duration-300">{t('home.stats.clients')}</p>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-cnbd-red/20 rounded-full blur-md group-hover:bg-cnbd-red/40 transition-all duration-300"></div>
                </div>
              </div>
            </div>

            {/* Années d'expérience */}
            <div className="group relative" data-aos="fade-up" data-aos-delay="100">
              <div className="absolute inset-0 bg-gradient-to-r from-cnbd-red/20 to-red-400/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-110"></div>
              <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:border-cnbd-red/40 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cnbd-red to-red-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" style={{ transitionDelay: '0.1s' }}></div>
                <div className="relative">
                  <p className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-cnbd-red to-red-400 bg-clip-text text-transparent mb-2 transition-all duration-300 group-hover:scale-110 animate-[countUp_2.5s_ease-out_0.1s_forwards]">
                    15
                  </p>
                  <p className="text-gray-300 text-sm md:text-base font-medium group-hover:text-white transition-colors duration-300">{t('home.stats.experience')}</p>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-cnbd-red/20 rounded-full blur-md group-hover:bg-cnbd-red/40 transition-all duration-300"></div>
                </div>
              </div>
            </div>

            {/* Support 24/7 */}
            <div className="group relative" data-aos="fade-up" data-aos-delay="200">
              <div className="absolute inset-0 bg-gradient-to-r from-cnbd-red/20 to-red-400/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-110"></div>
              <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:border-cnbd-red/40 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cnbd-red to-red-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" style={{ transitionDelay: '0.2s' }}></div>
                <div className="relative">
                  <p className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-cnbd-red to-red-400 bg-clip-text text-transparent mb-2 transition-all duration-300 group-hover:scale-110 animate-pulse">
                    24/7
                  </p>
                  <p className="text-gray-300 text-sm md:text-base font-medium group-hover:text-white transition-colors duration-300">{t('home.stats.support')}</p>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-cnbd-red/20 rounded-full blur-md group-hover:bg-cnbd-red/40 transition-all duration-300"></div>
                </div>
              </div>
            </div>

            {/* Satisfaction */}
            <div className="group relative" data-aos="fade-up" data-aos-delay="300">
              <div className="absolute inset-0 bg-gradient-to-r from-cnbd-red/20 to-red-400/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-110"></div>
              <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:border-cnbd-red/40 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cnbd-red to-red-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" style={{ transitionDelay: '0.3s' }}></div>
                <div className="relative">
                  <p className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-cnbd-red to-red-400 bg-clip-text text-transparent mb-2 transition-all duration-300 group-hover:scale-110 animate-[countUp_3s_ease-out_0.3s_forwards]">
                    100%
                  </p>
                  <p className="text-gray-300 text-sm md:text-base font-medium group-hover:text-white transition-colors duration-300">{t('home.stats.satisfaction')}</p>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-cnbd-red/20 rounded-full blur-md group-hover:bg-cnbd-red/40 transition-all duration-300"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Barre de progression animée */}
          <div className="mt-16" data-aos="fade-up" data-aos-delay="400">
            <div className="h-1 bg-white/10 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-cnbd-red to-red-400 rounded-full transform -translate-x-full animate-[slideIn_3s_ease-out_0.5s_forwards]"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Nos solutions et expertises Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white" id="solutions-expertises">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-4" data-aos="fade-up">
              {t('home.solutions.title')}
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
              {t('home.solutions.subtitle')}
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-cnbd-red to-red-600 mx-auto rounded-full mt-6" data-aos="fade-up" data-aos-delay="200"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutionsExpertises.map((item, i) => (
              <Link
                href={item.href}
                key={item.title}
                className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl hover:shadow-cnbd-red/10 transition-all duration-500 border border-gray-100 hover:border-cnbd-red/20 hover:-translate-y-2 relative overflow-hidden"
                data-aos="fade-up"
                data-aos-delay={i * 80}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cnbd-red/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Image Section */}
                <div className="relative h-48 overflow-hidden rounded-t-3xl">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 z-20">
                    <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center text-cnbd-red text-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="relative z-10 p-8">
                  <h3 className="font-bold text-xl mb-3 text-gray-900 group-hover:text-cnbd-red transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                    {item.desc}
                  </p>
                  
                  {/* CTA Button */}
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center text-cnbd-red font-semibold text-sm group-hover:translate-x-1 transition-transform duration-300">
                      {t('common.discover')}
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                    <div className="w-8 h-8 bg-cnbd-red/10 rounded-full flex items-center justify-center group-hover:bg-cnbd-red group-hover:text-white transition-all duration-300">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          {/* Section de présentation rapide */}
          <div className="mt-16 text-center" data-aos="fade-up" data-aos-delay="400">
            <div className="bg-gradient-to-r from-cnbd-red/5 via-red-50 to-cnbd-red/5 rounded-3xl p-8 border border-cnbd-red/10">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {t('home.approach.title')}
              </h3>
              <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
                {t('home.approach.description')}
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center mt-6 px-6 py-3 bg-cnbd-red text-white font-semibold rounded-2xl hover:bg-red-600 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                {t('home.approach.cta')}
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-3.582 8-8 8a8.954 8.954 0 01-4.616-1.299L3 21l2.299-5.384A8.954 8.954 0 013 12c0-4.418 3.582-8 8-8s8 3.582 8 8z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Nos partenaires Section */}
      <section className="py-10 bg-white" id="partenaires">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-cnbd-red via-red-600 to-cnbd-red bg-clip-text text-transparent mb-4" data-aos="fade-up">
              {t('home.partners.title')}
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
              {t('home.partners.subtitle')}
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-cnbd-red to-red-600 mx-auto rounded-full mt-6" data-aos="fade-up" data-aos-delay="200"></div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center justify-center">
            {[
              { key: 'unyc', src: '/partenaire/unyc.png', alt: 'Unyc' },
              { key: 'kyocera', src: '/partenaire/kyocera.png', alt: 'Kyocera' },
              { key: 'adalink', src: '/partenaire/adalink.png', alt: 'Adalink' },
              { key: 'canon', src: '/partenaire/canon.png', alt: 'Canon' },
              { key: 'bmb', src: '/partenaire/bmb.png', alt: 'BMB' },
            ].map((partner, i) => (
              <div
                key={partner.alt}
                className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 group border border-gray-100 hover:border-cnbd-red/30"
                data-aos="zoom-in"
                data-aos-delay={i * 100}
              >
                <Image
                  src={partner.src}
                  alt={partner.alt}
                  width={140}
                  height={80}
                  className="object-contain transition-all duration-300 h-20 w-auto mx-auto"
                />
                <span className="mt-4 text-xs text-gray-500 text-center min-h-[40px]">
                  {t('home.partners.descriptions.' + partner.key)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-gray-900 via-cnbd-black to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.05%22%3E%3Ccircle cx=%227%22 cy=%227%22 r=%227%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-10 lg:p-12 border border-white/10">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6" data-aos="fade-up">
                {t('home.cta.title')}
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed" data-aos="fade-up" data-aos-delay="100">
                {t('home.cta.description')}
              </p>
              <Link 
                href="/contact" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cnbd-red to-red-600 text-white font-semibold rounded-2xl hover:from-red-600 hover:to-red-700 transition-all duration-300 hover:scale-105 shadow-xl"
                data-aos="zoom-in" data-aos-delay="200"
              >
                {t('navigation.contact')}
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-3.582 8-8 8a8.954 8.954 0 01-4.616-1.299L3 21l2.299-5.384A8.954 8.954 0 013 12c0-4.418 3.582-8 8-8s8 3.582 8 8z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 