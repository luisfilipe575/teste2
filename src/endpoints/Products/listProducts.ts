import Requester, { RequesterMethod, RequesterResponse } from '../../requester';
import { ErrorResponse } from '../../types/ErrorResponse';
import Paging from '../../types/Paging';
import SyncProduct from '../../types/SyncProduct';

export interface ListProductsResponse extends RequesterResponse {
  result: SyncProduct[];
  paging: Paging;
}

const listProducts = async (
  requester: Requester,
  status?: string,
  search?: string,
  offset?: number,
  limit?: number
): Promise<ListProductsResponse | ErrorResponse> => {
  return await requester.request<ListProductsResponse>(
    `store/products`,
    RequesterMethod.GET,
    {
      status,
      search,
      offset,
      limit
    }
  );
};

export default listProducts;
