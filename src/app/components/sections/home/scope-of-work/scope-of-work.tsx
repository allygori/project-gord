import type { ElementType } from "react";
import IconCheckBadge from "@components/icons/check-badge";
import Container from "@components/container";

type Props = {
  as?: string;
  className?: string;
};

const SCOPES = [
  {
    label: "Rumah",
  },
  {
    label: "Ruko",
  },
  {
    label: "Rukan (Rumah Kantor)",
  },
  {
    label: "Kantor",
  },
  {
    label: "Sekolah",
  },
  {
    label: "Rumah Sakit",
  },
  {
    label: "Klinik",
  },
  {
    label: "Penginapan/Hotel/Hostel/Homestay",
  },
];

const ScopeOfWork = ({ as = "section", className = "" }: Props) => {
  const Component = as as ElementType;

  return (
    <Component className={className}>
      <Container className="w-full xl:w-10/12">
        <h2 className="mb-12 text-center text-xl font-medium text-brand-100 xl:text-3xl">
          <span
            style={{
              background: "linear-gradient(120deg, #f2f623 0%, #f2f623 100%)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "40% 25%",
              backgroundPosition: "10% 90%",
            }}
          >
            Kami Menerima Pembuatan Gorden Custom Untuk
          </span>
        </h2>

        <ul className="m-0 grid grid-cols-1 gap-2 p-0 md:grid-cols-2 md:gap-4 lg:grid-cols-2 lg:gap-4 xl:grid-cols-2 xl:gap-4">
          {SCOPES.map((item, idx) => {
            return (
              <li key={idx} className="flex flex-row">
                <IconCheckBadge className="mr-1 h-5 w-5 text-brand-100 xl:mr-2" />
                <p className="text-sm text-brand-95 xl:text-base">
                  {item.label}
                </p>
              </li>
            );
          })}
        </ul>
      </Container>
    </Component>
  );
};

export default ScopeOfWork;
