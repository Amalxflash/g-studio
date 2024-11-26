import Image from "next/image"
import Link from "next/link"

const styles = ["Casual", "Formal", "Party", "Gym"]

export function BrowseByStyleSection() {
  return (
    <section id="shop" className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          BROWSE BY DRESS STYLE
        </h2>
        <div className="grid grid-cols-2 gap-4">
          {styles.map((style) => (
            <Link
              key={style}
              href="#"
              className="relative overflow-hidden rounded-lg group"
            >
              <Image
                src="https://media.istockphoto.com/id/1207027323/photo/trendy-clothes-in-a-store.jpg?s=2048x2048&w=is&k=20&c=0-xPt3oyT_iG6FVv-lMNNYypJ6u8rjMoQBpf5Pe1n6o="
                alt={style}
                width={600}
                height={400}
                className="w-full object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">{style}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

