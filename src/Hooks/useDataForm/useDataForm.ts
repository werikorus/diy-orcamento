import { getContatValues, getProductValues } from "@/Utils";
import { useMainDataContext } from "../useDataContext";

export const useDataForm = () => {
  const { setContactValues, setProductsValues } = useMainDataContext();

  const onSubmitContactForm = () => {
    const newContactValues = getContatValues();

    setContactValues({
      ...newContactValues,
    });
  };

  const onSubmitProductsForm = () => {
    const newProducts = getProductValues();

    if (newProducts.length > 0) {
      setProductsValues(newProducts);
    }
  };

  const onSubmitServicosForm = () => {
    console.log("WERIK - CHAMOU OS SERVICOS");
    //setProductsValues([...productsValues, ...products]);
  };

  const onSubmitCondicoesPagamentoForm = () => {
    console.log("WERIK - CHAMOU OS CONDIÇÕES DE PAGAMENTO");
    //setProductsValues([...productsValues, ...products]);
  };

  const onSubmbitForm = (activeIndex: number) => {
    switch (activeIndex) {
      case 1:
        onSubmitContactForm();
        break;

      case 2:
        onSubmitProductsForm();
        break;

      case 3:
        onSubmitServicosForm();
        break;

      case 4:
        onSubmitCondicoesPagamentoForm();
        break;

      default:
        break;
    }
  };

  return { onSubmbitForm };
};
