'use client';

import Link from 'next/link';
import Image from 'next/image';

interface FooterLink {
  label: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const footerSections: FooterSection[] = [
  {
    title: 'CNBD',
    links: [
      { label: 'Notre entreprise', href: '/entreprise' },
      { label: 'Nos valeurs', href: '/entreprise/valeurs' },
      { label: 'Notre équipe', href: '/entreprise/equipe' },
      { label: 'Nous rejoindre', href: '/carriere' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'Installation de réseaux', href: '/services/reseaux' },
      { label: 'Maintenance informatique', href: '/services/maintenance' },
      { label: 'Conseil et audit', href: '/services/conseil' },
      { label: 'Infogérance', href: '/services/infogerance' },
    ],
  },
  {
    title: 'Produits',
    links: [
      { label: 'Ordinateurs', href: '/produits/ordinateurs' },
      { label: 'Périphériques', href: '/produits/peripheriques' },
      { label: 'Logiciels', href: '/produits/logiciels' },
      { label: 'Solutions d\'impression', href: '/produits/impression' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-cnbd-black text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and info */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/cnbd.jpg"
                alt="CNBD Logo"
                width={450}
                height={80}
                className="object-contain h-16 w-auto"
              />
            </Link>
            <p className="text-gray-400 mb-4 max-w-md">
              CNBD est spécialisé dans le commerce de gros d'ordinateurs, d'équipements informatiques périphériques et de logiciels pour les entreprises.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-bold mb-4 text-cnbd-red">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link 
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">Contact</h3>
              <p className="text-gray-400">
              64, allée de la main ferme <br />
                93320 Les Pavillons sous Bois, FRANCE
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Téléphone</h3>
              <p className="text-gray-400">
                <a href="tel:+33123456789" className="hover:text-white transition-colors duration-200">
                +33 1 43 62 16 03
                </a>
                <br />
                <a href="tel:+33667360280" className="hover:text-white transition-colors duration-200">
                +33 6 67 36 02 80
                </a>
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Email</h3>
              <p className="text-gray-400">
                <a href="mailto:contact@cnbd.fr" className="hover:text-white transition-colors duration-200">
                  contact@cnbd.fr
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} CNBD. Tous droits réservés.</p>
          <div className="mt-2 space-x-4">
            <Link href="/mentions-legales" className="hover:text-white transition-colors duration-200">
              Mentions légales
            </Link>
            <Link href="/confidentialite" className="hover:text-white transition-colors duration-200">
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 