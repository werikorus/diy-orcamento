import { TextField, FormControl } from "@mui/material";
import styles from "./Servicos.module.css";

export const Servicos = () =>{
  return (
    <div className={styles.formContainer}>
      <h1>Serviços</h1>
      <FormControl className={styles.formControl}>
        <TextField
          className={styles.textField}
          label="Descrição serviço"
          variant="outlined"
        />
        <TextField
          className={styles.textQuantity}
          placeholder="0"
          variant="outlined"
          type="number"
        />
      </FormControl>
    </div>
  );
};