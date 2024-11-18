"use client";
import { Footer, Header } from "@/components";
import styles from "./Closing.module.css";
import { ConditionsForm } from "@/components/Form/Fragments";

const Closing = () => {
  return (
    <main className={styles.ClosingContainer}>
      <Header typeOrder={2} />
      <ConditionsForm />
      <Footer />
    </main>
  );
};

export default Closing;
