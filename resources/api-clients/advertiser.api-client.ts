import { standardServiceResponse } from "../utils/common.util";
import restClient from "../utils/rest-client";

export default class AdvertiserApiClient {
  static async getAdvertiserInformation() {
    return restClient
      .asyncGet("/advertiser/auth/profile")
      .then(({ status, data }) => {
        return standardServiceResponse(status, data);
      })
      .catch((err) => {
        return standardServiceResponse(1, null, err);
      });
  }

  static async signIn(email: string, pwd: string) {
    return restClient
      .asyncPost("/advertiser/auth/sign-in", { email, password: pwd })
      .then(({ status, data }) => {
        return standardServiceResponse(status, data);
      })
      .catch((err) => {
        return standardServiceResponse(1, null, err);
      });
  }

  static async getLocations() {
    return restClient
      .asyncGet("/advertiser/location")
      .then(({ status, data }) => {
        return standardServiceResponse(status, data);
      })
      .catch((err) => {
        return standardServiceResponse(1, null, err);
      });
  }
}
