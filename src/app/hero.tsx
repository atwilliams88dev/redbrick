import Image from 'next/image'
import { ArrowRight, Car, Clock3, MapPin, Phone, ShoppingBag, Star } from 'lucide-react'
import { DIRECTIONS_URL, DOORDASH_URL, PHONE_DISPLAY, PHONE_HREF, SQUARE_URL } from './site-data'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-[#f4eadc]"
    >
      <div className="absolute -left-32 top-12 h-72 w-72 rounded-full bg-red-900/5" aria-hidden="true" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-[0.92fr_1.08fr] lg:px-8 lg:py-24">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-red-900/15 bg-white/70 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-red-900">
              <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" aria-hidden="true" />
              Locally owned in downtown Salem
            </div>
            <h1 className="mt-6 max-w-2xl font-serif text-5xl font-bold leading-[0.98] tracking-tight text-red-950 sm:text-6xl lg:text-7xl">
              Coffee, deli favorites &amp; pizza—made for Salem.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-stone-700">
              Start with a handcrafted latte, grab a fresh sandwich for lunch, or bring home pizza for the whole family. Order ahead for easy pickup or call us and we’ll take care of the rest.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={SQUARE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-red-900 px-7 py-4 text-base font-bold text-white shadow-lg shadow-red-950/15 transition hover:-translate-y-0.5 hover:bg-red-800"
              >
                <ShoppingBag className="h-5 w-5" aria-hidden="true" />
                Order pickup online
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href={DOORDASH_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-full border-2 border-red-900 bg-white/60 px-7 py-4 text-base font-bold text-red-950 transition hover:bg-white"
              >
                <Car className="h-5 w-5" aria-hidden="true" />
                Order delivery
              </a>
            </div>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-stone-600">
              <span className="flex items-center gap-2"><Clock3 className="h-4 w-4 text-red-800" aria-hidden="true" /> Fast, convenient pickup</span>
              <a
                href={PHONE_HREF}
                className="flex items-center gap-2 transition hover:text-red-800"
              >
                <Phone className="h-4 w-4 text-red-800" aria-hidden="true" /> Call in an order: {PHONE_DISPLAY}
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-2xl lg:mx-0">
            <div className="relative aspect-[5/4] overflow-hidden rounded-[2rem] bg-red-950 shadow-2xl shadow-red-950/20">
              <Image
                src="/norms.jpeg"
                alt="Redbrick chicken, bacon and ranch sandwich served with seasoned chips"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 55vw"
                priority
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-red-950/85 to-transparent p-6 pt-24 text-white">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-red-100">A local favorite</p>
                <p className="mt-1 font-serif text-3xl font-bold">Norm’s Melt</p>
              </div>
            </div>
            <div className="absolute -bottom-7 -left-3 rounded-2xl border-4 border-[#f4eadc] bg-white p-3 shadow-xl sm:-left-8 sm:w-52">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-red-700">Lunch special</p>
              <p className="mt-1 font-serif text-3xl font-bold text-red-950">$10</p>
              <p className="hidden text-xs leading-5 text-stone-600 sm:block">Sandwich, chips, house-made dip &amp; pickle</p>
            </div>
            <Image
              src="/interior.png"
              alt="Inside Redbrick Coffee and Deli in downtown Salem"
              className="absolute -right-3 -top-6 hidden h-36 w-48 rounded-2xl border-4 border-[#f4eadc] object-cover shadow-xl sm:block"
              width={320}
              height={240}
            />
          </div>
      </div>
      <div className="mx-auto flex max-w-7xl flex-col gap-3 border-t border-red-900/10 px-6 py-5 text-sm text-stone-600 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <p><strong className="text-red-950">Coffee &amp; drinks:</strong> Mon–Thu until 5pm · Fri until 8pm · Sat until 3pm</p>
        <a href={DIRECTIONS_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-bold text-red-900 hover:text-red-700">
          <MapPin className="h-4 w-4" aria-hidden="true" /> Get directions
        </a>
      </div>
    </section>
  )
}
