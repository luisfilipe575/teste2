import File from './File';
import ItemOption from './ItemOption';
import ProductVariant from './ProductVariant';

/**
 * @remarks
 * The Item type used by the Printful API.
 */
export default interface Item {
  /**
   * @remarks
   * Line item ID
   */
  id?: number;
  /**
   * @remarks
   * Line item ID from the external system
   */
  external_id?: string;
  /**
   * @remarks
   * Variant ID of the item ordered. See Products API
   */
  variant_id?: number;
  /**
   * @remarks
   * Sync variant ID of the item ordered.
   */
  sync_variant_id?: number;
  /**
   * @remarks
   * External variant ID of the item ordered.
   */
  external_variant_id?: string;
  /**
   * @remarks
   * Warehousing product variant ID of the item ordered. See Warehouse Products API
   */
  warehouse_product_variant_id?: number;
  /**
   * @remarks
   * Number of items ordered
   */
  quantity?: number;
  /**
   * @remarks
   * Printful price of the item
   */
  price?: string;
  /**
   * @remarks
   * Original retail price of the item to be displayed on the packing slip
   */
  retail_price?: string;
  /**
   * @remarks
   * Display name of the item. If not given, a name from the Printful system will be displayed on the packing slip
   */
  name?: string;
  /**
   * @remarks
   * Short information about the Product and Variant
   */
  product?: ProductVariant;
  /**
   * @remarks
   * Array of attached printfiles / preview images
   */
  files?: File[];
  /**
   * @remarks
   * Array of additional options for this product
   */
  options?: ItemOption[];
  /**
   * @remarks
   * Product identifier (SKU) from the external system
   */
  sku?: string;
}
