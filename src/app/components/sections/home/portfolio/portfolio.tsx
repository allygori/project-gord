import clsx from "clsx";
import Container from "@components/container";
import PortfolioSlide from "./portfolio-slide";
import { ButtonWA1 } from "@components/buttons";

const LIST = [
  {
    label: "Cluster Greenwich BSD",
  },
  {
    label: "Perumahan Suvarna Sutera Tangerang",
  },
  {
    label: "Perum Graha Raya Bintaro",
  },
  {
    label: "Klinik Bimoedika cabang BSD",
  },
  {
    label: "SMK BAM Cikupa",
  },
  {
    label: "Perumahan Citra Raya Cikupa Tangerang",
  },
  {
    label: "Perumahan Ciakar Royal Permai",
  },
  {
    label: "Perumahan Golden Park Serpong",
  },
  {
    label: "Perumahan Citra Maja Raya",
  },
  {
    label: "Area lain di Jabodetabek",
  },
];

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
            Beberapa Proyek yang Kami Kerjakan
          </p>
          <ul className="-mx-1 mb-2 flex flex-row flex-wrap p-0">
            {LIST.map((item, idx) => {
              return (
                <li
                  key={idx}
                  className="m-1 rounded-md border border-brand-100 px-1.5 py-1 text-xs font-medium text-brand-100 md:rounded-lg md:border-brand-90 md:text-brand-90"
                >
                  {item.label}
                </li>
              );
            })}
          </ul>
          <p></p>
          <p className="mb-8 text-left text-sm text-brand-100 md:mb-8 lg:text-base xl:mb-6">
            Kami sudah dipercaya beberapa pelanggan dari proyek berskala kecil
            hingga besar, kami selalu memberikan hasil terbaik untuk memenenuhi
            kebutuhan setiap pelanggan kami.
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
              gtmData={{
                event: "conversion_event_outbound_click_1",
                value: { button: "whatsapp", location: "portfolio" },
              }}
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
