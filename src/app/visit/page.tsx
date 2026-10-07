import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Car, MapPin, Phone, ShoppingBag } from 'lucide-react'
import { WeeklyHours } from '../business-hours'
import Footer from '../footer'
import Header from '../header'
import MobileOrderBar from '../mobile-order-bar'
import Visit from '../visit'
import { DIRECTIONS_URL, DOORDASH_URL, PHONE_DISPLAY, PHONE_HREF, SITE_URL, SQUARE_URL } from '../site-data'

export const metadata: Metadata = {
  title: { absolute: 'Visit Redbrick Coffee & Deli | Downtown Salem, IL' },
  description: 'Find Redbrick at 100 N Washington St in Salem, IL. See café and kitchen hours, get directions, call ahead, or order pickup and delivery.',
  alternates: { canonical: '/visit' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Redbrick Coffee & Deli',
    title: 'Visit Redbrick Coffee & Deli | Downtown Salem, IL',
    description: 'Find hours, directions, pickup, delivery, and call-in ordering for Redbrick Coffee & Deli in Salem.',
    url: '/visit',
    images: [{ url: '/storefront-polished.png', width: 1536, height: 1024, alt: 'Redbrick Coffee & Deli exterior in downtown Salem, Illinois' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Visit Redbrick Coffee & Deli | Salem, IL',
    description: 'Hours, directions, pickup, delivery, and call-in ordering in downtown Salem.',
    images: ['/storefront-polished.png'],
  },
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Visit', item: `${SITE_URL}/visit` },
  ],
}

export default function VisitPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f8f3eb] pb-20 text-stone-900 md:pb-0">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Header />
      <main>
        <section className="bg-[#f4eadc] px-6 py-14 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <nav aria-label="Breadcrumb" className="text-sm font-semibold text-stone-600"><Link href="/" className="hover:text-red-900">Home</Link> <span aria-hidden="true">/</span> Visit</nav>
            <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_0.65fr] lg:items-end">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-700">Downtown Salem, Illinois</p>
                <h1 className="mt-3 max-w-3xl font-serif text-5xl font-bold tracking-tight text-red-950 sm:text-6xl">Coffee, lunch, and a warm welcome at the corner.</h1>
              </div>
              <p className="text-lg leading-8 text-stone-600">Stop in at 100 N Washington Street, order ahead for pickup, call in your favorites, or have DoorDash bring Redbrick to you.</p>
            </div>
          </div>
        </section>

        <Visit />

        <section className="bg-[#f8f3eb] px-6 py-20 lg:px-8 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <WeeklyHours />
            <div className="rounded-3xl border border-red-900/15 bg-white p-7 shadow-sm sm:p-8">
              <MapPin className="h-8 w-8 text-red-800" aria-hidden="true" />
              <h2 className="mt-5 font-serif text-3xl font-bold text-red-950">Plan your stop</h2>
              <p className="mt-4 leading-7 text-stone-600">We’re in the historic red-brick building at Washington and Main, with convenient downtown access and patio seating.</p>
              <div className="mt-7 grid gap-3">
                <a href={DIRECTIONS_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-red-900 px-6 py-3.5 font-bold text-white hover:bg-red-800">Get directions <ArrowRight className="h-4 w-4" aria-hidden="true" /></a>
                <a href={PHONE_HREF} className="inline-flex items-center justify-center gap-2 rounded-full border border-red-900/20 px-6 py-3.5 font-bold text-red-950 hover:bg-red-50"><Phone className="h-4 w-4" aria-hidden="true" /> Call {PHONE_DISPLAY}</a>
              </div>
              <div className="mt-8 border-t border-red-900/10 pt-7">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-red-700">Can’t stay?</p>
                <div className="mt-4 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                  <a href={SQUARE_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 font-bold text-red-900 hover:text-red-700"><ShoppingBag className="h-4 w-4" aria-hidden="true" /> Order pickup</a>
                  <a href={DOORDASH_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 font-bold text-red-900 hover:text-red-700"><Car className="h-4 w-4" aria-hidden="true" /> Order delivery</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MobileOrderBar />
    </div>
  )
}
