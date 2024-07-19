import type { Metadata } from "next";
import { ConfigProvider } from "@app/components/config";
import { HeaderOne } from "@components/headers";
import { FooterOne } from "@components/footers";

const SLUG = "gorden-rumah";
const HOSTNAME = process?.env?.NEXT_PUBLIC_HOSTNAME ?? "ikagorden.com";

export const metadata: Metadata = {
  title: "IKA Gorden - Jasa Pembuatan Gorden Rumah",
  description:
    "Jasa pembuatan gorden rumah dengan berbagai model, pilihan jenis kain & warna. Tersedia gorden blackout, gorden minimalis, vitrase & lainnya.",
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
