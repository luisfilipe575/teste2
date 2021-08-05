import ItemOption from './ItemOption';
import ProductVariant from './ProductVariant';
import File from './File';

/**
 * @remarks
 * The SyncVariant type used by the Printful API.
 */
export default interface SyncVariant {
  id: number;
  external_id: string;
  sync_product_id: number;
  name: string;
  synced: boolean;
  variant_id: number;
  warehouse_product_variant_id: number;
  retail_price: number;
  sku: string;
  currency: string;
  is_ignored: boolean;
  product: ProductVariant;
  files: File[];
  options: ItemOption[];
}
