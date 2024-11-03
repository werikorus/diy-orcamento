'use client'
import { createContext, useState  } from "react";
export const MainDataContext = createContext({});

type DataProps = {
  children?: JSX.Element | JSX.Element[];
};

export const MainDataContextProvider = ({ children }: DataProps) => {
  const [contactValues, setContactValues] = useState({});

  return (
    <MainDataContext.Provider 
      value={{ 
        contactValues, 
        setContactValues 
      }}>
      {children}
    </MainDataContext.Provider>
  );
}; 