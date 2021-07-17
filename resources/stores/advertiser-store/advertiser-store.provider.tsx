import { useEffect, useState } from "react";
import AdvertiserApiClient from "../../api-clients/advertiser.api-client";
import { API_CODE } from "../../definitions/enums";
import cookieUtil from "../../utils/cookie.util";
import restClient from "../../utils/rest-client";
import AdvertiserStoreActions from "./advertiser-store.actions";
import AdvertiserStoreContext, {
  AdvertiserStoreContextDataAuth,
  AdvertiserStoreContextDataLocation,
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
  ] = useState(null);

  const [
    videos,
    setVideos,
  ] = useState([]);
  
  const [campaigns, setCampaigns] = useState(null);
  
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

    loadLocations()
    loadCampaigns()
    
    AdvertiserApiClient.getVideos().then((res: any) => {
      if (res && res.data) setVideos(res.data)
    });
    
  }, [auth?.token]);
  function compareTime(time1, time2) {
    return Date.parse(time1) < Date.parse(time2) ? 1 : -1
  }
  async function loadCampaigns() {
    const res:any = await AdvertiserApiClient.getCampaigns()
    if (res?.data) {
      res.data = res.data.sort((pre, cur) => compareTime(pre.updatedAt, cur.updatedAt))
      setCampaigns(res.data)
    }
    return res.data
  }
  async function loadLocations() {
    const res:any = await AdvertiserApiClient.getLocations()
    if (res?.data) {
      res.data.map(e => {
        if (e.areas) {
          e.areas = e.areas.sort((pre, cur) => pre.order && cur.order && pre.order > cur.order ? 1 : -1)
        }
        return e
      })
      setLocations(res.data)
    }
    return res.data
  }
  async function loadAllScreen(areaIds) {
    return new Promise(async (resolve, reject) => {
      let allScreensData = [] // [areaId] : screen[]
      // const allAreaData = locations?.reduce((res, e) => res = [...res, ...(e.areas || [])], [])
      areaIds.map(async (id, index) => {
        const res = await AdvertiserApiClient.getAreaScreen(id)
        if (res.code == 0) allScreensData = [...allScreensData,...res.data]
        else reject(false)
        if (index + 1 === areaIds.length) resolve(allScreensData)
      })
    })
  }
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
    <AdvertiserStoreContext.Provider value={{ auth, locations, loadLocations, campaigns, setCampaigns, loadCampaigns, videos, setVideos, loadAllScreen }}>
      {children}
    </AdvertiserStoreContext.Provider>
  );
}
