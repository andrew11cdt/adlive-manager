import { createContext } from "react";

export type AdvertiserStoreContextDataAuth = {
  token?: string;
  user?: any;
  isGettingToken?: boolean;
  isAuthenticating?: boolean;
  isAuthenticated?: boolean;
};

export type AdvertiserStoreContextDataLocation = {
  areas?: any[];
  [field: string]: any;
};

export type AdvertiserStoreContextDataScreen = {
  id: string,
  code: string,
  name: string,
  deviceCode: string,
  deviceType: string,
  deviceName: string,
  deviceIp: string,
  deviceOS: string,
  appVersion: string,
  createdAt: string
};

export type AdvertiserStoreContextDataLocations = {
  loading?: boolean;
  locations?: AdvertiserStoreContextDataLocation[];
};

export type AdvertiserStoreContextData = {
  auth?: AdvertiserStoreContextDataAuth;
  locations?: AdvertiserStoreContextDataLocations;
  campaigns: any;
  setCampaigns: any;
  loadCampaigns: any;
  videos: any;
  setVideos: any;
};

const AdvertiserStoreContext = createContext<AdvertiserStoreContextData>(null);
export default AdvertiserStoreContext;
