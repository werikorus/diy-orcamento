import { TpaymentConditions } from "@/Types";

export const DEFAULT_VALUE = {
  contactValues: {
    cpfCnpj: 0,
    inscricaoEstadual: 0,
    razaoSocial: "",
    nomeFantazia: "",
    telefone: 0,
    cep: 0,
    email: "",
    endereco: "",
    complemento: "",
    cidade: "",
    estado: "",
  },
  productsValues: [
    {
      description: "",
      quantity: 0,
      price: 0.0,
    },
  ],
  servicesValues: [
    {
      description: "",
      quantity: 0,
      price: 0.0,
    },
  ],
  currentSlideIndex: 0,
  setContactValues: () => {},
  setProductsValues: () => {},
  setServicesValues: () => {},
  setCurrentSlideIndex: () => {},
};

export const paymentConditionsOptions: TpaymentConditions[] = [
  {
    condition: "Pix",
    value: 1,
  },
  {
    condition: "Dinheiro",
    value: 2,
  },
  {
    condition: "Cartão de crédito",
    value: 3,
  },
  {
    condition: "Cheque",
    value: 4,
  },
  {
    condition: "Permuta",
    value: 5,
  },
];

export const paymentConditionsTurns: number[] = Array.from(
  { length: 10 },
  (_, i) => i + 1
);
