import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { TpaymentConditions } from "@/Types";
import styles from "./ConditionsForm.module.css";

export const ConditionsForm = () => {
  const [paymentCondition, setPaymentCondition] = useState("");
  const [paymentConditionTimes, setPaymentConditionTimes] = useState("");

  const priceProducts: number = 1.403;
  const priceServices: number = 1232;

  const price: number = priceProducts + priceServices;

  const handleChange = (event: SelectChangeEvent) => {
    setPaymentCondition(event.target.value);
  };

  const handleChangeTimes = (event: SelectChangeEvent) => {
    setPaymentConditionTimes(event.target.value);
  };

  const handleChangeCondition = (item: number) => {
    return item === 1 ? `${item}x ${price / 1}` : `${item}x ${price / item}`;
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

  const paymentConditionsTimes: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className={styles.formContainer}>
      <h2>Condições de pagamento</h2>

      <div>
        <h5>Valor Produtos: ${priceProducts}</h5>
        <h5>Valor Serviços: ${priceServices}</h5>
      </div>

      <h1>Total: R$ {price}</h1>
      <FormControl fullWidth className={styles.SelectsContainer}>
        <div className={styles.selectContainers}>
          <InputLabel id="payment-condition-label">Condição</InputLabel>
          <Select
            labelId="payment-condition-label"
            id="payment-condition-select"
            value={paymentCondition}
            label="Condição"
            onChange={handleChange}
            className={styles.select}
          >
            {paymentConditionsOptions.map((item, key) => (
              <MenuItem key={key} value={item.value}>
                {item.condition}
              </MenuItem>
            ))}
          </Select>
        </div>
        <Select
          labelId="times-condition-label"
          id="times-condition-select"
          value={paymentConditionTimes}
          onChange={handleChangeTimes}
        >
          {paymentConditionsTimes.map((item, key) => (
            <MenuItem key={key} value={item}>
              {handleChangeCondition(item)}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};
