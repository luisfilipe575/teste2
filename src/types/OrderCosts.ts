import Costs from './Costs';

export default interface OrderCosts {
  /**
   * @remarks
   * Order costs (Printful prices)
   */
  costs?: Costs;
  /**
   * @remarks
   * Retail costs that are to be displayed on the packing slip for international shipments.
   * Retail costs are used only if every item in order contains the retail_price attribute.
   */
  retail_costs?: Costs;
}
