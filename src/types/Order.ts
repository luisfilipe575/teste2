import Costs from './Costs';
import GiftData from './GiftData';
import IncompleteItem from './IncompleteItem';
import Item from './Item';
import OrderPackingSlip from './OrderPackingSlip';
import OrderStatus from './OrderStatus';
import Recipient from './Address';
import Shipment from './Shipment';

/**
 * @remarks
 * The Order type used by the Printful API.
 */
export default interface Order {
  /**
   * @remarks
   * Order ID
   */
  id?: number;
  /**
   * @remarks
   * Order ID from the external system
   */
  external_id?: string;
  /**
   * @remarks
   * Store ID
   */
  store?: number;
  /**
   * @remarks
   * Order status
   */
  status?: OrderStatus;
  /**
   * @remarks
   * Shipping method. Defaults to 'STANDARD'
   */
  shipping?: string;
  /**
   * @remarks
   * Time when the order was created
   */
  created?: number;
  /**
   * @remarks
   * Time when the order was updated
   */
  updated?: number;
  /**
   * @remarks
   * Shipping address
   */
  recipient?: Recipient;
  /**
   * @remarks
   * Array of items in the order
   */
  items?: Item[];
  /**
   * @remarks
   * Array of incomplete items in the order
   */
  incomplete_items?: IncompleteItem[];
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
  /**
   * @remarks
   * Difference between order price and retail costs. Will be shown only if order is completed.
   */
  pricing_breakdown?: number[];
  /**
   * @remarks
   * Array of shipments already shipped for this order
   */
  shipments?: Shipment[];
  /**
   * @remarks
   * Optional gift message for the packing slip
   */
  gift?: GiftData;
  /**
   * @remarks
   * Custom packing slip for this order
   */
  packing_slip?: OrderPackingSlip;
}
