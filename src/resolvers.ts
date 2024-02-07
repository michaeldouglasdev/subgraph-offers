import { OffersService } from "./services";
import { Resolvers } from "./types";

const offersService = new OffersService();

export const resolvers: Resolvers = {
  Query: {
    offers: () => {
      return offersService.list();
    }
  },
  Product: {
    offers: ({ sku }) => {
      return offersService.listBySku(sku);
    }
  }
}