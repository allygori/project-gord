import clsx from "clsx";
import Container from "@components/container";

type Props = {
  className?: string;
};

const Numbers = ({ className = "" }: Props) => {
  return (
    <section className={clsx("bg-brand-100", className)}>
      <Container className="flex w-full flex-row items-center justify-between px-2 text-center md:w-full md:px-0 lg:w-full lg:px-0 xl:w-10/12 xl:px-4">
        <div className="flex-1 py-8 text-center">
          <h3 className="text-base font-semibold text-white xl:text-2xl">
            10 Tahun+
          </h3>
          <p className="text-xs text-white xl:text-sm">Penggalaman</p>
        </div>
        <div className="flex-1 py-8 text-center">
          <h3 className="text-base font-semibold text-white xl:text-2xl">
            100+
          </h3>
          <p className="text-xs text-white xl:text-sm">Pelanggan</p>
        </div>
        <div className="flex-1 py-8 text-center">
          <h3 className="text-base font-semibold text-white xl:text-2xl">
            120+
          </h3>
          <p className="text-xs text-white xl:text-sm">
            Proyek <span className="hidden md:inline">Terselesaikan</span>
          </p>
        </div>
        <div className="flex-1 py-8 text-center">
          <h3 className="text-base font-semibold text-white xl:text-2xl">
            10+
          </h3>
          <p className="text-xs text-white xl:text-sm">Mitra</p>
        </div>
      </Container>
    </section>
  );
};

export default Numbers;
