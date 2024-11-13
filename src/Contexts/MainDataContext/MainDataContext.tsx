"use client";
import React, { createContext, useState, ReactNode } from "react";
import { IPropsDataContext } from "@/Interfaces";
import { DEFAULT_VALUE } from "@/Constants";

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

  const [currentSlideIndex, setCurrentSlideIndex] = useState(
    DEFAULT_VALUE.currentSlideIndex
  );

  return (
    <MainDataContext.Provider
      value={{
        contactValues,
        setContactValues,
        productsValues,
        setProductsValues,
        currentSlideIndex,
        setCurrentSlideIndex,
      }}
    >
      {children}
    </MainDataContext.Provider>
  );
};
