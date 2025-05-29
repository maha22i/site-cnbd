'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '../../i18n/navigation';
import { useState, useTransition, useRef, useEffect } from 'react';
import Image from 'next/image';

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
        disabled={isPending}
      >
        <Image
          src={FLAGS[locale].src}
          alt={FLAGS[locale].alt}
          width={28}
          height={20}
          className="rounded-sm object-cover"
          priority
        />
      </button>
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