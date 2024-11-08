import { useMainDataContext } from "../useDataContext";
import { TContact, TProductsToOrder } from "@/Types";

export const useDataForm = () => {
  const { 
    contactValues, 
    setContactValues, 
    productsValues,
    setProductsValues 
  } = useMainDataContext();
   
  const onSubmitContactForm = (newContactValues: TContact) => {
    setContactValues({
      ...contactValues,
      ...newContactValues,
    });
  };

  const onSubmitProductsForm = (products: TProductsToOrder) => {
    setProductsValues([...productsValues, ...products]);
  };

  return { onSubmitContactForm, onSubmitProductsForm };
};