import { useEffect, useMemo, useState } from "react";
import { advertiserHeaderItems } from "./definition";
import AdvertiserHeader from "./header";
import styles from "./styles.module.scss";
import { useSelector, useDispatch } from 'react-redux';
import { getLocationAsync } from "../../pages-components/advertiser/screen/locationSlice";
import { getScreenAsync } from "../../pages-components/advertiser/screen/screenSlice";
import store from "../../stores/advertiser-store/store";
import { getCampaignsAsync } from "../../pages-components/advertiser/campaign/campaignSlice";
import { getCampaignAdsetsAsync } from "../../pages-components/advertiser/campaign/adsetSlice";
import { getScreenConditionsAsync } from "../../pages-components/advertiser/campaign/screenConditionSlice";

export default function AdvertiserLayout() {
  const [currentHeaderItemId, setCurrentHeaderItemId] = useState(
    advertiserHeaderItems[0].id
  );
  const currentHeaderItem = useMemo(() => {
    return advertiserHeaderItems.find(
      (item) => item.id === currentHeaderItemId
    );
  }, [currentHeaderItemId]);

  const switchContent = (itemId: string) => {
    setCurrentHeaderItemId(itemId);
  };

  const ContentComponent = currentHeaderItem?.contentComponent as any;
  const dispatch = useDispatch();
  useEffect(() => {
    initLocationData()
    initCampaignData()
  }, [dispatch])

  async function initLocationData() {
    const res = await dispatch(getLocationAsync());
    if (res['payload']) {
      const locationsData = Object.values(res['payload'])
      dispatch(getScreenAsync(locationsData));
    }
  }
  async function initCampaignData() {
    const res = await dispatch(getCampaignsAsync());
    if (res['payload']) {
      const campaignIds = Object.keys(res['payload'])
      if (campaignIds?.length) {
        campaignIds.map(id => {
          dispatch(getCampaignAdsetsAsync(id))
        })
      }
    }
  }
  return (
    <div className={styles.advertiserLayout}>
      <div className={styles.contentWrapper}>
        {ContentComponent && <ContentComponent />}
      </div>
      <div className={styles.headerWrapper}>
        <AdvertiserHeader
          activedItemId={currentHeaderItemId}
          switchToItem={switchContent}
        />
      </div>
    </div>
  );
}
