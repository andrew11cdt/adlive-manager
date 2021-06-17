import { useEffect, useState } from "react";
import AdvertiserApiClient from "../../../../api-clients/advertiser.api-client";
import { AdButton } from "../../../../components/button";
import AdCard, {
  CardDragItem,
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
import { displayTime, parseTitle } from "../../../../utils/common.util";
import SelectVideosModal from "../selectVideosModal";
export const CAMPAIGN_STATUSES = ["live", "pause"];
enum SETTING_ITEMS {
  adsSet = "ads-set",
  screen = "screen",
  schedule = "schedule",
}
export default function CampaignDetails(props) {
  const { returnPreLayout, campaign } = props;
  const { videos, name, beginTime, endTime } = campaign || {};
  const [status, setStatus] = useState(campaign?.status);
  const [adsSet, setAdsSet] = useState(null);
  const [setting, openSetting] = useState({});
  const [openVideoLib, setOpenVideoLib] = useState(null);
  const [isChangingStatus, setChangeStatus] = useState(null);
  const [schedule, setSchedule] = useState({ beginTime, endTime });
  const handleUpdateCampaignStatus = async (status) => {
    setChangeStatus(true);
    const res: any = await AdvertiserApiClient.updateCampaign(campaign?.id, {
      status,
    });
    if (res.status) setStatus(status);
    setChangeStatus(false);
  };
  const CampainHeader = (title, settingKey) => (
    <div className={styles.campaignHeader}>
      <AdsliveH4>{title}</AdsliveH4>
      {!setting[settingKey] ? (
        <a
          className={styles.editSetting}
          onClick={() => setSetting(settingKey, true)}
        >
          <AdIcon name="pen" w="16px" mr="2px" />
          Edit Setting
        </a>
      ) : (
        <AdButton
          style={{ padding: "0 4px" }}
          title={<MutedText>Done</MutedText>}
          onClick={() => handleUpdate(settingKey)}
        />
      )}
    </div>
  );
  const handleUpdate = (settingKey) => {
    setSetting(settingKey, false);
  };
  const setSetting = (title, value) => {
    const s = { ...setting, ...{ [title]: value } };
    openSetting(s);
  };
  const updateAdsSet = () => {
    setOpenVideoLib(false)
  };
  const actionOnStatus = () => {
    let action;
    switch (status) {
      case "draft":
        action = "live";
        break;
      case "live":
        action = "paused";
        break;
      case "paused":
        action = "live";
        break;
      default:
        break;
    }
    return action;
  };
  const STATUS_COLOR = { paused: "success", draft: "success", live: "primary" };
  useEffect(() => {
    fetchAds();
  }, [campaign]);
  const fetchAds = async () => {
    if (!campaign) return;
    const res: any = await AdvertiserApiClient.getCampaignAdsSet(campaign.id);
    if (res && res.data) setAdsSet(res.data[0]);
  };
  return (
    <>
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
              <AdsliveH4>{campaign?.name}</AdsliveH4>
              <StatusBadge status={status} />
            </div>
            <AdButton
              icon={<AdIcon name={actionOnStatus()} />}
              title={parseTitle(actionOnStatus())}
              onClick={() => handleUpdateCampaignStatus(actionOnStatus())}
              variant={STATUS_COLOR[status]}
              isLoading={isChangingStatus}
            />
          </div>
        }
        content={
          <div className={styles.campaignContainer}>
            <AdCard
              loading={!adsSet}
              fullView
              toggle
              toggled={setting[SETTING_ITEMS.adsSet]}
              header={CampainHeader(adsSet?.name, SETTING_ITEMS.adsSet)}
              body={
                <div className={`${styles.cardBody}`}>
                  <div className={styles.info}>
                    <span>
                      <InfoText size="lg">{adsSet?.adsSetMediaList.length || '-'}</InfoText>{" "}
                      videos
                    </span>
                    <span>
                      <InfoText size="lg">-</InfoText> played
                    </span>
                  </div>
                  <Divider style={{ padding: 0 }} />
                  {setting[SETTING_ITEMS.adsSet] ? (
                    <>
                      {adsSet?.adsSetMediaList.map(({withMedia, order, recId}, i) => {
                        return (
                          <div key={i}>
                            <CardDragItem onDelete={null} onDrag={null}>
                              {/* <AdIcon
                                url={withMedia.url}
                                r="2px"
                                w="24px"
                                mr="8px"
                              /> */}
                              <span>{withMedia.name}</span>
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
                        onClick={() => setOpenVideoLib(true)}
                      />
                    </>
                  ) : (
                    <div>
                      {videos?.map((video) => (
                        <span key={video.name} className={styles.icon}>
                          <AdIcon url={video.photoUrl} r="2px" w="24px" />
                        </span>
                      ))}
                      <MutedText>{`${videos?.length || 0} videos`}</MutedText>
                    </div>
                  )}
                </div>
              }
            />
            <AdCard
              fullView
              toggle
              toggled={setting[SETTING_ITEMS.screen]}
              header={CampainHeader("Screen", SETTING_ITEMS.screen)}
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
                  {setting[SETTING_ITEMS.screen] && (
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
                        onClick={() => null}
                      />
                    </>
                  )}
                </div>
              }
            />
            <AdCard
              fullView
              toggle
              toggled={setting[SETTING_ITEMS.schedule]}
              header={CampainHeader("Schedule", SETTING_ITEMS.schedule)}
              body={
                <div className={styles.cardBody}>
                  <div className={styles.info}>
                    <span>
                      Start{" "}
                      <InfoText>{displayTime(schedule?.beginTime)}</InfoText>
                    </span>
                    <span>
                      End <InfoText>{displayTime(schedule?.endTime)}</InfoText>
                    </span>
                  </div>
                  {setting[SETTING_ITEMS.schedule] && (
                    <>
                      <Divider />
                      <CardSelectTime
                        title="Start at"
                        initValue={schedule?.beginTime}
                        values={[]}
                        onChange={(change) => {
                          setSchedule({ beginTime: change, endTime });
                          console.log({ schedule });
                        }}
                      />
                      <CardSelectTime
                        title="End at"
                        initValue={schedule?.endTime}
                        values={[]}
                        onChange={(change) => {
                          setSchedule({ beginTime, endTime: change });
                          console.log({ schedule });
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
      <SelectVideosModal handleShow={{openVideoLib, setOpenVideoLib}} adsSet={adsSet} onChange={fetchAds()}/>
    </>
  );
}
