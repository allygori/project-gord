"use client";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import styles from "./slide.module.css";

import type { CSSProperties } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import { REVIEWS } from "./reviews.constant";
import Rating from "./rating";

type Props = {};

const Slide = ({}: Props) => {
  return (
    <Swiper
      modules={[Autoplay, FreeMode, Pagination]}
      spaceBetween={0}
      pagination={{
        dynamicBullets: true,
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: true,
        pauseOnMouseEnter: true,
      }}
      loop={true}
      navigation={false}
      centeredSlides={false}
      grabCursor={true}
      autoHeight={false}
      style={
        {
          "--swiper-pagination-color": "#fff",
        } as CSSProperties
      }
    >
      {REVIEWS.map((item, idx) => {
        return (
          <SwiperSlide key={idx} className={`${styles["ovveride-height"]}`}>
            <div className="flex h-full flex-col bg-brand-100 px-12 py-16">
              <div className="flex flex-col items-center justify-center">
                <p
                  className="mb-10 text-center text-sm text-white xl:text-lg"
                  dangerouslySetInnerHTML={{ __html: item.description }}
                />
                {/* star */}
                <Rating
                  rate={item.rating}
                  classObject={{ height: "h-5", width: "h-5" }}
                  className="mb-4"
                />
                <div className="flex flex-row items-start">
                  <div className="mx-auto aspect-square h-12 w-12 overflow-hidden rounded-full xl:h-10 xl:w-10">
                    <Image src={item.photo} alt={item.name} />
                  </div>
                  <div className="ml-3 flex w-full flex-col justify-start">
                    <p className="text-left text-base text-white xl:text-xl">
                      {item.name}
                    </p>
                    <span className="block h-1 w-6/12 bg-brand-500 opacity-50 xl:w-8/12" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Slide;
