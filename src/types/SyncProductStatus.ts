/**
 * @remarks
 * An enum describing a sync product's status. Not an official Printful API type, but described in the
 * Products API documentation.
 *
 * @see
 * https://www.printful.com/docs/products
 */

enum SyncProductStatus {
  SYNCED = 'synced',
  UNSYNCED = 'unsynced',
  ALL = 'ALL'
}

export default SyncProductStatus;
