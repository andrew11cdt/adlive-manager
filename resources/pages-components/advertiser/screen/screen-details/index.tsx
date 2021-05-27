import { useState } from "react";
import { Button, Container, Row } from "react-bootstrap";
import AdvertiserApiClient from "../../../../api-clients/advertiser.api-client";
import { AdButton, IconLinkButton } from "../../../../components/button";
import AdCard, {
  CardDragItem,
  CardInput,
  CardSelect,
} from "../../../../components/card";
import Divider from "../../../../components/divider";
import AdsliveIcon, {
  AdIcon,
  ADSLIVE_ICON_COLOR,
  ADSLIVE_ICON_SIZE,
  ADSLIVE_ICON_TYPE,
  ADSLIVE_ICON_VARIANT,
} from "../../../../components/icon";
import StatusBadge from "../../../../components/status-badge";
import { AdsliveH4 } from "../../../../components/typography";
import { VideoPlayer } from "../../../../components/video-player";
import SubLayout from "../../../sub-layout";
import styles from "./styles.module.scss";

export default function ScreenDetails(props) {
  const { isNew, returnPreLayout, deleteScreen, screenData, locationData } =
    props;
  const [screenState, setScreenState] = useState(screenData);
  const addArea = (area) => {};
  const resetDevice = (area) => {};
  const handleInputChange = (screenKey, event) => {
    const val = event.target.value;
    setScreenState({ ...screenState, ...{ [screenKey]: val } });
    console.log(screenState);
  };
  const handleInputFocusOut = async(key, event) => {
    if (screenData[key] !== screenState[key]) {
      console.log("UPDATE REQUEST"); 
      const res = await AdvertiserApiClient.updateScreen(screenState.id, screenState)
      if (res?.code === 0 && res.data) {
        // screenData[key] = screenState[key];
        setScreenState(res.data)
        console.log(screenState, res);
      }
    }
  };
  const infoArr = [
    {
      title: "screen name",
      key: "deviceName",
    },
    {
      title: "location",
      key: "location",
    },
    {
      title: "type of device",
      key: "deviceType",
    },
    {
      title: "mac address",
      key: "macAddress",
    },
    {
      title: "os",
      key: "deviceOS",
    },
    {
      title: "app version",
      key: "appVersion",
    },
    {
      title: "ip address",
      key: "deviceIp",
    },
  ];
  return (
    <SubLayout
      header={
        <div className={styles.newScreenHeader}>
          <div className={styles.headerItems}>
            <AdsliveIcon
              variant={ADSLIVE_ICON_VARIANT.FULL_LEFT_ARROW}
              className={styles.icon}
              type={ADSLIVE_ICON_TYPE.BOLD}
              size={ADSLIVE_ICON_SIZE.SMALL}
              onClick={returnPreLayout}
            />
            <AdsliveH4>New Screen</AdsliveH4>
            <StatusBadge status={"offline"} />
          </div>
          <AdIcon name="Delete" onClick={deleteScreen} />
        </div>
      }
      content={
        <div style={{ padding: "16px" }}>
          <VideoPlayer data={null} />
          <AdCard
            header={
              <div className={styles.infoHeader}>
                ID: {screenData.id}
                <a className={styles.linkBtn} onClick={resetDevice}>
                  Reset Device
                </a>
              </div>
            }
            body={
              <>
                {infoArr.splice(0, 2).map((e, i) => (
                  <CardInput
                    key={i}
                    title={e.title}
                    value={screenState[e.key]}
                    onInputChange={(event) => handleInputChange(e.key, event)}
                    onFocusOut={(event) => handleInputFocusOut(e.key, event)}
                  />
                ))}
                <CardSelect
                  title="area"
                  initValue={screenState.area?.name}
                  values={locationData.areas?.map((e) => e.name)}
                  onChange={(event) => {
                    console.log(event);
                  }}
                />
                {infoArr.map((e, i) => (
                  <CardInput
                    key={i}
                    title={e.title}
                    value={screenState[e.key]}
                    onInputChange={(event) => handleInputChange(e.key, event)}
                    onFocusOut={(event) => handleInputFocusOut(e.key, event)}
                  />
                ))}
                <AdButton
                  ghost
                  icon={
                    <AdsliveIcon
                      variant={ADSLIVE_ICON_VARIANT.CIRCLE_PLUS}
                      color={ADSLIVE_ICON_COLOR.PRIMARY}
                      type={ADSLIVE_ICON_TYPE.BOLD}
                      size={ADSLIVE_ICON_SIZE.SMALL}
                    />
                  }
                  title="ADD MORE AREA"
                  style={{ padding: "20px" }}
                  onClick={addArea}
                />
              </>
            }
            footer={
              <div
                className={`${styles.status} ${styles[status || "offline"]}`}
              >
                <StatusBadge status="offline" />
              </div>
            }
          />
        </div>
      }
    />
  );
}
