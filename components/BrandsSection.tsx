export function BrandsSection() {
    return (
      <section id="brands" className="border-y py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center grayscale">
            {["VERSACE", "ZARA", "GUCCI", "PRADA"].map((brand) => (
              <div key={brand} className="text-lg md:text-xl font-bold w-1/2 md:w-auto text-center py-2">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  