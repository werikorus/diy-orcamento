import React from "react";
import styles from './'

type Props = {
  typeOrder: number;
}

export const Header = ( {typeOrder} : Props) => {
  return (
    <header>
      <h3>{typeOrder == 0 ? "Novo Pedido" : "Novo Orçamento"}</h3>
    </header>
  );
};