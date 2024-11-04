import { TextField, FormControl } from "@mui/material";
import styles from "./Condicoes.module.css";

export const CondicoesForm = () =>{
  return (
    <div className={styles.formContainer}>
      <h1>Condições de pagamento</h1>
      <FormControl className={styles.formControl}>
        <TextField
          className={styles.textField}
          label="Condições"
          variant="outlined"
        />
        <TextField
          className={styles.textQuantity}
          label="Quantidade"
          variant="outlined"          
        />
      </FormControl>
    </div>
  );
};