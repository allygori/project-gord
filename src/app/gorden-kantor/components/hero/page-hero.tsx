import clsx from "clsx";
import Image from "next/image";
import ImageHero from "@public/assets/img/hero/61e2fef39d795a620caad1b47461f4b1.jpg";
import Container from "@/app/components/container";
import { ButtonWA } from "@components/buttons";

type Props = {
  className?: string;
  onCTA1Click?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => void;
  // onCTA2Click?: () => void;
};

const PageHero = ({
  className = "",
  onCTA1Click = () => {},
  // onCTA2Click = () => {},
}: Props) => {
  return (
    <section
      className={clsx(`h-full min-h-screen min-w-full bg-brand-580`, className)}
    >
      {/* bg-[#f4f4f4] */}
      {/* bg-[#fff4ee] */}
      {/* bg-[#ffeee5] */}
      {/* bg-[#edeae7] */}
      <Container className="flex w-full flex-col items-center justify-center md:w-11/12 md:justify-start lg:h-screen lg:w-11/12 lg:flex-row lg:justify-start lg:space-x-2 xl:w-10/12 xl:justify-start">
        {/* side:left */}
        <div className="order-2 mb-10 mt-32 flex w-11/12 flex-col items-start justify-center md:mb-0 md:w-8/12 md:translate-y-4 lg:order-1 lg:mt-0 lg:h-screen lg:w-5/12 xl:w-5/12">
          <p className="mb-2 text-lg font-medium text-brand-2-200 md:mb-4">
            Gorden Kantor
          </p>
          <h1 className="text-left text-3xl font-bold leading-snug text-brand-100 xl:text-5xl xl:leading-none">
            {/* Gorden Murah Dan Berkualitas Untuk Kantor Anda */}
            Solusi bagi Anda yang Sedang Mencari Gorden untuk Kantor
            {/* Gorden Kantor Murah dan Berkualitas */}
          </h1>
          <span className="my-3 block h-2 w-4/12 rounded-br rounded-tr bg-brand-2-200" />
          <p className="mb-5 text-base font-normal text-[#193E6C] xl:text-lg">
            Tersedia berbagai macam model, antara lain: vertical blind,
            horizontal blind, roller blind, roman shades & model lainnya.
          </p>

          <div className="flex flex-row space-x-3">
            <button
              type="button"
              className="overflow-hidden rounded-lg border border-transparent bg-brand-2-200 px-4 py-4 text-center text-sm font-medium text-white hover:bg-brand-2-300 lg:px-4 lg:py-3 lg:text-base"
              onClick={(event) => onCTA1Click(event)}
            >
              Pelajari Selengkapnya
            </button>
            <ButtonWA
              className="overflow-hidden rounded-lg border border-brand-2-200 px-4 py-4 text-center text-sm font-medium text-brand-2-300 hover:bg-brand-2-300 hover:text-white lg:px-4 lg:py-3 lg:text-base"
              message="Halo IKA Gorden, saya ingin memesan gorden kantor "
            >
              Hubungi Kami
            </ButtonWA>
            {/* <Link href="" className="overflow-hidden rounded-lg border border-brand-2-200 px-4 py-4 text-center text-sm font-medium text-brand-2-300 hover:bg-brand-2-300 hover:text-white lg:px-4 lg:py-3 lg:text-base">
              Hubungi Kami
            </Link> */}
            {/* <button
              type="button"
              className="overflow-hidden rounded-lg border border-brand-2-200 px-4 py-4 text-center text-sm font-medium text-brand-2-300 hover:bg-brand-2-300 hover:text-white lg:px-4 lg:py-3 lg:text-base"
            >
              Hubungi Kami
            </button> */}
          </div>
        </div>

        {/* side:right */}
        <div className="order-1 flex h-[50vh] w-full translate-y-20 items-center justify-center lg:order-2 lg:h-screen lg:w-6/12 lg:-translate-y-10 lg:items-center lg:justify-end">
          <div className="relative flex h-full w-8/12 items-center justify-center lg:w-7/12">
            <div className="rihgt-0 absolute left-0 mx-auto text-center lg:bottom-0 lg:left-0">
              {/* <span
                className={`absolute -right-2 -top-2 -z-10 block h-full w-full border-[1.5px] border-[#FFA06E] bg-transparent`}
                style={{
                  borderRadius: "45% 55% 51% 49% / 50% 29% 71% 50%",
                }}
              />
              <span
                className={`absolute -right-4 -top-4 -z-10 block h-full w-full border-[1.5px] border-[#FFA06E] bg-transparent`}
                style={{
                  borderRadius: "45% 55% 51% 49% / 50% 29% 71% 50%",
                }}
              />
              <span
                className={`absolute -right-6 -top-6 -z-10 block h-full w-full border-[1.5px] border-[#FFA06E] bg-transparent`}
                style={{
                  borderRadius: "45% 55% 51% 49% / 50% 29% 71% 50%",
                }}
              /> */}
              <Image
                src={ImageHero}
                alt="Gorden kantor di IKA Gorden"
                className="z-0 overflow-hidden"
                style={{
                  // borderRadius: "39% 40% 28% 37% / 64% 46% 39% 23%",
                  // borderRadius: "45% 55% 51% 49% / 50% 29% 71% 50%",
                  // borderRadius: "48% 44% 51% 42% / 34% 45% 0% 43%",
                  borderRadius: "48% 44% 51% 42% / 44% 45% 43% 43%",
                }}
              />

              <div className="absolute -left-4 top-6 rounded-lg border border-transparent bg-brand-2-50 bg-opacity-90 p-2 shadow-md drop-shadow-md lg:-left-4 lg:top-4 lg:rounded-lg lg:px-5 lg:py-2.5">
                <p className="m-0 text-center text-xs font-medium text-brand-100 md:text-sm">
                  Kustomisasi <br />
                  Desain
                  {/* <br /> */}
                  {/* <span className="text-brand-2-300">Kualitas</span> */}
                  {/* Kualitas <span className="text-brand-2-300">#1</span> */}
                </p>
              </div>

              <div className="absolute -right-12 top-1/3 rounded-lg border border-transparent bg-brand-2-50 bg-opacity-90 p-2 shadow-md drop-shadow-md lg:-right-16 lg:rounded-lg lg:px-5 lg:py-2.5">
                <p className="m-0 text-center text-xs font-medium text-brand-100 md:text-sm">
                  Harga <br />
                  Terjangkau
                </p>
              </div>

              <div className="absolute -left-12 bottom-24 rounded-lg border border-transparent bg-brand-2-50 bg-opacity-90 p-2 shadow-md drop-shadow-md lg:rounded-lg lg:px-5 lg:py-2.5">
                <p className="m-0 text-center text-xs font-medium text-brand-100 md:text-sm">
                  Tampilan <br />
                  Premium & Elegan
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PageHero;
