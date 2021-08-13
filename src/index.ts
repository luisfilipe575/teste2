import Requester from './requester';
import PrintfulCatalog from './endpoints/PrintfulCatalog';
import Products from './endpoints/Products';
import Orders from './endpoints/Orders';
import FileLibrary from './endpoints/FileLibrary';

export default class Printful {
  private endpoint = 'https://api.printful.com/';
  private requester!: Requester;
  /**
   * @remarks
   * Access endpoints from the Printful Catalog API.
   *
   * @see
   * https://www.printful.com/docs/catalog
   */
  PrintfulCatalog!: PrintfulCatalog;
  /**
   * @remarks
   * Access endpoints from the Products API.
   *
   * @see
   * https://www.printful.com/docs/products
   */
  Products!: Products;
  /**
   * @remarks
   * Access endpoints from the Orders API.
   *
   * @see
   * https://www.printful.com/docs/orders
   */
  Orders!: Orders;
  /**
   * @remarks
   * Access endpoints from the FileLibrary API.
   *
   * @see
   * https://www.printful.com/docs/files
   */
  FileLibrary!: FileLibrary;
  /**
   *
   * @remarks
   * Setup an instance of the Printful client.
   *
   * @param apiKey - The API Key from Printful for HTTP authentication.
   *
   * @example
   * const printful = new Printful('my-super-secret-api-key');
   * const products = await printful.PrintfulCatalog.products();
   */
  constructor(apiKey: string) {
    this.requester = new Requester(this.endpoint, apiKey);
    this.initialize();
  }
  private initialize() {
    this.PrintfulCatalog = new PrintfulCatalog(this.requester);
    this.Products = new Products(this.requester);
    this.Orders = new Orders(this.requester);
    this.FileLibrary = new FileLibrary(this.requester);
  }
}
