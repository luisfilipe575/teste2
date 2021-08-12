import Requester, { RequesterMethod, RequesterResponse } from '../../requester';
import { ErrorResponse } from '../../types/ErrorResponse';
import Order from '../../types/Order';
import OrderStatus from '../../types/OrderStatus';
import Paging from '../../types/Paging';
import RequestVariant from '../../types/RequestVariant';
import SyncProduct from '../../types/SyncProduct';

export interface ListOrdersResponse extends RequesterResponse {
  result: Order[];
  paging: Paging;
}

/**
 * @remarks
 * Because this function has multiple optional input parameters, we have organized them into an object for you.
 * The Printful API does not officially recognize this type.
 */
export interface ListOrdersParams {
  /**
   * @remarks
   * Filter by order status
   */
  status?: OrderStatus;
  /**
   * @remarks
   * Product search needle
   */
  offset?: number;
  /**
   * @remarks
   * Number of items per page (max 100)
   */
  limit?: number;
}

const listOrders = async (
  requester: Requester,
  params: ListOrdersParams
): Promise<ListOrdersResponse | ErrorResponse> => {
  return await requester.request(`store/products`, RequesterMethod.POST, {
    params
  });
};

export default listOrders;
