import Requester, { RequesterMethod, RequesterResponse } from '../../requester';
import { ErrorResponse } from '../../types/ErrorResponse';
import SyncVariantInfo from '../../types/SyncVariantInfo';

export interface GetSingleSyncVariantResponse extends RequesterResponse {
  result: SyncVariantInfo;
}

const getSingleSyncVariant = async (
  requester: Requester,
  id: number | string
): Promise<GetSingleSyncVariantResponse | ErrorResponse> => {
  return await requester.request(`store/variants/${id}`, RequesterMethod.GET);
};

export default getSingleSyncVariant;
