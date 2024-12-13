"use client";
import { Footer, Header } from "@/components";
import styles from "./Closing.module.css";
import { ConditionsForm } from "@/components/Form/Fragments";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";

const Closing = () => {
  const router = useRouter();

  return (
    <main className={styles.ClosingContainer}>
      <Header typeOrder={2} />
      <ConditionsForm />
      <div className={styles.PrintAndPreviewContainer}>
        <Button
          size="medium"
          variant="contained"
          onClick={() => router.push("/Preview")}
        >
          Vizualizar
        </Button>
        <Button
          size="medium"
          variant="contained"
          onClick={() => window.print()}
        >
          Imprimir
        </Button>
      </div>
      <Footer />
    </main>
  );
};

export default Closing;
