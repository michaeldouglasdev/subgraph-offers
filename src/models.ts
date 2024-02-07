export interface OffersModel {
  id: string;
  active: boolean;
  description: string;
  productsSku: string[];
  createdByMD: boolean;
}

export interface ProductModel {
  id: string;
  offersId: string[]
}