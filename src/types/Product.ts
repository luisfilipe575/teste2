import FileType from './FileType';
import OptionType from './OptionType';

/**
 * @remarks
 * The Product type used by the Printful API.
 */
export default interface Product {
  /**
   * @remarks
   * Product ID
   */
  id: number;
  /**
   * @remarks
   * Product type identifier
   */
  type: string;
  /**
   * @remarks
   * Product type name
   */
  type_name: string;
  /**
   * @remarks
   * Brand name
   */
  brand: string;
  /**
   * @remarks
   * Model name
   */
  model: string;
  /**
   * @remarks
   * URL of a sample image for this product
   */
  image: string;
  /**
   * @remarks
   * Number of available variants for this product
   */
  variant_count: number;
  /**
   * @remarks
   * Currency in which prices are returned
   */
  currency: string;
  /**
   * @remarks
   * Definitions of Print/Mockup file categories that can be attached to this product
   */
  files: FileType[];
  /**
   * @remarks
   * Definitions of additional options that are available for this product
   */
  options: OptionType[];
  /**
   * @remarks
   * If product is disabled in push
   */
  is_discontinued: boolean;
  /**
   * @remarks
   * Average number of days for order to be fulfilled
   */
  avg_fulfilment_time: number;
  /**
   * @remarks
   * Product description
   */
  description: string;
}
