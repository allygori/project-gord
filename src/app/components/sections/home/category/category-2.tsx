import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import Container from "@components/container";
import Image1 from "@public/assets/img/categories/wooden-blind.jpg";
import Image2 from "@public/assets/img/categories/horizontal-blind.jpg";
import Image3 from "@public/assets/img/categories/cream-vertical-blinds-scaled.jpg";
import Image4 from "@public/assets/img/categories/roller-blind.jpg";
import Image5 from "@public/assets/img/categories/gorden-blockout.jpg";
import Image6 from "@public/assets/img/categories/gorden-rumah-sakit.jpg";

const CATEGORIES = [
  {
    photo: Image1,
    href: "",
    name: "Wooden Blind",
  },
  {
    photo: Image2,
    href: "/produk/horizontal-blinds",
    name: "Horizontal Blind",
  },
  {
    photo: Image3,
    href: "/produk/vertical-blinds",
    name: "Vertical Blind",
  },
  {
    photo: Image4,
    href: "",
    name: "Roller Blind",
  },
  {
    photo: Image5,
    href: "",
    name: "Gorden Smokring",
  },
  {
    photo: Image6,
    href: "",
    name: "Gorden Rumah Sakit",
  },
];

type Props = {
  className?: string;
};

const Category2 = ({ className = "" }: Props) => {
  return (
    <section className={clsx("", className)}>
      <Container className="w-11/12 lg:w-10/12">
        <h2 className="mb-6 text-center text-xl font-medium text-brand-100 xl:mb-12 xl:text-3xl">
          <span
            style={{
              background: "linear-gradient(120deg, #f2f623 0%, #f2f623 100%)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "50% 25%",
              backgroundPosition: "10% 90%",
            }}
          >
            Produk
          </span>
        </h2>
        <ul className="m-0 grid grid-cols-2 gap-4 p-0 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-4">
          {CATEGORIES.map((item, idx) => {
            return (
              <li key={idx} className="mb-2 flex w-full flex-col items-center">
                {item.href !== "" ? (
                  <>
                    <Link
                      href={item.href}
                      className="relative mb-2 aspect-square h-full w-auto overflow-hidden rounded-lg border-[#e3e4e7] object-contain object-center shadow-md"
                    >
                      <Image
                        src={item.photo}
                        alt={item.name}
                        style={{ objectFit: "contain" }}
                      />
                    </Link>
                    <Link href={item.href}>
                      <p className="text-base font-medium text-brand-95 md:text-lg">
                        {item.name}
                      </p>
                    </Link>
                  </>
                ) : (
                  <>
                    <div className="relative mb-2 aspect-square h-full w-auto overflow-hidden rounded-lg border-[#e3e4e7] object-contain object-center shadow-md">
                      <Image
                        src={item.photo}
                        alt={item.name}
                        style={{ objectFit: "contain" }}
                      />
                    </div>
                    <p className="text-base font-medium text-brand-95 md:text-lg">
                      {item.name}
                    </p>
                  </>
                )}
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
};

export default Category2;
