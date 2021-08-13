import Requester, { RequesterMethod, RequesterResponse } from '../../requester';
import { ErrorResponse } from '../../types/ErrorResponse';
import Order from '../../types/Order';

export interface GetOrderDataResponse extends RequesterResponse {
  result: Order;
}

const getOrderData = async (
  requester: Requester,
  id: number | string
): Promise<GetOrderDataResponse | ErrorResponse> => {
  return await requester.request(`orders/${id}`, RequesterMethod.GET);
};

export default getOrderData;
