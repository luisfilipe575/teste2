import Requester, { RequesterMethod, RequesterResponse } from '../../requester';
import { ErrorResponse } from '../../types/ErrorResponse';
import RequestVariant from '../../types/RequestVariant';
import RequestVariantResponse from '../../types/RequestVariantResponse';

export interface CreateSyncVariantResponse extends RequesterResponse {
  result: RequestVariantResponse;
}

const createSyncVariant = async (
  requester: Requester,
  id: number | string,
  requestVariant: RequestVariant
): Promise<CreateSyncVariantResponse | ErrorResponse> => {
  return await requester.request(
    `store/products/${id}/variants`,
    RequesterMethod.POST,
    { body: requestVariant }
  );
};

export default createSyncVariant;
