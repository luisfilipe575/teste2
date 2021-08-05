/**
 * @remarks
 * The ProductVariant type used by the Printful API.
 */
export default interface ProductVariant {
  /**
   * @remarks
   * Variant ID
   */
  variant_id: number;
  /**
   * @remarks
   * Product ID of this variant
   */
  product_id: number;
  /**
   * @remarks
   * URL of a sample image for this variant
   */
  image: string;
  /**
   * @remarks
   * Display name of this variant
   */
  name: string;
}
