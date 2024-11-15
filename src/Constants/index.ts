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
