import Image from "next/image"

export function TechnologyIcons() {
  const firstRowIcons = [
    { id: 1, src: "/1-icon.svg", alt: "Technology 1" },
    { id: 2, src: "/2-icon.svg", alt: "Technology 2" },
    { id: 3, src: "/3-icon.svg", alt: "Technology 3" },
    { id: 4, src: "/4-icon.svg", alt: "Technology 4" },
    { id: 5, src: "/5-icon.svg", alt: "Technology 5" },
    { id: 6, src: "/6-icon.svg", alt: "Technology 6" },
  ]

  const secondRowIcons = [
    { id: 7, src: "/7-icon.svg", alt: "Technology 7" },
    { id: 8, src: "/8-icon.svg", alt: "Technology 8" },
    { id: 9, src: "/9-icon.svg", alt: "Technology 9" },
    { id: 10, src: "/10-icon.svg", alt: "Technology 10" },
    { id: 11, src: "/11-icon.svg", alt: "Technology 11" },
  ]

  const iconContainerClass =
    "w-[84px] h-[84px] bg-[#0D0D0D]/50 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/10 hover:border-white/20 transition-colors"

  return (
    <section className="relative mt-32 mb-32 px-4">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]"
        style={{
          background:
            "radial-gradient(circle at center, rgba(99, 102, 241, 0.15) 0%, rgba(99, 102, 241, 0.1) 25%, rgba(99, 102, 241, 0.05) 40%, transparent 60%)",
          filter: "blur(60px)",
        }}
      />

      <div className="max-w-6xl mx-auto text-center relative">
        <h2 className="text-5xl font-bold text-white mb-6">Technologies</h2>
        <p className="text-white/80 text-lg mb-12 max-w-2xl mx-auto">
          Built with cutting-edge technologies for optimal performance
        </p>

        <div className="flex flex-col gap-8 items-center max-w-4xl mx-auto">
          <div className="grid grid-cols-6 gap-8 w-full">
            {firstRowIcons.map((icon) => (
              <div key={icon.id} className={iconContainerClass}>
                <Image
                  src={icon.src}
                  alt={icon.alt}
                  width={36}
                  height={36}
                  className="object-contain"
                />
              </div>
            ))}
          </div>

          <div className="flex gap-8 justify-center -ml-[42px]">
            {secondRowIcons.map((icon) => (
              <div key={icon.id} className={iconContainerClass}>
                <Image
                  src={icon.src}
                  alt={icon.alt}
                  width={36}
                  height={36}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
