/**
 * @remarks
 * An enum describing an order's status. Not an official Printful API type, but described in the
 * OrdersAPI documentation.
 *
 * @see
 * https://www.printful.com/docs/orders
 */
enum OrderStatus {
  /**
   * @remarks
   * The order is created but is not yet submitted for fulfillment. You still can edit it and confirm later.
   */
  DRAFT = 'draft',
  /**
   * @remarks
   * The order has been submitted for fulfillment, but is not yet accepted for fulfillment. You can still cancel the order if you need.
   */
  PENDING = 'pending',
  /**
   * @remarks
   * Order was submitted for fulfillment but was returned for review because of an error (problem with address, missing printfiles, charging has failed, etc.).
   */
  FAILED = 'failed',
  /**
   * @remarks
   * The order has been canceled and can no longer be processed. If the order was charged then the amount has been returned to your credit card.
   */
  CANCELED = 'canceled',
  /**
   * @remarks
   * The order is being fulfilled and can no longer be cancelled or modified. Contact customer support if there are any issues with the order at this point.
   */
  INPROCESS = 'inprocess',
  /**
   * @remarks
   * The order has encountered a problem during the fulfillment that needs to be resolved together with Printful customer service before fulfillment can continue.
   */
  ONHOLD = 'onhold',
  /**
   * @remarks
   * The order is partially fulfilled (some items are shipped already, the rest will follow)
   */
  PARTIAL = 'partial',
  /**
   * @remarks
   * All items have been shipped successfully
   */
  FULFILLED = 'fulfilled'
}

export default OrderStatus;
