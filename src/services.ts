import { Datasource } from "./datasource";
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

  async list(): Promise<OfferModel[]> {
    const offers = await new Datasource().get<OfferModel[]>('/offers');
    return offers;
  }

  async listBySku(sku: string): Promise<OfferModel[]> {
    const offers = await new Datasource().get<OfferModel[]>('/offers');

    return offers.filter(offer => offer.productsSku.find(productSku => productSku === sku)!)!;
  }
}