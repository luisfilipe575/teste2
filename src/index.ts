import Requester from './requester';
import PrintfulCatalog from './endpoints/PrintfulCatalog';
import Products from './endpoints/Products';

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
  }
}
