import { useEffect, useState } from "react";

const useSlides = (size) => {
  const [slides, setSlides] = useState({
    slideNum: 6,
    spaceBetween: 30,
  });

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

  return slides;
};

export default useSlides;
