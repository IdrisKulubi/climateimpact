
"use client"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { SiLinkedin, SiYoutube } from "react-icons/si"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"

export function Footer() {
  const { theme, setTheme } = useTheme()

  return (
    <footer className="border-t bg-gradient-to-b from-background/95 to-background/80 backdrop-blur">
      <div className="container grid gap-12 px-4 py-16 sm:grid-cols-2 md:grid-cols-4 lg:py-24">
        {/* Brand Column */}
        <div className="space-y-6">
          <Link href="/" className="inline-block">
            <Image
              src="/logo.png"
              alt="Climate Impact Partners"
              width={180}
              height={40}
              className="h-10 w-auto dark:invert"
            />
          </Link>
          <p className="text-sm text-muted-foreground">
            Leading the transition to a net-zero future through innovative climate solutions.
          </p>
          
          {/* Social Links */}
          <div className="flex gap-4">
           
            <Button variant="ghost" size="icon" asChild>
              <Link href="/" aria-label="LinkedIn">
                <SiLinkedin className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="/" aria-label="YouTube">
                <SiYoutube className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Solutions</h3>
          <nav className="flex flex-col space-y-2">
            <FooterLink href="/carbon-offsetting">Carbon Offsetting</FooterLink>
            <FooterLink href="/net-zero">Net Zero Strategies</FooterLink>
            <FooterLink href="/renewables">Renewable Energy</FooterLink>
            <FooterLink href="/consulting">Climate Consulting</FooterLink>
          </nav>
        </div>

        {/* Resources */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Resources</h3>
          <nav className="flex flex-col space-y-2">
            <FooterLink href="/case-studies">Case Studies</FooterLink>
            <FooterLink href="/reports">Annual Reports</FooterLink>
            <FooterLink href="/faq">FAQ</FooterLink>
            <FooterLink href="/contact">Contact Us</FooterLink>
          </nav>
        </div>

        {/* Newsletter */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Stay Updated</h3>
          <form className="flex w-full max-w-sm flex-col gap-4">
            <Input 
              type="email" 
              placeholder="Enter your email" 
              className="bg-background"
            />
            <Button 
              type="submit"
              className="w-fit bg-gradient-to-r from-emerald-600 to-cyan-600 text-white"
            >
              Subscribe
            </Button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t">
        <div className="container flex flex-col items-center justify-between gap-4 px-4 py-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Climate Impact Partners. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="h-9 w-9 rounded-md"
              aria-label="Toggle theme"
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
            <FooterLink href="/privacy" className="text-sm">Privacy Policy</FooterLink>
            <FooterLink href="/terms" className="text-sm">Terms of Service</FooterLink>
            <FooterLink href="/accessibility" className="text-sm">Accessibility</FooterLink>
          </div>
        </div>
      </div>
    </footer>
  )
}

function FooterLink({ href, children, className }: { 
  href: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <Link
      href={href}
      className={`text-sm text-muted-foreground transition-colors hover:text-foreground ${className}`}
    >
      {children}
    </Link>
  )
} 