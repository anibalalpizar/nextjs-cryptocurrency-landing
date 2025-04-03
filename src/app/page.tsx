import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Navigation */}
      <div className="relative z-10 w-full px-4 py-6">
        <nav className="bg-zinc-900/50 backdrop-blur-sm rounded-full px-8 py-4 flex items-center max-w-6xl mx-auto">
          <div className="flex-1 flex justify-start">
            <Image
              src="/logo.svg"
              alt="Logo"
              width={36}
              height={50}
              className="invert"
              priority
            />
          </div>
          
          <div className="flex items-center gap-12 justify-center">
            <a href="#" className="text-white/80 hover:text-white transition">Home</a>
            <a href="#" className="text-white/80 hover:text-white transition">Features</a>
            <a href="#" className="text-white/80 hover:text-white transition">Career</a>
          </div>

          <div className="flex-1 flex justify-end">
            <Button 
              variant="secondary" 
              className="bg-zinc-700 text-white hover:bg-zinc-600 rounded-full px-6"
            >
              Launch App
            </Button>
          </div>
        </nav>
      </div>

      <main className="relative z-10 container mx-auto px-4 pt-24 pb-16 text-center">
        <h1 className="text-7xl font-bold text-white mb-6">
          Earn to move
        </h1>
        <p className="text-white/80 max-w-2xl mx-auto mb-12">
          Ready to energize your life and turn it into earnings? With Move to Earn, your
          steps hold real value. Simply walk, run or exercise to earn. Each step matters.
        </p>
        
        <div className="flex justify-center gap-4 mb-24">
          <Button className="bg-zinc-800 text-white hover:bg-zinc-700 rounded-full">
            <Image src="/vercel.svg" alt="Play Store" width={24} height={24} className="mr-2" />
            Play Store
          </Button>
          <Button className="bg-zinc-800 text-white hover:bg-zinc-700 rounded-full">
            <Image src="/vercel.svg" alt="App Store" width={24} height={24} className="mr-2" />
            App Store
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          <div className="bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-6 border border-zinc-800">
            <div className="flex items-center justify-between mb-4">
              <span className="text-green-400 text-2xl font-mono">+112,256.60</span>
              <div className="w-8 h-8 bg-zinc-800 rounded-full flex items-center justify-center">
                🔥
              </div>
            </div>
            <div className="text-white/60 text-sm mb-2">Kcal</div>
            <div className="text-white text-xl">Calories burned</div>
          </div>

          <div className="bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-6 border border-zinc-800">
            <div className="flex items-center justify-between mb-4">
              <span className="text-green-400 text-2xl font-mono">+1,600,000.35</span>
              <div className="w-8 h-8 bg-zinc-800 rounded-full flex items-center justify-center">
                🛣️
              </div>
            </div>
            <div className="text-white/60 text-sm mb-2">Meter(M)</div>
            <div className="text-white text-xl">Distance covered</div>
          </div>

          <div className="bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-6 border border-zinc-800">
            <div className="flex items-center justify-between mb-4">
              <span className="text-green-400 text-2xl font-mono">+16,256.20</span>
              <div className="w-8 h-8 bg-zinc-800 rounded-full flex items-center justify-center">
                ⚖️
              </div>
            </div>
            <div className="text-white/60 text-sm mb-2">Kilogram(KG)</div>
            <div className="text-white text-xl">Given kilogram</div>
          </div>

          <div className="bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-6 border border-zinc-800">
            <div className="flex items-center justify-between mb-4">
              <span className="text-green-400 text-2xl font-mono">+12,600.10</span>
              <div className="w-8 h-8 bg-zinc-800 rounded-full flex items-center justify-center">
                👥
              </div>
            </div>
            <div className="text-white/60 text-sm mb-2">Users</div>
            <div className="text-white text-xl">Total users</div>
          </div>
        </div>
      </main>
    </div>
  );
}