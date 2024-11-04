'use client'
import React, {
  createContext,
  useState,
  ReactNode
} from "react";

import { DEFAULT_CONTACT_VALUE } from "@/Constants";
import { IPropsDataContext } from "@/Interfaces";

export const MainDataContext = createContext<IPropsDataContext>(DEFAULT_CONTACT_VALUE);

export const MainDataContextProvider = ({ children }: { children: ReactNode }) => {
  const [contactValues, setContactValues] = useState(
    DEFAULT_CONTACT_VALUE.contactValues
  );

  return (
    <MainDataContext.Provider
      value={{
        contactValues,
        setContactValues,
      }}
    >
    <MainDataContext.Provider
      value={{
        contactValues,
        setContactValues,
      }}
    >
      {children}
    </MainDataContext.Provider>
  );
}; 

