import { useEffect, useState } from "react";
import { MENUS } from "./menus.constant";
import IconArrowBottom from "@components/icons/arrow-bottom";
import NavbarItemMobile from "./navbar-item-mobile";
import NavbarItemDesktop from "./navbar-item-desktop";

type Props = {
  className?: string;
};

const Navbar = ({ className = "" }: Props) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleOpen = () => {
    setShowMenu(true);
  };

  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "scroll";
      };
    }
  }, [showMenu]);

  return (
    <nav className={className}>
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between">
        <button
          data-collapse-toggle="navbar-dropdown"
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-dropdown"
          aria-expanded="false"
          onClick={handleOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="h-5 w-5 text-brand-100"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        {/* nav:desktop */}
        <div className="hidden w-full md:block md:w-auto">
          <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-transparent md:p-0 rtl:space-x-reverse dark:border-gray-700 dark:bg-gray-800 md:dark:bg-gray-900">
            {MENUS.map((item, idx) => {
              return (
                <NavbarItemDesktop key={idx} href={item.href}>
                  {item.label}
                </NavbarItemDesktop>
              );
            })}
          </ul>
        </div>
        {/* nav:mobile */}
        {showMenu ? (
          <div
            className="absolute left-0 top-0 min-h-screen w-full bg-brand-200 md:hidden md:w-auto"
            id="navbar-dropdown"
          >
            {/* button:close */}
            <div className="flex w-full flex-row justify-end">
              <button
                type="button"
                className="inline-flex p-4 text-2xl text-brand-100"
                onClick={() => {
                  setShowMenu(false);
                }}
              >
                &times;
              </button>
            </div>
            <ul className="m-0 p-0">
              {MENUS.map((item, idx) => {
                return (
                  <NavbarItemMobile key={idx} href={item.href}>
                    {item.label}
                  </NavbarItemMobile>
                );
              })}
            </ul>
          </div>
        ) : null}
      </div>
    </nav>
  );
};

export default Navbar;
