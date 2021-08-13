import Requester, { RequesterMethod, RequesterResponse } from '../../requester';
import { ErrorResponse } from '../../types/ErrorResponse';
import PutRequestVariant from '../../types/PutRequestVariant';
import RequestVariantResponse from '../../types/RequestVariantResponse';

export interface ModifySyncVariantResponse extends RequesterResponse {
  result: RequestVariantResponse;
}

const modifySyncVariant = async (
  requester: Requester,
  id: number | string,
  body?: PutRequestVariant
): Promise<ModifySyncVariantResponse | ErrorResponse> => {
  return await requester.request(`store/variants/${id}`, RequesterMethod.PUT, {
    body
  });
};

export default modifySyncVariant;
