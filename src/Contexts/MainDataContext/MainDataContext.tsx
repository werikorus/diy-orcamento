'use client'
import React, {
  createContext,
  useState,
  useEffect,
  ReactNode
} from "react";

import { TContact } from "@/Types";

type PropsDataContext = {
  contactValues: TContact;
  setContactValues: React.Dispatch<React.SetStateAction<TContact>>;
};

const DEFAULT_VALUE = {
  contactValues: {
    cpfCnpj: 0,
    inscricaoEstadual: 0,
    razaoSocial: "",
    nomeFantazia: "",
    telefone: 0,
    cep: 0,
    email: "",
    endereco: "",
    complemento: "",
    cidade: "",
    estado: "",
  },
  setContactValues: () => {},
};

export const MainDataContext = createContext<PropsDataContext>(DEFAULT_VALUE);

export const MainDataContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [ contactValues, setContactValues ] = useState(
    DEFAULT_VALUE.contactValues
  );

  useEffect(() => {
    console.log("Data Context:", contactValues);
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
