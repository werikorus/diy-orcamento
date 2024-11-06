import { getValue } from "@/Helpers";
import { useMainDataContext } from "../useDataContext";

export const useDataForm = () => {
  const { contactValues, setContactValues } = useMainDataContext();
   
  const onSubmitContactForm = () => {
    setContactValues({
      ...contactValues,
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
    });
  }

  const onSubmitProductsForm = () => {
    console.log('PRODUCTS FORM')
  }

  const onSubmitServicosForm = () => {
    console.log("SERVICOS FORM");
  };

  const onSubmitCondicoesPagamentoForm = () => {
    console.log("CONDIÇÕES PAGAMENTO FORM");
  };

  const onSubmitSlideForm = (activeIndex: number) => {
    switch (activeIndex) {
      case 0:
        onSubmitContactForm();
        break;

      case 1:
        onSubmitProductsForm();
        break;

      case 2:
        onSubmitServicosForm();
        break;

      case 3:
        onSubmitCondicoesPagamentoForm();
        break;

      default:
        break;
    }
  };

  return { onSubmitSlideForm };
};