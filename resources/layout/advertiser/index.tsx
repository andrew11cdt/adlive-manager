import { useEffect, useMemo, useState } from "react";
import { advertiserHeaderItems } from "./definition";
import AdvertiserHeader from "./header";
import styles from "./styles.module.scss";
import { useSelector, useDispatch } from 'react-redux';
import { getLocationAsync } from "../../pages-components/advertiser/screen/locationSlice";
import { getScreenAsync } from "../../pages-components/advertiser/screen/screenSlice";
import store from "../../stores/advertiser-store/store";

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
  
  initData()

  async function initData() {
    const res = await dispatch(getLocationAsync());
    console.log({res});
    if (res['payload']) {
      const locationsData = Object.values(res['payload'])
      dispatch(getScreenAsync(locationsData));
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
