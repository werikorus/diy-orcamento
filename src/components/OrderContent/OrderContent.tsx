import React from "react";
import styles from "./OrderContent.module.css";
import Image from "next/image";
import logo from "./../../../public/images/logo.png";

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
      <tbody>
        <tr>
          <td>January</td>
          <td>$100</td>
        </tr>
        <tr>
          <td>February</td>
          <td>$80</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td>Sum</td>
          <td>$180</td>
        </tr>
      </tfoot>
    </table>
  );
};
