import ItemOption from './ItemOption';
import ProductVariant from './ProductVariant';
import File from './File';

/**
 * @remarks
 * The SyncVariant type used by the Printful API.
 */
export default interface SyncVariant {
  /**
   * @remarks
   * Sync Variant ID
   */
  id?: number;
  /**
   * @remarks
   * Variant ID from the Ecommerce platform
   */
  external_id?: string;
  /**
   * @remarks
   * Sync Product ID that this variant belongs to
   */
  sync_product_id?: number;
  /**
   * @remarks
   * Sync Variant name
   */
  name?: string;
  /**
   * @remarks
   * Indicates if this Sync Variant is properly linked with Printful product
   */
  synced?: boolean;
  /**
   * @remarks
   * Printful Variant ID that this Sync Variant is synced to
   */
  variant_id?: number;
  /**
   * @remarks
   * Warehousing variant id. If sync variant is connected with a warehousing item, this is its id
   */
  warehouse_product_variant_id?: number;
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
   * Currency in which prices are returned
   */
  currency?: string;
  /**
   * @remarks
   * Indicates if this Sync Variant is ignored
   */
  is_ignored?: boolean;
  /**
   * @remarks
   * Short information about the Printful Product and Variant that this Sync Variant is synced to
   */
  product?: ProductVariant;
  /**
   * @remarks
   * Array of attached printfiles / preview images
   */
  files?: File[];
  /**
   * @remarks
   * Array of additional options for the configured product/variant
   */
  options?: ItemOption[];
  /**
   * @remarks
   */
}
