import Image from "next/image";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative bg-gray-100">
      <div className="container mx-auto px-4 py-12 md:py-24 flex flex-col md:flex-row items-center">
        {/* Text and Button Section */}
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h1>
          <p className="text-gray-600 text-base sm:text-lg md:text-xl">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <Button size="lg" className="rounded-full">
            Shop Now
          </Button>
          {/* Stats Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 pt-8">
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

        {/* Image Section */}
        <div className="md:w-1/2 mt-8 md:mt-0">
          <Image
            src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Fashion models wearing casual outerwear"
            width={1470} // Width of the image
            height={980} // Height of the image, adjust as needed
            className="rounded-lg w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}
