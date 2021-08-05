import Requester from '../../requester';
import { ErrorResponse } from '../../types/ErrorResponse';
import RequestVariant from '../../types/RequestVariant';
import SyncProduct from '../../types/SyncProduct';
import createProduct, { CreateProductResponse } from './createProduct';
import listProducts, {
  ListProductsParams,
  ListProductsResponse
} from './listProducts';

export default class Products {
  private requester!: Requester;
  constructor(requester: Requester) {
    this.requester = requester;
  }
  /**
   * @remarks
   * Get a list of sync products.
   *
   * @param params - The input parameters
   *
   * @example
   * const { result } = await printful.Products.listProducts({ status: 'synced' });
   * console.log(result[0]); // Log the first synced 'backpack' product!
   *
   * @see
   * https://www.printful.com/docs/products#listProducts
   */
  async listProducts(
    params: ListProductsParams
  ): Promise<ListProductsResponse | ErrorResponse> {
    return await listProducts(this.requester, {
      status: params.status,
      search: params.search,
      limit: params.limit,
      offset: params.offset
    });
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
