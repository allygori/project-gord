import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ConfigProvider } from "@app/components/config";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ika Gorden",
  description: "Desain Gorden Sesuai Kebutuhan Rumah atau Kantor Anda",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={inter.className}>
        <ConfigProvider>{children}</ConfigProvider>
      </body>
    </html>
  );
}
