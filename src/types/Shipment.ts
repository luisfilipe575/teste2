import ShipmentItem from './ShipmentItem';

/**
 * @remarks
 * The Shipment type used by the Printful API.
 */
export default interface Shipment {
  /**
   * @remarks
   * Shipment ID
   */
  id?: number;
  /**
   * @remarks
   * Carrier name
   */
  carrier?: string;
  /**
   * @remarks
   * Delivery service name
   */
  service?: string;
  /**
   * @remarks
   * Shipment tracking number
   */
  tracking_number?: string;
  /**
   * @remarks
   * Shipment tracking URL
   */
  tracking_url?: string;
  /**
   * @remarks
   * Shipping time
   */
  created?: number;
  /**
   * @remarks
   * Ship date
   */
  ship_date?: string;
  /**
   * @remarks
   * Ship time in unix timestamp
   */
  shipped_at?: number;
  /**
   * @remarks
   * Whether this is a reshipment
   */
  reshipment?: boolean;
  /**
   * @remarks
   * Array of items in this shipment
   */
  items?: ShipmentItem[];
}
