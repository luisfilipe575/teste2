import ItemOption from './ItemOption';
import RequestFile from './RequestFile';

/**
 * @remarks
 * The RequestProductResponse type used by the Printful API.
 */
export default interface RequestProductResponse {
  /**
   * @remarks
   * Sync Product id
   */
  id?: number;
  /**
   * @remarks
   * Sync Product ID from the external system
   */
  external_id?: string;
  /**
   * @remarks
   * Sync Product name
   */
  name?: string;
  /**
   * @remarks
   * Total number of variants in Sync Product
   */
  variants?: number;
  /**
   * @remarks
   * Total number of Sync variants in Sync Product
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
