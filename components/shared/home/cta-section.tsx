import { Button } from "@/components/ui/button";
import Link from "next/link";

export function CtaSection() {
  return (
    <section className="relative overflow-hidden py-24">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-20">
        <div className="absolute left-1/3 top-1/4 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 animate-cta-blur-1 rounded-full bg-gradient-to-r from-emerald-500/20 to-cyan-400/20 blur-[100px]" />
        <div className="absolute left-2/3 top-3/4 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 animate-cta-blur-2 rounded-full bg-gradient-to-r from-teal-500/20 to-emerald-400/20 blur-[100px]" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 -z-10 opacity-20">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute h-1 w-1 animate-float rounded-full bg-emerald-400/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container relative z-10 text-center">
        <div className="mx-auto max-w-3xl space-y-8">
          <h2 className="text-balance text-5xl font-bold tracking-tighter sm:text-6xl">
            <span className="animate-gradient bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400 bg-[length:200%_auto] bg-clip-text text-transparent">
              Ready to Make
            </span>
            <span className="block pt-4 text-foreground">
              Real Climate Impact?
            </span>
          </h2>
          
          <p className="mx-auto max-w-xl text-balance text-lg text-muted-foreground md:text-xl">
            Join hundreds of organizations already transforming their climate
            strategy with our expert guidance.
          </p>

          <div className="flex justify-center gap-4">
            <Button
              asChild
              className="group relative h-14 overflow-hidden rounded-full bg-gradient-to-r from-emerald-600 to-cyan-600 px-10 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <Link href="/contact">
                <span className="relative z-10">Start Now</span>
                <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,#059669_0%,transparent_70%)] opacity-0 transition-opacity group-hover:opacity-30" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Animated grid overlay */}
      <div className="absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]">
        <div className="absolute inset-0 h-full w-full animate-grid-fade [background-image:repeating-linear-gradient(100deg,#000_0.5px,transparent_2px,transparent_100px)]" />
      </div>
    </section>
  )
} 