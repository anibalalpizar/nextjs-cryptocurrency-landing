import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Hero() {
  return (
    <section className="text-center mb-24 relative">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[2000px] h-[2000px] opacity-80"
        style={{
          background:
            "radial-gradient(circle at center, rgba(234, 179, 8, 0.3) 0%, rgba(234, 179, 8, 0.1) 25%, rgba(234, 179, 8, 0.05) 40%, transparent 60%)",
          filter: "blur(60px)",
        }}
      />

      <div className="relative z-10">
        <h1 className="text-7xl font-bold text-white mb-6">Earn to move</h1>
        <p className="text-white/80 max-w-2xl mx-auto mb-12">
          Ready to energize your life and turn it into earnings? With Move to
          Earn, your steps hold real value. Simply walk, run or exercise to
          earn. Each step matters.
        </p>

        <div className="flex justify-center gap-4">
          <Button className="bg-[#303030] text-white hover:bg-[#404040] rounded-xl px-6 py-7">
            <Image
              src="/playstore.svg"
              alt="Play Store"
              width={24}
              height={24}
              className="mr-2"
            />
            <div className="flex flex-col items-start">
              <span className="text-xl font-medium">Play Store</span>
            </div>
          </Button>
          <Button className="bg-[#F5F5F7] text-black hover:bg-[#E5E5E7] rounded-xl px-6 py-7">
            <Image
              src="/apple.svg"
              alt="App Store"
              width={24}
              height={24}
              className="mr-2"
            />
            <div className="flex flex-col items-start">
              <span className="text-xl font-medium">App Store</span>
            </div>
          </Button>
        </div>
      </div>
    </section>
  )
}
