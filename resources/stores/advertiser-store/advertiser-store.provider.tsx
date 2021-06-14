import { useEffect, useState } from "react";
import AdvertiserApiClient from "../../api-clients/advertiser.api-client";
import { API_CODE } from "../../definitions/enums";
import cookieUtil from "../../utils/cookie.util";
import restClient from "../../utils/rest-client";
import AdvertiserStoreActions from "./advertiser-store.actions";
import AdvertiserStoreContext, {
  AdvertiserStoreContextDataAuth,
  AdvertiserStoreContextDataLocation,
  AdvertiserStoreContextDataLocations,
} from "./advertiser-store.context";

export default function AdvertiserStoreProvider({
  children,
}: {
  children?: any;
}) {
  const [auth, setAuth] = useState<AdvertiserStoreContextDataAuth>({
    isAuthenticated: false,
    token: null,
    user: null,
    isAuthenticating: true,
    isGettingToken: true,
  });
  const [
    locations,
    setLocations,
  ] = useState<AdvertiserStoreContextDataLocations>({
    loading: true,
    locations: [],
  });

  const [
    videos,
    setVideos,
  ] = useState([]);

  const [campaigns, setCampaign] = useState(null);

  useEffect(() => {
    if (!auth?.token) {
      return;
    }

    restClient.setToken(auth?.token);

    AdvertiserStoreActions.getAdvertiserInformation().then((info) => {
      if (info) {
        setAuth((previous) => ({
          ...previous,
          user: info,
          isAuthenticated: true,
          isAuthenticating: false,
        }));
      } else {
        setAuth((previous) => ({
          ...previous,
          user: null,
          isAuthenticated: false,
          isAuthenticating: false,
        }));
      }
    });

    AdvertiserStoreActions.getLocations().then((data) => {
      setLocations((previous) => ({
        ...previous,
        locations: data || [],
        loading: false,
      }));
    });
    
    AdvertiserApiClient.getCampaigns().then(data => {
      if (data) setCampaign(data)
    });
    
    AdvertiserApiClient.getVideos().then((res: any) => {
      console.log(res);
      if (res && res.data) setVideos(res.data)
    });
    
  }, [auth?.token]);

  useEffect(() => {
    const authToken = cookieUtil.getCookie("adsl-adver-at") || null;

    if (authToken) {
      setAuth((previous) => ({
        ...previous,
        token: authToken,
        isGettingToken: false,
      }));
    } else {
      setAuth((previous) => ({
        ...previous,
        token: null,
        isAuthenticated: false,
        isGettingToken: false,
        isAuthenticating: false,
      }));
    }
  }, []);

  return (
    <AdvertiserStoreContext.Provider value={{ auth, locations, campaigns, videos, setVideos }}>
      {children}
    </AdvertiserStoreContext.Provider>
  );
}
