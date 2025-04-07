import Image from "next/image"

export function WalkCard() {
  return (
    <section className="relative mt-32 px-4">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]"
        style={{
          background:
            "radial-gradient(circle at center, rgba(34, 197, 94, 0.2) 0%, rgba(34, 197, 94, 0.1) 25%, rgba(34, 197, 94, 0.05) 50%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="max-w-6xl mx-auto grid grid-cols-2 gap-8 items-center relative">
        <div className="relative">
          <Image
            src="/card-walk.svg"
            alt="Walk Card"
            width={400}
            height={500}
            className="object-contain"
          />
        </div>

        <div>
          <h2 className="text-5xl font-bold text-white mb-6">
            Walk, earn, and thrive
          </h2>
          <p className="text-white/80 text-lg mb-8">
            The earned rewards are distributed equally in $BTT and $BFF tokens.
            Our goal is to provide users with a fun, rewarding, and innovative
            experience. Discover our project now and turn your steps into
            earnings.
          </p>
          <button className="bg-[#4332A6] text-white px-8 py-3 rounded-xl hover:bg-[#362985] transition-colors">
            Launch App
          </button>
        </div>
      </div>
    </section>
  )
}
