import "../styles/CarrouselImages.css";
import iconBack from "../assets/icons/arrow-back.svg";
import iconNext from "../assets/icons/arrow-next.svg";
import { useEffect, useState } from "react";
import { PropsCarrousel } from "../types";

export const CarrouselImages = ({
  images,
  auto = true,
  time = 5000,
  width,
  height,
}: PropsCarrousel): JSX.Element => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    if (auto) {
      const interval = setInterval(() => goToNext(), time);
      return () => clearInterval(interval);
    }
  }, [currentIndex]);

  return (
    <div className="carrousel" style={{ width: width, height: height }}>
      <img
        src={images[currentIndex].src}
        alt="image slide"
        loading="lazy"
        width="100%"
        height="100%"
      />
      <div className="container-btn">
        <img
          src={iconBack}
          alt="arrow back"
          width="30"
          height="30"
          loading="lazy"
          onClick={goToPrev}
          className="btn"
        />
        <img
          src={iconNext}
          alt="arrow next"
          width="30"
          height="30"
          loading="lazy"
          onClick={goToNext}
          className="btn"
        />
      </div>
    </div>
  );
};
