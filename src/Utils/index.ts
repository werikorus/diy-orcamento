import { getValue } from "@/Helpers";

export const getContatValues = () => {
  return {
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
};

export const getProductValues = () => {
  const listProducts: HTMLElement[] = Array.from(
    document.getElementsByClassName("product-item")
  ) as HTMLElement[];

  return listProducts.map((item) => ({
    quantity: parseInt(
      (item.querySelector("#quantity-product") as HTMLInputElement).value || "0"
    ),
    description:
      (item.querySelector("#description-product") as HTMLInputElement).value ||
      "",
    price: parseInt(
      (item.querySelector("#price-product") as HTMLInputElement).value || "0"
    ),
  }));
};

export const getServiceValues = () => {
  const listServices: HTMLElement[] = Array.from(
    document.getElementsByClassName("service-item")
  ) as HTMLElement[];

  return listServices.map((item) => ({
    quantity: parseInt(
      (item.querySelector("#quantity-service") as HTMLInputElement).value || "0"
    ),
    description:
      (item.querySelector("#description-service") as HTMLInputElement).value ||
      "",
    price: parseInt(
      (item.querySelector("#price-service") as HTMLInputElement).value || "0"
    ),
  }));
};
