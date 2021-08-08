/**
 * @remarks
 * The ProductMiniInfo type used by the Printful API.
 */
export default interface ProductMiniInfo {
  /**
   * @remarks
   * Printful Variant ID that this Sync Variant is synced to
   */
  variant_id?: number;
  /**
   * @remarks
   * Printful Product ID that this Variant Id belongs to
   */
  product_id?: number;
  /**
   * @remarks
   * Variants default image in Printfuls Catalog
   */
  image?: string;
  /**
   * @remarks
   * Variants full name in Printfuls Catalog
   */
  name?: string;
}
