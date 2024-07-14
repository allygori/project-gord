import clsx from "clsx";
import Image from "next/image";
import { PREVIEW_REVIEWS } from "@components/sections/home/testimony/reviews.constant";
import Rating from "@components/sections/home/testimony/rating";
import { useEffect, useMemo, useState } from "react";

type Props = {
  className?: string;
};

const PeopleReview = ({ className = "" }: Props) => {
  // const [rating, setRating] = useState(5);

  // useEffect(() => {
  //   for()
  // }, [PREVIEW_REVIEWS])

  const rating = useMemo(() => {
    let total = 0;
    for (let i = 0; i < PREVIEW_REVIEWS.length; i++) {
      total += PREVIEW_REVIEWS[i].rating;
    }

    return total / PREVIEW_REVIEWS.length;
  }, []);

  return (
    <div className={clsx("mb-4", className, "flex flex-col xl:flex-row")}>
      <ul className={clsx("m-0 p-0", className, "flex w-auto flex-row")}>
        {PREVIEW_REVIEWS.map((review, idx) => {
          return (
            <li
              key={idx}
              className="relative h-10 w-10 overflow-hidden rounded-full border-[3px] border-white md:h-10 md:w-10"
              style={{
                left: `-${idx * 0.75}rem`,
                // left: "-1rem",
                zIndex: idx,
              }}
            >
              <Image src={review.photo} alt={review.name} />
            </li>
          );
        })}
      </ul>
      <Rating
        rate={rating}
        showLabel={true}
        className="static left-0 xl:relative xl:-left-10"
        classObject={{
          height: "h-7 md:h-5",
          width: "w-7 md:w-5",
          label: "text-brand-100 text-base font-normal md:text-sm ml-1",
        }}
      />
    </div>
  );
};

export default PeopleReview;
