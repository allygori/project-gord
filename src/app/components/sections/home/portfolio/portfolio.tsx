import clsx from "clsx";
import Container from "@components/container";
import PortfolioSlide from "./portfolio-slide";
import { ButtonWA1 } from "@components/buttons";

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
          <p className="mb-4 text-left text-sm text-brand-100 xl:text-base">
            Kami memiliki portofolio yang membuktikan kualitas dan kepercayaan
            yang kami terima dari ratusan pelanggan kami. Dari proyek-proyek
            berskala kecil hingga besar, kami selalu memberikan hasil terbaik
            yang memuaskan kebutuhan setiap pelanggan kami.
          </p>
          <p className="mb-6 text-left text-sm text-brand-100 xl:text-base">
            Tim kami siap membantu Anda menemukan gorden impian Anda dan
            memastikan proses pembelian berjalan lancar dari awal hingga akhir.
            Konsultasikan sekarang.
          </p>

          <div className="relative mb-4 block after:absolute after:bottom-5 after:left-5 after:h-full after:w-full after:overflow-hidden after:rounded-lg after:bg-brand-200 md:hidden">
            <PortfolioSlide />
          </div>

          {/* <div className="relative mb-4 block md:hidden">
            <Image src={Image8} alt={`Alt Tex`} />
          </div> */}

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
        <div>
          {/* <span className="block h-20 w-full bg-brand-100" /> */}
          {/* <div className="relative">
            <Image src={Image8} alt={`Alt Tex`} />
          </div> */}
          <div className="relative mb-4 hidden after:absolute after:right-10 after:top-10 after:h-full after:w-full after:overflow-hidden after:rounded-lg after:bg-brand-200 md:block">
            <PortfolioSlide />
          </div>
        </div>
        {/* <PortfolioSlideCards /> */}
      </div>
    </section>
  );
};

export default Portfolio;
