import Script from 'next/script';
import React from 'react';

export const GoogleAnalytics = ({ id }: { id: string }) => {
    return (
        <>
            <Script
                strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?id=${id}`}
            />
            <Script
                id="google-analytics"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${id}', {
              page_path: window.location.pathname,
              cookie_flags: 'SameSite=None;Secure',
            });
          `,
                }}
            />
        </>
    );
};

export const FacebookPixel = ({ id }: { id: string }) => {
    return (
        <Script
            id="facebook-pixel"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
                __html: `
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${id}');
          fbq('track', 'PageView');
        `,
            }}
        />
    );
};

export const StructuredData = () => {
    // Event schema for the workshop
    const eventSchema = {
        '@context': 'https://schema.org',
        '@type': 'EducationEvent',
        name: 'O Poder da Terceira Linha',
        description: 'Aprenda, em detalhes, a estratégia alternativa, pouca explorada do mercado cripto, e que dá ganhos diários entre US$3 a US$25/dia a cada 1.000 dólares investidos.',
        startDate: '2024-05-29T19:00:00-03:00',
        endDate: '2024-05-29T22:00:00-03:00',
        eventStatus: 'https://schema.org/EventScheduled',
        eventAttendanceMode: 'https://schema.org/OnlineEventAttendanceMode',
        location: {
            '@type': 'VirtualLocation',
            url: 'https://workshop.leohermoso.com.br/',
        },
        organizer: {
            '@type': 'Person',
            name: 'Léo Hermoso',
            url: 'https://leohermoso.com.br',
        },
        offers: {
            '@type': 'Offer',
            price: '97',
            priceCurrency: 'BRL',
            availability: 'https://schema.org/InStock',
            validFrom: '2024-04-01T00:00:00-03:00',
            url: 'https://workshop.leohermoso.com.br/#form',
        },
        performer: {
            '@type': 'Person',
            name: 'Léo Hermoso',
        },
    };

    return (
        <Script
            id="structured-data"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }}
        />
    );
}; 