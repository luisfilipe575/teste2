import Requester, { RequesterMethod, RequesterResponse } from '../../requester';
import { ErrorResponse } from '../../types/ErrorResponse';
import Order from '../../types/Order';

export interface CancelOrderResponse extends RequesterResponse {
  result: Order;
}

const cancelOrder = async (
  requester: Requester,
  id: string | number
): Promise<CancelOrderResponse | ErrorResponse> => {
  return await requester.request(`orders/${id}`, RequesterMethod.DELETE);
};

export default cancelOrder;
