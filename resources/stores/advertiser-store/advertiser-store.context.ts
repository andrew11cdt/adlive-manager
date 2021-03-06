import { createContext } from "react";

export type AdvertiserStoreContextDataAuth = {
  token?: string;
  user?: any;
  isGettingToken?: boolean;
  isAuthenticating?: boolean;
  isAuthenticated?: boolean;
};

export type AdvertiserStoreContextDataLocation = {
  areas?: Area[];
  id: string,
  name: string,
  recId: string,
};
export type Area = {
  id: string,
  name: string,
  recId: string,
  order: number
}
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

// export type AdvertiserStoreContextDataLocations = {
//   loading?: boolean;
//   locations?: ;
// };

export type AdvertiserStoreContextData = {
  auth?: AdvertiserStoreContextDataAuth;
  videos: any;
  setVideos: any;
};

const AdvertiserStoreContext = createContext<AdvertiserStoreContextData>(null);
export default AdvertiserStoreContext;
