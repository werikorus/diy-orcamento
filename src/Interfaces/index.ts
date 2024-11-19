import { Dispatch, SetStateAction } from "react";

import { TclosingOrderValues, TContact, TProduct, TService } from "@/Types";

export interface IPropsDataContext {
  contactValues: TContact;
  productsValues: TProduct[];
  servicesValues: TService[];
  closingOrderValues: TclosingOrderValues;
  currentSlideIndex: number;
  setContactValues: Dispatch<SetStateAction<TContact>>;
  setProductsValues: Dispatch<SetStateAction<TProduct[]>>;
  setServicesValues: Dispatch<SetStateAction<TProduct[]>>;
  setCurrentSlideIndex: Dispatch<SetStateAction<number>>;
  setClosingOrderValues: Dispatch<SetStateAction<TclosingOrderValues>>;
}
