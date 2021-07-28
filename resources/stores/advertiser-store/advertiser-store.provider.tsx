import { useEffect, useState } from "react";
import AdvertiserApiClient from "../../api-clients/advertiser.api-client";
import cookieUtil from "../../utils/cookie.util";
import restClient from "../../utils/rest-client";
import AdvertiserStoreActions from "./advertiser-store.actions";
import AdvertiserStoreContext, {
  AdvertiserStoreContextDataAuth,
} from "./advertiser-store.context";


export default function AdvertiserStoreProvider({
  children
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
  ] = useState(null);

  const [
    videos,
    setVideos,
  ] = useState([]);
  
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

    AdvertiserApiClient.getVideos().then((res: any) => {
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
    <AdvertiserStoreContext.Provider value={{ auth, videos, setVideos }}>
      {children}
    </AdvertiserStoreContext.Provider>
  );
}
