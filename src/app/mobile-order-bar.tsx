import { Car, Phone, ShoppingBag } from 'lucide-react'

export default function MobileOrderBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 gap-2 border-t border-red-950/10 bg-white/95 p-3 shadow-[0_-8px_30px_rgba(69,10,10,0.12)] backdrop-blur md:hidden">
      <a href="tel:16187409060" className="inline-flex items-center justify-center gap-1.5 rounded-full border border-red-900/25 px-3 py-3 text-xs font-bold text-red-950">
        <Phone className="h-4 w-4" aria-hidden="true" /> Call
      </a>
      <a href="https://redbrick-coffee-deli.square.site" className="inline-flex items-center justify-center gap-1.5 rounded-full bg-red-900 px-3 py-3 text-xs font-bold text-white shadow-sm">
        <ShoppingBag className="h-4 w-4" aria-hidden="true" /> Pickup
      </a>
      <a href="https://www.doordash.com/store/red-brick-coffee-&-deli-salem-44802063/109386948/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-1.5 rounded-full border border-red-900/25 px-3 py-3 text-xs font-bold text-red-950">
        <Car className="h-4 w-4 text-red-800" aria-hidden="true" /> Delivery
      </a>
    </div>
  )
}
