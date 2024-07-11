import clsx from "clsx";
import Container from "@components/container";
import { ButtonWA1 } from "@components/buttons";

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
        backgroundColor: "#e8f7f6",
        opacity: "0.8",
        backgroundImage: "radial-gradient(#053b50 0.5px, #e8f7f6 0.5px)",
        backgroundSize: "10px 10px",
      }}
    >
      {/* Pattern with overlay color as background and text on top of it */}
      <Container className="h-full w-11/12 xl:w-10/12">
        <div className="flex h-full w-full flex-col justify-center xl:w-6/12">
          <h2 className="mb-4 text-xl font-semibold text-brand-95 xl:text-3xl">
            Desain gorden sesuai kebutuhan
            <br />
            rumah atau kantor Anda
          </h2>
          <p className="mb-8 text-sm xl:text-base">
            Dapatkan diskon 10% untuk pemesanan gorden di wilayah Jabodebtabek.
            Tunggu apalagi, konsultasikan sekarang.
          </p>

          <div className="w-10/12 xl:w-6/12">
            <ButtonWA1 className="uppercase">DAPATKAN DISKONNYA</ButtonWA1>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
