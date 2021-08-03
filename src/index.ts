import Requester from './requester';
import PrintfulCatalog from './endpoints/PrintfulCatalog';

export default class Printful {
  private endpoint = 'https://api.printful.com/';
  private apiKey!: string;
  private requester!: Requester;
  /**
   * @remarks
   * Access endpoints from the Printful Catalog API.
   */
  PrintfulCatalog!: PrintfulCatalog;
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
    this.apiKey = apiKey;
    this.requester = new Requester(this.endpoint, apiKey);
    this.initialize();
  }
  private initialize() {
    this.PrintfulCatalog = new PrintfulCatalog(this.requester);
  }
}
