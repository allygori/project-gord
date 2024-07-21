import type { Metadata } from "next";
import { ConfigProvider } from "@app/components/config";
import { HeaderOne } from "@components/headers";
import { FooterOne } from "@components/footers";

const SLUG = "produk";
const HOSTNAME = process?.env?.NEXT_PUBLIC_HOSTNAME ?? "ikagorden.com";

export const metadata: Metadata = {
  metadataBase: new URL(`https://${HOSTNAME}/${SLUG}`),
  title: {
    template: "IKA Gorden - %s",
    default: "IKA Gorden",
    absolute: "IKA Gorden - Produk",
  },
  // title: "IKA Gorden - Produk",
  description:
    "Kami menyediakan berbagai macam produk, seperti gorden blackout, vitrase vertical blind, horizontal blind, roman shades, gorden smokring dan lain-lain.",
  alternates: {
    canonical: `https://${HOSTNAME}/${SLUG}`,
  },
};

type Props = Readonly<{
  children: React.ReactNode;
}>;

const GordenRumahLayout = ({ children = "" }: Props) => {
  return (
    <>
      {/* header:header-one */}
      <HeaderOne />

      {/* main:content */}
      <ConfigProvider>{children}</ConfigProvider>

      {/* footer:footer-one */}
      <FooterOne />
    </>
  );
};

export default GordenRumahLayout;
