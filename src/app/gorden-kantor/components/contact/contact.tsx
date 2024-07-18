import clsx from "clsx";
import { Suspense } from "react";
import Container from "@components/container";
import { ButtonWA } from "@components/buttons";

type Props = {
  id?: string;
  className?: string;
};

const Contact = ({ id = "contact", className = "" }: Props) => {
  return (
    <section
      id={id}
      className={clsx("py-12 xl:py-14", className)}
      style={{
        backgroundColor: "#ebe6e0",
        opacity: "0.8",
        backgroundImage: "radial-gradient(#053b50 0.5px, #ebe6e0 0.5px)",
        backgroundSize: "10px 10px",
      }}
    >
      {/* Pattern with overlay color as background and text on top of it */}
      <Container className="h-full w-11/12 xl:w-10/12">
        <div className="flex h-full w-full flex-col justify-center xl:w-6/12">
          <h2 className="mb-4 text-xl font-semibold text-brand-2-300 xl:text-3xl">
            Desain gorden sesuai
            <br />
            kebutuhan kantor Anda
          </h2>
          <p className="mb-8 text-sm xl:text-base">
            Dapatkan <strong>Diskon 5%</strong> untuk pemesanan pertama di
            wilayah Jabodebtabek. Tunggu apalagi, konsultasikan sekarang.
            <strong>Gratis!</strong>
            <br />
            <small className="text-2xs">*Syarat & ketentuan berlaku</small>
          </p>

          <div className="w-10/12 xl:w-6/12">
            <Suspense>
              <ButtonWA
                className="overflow-hidden rounded-lg border border-transparent bg-brand-2-200 px-4 py-3 text-center text-base font-medium text-white hover:bg-brand-2-300"
                message="Halo IKA Gorden, saya ingin memesan gorden kantor. Apakah bener mendapat diskon 5%?"
              >
                DAPATKAN DISKONNYA
              </ButtonWA>
            </Suspense>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
