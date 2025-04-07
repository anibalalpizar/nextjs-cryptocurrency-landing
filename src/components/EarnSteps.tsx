import Image from "next/image"

export function EarnSteps() {
  const steps = [
    {
      icon: "/feet.svg",
      text: "Take a step",
    },
    {
      icon: "/coins.svg",
      text: "Earn",
    },
    {
      icon: "/timer.svg",
      text: "Complete the tasks",
    },
  ]

  return (
    <section className="mt-32 text-center">
      <h2 className="text-5xl font-bold text-white mb-20">
        Earn while walking
      </h2>

      <div className="flex items-center justify-center gap-32 max-w-5xl mx-auto">
        {steps.map((step) => (
          <div key={step.text}>
            <div className="relative">
              <div className="w-32 h-32 rounded-full bg-[#2A2164] flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-[#362985] flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-[#4332A6] flex items-center justify-center">
                    <Image
                      src={step.icon}
                      alt={step.text}
                      width={32}
                      height={32}
                      className="brightness-0 invert"
                    />
                  </div>
                </div>
              </div>
              <p className="text-white mt-4 font-medium">{step.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}