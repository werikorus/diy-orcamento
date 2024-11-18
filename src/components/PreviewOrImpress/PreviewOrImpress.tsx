import { Button, TextField } from "@mui/material";
import styles from "./PreviewOrimpress.module.css";

export const PreviewOrImpress = () => {
  return (
    <section className={styles.container}>
      <h1>Dê um nome para o seu arquivo: </h1>
      <TextField
        size="small"
        label="Nome arquivo"
        variant="filled"
        id="name-file"
      />

      <div className={styles.buttonContainer}>
        <Button variant="contained">Preview</Button>
        <Button variant="contained">Imprimir</Button>
      </div>
    </section>
  );
};
