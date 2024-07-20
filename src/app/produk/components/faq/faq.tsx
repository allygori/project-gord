"use client";

import clsx from "clsx";
import Accordion from "@components/accordion";
import Container from "@components/container";
import { FAQS } from "./faq.constant";

type Props = {
  className?: string;
};

const Faq = ({ className = "" }: Props) => {
  const FAQS1 = FAQS.slice(0, 4);
  const FAQS2 = FAQS.slice(4, 8);

  return (
    <section className={clsx("py-4", className)}>
      <Container className="w-full lg:w-full xl:w-full">
        <h2 className="mb-6 text-center text-xl font-medium text-brand-100 xl:mb-12 xl:text-3xl">
          FAQ (Pertanyaan Umum)
        </h2>
        <div className="flex flex-col md:flex-row">
          <div className="flex-1">
            <Accordion faqs={FAQS1} />
          </div>
          <div className="flex-1">
            <Accordion faqs={FAQS2} />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Faq;
