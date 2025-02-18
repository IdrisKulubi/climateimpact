import Link from "next/link"
import Image from "next/image"

export function NavLogo() {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <Image
        src="/logo.png"
        alt="Climate Impact Partners"
        width={180}
        height={40}
        className="h-10 w-auto dark:invert"
        priority
      />
    </Link>
  )
} 