import Costs from './Costs';
import GiftData from './GiftData';
import IncompleteItem from './IncompleteItem';
import Item from './Item';
import OrderPackingSlip from './OrderPackingSlip';
import OrderStatus from './OrderStatus';
import Recipient from './Recipient';
import Shipment from './Shipment';

/**
 * @remarks
 * The Order type used by the Printful API.
 */
export default interface Order {
  id?: number;
  external_id?: string;
  store?: number;
  status?: OrderStatus;
  shipping?: string;
  created?: number;
  updated?: number;
  recipient?: Recipient;
  items?: Item[];
  incomplete_items?: IncompleteItem[];
  costs?: Costs;
  pricing_breakdown?: number[];
  shipments?: Shipment[];
  gift?: GiftData;
  packing_slip?: OrderPackingSlip;
}
