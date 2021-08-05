import Requester, { RequesterMethod, RequesterResponse } from '../../requester';
import { ErrorResponse } from '../../types/ErrorResponse';
import ProductInfo from '../../types/ProductInfo';

export interface DeleteSyncProductResponse extends RequesterResponse {
  result: ProductInfo;
}

const deleteSyncProduct = async (
  requester: Requester,
  id: number | string
): Promise<DeleteSyncProductResponse | ErrorResponse> => {
  return await requester.request(
    `store/products/${id}`,
    RequesterMethod.DELETE
  );
};

export default deleteSyncProduct;
