import Requester, { RequesterMethod } from '../../requester';
import { ErrorResponse } from '../../types/ErrorResponse';
import { ProductsResponse } from './products';

export default class PrintfulCatalog {
  private requester!: Requester;
  constructor(requester: Requester) {
    this.requester = requester;
  }
  async products(): Promise<ProductsResponse | ErrorResponse> {
    return await this.requester.request('products', RequesterMethod.GET, null);
  }
}
