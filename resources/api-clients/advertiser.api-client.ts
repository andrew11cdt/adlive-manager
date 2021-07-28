import { standardServiceResponse } from "../utils/common.util";
import restClient from "../utils/rest-client";
import MockApiCampaign, { MockCVideos } from "./mock-api";
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
  // ---------------------------- Location & Area API --------------------------

  static async getLocations() {
    return restClient.asyncGet("/advertiser/location")
  }
  static async updateLocation(id, body) {
    return restClient.asyncPut(`/advertiser/location/${id}`, body).catch(err => ({ error: err.response }))
  }

  static async createArea(locationId, body) {
    return restClient.asyncPost(`/advertiser/location/${locationId}/area`, body).catch(err => ({ error: err.response }))
  }

  static async getAreaScreen(areaId) {
    return restClient.asyncGet(`/advertiser/location/area/${areaId}/screen`).catch(err => ({ error: err.response }))
  }
  static async deleteArea(id) {
    return restClient.asyncDelete(`/advertiser/location/area/${id}`).catch(err => ({ error: err.response }))
  }
  static async updateArea(id, body) {
    return restClient.asyncPut(`/advertiser/location/area/${id}`, body).catch(err => ({ error: err.response }))
  }
  // ---------------------------- Sreen API --------------------------

  static async createScreen(areaId, body) {
    return restClient.asyncPost(`/advertiser/location/area/${areaId}/screen`, body).catch(err => ({ error: err.response }))
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
  static async deleteScreen(id) {
    return restClient.asyncDelete(`/advertiser/screen/${id}`).catch(err => ({ error: err.response }))
  }
  // -------------------------------- CAMPAIGNS API -----------------------------------------------

  static async getCampaigns() {
    // return await MockApiCampaign()
    return restClient
      .asyncGet(`/advertiser/campaign/`)
      .then(({ status, data }) => {
        return standardServiceResponse(status, data);
      })
      .catch((err) => {
        return standardServiceResponse(1, null, err);
      });
  }
  static async createCampaign(body) {
    return restClient.asyncPost(`/advertiser/campaign/`, body)
  }
  static async updateCampaign(id, body) {
    return restClient.asyncPut(`/advertiser/campaign/${id}`, body)
  }
  static async getCampaign(id) {
    return restClient.asyncGet(`/advertiser/campaign/${id}`)
  }
  // --------------------------------------- CAMPAIGNS ADS-SET API ----------------------------------------

  static async getCampaignAdsSet(id) {
    return restClient.asyncGet(`/advertiser/campaign/${id}/ads-set`)
  }
  static async getCampaignSchedule(id) {
    return restClient.asyncGet(`/advertiser/campaign/${id}/schedule`)
  }
  static async updateCampaignSchedule(id, body) {
    return restClient.asyncPut(`/advertiser/campaign/${id}/schedule`, body)
  }
  static async getCampaignTargetScreenConditions(id) {
    return restClient.asyncGet(`/advertiser/campaign/${id}/target-screen-conditions`)
  }
  static async updateCampaignTargetScreenConditions(id, body) {
    return restClient.asyncPut(`/advertiser/campaign/${id}/target-screen-conditions`, body)
  }
  static async updateAdsSetMedia(ads_set_id, body) {
    return restClient.asyncPut(`/advertiser/ads-set/${ads_set_id}/media`, body).catch(err => ({ error: err.response }))
  }
  // ------------------------------------------- VIDEOS API ------------------------------------
  static async postVideo(body) {
    return restClient.asyncPost(`/advertiser/video/`, body).catch(err => ({ error: err.response }))
  }
  static async getVideos() {
    // return await MockCVideos()
    return restClient.asyncGet(`/advertiser/video/`).catch(err => ({ error: err.response }))
  }
  // static async getVideo(id) {
  //   return restClient.asyncGet(`/advertiser/video/${id}`).catch(err => ({error: err.response}))
  // }
  static async updateVideo(id, body) {
    return restClient.asyncPut(`/advertiser/video/${id}`, body).catch(err => ({ error: err.response }))
  }
  static async deleteVideo(id) {
    return restClient.asyncDelete(`/advertiser/video/${id}`).catch(err => ({ error: err.response }))
  }
}
