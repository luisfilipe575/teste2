import Requester from '../../requester';

export default class Orders {
  private requester!: Requester;
  constructor(requester: Requester) {
    this.requester = requester;
  }
  // TODO: createOrder, listOrder, estimateCosts
}
