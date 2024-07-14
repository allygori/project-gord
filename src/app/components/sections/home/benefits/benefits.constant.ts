import IconQuality from "@components/icons/quality";
import IconSewingMachine from "@components/icons/sewing-machine";
import IconPrice from "@components/icons/price";
import IconCalendar from "@components/icons/calendar";
import IconChat from "@components/icons/chat";
import IconDelivery from "@components/icons/delivery";

export type Benefit = {
  Icon: ({ className }: { className?: string }) => JSX.Element;
  title: string;
  description: string;
};

export const BENEFITS: Benefit[] = [
  {
    Icon: IconQuality,
    title: "Kualitas Produk Terbaik",
    description:
      "Kami menjamin penggunaan produk dengan kualitas terbaik yang kami dapatkan dari berbagai mitra kami.",
  },
  {
    Icon: IconCalendar,
    title: "Pengerjaan Tepat Waktu",
    description:
      "Kami menekankan ketepatan waktu dalam setiap tahap pengerjaan dan pemasangan gorden, memberikan kepastian kepada pelanggan tanpa khawatir tentang penundaan.",
  },
  {
    Icon: IconSewingMachine,
    title: "Penjahit Berpengalaman",
    description:
      "Kami memiliki tim penjahit profesional dengan pengalaman lebih dari 12 Tahun menjahit gorden.",
  },
  {
    Icon: IconPrice,
    title: "Harga Kompetitif",
    description:
      "Kami Menawarkan harga yang sangat kompetitif tanpa mengorbankan kualitas produk.",
  },
  {
    Icon: IconChat,
    title: "Konsultasi Gratis",
    description:
      "Kami menyediakan konsultasi gratis mulai dari survei tempat, harga, pengukuran, hingga pemilihan jenis bahan dan model gorden yang sesuai dengan kebutuhan dan preferensi estetika pelanggan.",
  },
  {
    Icon: IconDelivery,
    title: "Layanan Pengiriman Dan Pemasangan",
    description:
      "Kami menyediakan layanan pengiriman dan pemasangan yang profesional, sehingga pelanggan tidak perlu repot memikirkan hal tersebut selama proses pembelian dan pemasangan gorden.",
  },
];
