import { TContact, TProduct, TService } from "@/Types";
export interface IPropsDataContext {
  contactValues: TContact;
  productsValues: TProduct[];
  servicesValues: TService[];
  currentSlideIndex: number;
  setContactValues: React.Dispatch<React.SetStateAction<TContact>>;
  setProductsValues: React.Dispatch<React.SetStateAction<TProduct[]>>;
  setServicesValues: React.Dispatch<React.SetStateAction<TProduct[]>>;
  setCurrentSlideIndex: React.Dispatch<React.SetStateAction<number>>;
}
