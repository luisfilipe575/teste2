import FileOption from './FileOption';

/**
 * @remarks
 * The RequestFile type used by the Printful API.
 */
export default interface RequestFile {
  /**
   * @remarks
   * Role of the file in the order
   */
  type?: string;
  /**
   * @remarks
   * File ID (Required if no URL given)
   */
  id?: number;
  /**
   * @remarks
   * Source URL where the file is downloaded from (Required if no File ID given)
   */
  url?: string;
  /**
   * @remarks
   * Array of additional options for this file
   */
  options?: FileOption[];
}
