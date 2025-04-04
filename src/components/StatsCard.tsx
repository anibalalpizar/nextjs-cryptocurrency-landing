import Image from "next/image"

interface StatsCardProps {
  value: string
  icon: string
  iconAlt: string
  unit: string
  label: string
}

export function StatsCard({
  value,
  icon,
  iconAlt,
  unit,
  label,
}: StatsCardProps) {
  return (
    <div className="bg-zinc-900/30 backdrop-blur-sm rounded-2xl p-6 border border-zinc-800">
      <div className="flex items-center justify-between mb-4">
        <span className="text-green-400 text-2xl font-mono">{value}</span>
        <div className="w-8 h-8 bg-zinc-800/50 rounded-full flex items-center justify-center">
          <Image src={icon} alt={iconAlt} width={20} height={20} />
        </div>
      </div>
      <div className="text-white/60 text-sm mb-2">{unit}</div>
      <div className="text-white text-xl">{label}</div>
    </div>
  )
}
