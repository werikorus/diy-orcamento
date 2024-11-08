import { TContact, TProduct } from "@/Types";
export interface IPropsDataContext {
  contactValues: TContact;
  productsValues: TProduct[];
  setContactValues: React.Dispatch<React.SetStateAction<TContact>>;
  setProductsValues: React.Dispatch<React.SetStateAction<TProduct[]>>;
}
