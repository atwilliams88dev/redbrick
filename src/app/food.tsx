import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, BadgeDollarSign, Coffee, CupSoda, Flame, GlassWater, Pizza, Sandwich, Star, Sunrise } from 'lucide-react'
import { SQUARE_URL } from './site-data'

const specials = [
  { name: 'Lunch Special', price: '$10', type: 'Lunch', description: 'Any sandwich with crunchy chips, house-made French onion dip, and a pickle spear.', icon: Sandwich, href: `${SQUARE_URL}/?location=LG0VKDJCZQ0MM#B5O574XNU2GJNJEYBUS6RLIW`, cta: 'Choose a sandwich' },
  { name: 'Calzone Lunch', price: '$12', type: 'Lunch', description: 'Any calzone with crunchy chips, house-made French onion dip, and a pickle spear.', icon: BadgeDollarSign, href: `${SQUARE_URL}/?location=LG0VKDJCZQ0MM#S6ZG7LRLOH3QEH22AA4MBMAM`, cta: 'Choose a calzone' },
  { name: 'Family Deal', price: '$30', type: 'Dinner', description: 'Two large pizzas and a Red Brick salad—an easy dinner for the whole table.', icon: Pizza, href: `${SQUARE_URL}/?location=LG0VKDJCZQ0MM#TV7YXWULVXN3RGQOUVEFWTH7`, cta: 'Order the family deal' },
  { name: 'Shakerato', price: '$6.50', type: 'Coffee', description: 'Espresso shaken with ice and brown sugar, served frothy and chilled with cold foam.', icon: GlassWater, href: `${SQUARE_URL}/?location=LG0VKDJCZQ0MM#DE52WL3HC7OJDETOIA6ZCMLH`, cta: 'Order a Shakerato' },
  { name: 'Red Brick Classic', price: '$6–$9', type: 'Signature drink', description: 'Espresso, vanilla, and caramel with your choice of milk, cold foam, and caramel drizzle.', icon: Coffee, href: `${SQUARE_URL}/?location=LG0VKDJCZQ0MM#DE52WL3HC7OJDETOIA6ZCMLH`, cta: 'Order the classic' },
  { name: 'Strawberry-Banana Smoothie', price: '$6.50', type: 'Cold drink', description: 'A refreshing 16-ounce smoothie blended with strawberry and banana.', icon: CupSoda, href: `${SQUARE_URL}/?location=LG0VKDJCZQ0MM#FMEFS7Y4UFMYB4F2LB66PZ6S`, cta: 'Order a smoothie' },
  { name: 'Campfire Mocha', price: '$6–$9', type: 'Signature drink', description: 'Espresso, chocolate sauce, and toasted marshmallow with your choice of milk and cold foam.', icon: Flame, href: `${SQUARE_URL}/?location=LG0VKDJCZQ0MM#DE52WL3HC7OJDETOIA6ZCMLH`, cta: 'Order a Campfire Mocha' },
  { name: 'Morning Toast Latte', price: '$6–$9', type: 'Signature drink', description: 'Espresso, brown sugar, cinnamon, and vanilla with your choice of milk and cold foam.', icon: Sunrise, href: `${SQUARE_URL}/?location=LG0VKDJCZQ0MM#DE52WL3HC7OJDETOIA6ZCMLH`, cta: 'Order a Morning Toast' },
]

const reviews = [
  { name: 'Casey', quote: 'The food was amazing.', avatar: '/reviews/casey.png', href: 'https://www.google.com/maps/contrib/104879787880004085093/reviews?hl=en' },
  { name: 'Madison Keserauskis', quote: 'Wonderful place.', avatar: '/reviews/madison.png', href: 'https://www.google.com/maps/contrib/108439597190424681756/reviews?hl=en' },
  { name: 'Siretha Howe', quote: 'A staple in my routine!', avatar: '/reviews/siretha.png', href: 'https://www.google.com/maps/contrib/113153070897329888450/reviews?hl=en' },
  { name: 'Laura Husk', quote: 'Our food was great!', avatar: '/reviews/laura.png', href: 'https://www.google.com/maps/contrib/106567620032017115744/reviews?hl=en' },
  { name: 'Natalie Poninski', quote: 'All drinks were excellent!', avatar: '/reviews/natalie.png', href: 'https://www.google.com/maps/contrib/109272519378779168295/reviews?hl=en' },
  { name: 'joseyfitz', quote: 'Lattes 10/10!!', avatar: '/reviews/joseyfitz.png', href: 'https://www.google.com/maps/contrib/111552424807127399914/reviews?hl=en' },
]

const menuGroups = [
  { title: 'Coffee & signature drinks', detail: 'Espresso, lattes, Red Brick Classic, Morning Toast, Campfire Mocha, smoothies, and more.', href: '/menu#drinks', icon: Coffee },
  { title: 'Sandwiches & calzones', detail: 'Norm’s Melt, Italian Stallion, Grown Up Grilled Cheese, Pizza Sub, and BLT.', href: '/menu#handhelds', icon: Sandwich },
  { title: 'Pizza & family deals', detail: 'Cheese, pepperoni, sausage, Red Brick Special, build-your-own pizza, and the $30 family deal.', href: '/menu#pizza', icon: Pizza },
]

