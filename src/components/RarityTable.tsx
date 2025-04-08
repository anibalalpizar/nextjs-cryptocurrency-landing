import Image from "next/image"

const rarityData = [
  { rarity: "Red", color: "/red-circle.svg", name: "Common", supply: "1800" },
  {
    rarity: "Yellow",
    color: "/yellow-circle.svg",
    name: "Uncommon",
    supply: "1000",
  },
  { rarity: "Blue", color: "/blue-circle.svg", name: "Rare", supply: "600" },
  {
    rarity: "Green",
    color: "/green-circle.svg",
    name: "Legendary",
    supply: "60",
  },
]

export function RarityTable() {
  return (
    <div className="relative">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]"
        style={{
          background:
            "radial-gradient(circle at center, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.1) 25%, rgba(255, 255, 255, 0.05) 50%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="bg-[#0D0D0D]/50 backdrop-blur-sm rounded-[32px] p-8 max-w-4xl mx-auto border border-white/10 relative">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/10">
              <th className="py-4 px-6 text-white/60 font-medium text-center">
                Rarity
              </th>
              <th className="py-4 px-6 text-white/60 font-medium text-center">
                Color
              </th>
              <th className="py-4 px-6 text-white/60 font-medium text-center">
                Name
              </th>
              <th className="py-4 px-6 text-white/60 font-medium text-center">
                Supply
              </th>
            </tr>
          </thead>
          <tbody>
            {rarityData.map((item) => (
              <tr
                key={item.rarity}
                className="border-b border-white/5 last:border-0"
              >
                <td className="py-4 px-6 text-white/80 text-center">
                  {item.rarity}
                </td>
                <td className="py-4 px-6 flex justify-center">
                  <Image
                    src={item.color}
                    alt={`${item.rarity} circle`}
                    width={24}
                    height={24}
                    className="object-contain"
                  />
                </td>
                <td className="py-4 px-6 text-white/80 text-center">
                  {item.name}
                </td>
                <td className="py-4 px-6 text-white/80 text-center">
                  {item.supply}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
