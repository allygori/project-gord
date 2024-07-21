"use client";

import { useRef } from "react";
import Container from "@/app/components/container";
import SectionBenefits from "@/app/components/sections/home/benefits";
import SectionFaq from "@app/produk/components/faq";
import SectionContact from "@components/sections/home/contact";
import SectionTestimony from "@components/sections/home/testimony";

type Props = {};

const ProdukPage = ({}: Props) => {
  return (
    <main className="min-h-screen min-w-full">
      {/* section:faq */}
      <Container as="section" className="mb-8 w-11/12 xl:w-10/12">
        <SectionFaq />
      </Container>

      {/* section:contact */}
      <SectionContact />
    </main>
  );
};

export default ProdukPage;
