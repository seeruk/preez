import React, { createContext } from "react"

export type PreezContextValue = {
  slide: string
  setSlide: React.Dispatch<React.SetStateAction<string>>
  nextSlide: () => void
  prevSlide: () => void
  slides: string[]
  refreshSlides: () => void
}

export const PreezContext = createContext<PreezContextValue | undefined>(undefined)
