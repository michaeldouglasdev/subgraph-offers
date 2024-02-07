import { OffersModel } from "./models";

const OFFERS: OffersModel[] = [
  {
    id: 'offers-1',
    active: true,
    description: 'description-1',
    productsSku: ['product-1', 'product-3'],
    createdByMD: true
  },
  {
    id: 'offers-2',
    active: true,
    description: 'description-2',
    productsSku: ['product-3'],
    createdByMD: false
  },
  {
    id: 'offers-3',
    active: true,
    description: 'description-3',
    productsSku: ['product-1', 'product-2', 'product-3'],
    createdByMD: false
  },
]

export class OffersService {

  list(): OffersModel[] {
    return OFFERS;
  }

  listBySku(sku: string): OffersModel[] {
    return OFFERS.filter(offer => offer.productsSku.find(productSku => productSku === sku)!)!;
  }
}