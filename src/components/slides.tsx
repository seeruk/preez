import { PropsWithChildren, useCallback, useEffect, useLayoutEffect, useRef, useState } from "react"

export const Slides = ({ children }: PropsWithChildren) => {
  const slidesRef = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(1)

  const onResize = useCallback(() => {
    if (!slidesRef.current) {
      return
    }

    const parent = slidesRef.current.parentElement
    const parentWidth = parent?.offsetWidth || 0
    const parentHeight = parent?.offsetHeight || 0
    const scale = Math.min(parentWidth / 960, parentHeight / 540)

    setScale(scale)
  }, [slidesRef, setScale])

  useEffect(() => {
    onResize()
  }, [onResize])

  useLayoutEffect(() => {
    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [onResize])

  return (
    <div className="absolute w-[960px] h-[540px] bg-white" ref={slidesRef} style={{ transform: `scale(${scale})` }}>
      {children}
    </div>
  )
}
