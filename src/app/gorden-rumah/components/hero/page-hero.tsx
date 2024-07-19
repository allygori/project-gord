import clsx from "clsx";
import { Suspense } from "react";
import Image from "next/image";
import ImageHero from "@public/assets/img/hero/61e2fef39d795a620caad1b47461f4b1.jpg";
import ImageHero1 from "@public/assets/img/hero/gorden-rumah/IMG20240218202128.jpg";
import ImageHero2 from "@public/assets/img/hero/gorden-rumah/IMG20240609174103.jpg";
import Container from "@/app/components/container";
import { ButtonWA } from "@components/buttons";

type Props = {
  className?: string;
  onCTA1Click?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => void;
};

const PageHero = ({ className = "", onCTA1Click = () => {} }: Props) => {
  return (
    <section
      className={clsx(`h-full min-h-screen min-w-full bg-brand-200`, className)}
    >
      <Container className="h-full w-11/12 lg:w-10/12">
        <div className="flex h-screen w-full flex-1 flex-col items-start justify-center lg:w-6/12">
          <p className="mb-2 text-lg font-medium text-brand-100 md:mb-4">
            Gorden Rumah
          </p>
          <h1 className="text-left text-3xl font-bold leading-snug text-brand-100 xl:text-5xl xl:leading-none">
            {/* Gorden Murah Dan Berkualitas Untuk Kantor Anda */}
            Solusi bagi Anda yang Sedang Mencari Gorden Rumah
            {/* Gorden Kantor Murah dan Berkualitas */}
          </h1>
          <span className="my-3 block h-2 w-4/12 rounded-br rounded-tr bg-brand-100" />
          <p className="mb-5 text-base font-normal text-[#193E6C] xl:text-lg">
            Tersedia berbagai macam model, antara lain: gorden blackout 100%,
            blackout 90%, blackout 80%, gorden smokring, gorden kupu-kupu,
            vitrase & model lainnya.
          </p>

          <div className="flex flex-row space-x-3">
            <button
              type="button"
              className="overflow-hidden rounded-lg border border-transparent bg-brand-100 px-4 py-4 text-center text-sm font-medium text-white hover:bg-brand-95 lg:px-4 lg:py-3 lg:text-base"
              onClick={(event) => onCTA1Click(event)}
            >
              Pelajari Selengkapnya
            </button>
            <Suspense>
              <ButtonWA
                className="overflow-hidden rounded-lg border border-brand-100 px-4 py-4 text-center text-sm font-medium text-brand-100 hover:bg-brand-95 hover:text-white lg:px-4 lg:py-3 lg:text-base"
                message="Halo IKA Gorden, saya ingin memesan gorden kantor "
              >
                Hubungi Kami
              </ButtonWA>
            </Suspense>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PageHero;
