import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import AdvertiserApiClient from "../../../../api-clients/advertiser.api-client";
import AdCard from "../../../../components/card";
import AdsliveLoading from "../../../../components/loading";
import NoData from "../../../../components/no-data";
import StatusBadge from "../../../../components/status-badge";
import { selectAreaScreens, selectAreaScreensObj } from "../screenSlice";
import styles from "./styles.module.scss";

export default function AdvertiserScreenItems({ id, areaName, selectScreen, isLoading }) {
  const [screens, setScreens] = useState({});
  const [loading, setLoading] = useState(null);
  const areaScreens = useSelector(selectAreaScreensObj)

  useEffect(() => {
    if (!id) return
    setLoading(true)
    if (areaScreens && areaScreens[id]) {
      setScreens({ ...screens, [id]: areaScreens[id] })
      setLoading(false)
    }
  }, [id, areaScreens]);
  
  return (
    <div className={styles.advertiserScreens}>
      <div className={styles.screensHeader}>
        <span>{areaName}</span>
        <span>- live screen</span>
        <span>- offline</span>
        <div className={styles.line}></div>
      </div>
      {loading ? <AdsliveLoading className={styles.loader} /> :
        (
          screens[id]?.length == 0  && !isLoading? <NoData /> :
            screens[id]?.map((screen, i) => (
              <div key={i} className={styles.screensCard} onClick={() => selectScreen(screen)}>
                <AdCard
                  clickable
                  body={
                    <div>
                      <div>{screen.deviceName}</div>
                      <div style={{ color: '#7F838E' }}>{screen?.deviceCode.slice(0, 6)}</div>
                      <StatusBadge status={screen.status} />
                    </div>
                  }
                />
              </div>
            ))
        )}
    </div>
  );
}

