'use client'

import React, {
  createContext,
  useState,
  useEffect,
  ReactNode
} from "react";

import { DEFAULT_CONTACT_VALUE } from "@/Constants";
import { IPropsDataContext } from "@/Interfaces";

export const MainDataContext = createContext<IPropsDataContext>(DEFAULT_CONTACT_VALUE);

export const MainDataContextProvider = ({ children }: { children: ReactNode }) => {
  const [contactValues, setContactValues] = useState(
    DEFAULT_CONTACT_VALUE.contactValues
  );

  useEffect(() => {
    console.log("contactValues atualizado:", contactValues);
  }, [contactValues]);

  return (
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
