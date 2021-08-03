import Product from './Product';
import Variant from './Variant';

/**
 * @remarks
 * The ProductInfo type used by the Printful API.
 */
export default interface ProductInfo {
  /**
   * @remarks
   * Information about the selected product
   */
  product: Product[];
  /**
   * @remarks
   * Array of Variants available for the selected product
   */
  variants: Variant[];
}
