import Address from './Address';
import Costs from './Costs';
import GiftData from './GiftData';
import Item from './Item';
import OrderPackingSlip from './OrderPackingSlip';

export default interface OrderInput {
  external_id?: string;
  shipping?: string;
  recipient: Address;
  items: Item[];
  retail_costs?: Costs;
  gift?: GiftData;
  packing_slip?: OrderPackingSlip;
}
