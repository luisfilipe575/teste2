import Requester, { RequesterMethod, RequesterResponse } from '../../requester';
import { ErrorResponse } from '../../types/ErrorResponse';
import Product from '../../types/Product';

export interface ProductsResponse extends RequesterResponse {
  result: Product[];
}

export const products = async (
  requester: Requester
): Promise<ProductsResponse | ErrorResponse> => {
  return await requester.request('products', RequesterMethod.GET);
};

export default products;
