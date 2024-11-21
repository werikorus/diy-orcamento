import { TextField, FormControl, Button } from "@mui/material";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import styles from "./Services.module.css";
import { useState } from "react";
import { useMainDataContext, useDataForm } from "@/Hooks";

export const ServicesForm = () => {
  const [items, setItems] = useState<JSX.Element[]>([]);
  const { servicesValues } = useMainDataContext();
  const { onSubmbitForm } = useDataForm();

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

  const handleInitialItems = () => {
    if (servicesValues.length > 0) {
      return servicesValues.map((service, index) => (
        <li
          key={`service-item-${index}`}
          className={`service-item ${styles.serviceItem}`}
        >
          <TextField
            id="quantity-service"
            className={styles.textQuantity}
            variant="outlined"
            type="number"
            placeholder="0"
            value={service.quantity}
            onChange={() => onSubmbitForm(3)}
          />
          <TextField
            id="description-service"
            className={styles.textField}
            label="Descrição"
            variant="outlined"
            type="text"
            value={service.description}
            onChange={() => onSubmbitForm(3)}
          />
          <TextField
            id="price-service"
            className={styles.textCurrency}
            label="R$"
            variant="outlined"
            placeholder="R$"
            type="number"
            value={service.price}
            onChange={() => onSubmbitForm(3)}
          />
        </li>
      ));
    }

    return (
      <li id="service-item" className={`service-item ${styles.serviceItem}`}>
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
          label="Descrição"
          variant="outlined"
          type="text"
        />
        <TextField
          id="price-service"
          className={styles.textCurrency}
          label="R$"
          variant="outlined"
          placeholder="R$"
          type="number"
        />
      </li>
    );
  };

  return (
    <div className={styles.formContainer}>
      <h2>Serviços</h2>
      <form noValidate autoComplete="off">
        <FormControl className={styles.formControl}>
          <ul className={styles.lisControl}>
            {handleInitialItems()}
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