export default function FoodMenu() {
  return (
    <div className="bg-white">
      <section id="specials" className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24" aria-labelledby="specials-heading">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-700">Customer favorites</p>
            <h2 id="specials-heading" className="mt-2 max-w-2xl font-serif text-4xl font-bold tracking-tight text-red-950 sm:text-5xl">Popular picks, ready to order.</h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-stone-600">Skip the decision fatigue. Start with the food and drinks Salem customers come back for.</p>
          </div>
          <a href={SQUARE_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-bold text-red-900 hover:text-red-700">See Square ordering <ArrowRight className="h-4 w-4" aria-hidden="true" /></a>
        </div>
        <div className="carousel-track -mx-6 mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-5 lg:mx-0 lg:px-0" aria-label="Featured menu items">
          {specials.map((special) => (
            <a key={special.name} href={special.href} target="_blank" rel="noopener noreferrer" aria-label={`${special.cta} from Square`} className="group flex w-[84%] flex-none snap-start flex-col rounded-3xl border border-red-900/15 bg-[#fbf6ee] p-7 shadow-sm transition hover:-translate-y-1 hover:border-red-900/35 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-900 sm:w-[47%] lg:w-[calc((100%_-_2.5rem)/3)]">
              <div className="flex items-start justify-between gap-4">
                <span className="rounded-2xl bg-red-900/10 p-3"><special.icon className="h-7 w-7 text-red-800" aria-hidden="true" /></span>
                <span className="rounded-full bg-red-900 px-4 py-2 text-lg font-bold text-white">{special.price}</span>
              </div>
              <p className="mt-6 text-xs font-bold uppercase tracking-[0.17em] text-red-700">{special.type}</p>
              <h3 className="mt-1 font-serif text-2xl font-bold text-red-950">{special.name}</h3>
              <p className="mt-3 leading-7 text-stone-600">{special.description}</p>
              <span className="mt-auto inline-flex items-center gap-2 pt-7 font-bold text-red-900">{special.cta} <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" /></span>
            </a>
          ))}
        </div>
      </section>

      <section id="reviews" className="bg-red-950 px-6 py-20 text-white lg:px-8 lg:py-24" aria-labelledby="reviews-heading">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
            <div>
              <div className="flex gap-1 text-amber-300" aria-label="Five stars">{[...Array(5)].map((_, index) => <Star key={index} className="h-5 w-5 fill-current" aria-hidden="true" />)}</div>
              <p className="mt-4 text-sm font-bold uppercase tracking-[0.2em] text-red-200">Recommended by neighbors</p>
              <h2 id="reviews-heading" className="mt-2 font-serif text-4xl font-bold sm:text-5xl">The kind of place people return to.</h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-red-100/75 lg:justify-self-end">Great food and drinks matter. Friendly service and easy ordering make Redbrick a regular part of the week.</p>
          </div>
          <div className="carousel-track -mx-6 mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-5" aria-label="Google customer reviews">
            {reviews.map((review) => (
              <blockquote key={review.name} className="flex w-[82%] flex-none snap-start flex-col rounded-3xl border border-white/10 bg-white/10 p-6 sm:w-[46%] lg:w-[calc((100%_-_2.5rem)/3)]">
                <div className="flex gap-1 text-amber-300" aria-label="Five-star Google review">{[...Array(5)].map((_, index) => <Star key={index} className="h-4 w-4 fill-current" aria-hidden="true" />)}</div>
                <p className="mt-5 font-serif text-2xl font-bold leading-8">“{review.quote}”</p>
                <footer className="mt-auto flex items-center gap-3 pt-7">
                  <Image src={review.avatar} alt="" width={48} height={48} className="h-12 w-12 rounded-full border-2 border-white/20 object-cover" />
                  <span className="leading-tight"><a href={review.href} target="_blank" rel="noopener noreferrer" className="block text-sm font-bold text-white hover:underline">{review.name}</a><span className="text-xs font-semibold text-red-200">Google reviewer</span></span>
                </footer>
              </blockquote>
            ))}
          </div>
          <div className="mt-5 flex flex-wrap gap-4">
            <a href="https://www.google.com/maps/search/?api=1&query=Redbrick+Coffee+%26+Deli+Salem+IL" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-bold text-red-100 hover:text-white">Read Google reviews <ArrowRight className="h-4 w-4" aria-hidden="true" /></a>
            <a href={SQUARE_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-bold text-white hover:text-red-100">Order pickup <ArrowRight className="h-4 w-4" aria-hidden="true" /></a>
          </div>
        </div>
      </section>

      <section id="menu" className="bg-[#f8f3eb] px-6 py-20 lg:px-8 lg:py-24" aria-labelledby="menu-heading">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-700">Coffee, lunch &amp; dinner</p>
              <h2 id="menu-heading" className="mt-2 font-serif text-4xl font-bold tracking-tight text-red-950 sm:text-5xl">Find your next favorite.</h2>
              <p className="mt-5 text-lg leading-8 text-stone-600">Browse an easy-to-read menu with prices, ingredients, specials, and direct ordering options.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {menuGroups.map((group) => (
                <Link key={group.title} href={group.href} className="group rounded-3xl border border-red-900/15 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                  <group.icon className="h-7 w-7 text-red-800" aria-hidden="true" />
                  <h3 className="mt-5 font-serif text-xl font-bold text-red-950">{group.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-stone-600">{group.detail}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-red-900">View this menu <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" /></span>
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link href="/menu" className="inline-flex items-center justify-center gap-2 rounded-full bg-red-900 px-7 py-4 font-bold text-white shadow-lg shadow-red-950/10 transition hover:bg-red-800">View the full menu <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
            <a href={SQUARE_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-full border border-red-900/25 bg-white px-7 py-4 font-bold text-red-950 transition hover:bg-red-50">Order now on Square</a>
          </div>
        </div>
      </section>
    </div>
  )
}
