import { StaticImageData } from "next/image";
import Image1 from "@public/assets/img/portfolios/blackout-warna-putih-1-e1705657808665.jpg";
import Image2 from "@public/assets/img/portfolios/gorden-pink-glossy-1-e1705657817780.jpg";
import Image3 from "@public/assets/img/portfolios/garden-ville-6-1-e1705657858747.jpg";
import Image4 from "@public/assets/img/portfolios/gorden-ruang-tamu-peru-citra-maja-1-e1705657831461.jpg";
import Image5 from "@public/assets/img/portfolios/gorden-antibacterial.rumah-sakit-1-e1705657894804.jpg";
import Image6 from "@public/assets/img/portfolios/gorden-abu2-kamar-utama-1-scaled-e1705658189459.jpg";
import Image7 from "@public/assets/img/portfolios/gorden-blackout-tinggi-3-mtr-1-1-scaled-e1705658203844.jpg";
import Image8 from "@public/assets/img/portfolios/Gorden-Coklat-di-Serpong-1-scaled-e1705658174880.jpg";
import Image9 from "@public/assets/img/portfolios/gorden-model-kupu2-1-e1705658165945.jpg";
import Image10 from "@public/assets/img/portfolios/pemasangan-di-citra-maja-1-e1705658219269.jpg";

type Portfolio = {
  text: string;
  photo: StaticImageData;
  description: string;
  location?: string;
};

export const PORTFOLIOS: Portfolio[] = [
  {
    text: "",
    photo: Image1,
    description: "",
    location: "",
  },
  {
    text: "",
    photo: Image2,
    description: "",
    location: "",
  },
  {
    text: "",
    photo: Image3,
    description: "",
    location: "",
  },
  {
    text: "",
    photo: Image4,
    description: "",
    location: "",
  },
  {
    text: "",
    photo: Image5,
    description: "",
    location: "",
  },
  {
    text: "",
    photo: Image6,
    description: "",
    location: "",
  },
  {
    text: "",
    photo: Image7,
    description: "",
    location: "",
  },
  {
    text: "",
    photo: Image8,
    description: "",
    location: "",
  },
  {
    text: "",
    photo: Image9,
    description: "",
    location: "",
  },
  {
    text: "",
    photo: Image10,
    description: "",
    location: "",
  },
];
