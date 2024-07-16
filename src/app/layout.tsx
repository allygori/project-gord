import type { Metadata } from "next";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google"; // GoogleTagManager
import { Inter } from "next/font/google";
import "./globals.css";
import { ConfigProvider } from "@app/components/config";

const inter = Inter({ subsets: ["latin"] });
const GTM_ID = process?.env?.NEXT_PUBLIC_GTM_ID ?? "";
const GA4_ID = process?.env?.NEXT_PUBLIC_GA4_ID ?? "";
// const HOSTNAME = process?.env?.NEXT_PUBLIC_HOSTNAME ?? "ikagorden.com";

export const metadata: Metadata = {
  title: "IKA Gorden",
  description: "Desain Gorden Sesuai Kebutuhan Rumah atau Kantor Anda",
};

// export const metadata: Metadata = {
//   title: "IKA Gorden",
//   description:
//     "Jasa pembuatan gorden rumah, kantor, hotel, rumah sakit & keperluan lainnya. Harga terjangkau tanpa mengurangi kualitas produk.",
//   alternates: {
//     canonical: `https://${HOSTNAME}`,
//   },
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      {GTM_ID && <GoogleTagManager gtmId={GTM_ID} />}
      <body className={`${inter.className}`}>
        {/*  bg-[#f3f3f3] */}
        <ConfigProvider>{children}</ConfigProvider>
      </body>
      <GoogleAnalytics gaId={GA4_ID} />
    </html>
  );
}
