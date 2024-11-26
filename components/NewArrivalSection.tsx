import Image from "next/image"
import { Star } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const products = [
  {
    name: "T-shirt with Tape Details",
    price: 120,
    rating: 4.5,
    reviews: 145,
  },
  {
    name: "Skinny Fit Jeans",
    price: 240,
    oldPrice: 260,
    rating: 4.5,
    reviews: 250,
  },
  {
    name: "Checkered Shirt",
    price: 180,
    rating: 4.8,
    reviews: 445,
  },
]

export function NewArrivalSection() {
  return (
    <section id="new-arrivals" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">NEW ARRIVALS</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.name}>
              <CardContent className="p-4">
                <Image
                  src="https://media.istockphoto.com/id/1840186962/photo/colorful-sweatshirt-collection.jpg?s=2048x2048&w=is&k=20&c=-3PL70pQVZ9GWoR8jndNu9QthK0FRJnfzT6IXdBqz6w="
                  alt={product.name}
                  width={400}
                  height={400}
                  className="w-full rounded-lg mb-4"
                />
                <h3 className="font-semibold">{product.name}</h3>
                <div className="flex items-center space-x-2 my-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating)
                            ? "fill-primary text-primary"
                            : "fill-gray-200 text-gray-200"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">
                    ({product.reviews})
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="font-bold">${product.price}</span>
                  {product.oldPrice && (
                    <span className="text-sm text-gray-400 line-through">
                      ${product.oldPrice}
                    </span>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button variant="outline">View All</Button>
        </div>
      </div>
    </section>
  )
}

