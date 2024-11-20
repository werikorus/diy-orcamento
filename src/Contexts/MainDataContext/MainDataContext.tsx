"use client";
import React, { createContext, useState, ReactNode, useEffect } from "react";
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

  const [servicesValues, setServicesValues] = useState(
    DEFAULT_VALUE.servicesValues
  );

  const [currentSlideIndex, setCurrentSlideIndex] = useState(
    DEFAULT_VALUE.currentSlideIndex
  );

  const [closingOrderValues, setClosingOrderValues] = useState(
    DEFAULT_VALUE.closingOrderValues
  );

  useEffect(() => {
    const totalPriceProducts: number = productsValues.reduce(
      (acc, product) => (acc + product.price) * product.quantity,
      0
    );

    const totalPriceServices: number = servicesValues.reduce(
      (acc, service) => (acc + service.price) * service.quantity,
      0
    );

    const totalPriceOrder: number = totalPriceProducts + totalPriceServices;

    setClosingOrderValues((prev) => ({
      ...prev,
      totalProducts: totalPriceProducts,
      totalServices: totalPriceServices,
      totalOrder: totalPriceOrder,
      paymentCondition: "",
      paymentTurns: 0,
    }));
  }, [productsValues, servicesValues]);

  return (
    <MainDataContext.Provider
      value={{
        contactValues,
        setContactValues,
        productsValues,
        setProductsValues,
        currentSlideIndex,
        setCurrentSlideIndex,
        servicesValues,
        setServicesValues,
        closingOrderValues,
        setClosingOrderValues,
      }}
    >
      {children}
    </MainDataContext.Provider>
  );
};
