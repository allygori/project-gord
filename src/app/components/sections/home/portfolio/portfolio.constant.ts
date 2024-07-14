import { StaticImageData } from "next/image";
import Image1 from "@public/assets/img/portfolios/image-01.jpg";
import Image2 from "@public/assets/img/portfolios/image-02.jpeg";
import Image3 from "@public/assets/img/portfolios/image-03.jpeg";

type Portfolio = {
  text: string;
  photo: StaticImageData;
  description: string;
  location?: string;
};

export const PORTFOLIOS: Portfolio[] = [
  {
    text: "",
    photo: Image2,
    description: "",
    location: "",
  },
  {
    text: "",
    photo: Image1,
    description: "",
    location: "",
  },
  {
    text: "",
    photo: Image3,
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
