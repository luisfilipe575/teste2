import Product from './Product';
import Variant from './Variant';

/**
 * @remarks
 * The VariantInfo type used by the Printful API.
 */
export default interface VariantInfo {
  /**
   * @remarks
   * Information about the selected Variant
   */
  variant: Variant;
  /**
   * @remarks
   * Information about the Product that the Variant belongs to
   */
  product: Product;
}
