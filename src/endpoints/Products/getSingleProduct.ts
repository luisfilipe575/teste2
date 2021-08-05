import Requester, { RequesterMethod, RequesterResponse } from '../../requester';
import { ErrorResponse } from '../../types/ErrorResponse';
import SyncProductInfo from '../../types/SyncProductInfo';

export interface GetSingleProductResponse extends RequesterResponse {
  result: SyncProductInfo;
}

const getSingleProduct = async (
  requester: Requester,
  id: number | string
): Promise<GetSingleProductResponse | ErrorResponse> => {
  return await requester.request(`store/products/${id}`, RequesterMethod.GET);
};

export default getSingleProduct;
