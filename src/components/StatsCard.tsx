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
    <div className="bg-[#1A1A1A]/40 backdrop-blur-md rounded-[32px] p-8 relative overflow-hidden min-h-[240px] border border-white/5">
      <div className="absolute top-6 right-6">
        <div className="w-12 h-12 bg-[#2A2A2A]/60 rounded-full flex items-center justify-center">
          <Image
            src={icon}
            alt={iconAlt}
            width={24}
            height={24}
            className="opacity-60"
          />
        </div>
      </div>

      <div className="flex flex-col h-full justify-end space-y-2">
        <div className="text-[#00FF85] text-4xl font-mono font-medium tracking-wider">
          {value}
        </div>
        <div className="text-[#8B8B8B] text-sm font-light">{unit}</div>
        <div className="text-white text-2xl font-medium mt-4">{label}</div>
      </div>
    </div>
  )
}
