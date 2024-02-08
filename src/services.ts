import { OfferModel } from "./models";

const OFFERS: OfferModel[] = [
  {
    id: 'offers-1',
    active: true,
    description: 'description-1',
    productsSku: ['product-1', 'product-3'],
    createdByMD: true,
    price: {
      value: 10,
      label: '10 offers'
    }
  },
  {
    id: 'offers-2',
    active: true,
    description: 'description-2',
    productsSku: ['product-3'],
    createdByMD: false,
    price: {
      value: 20,
      label: '20 offers'
    }
  },
  {
    id: 'offers-3',
    active: true,
    description: 'description-3',
    productsSku: ['product-1', 'product-2', 'product-3'],
    createdByMD: false,
    price: {
      value: 30,
      label: '30 offers'
    }
  },
]

export class OffersService {

  list(): OfferModel[] {
    return OFFERS;
  }

  listBySku(sku: string): OfferModel[] {
    return OFFERS.filter(offer => offer.productsSku.find(productSku => productSku === sku)!)!;
  }
}