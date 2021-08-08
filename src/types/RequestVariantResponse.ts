import File from './File';
import ItemOption from './ItemOption';
import ProductMiniInfo from './ProductMiniInfo';

/**
 * @remarks
 * The RequestVariantResponse type used by the Printful API.
 */
export default interface RequestVariantResponse {
  /**
   * @remarks
   * Sync Variant id
   */
  id?: number;
  /**
   * @remarks
   * Sync Variant ID from the external system
   */
  external_id?: string;
  /**
   * @remarks
   * Sync Variant ID in Printful
   */
  sync_product_id?: number;
  /**
   * @remarks
   * Sync Variant name
   */
  name?: string;
  /**
   * @remarks
   * Is this variant synced
   */
  synced?: boolean;
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
   * Items currency
   */
  currency?: string;
  /**
   * @remarks
   * Indicates if this Sync Variant is ignored
   */
  is_ignored?: boolean;
  /**
   * @remarks
   * A little info about the Product.
   */
  product?: ProductMiniInfo[];
  /**
   * @remarks
   * Array of attached print files
   */
  files?: File[];
  /**
   * @remarks
   * Array of additional options for the configured product/variant
   */
  options?: ItemOption[];
}
