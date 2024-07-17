import clsx from "clsx";
import Image from "next/image";
import Container from "@/app/components/container";
import ImageHero from "@public/assets/img/hero/61e2fef39d795a620caad1b47461f4b1.jpg";

type Props = {
  className?: string;
};

const PageHero2 = ({ className = "" }: Props) => {
  return (
    <section
      className={clsx(`min-h-screen min-w-full bg-[#fff4ee]`, className)}
    >
      {/* bg-[#f4f4f4] */}
      {/* bg-[#fff4ee] */}
      {/* bg-[#ffeee5] */}
      {/* bg-[#edeae7] */}
      <Container className="flex w-full flex-row items-center justify-center md:w-11/12 md:justify-start lg:w-11/12 lg:justify-start xl:w-10/12 xl:justify-start">
        {/* side:left */}
        <div className="flex h-screen w-full translate-y-2 flex-col items-start justify-center md:w-8/12 md:translate-y-4 lg:h-screen lg:w-5/12 xl:w-5/12">
          <h1 className="text-left text-3xl font-bold leading-snug text-brand-100 xl:text-5xl">
            Gorden Kantor Murah dan Berkualitas
          </h1>
          <span className="my-3 block h-2 w-4/12 rounded bg-[#FFA06E]" />
          <p className="mb-5 text-base font-normal text-[#193E6C] xl:text-lg">
            Harga Terjangkau dengan Kualitas Terbaik.
          </p>
        </div>

        {/* side:right */}
        <div className="flex h-screen w-full items-end justify-end lg:w-6/12">
          <div className="relative flex h-full w-7/12 items-center justify-center">
            <div className="absolute bottom-0 left-0 z-0">
              <span
                className={`absolute -right-2 -top-2 -z-10 block h-full w-full border-[1.5px] border-[#FFA06E] bg-transparent`}
              />
              <span
                className={`absolute -right-4 -top-4 -z-10 block h-full w-full border-[1.5px] border-[#FFA06E] bg-transparent`}
              />
              <span
                className={`absolute -right-6 -top-6 -z-10 block h-full w-full border-[1.5px] border-[#FFA06E] bg-transparent`}
              />
              <Image
                src={ImageHero}
                alt="Gorden kantor di IKA Gorden"
                className="z-0 overflow-hidden"
              />

              <div className="absolute -left-12 top-2 rounded-2xl border border-transparent bg-white px-6 py-4 shadow-md">
                <p className="m-0 text-base font-bold text-brand-100">
                  Kualitas #1
                </p>
              </div>

              <div className="absolute -right-12 top-0 rounded-2xl border border-transparent bg-white px-6 py-4 shadow-md">
                <p className="m-0 text-base font-bold text-brand-100">Murah</p>
              </div>

              <div className="absolute -left-12 bottom-24 rounded-2xl border border-transparent bg-white px-6 py-4 shadow-md">
                <p className="m-0 text-base font-bold text-brand-100">Elegan</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PageHero2;
