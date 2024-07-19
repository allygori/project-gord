"use client";

import { useRef } from "react";
import Container from "@/app/components/container";
import PageHero from "./components/hero/page-hero";
import SectionSteps from "./components/steps/steps";
import SectionBenefits from "@/app/components/sections/home/benefits";
import SectionFaq from "@components/sections/home/faq";
import SectionContact from "./components/contact";
import SectionTestimony from "@components/sections/home/testimony";
// import ImageHero2 from "@public/assets/img/hero/gorden-rumah/IMG20240609174103.jpg";
// import Image from "next/image";

type Props = {};

const GordenKantorPage = ({}: Props) => {
  const stepsRef = useRef<HTMLElement | null>(null);

  const handleCTA1Click = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    event.preventDefault();
    window.scrollTo({
      top: stepsRef?.current?.offsetTop ? stepsRef?.current?.offsetTop - 40 : 0,
      behavior: "smooth",
    });
  };

  return (
    <main className="min-h-screen min-w-full">
      {/* section:page-hero */}
      <PageHero onCTA1Click={handleCTA1Click} />

      {/* section:stats */}
      {/* <SectionStats /> */}
      {/* <div className="relative">
        <Image
          src={ImageHero2}
          alt="Test 2"
          className="object-contain object-center"
        />
      </div> */}

      {/* section:steps */}
      <SectionSteps ref={stepsRef} />

      {/* section:benefits */}
      <Container as="section" className="mb-8 w-11/12 xl:w-10/12">
        <SectionBenefits as="div" />
      </Container>

      {/* section:testimony */}
      <SectionTestimony className="mb-0" />

      {/* section:faq */}
      <SectionFaq />

      {/* section:contact */}
      <SectionContact />
    </main>
  );
};

export default GordenKantorPage;
