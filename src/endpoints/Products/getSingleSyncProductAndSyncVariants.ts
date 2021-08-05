import Requester, { RequesterMethod, RequesterResponse } from '../../requester';
import { ErrorResponse } from '../../types/ErrorResponse';
import SyncProductInfo from '../../types/SyncProductInfo';

export interface GetSingleSyncProductAndSyncVariantsResponse
  extends RequesterResponse {
  result: SyncProductInfo;
}

const getSingleSyncProductAndSyncVariants = async (
  requester: Requester,
  id: number | string
): Promise<GetSingleSyncProductAndSyncVariantsResponse | ErrorResponse> => {
  return await requester.request(`store/products/${id}`, RequesterMethod.GET);
};

export default getSingleSyncProductAndSyncVariants;
