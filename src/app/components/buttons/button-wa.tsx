"use client";

import type { ReactNode } from "react";
import { forwardRef, useEffect, useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { sendGAEvent } from "@next/third-parties/google";

type Ref = HTMLAnchorElement;
type Props = {
  children?: ReactNode;
  message?: string;
  className?: string;
  gtmData?: {
    event?: string;
    value?: Object;
  };
};

const ButtonWA = forwardRef<Ref, Props>((props, ref) => {
  const { children, message = "", gtmData, className = "" } = props;
  const router = useRouter();
  const searchParams = useSearchParams();
  const [link, setLink] = useState("");

  // generate wa number
  useEffect(() => {
    const param = searchParams.get("cs");
    let WANumber = process?.env?.NEXT_PUBLIC_WA_NUMBER;
    if (searchParams.has("cs") && param !== "") {
      if (param == "1") {
        WANumber = process?.env?.NEXT_PUBLIC_WA_NUMBER_CS1;
      } else if (param == "2") {
        WANumber = process?.env?.NEXT_PUBLIC_WA_NUMBER_CS2;
      } else {
        WANumber = process?.env?.NEXT_PUBLIC_WA_NUMBER;
      }
    } else {
      WANumber = process?.env?.NEXT_PUBLIC_WA_NUMBER;
    }

    setLink(
      encodeURI(
        `https://wa.me/${WANumber}${message !== "" ? `?text=${message}` : ""}`,
      ),
    );
  }, [searchParams, message]);

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
    <Suspense>
      <Link
        ref={ref}
        href={link}
        role="button"
        className={className}
        onClick={handleSendGAEvent}
      >
        {children}
      </Link>
    </Suspense>
  );
});

ButtonWA.displayName = "ButtonWA";

export default ButtonWA;
