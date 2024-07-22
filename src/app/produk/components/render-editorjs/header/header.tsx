import clsx from "clsx";
import type { ReactNode } from "react";

type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
type Props = {
  // children?: ReactNode;
  // level?: 1 | 2 | 3 | 4 | 5 | 6;
  data?: {
    level?: 1 | 2 | 3 | 4 | 5 | 6;
    text?: ReactNode;
  };
  className?: string;
};

const Header = ({ data = {}, className = "" }: Props) => {
  const { level = 2, text = "" } = data;

  const Tag = `h${level}` as HeadingTag;

  return (
    <Tag
      className={clsx("my-4 px-4 text-xl font-semibold lg:text-2xl", className)}
    >
      {text}
    </Tag>
  );
};

export default Header;
