import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import { sliderContent } from "@/lib/home-page";
import SwiperSlideContent from "@/components/home/SwiperSlideContent";

function Slider() {
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
            sliderImage={content.image}
            heading={content.heading}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Slider;
