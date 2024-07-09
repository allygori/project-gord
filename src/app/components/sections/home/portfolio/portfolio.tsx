import clsx from "clsx";
import Image from "next/image";
import Container from "@components/container";
import PortfolioSlide from "./portfolio-slide";
import PortfolioSlideCards from "./portfolio-slide-cards";
import { ButtonWA1 } from "@components/buttons";
import { PORTFOLIOS } from "./portfolio.constant";

type Props = {
  className?: string;
};

const Portfolio = ({ className = "" }: Props) => {
  return (
    <section className={clsx("flex flex-col xl:flex-row", className)}>
      <div className="w-full xl:w-6/12">
        <Container className="w-11/12 xl:w-8/12">
          <h2 className="mb-6 text-left text-xl font-medium text-brand-100 xl:mb-12 xl:text-3xl">
            <span
              style={{
                background: "linear-gradient(120deg, #f2f623 0%, #f2f623 100%)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "50% 25%",
                backgroundPosition: "10% 90%",
              }}
            >
              Projects:
            </span>
          </h2>
          <p className="mb-4 text-left text-2xl text-brand-95 xl:text-4xl">
            Kami Memberikan Produk dan Pelayanan Terbaik
          </p>
          <p className="mb-4 text-left text-base text-brand-100">
            Sebagai penyedia layanan gorden terkemuka, kami memiliki portofolio
            yang membuktikan kualitas dan kepercayaan yang kami berikan kepada
            ratusan pelanggan setia kami. Dari proyek-proyek berskala kecil
            hingga besar, kami selalu memberikan hasil terbaik yang memuaskan
            kebutuhan setiap pelanggan kami.
          </p>
          <p className="mb-6 text-left text-base text-brand-100">
            Tim kami siap membantu Anda menemukan gorden impian Anda dan
            memastikan proses pembelian berjalan lancar dari awal hingga akhir.
            Konsultasikan sekarang.
          </p>

          <div className="blcok mb-4 md:hidden">
            <PortfolioSlide />
          </div>

          <ButtonWA1 className="uppercase">KONSULTASI GRATIS</ButtonWA1>
        </Container>
      </div>
      <div className="hidden w-full md:block xl:w-6/12">
        {/* {PORTFOLIOS.map((item, idx) => {
          return (
            <div key={idx} className="h-auto">
              <div className="relative aspect-auto h-[500px] w-auto">
                <Image
                  src={item.photo}
                  alt={`${item.text}-${idx}`}
                  style={{ objectFit: "contain" }}
                  fill={true}
                />
              </div>
            </div>
          );
        })} */}
        <PortfolioSlide />
        {/* <PortfolioSlideCards /> */}
      </div>
    </section>
  );
};

export default Portfolio;