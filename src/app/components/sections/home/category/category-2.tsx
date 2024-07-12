import Image from "next/image";
import Container from "@components/container";
import Image1 from "@public/assets/img/categories/wooden-blind.jpg";
// import Image2 from "@public/assets/img/categories/horizontal-blind.jpg";
// import Image2 from "@public/assets/img/categories/horizontal-blind.webp";
import Image2 from "@public/assets/img/categories/horizontal-blind.jpg";
import Image3 from "@public/assets/img/categories/vertical-blind.jpg";
import Image4 from "@public/assets/img/categories/roller-blind.jpg";
import Image5 from "@public/assets/img/categories/gorden-smokring.jpg";
import Image6 from "@public/assets/img/categories/gorden-rumah-sakit.jpg";
import clsx from "clsx";

const CATEGORIES = [
  {
    photo: Image1,
    name: "Wooden Blind",
  },
  {
    photo: Image2,
    name: "Horizontal Blind",
  },
  {
    photo: Image3,
    name: "Vertical Blind",
  },
  {
    photo: Image4,
    name: "Roller Blind",
  },
  {
    photo: Image5,
    name: "Gorden Smokring",
  },
  {
    photo: Image6,
    name: "Gorden Rumah Sakit",
  },
];

type Props = {
  className?: string;
};

const Category2 = ({ className = "" }: Props) => {
  return (
    <section className={clsx("bg-brand-200 py-8 md:py-10 lg:py-12", className)}>
      <Container className="w-11/12 md:w-10/12">
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
        <ul className="m-0 grid grid-cols-1 gap-2 p-0 xl:grid-cols-3 xl:gap-4">
          {CATEGORIES.map((item, idx) => {
            return (
              <li key={idx} className="mb-2 flex w-full flex-col items-center">
                <div className="relative mb-2 h-full w-auto overflow-hidden rounded-lg object-contain object-center">
                  <Image
                    src={item.photo}
                    alt={item.name}
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <p className="text-base font-medium text-brand-95 md:text-lg">
                  {item.name}
                </p>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
};

export default Category2;
