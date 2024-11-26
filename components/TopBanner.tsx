import Link from "next/link"

export function TopBanner() {
  return (
    <div className="w-full bg-black text-white text-center text-sm py-1">
      Sign up and get 20% off on your first order
      <Link href="#" className="underline ml-2">
        Sign Up Now
      </Link>
    </div>
  )
}

