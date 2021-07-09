import { VideoType } from "../../video";

export const CAMPAIGN_STATUSES = ["live", "pause"];
export enum LOAD_KEYS {
  adsSet = "ads-set",
  screen = "screen",
  schedule = "schedule",
}
export interface ChangedData {
  [LOAD_KEYS.adsSet]: any;
  [LOAD_KEYS.screen]: any;
  [LOAD_KEYS.schedule]: any;
}
export const STRATEGIES = [
  {
    key: "SCREEN_MATCH_ALL_RULES",
    desc: "All screen matching all of these rules",
  },
];
export interface AdsSetMedia {
  id: string;
  order: number;
  recId: string;
  withMedia: VideoType;
}
export interface AdsSetType {
  adsSetMediaList: AdsSetMedia[];
  id: string;
  name: string;
  recId: string;
}
export const STATUS_COLOR = { paused: "success", draft: "success", live: "primary" };
export const ActionOnStatus = (status) => {
  let action;
  switch (status) {
    case "draft":
      action = "live";
      break;
    case "live":
      action = "paused";
      break;
    case "paused":
      action = "live";
      break;
    default:
      break;
  }
  return action;
};