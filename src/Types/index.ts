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

export type FooterProps = {
  nextSlide: () => void;
  prevSlide: () => void;
};

export type FormProps = {
  type: number;
};
