"use client";

import { useContext, useEffect, useState, Suspense } from "react";
import ConfigContext, { type ConfigContextType } from "@components/config";
import Container from "@/app/components/container";
import BackgroundImage from "@public/assets/img/hero/ccbe06199649759.6655870ca7846.jpg";
import { ButtonWA1 } from "@components/buttons";
import PeopleReview from "./people-review";

const MainHero = () => {
  const { header_height } = useContext(ConfigContext) as ConfigContextType;
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 10);
    });

    return () => {
      window.removeEventListener("scroll", () => {
        setScroll(window.scrollY > 10);
      });
    };
  });

  return (
    <section
      className={`min-h-screen min-w-full bg-[#edeae7]`}
      style={{
        // padding: scroll ? "0px" : `${header_height}px 0px`,
        backgroundImage: `url(${BackgroundImage.src})`,
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        width: "100%",
        height: "100%",
      }}
    >
      <Container className="flex w-full flex-row items-center justify-center md:w-11/12 md:justify-start lg:w-11/12 lg:justify-start xl:w-10/12 xl:justify-start">
        <div className="flex h-screen w-11/12 translate-y-2 flex-col items-start justify-center md:w-8/12 md:translate-y-4 lg:h-screen lg:w-5/12 xl:w-5/12">
          <h1 className="text-3xl font-bold leading-snug text-brand-100 xl:text-4xl">
            Gorden Murah Dan Berkualitas Untuk Setiap Kebutuhan Anda
          </h1>
          <span className="my-3 block h-2 w-4/12 rounded bg-[#f2f623]" />
          <p className="mb-5 text-base font-normal text-brand-100 xl:text-lg">
            Harga Terjangkau dengan Kualitas Terbaik.
          </p>

          <PeopleReview />

          <Suspense>
            <ButtonWA1
              className="uppercase"
              message="Halo IKA Gorden, saya ingin memesan gorden dan berkonsultasi mengenai "
            >
              KONSULTASI GRATIS
            </ButtonWA1>
          </Suspense>
        </div>
        {/* <div>Text HERE 2</div> */}
      </Container>
    </section>
  );
};

export default MainHero;
