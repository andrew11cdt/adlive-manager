import { standardServiceResponse } from "../utils/common.util";
import restClient from "../utils/rest-client";
import MockApiCampaign from "./mock-api";

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

  static async getLocationScreen(areaId) {
    return restClient
      .asyncGet(`/advertiser/location/area/${areaId}/screen`)
      .then(({ status, data }) => {
        return standardServiceResponse(status, data);
      })
      .catch((err) => {
        return standardServiceResponse(1, null, err);
      });
  }

  static async getScreen(id) {
    return restClient
      .asyncGet(`/advertiser/screen/${id}`)
      .then(({ status, data }) => {
        return standardServiceResponse(status, data);
      })
      .catch((err) => {
        return standardServiceResponse(1, null, err);
      });
  }
  static async updateScreen(id, body) {
    return restClient
      .asyncPut(`/advertiser/screen/${id}`, body)
      .then(({ status, data }) => {
        return standardServiceResponse(status, data);
      })
      .catch((err) => {
        return standardServiceResponse(1, null, err);
      });
  }

  static async getCampaigns() {
    return await MockApiCampaign()
    return restClient
      .asyncPut(`/advertiser/campaigns/`)
      .then(({ status, data }) => {
        return standardServiceResponse(status, data);
      })
      .catch((err) => {
        return standardServiceResponse(1, null, err);
      });
  }
}
