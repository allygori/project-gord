import { MetadataRoute } from "next";

const HOSTNAME = process?.env?.NEXT_PUBLIC_HOSTNAME ?? "";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `https://${HOSTNAME}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    // {
    //   url: `https://${HOSTNAME}/about`,
    //   lastModified: new Date(),
    //   changeFrequency: 'monthly',
    //   priority: 0.8,
    // },
    // {
    //   url: `https://${HOSTNAME}/blog`,
    //   lastModified: new Date(),
    //   changeFrequency: 'weekly',
    //   priority: 0.5,
    // },
  ];
}
