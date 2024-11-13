import { getValue } from "@/Helpers";
import { useMainDataContext } from "../useDataContext";

export const useDataForm = () => {
  const { contactValues, setContactValues } = useMainDataContext();

  const onSubmitContactForm = () => {
    const newContactValues = {
      cpfCnpj: parseInt(getValue("cnpj-cpf")),
      inscricaoEstadual: parseInt(getValue("state-subscription")),
      razaoSocial: getValue("social-reazon"),
      nomeFantazia: getValue("fantazy-name"),
      telefone: parseInt(getValue("phone")),
      cep: parseInt(getValue("codepost")),
      email: getValue("email"),
      endereco: getValue("address"),
      complemento: getValue("complement"),
      cidade: getValue("city"),
      estado: getValue("state"),
    };

    setContactValues({
      ...contactValues,
      ...newContactValues,
    });
  };

  const onSubmitProductsForm = () => {
    const products: HTMLElement[] = Array.from(
      document.getElementsByClassName("product-item")
    ) as HTMLElement[];

    console.log("WERIK - COLECTION? ", products);

    products.map((item, key) => {
      const quantity = parseInt(getValue("quantity-product"));
      const description = getValue("description-product");
      const price = parseInt(getValue("price-product"));

      console.log("WERIK - ITEM: ", item);
      console.log("WERIK - KEY: ", key);
      console.log("WERIK - QUANTIDADE: ", quantity);
      console.log("WERIK - DESCRIÇÃO: ", description);
      console.log("WERIK - PREÇO: ", price);
    });

    //setProductsValues([...productsValues, ...products]);
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
