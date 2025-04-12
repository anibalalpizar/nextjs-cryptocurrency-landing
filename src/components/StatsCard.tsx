import Image from "next/image"

interface StatsCardProps {
  value: string
  icon: string
  iconAlt: string
  unit: string
  label: string
  isCalories?: boolean
  isDistance?: boolean
  isKilograms?: boolean
  isUsers?: boolean
}

export function StatsCard({
  value,
  icon,
  iconAlt,
  unit,
  label,
  isCalories = false,
  isDistance = false,
  isKilograms = false,
  isUsers = false,
}: StatsCardProps) {
  return (
    <div className="bg-[#0A0A0A] backdrop-blur-xl rounded-[20px] p-5 relative overflow-visible min-h-[160px] border border-[#222222]">
      <div className="absolute top-6 right-6">
        <div className="w-12 h-12 bg-[#1E1E1E] rounded-full flex items-center justify-center">
          <Image
            src={icon}
            alt={iconAlt}
            width={24}
            height={24}
            className="opacity-80"
          />
        </div>
      </div>

      <div className="flex flex-col h-full justify-end space-y-2 pt-8">
        <div
          className="text-4xl font-mono font-medium tracking-wider"
          style={
            isCalories
              ? {
                  background:
                    "linear-gradient(90deg, #FFB800 0%, #FF2D00 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }
              : isDistance
              ? {
                  background:
                    "linear-gradient(90deg, #E8E3FF 0%, #8B5CF6 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }
              : isKilograms
              ? {
                  background:
                    "linear-gradient(90deg, #064E3B 0%, #10B981 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }
              : isUsers
              ? {
                  background:
                    "linear-gradient(90deg, #854D0E 0%, #FDE047 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }
              : {
                  color: "#00FF85",
                }
          }
        >
          {value}
        </div>
        <div className="text-[#6B6B6B] text-sm font-medium">{unit}</div>
        <div className="text-white text-xl font-medium mt-2">{label}</div>
      </div>
    </div>
  )
}
