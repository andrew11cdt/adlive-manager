import { AxiosError } from "axios";
import { API_CODE } from "../definitions/enums";
import { ResponseErrorData } from "../definitions/types";

export const redirectTo = (url: string) => {
  typeof window !== "undefined" && ((window as any).location = url);
};

export const standardServiceResponse = (
  statusCode: 200 | 201 | 301 | 400 | 401 | 403 | 500 | number,
  data: any,
  error?: AxiosError<any>
): {
  code: API_CODE;
  data: ResponseErrorData | any;
} => {
  if (statusCode === 200 || statusCode == 201) {
    return {
      code: API_CODE.SUCCESS,
      data,
    };
  }

  if (error) {
    return {
      code: API_CODE.ERROR,
      data: {
        errorCode: error?.response?.data?.error?.code,
        errorStatus: error?.response?.data?.error?.status,
        errorMessage: error?.response?.data?.error?.message,
      },
    };
  }
};
