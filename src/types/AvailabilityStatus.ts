/**
 * @remarks
 * The AvailabilityStatus type used by the Printful API.
 */
export default interface AvailabilityStatus {
  /**
   * @remarks
   * Region code
   */
  region: string;
  /**
   * @remarks
   * Stock status. Possible values include: 'in_stock' - available for fulfillment,
   * 'stocked_on_demand' - available for fulfillment,
   * 'discontinued' - permanently unavailable,
   * 'out_of_stock' - temporarily unavailable
   */
  status: string;
}
