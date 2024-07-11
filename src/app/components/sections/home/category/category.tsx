import clsx from "clsx";
import Container from "@components/container";
import IconCatCurtain from "@components/icons/cat-curtain";
import IconCatVitrase from "@components/icons/cat-vitrase";
import IconCatBlind from "@components/icons/cat-blind";

type Props = {
  className?: string;
};

const Category = ({ className = "" }: Props) => {
  return (
    <section className={clsx("w-full bg-brand-200", className)}>
      <Container className="over flex w-full flex-row flex-wrap py-10 xl:w-10/12">
        <ul className="m-0 flex w-full flex-col justify-between p-0 xl:flex-row">
          <li className="flex flex-1 flex-col items-center justify-start p-4 text-center xl:p-8">
            <IconCatCurtain className="mb-2 h-24 w-24 text-brand-100" />
            <h3 className="mb-2 text-base font-medium text-brand-100">
              Gorden
            </h3>
            <p className="text-sm text-brand-100">
              Gorden yang dirancang khusus untuk memblokir cahaya secara
              efektif. Cocok digunakan untuk ruang tamu, ruang keluarga, kamar
              tidur, ruangan presentasi, ruang pertemuan atau kantor.
            </p>
          </li>
          <li className="flex flex-1 flex-col items-center justify-start p-4 text-center xl:p-8">
            <IconCatVitrase className="mb-2 h-24 w-24 text-brand-100" />
            <h3 className="mb-2 text-base font-medium text-brand-100">
              Vitrase
            </h3>
            <p className="text-sm text-brand-100">
              Gorden ini membawa masuk banyak cahaya alami, tapi tetap dapat
              menjaga privasi. Membuat rumah tampak lebih segar dan cerah, cocok
              digunakan untuk ruang tamu atau kamar yang ingin terlihat lebih
              lega dan adem.
            </p>
          </li>
          <li className="flex flex-1 flex-col items-center justify-start p-4 text-center xl:p-8">
            <IconCatBlind className="mb-2 h-[5.72rem] w-[5.72rem] text-brand-100" />
            <h3 className="mb-2 text-base font-medium text-brand-100">Blind</h3>
            <p className="text-sm text-brand-100">
              Gorden yang terdiri dari lapisan-lapisan bilah horizontal atau
              vertical yang dapat mengatur intensitas cahaya dan privasi. Cocok
              digunakan di kamar tidur, ruangan presentasi, ruang pertemuan atau
              kantor.
            </p>
          </li>
        </ul>
      </Container>
    </section>
  );
};

export default Category;
