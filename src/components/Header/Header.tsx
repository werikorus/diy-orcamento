import React from "react";
import styles from "./Header.module.css";

type Props = {
  typeOrder: number;
};

export const Header = ({ typeOrder }: Props) => {
  return (
    <header className={styles.header}>
      <h1>{typeOrder == 0 ? "Novo Pedido" : "Novo Orçamento"}</h1>
    </header>
  );
};
