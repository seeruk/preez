import { HTMLAttributes, PropsWithChildren, useId } from "react"
import { usePreez } from "@/hooks/usePreez.ts"

export const Slide = ({ children, ...props }: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) => {
  const slideId = useId()
  const { slide } = usePreez()

  return (
    <div {...props} data-slide-id={slideId}>{slide === slideId && slide} {children}</div>
  )
}
