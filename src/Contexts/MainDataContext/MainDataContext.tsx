"use client";
import React, { createContext, useState, ReactNode } from "react";

import { DEFAULT_VALUE } from "@/Constants";
import { IPropsDataContext } from "@/Interfaces";

export const MainDataContext = createContext<IPropsDataContext>(DEFAULT_VALUE);

export const MainDataContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [contactValues, setContactValues] = useState(
    DEFAULT_VALUE.contactValues
  );

  const [productsValues, setProductsValues] = useState(
    DEFAULT_VALUE.productsValues
  );

  return (
    <MainDataContext.Provider
      value={{
        contactValues,
        setContactValues,
        productsValues,
        setProductsValues
      }}
    >
      {children}
    </MainDataContext.Provider>
  );
};
