/**
 * @remarks
 * The RequestProduct type used by the Printful API.
 */
export default interface RequestProduct {
  /**
   * @remarks
   * Product ID from your Ecommerce platform
   */
  external_id?: string;
  /**
   * @remarks
   * Product name
   */
  name: string;
  /**
   * @remarks
   * Thumbnail image URL. Although we do not limit thumbnail image size, we recommend to keep it reasonably small.
   */
  thumbnail?: string;
  /**
   * @remarks
   * Indicates if this Sync Product is ignored
   */
  is_ignored?: boolean;
}
