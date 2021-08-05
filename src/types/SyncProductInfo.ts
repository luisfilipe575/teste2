import SyncProduct from './SyncProduct';
import SyncVariant from './SyncVariant';

/**
 * @remarks
 * The SyncProductInfo type used by the Printful API.
 */
export default interface SyncProductInfo {
  /**
   * @remarks
   * Information about the selected product
   */
  sync_product: SyncProduct;
  /**
   * @remarks
   * Array of Sync Variants available for the selected product
   */
  sync_variants: SyncVariant[];
}
