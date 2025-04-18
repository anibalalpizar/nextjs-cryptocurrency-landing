import { Header } from "@/components/Header"
import { Hero } from "@/components/Hero"
import { StatsGrid } from "@/components/StatsGrid"
import { EarnSteps } from "@/components/EarnSteps"
import { DownloadCard } from "@/components/DownloadCard"
import { WalkCard } from "@/components/WalkCard"
import { RarityLevel } from "@/components/RarityLevel"
import { TechnologyIcons } from "@/components/TechnologyIcons"
import { TeamSection } from "@/components/TeamSection"
import { PurpleGradient } from "@/components/ui/PurpleGradient"
import { FAQ } from "@/components/FAQ"

export default function Home() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <Header />
      <main className="relative z-10 container mx-auto px-4 pt-24 pb-16">
        <article>
          <Hero />
          <StatsGrid />
          <div className="relative">
            <PurpleGradient />
            <EarnSteps />
          </div>
          <DownloadCard />
          <WalkCard />
          <RarityLevel />
          <TechnologyIcons />
          <TeamSection />
          <FAQ />
        </article>
      </main>
    </div>
  )
}
