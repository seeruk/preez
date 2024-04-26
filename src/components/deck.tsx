import { PropsWithChildren, useCallback, useEffect, useRef, useState } from "react"

import { PreezContext } from "@/context/preez"

export const Deck = ({ children }: PropsWithChildren) => {
  const deckRef = useRef<HTMLDivElement>(null)
  const focusRef = useRef<HTMLInputElement>(null)
  const [slide, setSlide] = useState("")
  const [slides, setSlides] = useState<string[]>([])

  const refreshSlides = useCallback(() => {
    if (!deckRef.current) {
      return
    }

    const slideIds = Array.from(deckRef.current.querySelectorAll("[data-slide-id]"))
      .map((el) => el.getAttribute("data-slide-id") || "")

    setSlides(slideIds)
    setSlide(slideIds[0] || "")
  }, [deckRef, setSlides, setSlide])

  const nextSlide = useCallback(() => {
    const currentIndex = slides.indexOf(slide)
    const nextIndex = (currentIndex + 1) % slides.length

    setSlide(slides[nextIndex])
  }, [slide, slides, setSlide])

  const prevSlide = useCallback(() => {
    const currentIndex = slides.indexOf(slide)
    const prevIndex = (currentIndex - 1 + slides.length) % slides.length

    setSlide(slides[prevIndex])
  }, [slide, slides, setSlide])

  const onFocus = useCallback(() => {
    console.log(focusRef)
    console.log(document.activeElement)
    focusRef.current?.focus()
    console.log(document.activeElement)
  }, [])

  const onKeyDown = useCallback((event: KeyboardEvent) => {
    if (focusRef.current !== document.activeElement) {
      return
    }
    if (event.key === "ArrowRight") {
      nextSlide()
    } else if (event.key === "ArrowLeft") {
      prevSlide()
    }
  }, [nextSlide, prevSlide])

  useEffect(() => {
    if (!deckRef.current) {
      return
    }

    const deck = deckRef.current

    deck.addEventListener("click", onFocus, false)
    return () => deck.removeEventListener("click", onFocus, false)
  }, [onFocus])

  // Set up the initially available slides
  useEffect(() => {
    refreshSlides()
  }, [refreshSlides])

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown, false)
    return () => document.removeEventListener("keydown", onKeyDown, false)
  }, [onKeyDown])

  const context = {
    slide,
    setSlide,
    nextSlide,
    prevSlide,
    slides,
    refreshSlides,
  }

  return (
    <PreezContext.Provider value={context}>
      <input className="absolute top-[-9999px] left-[-9999px]" type="text" ref={focusRef} value="" onChange={() => {}} />
      <div ref={deckRef}>
        {children}
      </div>
    </PreezContext.Provider>
  )
}
