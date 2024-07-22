import clsx from "clsx";
import type { ReactNode } from "react";

type Props = {
  data?: {
    text?: ReactNode;
  };
  className?: string;
};

const Paragraph = ({ data = {}, className = "" }: Props) => {
  const { text = "" } = data;

  return (
    <p
      className={clsx(
        "mb-2 px-4 text-base font-normal first-of-type:first-letter:float-left first-of-type:first-letter:m-0 first-of-type:first-letter:pr-2 first-of-type:first-letter:text-7xl first-of-type:first-letter:font-bold first-of-type:first-letter:text-brand-100",
        className,
      )}
    >
      {text}
    </p>
  );
};

export default Paragraph;
