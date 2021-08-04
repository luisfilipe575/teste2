import Requester, { RequesterMethod, RequesterResponse } from '../../requester';
import { ErrorResponse } from '../../types/ErrorResponse';
import VariantInfo from '../../types/VariantInfo';

export interface ProductsVariantListResponse extends RequesterResponse {
  result: VariantInfo;
}

export const productsVariantList = async (
  requester: Requester,
  productId: number
): Promise<ProductsVariantListResponse | ErrorResponse> => {
  return await requester.request(`products/${productId}`, RequesterMethod.GET);
};

export default productsVariantList;
