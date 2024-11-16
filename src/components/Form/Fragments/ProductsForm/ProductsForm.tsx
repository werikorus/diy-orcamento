import { useState } from "react";
import { TextField, FormControl, Button } from "@mui/material";
import styles from "./ProductsForm.module.css";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

export const ProductsForm = () => {
  const [items, setItems] = useState<JSX.Element[]>([]);

  const createProductItem = (
    addItem: (item: JSX.Element, index: number) => void,
    index: number
  ) => {
    const item = (
      <li
        key={index}
        id="product-item"
        className={`product-item ${styles.productItem}`}
      >
        <TextField
          id="quantity-product"
          className={styles.textQuantity}
          variant="outlined"
          type="number"
          placeholder="0"
        />
        <TextField
          id="description-product"
          className={styles.textField}
          label="Descrição"
          variant="outlined"
          type="text"
        />
        <TextField
          id="price-product"
          className={styles.textCurrency}
          label="R$"
          variant="outlined"
          placeholder="R$"
          type="number"
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
      <form noValidate autoComplete="off">
        <FormControl className={styles.formControl} required>
          <ul className={styles.listControl}>
            <li
              id="product-item"
              className={`product-item ${styles.productItem}`}
            >
              <TextField
                id="quantity-product"
                className={styles.textQuantity}
                variant="outlined"
                type="number"
                placeholder="0"
              />
              <TextField
                id="description-product"
                className={styles.textField}
                label="Descrição"
                variant="outlined"
                type="text"
              />
              <TextField
                id="price-product"
                className={styles.textCurrency}
                label="R$"
                variant="outlined"
                placeholder="R$"
                type="number"
              />
            </li>
            {items}
          </ul>
        </FormControl>
      </form>

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
