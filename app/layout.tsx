// import './globals.css';
// import type { Metadata } from 'next';
// import { Inter } from 'next/font/google';
// import Navbar from '@/components/Navbar';
// import Footer from '@/components/Footer';

// const inter = Inter({ subsets: ['latin'] });

// export const metadata: Metadata = {
//   title: 'Ayodhya Super Kings - Rise. Serve. Conquer.',
//   description: 'Official website of Ayodhya Super Kings volleyball team from the historic city of Ayodhya',
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>
//         <Navbar />
//         {children}
//         <Footer />
//       </body>
//     </html>
//   );
// }


// app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ayodhya Super Kings – Pride of Ayodhya | Volleyball Team in UPPVL',
  description:
    'Representing the spiritual city of Ayodhya, Ayodhya Super Kings are set to rule the court in UPPVL 2025. Explore their powerful gameplay, iconic players, and culturally rooted energy that fuses tradition with fierce volleyball action.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        {/* ✅ JSON-LD SCHEMA GOES HERE */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SportsTeam",
              "name": "Ayodhya Super Kings",
              "sport": "Volleyball",
              "url": "https://ayodhyasuperkings.com",
              "alternateName": "ASK | Ayodhya Volleyball Team",
              "description":
                "Ayodhya Super Kings is the official volleyball team representing Ayodhya in the Uttar Pradesh Pro Volleyball League (UPPVL). Follow the team for match schedules, player rosters, ticket bookings, merchandise, and all latest updates from UPPVL 2025.",
              "foundingDate": "2025",
              "memberOf": {
                "@type": "SportsOrganization",
                "name": "Uttar Pradesh Pro Volleyball League",
                "url": "https://www.uppvlofficial.com"
              },
              "location": {
                "@type": "Place",
                "name": "Ayodhya",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Ayodhya",
                  "addressRegion": "Uttar Pradesh",
                  "postalCode": "224123",
                  "addressCountry": "IN"
                }
              },
              "logo": "https://ayodhyasuperkings.com/assets/logo.png",
              "image": "https://ayodhyasuperkings.com/assets/team-banner.jpg",
              "sameAs": [
                "https://www.instagram.com/ayodhyasuperkings",
                "https://www.facebook.com/ayodhyasuperkings",
                "https://twitter.com/ayodhyakings"
              ],
              "coach": {
                "@type": "Person",
                "name": "Rahul Tripathi",
                "jobTitle": "Head Coach"
              },
              "athlete": [
                {
                  "@type": "Person",
                  "name": "Muthusamy Appavu",
                  "url": "https://ayodhyasuperkings.com/players/muthusamy-appavu",
                  "position": "Setter"
                },
                {
                  "@type": "Person",
                  "name": "Amit Gulia",
                  "url": "https://ayodhyasuperkings.com/players/amit-gulia",
                  "position": "Attacker"
                }
              ],
              "event": [
                {
                  "@type": "SportsEvent",
                  "name": "UPPVL 2025 Opening Match – Ayodhya Super Kings vs Lucknow Tigers",
                  "startDate": "2025-08-07T15:30:00+05:30",
                  "endDate": "2025-08-07T17:00:00+05:30",
                  "location": {
                    "@type": "Place",
                    "name": "Shaheed Vijay Singh Pathik Sports Complex",
                    "address": {
                      "@type": "PostalAddress",
                      "streetAddress": "Sector 12",
                      "addressLocality": "Greater Noida",
                      "addressRegion": "Uttar Pradesh",
                      "postalCode": "201310",
                      "addressCountry": "IN"
                    }
                  },
                  "performer": {
                    "@type": "SportsTeam",
                    "name": "Ayodhya Super Kings"
                  },
                  "awayTeam": {
                    "@type": "SportsTeam",
                    "name": "Lucknow Tigers"
                  }
                }
              ],
              "hasPart": [
                {
                  "@type": "WebPage",
                  "name": "Team Roster",
                  "url": "https://ayodhyasuperkings.com/players"
                },
                {
                  "@type": "WebPage",
                  "name": "Match Schedule",
                  "url": "https://ayodhyasuperkings.com/schedule"
                },
                {
                  "@type": "WebPage",
                  "name": "Buy Tickets",
                  "url": "https://ayodhyasuperkings.com/tickets"
                },
                {
                  "@type": "WebPage",
                  "name": "Official Merchandise",
                  "url": "https://ayodhyasuperkings.com/store"
                },
                {
                  "@type": "WebPage",
                  "name": "Contact Us",
                  "url": "https://ayodhyasuperkings.com/contact"
                }
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-9876543210",
                "contactType": "Customer Support",
                "areaServed": "IN",
                "availableLanguage": ["English", "Hindi"]
              },
              "sponsor": {
                "@type": "Organization",
                "name": "XYZ Beverages Pvt. Ltd.",
                "url": "https://xyzbeverages.com"
              }
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
