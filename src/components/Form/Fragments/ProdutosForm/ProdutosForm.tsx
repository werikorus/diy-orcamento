import { TextField, FormControl } from "@mui/material";
import styles from "./ProdutosForm.module.css";

export const ProdutosForm = () =>{
  return (
    <div className={styles.formContainer}>
      <h1>Produtos</h1>
      <FormControl className={styles.formControl}>
        <TextField
          className={styles.textField}
          label="Descrição produto"
          variant="outlined"
        />
        <TextField
          className={styles.textQuantity}
          variant="outlined"
          type="number"
          placeholder="0"
        />
      </FormControl>
    </div>
  );
};