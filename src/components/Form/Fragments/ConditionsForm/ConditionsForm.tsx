import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { TpaymentConditions } from "@/Types";
import styles from "./ConditionsForm.module.css";

export const ConditionsForm = () => {
  const [paymentCondition, setPaymentCondition] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setPaymentCondition(event.target.value);
  };

  const paymentConditionsOptions: TpaymentConditions[] = [
    {
      condition: "Pix",
      value: 1,
    },
    {
      condition: "Cartão de crédito",
      value: 2,
    },
    {
      condition: "Cheque",
      value: 3,
    },
    {
      condition: "Permuta",
      value: 4,
    },
  ];

  return (
    <div className={styles.formContainer}>
      <h2>Condições de pagamento</h2>
      <FormControl fullWidth>
        {/*<InputLabel id="payment-condition-label">Cond. de pagamento</InputLabel>*/}
        <Select
          labelId="payment-condition-label"
          id="payment-condition-select"
          value={paymentCondition}
          label="Cond. de pagamento"
          onChange={handleChange}
          className={styles.select}
        >
          {paymentConditionsOptions.map((item, key) => (
            <MenuItem key={key} value={item.value}>
              {item.condition}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};
