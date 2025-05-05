'use client';
import Image from 'next/image';
import Link from 'next/link';
import HeroSlider from '@/components/HeroSlider';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
  useEffect(() => {
    AOS.init({ once: true, duration: 900, offset: 80 });
  }, []);
  return (
    <main className="pt-[30px]">
      <HeroSlider />
      
      {/* Features Section */}
      <section className="py-16 bg-white" id="expertise">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12" data-aos="fade-up">Nos domaines d'expertise</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow duration-300 bg-white"
                data-aos="zoom-in" data-aos-delay={index * 100}
              >
                <div className="text-cnbd-red mb-4 flex justify-center">
                  <feature.icon className="h-12 w-12" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-center">{feature.title}</h3>
                <p className="text-gray-600 text-center">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chiffres clés Section */}
      <section className="py-14 bg-gray-50" id="chiffres-cles">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 md:mb-12" data-aos="fade-up">Quelques chiffres</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
            <div data-aos="fade-up" data-aos-delay="0">
              <p className="text-3xl md:text-4xl font-extrabold text-cnbd-red mb-1 md:mb-2">+500</p>
              <p className="text-gray-700 text-sm md:text-base">Clients satisfaits</p>
            </div>
            <div data-aos="fade-up" data-aos-delay="100">
              <p className="text-3xl md:text-4xl font-extrabold text-cnbd-red mb-1 md:mb-2">15</p>
              <p className="text-gray-700 text-sm md:text-base">Années d'expérience</p>
            </div>
            <div data-aos="fade-up" data-aos-delay="200">
              <p className="text-3xl md:text-4xl font-extrabold text-cnbd-red mb-1 md:mb-2">24/7</p>
              <p className="text-gray-700 text-sm md:text-base">Support</p>
            </div>
            <div data-aos="fade-up" data-aos-delay="300">
              <p className="text-3xl md:text-4xl font-extrabold text-cnbd-red mb-1 md:mb-2">100%</p>
              <p className="text-gray-700 text-sm md:text-base">Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Nos solutions et expertises Section */}
      <section className="py-14 bg-gray-50" id="solutions-expertises">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 md:mb-12" data-aos="fade-up">Nos solutions & expertises</h2>
          <div className="flex flex-wrap justify-center gap-8 md:gap-10">
            {solutionsExpertises.map((item, i) => (
              <Link
                href={item.href}
                key={item.title}
                className="flex flex-col items-center bg-white rounded-2xl p-6 md:p-8 shadow-md hover:shadow-xl transition-all duration-300 group max-w-xs w-full min-w-[220px] border border-gray-100"
                data-aos="fade-up"
                data-aos-delay={i * 80}
              >
                <span className="text-4xl md:text-5xl mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </span>
                <h3 className="font-bold text-base md:text-lg mb-1 md:mb-2 text-center">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-center text-sm md:text-base mb-1 md:mb-2">
                  {item.desc}
                </p>
                <span className="text-cnbd-red font-semibold mt-1 md:mt-2 text-sm md:text-base">Découvrir</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Pourquoi choisir CNBD Section */}
      <section className="py-16 bg-white" id="pourquoi-cnbd">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12" data-aos="fade-up">Pourquoi choisir CNBD ?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {pourquoiCnbd.map((item, i) => (
              <div key={item.title} className="flex flex-col items-center bg-gray-50 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300" data-aos="zoom-in" data-aos-delay={i*80}>
                <span className="text-5xl mb-4">{item.icon}</span>
                <h3 className="font-bold text-lg mb-2 text-center">{item.title}</h3>
                <p className="text-gray-600 text-center">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50" id="faq">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12" data-aos="fade-up">Questions fréquentes</h2>
          <div className="space-y-6">
            {[{q:'Quels services proposez-vous ?',a:'Nous proposons des solutions informatiques complètes : matériel, logiciels, maintenance, cybersécurité, cloud, etc.'},{q:'Intervenez-vous partout en France ?',a:'Oui, nous accompagnons nos clients sur tout le territoire national.'},{q:'Proposez-vous un support 24/7 ?',a:'Oui, notre équipe technique est disponible 24h/24 et 7j/7.'}].map((item, i) => (
              <div key={i} className="bg-white rounded-lg shadow p-6" data-aos="fade-up" data-aos-delay={i*100}>
                <h3 className="font-bold text-cnbd-red mb-2">{item.q}</h3>
                <p className="text-gray-700">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Canon Partnership Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6" data-aos="fade-up">Partenaire Officiel Canon</h2>
            <p className="text-lg text-gray-700 mb-8" data-aos="fade-up" data-aos-delay="100">
              En tant que partenaire officiel Canon, nous vous offrons un accès privilégié à toute la gamme de produits et services Canon pour les entreprises.
            </p>
            <Link 
              href="/partenariat-canon" 
              className="inline-flex items-center px-6 py-3 bg-cnbd-red text-white font-medium rounded-md hover:bg-red-700 transition-colors duration-200"
              data-aos="zoom-in" data-aos-delay="200"
            >
              En savoir plus
            </Link>
          </div>
        </div>
      </section>

            
      {/* Partenaires Section */}
      <section className="py-16 bg-white" id="partenaires">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12" data-aos="fade-up">Nos partenaires</h2>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            {["Canon", "HP", "Dell", "Microsoft", "Cisco"].map((partner, i) => (
              <div key={partner} className="bg-gray-100 rounded-xl px-8 py-6 shadow-md" data-aos="zoom-in" data-aos-delay={i*100}>
                <Image src="/image-defaut.jpg" alt={partner} width={120} height={60} className="object-contain rounded-md mb-2" />
                <p className="text-center font-semibold text-gray-700">{partner}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Contact CTA */}
      <section className="py-16 bg-cnbd-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6" data-aos="fade-up">Prêt à moderniser votre infrastructure informatique?</h2>
            <p className="text-lg mb-8" data-aos="fade-up" data-aos-delay="100">
              Contactez-nous dès aujourd'hui pour discuter de vos besoins spécifiques et découvrir comment nos solutions peuvent aider votre entreprise.
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
    </main>
  );
}

// Placeholder for feature icons - will be replaced by actual heroicons
const features = [
  {
    title: 'Équipements Informatiques',
    description: 'Ordinateurs, serveurs, périphériques et équipements réseau pour tous vos besoins professionnels.',
    icon: ({ className }: { className: string }) => (
      <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Logiciels et Solutions',
    description: 'Solutions logicielles adaptées à vos besoins: systèmes d\'exploitation, bureautique, sécurité et applications métier.',
    icon: ({ className }: { className: string }) => (
      <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Services et Support',
    description: 'Installation, maintenance, formation et support technique pour garantir le bon fonctionnement de vos équipements.',
    icon: ({ className }: { className: string }) => (
      <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

// Ajout des tableaux pour les sections dynamiques
const solutionsExpertises = [
  { title: 'GED & Digitalisation', icon: '📄', href: '/solutions/ged-digitalisation', desc: 'Gestion électronique de documents, dématérialisation et automatisation.' },
  { title: 'Infogérance', icon: '🖥️', href: '/solutions/infogerance', desc: 'Gestion complète ou partielle de votre système d\'information.' },
  { title: 'Téléphonie', icon: '📞', href: '/solutions/telephonie', desc: 'Téléphonie d\'entreprise, hébergée, communication unifiée.' },
  { title: 'Informatique', icon: '💻', href: '/solutions/informatique', desc: 'Postes, serveurs, réseau, hébergement, messagerie, sécurité.' },
  { title: 'Bureautique', icon: '🖨️', href: '/solutions/bureautique', desc: 'Impression, écrans interactifs, solutions bureautiques.' },
  { title: 'Cybersécurité', icon: '🛡️', href: '/services/cybersecurite', desc: 'Audit, protection, supervision et gestion des risques.' },
  { title: 'Audits & Conseils', icon: '🔍', href: '/services/audits-conseils', desc: 'Analyse, accompagnement et recommandations sur-mesure.' },
  { title: 'Financement', icon: '💶', href: '/services/financement', desc: 'Solutions de financement adaptées à vos projets IT.' },
  { title: 'SAV & Maintenance', icon: '🔧', href: '/services/sav-maintenance', desc: 'Support technique, maintenance préventive et curative.' },
];

const pourquoiCnbd = [
  { title: 'Expertise reconnue', icon: '🎓', desc: 'Des années d\'expérience et des experts certifiés à votre service.' },
  { title: 'Accompagnement sur-mesure', icon: '🤝', desc: 'Un interlocuteur dédié et un suivi personnalisé pour chaque projet.' },
  { title: 'Proximité & réactivité', icon: '🚀', desc: 'Une équipe disponible, réactive et proche de ses clients.' },
  { title: 'Innovation', icon: '💡', desc: 'Des solutions à la pointe pour anticiper les besoins de demain.' },
  { title: 'Support 24/7', icon: '⏰', desc: 'Une assistance technique disponible à tout moment.' },
  { title: 'Satisfaction client', icon: '🌟', desc: 'Votre satisfaction est notre priorité absolue.' },
];
