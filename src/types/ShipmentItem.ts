/**
 * @remarks
 * The ShipmentItem type used by the Printful API.
 */
export default interface ShipmentItem {
  /**
   * @remarks
   * Line item ID
   */
  item_id?: number;
  /**
   * @remarks
   * Quantity of items in this shipment
   */
  quantity?: number;
}
