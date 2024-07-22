import Paragraph from "./paragraph";
import Header from "./header";
import Image from "./image";
import Delimiter from "./delimiter";
import SectionFAQ from "./section-faq";

type Props = {
  type?: string;
  data?: Record<string, unknown>;
  className?: string;
};

const RenderEditorJsData = ({ type, data = {}, className = "" }: Props) => {
  return (
    <>
      {(() => {
        switch (type) {
          case "paragraph":
            return <Paragraph data={data} className={className} />;
          case "header":
            return <Header data={data} className={className} />;
          case "image":
            // eslint-disable-next-line jsx-a11y/alt-text
            return <Image data={data} className={className} />;
          case "delimiter":
            return <Delimiter data={data} className={className} />;
          case "section-faq":
            return <SectionFAQ data={data} className={className} />;
          default:
            return null;
        }
      })()}
    </>
  );
};

export default RenderEditorJsData;
