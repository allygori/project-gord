import clsx from "clsx";
import type { Metadata } from "next";
import Image from "next/image";
import Container from "@components/container";
import SectionFAQ from "../components/faq";
import SectionContact from "@components/sections/home/contact";
import Image0 from "@public/assets/img/produk/horizontal-blinds/Default_A_warmly_lit_modern_living_room_with_horizontal_blinds_0.jpg";
import Image1 from "@public/assets/img/produk/horizontal-blinds/Default_A_warmly_lit_modern_living_room_with_horizontal_blinds_1.jpg";
import Image2 from "@public/assets/img/produk/horizontal-blinds/Default_A_warmly_lit_modern_living_room_with_horizontal_blinds_2.jpg";
import Image3 from "@public/assets/img/produk/horizontal-blinds/Default_A_warmly_lit_modern_living_room_with_horizontal_blinds_3.jpg";

const SLUG = "horizontal-blinds";
const HOSTNAME = process?.env?.NEXT_PUBLIC_HOSTNAME ?? "ikagorden.com";

export const metadata: Metadata = {
  title: "Horizontal Blinds",
  description:
    "Tidak hanya sebagai pengatur cahaya, horizontal blind juga digunakan sebagai elemen dekoratif dalam ruangan. Lalu bagaimana cara merawatnya?",
  alternates: {
    canonical: SLUG,
  },
  keywords: ["blind", "horizontal blind", "tirai blind"],
  openGraph: {
    title:
      "Horizontal Blind: Solusi Estetika dan Fungsional untuk Pengaturan Cahaya",
    description:
      "Tidak hanya sebagai pengatur cahaya, horizontal blind juga digunakan sebagai elemen dekoratif dalam ruangan. Lalu bagaimana cara merawatnya?",
    type: "article",
    url: `https://${HOSTNAME}/produk/${SLUG}`,
    images: {
      url: Image1.src,
      secureUrl: Image1.src,
      height: Image1.height,
      width: Image1.width,
      type: "image/jpeg",
      alt: "Horizontal Blind di IKA Gorden",
    },
  },
  twitter: {
    title:
      "Horizontal Blind: Solusi Estetika dan Fungsional untuk Pengaturan Cahaya",
    description:
      "Tidak hanya sebagai pengatur cahaya, horizontal blind juga digunakan sebagai elemen dekoratif dalam ruangan. Lalu bagaimana cara merawatnya?",
    card: "summary_large_image",
    images: {
      url: Image1.src,
      alt: "Horizontal Blind di IKA Gorden",
      secureUrl: Image1.src,
      type: "image/jpeg",
      width: Image1.width,
      height: Image1.height,
    },
  },
};

type Props = {};

