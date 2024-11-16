import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import styles from "./Conditions.module.css";

export const ConditionsForm = () => {
  const [paymentCondition, setPaymentCondition] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setPaymentCondition(event.target.value);
  };

  return (
    <div>
      <form className={styles.formContainer}>
        <h2>Condições de pagamento</h2>
        <FormControl fullWidth>
          <InputLabel id="payment-condition-label">
            Condições de pagamento
          </InputLabel>
          <Select
            labelId="payment-condition-label"
            id="payment-condition-select"
            value={paymentCondition}
            label="Condições de pagamento"
            onChange={handleChange}
          >
            <MenuItem value="10">Pix</MenuItem>
            <MenuItem value="20">Cartão de crédito</MenuItem>
            <MenuItem value="30">Cheque</MenuItem>
          </Select>
        </FormControl>
      </form>
    </div>
  );
};
