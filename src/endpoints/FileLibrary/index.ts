import { ErrorResponse } from './../../types/ErrorResponse';
import Requester from '../../requester';
import addFile, { AddFileResponse } from './addFile';
import getFileInformation, {
  GetFileInformationResponse
} from './getFileInformation';

export default class FileLibrary {
  private requester!: Requester;
  constructor(requester: Requester) {
    this.requester = requester;
  }
  /**
   * @remarks
   * Adds a new File to the library by providing URL of the file.
   * If a file with identical URL already exists, then the original file is returned.
   * If a file does not exist, a new file is created.
   *
   * @param body - File data
   *
   * @see
   * https://www.printful.com/docs/files#actionCreate
   */
  async addFile(body: File): Promise<AddFileResponse | ErrorResponse> {
    return await addFile(this.requester, body);
  }
  /**
   * @remarks
   * Returns information about the given file
   *
   * @param id - File ID
   *
   * @see
   * https://www.printful.com/docs/files#actionGet
   */
  async getFileInformation(
    id: number
  ): Promise<GetFileInformationResponse | ErrorResponse> {
    return await getFileInformation(this.requester, id);
  }
}
