'use client'

import Image from 'next/image'

export default function Hero() {
  return (
    <main
      id="hero"
      className="bg-white rounded-lg lg:w-11/12 lg:mx-auto border-0 lg:border-2 border-red-900 shadow-lg animate-slideDown"
    >
      <section className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20">

          {/* LEFT CONTENT */}
          <div>
            <h1 className="py-4 lg:py-0 text-5xl lg:text-6xl font-bold tracking-tight text-red-900 font-serif">
              Coffee Drinks<br /> Deli Classics <br />& Pizza
            </h1>

            <p className="mt-6 text-lg text-gray-700 max-w-xl font-sans">
              Welcome to Redbrick Coffee & Deli — a warm, comfortable place to enjoy
              handcrafted coffee drinks, fresh deli sandwiches, salads, and pizza.
            </p>

            <div className="mt-8 flex gap-4">
              <a
                href="https://redbrick-coffee-deli.square.site"
                className="inline-flex items-center rounded-md bg-red-900 px-6 py-3 text-base font-semibold text-white shadow hover:bg-red-800 transition"
              >
                Order Online
              </a>

              <a
                href="https://www.google.com/maps/dir/?api=1&destination=100+N+Washington+St,+Salem,+IL+62881"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-md border border-red-900 px-6 py-3 text-base font-semibold text-red-900 hover:bg-red-50 transition"
              >
                Directions
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            {/* Interior (Main Image) */}
            <Image
              src="/interior.png"
              alt="Interior of coffee shop"
              className="rounded-2xl shadow-xl object-cover"
              width={800}      // Adjust these to your design
              height={420}     // Adjust height to maintain aspect ratio
              priority         // Optional: preloads hero image for faster LCP
            />

            {/* Exterior (Overlay Card) */}
            <Image
              src="/outside_sign.png"
              alt="Exterior of coffee shop"
              className="absolute -bottom-6 -right-6 rounded-xl shadow-lg border-4 border-white"
              width={300}     // Adjust relative size
              height={200}
              priority         // Optional: important hero visual
            />
          </div>

        </div>
      </section>
    </main>
  )
}