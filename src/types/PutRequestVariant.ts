import ItemOption from './ItemOption';
import RequestFile from './RequestFile';

/**
 * @remarks
 * The PutRequestVariant type used by the Printful API.
 */
export default interface PutRequestVariant {
  /**
   * @remarks
   * Sync Variant ID. Please specify the IDs of all Sync Variants you wish to keep.
   */
  id?: number;
  /**
   * @remarks
   * Variant ID from the Ecommerce platform
   */
  external_id?: string;
  /**
   * @remarks
   * Printful Variant ID that this Sync Variant is synced to
   */
  variant_id?: number;
  /**
   * @remarks
   * Retail price that this item is sold for
   */
  retail_price?: number;
  /**
   * @remarks
   * SKU of this Sync Variant
   */
  sku?: string;
  /**
   * @remarks
   * Indicates if this Sync Variant is ignored
   */
  is_ignored?: boolean;
  /**
   * @remarks
   * Array of attached print files
   */
  files?: RequestFile[];
  /**
   * @remarks
   * Array of additional options for the configured product/variant
   */
  options?: ItemOption[];
}
