import { useState } from "react";
import { TextField, FormControl, Button } from "@mui/material";
import styles from "./ProdutosForm.module.css";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

export const ProdutosForm = () => {
  const [items, setItems] = useState<JSX.Element[]>([]);

  const createProductItem = (
    addItem: (item: JSX.Element, index: number) => void,
    index: number
  ) => {
    const item = (
      <li key={index} className={styles.productItem}>
        <TextField
          className={styles.textQuantity}
          variant="outlined"
          type="number"
          placeholder="0"
        />
        <TextField
          className={styles.textField}
          label="Descrição"
          variant="outlined"
        />
        <TextField
          className={styles.textCurrency}
          label="Valor R$"
          variant="outlined"
          placeholder="R$"
          type="text"
        />
        <Button size="small" onClick={() => handleDelete(index)}>
          <DeleteOutlineIcon fontSize="large" />
        </Button>
      </li>
    );

    addItem(item, index);
  };

  const addProductItem = () => {
    const newIndex = items.length;
    createProductItem(
      (item) => setItems((prevItems) => [...prevItems, item]),
      newIndex
    );
  };

  const handleDelete = (index: number) => {
    setItems((prevItems) => prevItems.filter((_, i) => i !== index));
  };

  return (
    <div className={styles.formContainer}>
      <h1>Produtos</h1>
      <FormControl className={styles.formControl}>
        <ul id="product-list" className={styles.listControl}>
          <li className={styles.productItem}>
            <TextField
              className={styles.textQuantity}
              variant="outlined"
              type="number"
              placeholder="0"
            />
            <TextField
              className={styles.textField}
              label="Descrição"
              variant="outlined"
            />
            <TextField
              className={styles.textCurrency}
              label="Valor R$"
              variant="outlined"
              placeholder="R$"
              type="currency"
            />
          </li>
          {items}
        </ul>
      </FormControl>

      <Button
        size="small"
        onClick={addProductItem}
        disabled={items.length >= 2}
      >
        <PlaylistAddIcon fontSize="large" />
      </Button>
    </div>
  );
};
