"use client";

import { useEffect, useState } from "react";
import IconStarFull from "@components/icons/star-full";
import IconStarHalf from "@components/icons/star-half";
import IconStarEmpty from "@components/icons/star-empty";
import clsx from "clsx";

type Props = {
  rate: number;
  className?: string;
  classObject?: {
    height?: string;
    width?: string;
    label?: string;
  };
  showLabel?: boolean;
};

type Item = {
  Component: ({ className }: { className?: string }) => JSX.Element;
  // props: Attributes & Props;
  props: {
    className: string;
  };
};

const Rating = ({
  rate = 0,
  className = "",
  classObject = {
    height: "h-4",
    width: "w-4",
    label: "text-center text-xs text-white",
  },
  showLabel = false,
}: Props) => {
  const [arr, setArr] = useState<Item[]>([]);

  useEffect(() => {
    setArr([]);
    let _rate = rate;
    for (let i = 1; i <= 5; i++) {
      const curr = _rate - i;

      if (curr < 0 && curr <= -1) {
        setArr((prev) => [
          ...prev,
          {
            Component: IconStarEmpty,
            props: {
              className: `${classObject.height} ${classObject.width} text-[#f6bb06]`,
            },
          },
        ]);
      } else if (curr < 0 && curr <= -0.1) {
        setArr((prev) => [
          ...prev,
          {
            Component: IconStarHalf,
            props: {
              className: `${classObject.height} ${classObject.width} text-[#f6bb06]`,
            },
          },
        ]);
      } else {
        setArr((prev) => [
          ...prev,
          {
            Component: IconStarFull,
            props: {
              className: `${classObject.height} ${classObject.width} text-[#f6bb06]`,
            },
          },
        ]);
      }
    }
  }, [rate, classObject.height, classObject.width]);

  return (
    <div className={clsx("flex flex-col", className)}>
      <div className="flex flex-row">
        {arr.map((item, idx) => {
          return <item.Component key={idx} className={item.props.className} />;
        })}
      </div>
      {showLabel ? (
        <p className={classObject.label}>{rate.toFixed(1)}/5.0 rating</p>
      ) : null}
    </div>
  );
};

export default Rating;
