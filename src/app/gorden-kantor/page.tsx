import { Metadata } from "next";
import Container from "@/app/components/container";
import PageHero from "./components/hero/page-hero";
// import SectionStats from "./components/stats/stats";
import SectionSteps from "./components/steps/steps";
import SectionBenefits from "./components/benefits";
import SectionFaq from "@components/sections/home/faq";
import SectionContact from "./components/contact";
import SectionTestimony from "@components/sections/home/testimony";

const HOSTNAME = process?.env?.NEXT_PUBLIC_HOSTNAME ?? "ikagorden.com";

export const metadata: Metadata = {
  title: "IKA Gorden - Jasa Pembuatan Gorden Kantor",
  description:
    "Jasa pembuatan gorden kantor vertical blind, horizontal blind, roller blind, wooden blind dan model lainnya.",
  alternates: {
    canonical: `https://${HOSTNAME}/gorden-kantor`,
  },
};

type Props = {};

const GordenKantorPage = ({}: Props) => {
  return (
    <main className="min-h-screen min-w-full">
      {/* section:page-hero */}
      <PageHero />

      {/* section:stats */}
      {/* <SectionStats /> */}

      {/* section:steps */}
      <SectionSteps />

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
