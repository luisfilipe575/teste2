import Requester, { RequesterMethod, RequesterResponse } from '../../requester';
import { ErrorResponse } from '../../types/ErrorResponse';
import Paging from '../../types/Paging';
import SyncProduct from '../../types/SyncProduct';
import SyncProductStatus from '../../types/SyncProductStatus';

export interface ListSyncProductsResponse extends RequesterResponse {
  result: SyncProduct[];
  paging: Paging;
}

/**
 * @remarks
 * Because this function has multiple optional input parameters, we have organized them into an object for you.
 * The Printful API does not officially recognize this type.
 */
export interface ListSyncProductsParams {
  /**
   * @remarks
   * Filter by item status (`synced/unsynced/all`). If only some of the variants are synced,the product is returned by both unsynced and synced filters
   */
  status?: SyncProductStatus;
  /**
   * @remarks
   * Product search needle
   */
  search?: string;
  /**
   * @remarks
   * Result set offset
   */
  offset?: number;
  /**
   * @remarks
   * Number of items per page (max 100)
   */
  limit?: number;
}

const listSyncProducts = async (
  requester: Requester,
  params?: ListSyncProductsParams
): Promise<ListSyncProductsResponse | ErrorResponse> => {
  return await requester.request<ListSyncProductsResponse>(
    `store/products`,
    RequesterMethod.GET,
    {
      params
    }
  );
};

export default listSyncProducts;
