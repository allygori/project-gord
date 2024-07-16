// "use client";
import { Suspense } from "react";
import type { Metadata } from "next";
import Container from "@/app/components/container";
import SectionMainHero from "@/app/components/sections/home/hero";
import SectionNumbers from "@components/sections/home/numbers";
import SectionBenefits from "@components/sections/home/benefits";
import SectionScopeOfWork from "@/app/components/sections/home/scope-of-work";
import { Category2 as SectionCategory } from "@/app/components/sections/home/category";
import SectionPortfolio from "@components/sections/home/portfolio";
import SectionTestimony from "@components/sections/home/testimony";
import SectionContact from "@components/sections/home/contact";
import SectionFaq from "@components/sections/home/faq";
import SectionSteps from "@components/sections/home/steps";
import { HeaderOne } from "@components/sections/home/headers";
import { FooterOne } from "@components/sections/home/footers";

const HOSTNAME = process?.env?.NEXT_PUBLIC_HOSTNAME ?? "ikagorden.com";

export const metadata: Metadata = {
  title: "IKA Gorden",
  description:
    "Jasa pembuatan gorden rumah, kantor, hotel, rumah sakit & keperluan lainnya. Harga terjangkau tanpa mengurangi kualitas produk.",
  alternates: {
    canonical: `https://${HOSTNAME}`,
  },
};

export default function Home() {
  return (
    <>
      {/* header */}
      <HeaderOne />

      {/* main */}
      <main className="min-h-screen w-full">
        {/* section:hero */}
        <SectionMainHero />

        {/* section:numbers */}
        <SectionNumbers />

        {/* section:scope */}
        <SectionScopeOfWork className="flex items-start bg-brand-200 px-8 py-12" />

        {/* section:category */}
        <SectionCategory className="bg-brand-580 mb-4 bg-opacity-45 py-8 md:mb-8 md:py-10 lg:py-12" />

        {/* section:benefits */}
        <Container as="section" className="mb-8 w-11/12 xl:w-10/12">
          <SectionBenefits as="div" />
        </Container>

        {/* section:category */}
        {/* <SectionCategory className="mb-8" /> */}

        {/* section:portfolio */}
        <SectionPortfolio className="lg:py-12" />

        {/* section:steps */}
        <SectionSteps />

        {/* section:testimony */}
        <SectionTestimony className="mb-0" />

        {/* section:faq */}
        <SectionFaq />

        {/* section:contact */}
        <SectionContact />
      </main>

      {/* footer */}
      <FooterOne />
    </>
  );
}
