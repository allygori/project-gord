import { StaticImageData } from "next/image";
import Image1 from "@public/assets/img/portfolios/image-01.jpg";
import Image2 from "@public/assets/img/portfolios/image-02.jpeg";
import Image3 from "@public/assets/img/portfolios/image-03.jpeg";
import Image11 from "@public/assets/img/portfolios/image-11.jpg";
import Image12 from "@public/assets/img/portfolios/image-12.jpg";
import Image13 from "@public/assets/img/portfolios/image-13.jpg";

type Portfolio = {
  text: string;
  photo: StaticImageData;
  description: string;
  location?: string;
};

export const PORTFOLIOS: Portfolio[] = [
  {
    text: "",
    photo: Image11,
    description: "",
    location: "",
  },
  {
    text: "",
    photo: Image12,
    description: "",
    location: "",
  },
  {
    text: "",
    photo: Image13,
    description: "",
    location: "",
  },
  {
    text: "",
    photo: Image2,
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
  //   photo: Image3,
  //   description: "",
  //   location: "",
  // },

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
