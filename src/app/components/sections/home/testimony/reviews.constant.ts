import { StaticImageData } from "next/image";
import ImageStendy from "@public/assets/img/reviews/stendy.png";
import ImageImam from "@public/assets/img/reviews/imam-rozali.png";
import ImageYenny from "@public/assets/img/reviews/yenny-dwi.png";
import ImageIka from "@public/assets/img/reviews/ika-puspita-dewi.png";
import ImageRiris from "@public/assets/img/reviews/riris-hp-napitupulu.png";
import ImageElizabeth from "@public/assets/img/reviews/elizabeth-berliani.png";
import ImageEnjoy from "@public/assets/img/reviews/enjoy-my-hobbies.png";
import ImageRini from "@public/assets/img/reviews/rini-marenta.png";
import ImageAlif from "@public/assets/img/reviews/alif-talitha.png";

type Review = {
  name: string;
  photo: StaticImageData;
  description: string;
  rating: number;
};

export const REVIEWS: Review[] = [
  {
    name: "STENDY",
    photo: ImageStendy,
    description:
      "Ika gorden sangat recomended. Kerjain cepat rapi dan harga sangat² bersahabat..yg nyari gorden boleh kontak lgsg bu ika nya. Orgnya baik tinggal nawar aja. Asal jgn kelewatan..di jamin lbh murah dr yg lain. Inj review jujur krn rmh sy di pasang sama ika gorden",
    rating: 5.0,
  },
  {
    name: "imam rozali",
    photo: ImageImam,
    description:
      "keren hasil nya, jadi kelihatan seperti rumah. harga juga terjangkau.",
    rating: 5.0,
  },
  {
    name: "Yenny Dwi",
    photo: ImageYenny,
    description:
      "Pelayanan sangat baik, rapih, cepat dan harga sangat bersahabat",
    rating: 5.0,
  },
  {
    name: "ika puspita dewi",
    photo: ImageIka,
    description:
      "* Tampilan gorden elegant & modern <br />* Pemasangan sangat rapih <br />Thanks Ika Gorden  · ️👍",
    rating: 5.0,
  },
  {
    name: "Riris hp napitupulu",
    photo: ImageRiris,
    description:
      "Makasih Bu Ika, gordennya kerenn, biasanya suami akan komplain klo ada pengerjaan apapun di rumah ke tukangnya, tp pas bu Ika selesai pasang gorden, suami no koment, dia puas atas pekerjaannya. Ramah dan apabila ada masalah cepat tanggap, dan juga selalu memberi saran utk yg terbaik👍",
    rating: 5.0,
  },
  {
    name: "Elizabeth Berlani",
    photo: ImageElizabeth,
    description:
      "Pesanan cepat jadi, kualitas memuaskan, harga sesuai, owner sangat sabar dlm membantu memberi saran dan mampu membaca keinginan konsumen, saya sangat terbantu dgn pemilihan warna yg saya mau shg benar2 sesuai spt yg saya bayangkan.",
    rating: 5.0,
  },
  {
    name: "enjoy my hobbies",
    photo: ImageEnjoy,
    description:
      "Asik, ada penjual n pemasang gorden yg bisa dipanggil ke rumah n hargan n kualitasnya recomended. Sukses trus IKA Gorden",
    rating: 5.0,
  },
  {
    name: "Rini Marenta",
    photo: ImageRini,
    description:
      "Gordennya bagus, harga terjangkau, dan owner-nya ramah sekali. Yang mau pasang gorden di daerah sekitar Maja, Cikupa, Tangerang dan sekitarnya bisa coba di Ika Gorden. Gordennya ga kalah dari gorden kak Jil 😀. Thank you kak Ika gorden, laris manis ya ka.",
    rating: 5.0,
  },
  {
    name: "Alif Talitha",
    photo: ImageAlif,
    description: "Design mewah, ukuran juga pas, jahitan rapi👍",
    rating: 5.0,
  },
];

export const PREVIEW_REVIEWS: Review[] = [
  {
    name: "Alif Talitha",
    photo: ImageAlif,
    description: "Design mewah, ukuran juga pas, jahitan rapi👍",
    rating: 5.0,
  },
  {
    name: "imam rozali",
    photo: ImageImam,
    description:
      "keren hasil nya, jadi kelihatan seperti rumah. harga juga terjangkau.",
    rating: 5.0,
  },
  {
    name: "Elizabeth Berlani",
    photo: ImageElizabeth,
    description:
      "Pesanan cepat jadi, kualitas memuaskan, harga sesuai, owner sangat sabar dlm membantu memberi saran dan mampu membaca keinginan konsumen, saya sangat terbantu dgn pemilihan warna yg saya mau shg benar2 sesuai spt yg saya bayangkan.",
    rating: 5.0,
  },
  {
    name: "Rini Marenta",
    photo: ImageRini,
    description:
      "Gordennya bagus, harga terjangkau, dan owner-nya ramah sekali. Yang mau pasang gorden di daerah sekitar Maja, Cikupa, Tangerang dan sekitarnya bisa coba di Ika Gorden. Gordennya ga kalah dari gorden kak Jil 😀. Thank you kak Ika gorden, laris manis ya ka.",
    rating: 5.0,
  },
  {
    name: "enjoy my hobbies",
    photo: ImageEnjoy,
    description:
      "Asik, ada penjual n pemasang gorden yg bisa dipanggil ke rumah n hargan n kualitasnya recomended. Sukses trus IKA Gorden",
    rating: 5.0,
  },
];
