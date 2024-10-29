
"use client";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import styles from "./home.module.css";

const Home = () => {
  const router = useRouter();

  return (
    <div className={styles.homeContainer}>
      <Button size="large" variant="contained" onClick={() => router.push("/pedido")}>
        Pedido
      </Button>

      <Button size="large" variant="contained" onClick={() => router.push("/orcamento")}>
        Orçamento
      </Button>       
    </div>
  );  
}

export default Home;
