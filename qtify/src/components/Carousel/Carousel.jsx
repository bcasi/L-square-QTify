import React from "react";
// import { ReactComponent as NextIcon } from "../../assets/next_svg.svg";
// import { ReactComponent as PrevIcon } from "../../assets/prev_svg.svg";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation"; // import required modules

import SwiperCore from "swiper";
import { Navigation } from "swiper/modules";
import useWindowSize from "../../hooks/useWindowSize";
import useSlides from "../../hooks/useSlides";

// install Swiper modules
SwiperCore.use([Navigation]);

const Carousel = ({ data, render }) => {
  const size = useWindowSize();

  const { spaceBetween, slideNum } = useSlides(size);

  return (
    <>
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={spaceBetween}
        slidesPerView={slideNum}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {data?.map((el) => {
          return <SwiperSlide key={el.id}>{render(el)}</SwiperSlide>;
        })}
      </Swiper>
    </>
  );
};

export default Carousel;
