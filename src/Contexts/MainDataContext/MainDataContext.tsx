'use client'

import {
  createContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";

import { TContact } from "@/Types";

const defaultContactValues: TContact = {
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
};

export const MainDataContext = createContext<{
  contactValues: TContact;
  setContactValues: Dispatch<SetStateAction<TContact>>;
}>({
  contactValues: defaultContactValues,
  setContactValues: () => null,
});

type TProviderProps = {
  children: ReactNode;
};

export const MainDataContextProvider = ({ children }: TProviderProps) => {
  const [contactValues, setContactValues] =
    useState<TContact>(defaultContactValues);

  useEffect(() => {
    console.log(contactValues);
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
