import Container from "@components/container";
import { STEPS } from "./step.constant";
import clsx from "clsx";

type Props = {
  className?: string;
};

const Steps = ({ className = "" }: Props) => {
  return (
    <section className={clsx("py-8 md:py-10 xl:py-12", className)}>
      <Container className="w-11/12 xl:w-10/12">
        <h2 className="mb-6 text-center text-xl font-medium text-brand-100 xl:mb-12 xl:text-3xl">
          <span
            style={{
              background: "linear-gradient(120deg, #f2f623 0%, #f2f623 100%)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "50% 25%",
              backgroundPosition: "10% 90%",
            }}
          >
            Cara Pemesanan
          </span>
        </h2>
        <ul className="m-0 grid grid-cols-1 gap-6 p-0 lg:grid-cols-2">
          {STEPS.map((item, idx) => {
            return (
              <li
                key={idx}
                className="bg-brand-90 flex flex-none flex-col rounded-2xl bg-opacity-20 p-4 md:p-8 xl:flex-1 xl:flex-row"
              >
                <div className="ml-2 flex flex-row items-center">
                  {/* point */}
                  <div className="relative h-16 w-16 xl:h-28 xl:w-28">
                    <span
                      className={`absolute left-0 top-0 block h-16 w-16 border border-brand-200 bg-brand-200 xl:h-28 xl:w-28`}
                      style={{
                        borderRadius: "30% 70% 57% 43% / 51% 44% 56% 49%",
                      }}
                    />
                    <span
                      className={`absolute -left-[6px] top-0 block h-16 w-16 border-[1.5px] border-brand-100 bg-transparent xl:-left-2 xl:h-28 xl:w-28`}
                      style={{
                        borderRadius: "30% 70% 57% 43% / 51% 44% 56% 49%",
                      }}
                    />
                    <span className="absolute left-1/2 top-1/2 -translate-x-3/4 -translate-y-1/2 text-2xl font-bold text-brand-100/75 xl:text-6xl">
                      {item.number}
                    </span>
                  </div>
                  <div className="ml-3 flex-1">
                    <h3 className="text-lg font-bold text-brand-100 md:text-xl">
                      {item.title}
                    </h3>
                    <div className="hidden md:block">
                      <span
                        dangerouslySetInnerHTML={{ __html: item.description }}
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="block md:hidden">
                    <span
                      dangerouslySetInnerHTML={{ __html: item.description }}
                    />
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
};

export default Steps;
