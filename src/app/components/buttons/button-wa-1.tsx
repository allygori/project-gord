import type { ReactNode } from "react";
import clsx from "clsx";
import Link from "next/link";
import IconWA from "@components/icons/whatsapp-01";

type Props = {
  children?: ReactNode;
  className?: string;
};

const ButtonWA1 = ({ children, className = "" }: Props) => {
  return (
    <Link
      href={"https://wa.me/6281285123121?text=Halo"}
      role="button"
      className={clsx(
        "inline-flex flex-row items-center justify-center rounded-xl border border-transparent bg-[#25d366] px-3.5 py-3.5 md:px-5 md:py-3.5 lg:px-5 lg:py-3.5 xl:px-4 xl:py-3",
        className,
      )}
    >
      {/* bg-[#29af3e] */}
      <IconWA className="mr-1 h-4 w-4 text-white md:mr-2 md:h-5 md:w-5" />
      <span className="inline-block text-xs font-semibold text-white md:text-sm lg:text-sm xl:text-base">
        {children}
      </span>
    </Link>
  );
};

export default ButtonWA1;
