import { TContact } from "@/Types";

export interface IPropsDataContext {
  contactValues: TContact;
  setContactValues: React.Dispatch<React.SetStateAction<TContact>>;
}
