"use client";

import type { ReactNode } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";
import { sendGAEvent } from "@next/third-parties/google";
import IconWA from "@components/icons/whatsapp-01";

const WA_NUMBER = process?.env?.NEXT_PUBLIC_WA_NUMBER ?? "6285173190051";

type Props = {
  children?: ReactNode;
  message?: string;
  className?: string;
  classObject?: {
    padding?: string;
    rounded?: string;
    icon?: string;
    text?: string;
  };
  gtmData?: {
    event?: string;
    value?: Object;
  };
};

const ButtonWA1 = ({
  children,
  message = "",
  gtmData,
  className = "",
  classObject,
}: Props) => {
  const router = useRouter();
  const paddingClass =
    classObject?.padding ||
    "px-3.5 py-3.5 md:px-5 md:py-3.5 lg:px-5 lg:py-3.5 xl:px-4 xl:py-3";
  const roundedClass = classObject?.rounded || "rounded-xl";
  const iconClass =
    classObject?.icon || "mr-1 h-4 w-4 text-white md:mr-2 md:h-5 md:w-5";
  const textClass =
    classObject?.text ||
    "inline-block text-xs font-semibold text-white md:text-sm lg:text-sm xl:text-base";

  const link = encodeURI(
    `https://wa.me/${WA_NUMBER}${message !== "" ? `?text=${message}` : ""}`,
  );

  const handleSendGAEvent = (event: React.MouseEvent) => {
    if (gtmData?.event) {
      event.preventDefault();

      const url = event?.currentTarget?.getAttribute("href") || "";
      const callback = () => {
        if (typeof url != "undefined") {
          router.push(url);
        }
      };

      sendGAEvent("event", gtmData?.event || "", {
        ...(gtmData?.value || {}),
        event_callback: callback,
        event_timeout: 2000,
      });

      return true;
    }

    return false;
  };

  return (
    <Link
      href={link}
      role="button"
      className={clsx(
        "bg-[#25d366] hover:bg-[#03c85d] hover:transition-colors hover:duration-200 hover:ease-in-out active:shadow-inner",
        "inline-flex flex-row items-center justify-center",
        "border border-transparent",
        paddingClass,
        roundedClass,
        className,
      )}
      onClick={handleSendGAEvent}
    >
      {/* bg-[#29af3e] */}
      <IconWA className={iconClass} />
      <span className={textClass}>{children}</span>
    </Link>
  );
};

export default ButtonWA1;
