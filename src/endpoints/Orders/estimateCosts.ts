import Requester, { RequesterMethod, RequesterResponse } from '../../requester';
import { ErrorResponse } from '../../types/ErrorResponse';
import OrderCosts from '../../types/OrderCosts';
import OrderInput from '../../types/OrderInput';

export interface EstimateCostsResponse extends RequesterResponse {
  result: OrderCosts;
}

const estimateCosts = async (
  requester: Requester,
  body: OrderInput
): Promise<EstimateCostsResponse | ErrorResponse> => {
  return await requester.request(
    `orders/estimate-costs`,
    RequesterMethod.POST,
    {
      body
    }
  );
};

export default estimateCosts;
