import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Hero() {
  return (
    <section className="text-center mb-24">
      <h1 className="text-7xl font-bold text-white mb-6">Earn to move</h1>
      <p className="text-white/80 max-w-2xl mx-auto mb-12">
        Ready to energize your life and turn it into earnings? With Move to
        Earn, your steps hold real value. Simply walk, run or exercise to earn.
        Each step matters.
      </p>

      <div className="flex justify-center gap-4">
        <Button className="bg-zinc-800/80 text-white hover:bg-zinc-700 rounded-full">
          <Image
            src="/vercel.svg"
            alt="Play Store"
            width={24}
            height={24}
            className="mr-2"
          />
          Play Store
        </Button>
        <Button className="bg-zinc-800/80 text-white hover:bg-zinc-700 rounded-full">
          <Image
            src="/vercel.svg"
            alt="App Store"
            width={24}
            height={24}
            className="mr-2"
          />
          App Store
        </Button>
      </div>
    </section>
  )
}
