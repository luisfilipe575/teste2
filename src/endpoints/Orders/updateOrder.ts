import Requester, { RequesterMethod, RequesterResponse } from '../../requester';
import { ErrorResponse } from '../../types/ErrorResponse';
import Order from '../../types/Order';
import OrderInput from '../../types/OrderInput';

export interface UpdateOrderResponse extends RequesterResponse {
  result: Order;
}

/**
 * @remarks
 * Because this function has multiple optional input parameters, we have organized them into an object for you.
 * The Printful API does not officially recognize this type.
 */
export interface UpdateOrderParams {
  /**
   * @remarks
   * Order ID (integer) or External ID (if prefixed with @)
   */
  id: number;
  /**
   * @remarks
   * Automatically submit the newly created order for fulfillment (skip the Draft phase)
   */
  confirm?: boolean;
}

const updateOrder = async (
  requester: Requester,
  body: OrderInput,
  params: UpdateOrderParams
): Promise<UpdateOrderResponse | ErrorResponse> => {
  return await requester.request(`orders/${params.id}`, RequesterMethod.PUT, {
    body,
    params
  });
};

export default updateOrder;
