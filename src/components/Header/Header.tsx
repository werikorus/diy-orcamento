import React from "react";
import styles from "./Header.module.css";

type Props = {
  typeOrder: number;
};

const handleTitle = (type: number) => {
  switch (type) {
    case 0:
      return "Pedido";

    case 1:
      return "Orçamento";

    case 2:
      return "Fechamento";

    default:
      break;
  }
};

export const Header = ({ typeOrder }: Props) => {
  return (
    <header className={styles.header}>
      <h1>{handleTitle(typeOrder)}</h1>
    </header>
  );
};
