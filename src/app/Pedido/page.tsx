"use client";
import { Footer, Form, Header } from "@/components";
import styles from "./Pedido.module.css";

const Pedido = () => {
  return (
    <div className={styles.pedidoContainer}>
      <Header typeOrder={0} />
      <Form />
      <Footer />
    </div>
  );
};

export default Pedido;
