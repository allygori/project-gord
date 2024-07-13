import type { MetadataRoute } from "next";

const HOSTNAME = process?.env?.NEXT_PUBLIC_HOSTNAME ?? "";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/"],
        // disallow: "/private/",
      },
      // {
      //   userAgent: "Googlebot",
      //   allow: ["/"],
      // },
      // {
      //   userAgent: ["Applebot", "Bingbot"],
      //   disallow: ["/"],
      // },
    ],
    sitemap: `https://${HOSTNAME}/sitemap.xml`,
  };
}
