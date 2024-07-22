"use client";

import clsx from "clsx";
import type { ElementType } from "react";
import Accordion from "@components/accordion";
import { FAQS } from "./faq.constant";

type Props = {
  as?: string;
  className?: string;
};

const Faq = ({ as = "section", className = "" }: Props) => {
  const Component = as as ElementType;
  const FAQS1 = FAQS.slice(0, 4);
  const FAQS2 = FAQS.slice(4, 8);

  return (
    <Component className={clsx("px-4 py-4 lg:px-2", className)}>
      <h2 className="mb-6 text-center text-xl font-medium text-brand-100 xl:mb-12 xl:text-3xl">
        FAQ (Pertanyaan Umum)
      </h2>
      <div className="flex flex-col justify-between md:flex-row">
        <div className="-mx-4 flex-1">
          <Accordion faqs={FAQS1} />
        </div>
        <div className="-mx-4 flex-1">
          <Accordion faqs={FAQS2} />
        </div>
      </div>
    </Component>
  );
};

export default Faq;
