import { Contact } from "@/Types";
import { getValue } from "@/Helpers";

export const useDataForm = () => {
  const onSubmitContactForm = () => {
    const contactData: Contact = {
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

    console.log('ContactData: ', contactData);
  }

  const onSubmitProductsForm = () => {
    
  }

  const onSubmitSlideForm = (activeIndex: number) => {
    switch (activeIndex) {
      case 0: onSubmitContactForm();
        break;

      default:
        break;
    }
  };

  return { onSubmitSlideForm };
};