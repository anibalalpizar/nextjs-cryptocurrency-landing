import React from "react"

export function PurpleGradient() {
  return (
    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1800px] h-[1800px]"
      style={{
        background:
          "radial-gradient(circle at center, rgba(99, 102, 241, 0.15) 0%, rgba(99, 102, 241, 0.1) 25%, rgba(99, 102, 241, 0.05) 40%, transparent 60%)",
        filter: "blur(100px)",
      }}
    />
  )
}
