import PutRequestProduct from './PutRequestProduct';
import PutRequestVariant from './PutRequestVariant';

/**
 * @remarks
 * The PutRequestProductBody type used by the Printful API.
 */

export default interface PutRequestProductBody {
  sync_product?: PutRequestProduct;
  sync_variants?: PutRequestVariant[];
}
