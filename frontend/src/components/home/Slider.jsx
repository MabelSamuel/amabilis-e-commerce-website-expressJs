import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import sliderImage from "@/assets/slider-2.webp";
import SwiperSlideContent from "@/components/home/SwiperSlideContent";

function Slider() {
  const sliderContent = [
    { heading: "Male Clothes" },
    { heading: "Female Clothes" },
    { heading: "Kid Clothes" },
    { heading: "Accessories" },
  ];
  return (
    <Swiper
      spaceBetween={0}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
    >
      {sliderContent.map((content) => (
        <SwiperSlide>
          <SwiperSlideContent
            sliderImage={sliderImage}
            heading={content.heading}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Slider;
