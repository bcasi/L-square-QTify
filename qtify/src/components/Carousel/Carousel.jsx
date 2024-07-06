import React, { useEffect } from "react";
// import { ReactComponent as NextIcon } from "../../assets/next_svg.svg";
// import { ReactComponent as PrevIcon } from "../../assets/prev_svg.svg";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import "swiper/css";

import SwiperCore from "swiper";
import { Navigation } from "swiper/modules";
import useWindowSize from "../../hooks/useWindowSize";
import useSlides from "../../hooks/useSlides";
import CarouselLeftNav from "./CarouselLeftNav.jsx/CarouselLeftNav";
import CarouselRightNav from "./CarouselRightNav.jsx/CarouselRightNav";
import styles from "./Carousel.module.css";

// install Swiper modules
// SwiperCore.use([Navigation]);

const Controls = ({ data }) => {
  const swiper = useSwiper();
  useEffect(() => {
    swiper.slideTo(0);
  }, [data, swiper]);
  return <></>;
};

const Carousel = ({ data, render }) => {
  const size = useWindowSize();

  const { spaceBetween, slideNum } = useSlides(size);

  return (
    // <div className={styles.wrapper}>
    <Swiper
      style={{ padding: "0px 2px" }}
      initialSlide={0}
      modules={[Navigation]}
      slidesPerView={slideNum}
      spaceBetween={40}
      allowTouchMove
    >
      <Controls data={data} />
      <CarouselLeftNav />
      <CarouselRightNav />
      {data?.map((el) => {
        return <SwiperSlide key={el.id}>{render(el)}</SwiperSlide>;
      })}
    </Swiper>
    // </div>
  );
};

export default Carousel;
