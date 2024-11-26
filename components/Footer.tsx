import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-white py-12
">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">COMPANY</h3>
            <div className="space-y-2">
              <Link href="#about" className="block text-sm text-gray-600">
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
              <Link href="#contact" className="block text-sm text-gray-600">
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
  )
}

