import SectionFaq from "@app/produk/components/faq";

type Props = {
  data?: {
    variant?: number;
  };
  className?: string;
};

const SectionFAQ = ({ data = {}, className = "" }: Props) => {
  const { variant = 1 } = data;

  return (
    <>
      {(() => {
        switch (variant) {
          case 1:
            return <SectionFaq className={className} />;
          default:
            return null;
        }
      })()}
    </>
  );
};

export default SectionFAQ;
