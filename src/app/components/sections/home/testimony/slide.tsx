"use client";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import "swiper/css/autoplay";
import styles from "./slide.module.css";

import { useState, useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";
import { Autoplay, FreeMode, Pagination, Thumbs } from "swiper/modules";
import { REVIEWS } from "./reviews.constant";
import Rating from "./rating";

type Props = {};

const Slide = ({}: Props) => {
  const mainSwiperRef = useRef<SwiperRef>(null);
  const thumbsSwiperRef = useRef<SwiperRef>(null);
  const [mainRealIndex, setMainRealIndex] = useState<number>(0);
  const [mainPreviousRealIndex, setMainPreviousRealIndex] = useState<number>(0);

  const onMainActiveIndexChange = (realIndex: number) => {};

  return (
    <Swiper
      ref={mainSwiperRef}
      modules={[Autoplay, FreeMode, Pagination, Thumbs]}
      spaceBetween={0}
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
      // thumbs={{ swiper: thumbsSwiper }}
      // pagination={{
      //   type: "fraction",
      //   renderFraction(currentClass, totalClass) {
      //     return `
      //     <div class="bg-white/75 text-center text-xs text-gray-800 px-1 py-0.5 border border-gray-300 rounded-md inline-flex opacity-90">
      //       <span class="${currentClass}"></span> / <span class="${totalClass}"></span>
      //     </div>
      //   `;
      //   },
      // }}
      // className={`${styles["swiper-ovveride"]}`}
      // style={
      //   {
      //     "--swiper-navigation-color": "#fff",
      //     "--swiper-pagination-color": "#fff",
      //   } as CSSProperties
      // }
      onSlideChange={(swiper) => onMainActiveIndexChange(swiper.realIndex)}
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
