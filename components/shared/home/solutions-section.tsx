import { RocketIcon, GlobeIcon, BarChartIcon } from "@radix-ui/react-icons"
import { Card } from "@/components/ui/card"
import { LeafIcon } from "lucide-react"

export function SolutionsSection() {
  return (
    <section className="relative overflow-hidden py-24">
      {/* Section background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-emerald-50/20 to-background dark:via-emerald-900/10" />
      
      <div className="container space-y-12">
        {/* Header */}
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-balance bg-gradient-to-r from-foreground to-emerald-600 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl">
            Comprehensive Climate Solutions
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-balance text-lg text-muted-foreground">
            Innovative approaches combining technology, finance, and environmental science
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SOLUTIONS.map((solution) => (
            <Card 
              key={solution.title}
              className="group relative overflow-hidden bg-background/90 transition-all hover:scale-[1.02] hover:shadow-xl"
            >
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-emerald-100/20 to-transparent" />
              <div className="space-y-4 p-8">
                <div className="flex size-12 items-center justify-center rounded-lg bg-emerald-600/10 p-2 text-emerald-600">
                  <solution.icon className="size-8" />
                </div>
                <h3 className="text-2xl font-semibold">{solution.title}</h3>
                <p className="text-muted-foreground">{solution.description}</p>
              </div>
              <div className="absolute inset-0 rounded-[inherit] p-[1px] transition-all group-hover:p-0">
                <div className="absolute inset-0 rounded-[inherit] bg-gradient-to-r from-emerald-500/0 via-emerald-500/70 to-emerald-500/0 opacity-0 group-hover:opacity-100 animate-glow" />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

const SOLUTIONS = [
  {
    icon: RocketIcon,
    title: "Carbon Offset Projects",
    description: "Verified emission reduction initiatives across renewable energy and forestry sectors"
  },
  {
    icon: LeafIcon,
    title: "ESG Consulting",
    description: "Strategic guidance for sustainable business practices and reporting frameworks"
  },
  {
    icon: GlobeIcon,
    title: "Climate Risk Analysis",
    description: "Advanced modeling for climate-related financial risks and opportunities"
  },
  {
    icon: BarChartIcon,
    title: "Impact Measurement",
    description: "Quantitative assessment of environmental and social outcomes"
  }
] as const 