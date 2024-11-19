import { TContact } from "@/Types";
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

export type TFooterProps = {
  nextSlide: () => void;
  prevSlide: () => void;
};

export type TFormProps = {
  type: number;
};

export type TpaymentConditions = {
  condition: string;
  value: number;
};

export type TclosingOrderValues = {
  totalProducts: number;
  totalServices: number;
  totalOrder: number;
  paymentCondition: string;
  paymentTurns: number;
};
