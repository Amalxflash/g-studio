import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function NewsletterSection() {
  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          STAY UP TO DATE ABOUT OUR LATEST OFFERS
        </h2>
        <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-2">
          <Input
            type="email"
            placeholder="Enter your email address"
            className="bg-white w-full sm:w-auto"
          />
          <Button className="w-full sm:w-auto mt-2 sm:mt-0">Subscribe to Newsletter</Button>
        </div>
      </div>
    </section>
  )
}

