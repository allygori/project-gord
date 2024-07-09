import clsx from "clsx";
import Container from "@components/container";
import Slide from "./slide";
import BackgroundImage from "@public/assets/img/nathan-fertig-FBXuXp57eM0-unsplash.jpg";

type Props = {
  className?: string;
};

const Testimony = ({ className = "" }: Props) => {
  return (
    <section
      className={clsx("bg-brand-100", className)}
      style={{
        backgroundImage: `url(${BackgroundImage.src})`,
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        width: "100%",
        height: "100%",
      }}
    >
      <Container className="xl:px-32 xl:py-24">
        {/* section:title */}
        <div className="flex w-full flex-col items-center justify-center bg-brand-100 py-10">
          <h2 className="w-3/12 text-center text-xl font-medium text-white xl:text-3xl">
            <span
              style={{
                background: "linear-gradient(120deg, #f2f623 0%, #f2f623 100%)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "50% 20%",
                backgroundPosition: "25% 90%",
              }}
            >
              Testimoni
            </span>
          </h2>
        </div>
        <Slide />
      </Container>
    </section>
  );
};

export default Testimony;
