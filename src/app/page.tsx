import { Header } from "@/components/Header"
import { Hero } from "@/components/Hero"
import { StatsGrid } from "@/components/StatsGrid"
import { GradientBackground } from "@/components/ui/GradientBackground"

export default function Home() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <GradientBackground />

      <Header />

      <main className="relative z-10 container mx-auto px-4 pt-24 pb-16">
        <Hero />
        <StatsGrid />
      </main>
    </div>
  )
}
