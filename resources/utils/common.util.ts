import { AxiosError } from "axios";
import { API_CODE } from "../definitions/enums";
import { ResponseErrorData } from "../definitions/types";
import moment from 'moment';

export const redirectTo = (url: string) => {
  typeof window !== "undefined" && ((window as any).location = url);
};

export const parseTitle = (str: string) => {
  return str ? upFirstChar(removeCamel(removeSnake(str))) : str
};

export const upFirstChar = (str: string) => {
  return str ? str[0].toUpperCase() + str.slice(1) : str
};

export const removeCamel = (str: string) => {
  return str ? str.replace(/[A-Z]/g, letter => `${letter.toLowerCase()}`) : str
};
export const removeSnake = (str: string) => {
  return str ? str.replace(/_/g, ' ') : str
};
interface TimeOptions {
  showHours: boolean
}
export const displayTime = (time: string, opt?: TimeOptions) => {
  const { showHours } = opt || {}
  return moment(time).format(`DD/MMM/YYYY ${showHours ? "HH:MM": ""}`)
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
