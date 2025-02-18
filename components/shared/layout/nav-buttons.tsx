"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

interface NavButtonsProps {
  mobile?: boolean
}

export function NavButtons({ mobile = false }: NavButtonsProps) {
  return (
    <div className={`${mobile ? "mt-4" : "hidden lg:flex items-center space-x-4"}`}>
      <Link href="/client-login">
        <Button variant={mobile ? "default" : "outline"} className={mobile ? "w-full" : ""}>
          Client log in
        </Button>
      </Link>
      <Link href="/contact">
        <Button className={mobile ? "w-full mt-2" : ""}>Get in touch</Button>
      </Link>
    </div>
  )
} 