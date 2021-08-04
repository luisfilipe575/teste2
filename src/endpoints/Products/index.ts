import Requester from '../../requester';
import { ErrorResponse } from '../../types/ErrorResponse';
import listSyncProducts, { ListSyncProductsResponse } from './listSyncProducts';

export default class Products {
  private requester!: Requester;
  constructor(requester: Requester) {
    this.requester = requester;
  }
  async listSyncProducts(
    status: string,
    search: string,
    offset: number,
    limit: number
  ): Promise<ListSyncProductsResponse | ErrorResponse> {
    return await listSyncProducts(
      this.requester,
      status,
      search,
      offset,
      limit
    );
  }
}
