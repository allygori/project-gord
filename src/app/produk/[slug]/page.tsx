import { promises as fs } from "fs";
import { join } from "path";
import clsx from "clsx";
import type { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Container from "@components/container";
import SectionContact from "@components/sections/home/contact";
import RenderEditorJs from "../components/render-editorjs";
import { Key } from "react";

// const SLUG = "vertical-blinds";
// const HOSTNAME = process?.env?.NEXT_PUBLIC_HOSTNAME ?? "ikagorden.com";

// export const metadata: Metadata = {
//   title: "Vertical Blinds",
//   description:
//     "Salah satu keunggulan utama vertical blind adalah fleksibilitasnya dalam mengontrol cahaya. Memilih vertical blind yang tepat memerlukan beberapa pertimbangan.",
//   alternates: {
//     // canonical: `https://${HOSTNAME}/${SLUG}`,
//     canonical: SLUG,
//   },
//   keywords: ["blind", "vertical blind", "vertikal blind", "tirai blind"],
//   openGraph: {
//     title: "Vertical Blind: Inovasi Tirai Modern untuk Rumah dan Kantor",
//     description:
//       "Salah satu keunggulan utama vertical blind adalah fleksibilitasnya dalam mengontrol cahaya. Memilih vertical blind yang tepat memerlukan beberapa pertimbangan.",
//     type: "article",
//     url: `https://${HOSTNAME}/produk/${SLUG}`,
//     images: {
//       url: Image2.src,
//       secureUrl: Image2.src,
//       height: Image2.height,
//       width: Image2.width,
//       type: "image/jpeg",
//       alt: "Vertical Blind di IKA Gorden",
//     },
//   },
//   twitter: {
//     title: "Vertical Blind: Inovasi Tirai Modern untuk Rumah dan Kantor",
//     description:
//       "Salah satu keunggulan utama vertical blind adalah fleksibilitasnya dalam mengontrol cahaya. Memilih vertical blind yang tepat memerlukan beberapa pertimbangan.",
//     card: "summary_large_image",
//     images: {
//       url: Image2.src,
//       alt: "Vertical Blind di IKA Gorden",
//       secureUrl: Image2.src,
//       type: "image/jpeg",
//       width: Image2.width,
//       height: Image2.height,
//     },
//   },
// };

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

const getProduct = async (slug?: string) => {
  // const res = await fetch("../../");
  // if (!res.ok) return undefined;
  // return res.json();
  if (!slug) return undefined;

  try {
    const path = join(
      process.cwd(),
      `/src/app/produk/lib/products/${slug}.json`,
    );

    const file = await fs.readFile(path, "utf-8");
    const data = JSON.parse(file);

    return data;
  } catch (e) {
    return undefined;
  }
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  // read route params
  const slug = params.slug;

  // fetch data
  const data = await getProduct(params?.slug);

  if (!data) {
    return notFound();
  }

  const image = data?.image?.url
    ? await import(`../../../../public/${data.image.url}`)
    : null;

  // optionally access and extend (rather than replace) parent metadata
  // const previousImages = (await parent).openGraph?.images || []

  return {
    title: data.title,
    description: data.description,
    alternates: {
      canonical: data.slug,
    },
    openGraph: {
      title: data.title,
      description: data.description,
      type: "article",
      url: data.slug,
      images: {
        type: "image/jpeg",
        alt: data?.image?.caption,
        url: image?.default?.src,
        // secureUrl: image?.default?.src,
        width: image?.default?.width,
        height: image?.default?.height,
      },
      // images: ['/some-specific-page-image.jpg', ...previousImages],
    },
    twitter: {
      title: data.title,
      description: data.description,
      card: "summary_large_image",
      images: {
        type: "image/jpeg",
        url: image?.default?.src,
        alt: data?.image?.caption,
        // secureUrl: Image2.src,
        width: image?.default?.width,
        height: image?.default?.height,
      },
    },
  };
}

const Page = async ({ params }: Props) => {
  const data = await getProduct(params?.slug);

  if (!data) {
    notFound();
  }

  const image = data?.image?.url
    ? await import(`../../../../public/${data.image.url}`)
    : null;

  return (
    <main className={clsx("min-h-screen w-full")}>
      {/* header:title */}
      <header className="mb-0 h-[35vh] w-full bg-brand-200">
        <Container className="flex h-full w-full items-center justify-start px-4 lg:w-10/12 xl:w-6/12">
          <h1 className="mt-8 text-3xl font-bold text-brand-95 lg:text-4xl">
            {data.title}
          </h1>
        </Container>
      </header>
      <article className="mb-6 w-full text-brand-100">
        <Container className="w-full lg:w-10/12 xl:w-6/12">
          {/* main-image */}
          <div className="relative mb-5 w-full px-0 lg:px-4">
            <Image src={image?.default} alt={data?.image?.caption} />
          </div>

          {/* editorjs-content-blocks */}
          {(data?.content?.blocks || []).map(
            (
              block: {
                type: string | undefined;
                data: Record<string, unknown> | undefined;
              },
              idx: Key | null | undefined,
            ) => {
              return (
                <RenderEditorJs key={idx} type={block.type} data={block.data} />
              );
            },
          )}
        </Container>
      </article>

      {/* section:contact */}
      <SectionContact />
    </main>
  );
};

export default Page;
