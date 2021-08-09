import Requester, { RequesterMethod, RequesterResponse } from '../../requester';
import { ErrorResponse } from '../../types/ErrorResponse';
import PutRequestProductBody from '../../types/PutRequestProductBody';

export interface ModifySyncProductResponse extends RequesterResponse {
  result: PutRequestProductBody;
}

const modifySyncProduct = async (
  requester: Requester,
  id: number | string,
  params?: PutRequestProductBody
): Promise<ModifySyncProductResponse | ErrorResponse> => {
  return await requester.request(`store/products/${id}`, RequesterMethod.PUT, {
    body: params
  });
};

export default modifySyncProduct;
