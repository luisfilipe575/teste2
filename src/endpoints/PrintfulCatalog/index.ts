import Requester, { RequesterMethod } from '../../requester';
import { ErrorResponse } from '../../types/ErrorResponse';
import { ProductsResponse } from './products';

export default class PrintfulCatalog {
  private requester!: Requester;
  constructor(requester: Requester) {
    this.requester = requester;
  }
  /**
   * @returns
   * Returns list of Products available in the Printful.
   *
   * @example
   * const products = await printful.PrintfulCatalog.products();
   * console.log(products[0]); // Log the first product!
   */
  async products(): Promise<ProductsResponse | ErrorResponse> {
    return await this.requester.request('products', RequesterMethod.GET, null);
  }
}
