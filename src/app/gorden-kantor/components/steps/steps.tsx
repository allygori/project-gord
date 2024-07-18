import clsx from "clsx";
import type { ComponentPropsWithoutRef, ElementRef } from "react";
import { forwardRef } from "react";
import Container from "@components/container";
import { STEPS } from "./step.constant";

// type StepsElement = ElementRef<HTMLDivElement>;
// type StepsProps = ComponentPropsWithoutRef<HTMLDivElement> &

type Ref = HTMLElement;
type Props = {
  className?: string;
};

const Steps = forwardRef<Ref, Props>(({ className = "" }, ref) => {
  return (
    <section ref={ref} className={clsx("py-8 md:py-10 xl:py-12", className)}>
      <Container className="w-11/12 xl:w-10/12" autoMargin={true}>
        <h2 className="mb-6 text-center text-xl font-semibold text-brand-100 xl:mb-12 xl:text-3xl">
          Tahap Pemesanan
        </h2>
        <ul className="m-0 grid grid-cols-2 gap-6 p-0 lg:grid-cols-4">
          {STEPS.map((item, idx) => {
            return (
              <li
                key={idx}
                className="mx-auto flex h-40 w-40 flex-none flex-col items-center justify-center rounded-3xl bg-brand-2-95 bg-opacity-90 p-4 text-center md:p-8 lg:h-56 lg:w-56"
              >
                {/* point */}
                <div className="relative mb-4 h-16 w-16 lg:mb-5 xl:h-20 xl:w-20">
                  <span
                    className={`absolute left-0 top-0 block h-16 w-16 border border-transparent bg-[#fff4ee] xl:h-20 xl:w-20`}
                    style={{
                      borderRadius: "30% 70% 57% 43% / 51% 44% 56% 49%",
                    }}
                  />
                  <span
                    className={`absolute -left-[6px] top-0 block h-16 w-16 border-[1.5px] border-brand-100 bg-transparent xl:-left-2 xl:h-20 xl:w-20`}
                    style={{
                      borderRadius: "30% 70% 57% 43% / 51% 44% 56% 49%",
                    }}
                  />
                  <span className="absolute left-1/2 top-1/2 -translate-x-3/4 -translate-y-1/2 text-2xl font-bold text-brand-100/75 xl:text-5xl">
                    {item.number}
                  </span>
                </div>
                <div className="w-full flex-1">
                  <h3 className="text-center text-base font-bold text-brand-100 md:text-lg">
                    {item.title}
                  </h3>
                </div>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
});

Steps.displayName = "Steps";

// ({ className = "" }: Props) => {

// };

export default Steps;
