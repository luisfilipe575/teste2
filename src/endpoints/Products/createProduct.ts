import Requester, { RequesterMethod, RequesterResponse } from '../../requester';
import { ErrorResponse } from '../../types/ErrorResponse';
import Paging from '../../types/Paging';
import RequestVariant from '../../types/RequestVariant';
import SyncProduct from '../../types/SyncProduct';

export interface CreateProductResponse extends RequesterResponse {
  id: number;
  external_id: string;
  name: string;
  variants: number;
  synced: number;
  thumbnail_url: string;
  is_ignored: boolean;
}

const createProduct = async (
  requester: Requester,
  sync_product: SyncProduct,
  sync_variants: RequestVariant[]
): Promise<CreateProductResponse | ErrorResponse> => {
  return await requester.request(`store/products`, RequesterMethod.POST, {
    sync_product,
    sync_variants
  });
};

export default createProduct;
