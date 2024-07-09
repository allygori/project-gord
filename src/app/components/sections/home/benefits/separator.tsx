import clsx from "clsx";

type Props = {
  className?: string;
};

const Separator = ({ className = "" }: Props) => {
  return (
    <div
      className={clsx(
        "w-full border-b border-brand-300",
        className,
        "relative",
      )}
    >
      <span className="bg-brand-500 absolute left-0 top-1/2 block h-1 w-3/12 -translate-y-1/2 rounded-lg" />
    </div>
  );
};

export default Separator;
