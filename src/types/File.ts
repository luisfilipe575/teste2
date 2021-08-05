import FileOption from './FileOption';

export default interface File {
  /**
   * @remarks
   * File ID
   */
  id?: number;
  /**
   * @remarks
   * Role of the file in the order
   */
  type?: string;
  /**
   * @remarks
   * MD5 checksum of the file
   */
  hash?: string;
  /**
   * @remarks
   * Source URL where the file is downloaded from
   */
  url?: string;
  /**
   * @remarks
   * File name
   */
  filename?: string;
  /**
   * @remarks
   * MIME type of the file
   */
  mime_type?: string;
  /**
   * @remarks
   * Size in bytes
   */
  size?: number;
  /**
   * @remarks
   * Width in pixels
   */
  width?: number;
  /**
   * @remarks
   * Height in pixels
   */
  height?: number;
  /**
   * @remarks
   * 	Resolution DPI.
   * Note?: for vector files this may be indicated as only 72dpi, but it doesn't affect print quality since the vector files are resolution independent.
   */
  dpi?: number;
  /**
   * @remarks
   * 	File processing status?:
   * 'ok' - file was processed successfuly
   * 'waiting' - file is being processed
   * 'failed' - file failed to be processed
   */
  status?: string;
  /**
   * @remarks
   * File creation time
   */
  created?: string;
  /**
   * @remarks
   * Small thumbnail URL
   */
  thumbnail_url?: string;
  /**
   * @remarks
   * Medium preview image URL
   */
  preview_url?: string;
  /**
   * @remarks
   * Show file in the Printfile Library (default true)
   */
  visible?: boolean;
  /**
   * @remarks
   * Array of additional options for this file
   */
  options?: FileOption[];
}
