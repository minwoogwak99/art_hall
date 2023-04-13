import { useCallback } from "react";
import "./home.css";
import useEmblaCarousel from "embla-carousel-react";
import MainSlides from "../../components/mainSlides/MainSlides";

useEmblaCarousel.globalOptions = { loop: true };

function Home() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "center" });

  const mainSlideContents = require("../../mainSlideContents");

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="home">
      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            <div className="embla__slide">
              <MainSlides content={mainSlideContents[0]} />
            </div>
            <div className="embla__slide">
              <MainSlides content={mainSlideContents[1]} />
            </div>
            <div className="embla__slide">
              <MainSlides content={mainSlideContents[2]} />
            </div>
          </div>
        </div>

        <div className="buttons">
          <button className="embla__prev" onClick={scrollPrev}>
            <i class="fa-solid fa-arrow-left"></i>
          </button>
          <button className="embla__next" onClick={scrollNext}>
            <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
