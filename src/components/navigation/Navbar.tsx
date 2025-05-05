'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon, PhoneIcon } from '@heroicons/react/24/outline';
import DropdownMenu from './DropdownMenu';
import { usePathname } from 'next/navigation';

interface SubMenuItem {
  label: string;
  href: string;
  subItems?: { label: string; href: string }[];
}

interface NavItem {
  label: string;
  href: string;
  subItems?: SubMenuItem[];
}

const navItems: NavItem[] = [
  { label: 'Accueil', href: '/' },
  { 
    label: 'Solutions proposées', 
    href: '/solutions',
    subItems: [
      { 
        label: 'GED et digitalisation', 
        href: '/ged-digitalisation',
      },
      { 
        label: 'Infogérance', 
        href: '/infogerance',
      },
      { 
        label: 'Téléphonie', 
        href: '/solutions/telephonie',
        subItems: [
          { label: 'Téléphonie d\'entreprise', href: '/solutions/telephonie/entreprise' },
          { label: 'Téléphonie hébergée', href: '/solutions/telephonie/hebergee' },
          { label: 'Communication unifiée', href: '/solutions/telephonie/communication-unifiee' },
        ]
      },
      { 
        label: 'Informatique', 
        href: '/solutions/informatique',
        subItems: [
          { label: 'Poste informatique', href: '/solutions/informatique/poste' },
          { label: 'Serveur et réseau', href: '/solutions/informatique/serveur-reseau' },
          { label: 'Hébergement', href: '/solutions/informatique/hebergement' },
          { label: 'Messagerie', href: '/solutions/informatique/messagerie' },
          { label: 'Sauvegarde & sécurité', href: '/solutions/informatique/sauvegarde-securite' },
        ]
      },
      { 
        label: 'Bureautique', 
        href: '/solutions/bureautique',
        subItems: [
          { label: 'Impression', href: '/solutions/bureautique/impression' },
          { label: 'Écrans interactifs', href: '/solutions/bureautique/ecrans-interactifs' },
        ]
      },
    ] 
  },
  { 
    label: 'Nos services', 
    href: '/services',
    subItems: [
      { label: 'Audits & conseils', href: '/services/audits-conseils' },
      { label: 'Cybersécurité', href: '/services/cybersecurite' },
      { label: 'Financement', href: '/services/financement' },
      { label: 'Services après vente & maintenance', href: '/services/sav-maintenance' },
    ] 
  },
  { label: 'Recrutement', href: '/recrutement' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);
  const pathname = usePathname();

  // Fermeture du menu quand on clique en dehors
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      // Si le menu est ouvert et qu'on clique en dehors du menu et du bouton
      if (isMenuOpen && !target.closest('.mobile-menu') && !target.closest('.menu-button')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  // Reset menu state when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
    setActiveSubDropdown(null);
  }, [pathname]);

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Gestion améliorée des menus
  const handleDropdownToggle = (label: string) => {
    if (activeDropdown === label) {
      setActiveDropdown(null);
      setActiveSubDropdown(null);
    } else {
      setActiveDropdown(label);
      setActiveSubDropdown(null);
    }
  };

  const handleDropdownEnter = (label: string) => {
    setActiveDropdown(label);
  };

  const handleDropdownLeave = () => {
    setActiveDropdown(null);
    setActiveSubDropdown(null);
  };

  const handleSubDropdownToggle = (label: string, event?: React.MouseEvent) => {
    if (event) {
      event.stopPropagation();
    }
    if (activeSubDropdown === label) {
      setActiveSubDropdown(null);
    } else {
      setActiveSubDropdown(label);
    }
  };

  const handleSubDropdownEnter = (label: string) => {
    setActiveSubDropdown(label);
  };

  const handleSubDropdownLeave = () => {
    setActiveSubDropdown(null);
  };

  const handleCloseAllDropdowns = () => {
    setActiveDropdown(null);
    setActiveSubDropdown(null);
  };

  const phoneNumber = "+33667360280";
  
  return (
    <header 
      className={`fixed w-full z-[700] transition-all duration-300 ease-in-out ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-4' 
          : 'bg-white/90 py-6'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link 
            href="/" 
            className="relative flex items-center group z-50" 
            onClick={handleCloseAllDropdowns}
          >
            <div className="overflow-hidden transition-transform duration-300 ease-in-out group-hover:scale-105">
              <Image
                src="/logo-cnbd.png"
                alt="CNBD Logo"
                width={180}
                height={60}
                className="object-contain h-16 w-auto"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                {item.subItems ? (
                  <button
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200
                      ${activeDropdown === item.label 
                        ? 'text-cnbd-red bg-gray-50' 
                        : 'text-gray-700 hover:text-cnbd-red hover:bg-gray-50'
                      }`}
                    onClick={() => handleDropdownToggle(item.label)}
                    onMouseEnter={() => handleDropdownEnter(item.label)}
                  >
                    <span className="relative">
                      {item.label}
                      <span className={`ml-1 transition-transform duration-200 inline-block ${
                        activeDropdown === item.label ? 'rotate-180' : ''
                      }`}>▾</span>
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cnbd-red transform origin-left scale-x-0 transition-transform duration-200 group-hover:scale-x-100"></span>
                    </span>
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200
                      ${pathname === item.href 
                        ? 'text-cnbd-red bg-gray-50' 
                        : 'text-gray-700 hover:text-cnbd-red hover:bg-gray-50'
                      }`}
                    onClick={handleCloseAllDropdowns}
                  >
                    <span className="relative">
                      {item.label}
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cnbd-red transform origin-left scale-x-0 transition-transform duration-200 group-hover:scale-x-100"></span>
                    </span>
                  </Link>
                )}

                {item.subItems && (
                  <div 
                    className={`absolute left-0 mt-2 w-72 transition-all duration-200 ease-out transform origin-top-left
                      ${activeDropdown === item.label 
                        ? 'opacity-100 scale-100 visible translate-y-0' 
                        : 'opacity-0 scale-95 invisible -translate-y-1'
                      }`}
                    onMouseEnter={() => handleDropdownEnter(item.label)}
                    onMouseLeave={handleDropdownLeave}
                  >
                    <div className="py-3 rounded-xl shadow-2xl bg-white ring-1 ring-black/10">
                      <div className="absolute top-0 left-6 -translate-y-2 w-3 h-3 bg-white rotate-45"></div>
                      {item.subItems.map((subItem) => (
                        <div key={subItem.label} className="relative group/sub">
                          {subItem.subItems ? (
                            <>
                              <button
                                className={`w-full text-left px-5 py-3 text-sm transition-all duration-200 group/item flex items-center justify-between hover:bg-gray-100
                                  ${activeSubDropdown === subItem.label 
                                    ? 'text-cnbd-red bg-gray-100 font-medium' 
                                    : 'text-gray-800'
                                  }`}
                                onClick={(e) => handleSubDropdownToggle(subItem.label, e)}
                                onMouseEnter={() => handleSubDropdownEnter(subItem.label)}
                              >
                                <span className="flex items-center">
                                  {subItem.label}
                                </span>
                                <span className={`ml-2 transition-transform duration-200 text-gray-400 group-hover/item:text-cnbd-red ${
                                  activeSubDropdown === subItem.label ? 'rotate-180' : ''
                                }`}>
                                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                  </svg>
                                </span>
                              </button>

                              <div 
                                className={`absolute left-full top-0 ml-1 w-72 transition-all duration-200 ease-out transform
                                  ${activeSubDropdown === subItem.label 
                                    ? 'opacity-100 translate-x-0 visible' 
                                    : 'opacity-0 -translate-x-1 invisible'
                                  }`}
                                onMouseLeave={handleSubDropdownLeave}
                              >
                                <div className="py-3 rounded-xl shadow-2xl bg-white ring-1 ring-black/10">
                                  <div className="absolute top-4 -left-1.5 w-3 h-3 bg-white rotate-45"></div>
                                  {subItem.subItems.map((thirdLevelItem) => (
                                    <Link
                                      key={thirdLevelItem.label}
                                      href={thirdLevelItem.href}
                                      className="block px-5 py-3 text-sm text-gray-800 hover:text-cnbd-red hover:bg-gray-100 transition-all duration-200"
                                      onClick={handleCloseAllDropdowns}
                                    >
                                      {thirdLevelItem.label}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            </>
                          ) : (
                            <Link
                              href={subItem.href}
                              className="block w-full text-left px-5 py-3 text-sm text-gray-800 hover:text-cnbd-red hover:bg-gray-100 transition-all duration-200"
                              onClick={handleCloseAllDropdowns}
                            >
                              {subItem.label}
                            </Link>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Phone Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <a 
              href={`tel:${phoneNumber}`}
              className="inline-flex items-center px-3 py-1.5 border border-cnbd-red text-sm font-semibold rounded-full text-cnbd-red bg-white shadow hover:bg-cnbd-red hover:text-white transition-all duration-200 gap-2"
              style={{ letterSpacing: '0.01em' }}
            >
              <PhoneIcon className="h-4 w-4" />
              <span className="tracking-wide">+33 6 67 36 02 80</span>
            </a>
          </div>

          {/* Mobile menu button and phone */}
          <div className="lg:hidden flex items-center space-x-2">
            <a 
              href={`tel:${phoneNumber}`}
              className="flex items-center px-3 py-1.5 rounded-full border border-cnbd-red bg-white text-cnbd-red text-xs font-semibold shadow hover:bg-cnbd-red hover:text-white transition-all duration-200 gap-1"
              aria-label="Appeler CNBD"
            >
              <PhoneIcon className="h-4 w-4" />
              <span className="hidden xs:inline">+33 6 67 36 02 80</span>
            </a>
            <button
              type="button"
              className="p-2 rounded-md text-gray-700 hover:text-cnbd-red hover:bg-gray-100 transition-all duration-200 menu-button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu principal"
            >
              <div className="w-6 h-5 relative">
                <span className={`absolute w-full h-0.5 transition-all duration-300 ease-in-out transform ${
                  isMenuOpen 
                    ? 'top-2 rotate-45 bg-cnbd-red' 
                    : 'top-0 bg-gray-700'
                }`}></span>
                <span className={`absolute w-full h-0.5 bg-gray-700 top-2 transition-opacity duration-200 ${
                  isMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}></span>
                <span className={`absolute w-full h-0.5 transition-all duration-300 ease-in-out transform ${
                  isMenuOpen 
                    ? 'top-2 -rotate-45 bg-cnbd-red' 
                    : 'top-4 bg-gray-700'
                }`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`lg:hidden fixed inset-x-0 top-[73px] bg-white shadow-2xl border-t border-gray-200 transition-all duration-300 ease-out transform mobile-menu z-[90] ${
            isMenuOpen ? 'translate-y-0 opacity-100 visible' : '-translate-y-4 opacity-0 invisible'
          }`}
        >
          <div className="container mx-auto px-4 py-4 space-y-1 max-h-[calc(100vh-73px)] overflow-y-auto">
            {navItems.map((item) => (
              <div key={item.label} className="border-b border-gray-200 last:border-b-0">
                {item.subItems ? (
                  <>
                    <button
                      className={`w-full flex justify-between items-center px-4 py-3.5 text-base font-medium transition-all duration-200
                        ${activeDropdown === item.label ? 'text-cnbd-red' : 'text-gray-800'}`}
                      onClick={() => handleDropdownToggle(item.label)}
                    >
                      {item.label}
                      <span className={`transition-transform duration-200 text-gray-400 ${
                        activeDropdown === item.label ? 'rotate-180 text-cnbd-red' : ''
                      }`}>
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </button>
                    
                    <div className={`pl-4 overflow-hidden transition-all duration-200 ease-out transform origin-top ${
                      activeDropdown === item.label 
                        ? 'max-h-screen opacity-100 scale-y-100' 
                        : 'max-h-0 opacity-0 scale-y-95'
                    }`}>
                      <div className="py-2 space-y-0.5">
                        {item.subItems.map((subItem) => (
                          <div key={subItem.label}>
                            {subItem.subItems ? (
                              <>
                                <button
                                  className={`w-full flex justify-between items-center px-4 py-2.5 text-sm transition-all duration-200
                                    ${activeSubDropdown === subItem.label ? 'text-cnbd-red font-medium' : 'text-gray-700'}`}
                                  onClick={() => handleSubDropdownToggle(subItem.label)}
                                >
                                  {subItem.label}
                                  <span className={`transition-transform duration-200 text-gray-400 ${
                                    activeSubDropdown === subItem.label ? 'rotate-180 text-cnbd-red' : ''
                                  }`}>
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                  </span>
                                </button>
                                
                                <div className={`pl-4 overflow-hidden transition-all duration-200 ease-out transform origin-top ${
                                  activeSubDropdown === subItem.label 
                                    ? 'max-h-screen opacity-100 scale-y-100' 
                                    : 'max-h-0 opacity-0 scale-y-95'
                                }`}>
                                  <div className="py-2 space-y-0.5">
                                    {subItem.subItems.map((thirdLevelItem) => (
                                      <Link
                                        key={thirdLevelItem.label}
                                        href={thirdLevelItem.href}
                                        className="block px-4 py-2.5 text-sm text-gray-600 hover:text-cnbd-red transition-all duration-200"
                                        onClick={() => {
                                          setIsMenuOpen(false);
                                          handleCloseAllDropdowns();
                                        }}
                                      >
                                        {thirdLevelItem.label}
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              </>
                            ) : (
                              <Link
                                href={subItem.href}
                                className="block px-4 py-2.5 text-sm text-gray-700 hover:text-cnbd-red transition-all duration-200"
                                onClick={() => {
                                  setIsMenuOpen(false);
                                  handleCloseAllDropdowns();
                                }}
                              >
                                {subItem.label}
                              </Link>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className={`block px-4 py-3.5 text-base font-medium transition-all duration-200
                      ${pathname === item.href ? 'text-cnbd-red' : 'text-gray-800 hover:text-cnbd-red'}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
} 