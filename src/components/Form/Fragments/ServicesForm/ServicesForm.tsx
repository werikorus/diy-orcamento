import { TextField, FormControl, Button } from "@mui/material";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

import styles from "./Services.module.css";
import { useState } from "react";

export const ServicesForm = () => {
  const [items, setItems] = useState<JSX.Element[]>([]);

  const createServiceItem = (
    addItem: (item: JSX.Element, index: number) => void,
    index: number
  ) => {
    const item = (
      <li
        key={index}
        id="service-item"
        className={`service-item ${styles.serviceItem}`}
      >
        <TextField
          id="quantity-service"
          className={styles.textQuantity}
          variant="outlined"
          type="number"
          placeholder="0"
        />
        <TextField
          id="description-service"
          className={styles.textField}
          label="Descrição serviço"
          variant="outlined"
        />
        <TextField
          id="price-service"
          className={styles.textCurrency}
          placeholder="0"
          label="R$"
          variant="outlined"
          type="number"
        />
        <Button size="small" onClick={() => handleDelete(index)}>
          <DeleteOutlineIcon fontSize="large" />
        </Button>
      </li>
    );

    addItem(item, index);
  };

  const addServiceItem = () => {
    const newIndex = items.length;
    createServiceItem(
      (item) => setItems((prevItems) => [...prevItems, item]),
      newIndex
    );
  };

  const handleDelete = (index: number) => {
    setItems((prevItems) => prevItems.filter((_, i) => i !== index));
  };

  return (
    <div className={styles.formContainer}>
      <h1>Serviços</h1>
      <form noValidate autoComplete="off">
        <FormControl className={styles.formControl}>
          <ul className={styles.lisControl}>
            <li
              id="service-item"
              className={`service-item ${styles.serviceItem}`}
            >
              <TextField
                id="quantity-service"
                className={styles.textQuantity}
                variant="outlined"
                type="number"
                placeholder="0"
              />
              <TextField
                id="description-service"
                className={styles.textField}
                label="Descrição serviço"
                variant="outlined"
              />
              <TextField
                id="price-service"
                className={styles.textCurrency}
                placeholder="0"
                label="R$"
                variant="outlined"
                type="number"
              />
            </li>
            {items}
          </ul>
        </FormControl>
      </form>
      <Button
        size="small"
        onClick={addServiceItem}
        disabled={items.length >= 2}
      >
        <PlaylistAddIcon fontSize="large" />
      </Button>
    </div>
  );
};
