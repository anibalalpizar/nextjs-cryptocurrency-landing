import React from "react"

export function GradientBackground() {
  return (
    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] opacity-80"
      style={{
        background:
          "radial-gradient(circle at center, rgba(234, 179, 8, 0.3) 0%, rgba(234, 179, 8, 0.1) 25%, rgba(234, 179, 8, 0.05) 40%, transparent 60%)",
        filter: "blur(60px)",
      }}
    />
  )
}
