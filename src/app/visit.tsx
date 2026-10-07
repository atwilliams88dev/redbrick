import Image from 'next/image'
import { ArrowRight, MapPin, Phone } from 'lucide-react'

export default function Visit() {
  return (
    <section id="visit" className="bg-white px-6 py-20 lg:px-8 lg:py-28" aria-labelledby="visit-heading">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-700">Meet us at the corner</p>
          <h2 id="visit-heading" className="mt-2 font-serif text-4xl font-bold tracking-tight text-red-950 sm:text-5xl">Your downtown Salem coffee &amp; lunch stop.</h2>
        </div>

        <div className="grid items-center gap-0 lg:grid-cols-[1.45fr_0.7fr]">
          <div className="relative aspect-[3/2] overflow-hidden rounded-[2rem] bg-stone-100 shadow-2xl shadow-red-950/10">
            <Image
              src="/storefront-polished.png"
              alt="Redbrick Coffee and Deli exterior with sidewalk patio in downtown Salem, Illinois"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 70vw"
            />
          </div>

          <div className="relative z-10 mx-4 -mt-8 rounded-3xl bg-red-950 p-7 text-white shadow-2xl sm:mx-10 sm:p-9 lg:-ml-16 lg:mr-0 lg:mt-0">
            <MapPin className="h-8 w-8 text-amber-300" aria-hidden="true" />
            <h3 className="mt-5 font-serif text-3xl font-bold">Come sit awhile.</h3>
            <p className="mt-4 leading-7 text-red-100/80">Find us in the historic brick building at the corner of Washington and Main, with patio seating right outside.</p>
            <address className="mt-6 not-italic font-bold leading-7 text-white">
              100 N Washington St<br />
              Salem, IL 62881
            </address>
            <div className="mt-7 flex flex-col gap-3">
              <a href="https://www.google.com/maps/dir/?api=1&destination=100+N+Washington+St,+Salem,+IL+62881" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3.5 font-bold text-red-950 transition hover:bg-red-50">
                Get directions <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a href="tel:16187409060" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-5 py-3.5 font-bold text-white transition hover:bg-white/10">
                <Phone className="h-4 w-4" aria-hidden="true" /> Call (618) 740-9060
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
