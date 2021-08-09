import Requester, { RequesterMethod, RequesterResponse } from '../../requester';
import { ErrorResponse } from '../../types/ErrorResponse';
import Paging from '../../types/Paging';
import SyncProduct from '../../types/SyncProduct';

export interface ListSyncProductsResponse extends RequesterResponse {
  result: SyncProduct[];
  paging: Paging;
}

export enum SyncProductStatus {
  SYNCED = 'synced',
  UNSYNCED = 'unsynced',
  ALL = 'ALL'
}

/**
 * @remarks
 * Because this function has multiple optional input parameters, we have organized them into an object for you.
 * The Printful API does not officially recognize this type.
 *
 * @param status - Filter by item status (`synced/unsynced/all`). If only some of the variants are synced,the product is returned by both unsynced and synced filters
 * @param search - Product search needle
 * @param offset - Result set offset
 * @param limit - Number of items per page (max 100)
 */
export interface ListSyncProductsParams {
  status?: SyncProductStatus;
  search?: string;
  offset?: number;
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
