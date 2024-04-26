import { useEffect } from "react"
import useEmblaCarousel from "embla-carousel-react"

export function Carousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false })

  useEffect(() => {
    if (!emblaApi) {
      return
    }
  }, [emblaApi])

  return (
    <div className="embla overflow-hidden" ref={emblaRef}>
      <div className="embla__container flex">
        <div className="embla__slide flex-[0_0_100%] min-w-0">Slide 1</div>
        <div className="embla__slide flex-[0_0_100%] min-w-0">Slide 2</div>
        <div className="embla__slide flex-[0_0_100%] min-w-0">Slide 3</div>
      </div>
      <button onClick={() => emblaApi?.scrollPrev()}>Prev</button>
      <button onClick={() => emblaApi?.scrollNext()}>Next</button>
    </div>
  )
}
