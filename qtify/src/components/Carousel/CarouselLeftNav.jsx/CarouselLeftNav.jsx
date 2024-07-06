import React, { useEffect, useState } from "react";
import { ReactComponent as LeftNav } from "../../../assets/prev_svg.svg";
import { useSwiper } from "swiper/react";
import styles from "./CarouselLeftNav.module.css";

const CarouselLeftNav = () => {
  const swiper = useSwiper();
  const [isBeginning, setIsBeginning] = useState(swiper.isBeginning);
  useEffect(() => {
    swiper.on("slideChange", () => {
      setIsBeginning(swiper.isBeginning);
    });
  }, [swiper]);
  return (
    <div className={styles.leftnav}>
      {!isBeginning && <LeftNav onClick={() => swiper.slidePrev()} />}
    </div>
  );
};

export default CarouselLeftNav;
