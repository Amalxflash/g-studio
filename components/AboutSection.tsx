import Image from "next/image";

export function AboutSection() {
  return (
    <section id="about" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8">
          About SHOP.CO
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <Image
              src="https://images.unsplash.com/photo-1504198458649-3128b932f49e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Our store"
              width={600}
              height={400}
              className="rounded-lg"
            />
          </div>
          <div className="space-y-6">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600">
              SHOP.CO is more than just an online clothing store. We are a
              community of fashion enthusiasts dedicated to bringing you the
              latest trends and timeless classics.
            </p>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600">
              Founded in 2020, we have quickly grown to become one of the most
              trusted names in online fashion retail. Our mission is to make
              high-quality, stylish clothing accessible to everyone, regardless
              of their budget or location.
            </p>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600">
              We work directly with designers and manufacturers to ensure that
              every piece in our collection meets our high standards for quality
              and style. From casual everyday wear to elegant formal attire, we
              have something for every occasion and every taste.
            </p>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600">
              At SHOP.CO, we are not just selling clothes - we are helping you
              express yourself through fashion. Our team of style experts is
              always on hand to offer advice and inspiration, helping you build
              a wardrobe that truly reflects your personality.
            </p>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600">
              Thank you for choosing SHOP.CO. We look forward to being part of
              your fashion journey!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
