import { renderToString, renderToStaticMarkup } from "react-dom/server";
import Link from "next/link";
import dynamic from "next/dynamic";
import { ButtonWA1 } from "@components/buttons";
import IconWA from "@components/icons/whatsapp-01";

// const ButtonWA1 = dynamic(() => import("@components/buttons/button-wa-1"), {
//   ssr: true,
// });

// const ButtonWAAAA = () => {
//   return <ButtonWA1>Hubungi Kami</ButtonWA1>;
// };

// const output = document.createElement("div");
// const staticElement = renderToString(<ButtonWAAAA />);
// output.innerHTML = staticElement;

const WA_NUMBER = process?.env?.NEXT_PUBLIC_WA_NUMBER ?? "6285173190051";
const link = (message?: string) => {
  return encodeURI(
    `https://wa.me/${WA_NUMBER}${message !== "" ? `?text=${message}` : ""}`,
  );
};

export type Faq = {
  value: string | number;
  header: string;
  content: string;
};

export const FAQS: Faq[] = [
  {
    value: "rd6KTN",
    header: "APAKAH BISA CUSTOM?",
    content: `<p>Semua produk di IKA Gorden adalah produk “<em>Custom</em>” atau sesuai dengan ukuran yang pelanggan hendaki, umumnya disesuaikan dengan ukuran jendela/pintu yang pelanggan miliki.</p>`,
  },
  {
    value: "o5J09Q",
    header: "KUALITAS BAHAN YANG DIGUNAKAN?",
    content: `
      <p>Kualitas bahan yang kami gunakan adalah bahan-bahan kualitas premium. Tetapi Ada juga beberapa pelanggan yang menginginkan bahan yang lebih murah dikarenakan beberapa pertimbangan, kami akan menyesuaikan dengan kebutuhan dan selera pelanggan.</p>
    `,
  },
  {
    value: "iWP5mj",
    header: "BAGAIMANA CARA MENENTUKAN BAHAN DAN MODEL?",
    content: `
      <p class="mb-2">Untuk wilayah Jabodetabek, kami akan datang langsung dengan katalog bahan yang diinginkan pelanggan.</p>
      <p>Bila Anda di luar Jabodetabek dan sedang mencari bahan, silahkan hubungi kami untuk mendapatkan bahan yang anda cari.</p>
    `,
  },
  {
    value: "Cq8W97",
    header: "BAGAIMANA CARA MENGUKUR GORDEN?",
    content: `
      <p class="mb-2">Kami menyarankan untuk langsung diukur oleh tim survey kami, pelanggan tidak perlu repot dan tidak perlu takut salah dalam mengkur.</p>
    `,
  },
  {
    value: "5W1PaL",
    header: "APAKAH BISA ORDER DILUAR JAKARTA/JABODETABEK?",
    content: `<p>Untuk sementara kami tidak menerima pesanan dari luar Jabodetabek, namun kami membuka jasa konsultasi melalui sesi telepon atau zoom untuk membantu Anda menentukan produk yang sesuai.</p>`,
  },
  {
    value: "hvtVOZ",
    header: "BERAPA LAMA PROSES PENGERJAAN?",
    content: `
      <p>Kami akan mengkordasikan durasi pengerjaan kepada pihak pelanggan, durasi pengerjaan adalah kesepakatan bersama. Umumnya <strong>5-14 hari</strong>, bahkan dapat selesai lebih cepat. Tentunya kami akan mencarikan durasi optimal.</p>
    `,
  },
  {
    value: "hvtVOZ",
    header: "PROSES PEMBAYARAN?",
    content: `
      <p class="mb-2">Proses pembayaran dimulai dengan membayar uang muka atau DP (Down Payment), dan dilunasi saat proses pemasangan, dan bisa juga langsung lunasi di awal.</p>
    `,
  },
  {
    value: "hvtVOZ",
    header: "PERTANYAAN LAINNYA",
    content: `<div>
      <p class="mb-2">Untuk pertanyaan lain jangan ragu untuk menghubungi kami langsung melalui:<p>
      <a href=${link("Saya ingin bertanya mengenai ")} target="_blank" class="bg-[#25d366] hover:bg-[#03c85d] hover:transition-colors hover:duration-200 hover:ease-in-out active:shadow-inner inline-flex flex-row items-center justify-center border border-transparent px-2.5 py-2 md:px-2.5 md:py-2 lg:px-2.5 lg:py-2 xl:px-2.5 xl:py-2 rounded-lg md:rounded-lg">
        ${renderToStaticMarkup(<IconWA className="mr-1 h-3.5 w-3.5 text-white md:mr-2 md:h-4 md:w-4" />)}
        <span class="inline-block text-xs font-semibold text-white md:text-sm lg:text-sm xl:text-sm">WhatsApp</span>
      </a>
    </div>`,
  },
  // {
  //   value: "hvtVOZ",
  //   header: "PERTANYAAN LAINNYA",
  //   content: `<div>
  //     <p class="mb-2">Untuk pertanyaan lain jangan ragu untuk menghubungi kami langsung melalui:<p>
  //     ${renderToStaticMarkup(
  //       <ButtonWA1
  //         className=""
  //         classObject={{
  //           padding:
  //             "px-2.5 py-2 md:px-2.5 md:py-2 lg:px-2.5 lg:py-2 xl:px-2.5 xl:py-2",
  //           rounded: "rounded-lg md:rounded-lg",
  //           icon: "mr-1 h-3.5 w-3.5 text-white md:mr-2 md:h-4 md:w-4",
  //           text: "inline-block text-xs font-semibold text-white md:text-sm lg:text-sm xl:text-sm",
  //         }}
  //         message="Saya ingin bertanya mengenai "
  //       >
  //         WhatsApp
  //       </ButtonWA1>,
  //     )}
  //   </div>`,
  // },
];
