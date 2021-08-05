/**
 * @remarks
 * The FileType type used by the Printful API.
 */
export default interface FileType {
  /**
   * @remarks
   * Deprecated file type identifier. Please use type field instead!
   *
   * @deprecated
   */
  id?: string;
  /**
   * @remarks
   * File type identifier - use this to specify a file's purpose when creating an order
   */
  type?: string;
  /**
   * @remarks
   * Display name
   */
  title?: string;
  /**
   * @remarks
   * Additional price when this print file type is used
   */
  additional_price?: string;
}
