import { StatsCard } from "./StatsCard"

export function StatsGrid() {
  const stats = [
    {
      value: "+112,256.60",
      icon: "/fire.svg",
      iconAlt: "Calories",
      unit: "Kcal",
      label: "Calories burned",
      isCalories: true,
    },
    {
      value: "+1,600,000.35",
      icon: "/road.svg",
      iconAlt: "Distance",
      unit: "Meter(M)",
      label: "Distance covered",
      isDistance: true,
    },
    {
      value: "+16,256.20",
      icon: "/balance.svg",
      iconAlt: "Weight",
      unit: "Kilogram(KG)",
      label: "Given kilogram",
      isKilograms: true,
    },
    {
      value: "+12,600.10",
      icon: "/users.svg",
      iconAlt: "Users",
      unit: "Users",
      label: "Total users",
      isUsers: true,
    },
  ]

  return (
    <div className="relative max-w-[900px] mx-auto mt-24 mb-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {stats.map((stat) => (
          <StatsCard key={stat.label} {...stat} />
        ))}
      </div>
    </div>
  )
}
