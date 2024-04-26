import React, { HTMLAttributes, PropsWithChildren } from "react"

import { usePreez } from "@/hooks/usePreez.ts"

export const Navigation = (props: HTMLAttributes<HTMLDivElement>) => {
  const { slide, slides, nextSlide, prevSlide, setSlide } = usePreez()

  const onNext = (e: React.MouseEvent) => {
    e.stopPropagation()
    nextSlide()
  }

  const onPrev = (e: React.MouseEvent) => {
    e.stopPropagation()
    prevSlide()
  }

  return (
    <div {...props}>
      <div
        className="absolute bottom-4 left-4 p-4 flex gap-4 opacity-0 hover:opacity-100 transition-opacity rounded-md bg-white shadow">
        <Button onClick={onPrev}>Previous</Button>
        <Button onClick={onNext}>Next</Button>
      </div>

      <div className="absolute bottom-4 right-4 flex gap-4 text-white">
        {slides.map((s, i) => (
          <div key={i} className={`w-4 h-4 rounded-full ${slide === s ? "bg-neutral-300" : "bg-neutral-700"}`}
               onClick={() => setSlide(s)} />
        ))}
      </div>
    </div>
  )
}

const Button = ({ children, ...props }: PropsWithChildren<HTMLAttributes<HTMLButtonElement>>) => {
  return <button
    className="text-white bg-black px-4 py-2 rounded-md shadow hover:bg-neutral-800 hover:drop-shadow-md transition-all" {...props}>{children}</button>
}
