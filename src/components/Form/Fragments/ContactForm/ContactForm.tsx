import { TextField, FormControl } from "@mui/material";
import styles from "./ContactForm.module.css";
import { useMainDataContext } from "@/Hooks";
import { useDataForm } from "@/Hooks";

export const ContactForm = () => {
  const { onSubmbitForm } = useDataForm();
  const { contactValues } = useMainDataContext();

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
              value={contactValues.cpfCnpj || ""}
              onChange={() => onSubmbitForm(1)}
            />
            <TextField
              className={styles.TextField}
              label="Inscrição estadual"
              variant="outlined"
              id="state-subscription"
              value={contactValues.inscricaoEstadual || ""}
              onChange={() => onSubmbitForm(1)}
            />
          </div>

          <TextField
            className={styles.TextField}
            label="Razão Social"
            variant="outlined"
            id="social-reazon"
            value={contactValues.razaoSocial || ""}
            onChange={() => onSubmbitForm(1)}
          />

          <TextField
            className={styles.TextField}
            label="Nome Fantasia"
            variant="outlined"
            id="fantazy-name"
            value={contactValues.nomeFantazia || ""}
            onChange={() => onSubmbitForm(1)}
          />

          <div className={styles.divGrade}>
            <TextField
              className={styles.TextField}
              label="Telefone"
              variant="outlined"
              id="phone"
              value={contactValues.telefone || ""}
              onChange={() => onSubmbitForm(1)}
            />

            <TextField
              className={styles.TextField}
              label="e-mail"
              variant="outlined"
              id="email"
              value={contactValues.email || ""}
              onChange={() => onSubmbitForm(1)}
            />
          </div>

          <div className={styles.divGrade}>
            <TextField
              className={styles.TextField}
              label="CEP/Código postal"
              variant="outlined"
              id="codepost"
              value={contactValues.cep || ""}
              onChange={() => onSubmbitForm(1)}
            />

            <TextField
              className={styles.TextField}
              label="Endereço"
              variant="outlined"
              id="address"
              value={contactValues.endereco || ""}
              onChange={() => onSubmbitForm(1)}
            />
          </div>

          <TextField
            className={styles.TextField}
            label="Complemento"
            variant="outlined"
            id="complement"
            value={contactValues.complemento || ""}
            onChange={() => onSubmbitForm(1)}
          />

          <div className={styles.divGrade}>
            <TextField
              className={styles.TextField}
              label="Cidade"
              variant="outlined"
              id="city"
              value={contactValues.cidade || ""}
              onChange={() => onSubmbitForm(1)}
            />
            <TextField
              className={styles.TextField}
              label="Estado"
              variant="outlined"
              id="estate"
              value={contactValues.estado || ""}
              onChange={() => onSubmbitForm(1)}
            />
          </div>
        </FormControl>
      </form>
    </div>
  );
};
