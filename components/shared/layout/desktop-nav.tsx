"use client"

import { NavigationMenu, NavigationMenuList } from "@/components/ui/navigation-menu"
import { mainNavItems } from "@/config/navigation"
import { DesktopNavItem } from "./desktop-nav-item"

export function DesktopNav() {
  return (
    <NavigationMenu className="hidden lg:flex">
      <NavigationMenuList>
        {mainNavItems.map((item) => (
          <DesktopNavItem key={item.href} item={item} />
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
} 