import { ScrambleText } from "@/components/scramble-text"
import { MapPin, Building2 } from "lucide-react"

export function Header() {
  return (
    <header className="mb-8 space-y-4">
      <h1 className="text-4xl font-bold mb-4 animate-fade-in text-white">
        <span className="inline-block">
          <ScrambleText text="Karthikeya Jayarama" />
        </span>
      </h1>
      <div className="flex flex-col gap-2 text-gray-400">
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4" />
          Philadelphia, PA
        </div>
        <div className="flex items-center gap-2">
          <Building2 className="w-4 h-4" />
          Robotics @ Penn
        </div>
      </div>
      <p className="leading-relaxed animate-fade-in-up">
      <b>Currently I&apos;m open to network for Full Time Roles starting in June, 2025 please reach out to me through my email or linkedin.</b> I&apos;m a graduate student at the University of Pennsylvania and Robotics Software Engineer at the Autoware Foundation. My main current focus in on end to end autonomous driving with focus on perception, localization and mapping. 
        If I&apos;m not coding, I&apos;m probably travelling, playing video games or watching comedy. 
      </p>
    </header>
  )
}
