'use client'

export default function Header() {
  return (
    <header>

      {/* ADDRESS BAR */}
      <div className="hidden sm:flex fixed top-0 left-0 w-full z-50 justify-center bg-red-900 text-white text-xs sm:text-sm py-1 font-sans">
        <a
          href="https://maps.google.com/?q=100+N+Washington+St,+Salem,+IL+62881"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          100 N Washington St, Salem, IL 62881
        </a>
      </div>

      {/* MAIN NAV */}
      <nav className="fixed top-0 sm:top-5 left-0 w-full bg-white border-b-2 border-red-900 text-red-900 z-40 shadow-sm">
        
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">

          {/* LOGO */}
          <a href="#" className="flex items-center shrink-0">
            <img
              src="./redbricknobg.png"
              className="h-12 sm:h-16 w-auto"
              alt="Redbrick Coffee & Deli"
            />
          </a>

          {/* HOURS (hidden on small screens, right aligned on md+) */}
          <div className="md:flex flex-col text-right text-gray-700 text-sm font-sans font-bold leading-tight ml-auto mr-6">
            <div><span>Mon–Thu: 7:00am–3:00pm</span></div>
            <div><span>Fri & Sat: 7:00am–7:00pm</span></div>
          </div>

          {/* ORDER BUTTON */}
          <a
            href="https://redbrick-coffee-deli.square.site"
            className="rounded-md bg-red-900 px-4 sm:px-5 py-2 text-sm font-semibold text-white shadow hover:bg-red-800 transition whitespace-nowrap"
          >
            Order
          </a>
        </div>
      </nav>
    </header>
  )
}