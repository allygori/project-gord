import type { Metadata } from "next";
import { ConfigProvider } from "@app/components/config";
import { HeaderOne } from "@components/headers";
import { FooterOne } from "@components/footers";

const HOSTNAME = process?.env?.NEXT_PUBLIC_HOSTNAME ?? "ikagorden.com";

export const metadata: Metadata = {
  title: "IKA Gorden - Jasa Pembuatan Gorden Kantor",
  description:
    "Jasa pembuatan gorden kantor vertical blind, horizontal blind, roller blind, wooden blind dan model lainnya.",
  alternates: {
    canonical: `https://${HOSTNAME}/gorden-kantor`,
  },
};

type Props = Readonly<{
  children: React.ReactNode;
}>;

const GordenKantorLayout = ({ children = "" }: Props) => {
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

export default GordenKantorLayout;
