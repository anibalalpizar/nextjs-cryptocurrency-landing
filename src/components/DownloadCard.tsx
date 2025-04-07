import Image from "next/image"

export function DownloadCard() {
  return (
    <section className="relative mt-32 px-4">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]" style={{
        background: "radial-gradient(circle at center, rgba(99, 102, 241, 0.2) 0%, rgba(99, 102, 241, 0.1) 25%, rgba(99, 102, 241, 0.05) 50%, transparent 70%)",
        filter: "blur(60px)",
      }} />

      <div className="max-w-6xl mx-auto grid grid-cols-2 gap-8 items-center relative">
        <div>
          <h2 className="text-5xl font-bold text-white mb-6">
            Download BetterStep
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Start earning money by walking! Download our app now and convert your steps into earnings with our blockchain and cryptocurrency-based experience.
          </p>
        </div>

        <div className="relative flex justify-end">
          <Image
            src="/card-better.svg"
            alt="Better Card"
            width={400}
            height={500}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  )
}