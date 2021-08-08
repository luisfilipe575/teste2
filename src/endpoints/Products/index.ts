import modifySyncVariant, {
  ModifySyncVariantResponse
} from './modifySyncVariant';
import Requester from '../../requester';
import { ErrorResponse } from '../../types/ErrorResponse';
import PutRequestProductBody from '../../types/PutRequestProductBody';
import PutRequestVariant from '../../types/PutRequestVariant';
import RequestVariant from '../../types/RequestVariant';
import SyncProduct from '../../types/SyncProduct';
import createSyncProduct, {
  CreateSyncProductResponse
} from './createSyncProduct';
import createSyncVariant, {
  CreateSyncVariantResponse
} from './createSyncVariant';
import deleteSyncProduct, {
  DeleteSyncProductResponse
} from './deleteSyncProduct';
import deleteSyncVariant, {
  DeleteSyncVariantResponse
} from './deleteSyncVariant';
import getSingleSyncProductAndSyncVariants, {
  GetSingleSyncProductAndSyncVariantsResponse
} from './getSingleSyncProductAndSyncVariants';
import getSingleSyncVariant from './getSingleSyncVariant';
import listSyncProducts, {
  ListSyncProductsParams,
  ListSyncProductsResponse
} from './listSyncProducts';
import modifySyncProduct, {
  ModifySyncProductResponse
} from './modifySyncProduct';

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
   * const { result } = await printful.Products.listSyncProducts({ status: 'synced' });
   * console.log(result[0]); // Log the first synced 'backpack' product!
   *
   * @see
   * https://www.printful.com/docs/products#listProducts
   */
  async listSyncProducts(
    params?: ListSyncProductsParams
  ): Promise<ListSyncProductsResponse | ErrorResponse> {
    return await listSyncProducts(this.requester, params);
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
   * @see
   * https://www.printful.com/docs/products#actionCreateProduct
   */
  async createSyncProduct(
    sync_product: SyncProduct,
    sync_variants: RequestVariant[]
  ): Promise<CreateSyncProductResponse | ErrorResponse> {
    return await createSyncProduct(this.requester, sync_product, sync_variants);
  }
  /**
   * @remarks
   * Returns information about an existing Sync Product together with a list of its Sync Variants.
   *
   * @param id - Sync Product ID (integer) or External ID (if prefixed with @)
   *
   * @see
   * https://www.printful.com/docs/products#getSingleSyncProduct
   */
  async getSingleSyncProduct(
    id: number | string
  ): Promise<GetSingleSyncProductAndSyncVariantsResponse | ErrorResponse> {
    return await getSingleSyncProductAndSyncVariants(this.requester, id);
  }
  /**
   * @remarks
   * Get a list of sync products.
   *
   * @param id - Sync Product ID (integer) or External ID (if prefixed with @)
   *
   * @example
   * const { result } = await printful.Products.deleteSyncProduct(123456);
   * console.log(result.product); // Log the deleted product.
   *
   * @see
   * https://www.printful.com/docs/products#actionDeleteProduct
   */
  async deleteSyncProduct(
    id: number | string
  ): Promise<DeleteSyncProductResponse | ErrorResponse> {
    return await deleteSyncProduct(this.requester, id);
  }
  /**
   * @remarks
   * Get a list of sync products.
   *
   * @param id - Sync Product ID (integer) or External ID (if prefixed with @)
   * @param params - PUT request body
   *
   * @see
   * https://www.printful.com/docs/products#actionUpdateProduct
   */
  async modifySyncProduct(
    id: number | string,
    params?: PutRequestProductBody
  ): Promise<ModifySyncProductResponse | ErrorResponse> {
    return await modifySyncProduct(this.requester, id, params);
  }
  /**
   * @remarks
   * Up to 10 requests per 60 seconds.
   * Important: Jewlery products not available with this function.
   *
   * @param id - Sync Product ID (integer) or External ID (if prefixed with @)
   * @param requestVariant - POST request body
   *
   * @see
   * https://www.printful.com/docs/products#actionCreateVariant
   */
  async createSyncVariant(
    id: number | string,
    requestVariant: RequestVariant
  ): Promise<CreateSyncVariantResponse | ErrorResponse> {
    return await createSyncVariant(this.requester, id, requestVariant);
  }
  /**
   * @remarks
   * Returns information about an existing Sync Variant.
   *
   * @param id - Sync Variant ID (integer) or External ID (if prefixed with @)
   *
   * @see
   * https://www.printful.com/docs/products#getSingleSyncVariant
   */
  async getSingleSyncVariant(
    id: number | string
  ): Promise<GetSingleSyncProductAndSyncVariantsResponse | ErrorResponse> {
    return await getSingleSyncVariant(this.requester, id);
  }
  /**
   * @remarks
   * Deletes a single Sync Variant.
   *
   * @param id - Sync Variant ID (integer) or External ID (if prefixed with @)
   *
   * @see
   * https://www.printful.com/docs/products#actionDeleteVariant
   */
  async deleteSyncVariant(
    id: number | string
  ): Promise<DeleteSyncVariantResponse | ErrorResponse> {
    return await deleteSyncVariant(this.requester, id);
  }
  /**
   * @remarks
   * Modifies an existing Sync Variant.
   * Please note that in the request body you only need to specify the fields that need to be changed. See examples for more insights.
   * Up to 10 requests per 60 seconds.
   * Important: Jewlery products not available with this function.
   *
   * @param id - Sync Variant ID (integer) or External ID (if prefixed with @)
   * @param params - PUT request body
   *
   * @see
   * https://www.printful.com/docs/products#actionUpdateVariant
   */
  async modifySyncVariant(
    id: number | string,
    params?: PutRequestVariant
  ): Promise<ModifySyncVariantResponse | ErrorResponse> {
    return await modifySyncVariant(this.requester, id, params);
  }
}
