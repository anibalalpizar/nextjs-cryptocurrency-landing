"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface FAQItem {
  question: string
  answer: string
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqItems: FAQItem[] = [
    {
      question: "How can I earn money by walking?",
      answer:
        "You can earn money by walking through our app that converts your steps into cryptocurrency tokens. The more you walk, the more you earn. Our system tracks your steps and rewards you with $BTT and $BFF tokens.",
    },
    {
      question: "How can I sell my shoes?",
      answer:
        "You can sell your NFT shoes on our marketplace. Simply list your shoes for sale, set your price, and wait for buyers. You'll receive payment directly to your wallet once the transaction is complete.",
    },
    {
      question: "What can I do if my shoes get worn out?",
      answer:
        "When your shoes get worn out, you can repair them using repair tokens earned through walking or purchased from our marketplace. This will restore their condition and allow you to continue earning at full capacity.",
    },
    {
      question: "How are the rarity levels of shoes determined?",
      answer:
        "Rarity levels are determined by a combination of factors including design, features, earning potential, and scarcity. Higher rarity shoes have better stats and higher earning potential.",
    },
  ]

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="relative mt-32 px-4 mb-32">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]"
        style={{
          background:
            "radial-gradient(circle at center, rgba(155, 28, 28, 0.2) 0%, rgba(100, 10, 10, 0.15) 25%, rgba(70, 5, 5, 0.1) 40%, transparent 60%)",
          filter: "blur(60px)",
        }}
      />

      <div className="max-w-4xl mx-auto text-center relative">
        <h2 className="text-5xl font-bold text-white mb-12">FAQ</h2>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="bg-[#1A1A1A] rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full flex items-center justify-between px-6 py-4 text-left text-white font-medium focus:outline-none"
              >
                <span>{item.question}</span>
                <ChevronDown
                  className={`transition-transform duration-200 ${
                    openIndex === index ? "transform rotate-180" : ""
                  }`}
                  size={20}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-white/80">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
