import { useState } from "react";
import AdvertiserApiClient from "../../../../api-clients/advertiser.api-client";
import { AdButton } from "../../../../components/button";
import AdCard, {
  CardDragItem,
  CardInput,
  CardSelect,
  CardSelectTime,
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
import {
  AdsliveH4,
  MutedText,
  InfoText,
} from "../../../../components/typography";
import SubLayout from "../../../sub-layout";
import styles from "./styles.module.scss";
import { displayTime } from "../../../../utils/common.util";

export default function CampaignDetails(props) {
  const { returnPreLayout, campaign } = props;
  const { videos, screens, from, to } = campaign || {};
  const [screenState, setScreenState] = useState(campaign);
  const [isPaused, setClickPause] = useState(null);
  const [setting, openSetting] = useState({});
  const [schedule, setSchedule] = useState({from, to});
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
    <div className={styles.campaignHeader}>
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
        <AdButton
          style={{ padding: "0 4px" }}
          title={<MutedText>Done</MutedText>}
          onClick={() => handleUpdate(title)}
        />
      )}
    </div>
  );
  const handleUpdate = (title) => {
    setSetting(title, false)
    if (title === 'Schedule') {
      console.log('updated: ', schedule);
    }
  }
  const setSetting = (title, value) => {
    const s = { ...setting, ...{ [title]: value } };
    openSetting(s);
  };
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
            toggle
            toggled={setting["Ad set"]}
            header={CampainHeader("Ad set")}
            body={
              <div className={`${styles.cardBody}`}>
                <div className={styles.info}>
                  <span>
                    <InfoText size="lg">2</InfoText> videos
                  </span>
                  <span>
                    <InfoText size="lg">240</InfoText> played
                  </span>
                </div>
                <Divider style={{ padding: 0 }} />
                {setting["Ad set"] ? (
                  <>
                    {videos &&
                      videos.map((video, i) => {
                        return (
                          <div key={i}>
                            <CardDragItem onDelete={null} onDrag={null}>
                              <AdIcon
                                url={video.photoUrl}
                                r="2px"
                                w="24px"
                                mr="8px"
                              />
                              <span>{video.name}</span>
                            </CardDragItem>
                            <Divider />
                          </div>
                        );
                      })}
                    <AdButton
                      cardBtn
                      ghost
                      icon={<AdIcon name="circle-bold" w="24px" />}
                      title="ADD MORE VIDEOS"
                      style={{ padding: "20px" }}
                      onClick={addArea}
                    />
                  </>
                ) : (
                  <div>
                    {videos.map((video) => (
                      <span key={video.name} className={styles.icon}>
                        <AdIcon url={video.photoUrl} r="2px" w="24px" />
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
            toggle
            toggled={setting["Screen"]}
            header={CampainHeader("Screen")}
            body={
              <div className={styles.cardBody}>
                <div className={styles.info}>
                  <span>
                    <InfoText size="lg">13</InfoText> Screens
                  </span>
                  <span>
                    <InfoText size="lg">1</InfoText> Location
                  </span>
                </div>
                {setting["Screen"] && (
                  <>
                    <Divider />
                    <CardSelect
                      title="Choose SCREEN enters the campaign"
                      initValue="All screen matching all of these rules"
                      values={[]}
                      onChange={(event) => {
                        console.log(event);
                      }}
                    />
                    <CardSelect
                      title="Location"
                      initValue="Multi choice"
                      values={[]}
                      onChange={(event) => {
                        console.log(event);
                      }}
                    />
                    <CardSelect
                      title="Area"
                      initValue="Muti choice"
                      values={[]}
                      onChange={(event) => {
                        console.log(event);
                      }}
                    />
                    <CardSelect
                      title="Free time"
                      initValue="has any value"
                      values={[]}
                      onChange={(event) => {
                        console.log(event);
                      }}
                    />
                    <AdButton
                      cardBtn
                      ghost
                      icon={<AdIcon name="circle-bold" w="24px" />}
                      title="ADD MORE RULES"
                      style={{ padding: "20px" }}
                      onClick={addArea}
                    />
                  </>
                )}
              </div>
            }
          />
          <AdCard
            fullView
            toggle
            toggled={setting["Schedule"]}
            header={CampainHeader("Schedule")}
            body={
              <div className={styles.cardBody}>
                <div className={styles.info}>
                  <span>
                    Start <InfoText>{displayTime(schedule.from)}</InfoText>
                  </span>
                  <span>
                    End <InfoText>{displayTime(schedule.to)}</InfoText>
                  </span>
                </div>
              {setting["Schedule"] && (
                <>
                <Divider />
                <CardSelectTime
                  title="Start at"
                  initValue={schedule.from}
                  values={[]}
                  onChange={(change) => {
                    setSchedule({from: change, to})
                    console.log({schedule});
                    
                  }}
                />
                <CardSelectTime
                  title="End at"
                  initValue={schedule.to}
                  values={[]}
                  onChange={(change) => {
                    setSchedule({from, to: change})
                    console.log({schedule});
                  }}
                />
                </>
              )}
              </div>
            }
          />
        </div>
      }
    />
  );
}
