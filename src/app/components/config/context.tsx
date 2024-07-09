"use client";

import type { FC, ReactNode } from "react";
import { createContext } from "react";

type ConfigContextType = {
  layout: {
    header: {
      height: number | string | undefined;
    };
  };
};

const ConfigContext = createContext<ConfigContextType | null>(null);
const ConfigProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const value = {
    layout: {
      header: {
        height: 64,
      },
    },
  };
  return (
    <ConfigContext.Provider value={value}>{children}</ConfigContext.Provider>
  );
};

export type { ConfigContextType };
export { ConfigProvider };
export default ConfigContext;
