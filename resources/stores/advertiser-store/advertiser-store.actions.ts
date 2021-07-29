import AdvertiserApiClient from "../../api-clients/advertiser.api-client";
import { API_CODE } from "../../definitions/enums";
import { redirectTo } from "../../utils/common.util";
import cookieUtil from "../../utils/cookie.util";

export default class AdvertiserStoreActions {
  static async getAdvertiserInformation() {
    return AdvertiserApiClient.getAdvertiserInformation().then(
      ({ code, data }) => {
        return data || null;
      }
    );
  }

  static async signIn(email: string, pwd: string) {
    return AdvertiserApiClient.signIn(email, pwd).then(({ code, data }) => {
      if (code === API_CODE.SUCCESS && data?.token) {
        cookieUtil.updateCookie("adsl-adver-at", data?.token);

        return {
          isDone: true,
        };
      }

      return {
        isDone: false,
        reason: data?.errorMessage,
      };
    });
  }

  static signOut() {
    cookieUtil.deleteCookie("adsl-adver-at");
    redirectTo("/advertiser/sign-in");
  }

}
