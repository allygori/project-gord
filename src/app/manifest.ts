import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "IKA Gorden",
    short_name: "IKA Gorden",
    description: "Gorden custom sesuai kebutuhan Anda.",
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#053b50",
    icons: [
      {
        src: "/assets/favicon/favicon.svg",
        sizes: "any",
      },
      {
        src: "/assets/favicon/icon.png",
        sizes: "1080x1080",
        type: "image/png",
      },
    ],
  };
}
