export interface OfferModel {
  id: string;
  active: boolean;
  description: string;
  productsSku: string[];
  createdByMD: boolean;
  price: OffersPriceModel;
}

export interface ProductModel {
  id: string;
  offersId: string[]
}

export interface OffersPriceModel {
  value: number;
  label: string;
}