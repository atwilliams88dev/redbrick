import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Car, Check, ShoppingBag } from 'lucide-react'
import Footer from '../footer'
import Header from '../header'
import MobileOrderBar from '../mobile-order-bar'
import { DOORDASH_URL, SITE_URL, SQUARE_URL } from '../site-data'

export const metadata: Metadata = {
  title: { absolute: 'Redbrick Menu | Coffee, Sandwiches & Pizza in Salem, IL' },
  description: 'Explore coffee, signature drinks, deli sandwiches, calzones, pizza, breakfast, sweets, and kids meals at Redbrick in Salem, IL.',
  alternates: { canonical: '/menu' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Redbrick Coffee & Deli',
    title: 'Redbrick Coffee & Deli Menu | Salem, IL',
    description: 'Coffee, signature drinks, sandwiches, pizza, breakfast, sweets, and family meals. Order pickup or delivery in Salem.',
    url: '/menu',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Redbrick Coffee & Deli in Salem, Illinois' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Redbrick Menu | Salem, IL',
    description: 'Coffee, signature drinks, deli sandwiches, pizza, breakfast, sweets, and family meals.',
    images: ['/og.png'],
  },
}

const drinkSections = [
  {
    title: 'Espresso & coffee',
    items: [
      ['Espresso', '$3'], ['Americano', '$3'], ['Cappuccino', '$5 / $8'], ['Latte', '$5 / $8'], ['Hot coffee', '$5'],
    ],
    note: 'Add a flavor for $1. Cold foam is available.',
  },
  {
    title: 'Signature drinks',
    items: [
      ['Red Brick Classic', '$6 / $9'], ['Morning Toast', '$6 / $9'], ['Campfire Mocha', '$6 / $9'],
    ],
    note: 'Available in 12 oz or 24 oz with your choice of milk and cold foam.',
  },
  {
    title: 'Cold, blended & more',
    items: [
      ['Smoothie', '$6.50'], ['Frappuccino', '$6.50'], ['Frozen hot chocolate', '$6.50'], ['Chai latte', '$5'], ['Italian soda', '$3'], ['Hot tea', '$2'], ['Iced tea', '$2+'], ['Coke / Diet Coke', '$2.50'],
    ],
    note: 'Smoothie flavors: strawberry-banana or mango. Frappuccino flavors: mocha, white chocolate, or caramel.',
  },
]

const foodSections = [
  {
    id: 'handhelds',
    title: 'Handhelds',
    items: [
      ['Norm’s Melt', 'Chicken, bacon, mozzarella, and ranch.'],
      ['Italian Stallion', 'Salami, pepperoni, ham, provolone, and creamy Italian.'],
      ['Grown Up Grilled Cheese', 'Cheddar, provolone, bacon, tomato, and pesto.'],
      ['Pizza Sub', 'Pepperoni, provolone, and marinara.'],
      ['BLT', 'Bacon, lettuce, tomato, and mayo.'],
    ],
    note: 'Make any sandwich a calzone for $2. Lunch special: any sandwich with chips, house-made French onion dip, and a pickle for $10; any calzone for $12.',
  },
  {
    id: 'pizza',
    title: 'Pizza — 8″ or 14″',
    items: [
      ['Cheese', '$8 / $12'], ['Pepperoni', '$8 / $12.50'], ['Sausage', '$8 / $12.50'], ['Red Brick Special', '$10 / $15'], ['Build your own', 'Starts at $8 / $10'],
    ],
    note: 'Red Brick Special: bacon, pepperoni, sausage, mushrooms, onions, and peppers. Add meat for $2 each or veggies for $1 each.',
  },
  {
    id: 'more',
    title: 'Breakfast, salads & sweets',
    items: [
      ['Red Brick Salad', '$5'], ['Chocolate croissant', '$4'], ['Egg bites (4)', '$4'], ['Egg sandwich', '$6'], ['Cookie', '$3'], ['Cannoli', '$3'], ['Graeter’s ice cream', '$6'], ['Kids meals', '$6'],
    ],
    note: 'Kids meals include chips and applesauce. Choose The Elliott cheese toastie, The Harrison PB&J, or The Margo salami and cheese.',
  },
]

const menuJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Menu',
  '@id': `${SITE_URL}/menu#menu`,
  name: 'Redbrick Coffee & Deli Menu',
  url: `${SITE_URL}/menu`,
  inLanguage: 'en-US',
  provider: { '@id': `${SITE_URL}/#business` },
  hasMenuSection: [
    ...drinkSections.map((section) => ({
      '@type': 'MenuSection',
      name: section.title,
      hasMenuItem: section.items.map(([name, price]) => ({ '@type': 'MenuItem', name, description: `Listed menu price: ${price}` })),
    })),
    ...foodSections.map((section) => ({
      '@type': 'MenuSection',
      name: section.title,
      hasMenuItem: section.items.map(([name, description]) => ({ '@type': 'MenuItem', name, description })),
    })),
  ],
}

