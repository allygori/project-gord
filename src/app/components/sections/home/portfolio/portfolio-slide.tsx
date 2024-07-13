"use client";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import styles from "./portfolio-slide.module.css";

import type { CSSProperties } from "react";
import { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";
import { Autoplay, FreeMode, Navigation, Pagination } from "swiper/modules";
import { PORTFOLIOS } from "./portfolio.constant";

type Props = {};

const PortfolioSlide = ({}: Props) => {
  const mainSwiperRef = useRef<SwiperRef>(null);

  const onMainActiveIndexChange = (realIndex: number) => {};

  return (
    <Swiper
      ref={mainSwiperRef}
      modules={[Autoplay, FreeMode, Navigation, Pagination]}
      slidesPerView={1}
      spaceBetween={0}
      autoplay={{
        delay: 2213,
        disableOnInteraction: true,
        pauseOnMouseEnter: true,
      }}
      pagination={{
        dynamicBullets: true,
      }}
      loop={false}
      navigation={true}
      centeredSlides={true}
      grabCursor={true}
      autoHeight={false}
      onSlideChange={(swiper) => onMainActiveIndexChange(swiper.realIndex)}
      className="overflow-hidden rounded-lg"
      style={
        {
          "--swiper-pagination-color": "rgba(255, 255, 255, 0.75)",
          "--swiper-navigation-color": "rgba(255, 255, 255, 0.5)",
        } as CSSProperties
      }
    >
      {PORTFOLIOS.map((item, idx) => {
        return (
          <SwiperSlide
            key={idx}
            className={`h-96 w-full overflow-hidden rounded-lg border border-[#e3e4e7]`}
          >
            {/* <div className="h-auto"> */}
            {/* after:absolute after:bottom-0 after:left-0 after:h-[150px] after:w-full after:bg-gradient-to-t after:from-white after:to-transparent */}
            <div className="relative flex h-full items-center justify-center">
              <Image
                src={item.photo}
                alt={`${item.text}-${idx}`}
                className="h-full w-full object-cover"
                quality={100}
              />
            </div>
            {/* </div> */}
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default PortfolioSlide;
