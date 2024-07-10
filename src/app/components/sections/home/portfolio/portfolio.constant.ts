import { StaticImageData } from "next/image";
import Image1 from "@public/assets/img/portfolios/image-01.jpg";
import Image2 from "@public/assets/img/portfolios/image-02.jpg";
import Image3 from "@public/assets/img/portfolios/image-03.jpg";
import Image4 from "@public/assets/img/portfolios/image-04.jpg";
import Image5 from "@public/assets/img/portfolios/image-05.jpg";
import Image6 from "@public/assets/img/portfolios/image-06.jpg";
import Image8 from "@public/assets/img/portfolios/image-08.jpg";

type Portfolio = {
  text: string;
  photo: StaticImageData;
  description: string;
  location?: string;
};

export const PORTFOLIOS: Portfolio[] = [
  {
    text: "",
    photo: Image8,
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
    photo: Image8,
    description: "",
    location: "",
  },
  // {
  //   text: "",
  //   photo: Image1,
  //   description: "",
  //   location: "",
  // },
  // {
  //   text: "",
  //   photo: Image2,
  //   description: "",
  //   location: "",
  // },
  // {
  //   text: "",
  //   photo: Image3,
  //   description: "",
  //   location: "",
  // },
  // {
  //   text: "",
  //   photo: Image4,
  //   description: "",
  //   location: "",
  // },
  // {
  //   text: "",
  //   photo: Image5,
  //   description: "",
  //   location: "",
  // },
];
