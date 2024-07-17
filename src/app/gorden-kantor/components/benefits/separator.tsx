import clsx from "clsx";

type Props = {
  className?: string;
};

const Separator = ({ className = "" }: Props) => {
  return (
    <div
      className={clsx("w-full border-b border-gray-300", className, "relative")}
    >
      <span className="absolute left-0 top-1/2 block h-1 w-3/12 -translate-y-1/2 rounded-lg bg-brand-2-200" />
    </div>
  );
};

export default Separator;
