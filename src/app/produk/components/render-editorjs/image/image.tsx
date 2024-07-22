import Image from "next/image";

type Props = {
  data?: {
    file?: {
      url?: string;
    };
    withBorder?: boolean;
    withBackground?: boolean;
    stretched?: boolean;
    show_caption?: boolean;
    caption?: string;
  };
  className?: string;
};

const ImageComponent = async ({ data = {}, className = "" }: Props) => {
  const {
    file = {},
    withBorder = false,
    withBackground = false,
    stretched = false,
    show_caption = true,
    caption = "",
  } = data;
  const image = file.url
    ? await import(`../../../../../../public/${file.url}`)
    : null;

  return (
    <>
      {image ? (
        <figure className="relative mb-5 w-full px-0 lg:px-4">
          <Image src={image?.default} alt={caption} />
          {caption && show_caption !== false && (
            <figcaption className="my-1 text-center text-sm text-brand-100">
              {caption}
            </figcaption>
          )}
        </figure>
      ) : null}
    </>
  );
};

export default ImageComponent;
