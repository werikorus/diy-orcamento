import { TextField, FormControl } from "@mui/material";
import styles from "./ContactForm.module.css";

export const ContactForm = () => {
  return (
    <div className={styles.formContainer}>
      <h2>Contato</h2>
      <form noValidate autoComplete="off">
        <FormControl className={styles.formControl}>
          <div className={styles.divGrade}>
            <TextField
              className={styles.TextField}
              label="CNPJ/CPF"
              variant="outlined"
              id="cnpj-cpf"
            />
            <TextField
              className={styles.TextField}
              label="Inscrição estadual"
              variant="outlined"
              id="state-subscription"
            />
          </div>

          <TextField
            className={styles.TextField}
            label="Razão Social"
            variant="outlined"
            id="social-reazon"
          />

          <TextField
            className={styles.TextField}
            label="Nome Fantasia"
            variant="outlined"
            id="fantazy-name"
          />

          <div className={styles.divGrade}>
            <TextField
              className={styles.TextField}
              label="Telefone"
              variant="outlined"
              id="phone"
            />

            <TextField
              className={styles.TextField}
              label="e-mail"
              variant="outlined"
              id="email"
            />
          </div>

          <div className={styles.divGrade}>
            <TextField
              className={styles.TextField}
              label="CEP/Código postal"
              variant="outlined"
              id="codepost"
            />

            <TextField
              className={styles.TextField}
              label="Endereço"
              variant="outlined"
              id="address"
            />
          </div>

          <TextField
            className={styles.TextField}
            label="Complemento"
            variant="outlined"
            id="complement"
          />

          <div className={styles.divGrade}>
            <TextField
              className={styles.TextField}
              label="Cidade"
              variant="outlined"
              id="city"
            />
            <TextField
              className={styles.TextField}
              label="Estado"
              variant="outlined"
              id="estate"
            />
          </div>
        </FormControl>
      </form>
    </div>
  );
};
