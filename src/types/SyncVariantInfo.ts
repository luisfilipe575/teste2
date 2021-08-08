import SyncVariant from './SyncVariant';
import SyncProduct from './SyncProduct';

/**
 * @remarks
 * The SyncVariantInfo type used by the Printful API.
 */
export default interface SyncVariantInfo {
  /**
   * @remarks
   * Information about the selected Sync Variant
   */
  sync_variant?: SyncVariant;
  /**
   * @remarks
   * Information about the Sync Product that the Sync Variant belongs to
   */
  sync_product?: SyncProduct;
}
