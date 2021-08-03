import { RequesterResponse } from '../../requester';
import FileType from '../../types/FileType';
import OptionType from '../../types/OptionType';
import Product from '../../types/Product';

export interface ProductsResponse extends RequesterResponse {
  result: Product[];
}
