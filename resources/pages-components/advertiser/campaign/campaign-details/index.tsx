import { useState } from "react";
import AdvertiserApiClient from "../../../../api-clients/advertiser.api-client";
import { AdButton } from "../../../../components/button";
import AdCard, { CardInput, CardSelect } from "../../../../components/card";
import Divider from "../../../../components/divider";
import AdsliveIcon, {
  AdIcon,
  ADSLIVE_ICON_COLOR,
  ADSLIVE_ICON_SIZE,
  ADSLIVE_ICON_TYPE,
  ADSLIVE_ICON_VARIANT,
} from "../../../../components/icon";
import StatusBadge from "../../../../components/status-badge";
import {
  AdsliveH4,
  MutedText,
  InfoText,
} from "../../../../components/typography";
import SubLayout from "../../../sub-layout";
import styles from "./styles.module.scss";

export default function CampaignDetails(props) {
  const { returnPreLayout, campaign } = props;
  const { videos } = campaign || {};
  const [screenState, setScreenState] = useState(campaign);
  const [isPaused, setClickPause] = useState(null);
  const [setting, openSetting] = useState({});
  const addArea = (area) => {};
  const resetDevice = (area) => {};
  const handleInputChange = (screenKey, event) => {
    const val = event.target.value;
    setScreenState({ ...screenState, ...{ [screenKey]: val } });
  };
  const handleInputFocusOut = async (key, event) => {
    if (campaign[key] !== screenState[key]) {
      console.log("UPDATE REQUEST");
      const body = { [key]: screenState[key] };
      const res = await AdvertiserApiClient.updateScreen(screenState.id, body);
      if (res?.code === 0 && res.data) {
        // screenData[key] = screenState[key];
        setScreenState(res.data);
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
  const CampainHeader = (title) => (
    <div
      className={`${styles.campaignHeader} ${
        setting[title] ? styles.show : null
      }`}
    >
      <AdsliveH4>{title}</AdsliveH4>
      {!setting[title] ? (
        <a
          className={styles.editSetting}
          onClick={() => setSetting(title, true)}
        >
          <AdIcon name="pen" w="16px" mr="2px" />
          Edit Setting
        </a>
      ) : (
        <AdButton title={<MutedText>Done</MutedText>} onClick={() => setSetting(title, false)} />
      )}
    </div>
  );
  const setSetting = (title, value) => {
    const s = { ...setting, ...{ [title]: value } };
    openSetting(s);
  }
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
          <AdButton
            style={{ padding: "2px 6px" }}
            variant="success"
            icon={<AdIcon name="pause" w="16px" mr="2px" />}
            title="Pause"
            onClick={() => setClickPause(true)}
          />
        </div>
      }
      content={
        <div className={styles.campaignContainer}>
          <AdCard
            fullView
            header={CampainHeader("Ad set")}
            body={
              <div className={styles.cardBody}>
                <div className={styles.info}>
                  <span>
                    <InfoText>2</InfoText> videos
                  </span>
                  <span>
                    <InfoText>240</InfoText> played
                  </span>
                </div>
                <Divider style={{ padding: 0 }} />
                {setting["Ad set"] ? (
                  <>
                    
                  </>
                ) : (
                <div>
                  {videos.map((video) => (
                    <span className={styles.icon}>
                      <AdIcon url={video.photoUrl} r="2px" w="24px" h="24px" />
                    </span>
                  ))}
                  <MutedText>{`${videos.length} videos`}</MutedText>
                </div>
                )}
              </div>
            }
          />
          <AdCard
            fullView
            header={CampainHeader("Screen")}
            body={
              <div className={styles.cardBody}>
                <div className={styles.info}>
                  <span>
                    <InfoText>2</InfoText> videos
                  </span>
                  <span>
                    <InfoText>240</InfoText> played
                  </span>
                </div>
              </div>
            }
          />
          <AdCard
            fullView
            header={CampainHeader("Schedule")}
            body={
              <div className={styles.cardBody}>
                <div className={styles.info}>
                  <span>
                    <InfoText>2</InfoText> videos
                  </span>
                  <span>
                    <InfoText>240</InfoText> played
                  </span>
                </div>
              </div>
            }
          />
        </div>
      }
    />
  );
}
