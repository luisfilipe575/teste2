/**
 * @remarks
 * The IncompleteItem type used by the Printful API.
 */
export default interface IncompleteItem {
  /**
   * @remarks
   * Incomplete item name
   */
  name?: string;
  /**
   * @remarks
   * Incompleted item quantity
   */
  quantity?: number;
  /**
   * @remarks
   * Sync variant ID of the incompleted item.
   */
  sync_variant_id?: number;
  /**
   * @remarks
   * External variant ID of the incompleted item.
   */
  external_variant_id?: string;
  /**
   * @remarks
   * External order line item id.
   */
  external_line_item_id?: string;
}
