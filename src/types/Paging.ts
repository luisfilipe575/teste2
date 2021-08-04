/**
 * @remarks
 * The Paging type used by the Printful API.
 */
export default interface Paging {
  /**
   * @remarks
   * Total number of items available
   */
  total: number;
  /**
   * @remarks
   * Current result set page offset
   */
  offset: number;
  /**
   * @remarks
   * Max number of items per page
   */
  limit: number;
}