const Page = ({}: Props) => {
  return (
    <main className={clsx("min-h-screen w-full")}>
      {/* header:title */}
      <header className="mb-0 h-[35vh] w-full bg-brand-200">
        <Container className="flex h-full w-full items-center justify-start px-4 lg:w-6/12">
          <h1 className="mt-8 text-3xl font-bold text-brand-95 lg:text-4xl">
            Horizontal Blind: Solusi Estetika dan Fungsional untuk Pengaturan
            Cahaya
          </h1>
        </Container>
      </header>
      <article className="mb-6 w-full text-brand-100">
        <Container className="w-full lg:w-6/12">
          <div className="relative mb-5 w-full">
            <Image src={Image1} alt="Horizontal blinds in living room" />
          </div>
          <p className="mb-2 px-4 text-base font-normal first-letter:float-left first-letter:m-0 first-letter:pr-2 first-letter:text-7xl first-letter:font-bold first-letter:text-brand-100">
            Horizontal blinds atau tirai horizontal adalah salah satu jenis
            penutup jendela yang semakin populer dalam desain interior modern.
            Tirai ini tidak hanya berfungsi sebagai pengatur cahaya, tetapi juga
            sebagai elemen dekoratif yang dapat meningkatkan estetika ruangan.
            Artikel ini akan membahas secara mendalam mengenai horizontal blind,
            termasuk definisi, bahan, kelebihan, jenis-jenis, cara perawatan,
            dan tips memilih yang tepat.
          </p>
          <h2 className="my-4 px-4 text-xl font-semibold lg:text-2xl">
            1. Definisi dan Fungsi Horizontal Blind
          </h2>
          <p className="mb-2 px-4 text-base font-normal">
            Horizontal blind adalah jenis penutup jendela yang terdiri dari
            bilah-bilah horisontal yang bisa diatur untuk mengontrol intensitas
            cahaya yang masuk ke dalam ruangan. Bilah-bilah ini biasanya terbuat
            dari berbagai bahan seperti kayu, aluminium, atau PVC. Fungsi utama
            dari horizontal blind adalah untuk memberikan privasi dan mengontrol
            jumlah cahaya yang masuk, yang dapat mempengaruhi suhu dan
            kenyamanan ruangan.
          </p>
          <h2 className="my-4 px-4 text-xl font-semibold lg:text-2xl">
            2. Bahan dan Keunggulannya
          </h2>
          <p className="mb-2 px-4 text-base font-normal">
            Bahan yang digunakan untuk membuat horizontal blind sangat beragam,
            masing-masing dengan keunggulannya sendiri. Kayu memberikan kesan
            alami dan hangat, serta cocok untuk ruangan dengan dekorasi klasik
            atau tradisional. Aluminium menawarkan daya tahan yang tinggi dan
            tampilan modern yang minimalis, ideal untuk kantor atau ruang dengan
            desain kontemporer. PVC atau plastik adalah pilihan yang ekonomis
            dan tahan lama, sering digunakan di area yang rentan terhadap
            kelembapan seperti dapur dan kamar mandi.
          </p>
          <div className="relative mb-3 w-full">
            <Image src={Image0} alt="Horizontal blinds in living room" />
          </div>
          <h2 className="my-4 px-4 text-xl font-semibold lg:text-2xl">
            3. Kelebihan Horizontal Blind
          </h2>
          <p className="mb-2 px-4 text-base font-normal">
            Salah satu kelebihan utama horizontal blind adalah fleksibilitasnya
            dalam mengatur cahaya. Dengan memutar bilah-bilah, pengguna dapat
            mengontrol seberapa banyak cahaya yang masuk, menciptakan suasana
            yang diinginkan. Selain itu, horizontal blind mudah dibersihkan dan
            dirawat dibandingkan dengan tirai kain. Desainnya yang sederhana dan
            elegan juga membuatnya mudah dipadukan dengan berbagai gaya dekorasi
            interior.
          </p>
          <h2 className="my-4 px-4 text-xl font-semibold lg:text-2xl">
            4. Jenis-jenis Horizontal Blind
          </h2>
          <p className="mb-2 px-4 text-base font-normal">
            Ada beberapa jenis horizontal blind yang tersedia di pasaran, yang
            dibedakan berdasarkan bahan dan mekanisme pengoperasiannya. Wooden
            blind atau tirai kayu memberikan kesan mewah dan elegan. Aluminium
            blind terkenal dengan ketahanannya dan cocok untuk ruangan dengan
            kelembapan tinggi. Faux wood blind atau tirai kayu palsu memberikan
            tampilan seperti kayu asli tetapi lebih tahan terhadap perubahan
            suhu dan kelembapan. Setiap jenis memiliki karakteristik unik yang
            dapat disesuaikan dengan kebutuhan dan preferensi pengguna.
          </p>
          <div className="relative mb-3 w-full">
            <Image src={Image2} alt="Horizontal blinds in living room" />
          </div>
          <h2 className="my-4 px-4 text-xl font-semibold lg:text-2xl">
            5. Cara Perawatan Horizontal Blind
          </h2>
          <p className="mb-2 px-4 text-base font-normal">
            Merawat horizontal blind relatif mudah. Untuk membersihkan debu,
            cukup gunakan kemoceng atau kain mikrofiber. Noda yang menempel
            dapat dibersihkan dengan kain lembab dan sedikit deterjen ringan.
            Penting untuk menghindari penggunaan bahan pembersih yang abrasif,
            karena dapat merusak permukaan bilah. Untuk menjaga kelancaran
            mekanisme pengoperasian, pastikan tali atau rantai penggerak tetap
            bersih dan bebas dari kotoran.
          </p>
          <h2 className="my-4 px-4 text-xl font-semibold lg:text-2xl">
            6. Tips Memilih Horizontal Blind yang Tepat
          </h2>
          <p className="mb-2 px-4 text-base font-normal">
            Memilih horizontal blind yang tepat memerlukan pertimbangan beberapa
            faktor. Pertama, tentukan bahan yang sesuai dengan kebutuhan
            ruangan. Jika mencari kehangatan dan estetika, tirai kayu mungkin
            pilihan terbaik. Untuk daya tahan dan tampilan modern, aluminium
            bisa menjadi opsi. Pertimbangkan juga ukuran jendela dan gaya
            dekorasi ruangan agar horizontal blind dapat berfungsi optimal dan
            mempercantik ruangan.
          </p>

          <div className="relative mb-3 w-full">
            <Image src={Image3} alt="Horizontal blinds in living room" />
          </div>
          {/* section:faq */}
          <SectionFAQ />
          <h2 className="my-4 px-4 text-xl font-semibold lg:text-2xl">
            7. Penerapan Horizontal Blind di Berbagai Ruangan
          </h2>
          <p className="mb-2 px-4 text-base font-normal">
            Horizontal blind cocok diterapkan di berbagai ruangan, mulai dari
            ruang tamu, kamar tidur, hingga dapur dan kamar mandi. Di ruang
            tamu, tirai ini dapat menciptakan suasana yang nyaman dan privat. Di
            kamar tidur, horizontal blind membantu mengatur cahaya pagi dan
            menciptakan lingkungan tidur yang nyaman. Sementara di dapur dan
            kamar mandi, tirai ini tahan terhadap kelembapan dan mudah
            dibersihkan.
          </p>
          {/* <h2 className="my-4 text-xl font-semibold lg:text-2xl px-4">Kesimpulan</h2> */}
          <div className="px-4">
            <hr className="my-8 block w-full border-b border-dashed border-brand-95" />
          </div>
          <p className="mb-2 px-4 text-base font-normal">
            Horizontal blind adalah solusi praktis dan estetis untuk pengaturan
            cahaya dan privasi di dalam rumah. Dengan berbagai pilihan bahan dan
            desain, tirai ini dapat disesuaikan dengan kebutuhan dan gaya
            dekorasi ruangan. Perawatan yang mudah dan kemampuan untuk
            mengontrol cahaya secara efektif membuat horizontal blind menjadi
            pilihan yang populer bagi banyak orang.
          </p>

          {/* <div className="mt-8 block w-full border-b border-[#dadce0]" /> */}
        </Container>
      </article>

      {/* section:contact */}
      <SectionContact />
    </main>
  );
};

export default Page;
