import Requester, { RequesterMethod, RequesterResponse } from '../../requester';
import { ErrorResponse } from '../../types/ErrorResponse';
import Order from '../../types/Order';

export interface ConfirmDraftFulfillmentResponse extends RequesterResponse {
  result: Order;
}

const confirmDraftFulfillment = async (
  requester: Requester,
  id: number | string
): Promise<ConfirmDraftFulfillmentResponse | ErrorResponse> => {
  return await requester.request(`orders/${id}/confirm`, RequesterMethod.POST);
};

export default confirmDraftFulfillment;
