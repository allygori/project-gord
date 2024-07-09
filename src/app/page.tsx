"use client";

import { useEffect, useState, useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/app/components/container";
import Navbar from "@components/navbar";
import ImageLogo from "@public/assets/img/logo/miruora.svg";
import ConfigContext, { type ConfigContextType } from "@components/config";
import SectionMainHero from "@components/sections/hero/main-hero";
import SectionCategory from "@components/sections/home/category";
import SectionBenefits from "@components/sections/home/benefits";
import SectionScopeOfWork from "@/app/components/sections/home/scope-of-work";
import SectionPortfolio from "@components/sections/home/portfolio";
import SectionTestimony from "@components/sections/home/testimony";
import SectionContact from "@components/sections/home/contact";

export default function Home() {
  const { layout } = useContext(ConfigContext) as ConfigContextType;
  const [scroll, setScroll] = useState(false);
  const year = new Date().getFullYear();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 10);
    });
  });

  return (
    <>
      <header
        className={`dark:border-gray-70 fixed start-0 top-0 z-20 w-full ${
          scroll
            ? `animate-fade-in-down border-b border-gray-200 bg-white`
            : "bg-transparent py-4"
        }`}
        style={{ height: layout.header.height }}
      >
        <Container className="mx-auto flex h-full w-11/12 flex-wrap items-center justify-between xl:w-10/12">
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Image
              src={ImageLogo}
              alt="Ika Gorden Logo"
              width={32}
              height={32}
            />
            <span className="self-center whitespace-nowrap text-xl font-semibold text-brand-100 xl:text-2xl">
              Ika Gorden
            </span>
          </Link>
          <Navbar />
        </Container>
      </header>
      <main className="min-h-screen w-full">
        {/* section:hero */}
        <SectionMainHero />

        {/* section:category */}
        <SectionCategory className="mb-8" />

        {/* section:benefits */}
        <Container as="section" className="mb-8 w-11/12 xl:w-10/12">
          <SectionBenefits as="div" />
        </Container>

        {/* section:scope */}
        <SectionScopeOfWork className="flex items-start bg-brand-200 px-8 py-12" />

        {/* section:portfolio */}
        <SectionPortfolio className="py-12" />

        {/* section:testimony */}
        <SectionTestimony className="mb-0" />

        {/* section:contact */}
        <SectionContact />
      </main>
      <footer className="m-0 bg-brand-95">
        <Container className="flex w-11/12 flex-col bg-brand-95 py-5 xl:w-10/12 xl:flex-row xl:py-12">
          <div className="mb-4 mr-0 flex-1 xl:mb-0 xl:mr-4">
            <h3 className="text-base text-white xl:text-lg">Alamat</h3>
            <address className="text-sm not-italic text-white md:text-sm">
              Jalan Graha Mitra Citra blok K 13 no.3 <br />
              Kelurahan Panongan, Kecamatan Panongan, <br />
              Jalan Citra Raya Boulevard, Cikupa, Kabupaten Tangerang, Banten
              15711.
            </address>
          </div>
          <div className="mb-4 mr-0 flex-1 xl:mb-0 xl:mr-4">
            <h3 className="text-base text-white xl:text-lg">Kontak</h3>
            <p className="text-sm text-white md:text-sm">+62 895-3261-63269</p>
          </div>
          <div className="mb-4 mr-0 flex-1 xl:mb-0 xl:mr-4">
            <h3 className="text-base text-white xl:text-lg">Jam Operasional</h3>
            <p className="text-sm text-white md:text-sm">Senin-Minggu</p>
            <p className="text-sm text-white md:text-sm">06:00 - 21.30</p>
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
