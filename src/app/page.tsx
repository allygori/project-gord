"use client";

import { useEffect, useState, useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/app/components/container";
import Navbar from "@components/navbar";
import ImageLogo from "@public/assets/img/logo/logo.svg";
import ImageLogoWithTextWhite from "@public/assets/img/logo/logo-with-text-white.png";
import ConfigContext, { type ConfigContextType } from "@components/config";
import SectionMainHero from "@/app/components/sections/home/hero";
import SectionNumbers from "@components/sections/home/numbers";
// import SectionCategory from "@components/sections/home/category";
import SectionBenefits from "@components/sections/home/benefits";
import SectionScopeOfWork from "@/app/components/sections/home/scope-of-work";
import { Category2 as SectionCategory } from "@/app/components/sections/home/category";
import SectionPortfolio from "@components/sections/home/portfolio";
import SectionTestimony from "@components/sections/home/testimony";
import SectionContact from "@components/sections/home/contact";
import SectionFaq from "@components/sections/home/faq";
import SectionSteps from "@components/sections/home/steps";

export default function Home() {
  const { header_height } = useContext(ConfigContext) as ConfigContextType;
  const [scroll, setScroll] = useState(false);
  const year = new Date().getFullYear();

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
    <>
      {/* header */}
      <header
        className={`dark:border-gray-70 fixed start-0 top-0 z-20 w-full ${
          scroll
            ? `animate-fade-in-down border-b border-gray-200 bg-white`
            : "bg-transparent py-4"
        }`}
        style={{ height: header_height }}
      >
        <Container className="mx-auto flex h-full w-11/12 flex-wrap items-center justify-between xl:w-10/12">
          <Link
            href="/"
            className="flex items-center space-x-2 rtl:space-x-reverse"
          >
            <Image
              src={ImageLogo}
              alt="Ika Gorden Logo"
              width={32}
              height={32}
            />
            <span className="ml-0 self-center whitespace-nowrap text-xl font-semibold uppercase text-brand-100 xl:text-2xl">
              Ika Gorden
            </span>
          </Link>
          <Navbar />
        </Container>
      </header>

      {/* main */}
      <main className="min-h-screen w-full">
        {/* section:hero */}
        <SectionMainHero />

        {/* section:numbers */}
        <SectionNumbers />

        {/* section:scope */}
        <SectionScopeOfWork className="flex items-start bg-brand-200 px-8 py-12" />

        {/* section:category */}
        <SectionCategory className="mb-4 bg-brand-590 bg-opacity-45 py-8 md:mb-8 md:py-10 lg:py-12" />

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
      <footer className="m-0 bg-brand-95">
        <Container className="flex w-11/12 flex-col bg-brand-95 py-8 xl:w-10/12 xl:flex-row xl:py-12">
          <div className="mb-4 mr-0 w-full xl:mb-0 xl:mr-4 xl:w-5/12">
            {/* <IconLogoWithTextAside className="h-48 w-auto text-white" /> */}
            <div className="w-full xl:w-10/12">
              <Image
                src={ImageLogoWithTextWhite}
                alt="Ika Gorden Logo Footer"
                height={32}
                className="mb-2.5 xl:mb-3"
              />
              <p className="text-xs text-white xl:text-sm">
                IKA Gorden menerima berbagai macam pembuatan gorden custom
                sesuai permintaan pelanggan, diantaranya gorden blackout,
                vitrase, vertical blind, horizontal blind, roller blind dan
                pembuatan interior lainnya.
              </p>
            </div>
          </div>
          <div className="mb-4 mr-0 flex-1 xl:mb-0 xl:mr-4">
            <h3 className="text-base text-white xl:text-lg">Kontak</h3>
            <p className="text-xs text-white md:text-sm">+62 895-3261-63269</p>
          </div>
          <div className="mb-4 mr-0 flex-1 xl:mb-0 xl:mr-4">
            <h3 className="text-base text-white xl:text-lg">Alamat</h3>
            <address className="mb-2 text-xs not-italic text-white md:text-sm">
              Jalan Graha Mitra Citra blok K 13 no.3 Kelurahan Panongan,
              Kecamatan Panongan, <br />
              Jalan Citra Raya Boulevard, Cikupa, Kabupaten Tangerang, Banten
              15711.
            </address>
            <h3 className="text-sm text-white xl:text-base">Jam Operasional</h3>
            <p className="text-xs text-white md:text-sm">Senin-Minggu</p>
            <p className="text-xs text-white md:text-sm">06:00 - 21.30</p>
          </div>
        </Container>
        <Container className="w-11/12 bg-brand-95 py-5 xl:w-10/12">
          <p className="text-center text-xs text-white">
            © Copyright {year} IKA Gorden All Rights Reserved
          </p>
        </Container>
      </footer>
    </>
  );
}
