import { useState } from "react";
import AdvertiserApiClient from "../../../../api-clients/advertiser.api-client";
import { AdButton, IconButton } from "../../../../components/button";
import AdCard, {
  CardInput,
  CardSelect,
} from "../../../../components/card";
import AdsliveIcon, {
  AdIcon,
  ADSLIVE_ICON_COLOR,
  ADSLIVE_ICON_SIZE,
  ADSLIVE_ICON_TYPE,
  ADSLIVE_ICON_VARIANT,
} from "../../../../components/icon";
import StatusBadge from "../../../../components/status-badge";
import { AdsliveH4 } from "../../../../components/typography";
import SubLayout from "../../../sub-layout";
import styles from "./styles.module.scss";

export default function CampaignDetails(props) {
  const { returnPreLayout, deleteScreen, campaign } = props;
  const [screenState, setScreenState] = useState(campaign);
  const [isPaused, setClickPause] = useState(null);
  const addArea = (area) => {};
  const resetDevice = (area) => {};
  const handleInputChange = (screenKey, event) => {
    const val = event.target.value;
    setScreenState({ ...screenState, ...{ [screenKey]: val } });
    console.log(screenState);
  };
  const handleInputFocusOut = async(key, event) => {
    if (campaign[key] !== screenState[key]) {
      console.log("UPDATE REQUEST"); 
      const body = {[key]: screenState[key]}
      const res = await AdvertiserApiClient.updateScreen(screenState.id, body)
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
      disabled: true,
    },
    {
      title: "type of device",
      key: "deviceType",
      disabled: true,
    },
    {
      title: "mac address",
      key: "macAddress",
      disabled: true,
    },
    {
      title: "os",
      key: "deviceOS",
      disabled: true,
    },
    {
      title: "app version",
      key: "appVersion",
      disabled: true,
    },
    {
      title: "ip address",
      key: "deviceIp",
      disabled: true,
    },
  ];
  return (
    <SubLayout
      header={
        <div className={styles.header}>
          <div className={styles.headerItems}>
            <AdsliveIcon
              variant={ADSLIVE_ICON_VARIANT.FULL_LEFT_ARROW}
              className={styles.icon}
              type={ADSLIVE_ICON_TYPE.BOLD}
              size={ADSLIVE_ICON_SIZE.SMALL}
              onClick={returnPreLayout}
            />
            <AdsliveH4>{campaign.title}</AdsliveH4>
            <StatusBadge status={campaign.status} />
          </div>
          <AdButton variant="success" icon={<AdIcon name="pause" w="16px" />} title="pause" onClick={()=> setClickPause(true)}/>
        </div>
      }
      content={
        <div style={{ padding: "16px" }}>
          <AdCard
            body={
              <>
              
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
