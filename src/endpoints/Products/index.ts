import Requester from '../../requester';
import { ErrorResponse } from '../../types/ErrorResponse';
import RequestVariant from '../../types/RequestVariant';
import SyncProduct from '../../types/SyncProduct';
import createProduct, { CreateProductResponse } from './createProduct';
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
   * const { result } = await printful.Products.listProducts('synced');
   * console.log(result[0]); // Log the first synced 'backpack' product!
   *
   * @see
   * https://www.printful.com/docs/products#listProducts
   */
  async listProducts(
    status?: string,
    search?: string,
    offset?: number,
    limit?: number
  ): Promise<ListProductsResponse | ErrorResponse> {
    return await listProducts(this.requester, status, search, offset, limit);
  }
  /**
   * @remarks
   * Creates a new Sync Product together with its Sync Variants.
   * Up to 10 requests per 60 seconds.
   * Important: Jewlery products not available with this function.
   *
   * @param sync_product - Information about the Sync Product
   * @param sync_variants - Information about the Sync Variants
   *
   * @example
   * No example available. To contribute, please visit https://github.com/ryanhaticus/printful-js - thanks!
   *
   * @see
   * https://www.printful.com/docs/products#actionCreateProduct
   */
  async createProduct(
    sync_product: SyncProduct,
    sync_variants: RequestVariant[]
  ): Promise<CreateProductResponse | ErrorResponse> {
    return await createProduct(this.requester, sync_product, sync_variants);
  }
}
