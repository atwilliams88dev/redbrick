'use client'

import Image from 'next/image'

export default function FoodMenu() {
  return (
    <div id="menu" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <p className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Just looking for a menu?
          </p>
          <p className="mt-6 text-lg/8 text-gray-600">
            Take a look and don&apos;t hesitate to ask our friendly staff any questions
          </p>
        </div>
      </div>

      <div className="relative overflow-hidden pt-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Image
            src="/menu.png"           // Use absolute path from /public
            alt="Menu screenshot"
            width={2432}              // Original image width
            height={1442}             // Original image height
            className="rounded-xl shadow-2xl ring-1 ring-gray-900/10"
            priority                  // Optional: preload menu for faster LCP
          />
        </div>
      </div>
    </div>
  )
}