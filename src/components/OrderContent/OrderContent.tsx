import React from "react";
import styles from "./OrderContent.module.css";
import Image from "next/image";
import logo from "./../../../public/images/logo.png";
import { FragContact, FragProducts } from "./fragments";

export const OrderContent = () => {
  return (
    <table className={styles.tableContainer}>
      <thead className={styles.tHead}>
        <tr>
          <td>
            <Image src={logo} alt="logo" width={300} height={130} />
          </td>
        </tr>
      </thead>
      <tbody className={styles.tbody}>
        <FragContact />
        <FragProducts />
      </tbody>
      <tfoot></tfoot>
    </table>
  );
};
