import Image from "next/image"
import { RarityTable } from "./RarityTable"

export function RarityLevel() {
  return (
    <section className="relative mt-32 px-4">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]"
        style={{
          background:
            "radial-gradient(circle at center, rgba(234, 179, 8, 0.3) 0%, rgba(234, 179, 8, 0.15) 25%, rgba(234, 179, 8, 0.1) 50%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="max-w-6xl mx-auto text-center relative">
        <h2 className="text-5xl font-bold text-white mb-6">Rarity Level</h2>
        <p className="text-white/80 text-lg mb-12 max-w-2xl mx-auto">
          More information about the rarity levels of NFTs
        </p>

        <div className="flex justify-center mb-16">
          <Image
            src="/4-circles.svg"
            alt="Rarity Levels"
            width={400}
            height={100}
            className="object-contain"
          />
        </div>

        <RarityTable />
      </div>
    </section>
  )
}
