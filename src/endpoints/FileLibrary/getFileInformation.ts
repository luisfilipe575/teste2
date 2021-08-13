import Requester, { RequesterMethod, RequesterResponse } from '../../requester';
import { ErrorResponse } from '../../types/ErrorResponse';
import File from '../../types/File';

export interface GetFileInformationResponse extends RequesterResponse {
  result: File;
}

const getFileInformation = async (
  requester: Requester,
  id: number
): Promise<GetFileInformationResponse | ErrorResponse> => {
  return await requester.request(`files/${id}`, RequesterMethod.GET);
};

export default getFileInformation;
