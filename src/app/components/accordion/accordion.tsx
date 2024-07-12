import clsx from "clsx";
import { useState } from "react";
import * as AccordionPrimitive from "@allygory/accordion";
import IconArrowBottom2 from "@components/icons/arrow-bottom-2";
import type { Faq } from "@components/sections/home/faq/faq.constant";

type Props = {
  className?: string;
  faqs?: Faq[];
};

const Accordion = ({ className = "", faqs = [] }: Props) => {
  const [value, setValue] = useState(["one", "two", "three", "four"]);

  return (
    <AccordionPrimitive.Root
      type="multiple"
      value={value}
      onValueChange={setValue}
      className={clsx("w-full rounded-lg", className)}
    >
      {faqs.map((item, idx) => {
        return (
          <AccordionPrimitive.Item
            key={`${item.header}-${idx}`}
            value={`item-${idx + 1}`}
            defaultValue={`item-${idx + 1}`}
            className={clsx(
              "w-full rounded-lg focus:outline-none",
              // "rounded-lg",
            )}
          >
            <AccordionPrimitive.Header className="w-full">
              <AccordionPrimitive.Trigger
                className={clsx(
                  "group",
                  // "allygory-state-closed:rounded-lg allygory-state-open:rounded-t-lg",
                  "focus:outline-none",
                  "bg-white px-4 py-2 text-left",
                  "inline-flex w-full items-center justify-start",
                  // "inline-flex w-full items-center justify-between bg-white px-4 py-2 text-left dark:bg-gray-800",
                )}
              >
                <div
                  className={clsx(
                    "w-full border-b border-gray-500",
                    "flex flex-row",
                    "pb-2",
                  )}
                >
                  <IconArrowBottom2
                    className={clsx(
                      "mr-2 h-5 w-5 shrink-0 text-gray-500 ease-in-out",
                      "group-allygory-state-open:rotate-180 group-allygory-state-open:duration-300",
                    )}
                  />
                  <span
                    dangerouslySetInnerHTML={{ __html: item.header }}
                    className="text-sm font-medium uppercase text-brand-100 md:text-base"
                  />
                </div>
              </AccordionPrimitive.Trigger>
            </AccordionPrimitive.Header>
            <AccordionPrimitive.Content
              className={clsx(
                "bg-white",
                "w-full rounded-b-lg",
                "",
                "overflow-hidden",
                "allygory-state-open:animate-accordion-slide-down",
                "allygory-state-closed:animate-accordion-slide-up",
              )}
            >
              <div
                dangerouslySetInnerHTML={{ __html: item.content }}
                className={clsx(
                  "px-4 pb-3 pt-1",
                  "text-sm text-brand-100 md:text-base",
                )}
              />
              {/* </div> */}
            </AccordionPrimitive.Content>
          </AccordionPrimitive.Item>
        );
      })}
    </AccordionPrimitive.Root>
  );
};

export default Accordion;
