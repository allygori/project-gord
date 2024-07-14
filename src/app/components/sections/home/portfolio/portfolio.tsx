import clsx from "clsx";
import Container from "@components/container";
import PortfolioSlide from "./portfolio-slide";
import { ButtonWA1 } from "@components/buttons";

type Props = {
  className?: string;
};

const Portfolio = ({ className = "" }: Props) => {
  return (
    <section className={clsx("flex flex-col lg:flex-row", className)}>
      <div className="w-full lg:mr-2 lg:w-6/12 xl:w-6/12">
        <Container className="w-11/12 lg:w-10/12 xl:w-8/12">
          <h2 className="mb-6 text-left text-xl font-medium text-brand-100 xl:mb-12 xl:text-3xl">
            <span
              style={{
                background: "linear-gradient(120deg, #f2f623 0%, #f2f623 100%)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "50% 25%",
                backgroundPosition: "10% 90%",
              }}
            >
              Portofolio
            </span>
          </h2>
          <p className="mb-4 text-left text-2xl text-brand-95 xl:text-4xl">
            Kami Memberikan Produk dan Pelayanan Terbaik
          </p>
          <p className="mb-8 text-left text-sm text-brand-100 md:mb-8 lg:text-base xl:mb-6">
            Kami memiliki portofolio yang membuktikan kualitas dan kepercayaan
            yang kami terima dari ratusan pelanggan kami. Dari proyek berskala
            kecil hingga besar, kami berusaha memberikan hasil terbaik untuk
            memenenuhi kebutuhan setiap pelanggan kami.
          </p>
          {/* <p className="mb-6 text-left text-sm text-brand-100 xl:text-base">
            Tim kami siap membantu Anda menemukan gorden impian Anda dan
            memastikan proses pembelian berjalan lancar dari awal hingga akhir.
            Konsultasikan sekarang.
          </p> */}

          <div className="relative mb-4 block after:absolute after:bottom-5 after:left-5 after:h-full after:w-full after:overflow-hidden after:rounded-lg after:bg-brand-90 after:bg-opacity-20 lg:hidden">
            <PortfolioSlide />
          </div>

          <div className="flex w-full items-center justify-center lg:justify-start">
            <ButtonWA1
              className="uppercase"
              message="Halo, saya tertarik untuk memesan gorden, bagaimana prosesnya?"
            >
              KONSULTASI GRATIS
            </ButtonWA1>
          </div>
        </Container>
      </div>
      <div className="hidden w-full lg:block lg:w-6/12">
        <div className="relative mb-4 hidden after:absolute after:right-10 after:top-10 after:h-full after:w-full after:overflow-hidden after:rounded-lg after:bg-brand-90 after:bg-opacity-20 lg:block">
          <PortfolioSlide />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
