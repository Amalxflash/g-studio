import Image from "next/image"
import Link from "next/link"
import { Star } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Banner */}
      <div className="w-full bg-black text-white text-center text-sm py-1">
        Sign up and get 20% off on your first order
        <Link href="#" className="underline ml-2">
          Sign Up Now
        </Link>
      </div>

      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            SHOP.CO
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
  <Link href="/" className="text-sm">
    Shop
  </Link>
  <Link href="#" className="text-sm">
    On Sale
  </Link>
  <Link href="#" className="text-sm">
    New Arrivals
  </Link>
  <Link href="#" className="text-sm">
    Brands
  </Link>
  <Link href="/about" className="text-sm">
    About Us
  </Link>
  <Link href="/contact" className="text-sm">
    Contact
  </Link>
</nav>
          <div className="flex items-center space-x-4">
            <Input
              type="search"
              placeholder="Search for products..."
              className="max-w-[200px]"
            />
            <Button variant="ghost" size="icon">
              🛒
            </Button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative bg-gray-100">
          <div className="container mx-auto px-4 py-12 md:py-24 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                FIND CLOTHES THAT MATCHES YOUR STYLE
              </h1>
              <p className="text-gray-600">
                Browse through our diverse range of meticulously crafted garments, designed 
                to bring out your individuality and cater to your sense of style.
              </p>
              <Button size="lg" className="rounded-full">
                Shop Now
              </Button>
              <div className="grid grid-cols-3 gap-8 pt-8">
                <div>
                  <div className="text-2xl font-bold">200+</div>
                  <div className="text-sm text-gray-600">International Brands</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">2,000+</div>
                  <div className="text-sm text-gray-600">High-Quality Products</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">30,000+</div>
                  <div className="text-sm text-gray-600">Happy Customers</div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <Image
                src="/placeholder.svg"
                alt="Fashion models wearing casual outerwear"
                width={600}
                height={600}
                className="rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* Brands Section */}
        <section className="border-y">
          <div className="container mx-auto px-4 py-8">
            <div className="flex justify-between items-center grayscale">
              {["VERSACE", "ZARA", "GUCCI", "PRADA"].map((brand) => (
                <div key={brand} className="text-xl font-bold">
                  {brand}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* New Arrivals Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">NEW ARRIVALS</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
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
              ].map((product) => (
                <Card key={product.name}>
                  <CardContent className="p-4">
                    <Image
                      src="/placeholder.svg"
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

        {/* Browse by Style Section */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">
              BROWSE BY DRESS STYLE
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {["Casual", "Formal", "Party", "Gym"].map((style) => (
                <Link
                  key={style}
                  href="#"
                  className="relative overflow-hidden rounded-lg group"
                >
                  <Image
                    src="/placeholder.svg"
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

        {/* Newsletter Section */}
        <section className="bg-black text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              STAY UP TO DATE ABOUT OUR LATEST OFFERS
            </h2>
            <div className="max-w-md mx-auto flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="bg-white"
              />
              <Button>Subscribe to Newsletter</Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4">COMPANY</h3>
              <div className="space-y-2">
                <Link href="#" className="block text-sm text-gray-600">
                  About
                </Link>
                <Link href="#" className="block text-sm text-gray-600">
                  Features
                </Link>
                <Link href="#" className="block text-sm text-gray-600">
                  Works
                </Link>
                <Link href="#" className="block text-sm text-gray-600">
                  Career
                </Link>
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-4">HELP</h3>
              <div className="space-y-2">
                <Link href="#" className="block text-sm text-gray-600">
                  Customer Support
                </Link>
                <Link href="#" className="block text-sm text-gray-600">
                  Delivery Details
                </Link>
                <Link href="#" className="block text-sm text-gray-600">
                  Terms & Conditions
                </Link>
                <Link href="#" className="block text-sm text-gray-600">
                  Privacy Policy
                </Link>
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-4">FAQ</h3>
              <div className="space-y-2">
                <Link href="#" className="block text-sm text-gray-600">
                  Account
                </Link>
                <Link href="#" className="block text-sm text-gray-600">
                  Manage Deliveries
                </Link>
                <Link href="#" className="block text-sm text-gray-600">
                  Orders
                </Link>
                <Link href="#" className="block text-sm text-gray-600">
                  Payments
                </Link>
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-4">RESOURCES</h3>
              <div className="space-y-2">
                <Link href="#" className="block text-sm text-gray-600">
                  Free eBooks
                </Link>
                <Link href="#" className="block text-sm text-gray-600">
                  Development Tutorial
                </Link>
                <Link href="#" className="block text-sm text-gray-600">
                  How to - Blog
                </Link>
                <Link href="#" className="block text-sm text-gray-600">
                  YouTube Playlist
                </Link>
              </div>
            </div>
          </div>
          <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-600">
              © 2023 SHOP.CO All Rights Reserved.
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <Image
                src="/placeholder.svg"
                alt="Payment methods"
                width={200}
                height={30}
                className="h-8"
              />
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

