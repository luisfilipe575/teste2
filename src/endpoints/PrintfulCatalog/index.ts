import productsVariantList, {
  ProductsVariantListResponse
} from './productsVariantList';
import productsVariant, { ProductsVariantResponse } from './productsVariant';
import Requester from '../../requester';
import { ErrorResponse } from '../../types/ErrorResponse';
import products, { ProductsResponse } from './products';

export default class PrintfulCatalog {
  private requester!: Requester;
  constructor(requester: Requester) {
    this.requester = requester;
  }
  /**
   * @returns
   * Returns list of Products available in Printful.
   *
   * @example
   * const { result } = await printful.PrintfulCatalog.products();
   * console.log(result[0]); // Log the first product!
   *
   * @see
   * https://www.printful.com/docs/catalog#actionIndex
   */
  async products(): Promise<ProductsResponse | ErrorResponse> {
    return await products(this.requester);
  }
  /**
   * @returns
   * Returns information about a specific Variant and its Product
   *
   * @param variantId - Variant ID
   *
   * @example
   * const { result } = await printful.PrintfulCatalog.productsVariant(123456);
   * console.log(result); // Log the variant!
   *
   * @see
   * https://www.printful.com/docs/catalog#actionVariant
   */
  async productsVariant(
    variantId: number
  ): Promise<ProductsVariantResponse | ErrorResponse> {
    return await productsVariant(this.requester, variantId);
  }
  /**
   * @returns
   * Returns information about a specific product and a list of variants for this product.
   *
   * @param productId - Product ID
   *
   * @example
   * const { result } = await printful.PrintfulCatalog.productsVariantList(123456);
   * console.log(result.product, result.variants); // Log the product and its variants.\
   *
   * @see
   * https://www.printful.com/docs/catalog#actionGet
   */
  async productsVariantList(
    productId: number
  ): Promise<ProductsVariantListResponse | ErrorResponse> {
    return await productsVariantList(this.requester, productId);
  }
}
