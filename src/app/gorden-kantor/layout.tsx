import { ConfigProvider } from "@app/components/config";
import { HeaderOne } from "@components/headers";
import { FooterOne } from "@components/footers";

type Props = Readonly<{
  children: React.ReactNode;
}>;

const GordenKantorLayout = ({ children = "" }: Props) => {
  return (
    <>
      {/* header:header-one */}
      <HeaderOne />

      {/* main:content */}
      <ConfigProvider>{children}</ConfigProvider>

      {/* footer:footer-one */}
      <FooterOne />
    </>
  );
};

export default GordenKantorLayout;
