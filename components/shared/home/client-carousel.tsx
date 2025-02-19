import { CLIENTS } from "@/lib/constants/clients"
import Image from "next/image"



export function ClientCarousel() {
  return (
    <div className="relative overflow-hidden py-8">
      <div className="animate-marquee flex w-[200%] items-center gap-12 ">
        {[...CLIENTS, ...CLIENTS].map((client, i) => (
          <div key={i} className="flex shrink-0 items-center">
            <Image
              src={client.logo}
              alt={`${client.name} logo`}
              width={180}
              height={60}
              className="h-12 w-auto"
            />
          </div>
        ))}
      </div>
    </div>
  )
} 