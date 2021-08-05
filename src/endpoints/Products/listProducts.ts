import Requester, { RequesterMethod, RequesterResponse } from '../../requester';
import { ErrorResponse } from '../../types/ErrorResponse';
import Paging from '../../types/Paging';
import SyncProduct from '../../types/SyncProduct';

export interface ListProductsResponse extends RequesterResponse {
  result: SyncProduct[];
  paging: Paging;
}

/**
 * @remarks
 * Because this function has multiple optional input parameters, we have organized them into an object for you.
 *
 * @param status - Filter by item status (`synced/unsynced/all`). If only some of the variants are synced,the product is returned by both unsynced and synced filters
 * @param search - Product search needle
 * @param offset - Result set offset
 * @param limit - Number of items per page (max 100)
 */
export interface ListProductsParams {
  status?: string;
  search?: string;
  offset?: number;
  limit?: number;
}

const listProducts = async (
  requester: Requester,
  params: ListProductsParams
): Promise<ListProductsResponse | ErrorResponse> => {
  return await requester.request<ListProductsResponse>(
    `store/products`,
    RequesterMethod.GET,
    {
      status: params.status,
      search: params.search,
      offset: params.offset,
      limit: params.limit
    }
  );
};

export default listProducts;
