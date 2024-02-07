export interface OffersModel {
  id: string;
  active: boolean;
  description: string;
  productsSku: string[];
}

export interface ProductModel {
  id: string;
  offersId: string[]
}