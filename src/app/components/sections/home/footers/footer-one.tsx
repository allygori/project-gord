import Image from "next/image";
import Container from "@/app/components/container";
import ImageLogoWithTextWhite from "@public/assets/img/logo/logo-with-text-white.png";

type Props = {};

const FooterOne = ({}: Props) => {
  const year = new Date().getFullYear();

  return (
    <footer className="m-0 bg-brand-95">
      <Container className="flex w-11/12 flex-col bg-brand-95 py-8 xl:w-10/12 xl:flex-row xl:py-12">
        <div className="mb-4 mr-0 w-full xl:mb-0 xl:mr-4 xl:w-5/12">
          {/* <IconLogoWithTextAside className="h-48 w-auto text-white" /> */}
          <div className="w-full xl:w-10/12">
            <Image
              src={ImageLogoWithTextWhite}
              alt="Ika Gorden Logo Footer"
              height={32}
              className="mb-2.5 xl:mb-3"
            />
            <p className="text-xs text-white xl:text-sm">
              IKA Gorden menerima pembuatan berbagai macam gorden custom sesuai
              permintaan pelanggan, diantaranya: gorden rumah, gorden kantor,
              gorden blackout, gorden smokring, vitrase, vertical blind,
              horizontal blind, roller blind, gorden hotel, gorden rumah sakit
              dan pembuatan interior lainnya.
            </p>
          </div>
        </div>
        <div className="mb-4 mr-0 flex-1 xl:mb-0 xl:mr-4">
          <h3 className="text-base text-white xl:text-lg">Kontak</h3>
          <p className="text-xs text-white md:text-sm">+62 895-3261-63269</p>
        </div>
        <div className="mb-4 mr-0 flex-1 xl:mb-0 xl:mr-4">
          <h3 className="text-base text-white xl:text-lg">Alamat</h3>
          <address className="mb-2 text-xs not-italic text-white md:text-sm">
            Jalan Graha Mitra Citra blok K 13 no.3 Kelurahan Panongan, Kecamatan
            Panongan, <br />
            Jalan Citra Raya Boulevard, Cikupa, Kabupaten Tangerang, Banten
            15711.
          </address>
          <h3 className="text-sm text-white xl:text-base">Jam Operasional</h3>
          <p className="text-xs text-white md:text-sm">Senin-Minggu</p>
          <p className="text-xs text-white md:text-sm">08:00 - 21.00</p>
        </div>
      </Container>
      <Container className="w-11/12 bg-brand-95 py-5 xl:w-10/12">
        <p className="text-center text-xs text-white">
          © Copyright {year} IKA Gorden All Rights Reserved
        </p>
      </Container>
    </footer>
  );
};

export default FooterOne;