export default function MenuPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f8f3eb] pb-20 text-stone-900 md:pb-0">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(menuJsonLd) }} />
      <Header />
      <main>
        <section className="bg-red-950 px-6 py-16 text-white lg:px-8 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.7fr] lg:items-center">
            <div>
              <nav aria-label="Breadcrumb" className="text-sm font-semibold text-red-200"><Link href="/" className="hover:text-white">Home</Link> <span aria-hidden="true">/</span> Menu</nav>
              <p className="mt-8 text-sm font-bold uppercase tracking-[0.2em] text-red-200">Coffee, lunch &amp; dinner in Salem</p>
              <h1 className="mt-3 max-w-3xl font-serif text-5xl font-bold tracking-tight sm:text-6xl">The Redbrick menu</h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-red-100/80">Handcrafted espresso drinks, satisfying deli favorites, pizza, breakfast, sweets, and family-friendly options—all in one place.</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={SQUARE_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 font-bold text-red-950 hover:bg-red-50"><ShoppingBag className="h-5 w-5" aria-hidden="true" /> Order pickup</a>
                <a href={DOORDASH_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-7 py-4 font-bold text-white hover:bg-white/10"><Car className="h-5 w-5" aria-hidden="true" /> Order delivery</a>
              </div>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/10 p-6">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-red-200">Good to know</p>
              <ul className="mt-5 space-y-4 text-sm font-semibold text-red-50">
                <li className="flex gap-3"><Check className="mt-0.5 h-5 w-5 shrink-0 text-amber-300" aria-hidden="true" /> Sandwich lunch special: $10</li>
                <li className="flex gap-3"><Check className="mt-0.5 h-5 w-5 shrink-0 text-amber-300" aria-hidden="true" /> Calzone lunch special: $12</li>
                <li className="flex gap-3"><Check className="mt-0.5 h-5 w-5 shrink-0 text-amber-300" aria-hidden="true" /> Family deal: two large pizzas and a salad for $30</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="drinks" className="px-6 py-20 lg:px-8" aria-labelledby="drinks-heading">
          <div className="mx-auto max-w-7xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-700">Start with a drink</p>
            <h2 id="drinks-heading" className="mt-2 font-serif text-4xl font-bold text-red-950 sm:text-5xl">Coffee &amp; drinks</h2>
            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {drinkSections.map((section) => (
                <section key={section.title} className="rounded-3xl border border-red-900/15 bg-white p-7 shadow-sm">
                  <h3 className="font-serif text-2xl font-bold text-red-950">{section.title}</h3>
                  <dl className="mt-6 divide-y divide-red-900/10">
                    {section.items.map(([name, price]) => <div key={name} className="flex items-baseline justify-between gap-5 py-3"><dt className="font-semibold text-stone-700">{name}</dt><dd className="shrink-0 font-bold text-red-900">{price}</dd></div>)}
                  </dl>
                  <p className="mt-5 text-sm leading-6 text-stone-500">{section.note}</p>
                </section>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-6 py-20 lg:px-8" aria-labelledby="food-heading">
          <div className="mx-auto max-w-7xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-700">Made for your day</p>
            <h2 id="food-heading" className="mt-2 font-serif text-4xl font-bold text-red-950 sm:text-5xl">Food</h2>
            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {foodSections.map((section) => (
                <section key={section.title} id={section.id} className="scroll-mt-32 rounded-3xl bg-[#fbf6ee] p-7 ring-1 ring-red-900/10">
                  <h3 className="font-serif text-2xl font-bold text-red-950">{section.title}</h3>
                  <div className="mt-6 space-y-5">
                    {section.items.map(([name, description]) => <div key={name}><h4 className="font-bold text-red-900">{name}</h4><p className="mt-1 text-sm leading-6 text-stone-600">{description}</p></div>)}
                  </div>
                  <p className="mt-7 border-t border-red-900/10 pt-5 text-sm font-semibold leading-6 text-stone-600">{section.note}</p>
                </section>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-20 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 overflow-hidden rounded-[2rem] bg-red-950 p-6 text-white sm:p-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-200">Prefer the printed menu?</p>
              <h2 className="mt-2 font-serif text-3xl font-bold sm:text-4xl">See everything at a glance.</h2>
              <a href="/menu_new.jpg" target="_blank" className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 font-bold text-red-950 hover:bg-red-50">Open the menu image <ArrowRight className="h-4 w-4" aria-hidden="true" /></a>
            </div>
            <a href="/menu_new.jpg" target="_blank" aria-label="Open the full Redbrick printed menu" className="block overflow-hidden rounded-2xl bg-white p-2 shadow-2xl">
              <Image src="/menu_new.jpg" alt="Complete Redbrick Coffee and Deli printed menu" width={1024} height={1536} className="h-auto w-full rounded-xl" sizes="(max-width: 1024px) 100vw, 60vw" />
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <MobileOrderBar />
    </div>
  )
}
