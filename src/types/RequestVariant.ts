import ItemOption from './ItemOption';
import RequestFile from './RequestFile';

/**
 * @remarks
 * The RequestVariant type used by the Printful API.
 */
export default interface RequestVariant {
  external_id?: string;
  variant_id: string;
  retail_price?: number;
  sku?: string;
  is_ignored?: boolean;
  files: RequestFile[];
  options?: ItemOption[];
}
