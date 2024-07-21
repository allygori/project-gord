import clsx from "clsx";
import type { Metadata } from "next";
import Image from "next/image";
import Container from "@components/container";
import SectionFAQ from "../components/faq";
import SectionContact from "@components/sections/home/contact";
import Image0 from "@public/assets/img/produk/vertical-blinds/Default_A_highly_detailed_photorealistic_image_of_a_vertical_b_0.jpg";
import Image1 from "@public/assets/img/produk/vertical-blinds/Default_A_highly_detailed_photorealistic_image_of_a_vertical_b_1.jpg";
import Image2 from "@public/assets/img/produk/vertical-blinds/Default_A_highly_detailed_photorealistic_image_of_a_vertical_b_2.jpg";
import Image3 from "@public/assets/img/produk/vertical-blinds/Default_A_highly_detailed_photorealistic_image_of_a_vertical_b_3.jpg";

const SLUG = "vertical-blinds";
const HOSTNAME = process?.env?.NEXT_PUBLIC_HOSTNAME ?? "ikagorden.com";

export const metadata: Metadata = {
  title: "Vertical Blinds",
  description:
    "Salah satu keunggulan utama vertical blind adalah fleksibilitasnya dalam mengontrol cahaya. Memilih vertical blind yang tepat memerlukan beberapa pertimbangan.",
  alternates: {
    // canonical: `https://${HOSTNAME}/${SLUG}`,
    canonical: SLUG,
  },
  keywords: ["blind", "vertical blind", "vertikal blind", "tirai blind"],
  openGraph: {
    title: "Vertical Blind: Inovasi Tirai Modern untuk Rumah dan Kantor",
    description:
      "Salah satu keunggulan utama vertical blind adalah fleksibilitasnya dalam mengontrol cahaya. Memilih vertical blind yang tepat memerlukan beberapa pertimbangan.",
    type: "article",
    url: `https://${HOSTNAME}/produk/${SLUG}`,
    images: {
      url: Image2.src,
      secureUrl: Image2.src,
      height: Image2.height,
      width: Image2.width,
      type: "image/jpeg",
      alt: "Vertical Blind di IKA Gorden",
    },
  },
  twitter: {
    title: "Vertical Blind: Inovasi Tirai Modern untuk Rumah dan Kantor",
    description:
      "Salah satu keunggulan utama vertical blind adalah fleksibilitasnya dalam mengontrol cahaya. Memilih vertical blind yang tepat memerlukan beberapa pertimbangan.",
    card: "summary_large_image",
    images: {
      url: Image2.src,
      alt: "Vertical Blind di IKA Gorden",
      secureUrl: Image2.src,
      type: "image/jpeg",
      width: Image2.width,
      height: Image2.height,
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
            Vertical Blind: Inovasi Tirai Modern untuk Rumah dan Kantor
          </h1>
        </Container>
      </header>
      <article className="mb-6 w-full text-brand-100">
        <Container className="w-full lg:w-6/12">
          <div className="relative mb-5 w-full">
            <Image src={Image2} alt="Horizontal blinds in living room" />
          </div>
          <p className="mb-2 px-4 text-base font-normal first-letter:float-left first-letter:m-0 first-letter:pr-2 first-letter:text-7xl first-letter:font-bold first-letter:text-brand-100">
            Vertical blinds atau vertikal blind adalah jenis tirai yang memiliki
            bilah-bilah vertikal yang dapat digerakkan untuk mengatur intensitas
            cahaya yang masuk ke dalam ruangan. Tirai ini semakin populer baik
            untuk rumah maupun kantor karena menawarkan berbagai keuntungan
            praktis dan estetika. Artikel ini akan membahas secara mendalam
            tentang vertical blind, dari definisi, manfaat, hingga tips memilih
            dan merawatnya.
          </p>
          <h2 className="my-4 px-4 text-xl font-semibold lg:text-2xl">
            1. Definisi dan Sejarah
          </h2>
          <p className="mb-2 px-4 text-base font-normal">
            Vertical blind pertama kali diperkenalkan pada tahun 1960-an sebagai
            solusi praktis untuk mengontrol cahaya dan privasi. Tirai ini
            terdiri dari bilah-bilah vertikal yang biasanya terbuat dari kain,
            PVC, atau aluminium, yang digantung pada rel dan dapat diputar atau
            digeser. Keunikan desain ini memungkinkan penggunanya untuk dengan
            mudah mengatur jumlah cahaya yang masuk dan menjaga privasi sesuai
            kebutuhan.
          </p>
          <h2 className="my-4 px-4 text-xl font-semibold lg:text-2xl">
            2. Manfaat Vertical Blind
          </h2>
          <p className="mb-2 px-4 text-base font-normal">
            Salah satu keunggulan utama vertical blind adalah fleksibilitasnya
            dalam mengontrol cahaya. Dengan memutar bilah-bilahnya, pengguna
            dapat menyesuaikan cahaya yang masuk mulai dari terbuka penuh hingga
            tertutup rapat. Selain itu, vertical blind juga membantu dalam
            pengaturan suhu ruangan, mengurangi panas di musim panas, dan
            menjaga kehangatan di musim dingin. Tirai ini juga memberikan kesan
            rapi dan modern pada ruangan, menjadikannya pilihan ideal untuk
            rumah dan ruang kantor.
          </p>
          <div className="relative mb-3 w-full">
            <Image src={Image0} alt="Horizontal blinds in living room" />
          </div>
          <h2 className="my-4 px-4 text-xl font-semibold lg:text-2xl">
            3. Material dan Desain
          </h2>
          <p className="mb-2 px-4 text-base font-normal">
            Vertical blind tersedia dalam berbagai pilihan material seperti
            kain, PVC, dan aluminium. Setiap material memiliki karakteristik dan
            keunggulan tersendiri. Kain memberikan sentuhan lembut dan elegan,
            PVC menawarkan daya tahan tinggi dan mudah dibersihkan, sementara
            aluminium cocok untuk tampilan yang lebih modern dan minimalis.
            Selain material, vertical blind juga hadir dalam berbagai warna dan
            pola, memungkinkan pengguna untuk menyesuaikan dengan dekorasi
            interior yang ada.
          </p>
          <h2 className="my-4 px-4 text-xl font-semibold lg:text-2xl">
            4. Aplikasi dan Penggunaan
          </h2>
          <p className="mb-2 px-4 text-base font-normal">
            Vertical blind cocok digunakan di berbagai jenis ruangan, mulai dari
            ruang tamu, kamar tidur, hingga ruang kerja. Di kantor, tirai ini
            membantu menciptakan lingkungan kerja yang nyaman dengan mengurangi
            silau dari sinar matahari tanpa menghalangi pandangan ke luar. Di
            rumah, vertical blind dapat digunakan di kamar tidur untuk menjaga
            privasi atau di ruang tamu untuk menambah estetika interior.
          </p>
          <div className="relative mb-3 w-full">
            <Image src={Image1} alt="Horizontal blinds in living room" />
          </div>
          <h2 className="my-4 px-4 text-xl font-semibold lg:text-2xl">
            5. Cara Memilih Vertical Blind yang Tepat
          </h2>
          <p className="mb-2 px-4 text-base font-normal">
            Memilih vertical blind yang tepat memerlukan beberapa pertimbangan.
            Pertama, tentukan material yang sesuai dengan kebutuhan dan gaya
            dekorasi ruangan. Selanjutnya, perhatikan ukuran jendela dan
            pastikan tirai yang dipilih sesuai dengan ukuran tersebut. Warna dan
            pola juga penting untuk disesuaikan dengan tema interior. Terakhir,
            pertimbangkan mekanisme pengoperasian, apakah manual atau otomatis,
            sesuai dengan preferensi pengguna.
          </p>
          <h2 className="my-4 px-4 text-xl font-semibold lg:text-2xl">
            6. Perawatan dan Pemeliharaan
          </h2>
          <p className="mb-2 px-4 text-base font-normal">
            Perawatan vertical blind relatif mudah. Untuk membersihkan bilah
            kain, cukup gunakan penyedot debu dengan sikat lembut atau lap
            lembab. Bilah PVC dan aluminium dapat dibersihkan dengan lap basah
            dan deterjen ringan. Penting untuk memeriksa rel secara berkala dan
            melumasi jika diperlukan agar mekanisme pengoperasian tetap lancar.
            Dengan perawatan yang tepat, vertical blind dapat bertahan lama dan
            tetap terlihat seperti baru.
          </p>

          <div className="relative mb-3 w-full">
            <Image src={Image3} alt="Horizontal blinds in living room" />
          </div>
          {/* section:faq */}
          <SectionFAQ />
          <h2 className="my-4 px-4 text-xl font-semibold lg:text-2xl">
            7. Keunggulan dan Kekurangan
          </h2>
          <p className="mb-2 px-4 text-base font-normal">
            Vertical blind memiliki banyak keunggulan seperti kemudahan dalam
            mengatur cahaya, perawatan yang sederhana, dan pilihan desain yang
            beragam. Namun, ada beberapa kekurangan yang perlu diperhatikan.
            Bilah vertikal dapat berisiko patah atau bengkok jika tidak dirawat
            dengan baik. Selain itu, dalam kondisi angin kencang, bilah dapat
            bergerak dan menyebabkan suara berisik. Meskipun demikian, dengan
            pemilihan material dan desain yang tepat, kekurangan ini dapat
            diminimalisir.
          </p>
          {/* <h2 className="my-4 text-xl font-semibold lg:text-2xl px-4">Kesimpulan</h2> */}
          <div className="px-4">
            <hr className="my-8 block w-full border-b border-dashed border-brand-95" />
          </div>
          <p className="mb-2 px-4 text-base font-normal">
            Vertical blind adalah solusi tirai modern yang menawarkan kombinasi
            sempurna antara fungsi dan estetika. Dengan kemampuan mengontrol
            cahaya dan menjaga privasi, serta berbagai pilihan material dan
            desain, tirai ini cocok untuk berbagai jenis ruangan. Perawatan yang
            mudah dan keunggulan dalam pengaturan suhu menjadikan vertical blind
            pilihan yang praktis dan efisien. Dengan mempertimbangkan kebutuhan
            dan preferensi pribadi, vertical blind dapat menjadi elemen penting
            dalam meningkatkan kenyamanan dan keindahan ruangan.
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
