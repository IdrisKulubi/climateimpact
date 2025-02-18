"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"

interface NavItem {
  title: string;
  href: string;
  children?: {
    title: string;
    href: string;
  }[];
}

interface DesktopNavItemProps {
  item: NavItem;
}

export function DesktopNavItem({ item }: DesktopNavItemProps) {
  const pathname = usePathname()
  
  return (
    <NavigationMenuItem>
      {item.children ? (
        <>
          <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
              {item.children.map((child) => (
                <li key={child.href}>
                  <NavigationMenuLink asChild>
                    <Link
                      href={child.href}
                      className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        pathname === child.href && "bg-accent"
                      )}
                    >
                      <div className="text-sm font-medium leading-none">
                        {child.title}
                      </div>
                    </Link>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </>
      ) : (
        <Link
          href={item.href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary",
            pathname === item.href && "text-primary"
          )}
        >
          {item.title}
        </Link>
      )}
    </NavigationMenuItem>
  )
} 