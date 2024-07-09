import "swiper/css";
import "swiper/css/effect-cards";
import styles from "./portfolio-slide.module.css";

import Image from "next/image";
import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";
import { EffectCards } from "swiper/modules";
import { PORTFOLIOS } from "./portfolio.constant";

type Props = {
  className?: string;
};

const PortfolioSlideCards = ({ className = "" }: Props) => {
  return (
    <Swiper
      effect={"cards"}
      grabCursor={true}
      modules={[EffectCards]}
      className="mySwiper"
    >
      {PORTFOLIOS.map((item, idx) => {
        return (
          <SwiperSlide
            key={idx}
            className={`${styles["ovveride-height"]} ${styles["ovveride-width"]}`}
          >
            <div className="h-full">
              <div className="aspect-video h-[500px] w-auto">
                <Image src={item.photo} alt={`${item.text}-${idx}`} />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default PortfolioSlideCards;
