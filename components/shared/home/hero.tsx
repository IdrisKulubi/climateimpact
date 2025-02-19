import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-background/95">
      {/* Primary gradient background */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-cyan-500/5 to-transparent"
          style={{ maskImage: 'radial-gradient(circle at center, white, transparent)' }}
        />
      </div>

      {/* Animated floating orbs */}
      <div className="absolute inset-0 z-0">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute aspect-square w-[500px] rounded-full"
            style={{
              background: i === 0 
                ? 'radial-gradient(circle at center, rgba(16,185,129,0.15), transparent 70%)'
                : i === 1
                ? 'radial-gradient(circle at center, rgba(6,182,212,0.1), transparent 70%)'
                : 'radial-gradient(circle at center, rgba(20,184,166,0.12), transparent 70%)',
              top: i === 0 ? '20%' : i === 1 ? '60%' : '40%',
              left: i === 0 ? '20%' : i === 1 ? '60%' : '40%',
              transform: 'translate(-50%, -50%)',
              animation: `float-${i + 1} 20s ease-in-out infinite`,
            }}
          />
        ))}
      </div>

      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.015]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgb(16 185 129 / 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgb(16 185 129 / 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="container relative z-10 flex h-full items-center px-4 py-24 md:py-32">
        <div className="mx-auto max-w-3xl space-y-10 text-center">
          <h1 className="text-balance text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            <span className="bg-gradient-to-r from-emerald-600 via-emerald-500 to-cyan-600 bg-clip-text text-transparent">
              Turning Your Climate Ambition
            </span>
            <span className="mt-4 block text-foreground">
              Into Measurable Impact
            </span>
          </h1>

          <p className="mx-auto max-w-xl text-balance text-lg/relaxed text-muted-foreground md:text-xl/relaxed">
            Partnering with global leaders to transform environmental goals into tangible, 
            science-backed outcomes.
          </p>

          <div className="flex justify-center">
            <Button
              asChild
              size="lg"
              className="relative h-12 overflow-hidden rounded-full bg-gradient-to-r from-emerald-600 to-cyan-600 px-8 text-lg font-medium text-white transition-all hover:scale-105 hover:shadow-[0_0_2rem_-0.5rem_theme(colors.emerald.600)]"
            >
              <Link href="/solutions">
                <span className="relative z-10">Start Your Journey</span>
                <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,#059669_0%,transparent_70%)] opacity-0 transition-opacity duration-300 group-hover:opacity-30" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />
    </section>
  )
} 