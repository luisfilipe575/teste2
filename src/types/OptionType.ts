/**
 * @remarks
 * The OptionType type used by the Printful API.
 */
export default interface OptionType {
  /**
   * @remarks
   * Option identifier - use this to specify the option when creating an order
   */
  id?: string;
  /**
   * @remarks
   * Display name
   */
  title?: string;
  /**
   * @remarks
   * Data type of this option (currently only 'bool' is supported)
   */
  type?: string;
  /**
   * @remarks
   * Option values - [key, value] map
   */
  values?: Map<any, any>;
  /**
   * @remarks
   * Additional price when this option is used
   */
  additional_price?: string;
  /**
   * @remarks
   * Additional price breakdown by type - [key, value] map
   */
  additional_price_breakdown?: Map<any, any>;
}
