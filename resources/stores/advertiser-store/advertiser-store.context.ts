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

export type AdvertiserStoreContextDataLocations = {
  loading?: boolean;
  locations?: AdvertiserStoreContextDataLocation[];
};

export type AdvertiserStoreContextData = {
  auth?: AdvertiserStoreContextDataAuth;
  locations?: AdvertiserStoreContextDataLocations;
};

const AdvertiserStoreContext = createContext<AdvertiserStoreContextData>({});
export default AdvertiserStoreContext;
