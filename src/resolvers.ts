import { OffersService } from "./services";
import { Resolvers } from "./types";

const offersService = new OffersService();

export const resolvers: Resolvers = {
  Query: {
    offers: async () => {
      return await offersService.list();
    }
  },
  Product: {
    offers: async ({ sku }) => {
      return await offersService.listBySku(sku);
    }
  }
}