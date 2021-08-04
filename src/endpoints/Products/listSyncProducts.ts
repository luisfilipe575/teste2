import Requester, { RequesterMethod, RequesterResponse } from '../../requester';
import { ErrorResponse } from '../../types/ErrorResponse';
import Paging from '../../types/Paging';
import SyncProduct from '../../types/SyncProduct';

export interface ListSyncProductsResponse extends RequesterResponse {
  result: SyncProduct[];
  paging: Paging;
}

const listSyncProducts = async (
  requester: Requester,
  status: string,
  search: string,
  offset: number,
  limit: number
): Promise<ListSyncProductsResponse | ErrorResponse> => {
  return await requester.request<ListSyncProductsResponse>(
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

export default listSyncProducts;
