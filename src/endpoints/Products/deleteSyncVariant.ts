import Requester, { RequesterMethod, RequesterResponse } from '../../requester';
import { ErrorResponse } from '../../types/ErrorResponse';
import VariantInfo from '../../types/VariantInfo';

export interface DeleteSyncVariantResponse extends RequesterResponse {
  result: VariantInfo;
}

const deleteSyncVariant = async (
  requester: Requester,
  id: number | string
): Promise<DeleteSyncVariantResponse | ErrorResponse> => {
  return await requester.request(
    `store/variants/${id}`,
    RequesterMethod.DELETE
  );
};

export default deleteSyncVariant;
