import type { Metadata } from "next";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import "./globals.css";
import { ConfigProvider } from "@app/components/config";

const inter = Inter({ subsets: ["latin"] });
const GTM_ID = process?.env?.NEXT_PUBLIC_GTM_ID ?? "";
const GA4_ID = process?.env?.NEXT_PUBLIC_GA4_ID ?? "";

export const metadata: Metadata = {
  title: "IKA Gorden",
  description: "Desain Gorden Sesuai Kebutuhan Rumah atau Kantor Anda",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <GoogleTagManager gtmId={GTM_ID} />
      <body className={`${inter.className}`}>
        {/*  bg-[#f3f3f3] */}
        <ConfigProvider>{children}</ConfigProvider>
      </body>
      <GoogleAnalytics gaId={GA4_ID} />
    </html>
  );
}
