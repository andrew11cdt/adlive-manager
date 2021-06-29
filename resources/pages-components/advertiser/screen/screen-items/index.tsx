import { useEffect, useMemo, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import AdvertiserApiClient from "../../../../api-clients/advertiser.api-client";
import AdCard from "../../../../components/card";
import AdsliveLoading from "../../../../components/loading";
import NoData from "../../../../components/no-data";
import StatusBadge from "../../../../components/status-badge";
import styles from "./styles.module.scss";

export default function AdvertiserScreenItems({ id, areaName, selectScreen }) {
  const [screens, setScreens] = useState(null);
  useEffect(() => {
    setScreens(null)
    if (id) AdvertiserApiClient.getAreaScreen(id).then(res => {
      if (res && res.data) setScreens(res.data)
    });
  }, [id]);
  const getScreenDetails = async(screen) => {
    selectScreen(screen)
  }
  return (
    <div className={styles.advertiserScreens}>
      <div className={styles.screensHeader}>
        <span>{areaName}</span>
        <span>- live screen</span>
        <span>- offline</span>
        <div className={styles.line}></div>
      </div>
      {!screens ? <AdsliveLoading className={styles.loader}/> :
        screens?.map((screen, i) => (
          <div key={i} className={styles.screensCard} onClick={() => getScreenDetails(screen)}>
            <AdCard
              clickable
              body={
                <div>
                  <div>{screen.deviceName}</div>
                  <div style={{ color: '#7F838E' }}>{screen?.deviceCode.slice(0,6)}</div>
                  <StatusBadge status={screen.status} />
                </div>
              }
            />
          </div>
        ))}
      {screens?.length == 0 && <NoData />}
    </div>
  );
}

