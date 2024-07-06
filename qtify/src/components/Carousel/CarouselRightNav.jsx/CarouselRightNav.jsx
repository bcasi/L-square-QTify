import React, { useEffect, useState } from "react";
import { ReactComponent as RightNav } from "../../../assets/next_svg.svg";
import { useSwiper } from "swiper/react";
import styles from "./CarouselRightNav.module.css";

const CarouselRightNav = () => {
  const swiper = useSwiper();
  const [isEnd, setIsEnd] = useState(swiper.isEnd);

  useEffect(() => {
    swiper.on("slideChange", () => {
      setIsEnd(swiper.isEnd);
    });
  }, [swiper]);

  return (
    <div className={styles.rightnav}>
      {!isEnd && <RightNav onClick={() => swiper.slideNext()} />}
    </div>
  );
};

export default CarouselRightNav;
