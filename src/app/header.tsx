import Image from 'next/image'
import Link from 'next/link'
import { Car, Phone, ShoppingBag } from 'lucide-react'
import { TodayHours } from './business-hours'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-red-950/10 bg-white/95 shadow-sm backdrop-blur">
      <div className="hidden justify-center bg-red-950 py-1.5 text-xs font-medium text-red-50 sm:flex">
        <a
          href="https://maps.google.com/?q=100+N+Washington+St,+Salem,+IL+62881"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Downtown Salem · 100 N Washington St, Salem, IL
        </a>
      </div>
      <nav aria-label="Main navigation">
        <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-2.5 sm:px-6 lg:px-8">
          <Link href="/" className="flex shrink-0 items-center gap-3" aria-label="Redbrick Coffee and Deli home">
            <Image
              src="/redbricknobg.png"
              className="h-12 w-12 rounded-full object-cover sm:h-14 sm:w-14"
              alt="Redbrick Coffee & Deli"
              width={56}
              height={56}
              priority
            />
            <span className="hidden leading-none xl:block">
              <span className="block font-serif text-lg font-bold text-red-950">Redbrick</span>
              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-stone-500">Coffee &amp; Deli</span>
            </span>
          </Link>

          <div className="hidden items-center gap-6 text-sm font-bold text-stone-700 lg:flex">
            <Link href="/#specials" className="transition hover:text-red-800">Popular picks</Link>
            <Link href="/menu" className="transition hover:text-red-800">Menu</Link>
            <Link href="/#reviews" className="transition hover:text-red-800">Reviews</Link>
            <Link href="/visit" className="transition hover:text-red-800">Visit &amp; hours</Link>
          </div>

          <div className="ml-auto hidden md:block">
            <TodayHours />
          </div>

          <div className="ml-auto flex items-center gap-2 md:ml-0">
            <a
              className="hidden items-center gap-2 rounded-full border border-red-900/20 px-4 py-2.5 text-sm font-bold text-red-950 transition hover:bg-red-50 2xl:flex"
              href="tel:16187409060"
              aria-label="Call Redbrick Coffee and Deli at 618-740-9060"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              <span>Call to order</span>
            </a>
            <a
              href="https://redbrick-coffee-deli.square.site"
              className="inline-flex items-center gap-2 rounded-full bg-red-900 px-4 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-red-800 sm:px-5"
            >
              <ShoppingBag className="h-4 w-4" aria-hidden="true" />
              <span className="hidden sm:inline">Order pickup</span>
              <span className="sm:hidden">Pickup</span>
            </a>
            <a
              href="https://www.doordash.com/store/red-brick-coffee-&-deli-salem-44802063/109386948/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-red-900/25 bg-white px-3.5 py-2.5 text-sm font-bold text-red-950 transition hover:bg-red-50 sm:px-5"
            >
              <Car className="h-4 w-4 text-red-800" aria-hidden="true" />
              <span className="hidden sm:inline">Order delivery</span>
              <span className="sm:hidden">Delivery</span>
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}
