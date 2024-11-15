export type TContact = {
  cpfCnpj: number;
  inscricaoEstadual: number;
  razaoSocial: string;
  nomeFantazia: string;
  telefone: number;
  cep: number;
  email: string;
  endereco: string;
  complemento: string;
  cidade: string;
  estado: string;
};

export type TProduct = {
  description: string;
  quantity: number;
  price: number;
};

export type TService = {
  description: string;
  quantity: number;
  price: number;
};

export type TProductsToOrder = TProduct[];
export type TServicesToOrder = TService[];

export type TFooterProps = {
  nextSlide: () => void;
  prevSlide: () => void;
};

export type TFormProps = {
  type: number;
};
