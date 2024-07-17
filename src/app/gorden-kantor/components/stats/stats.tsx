import clsx from "clsx";
import Container from "@components/container";

type Props = {
  className?: string;
};

const Stats = ({ className = "" }: Props) => {
  return (
    <section className={clsx("bg-brand-2-300", className)}>
      <Container className="flex w-full flex-row items-center justify-between px-2 text-center md:w-full md:px-0 lg:w-full lg:px-0 xl:w-10/12 xl:px-4">
        <div className="flex-1 py-8 text-center">
          <h3 className="text-base font-semibold text-[#fff4ee] xl:text-2xl">
            Telah Dipercaya{" "}
            {/* <span className="text-[#e7ce7c]">Lebih dari 100 Pelanggan</span>{" "} */}
            <span className="">Lebih dari 100 Pelanggan</span> <br />
            di Seluruh Indonesia
          </h3>
        </div>
      </Container>
    </section>
  );
};

export default Stats;
