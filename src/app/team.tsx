const people = [
    {
        name: 'Abby Williams',
        role: 'Owner / Operator',
        imageUrl: './abs.jpg',
    },
    {
        name: 'Alex Williams',
        role: 'Owner / Operator',
        imageUrl: './alex.jpg',
    },
    {
        name: 'Melane Green',
        role: 'Manager / Boss',
        imageUrl: './mel.jpg',
    },

]

export default function TeamSection() {
    return (
        <section className=" py-24 sm:py-32">
            <div className="mx-auto bg-white rounded p-4 border-2 border-red-900 max-w-7xl px-6 lg:px-8">
                {/* Header */}
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-4xl font-serif font-bold tracking-tight text-red-900 sm:text-5xl">
                        Our Management Team
                    </h2>
                    <p className="mt-6 text-lg font-serif italic text-gray-700">
                        A passionate group dedicated to crafting the best coffee, fresh food, and great experiences for our guests.
                    </p>
                </div>

                {/* Team Grid */}
                <ul
                    role="list"
                    className="mx-auto mt-20 grid max-w-5xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6"
                >
                    {people.map((person) => (
                        <li key={person.name} className="flex flex-col items-center">
                            <div className="bg-white rounded-full p-1 shadow-sm border border-red-900/20">
                                <img
                                    src={person.imageUrl}
                                    alt={person.name}
                                    className="h-28 w-28 rounded-full object-cover"
                                />
                            </div>
                            <h3 className="mt-6 text-base font-serif font-bold text-red-900">{person.name}</h3>
                            <p className="text-sm font-serif text-gray-700 italic">{person.role}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}