import { getContatValues, getProductValues, getServiceValues } from "@/Utils";
import { useMainDataContext } from "../useDataContext";

export const useDataForm = () => {
  const { setContactValues, setProductsValues, setServicesValues } =
    useMainDataContext();

  const onSubmitContactForm = () => {
    const newContactValues = getContatValues();

    setContactValues((prev) => ({
      ...prev,
      ...newContactValues,
    }));
  };

  const onSubmitProductsForm = () => {
    const newProducts = getProductValues();

    if (newProducts.length > 0) {
      setProductsValues(newProducts);
    }
  };

  const onSubmitServicesForm = () => {
    const newServices = getServiceValues();

    if (newServices.length > 0) {
      setServicesValues(newServices);
    }
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
        onSubmitServicesForm();
        break;

      default:
        break;
    }
  };

  return {
    onSubmbitForm,
  };
};
