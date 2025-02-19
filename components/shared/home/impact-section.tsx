import { ClientCarousel } from "./client-carousel"

export function ImpactSection() {
  return (
    <section className="relative overflow-hidden py-12">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/50 to-emerald-100/20 dark:to-emerald-900/10" />
      
      <div className="container space-y-16">
        {/* Mission Statement */}
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-balance bg-gradient-to-r from-foreground to-emerald-600 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl">
            Carbon Market Specialists Ensuring a Thriving Future
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-balance text-lg text-muted-foreground">
            We provide an end-to-end service that delivers high-quality, thoroughly vetted climate 
            projects which reduce carbon emissions, improve health and livelihoods, and enhance biodiversity.
          </p>
        </div>

        {/* Client Carousel */}
        <ClientCarousel />

        {/* Impact Metric */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="relative inline-block rounded-2xl bg-gradient-to-r from-emerald-600 to-cyan-600 p-px">
            <div className="rounded-2xl bg-background px-8 py-6">
              <p className="text-balance text-lg font-semibold">
                Together with our clients and partners, we&apos;ve facilitated the reduction/removal of
              </p>
              <div className="mt-4 text-5xl font-bold text-emerald-600">
                <span className="animate-counter">144</span>
                <span className="text-3xl"> million tCO₂e</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 