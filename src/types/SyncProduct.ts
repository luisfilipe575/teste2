/**
 * @remarks
 * The SyncProduct type used by the Printful API.
 */
export default interface SyncProduct {
  /**
   * @remarks
   * Sync Product ID
   */
  id?: string;
  /**
   * @remarks
   * Product ID from the Ecommerce platform
   */
  external_id?: string;
  /**
   * @remarks
   * Product name
   */
  name?: string;
  /**
   * @remarks
   * Total number of Sync Variants belonging to this product
   */
  variants?: number;
  /**
   * @remarks
   * Number of synced Sync Variants belonging to this product
   */
  synced?: number;
  /**
   * @remarks
   * Thumbnail image for the product
   */
  thumbnail_url?: string;
  /**
   * @remarks
   * Indicates if this Sync Product is ignored
   */
  is_ignored?: boolean;
}
