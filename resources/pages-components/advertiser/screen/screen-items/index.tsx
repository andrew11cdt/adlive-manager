import { useEffect, useMemo, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import AdvertiserApiClient from "../../../../api-clients/advertiser.api-client";
import AdCard from "../../../../components/card";
import AdsliveLoading from "../../../../components/loading";
import StatusBadge from "../../../../components/status-badge";
import AdvertiserStoreActions from "../../../../stores/advertiser-store/advertiser-store.actions";
import styles from "./styles.module.scss";

export default function AdvertiserScreenItems({ id, areaName, selectScreen }) {
  const [screens, setScreens] = useState(null);
  console.log(id);
  
  useEffect(() => {
    AdvertiserStoreActions.getLocationScreen(id).then(data => {
      setScreens(data)
    });
    // setScreens([
    //   {
    //     recId: "recQCOMt04mgePNYo",
    //     id: 4,
    //     code: "YDZOQNHT",
    //     deviceCode: "12",
    //     deviceType: "SmartTV SamSung",
    //     deviceName: "TV SamSung H2",
    //     deviceIp: "192.168.1.101",
    //     deviceOS: "Android 10",
    //     appVersion: "1.0.0",
    //     createdAt: "2021-05-16T10:13:59.000Z",
    //     status: "offline",
    //   },
    //   {
    //     recId: "recQCOMt04mgePNYo",
    //     id: 4,
    //     code: "YDZOQNHT",
    //     deviceCode: "12",
    //     deviceType: "SmartTV SamSung",
    //     deviceName: "TV SamSung H2",
    //     deviceIp: "192.168.1.101",
    //     deviceOS: "Android 10",
    //     appVersion: "1.0.0",
    //     createdAt: "2021-05-16T10:13:59.000Z",
    //     status: "offline",
    //   },
    //   {
    //     recId: "recQCOMt04mgePNYo",
    //     id: 4,
    //     code: "YDZOQNHT",
    //     deviceCode: "12",
    //     deviceType: "SmartTV SamSung",
    //     deviceName: "TV SamSung H2",
    //     deviceIp: "192.168.1.101",
    //     deviceOS: "Android 10",
    //     appVersion: "1.0.0",
    //     createdAt: "2021-05-16T10:13:59.000Z",
    //     status: "live",
    //   },
    // ]);
  }, [id]);
  const getScreenDetails = async(screen) => {
    // const data = await AdvertiserApiClient.getScreen(id)
    // console.log(data);
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
      {!screens ? <AdsliveLoading style={{ marginTop: '64px'}}/> :
        screens.map((screen, i) => (
          <div key={i} className={styles.screensCard} onClick={() => getScreenDetails(screen)}>
            <AdCard
              clickable
              body={
                <div>
                  <div>{screen.deviceName}</div>
                  <div style={{ color: '#7F838E' }}>{screen.deviceCode}</div>
                  <StatusBadge status={screen.status} />
                </div>
              }
            />
          </div>
        ))}
    </div>
  );
}

