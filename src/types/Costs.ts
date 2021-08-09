/**
 * @remarks
 * The Costs type used by the Printful API.
 */
export default interface Costs {
  /**
   * @remarks
   * 3 letter currency code
   */
  currency?: string;
  /**
   * @remarks
   * Total cost of all items
   */
  subtotal?: string;
  /**
   * @remarks
   * Discount sum
   */
  discount?: string;
  /**
   * @remarks
   * Shipping costs
   */
  shipping?: string;
  /**
   * @remarks
   * Digitization costs
   */
  digitization?: string;
  /**
   * @remarks
   * Sum of taxes (not included in the item price)
   */
  tax?: string;
  /**
   * @remarks
   * Sum of vat (not included in the item price)
   */
  vat?: string;
  /**
   * @remarks
   * Grand Total (subtotal-discount+tax+vat+shipping)
   */
  total?: string;
}
