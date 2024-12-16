import Image from "next/image";
import React from "react";
import styles from "./OrderContent.module.css";
import logo from "./../../../public/images/logo.png";
import {
  FragConditions,
  FragContact,
  FragProducts,
  FragServices,
} from "./fragments";

export const OrderContent = () => {
  return (
    <section className={styles.tableContainer}>
      <div className={styles.headerLogo}>
        <Image src={logo} alt="logo" width={200} height={90} />
      </div>
      <FragContact />
      <FragProducts />
      <FragServices />
      <FragConditions />
    </section>
  );
};
