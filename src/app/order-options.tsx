import { ArrowRight, Car, Phone, ShoppingBag } from 'lucide-react'
import { DOORDASH_URL, PHONE_DISPLAY, PHONE_HREF, SQUARE_URL } from './site-data'

const options = [
  {
    eyebrow: 'Fastest pickup',
    title: 'Order online',
    description: 'Browse the menu, customize your order, and choose a pickup time through Square.',
    cta: 'Start a pickup order',
    href: SQUARE_URL,
    icon: ShoppingBag,
    primary: true,
  },
  {
    eyebrow: 'Delivered to you',
    title: 'Get DoorDash',
    description: 'Have coffee, sandwiches, pizza, and more delivered around Salem.',
    cta: 'Order delivery',
    href: DOORDASH_URL,
    icon: Car,
  },
  {
    eyebrow: 'Talk to our team',
    title: 'Call it in',
    description: `Prefer a person? Call ${PHONE_DISPLAY} and we’ll help with your order.`,
    cta: `Call ${PHONE_DISPLAY}`,
    href: PHONE_HREF,
    icon: Phone,
  },
]

export default function OrderOptions() {
  return (
    <section className="bg-white px-6 py-14 lg:px-8" aria-labelledby="order-options-heading">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-700">Ready when you are</p>
          <h2 id="order-options-heading" className="mt-2 font-serif text-3xl font-bold tracking-tight text-red-950 sm:text-4xl">How would you like to order?</h2>
        </div>
        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {options.map((option) => (
            <a
              key={option.title}
              href={option.href}
              target={option.href.startsWith('http') ? '_blank' : undefined}
              rel={option.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className={`group rounded-3xl border p-6 transition hover:-translate-y-1 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-900 ${option.primary ? 'border-red-950 bg-red-950 text-white shadow-lg shadow-red-950/15' : 'border-red-900/15 bg-[#fbf6ee] text-red-950'}`}
            >
              <div className="flex items-start justify-between gap-5">
                <span className={`rounded-2xl p-3 ${option.primary ? 'bg-white/10 text-amber-300' : 'bg-red-900/10 text-red-800'}`}>
                  <option.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" aria-hidden="true" />
              </div>
              <p className={`mt-6 text-xs font-bold uppercase tracking-[0.18em] ${option.primary ? 'text-red-200' : 'text-red-700'}`}>{option.eyebrow}</p>
              <h3 className="mt-1 font-serif text-2xl font-bold">{option.title}</h3>
              <p className={`mt-3 leading-7 ${option.primary ? 'text-red-100/80' : 'text-stone-600'}`}>{option.description}</p>
              <span className="mt-6 inline-flex items-center gap-2 font-bold">{option.cta}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

