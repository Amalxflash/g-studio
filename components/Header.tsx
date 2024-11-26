import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">
          SHOP.CO
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="#shop" className="text-sm">
            Shop
          </Link>
          <Link href="#on-sale" className="text-sm">
            On Sale
          </Link>
          <Link href="#new-arrivals" className="text-sm">
            New Arrivals
          </Link>
          <Link href="#brands" className="text-sm">
            Brands
          </Link>
          <Link href="#about" className="text-sm">
            About Us
          </Link>
          <Link href="#contact" className="text-sm">
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
  )
}

