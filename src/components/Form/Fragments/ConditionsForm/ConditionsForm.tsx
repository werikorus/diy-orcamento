import React, { useEffect, useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import styles from "./ConditionsForm.module.css";
import { paymentConditionsOptions, paymentConditionsTimes } from "@/Constants";

export const ConditionsForm = () => {
  const [paymentCondition, setPaymentCondition] = useState(1);
  const [paymentConditionTimes, setPaymentConditionTimes] = useState("");

  const priceProducts: number = 1403;
  const priceServices: number = 1232;

  const price: number = priceProducts + priceServices;

  const handleChange = (event: SelectChangeEvent) => {
    setPaymentCondition(parseInt(event.target.value));
  };

  const handleChangeTimes = (event: SelectChangeEvent) => {
    setPaymentConditionTimes(event.target.value);
  };

  const handleChangeCondition = (item: number) => {
    return item === 1 ? `${item}x ${price / 1}` : `${item}x ${price / item}`;
  };

  useEffect(() => {
    if ([1, 4].includes(paymentCondition)) {
      setPaymentConditionTimes("1");
    }
    console.log("WERIK - CONDITION: ", paymentCondition);
  }, [paymentCondition, paymentConditionTimes]);

  return (
    <section className={styles.formContainer}>
      <h2>Condições de pagamento</h2>

      <div>
        <h5>
          <InputLabel>
            Produtos:
            <strong> R$ {priceProducts}</strong>
          </InputLabel>
        </h5>
        <h5>
          <InputLabel>
            Serviços:
            <strong> R$ {priceServices}</strong>
          </InputLabel>
        </h5>
      </div>

      <h1>Total: R$ {price}</h1>
      <form className={styles.selectContainer}>
        <FormControl>
          <InputLabel id="payment-condition-label">Condição</InputLabel>
          <Select
            labelId="payment-condition-label"
            id="payment-condition-select"
            value={paymentCondition.toString()}
            label="Condição"
            onChange={handleChange}
            className={styles.selectConditions}
          >
            {paymentConditionsOptions.map((item, key) => (
              <MenuItem key={key} value={item.value}>
                {item.condition}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl>
          <Select
            labelId="times-condition-label"
            id="times-condition-select"
            value={paymentConditionTimes}
            onChange={handleChangeTimes}
            className={styles.selectTimes}
            disabled={[1, 4].includes(paymentCondition)}
          >
            {paymentConditionsTimes.map((item, key) => (
              <MenuItem key={key} value={item}>
                {handleChangeCondition(item)}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </form>
    </section>
  );
};
