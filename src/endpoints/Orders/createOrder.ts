import Requester, { RequesterMethod, RequesterResponse } from '../../requester';
import { ErrorResponse } from '../../types/ErrorResponse';
import Order from '../../types/Order';
import OrderInput from '../../types/OrderInput';

export interface CreateOrderResponse extends RequesterResponse {
  result: Order;
}

/**
 * @remarks
 * Because this function has multiple optional input parameters, we have organized them into an object for you.
 * The Printful API does not officially recognize this type.
 */
export interface CreateOrderParams {
  /**
   * @remarks
   * Automatically submit the newly created order for fulfillment (skip the Draft phase)
   */
  confirm?: boolean;
  /**
   * @remarks
   * Try to update existing order if an order with the specified external_id already exists
   */
  update_existing?: boolean;
}

const createOrder = async (
  requester: Requester,
  body: OrderInput,
  params?: CreateOrderParams
): Promise<CreateOrderResponse | ErrorResponse> => {
  return await requester.request(`store/products`, RequesterMethod.POST, {
    body,
    params
  });
};

export default createOrder;
