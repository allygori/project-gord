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
      modules={[FreeMode, Pagination, Thumbs]}
      spaceBetween={0}
      loop={false}
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
              {/* after:absolute after:bottom-0 after:left-0 after:h-[150px] after:w-full after:bg-gradient-to-t after:from-white after:to-transparent */}
              <div className="relative">
                <Image src={item.photo} alt={`${item.text}-${idx}`} />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default PortfolioSlide;
