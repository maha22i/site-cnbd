'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '../../i18n/navigation';
import { useState, useTransition, useRef, useEffect } from 'react';
import Image from 'next/image';
import { GlobeAltIcon } from '@heroicons/react/24/outline';

type Locale = 'fr' | 'en';

const FLAGS = {
  fr: {
    src: '/france.png',
    alt: 'Drapeau français',
  },
  en: {
    src: '/anglais.png',
    alt: 'Drapeau anglais',
  },
} as const;

export default function LanguageToggle() {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener('mousedown', handleClick);
    } else {
      document.removeEventListener('mousedown', handleClick);
    }
    return () => document.removeEventListener('mousedown', handleClick);
  }, [isOpen]);

  const handleLocaleChange = (newLocale: Locale) => {
    if (newLocale !== locale) {
      startTransition(() => {
        router.replace(pathname, { locale: newLocale });
        setIsOpen(false);
      });
    }
  };

  // Only show the other language in the dropdown
  const otherLocale: Locale = locale === 'fr' ? 'en' : 'fr';

  return (
    <div ref={ref} className="relative flex items-center ml-2">
      <div className="relative">
        <button
          type="button"
          aria-label={locale === 'fr' ? 'Changer la langue en anglais' : 'Changer la langue en français'}
          className={`
            flex items-center justify-center
            w-9 h-9 rounded-full
            border border-gray-200 bg-white shadow-sm
            hover:shadow-md hover:border-gray-300
            transition-all duration-200
            focus:outline-none focus:ring-2 focus:ring-cnbd-red/40
            ${isPending ? 'opacity-60 cursor-not-allowed' : ''}
          `}
          onClick={() => setIsOpen((v) => !v)}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          disabled={isPending}
        >
          {/* Globe icon in background */}
          <span className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <GlobeAltIcon className="w-5 h-5 text-gray-300 opacity-60" />
          </span>
          {/* Flag in foreground */}
          <span className="relative z-10">
            <Image
              src={FLAGS[locale].src}
              alt={FLAGS[locale].alt}
              width={28}
              height={20}
              className="rounded-sm object-cover"
              priority
            />
          </span>
        </button>
        {/* Tooltip */}
        {showTooltip && !isOpen && (
          <div className="absolute left-1/2 -translate-x-1/2 top-11 px-3 py-1.5 rounded-md bg-black/90 text-white text-xs shadow-lg whitespace-nowrap z-50 animate-fade-in">
            Changer la langue
          </div>
        )}
      </div>
      {/* Dropdown */}
      <div
        className={`
          absolute right-0 mt-2 min-w-[44px]
          bg-white border border-gray-100 rounded-lg shadow-lg
          transition-all duration-200 z-50
          ${isOpen ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'}
        `}
        style={{boxShadow: '0 4px 24px 0 rgba(0,0,0,0.08)'}}
      >
        <button
          type="button"
          aria-label={otherLocale === 'fr' ? 'Passer en français' : 'Switch to English'}
          onClick={() => handleLocaleChange(otherLocale)}
          disabled={isPending}
          className={`
            flex items-center justify-center w-full px-3 py-2
            bg-transparent hover:bg-gray-50 rounded-lg
            transition-colors duration-150
            focus:outline-none focus:ring-2 focus:ring-cnbd-red/40
            ${isPending ? 'opacity-60 cursor-not-allowed' : ''}
          `}
        >
          <Image
            src={FLAGS[otherLocale].src}
            alt={FLAGS[otherLocale].alt}
            width={28}
            height={20}
            className="rounded-sm object-cover"
            priority
          />
        </button>
      </div>
    </div>
  );
} 