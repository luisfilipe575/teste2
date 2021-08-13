import { ErrorResponse } from './../../types/ErrorResponse';
import Requester from '../../requester';
import cancelOrder, { CancelOrderResponse } from './cancelOrder';
import listOrders, { ListOrdersParams, ListOrdersResponse } from './listOrders';
import OrderInput from '../../types/OrderInput';
import createOrder, {
  CreateOrderParams,
  CreateOrderResponse
} from './createOrder';
import estimateCosts, { EstimateCostsResponse } from './estimateCosts';
import getOrderData, { GetOrderDataResponse } from './getOrderData';
import updateOrder, {
  UpdateOrderParams,
  UpdateOrderResponse
} from './updateOrder';
import confirmDraftFulfillment, {
  ConfirmDraftFulfillmentResponse
} from './confirmDraftFulfillment';

export default class Orders {
  private requester!: Requester;
  constructor(requester: Requester) {
    this.requester = requester;
  }
  /**
   * @remarks
   * Returns list of order objects from your store
   *
   * @param params - GET request params
   *
   * @see
   * https://www.printful.com/docs/orders#actionIndex
   */
  async listOrders(
    params?: ListOrdersParams
  ): Promise<ListOrdersResponse | ErrorResponse> {
    return await listOrders(this.requester, params);
  }
  /**
   * @remarks
   * Creates a new order and optionally submits it for fulfillment
   *
   * @param body - Order data
   * @param params - CreateOrder params
   *
   * @see
   * https://www.printful.com/docs/orders#actionCreate
   */
  async createOrder(
    body: OrderInput,
    params?: CreateOrderParams
  ): Promise<CreateOrderResponse | ErrorResponse> {
    return await createOrder(this.requester, body, params);
  }
  /**
   * @remarks
   * Calculates the estimated order costs including item costs, print costs (back prints, inside labels etc.), shipping and taxes
   *
   * @param body - Order data
   *
   * @see
   * https://www.printful.com/docs/orders#actionEstimateCosts
   */
  async estimateCosts(
    body: OrderInput
  ): Promise<EstimateCostsResponse | ErrorResponse> {
    return await estimateCosts(this.requester, body);
  }
  /**
   * @remarks
   * Returns order data by ID or External ID.
   *
   * @param id - Order ID (integer) or External ID (if prefixed with @)
   *
   * @see
   * https://www.printful.com/docs/orders#actionGet
   */
  async getOrderData(
    id: number | string
  ): Promise<GetOrderDataResponse | ErrorResponse> {
    return await getOrderData(this.requester, id);
  }
  /**
   * @remarks
   * Cancels pending order or draft. Charged amount is returned to the store owner's credit card.
   *
   * @param id - Order ID (integer) or External ID (if prefixed with @)
   *
   * @see
   * https://www.printful.com/docs/orders#actionDelete
   */
  async cancelOrder(
    id: number | string
  ): Promise<CancelOrderResponse | ErrorResponse> {
    return await cancelOrder(this.requester, id);
  }
  /**
   * @remarks
   * Updates unsubmitted order and optionally submits it for the fulfillment.
   * Note that you need to post only the fields that need to be changed, not all required fields.
   * If items array is given in the update data, the items will be:
   * a) updated, if the update data contains the item id or external_id parameter that alreay exists
   * b) deleted, if the request doesn't contain the item with previously existing id
   * c) created as new if the id is not given or does not already exist
   *
   * @param body - Order data
   * @param params - UpdateOrder params
   *
   * @see
   * https://www.printful.com/docs/orders#actionUpdate
   */
  async updateOrder(
    body: OrderInput,
    params: UpdateOrderParams
  ): Promise<UpdateOrderResponse | ErrorResponse> {
    return await updateOrder(this.requester, body, params);
  }
  /**
   * @remarks
   * Approves for fulfillment an order that was saved as a draft.
   * Store owner's credit card is charged when the order is submitted for fulfillment.
   *
   * @params id - Order ID (integer) or External ID (if prefixed with @)
   *
   * @see
   * https://www.printful.com/docs/orders#actionConfirm
   */
  async confirmDraftFulfillment(
    id: string | number
  ): Promise<ConfirmDraftFulfillmentResponse | ErrorResponse> {
    return await confirmDraftFulfillment(this.requester, id);
  }
}
