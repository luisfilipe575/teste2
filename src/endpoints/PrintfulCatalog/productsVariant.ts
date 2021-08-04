import Requester, { RequesterMethod, RequesterResponse } from '../../requester';
import { ErrorResponse } from '../../types/ErrorResponse';
import VariantInfo from '../../types/VariantInfo';

export interface ProductsVariantResponse extends RequesterResponse {
  result: VariantInfo;
}

export const productsVariant = async (
  requester: Requester,
  variantId: number
): Promise<ProductsVariantResponse | ErrorResponse> => {
  return await requester.request(
    `products/variant/${variantId}`,
    RequesterMethod.GET
  );
};

export default productsVariant;
