import React, { useEffect, useState } from "react";
// import { ReactComponent as NextIcon } from "../../assets/next_svg.svg";
// import { ReactComponent as PrevIcon } from "../../assets/prev_svg.svg";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation"; // import required modules

import SwiperCore from "swiper";
import { Navigation } from "swiper/modules";
import useWindowSize from "../../hooks/useWindowSize";

// install Swiper modules
SwiperCore.use([Navigation]);

const Carousel = ({ children, data, render }) => {
  const [slides, setSlides] = useState({
    slideNum: 6,
    spaceBetween: 30,
  });
  const { size } = useWindowSize();

  useEffect(() => {
    const slidesPerView = () => {
      if (Number(size.width) <= 1440 && Number(size.width) > 990) {
        setSlides({
          slideNum: 4,
          spaceBetween: -55,
        });
      } else if (Number(size.width) <= 990 && Number(size.width) > 775) {
        setSlides({
          slideNum: 3,
          spaceBetween: 0,
        });
      } else if (Number(size.width) <= 775 && Number(size.width) > 575) {
        setSlides({
          slideNum: 2,
          spaceBetween: 0,
        });
      } else if (Number(size.width) <= 575) {
        setSlides({
          slideNum: 1,
          spaceBetween: 0,
        });
      } else {
        setSlides({
          slideNum: 6,
          spaceBetween: -30,
        });
      }
    };
    slidesPerView();
  }, [size.width]);

  return (
    <>
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={slides.spaceBetween}
        slidesPerView={slides.slideNum}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {data.map((el) => {
          return <SwiperSlide key={el.id}>{render(el)}</SwiperSlide>;
        })}
      </Swiper>
    </>
  );
};

export default Carousel;
