import Requester, { RequesterMethod, RequesterResponse } from '../../requester';
import { ErrorResponse } from '../../types/ErrorResponse';
import PutRequestVariant from '../../types/PutRequestVariant';

export interface ModifySyncVariantResponse extends RequesterResponse {
  result: PutRequestVariant;
}

const modifySyncVariant = async (
  requester: Requester,
  id: number | string,
  params?: PutRequestVariant
): Promise<ModifySyncVariantResponse | ErrorResponse> => {
  return await requester.request(
    `store/variants/${id}`,
    RequesterMethod.PUT,
    params
  );
};

export default modifySyncVariant;
