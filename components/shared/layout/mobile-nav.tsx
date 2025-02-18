"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Sheet, SheetContent, SheetTrigger ,SheetTitle} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { cn } from "@/lib/utils"
import { mainNavItems, additionalLinks } from "@/config/navigation"
import { NavButtons } from "./nav-buttons"

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild className="lg:hidden">
        <Button variant="ghost" size="icon">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
          <SheetTitle></SheetTitle>

            <nav className="flex flex-col gap-4">
          {mainNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-lg font-medium transition-colors hover:text-primary",
                pathname === item.href && "text-primary"
              )}
              onClick={() => setIsOpen(false)}
            >
              {item.title}
            </Link>
          ))}
          <hr className="my-4" />
          {additionalLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-lg font-medium"
              onClick={() => setIsOpen(false)}
            >
              {link.title}
            </Link>
          ))}
          <NavButtons mobile />
        </nav>
      </SheetContent>
    </Sheet>
  )
} 