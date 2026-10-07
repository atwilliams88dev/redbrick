import Image from 'next/image'

const people = [
  {
    name: 'Abby Williams',
    role: 'Owner / Operator',
    imageUrl: '/abs.jpg',   // Use absolute path from /public
  },
  {
    name: 'Alex Williams',
    role: 'Owner / Operator',
    imageUrl: '/alex.jpg',
  },
  {
    name: 'Melane Green',
    role: 'Manager / Boss',
    imageUrl: '/mel.jpg',
  },
]

export default function TeamSection() {
  return (
    <section className="bg-[#f8f3eb] px-6 py-20 lg:px-8 lg:py-28" aria-labelledby="team-heading">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-700">Good food. Good people.</p>
          <h2 id="team-heading" className="mt-2 font-serif text-4xl font-bold tracking-tight text-red-950 sm:text-5xl">A local place built to feel like yours.</h2>
          <p className="mt-6 text-lg leading-8 text-stone-600">We’re proud to serve Salem with handcrafted drinks, satisfying food, and the kind of friendly service that makes stopping in—or ordering ahead—easy.</p>
          <a href="https://www.google.com/maps/dir/?api=1&destination=100+N+Washington+St,+Salem,+IL+62881" target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex rounded-full border border-red-900/25 bg-white px-6 py-3.5 font-bold text-red-950 shadow-sm transition hover:bg-red-50">Visit us in downtown Salem</a>
        </div>
        <ul
          role="list"
          className="grid grid-cols-2 gap-5 text-center sm:grid-cols-3"
        >
          {people.map((person) => (
            <li key={person.name} className="flex flex-col items-center rounded-3xl border border-red-900/10 bg-white p-5 shadow-sm">
              <div className="rounded-full border border-red-900/20 bg-white p-1 shadow-sm">
                <Image
                  src={person.imageUrl}
                  alt={person.name}
                  className="h-28 w-28 rounded-full object-cover"
                  width={112}    // h-28 = 7rem = 112px
                  height={112}   // maintain square aspect
                  sizes="(max-width: 640px) 80px, 112px"
                  priority={false} // team images can lazy-load
                />
              </div>
              <h3 className="mt-5 font-serif text-base font-bold text-red-950">{person.name}</h3>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-stone-500">{person.role}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
