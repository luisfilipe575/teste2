import Requester, { RequesterMethod, RequesterResponse } from '../../requester';
import { ErrorResponse } from '../../types/ErrorResponse';
import File from '../../types/File';

export interface AddFileResponse extends RequesterResponse {
  result: File;
}

const addFile = async (
  requester: Requester,
  body: File
): Promise<AddFileResponse | ErrorResponse> => {
  return await requester.request(`files`, RequesterMethod.POST, {
    body
  });
};

export default addFile;
