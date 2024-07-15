import type { ElementType } from "react";
import { BENEFITS } from "./benefits.constant";
import Separator from "./separator";

type Props = {
  as?: string;
  className?: string;
};

const Benefits = ({ as = "section", className = "" }: Props) => {
  const Component = as as ElementType;

  return (
    <Component className={className}>
      <h2 className="mb-6 text-center text-xl font-medium text-brand-100 md:mb-12 xl:text-3xl">
        <span
          style={{
            background: "linear-gradient(120deg, #f2f623 0%, #f2f623 100%)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "50% 25%",
            backgroundPosition: "10% 90%",
          }}
        >
          Kenapa harus memilih IKA Gorden?
        </span>
      </h2>

      <ul className="m-0 grid grid-cols-1 gap-2 p-0 xl:grid-cols-2 xl:gap-4">
        {BENEFITS.map((item, idx) => {
          return (
            <li
              key={idx}
              className="flex flex-row overflow-hidden rounded-2xl border border-transparent bg-brand-200 p-4"
            >
              <div className="mr-4 flex-none p-2">
                {/* <div className="overflow-hidden rounded-full bg-blue-500/10 p-3"> */}
                <div className="overflow-hidden rounded-full bg-brand-90 bg-opacity-10 p-3">
                  <item.Icon className="mx-auto h-8 w-8 text-brand-90" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="mb-2 text-base font-semibold text-brand-100">
                  {item.title}
                </h3>
                <Separator className="mb-4" />
                <p className="text-sm text-brand-100">{item.description}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </Component>
  );
};

export default Benefits;
