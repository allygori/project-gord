"use client";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import "swiper/css/autoplay";
import styles from "./portfolio-slide.module.css";

import { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";
import { Autoplay, FreeMode, Pagination, Thumbs } from "swiper/modules";
import { PORTFOLIOS } from "./portfolio.constant";

type Props = {};

const PortfolioSlide = ({}: Props) => {
  const mainSwiperRef = useRef<SwiperRef>(null);

  const onMainActiveIndexChange = (realIndex: number) => {};

  return (
    <Swiper
      ref={mainSwiperRef}
      modules={[Autoplay, FreeMode, Pagination, Thumbs]}
      spaceBetween={0}
      autoplay={{
        delay: 1000,
        disableOnInteraction: true,
        pauseOnMouseEnter: true,
      }}
      loop={true}
      navigation={false}
      centeredSlides={false}
      grabCursor={true}
      autoHeight={false}
      onSlideChange={(swiper) => onMainActiveIndexChange(swiper.realIndex)}
    >
      {PORTFOLIOS.map((item, idx) => {
        return (
          <SwiperSlide
            key={idx}
            className={`${styles["ovveride-height"]} ${styles["ovveride-width"]}`}
          >
            <div className="h-auto">
              <div className="relative aspect-auto h-[500px] w-auto">
                <Image
                  src={item.photo}
                  alt={`${item.text}-${idx}`}
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default PortfolioSlide;
