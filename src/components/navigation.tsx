import { HTMLAttributes } from "react"

import { usePreez } from "@/hooks/usePreez.ts"

export const Navigation = (props: HTMLAttributes<HTMLDivElement>) => {
  const { nextSlide, prevSlide } = usePreez()

  return <div {...props}>
    <button onClick={prevSlide}>Previous</button>
    <button onClick={nextSlide}>Next</button>
  </div>
}
