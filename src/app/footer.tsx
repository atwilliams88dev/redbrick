import { SVGProps } from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, ShoppingBag } from "lucide-react";
import { WeeklyHours } from "./business-hours";

const navigation = {
  footer: [
    { name: 'Full Menu', href: '/menu', internal: true },
    { name: 'Popular Picks', href: '/#specials' },
    { name: 'Customer Reviews', href: '/#reviews' },
    { name: 'Visit & Hours', href: '/visit', internal: true },
    { name: 'Order Online', href: 'https://redbrick-coffee-deli.square.site/' },
  ],
  social: [
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/profile.php?id=61579866657621',
      icon: (props: SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/redbrick618/',
      icon: (props: SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
};
  export default function Footer() {
    return (
      <footer className="border-t border-red-900/15 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
  
          <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-1">
            
            {/* Brand */}
            <div className="space-y-4">
              <Image
                src="/redbricknobg.png"
                alt="Redbrick Coffee & Deli"
                className="h-20 w-20 rounded-full object-cover"
                width={80}
                height={80}
              />
              <p className="max-w-sm text-sm leading-6 text-stone-600">
                Handcrafted coffee, deli sandwiches, salads, and pizza in the heart of downtown Salem, Illinois.
              </p>
              <div className="space-y-2 text-sm font-semibold text-stone-600">
                <a href="https://maps.google.com/?q=100+N+Washington+St,+Salem,+IL+62881" target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 transition hover:text-red-900"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-red-800" aria-hidden="true" />100 N Washington St<br />Salem, IL 62881</a>
                <a href="tel:16187409060" className="flex items-center gap-2 transition hover:text-red-900"><Phone className="h-4 w-4 text-red-800" aria-hidden="true" />(618) 740-9060</a>
              </div>
            </div>
  
            {/* Navigation */}
            <div>
              <h3 className="text-sm font-semibold text-red-900 uppercase tracking-wide">
                Explore
              </h3>
              <ul className="mt-4 space-y-3">
                {navigation.footer.map((item) => (
                  <li key={item.name}>
                    {'internal' in item && item.internal ? (
                      <Link href={item.href} className="text-sm font-semibold text-stone-600 transition hover:text-red-900">{item.name}</Link>
                    ) : (
                      <a href={item.href} className="text-sm font-semibold text-stone-600 transition hover:text-red-900">{item.name}</a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
  
            {/* Social */}
            <div>
              <h3 className="text-sm font-semibold text-red-900 uppercase tracking-wide">
                Follow Us
              </h3>
              <div className="mt-4 flex gap-4">
                {navigation.social.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-900 hover:text-red-700 transition"
                  >
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="h-6 w-6" />
                  </a>
                ))}
              </div>
              <a href="https://redbrick-coffee-deli.square.site/" className="mt-6 inline-flex items-center gap-2 rounded-full bg-red-900 px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-red-800"><ShoppingBag className="h-4 w-4" aria-hidden="true" /> Order pickup</a>
            </div>
            </div>

            <WeeklyHours />
  
          </div>
  
          {/* Bottom */}
          <div className="mt-12 flex flex-col gap-2 border-t border-red-900/15 pt-6 text-sm text-stone-500 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} Redbrick Coffee & Deli. All rights reserved.</p>
            <p>Locally owned in Salem, Illinois.</p>
          </div>
  
        </div>
      </footer>
    )
  }
