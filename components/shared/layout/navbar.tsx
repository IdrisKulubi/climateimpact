"use client"

import { NavLogo } from "./nav-logo"
import { DesktopNav } from "./desktop-nav"
import { NavButtons } from "./nav-buttons"
import { MobileNav } from "./mobile-nav"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <NavLogo />
        <DesktopNav />
        <NavButtons />
        <MobileNav />
      </div>
    </header>
  )
}
