import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden">
      {/* Animated particle background */}
      <div className="absolute inset-0 z-0 opacity-15">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute h-0.5 w-0.5 animate-particle rounded-full bg-emerald-400/30"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Gradient spotlight effect */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute -left-20 -top-20 h-[500px] w-[500px] animate-spotlight rounded-full bg-[radial-gradient(circle_at_center,_rgba(16,185,129,0.4)_0%,_transparent_60%)]" />
      </div>

      {/* Layered gradient blobs */}
      <div className="absolute inset-0 z-0 opacity-15">
        <div className="absolute left-1/4 top-1/3 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 animate-blob-1 rounded-full bg-gradient-to-r from-emerald-500/30 to-cyan-400/30 blur-3xl filter" />
        <div className="absolute left-3/4 top-2/3 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 animate-blob-2 rounded-full bg-gradient-to-l from-teal-500/30 to-emerald-400/30 blur-3xl filter" />
      </div>

      {/* Abstract shape elements */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute left-1/2 top-1/4 h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 animate-shape-rotate rounded-full bg-cyan-500/20 blur-2xl" />
        <div className="absolute left-1/3 bottom-1/4 h-[200px] w-[200px] -translate-x-1/2 -translate-y-1/2 animate-shape-pulse rounded-full bg-teal-500/20 blur-xl" />
      </div>

      {/* Subtle line animation */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-x-0 top-1/4 h-0.5 animate-line-horizontal bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
        <div className="absolute inset-x-0 bottom-1/3 h-0.5 animate-line-horizontal bg-gradient-to-l from-transparent via-cyan-500 to-transparent" />
      </div>

      {/* Dynamic grid overlay */}
      <div className="absolute inset-0 z-0 [mask-image:radial-gradient(ellipse_at_center,transparent_30%,black)]">
        <div className="absolute inset-0 h-full w-full animate-grid-fade [background-image:repeating-linear-gradient(90deg,_#0000_0px_2px,_#000_2px_4px)]" />
      </div>

      <div className="container relative z-10 flex h-full items-center px-4 py-24 md:py-32">
        <div className="mx-auto max-w-3xl space-y-8 text-center">
          {/* Animated heading */}
          <h1 className="text-balance text-5xl font-bold tracking-tighter sm:text-6xl lg:text-7xl">
            <span className="animate-gradient bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400 bg-[length:200%_auto] bg-clip-text text-transparent">
              Turning Your Climate Ambition
            </span>
            <span className="block pt-4 text-foreground">Into Measurable Impact</span>
          </h1>

          {/* Subheadline with staggered animation */}
          <p className="mx-auto max-w-xl text-balance text-lg text-muted-foreground md:text-xl">
            <span className="animate-fade-up opacity-0 [animation-delay:0.3s]">
              Partnering with global leaders to transform environmental goals
            </span>
            <span className="block animate-fade-up opacity-0 [animation-delay:0.5s]">
              into tangible, science-backed outcomes.
            </span>
          </p>

          {/* CTA with hover animation */}
          <div className="flex justify-center animate-fade-up opacity-0 [animation-delay:0.7s]">
            <Button
              asChild
              className="group relative overflow-hidden rounded-full bg-gradient-to-r from-emerald-600 to-cyan-600 px-8 py-6 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <Link href="/solutions">
                <span className="relative z-10">Start Your Journey</span>
                <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,#059669_0%,transparent_70%)] opacity-0 transition-opacity group-hover:opacity-30" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Animated gradient border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 animate-border-width rounded-full bg-gradient-to-r from-emerald-500/0 via-emerald-500 to-cyan-500/0" />
    </section>
  )
} 