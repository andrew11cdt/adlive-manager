import { useEffect, useState } from "react";
import AdvertiserApiClient from "../../../../api-clients/advertiser.api-client";
import AdCard from "../../../../components/card";
import AdsliveLoading from "../../../../components/loading";
import NoData from "../../../../components/no-data";
import StatusBadge from "../../../../components/status-badge";
import styles from "./styles.module.scss";

export default function AdvertiserScreenItems({ id, handleScreenChanged, areaName, selectScreen }) {
  const [screens, setScreens] = useState({});
  // const [loadingData, setLoadingData] = useState({});
  const [screenChanged, setScreenChanged] = handleScreenChanged
  useEffect(() => {
    if (!id) return 
    if (screens[id]) return
    AdvertiserApiClient.getAreaScreen(id).then(res => {
      if (res && res.data) {
        setScreens({...screens, [id]: res.data})
        setScreenChanged(false)
      }
    });
  }, [id, screenChanged]);

  return (
    <div className={styles.advertiserScreens}>
      <div className={styles.screensHeader}>
        <span>{areaName}</span>
        <span>- live screen</span>
        <span>- offline</span>
        <div className={styles.line}></div>
      </div>
      {!screens[id] ? <AdsliveLoading className={styles.loader} /> :
        (
          screens[id].length == 0 ? <NoData /> :
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

