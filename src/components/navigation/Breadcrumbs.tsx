"use client";
import { Link } from "../../i18n/navigation";
import { usePathname } from "../../i18n/navigation";
import { HomeIcon } from "@heroicons/react/24/solid";
import { useTranslations } from "next-intl";

export default function Breadcrumbs() {
  const t = useTranslations();
  const pathname = usePathname();
  const segments = pathname ? pathname.split("/").filter(Boolean) : [];
  let path = "";

  // Convert segment to translation key
  const getTranslatedSegment = (segment: string) => {
    // Skip locale segment (first segment)
    if (segments.indexOf(segment) === 0 && (segment === 'fr' || segment === 'en')) {
      return '';
    }
    
    // Handle special cases
    if (segment === 'recrutement' || segment === 'recruitment') {
      return t('navigation.recruitment');
    }
    if (segment === 'contact') {
      return t('navigation.contact');
    }
    if (segment === 'solutions') {
      return t('navigation.solutions');
    }
    if (segment === 'services') {
      return t('navigation.services');
    }
    if (segment === 'ged-digitalisation') {
      return t('solutions.ged');
    }
    if (segment === 'infogerance') {
      return t('solutions.infogerance');
    }
    if (segment === 'telephonie') {
      return t('solutions.telephonie');
    }
    if (segment === 'informatique') {
      return t('solutions.informatique');
    }
    if (segment === 'bureautique') {
      return t('solutions.bureautique');
    }
    
    // Default: capitalize and format with spaces
    return segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ');
  };

  return (
    <nav
      className="w-full py-4 px-6 bg-white/70 backdrop-blur-md rounded-xl shadow-inner flex items-center gap-2 text-base font-medium text-gray-700 mb-8 border border-gray-100"
      aria-label="Breadcrumbs"
    >
      <Link href="/" className="flex items-center gap-1 text-cnbd-red hover:text-cnbd-black transition-colors">
        <HomeIcon className="w-5 h-5" />
      </Link>
      {segments.length > 0 && (
        <span className="mx-1 text-gray-400">›</span>
      )}
      {segments.map((seg, i) => {
        // Skip locale segment in breadcrumbs display
        if (i === 0 && (seg === 'fr' || seg === 'en')) {
          path += "/" + seg;
          return null;
        }
        
        path += "/" + seg;
        const isLast = i === segments.length - 1;
        const translatedSegment = getTranslatedSegment(seg);
        
        // Skip empty segments
        if (!translatedSegment) return null;
        
        return (
          <div key={path} className="flex items-center gap-1">
            {!isLast ? (
              <Link
                href={path}
                className="text-cnbd-red hover:text-cnbd-black transition-colors underline underline-offset-4 decoration-cnbd-red/40 hover:decoration-cnbd-red"
              >
                {translatedSegment}
              </Link>
            ) : (
              <span className="text-cnbd-black font-semibold">{translatedSegment}</span>
            )}
            {!isLast && <span className="mx-1 text-gray-400">›</span>}
          </div>
        );
      })}
    </nav>
  );
} 