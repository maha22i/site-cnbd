import Script from 'next/script';

interface SchemaMarkupProps {
  type: 'organization' | 'localBusiness' | 'service' | 'article' | 'product' | 'faq';
  data?: any;
  locale?: string;
}

export default function SchemaMarkup({ type, data = {}, locale = 'fr' }: SchemaMarkupProps) {
  const baseUrl = 'https://cnbd.fr';
  
  const getSchemaData = () => {
    const commonData = {
      "@context": "https://schema.org",
      "@type": getSchemaType(),
      "name": "CNBD",
      "url": baseUrl,
      "logo": `${baseUrl}/logo-cnbd.png`,
      "image": `${baseUrl}/logo-cnbd.png`,
      "description": locale === 'fr' 
        ? "CNBD : Votre partenaire expert en solutions informatiques, bureautiques et téléphonie pour entreprises."
        : "CNBD: Your expert partner in IT, office and telephony solutions for businesses.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "64, allée de la main ferme",
        "addressLocality": "Les Pavillons sous Bois",
        "postalCode": "93320",
        "addressRegion": "Île-de-France",
        "addressCountry": "FR"
      },
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+33-1-43-62-16-03",
          "contactType": "customer service",
          "areaServed": "FR",
          "availableLanguage": ["French", "English"],
          "hoursAvailable": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "09:00",
            "closes": "18:00"
          }
        },
        {
          "@type": "ContactPoint",
          "telephone": "+33-6-67-36-02-80",
          "contactType": "emergency",
          "areaServed": "FR",
          "availableLanguage": ["French", "English"]
        }
      ],
      "sameAs": [
        "https://www.linkedin.com/company/cnbd",
        "https://www.facebook.com/cnbd"
      ]
    };

    switch (type) {
      case 'organization':
        return {
          ...commonData,
          "@type": "Organization",
          "foundingDate": "2009",
          "numberOfEmployees": "10-50",
          "industry": "Information Technology",
          "serviceArea": {
            "@type": "Place",
            "name": "Île-de-France, France"
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Services Informatiques CNBD",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Solutions Informatiques",
                  "description": "Distribution, installation et maintenance d'équipements informatiques"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Téléphonie d'Entreprise",
                  "description": "Solutions VoIP et communication unifiée"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Infogérance",
                  "description": "Gestion externalisée de systèmes d'information"
                }
              }
            ]
          },
          ...data
        };

      case 'localBusiness':
        return {
          ...commonData,
          "@type": "LocalBusiness",
          "priceRange": "€€€",
          "currenciesAccepted": "EUR",
          "paymentAccepted": "Cash, Credit Card, Bank Transfer",
          "openingHours": "Mo-Fr 09:00-18:00",
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "48.9100",
            "longitude": "2.5000"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "reviewCount": "127",
            "bestRating": "5",
            "worstRating": "1"
          },
          ...data
        };

      case 'service':
        return {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": data.name || "Solutions Informatiques CNBD",
          "description": data.description || "Services informatiques professionnels pour entreprises",
          "provider": {
            "@type": "Organization",
            "name": "CNBD",
            "url": baseUrl
          },
          "areaServed": {
            "@type": "Place",
            "name": "Île-de-France, France"
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": data.name || "Service CNBD",
            "itemListElement": data.offers || []
          },
          "category": "Information Technology Services",
          ...data
        };

      case 'article':
        return {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": data.title,
          "description": data.description,
          "author": {
            "@type": "Organization",
            "name": "CNBD"
          },
          "publisher": {
            "@type": "Organization",
            "name": "CNBD",
            "logo": {
              "@type": "ImageObject",
              "url": `${baseUrl}/logo-cnbd.png`
            }
          },
          "datePublished": data.datePublished || new Date().toISOString(),
          "dateModified": data.dateModified || new Date().toISOString(),
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": data.url || baseUrl
          },
          ...data
        };

      case 'faq':
        return {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": data.questions?.map((q: any) => ({
            "@type": "Question",
            "name": q.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": q.answer
            }
          })) || [],
          ...data
        };

      case 'product':
        return {
          "@context": "https://schema.org",
          "@type": "Product",
          "name": data.name,
          "description": data.description,
          "brand": {
            "@type": "Brand",
            "name": data.brand || "CNBD"
          },
          "manufacturer": {
            "@type": "Organization",
            "name": data.manufacturer || "CNBD"
          },
          "offers": {
            "@type": "Offer",
            "price": data.price,
            "priceCurrency": "EUR",
            "availability": "https://schema.org/InStock",
            "seller": {
              "@type": "Organization",
              "name": "CNBD"
            }
          },
          ...data
        };

      default:
        return commonData;
    }
  };

  const getSchemaType = () => {
    switch (type) {
      case 'organization': return 'Organization';
      case 'localBusiness': return 'LocalBusiness';
      case 'service': return 'Service';
      case 'article': return 'Article';
      case 'product': return 'Product';
      case 'faq': return 'FAQPage';
      default: return 'Organization';
    }
  };

  const schemaData = getSchemaData();

  return (
    <Script
      id={`schema-${type}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schemaData, null, 2)
      }}
    />
  );
}

// Composants prédéfinis pour les pages courantes
export function OrganizationSchema({ locale = 'fr' }: { locale?: string }) {
  return <SchemaMarkup type="organization" locale={locale} />;
}

export function LocalBusinessSchema({ locale = 'fr' }: { locale?: string }) {
  return <SchemaMarkup type="localBusiness" locale={locale} />;
}

export function ServiceSchema({ 
  serviceName, 
  description, 
  locale = 'fr' 
}: { 
  serviceName: string; 
  description: string; 
  locale?: string; 
}) {
  const serviceData = {
    name: serviceName,
    description: description,
    offers: [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": serviceName,
          "description": description
        }
      }
    ]
  };

  return <SchemaMarkup type="service" data={serviceData} locale={locale} />;
}

export function FAQSchema({ 
  questions, 
  locale = 'fr' 
}: { 
  questions: Array<{question: string, answer: string}>; 
  locale?: string; 
}) {
  return <SchemaMarkup type="faq" data={{ questions }} locale={locale} />;
} 