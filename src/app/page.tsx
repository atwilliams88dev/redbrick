import Header from "./header"
import Hero from "./hero"
import Footer from "./footer";
import FoodMenu from "./food";
import Team from "./team"
import MobileOrderBar from "./mobile-order-bar";
import Visit from "./visit";
import OrderOptions from "./order-options";

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': ['CafeOrCoffeeShop', 'Restaurant'],
  '@id': 'https://www.redbrick618.com/#business',
  name: 'Redbrick Coffee & Deli',
  url: 'https://www.redbrick618.com/',
  logo: 'https://www.redbrick618.com/redbricknobg.png',
  image: [
    'https://www.redbrick618.com/og.png',
    'https://www.redbrick618.com/storefront-polished.png',
    'https://www.redbrick618.com/interior.png',
    'https://www.redbrick618.com/norms.jpeg',
  ],
  telephone: '+1-618-740-9060',
  priceRange: '$',
  servesCuisine: ['Coffee', 'Sandwiches', 'Pizza', 'Salads', 'Breakfast'],
  address: {
    '@type': 'PostalAddress',
    streetAddress: '100 N Washington St',
    addressLocality: 'Salem',
    addressRegion: 'IL',
    postalCode: '62881',
    addressCountry: 'US',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
      opens: '07:00',
      closes: '17:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Friday',
      opens: '07:00',
      closes: '20:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '07:00',
      closes: '15:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Sunday',
      opens: '00:00',
      closes: '00:00',
    },
  ],
  menu: 'https://www.redbrick618.com/menu',
  hasMenu: 'https://www.redbrick618.com/menu',
  hasMap: 'https://www.google.com/maps/search/?api=1&query=Redbrick+Coffee+%26+Deli+Salem+IL',
  areaServed: {
    '@type': 'City',
    name: 'Salem, Illinois',
  },
  sameAs: [
    'https://www.facebook.com/profile.php?id=61579866657621',
    'https://www.instagram.com/redbrick618/',
  ],
  potentialAction: {
    '@type': 'OrderAction',
    target: 'https://redbrick-coffee-deli.square.site/',
  },
}

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://www.redbrick618.com/#website',
  url: 'https://www.redbrick618.com/',
  name: 'Redbrick Coffee & Deli',
  inLanguage: 'en-US',
  publisher: { '@id': 'https://www.redbrick618.com/#business' },
}

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f8f3eb] pb-20 text-stone-900 md:pb-0">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <Header/>
      <main>
        <Hero/>
        <OrderOptions />
        <FoodMenu/>
        <Visit/>
        <Team/>
      </main>
      <Footer/>
      <MobileOrderBar />
    </div>
  );
}
