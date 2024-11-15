import { TextField, FormControl } from "@mui/material";
import styles from "./Services.module.css";

export const ServicesForm = () => {
  return (
    <div className={styles.formContainer}>
      <h1>Serviços</h1>
      <form action="">
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
      </form>
    </div>
  );
};
