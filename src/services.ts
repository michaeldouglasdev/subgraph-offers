import { OffersModel } from "./models";

const OFFERS: OffersModel[] = [
  {
    id: 'offers-1',
    active: true,
    description: 'description-1'
  },
  {
    id: 'offers-2',
    active: true,
    description: 'description-2'
  },
  {
    id: 'offers-3',
    active: true,
    description: 'description-3'
  },
]

export class OffersService {

  list(): OffersModel[] {
    return OFFERS;
  }
}