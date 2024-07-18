"use client";

import { useRef } from "react";
import Container from "@/app/components/container";
import PageHero from "./components/hero/page-hero";
// import SectionStats from "./components/stats/stats";
import SectionSteps from "./components/steps/steps";
import SectionBenefits from "./components/benefits";
import SectionFaq from "@components/sections/home/faq";
import SectionContact from "./components/contact";
import SectionTestimony from "@components/sections/home/testimony";

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

    // stepsRef?.current?.scrollTo({
    //   top: stepsRef?.current?.offsetTop - 40,
    //   behavior: "smooth",
    // });

    // .scrollIntoView({
    //   behavior: "smooth",
    // });
  };

  return (
    <main className="min-h-screen min-w-full">
      {/* section:page-hero */}
      <PageHero onCTA1Click={handleCTA1Click} />

      {/* section:stats */}
      {/* <SectionStats /> */}

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
