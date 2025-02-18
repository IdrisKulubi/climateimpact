import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden">
      {/* Background gradient effects - Updated to earth/nature tones */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -left-20 -top-20 h-[500px] w-[500px] rounded-full bg-gradient-to-r from-green-600/20 to-emerald-400/20 blur-3xl" />
        <div className="absolute -right-20 -bottom-20 h-[500px] w-[500px] rounded-full bg-gradient-to-l from-emerald-500/20 to-teal-400/20 blur-3xl" />
      </div>
      
      <div className="container relative z-10 grid h-full items-center gap-12 px-4 py-24 md:grid-cols-2 md:py-32">
        {/* Text Content - Updated with nature-themed gradients */}
        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Turning Your Climate
            <span className="bg-gradient-to-r from-green-600 to-emerald-400 bg-clip-text text-transparent">
              {" "}Ambition into Impact
            </span>
          </h1>
          
          <p className="mx-auto text-lg text-muted-foreground md:max-w-xl md:text-xl">
            Partnering with you on the journey to net zero through innovative carbon solutions
            and sustainable transformation strategies.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center md:justify-start">
            <Button
              asChild
              className="group relative transform bg-gradient-to-r from-green-700 to-emerald-600 px-8 py-6 text-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <Link href="/solutions">
                Explore Solutions
                <span className="ml-2 opacity-70 transition-opacity group-hover:opacity-100">
                  &rarr;
                </span>
              </Link>
            </Button>
          </div>
        </div>

        {/* Image/Graphic Section - Updated gradient */}
        <div className="relative hidden aspect-square w-full items-center justify-center md:flex">
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-green-500/30 to-emerald-400/30" />
          <Image
            src="/images/hero-earth.png"
            alt="Climate Impact Visualization"
            width={600}
            height={600}
            priority
            quality={100}
            className="relative z-10 animate-float"
          />
        </div>
      </div>

      {/* Trusted By Section */}
      <div className="absolute bottom-8 left-0 right-0 z-10 mt-12 border-t pt-8">
        <p className="mb-6 text-center text-sm font-medium text-muted-foreground">
          Trusted by sustainability leaders worldwide
        </p>
        <div className="container grid grid-cols-2 items-center gap-8 sm:grid-cols-4 lg:grid-cols-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="flex items-center justify-center grayscale transition-all hover:grayscale-0">
              <Image
                src={`/logos/client-${i + 1}.svg`}
                alt="Client logo"
                width={120}
                height={40}
                className="h-8 w-auto object-contain opacity-80"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 