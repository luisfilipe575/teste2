/**
 * @remarks
 * The Variant type used by the Printful API.
 */
export default interface Variant {
  /**
   * @remarks
   * Variant ID, use this to specify the product when creating orders
   */
  id: number;
  /**
   * @remarks
   * ID of the product that this variant belongs to
   */
  product_id: number;
  /**
   * @remarks
   * Display name
   */
  name: string;
  /**
   * @remarks
   * Item size
   */
  size: string;
  /**
   * @remarks
   * Item color
   */
  color: string;
  /**
   * @remarks
   * Hexadecimal RGB color code. May not exactly reflect the real-world color
   */
  color_code: string;
  /**
   * @remarks
   * Secondary hexadecimal RGB color code. May not exactly reflect the real-world color
   */
  color_code2: string;
  /**
   * @remarks
   * URL of a preview image for this variant
   */
  image: string;
  /**
   * @remarks
   * Variant's price (can change depending on print files and optional settings)
   */
  price: string;
  /**
   * @remarks
   * Stock availability of this variant
   */
  in_stock: boolean;
  /**
   * @remarks
   * Map of [region code, region name] of regions where the variant is available for fulfillment=
   */
  availability_regions: Map<string, string>;
}
