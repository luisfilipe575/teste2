import Requester, { RequesterMethod, RequesterResponse } from '../../requester';
import { ErrorResponse } from '../../types/ErrorResponse';
import RequestProductResponse from '../../types/RequestProductResponse';
import RequestVariant from '../../types/RequestVariant';
import SyncProduct from '../../types/SyncProduct';

export interface CreateSyncProductResponse extends RequesterResponse {
  result: RequestProductResponse;
}

const createSyncProduct = async (
  requester: Requester,
  sync_product: SyncProduct,
  sync_variants: RequestVariant[]
): Promise<CreateSyncProductResponse | ErrorResponse> => {
  return await requester.request(`store/products`, RequesterMethod.POST, {
    body: {
      sync_product,
      sync_variants
    }
  });
};

export default createSyncProduct;
