import Requester from '../../requester';
import { ErrorResponse } from '../../types/ErrorResponse';
import listProducts, { ListProductsResponse } from './listProducts';

export default class Products {
  private requester!: Requester;
  constructor(requester: Requester) {
    this.requester = requester;
  }
  /**
   * @remarks
   * Get a list of sync products.
   *
   * @param status - Filter by item status (`synced/unsynced/all`). If only some of the variants are synced,the product is returned by both unsynced and synced filters
   * @param search - Product search needle
   * @param offset - Result set offset
   * @param limit - Number of items per page (max 100)
   *
   * @example
   * const { result } = await printful.Products.listProducts('synced', 'backpack', 0, 100);
   * console.log(result[0]); // Log the first synced 'backpack' product!
   *
   * @see
   * https://www.printful.com/docs/products#listProducts
   */
  async listProducts(
    status: string,
    search: string,
    offset: number,
    limit: number
  ): Promise<ListProductsResponse | ErrorResponse> {
    return await listProducts(this.requester, status, search, offset, limit);
  }
}
