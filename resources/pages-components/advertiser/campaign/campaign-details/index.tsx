import { useEffect, useState } from "react";
import AdvertiserApiClient from "../../../../api-clients/advertiser.api-client";
import { AdButton } from "../../../../components/button";
import AdCard, {
  CardDragItem,
  CardDragWrapper,
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
import { VideoType } from "../../video";
import AdsliveLoading from "../../../../components/loading";
import { Toaster } from "../../../../components/toaster";
import useAdvertiserStore from "../../../../stores/advertiser-store/advertiser-store.hook";
export const CAMPAIGN_STATUSES = ["live", "pause"];
enum LOAD_KEYS {
  adsSet = "ads-set",
  screen = "screen",
  schedule = "schedule",
}
const STRATEGIES = [
  { key: 'SCREEN_MATCH_ALL_RULES', desc: 'All screen matching all of these rules' }
]
export interface AdsSetMedia {
  id: string;
  order: number;
  recId: string;
  withMedia: VideoType;
}
export interface AdsSetType {
  adsSetMediaList: AdsSetMedia[];
  id: string;
  name: string;
  recId: string;
}
export default function CampaignDetails(props) {
  const { locations } = useAdvertiserStore()
  const { returnPreLayout, campaign } = props;
  const { videos, name, beginTime, endTime } = campaign || {};
  const [status, setStatus] = useState(campaign?.status);
  const [adsSet, setAdsSet] = useState<AdsSetType>(null);
  const [schedule, setSchedule] = useState({ beginTime, endTime });
  const [screenConditions, setScreenConditions] = useState(null);
  
  // loading handler
  const [setting, openSetting] = useState({});
  const [loading, setLoading] = useState({});
  const [openVideoLib, setOpenVideoLib] = useState(null);
  const [isChangingStatus, setChangeStatus] = useState(null);
  
  const [errorMsg, setErrorMsg] = useState(null);
  const [successMsg, setSuccessMsg] = useState(null);
  const CampainHeader = (title, settingKey) => (
    <div className={styles.campaignHeader}>
      <AdsliveH4>{title}</AdsliveH4>
      {!setting[settingKey] ? (
        <AdButton
          className={styles.editSetting}
          style={{ padding: "0 4px" }}
          isLoading={loading[settingKey]}
          icon={<AdIcon name="pen" w="16px" mr="2px" />}
          title={<MutedText>Edit Setting</MutedText>}
          onClick={() => toggleSetting(settingKey, true)}
        />
      ) : (
        <AdButton
          style={{ padding: "0 4px" }}
          isLoading={loading[settingKey]}
          title={<MutedText>Done</MutedText>}
          onClick={() => handleUpdate(settingKey)}
        />
      )}
    </div>
  );
  const handleUpdate = (settingKey) => {
    toggleSetting(settingKey, false);
  };
  const toggleSetting = (title, value) => {
    const s = { ...setting, ...{ [title]: value } };
    openSetting(s);
  };
  const handleSetLoading = (title, value) => {
    const s = { ...loading, ...{ [title]: value } };
    setLoading(s);
  };

  const formatMediaRequest = (list) =>
    list.map(({ recId, id, withMedia, withMediaRecId }, i) => ({
      recId,
      id,
      withMediaRecId: withMediaRecId || withMedia?.recId,
      order: i,
    }));
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
  const handleChangeStrategy = (event) => {
    console.log(event);
  }
  const STATUS_COLOR = { paused: "success", draft: "success", live: "primary" };
  // ----------------- Load Effect Data -------------------
  
  useEffect(() => {
    fetchAds();
  }, [campaign]);
  
  useEffect(() => {
    const conditions:any = {}
    conditions.strategy = STRATEGIES[0].key
    conditions.detail = {rules : []}
    setScreenConditions(conditions)
  }, [locations])
  // ---------------------- API funct --------------------
  const fetchAds = async () => {
    if (!campaign) return;
    handleSetLoading(LOAD_KEYS.adsSet, true);
    const res: any = await AdvertiserApiClient.getCampaignAdsSet(campaign.id);
    if (res && res.data) setAdsSet(res.data[0]);
    handleSetLoading(LOAD_KEYS.adsSet, false);
  };

  const handleUpdateCampaignStatus = async (status) => {
    setChangeStatus(true);
    const res: any = await AdvertiserApiClient.updateCampaign(campaign?.id, {
      status,
    });
    if (res.status) setStatus(status);
    setChangeStatus(false);
  };

  const updateAdsSet = async (newVideos) => {
    if (!newVideos?.length) return;
    let mergeData = [...adsSet.adsSetMediaList, ...newVideos];
    setOpenVideoLib(false);
    await updateMediaReq(mergeData);
  };
  const updateMediaReq = async (newMediaList) => {
    handleSetLoading(LOAD_KEYS.adsSet, true);
    newMediaList = formatMediaRequest(newMediaList);
    const res: any = await AdvertiserApiClient.updateAdsSetMedia(adsSet.id, {
      adsSetMediaList: newMediaList,
    });
    if (res?.data) {
      setAdsSet({ ...adsSet, adsSetMediaList: res.data });
      setSuccessMsg('Updated')
    }
    handleSetLoading(LOAD_KEYS.adsSet, false);
  };
  const handleDeleteMedia = async (recId) => {
    if (!adsSet?.adsSetMediaList?.length) return;
    const filteredData = adsSet.adsSetMediaList.filter(
      (e) => e.recId !== recId
    );
    await updateMediaReq(filteredData);
  };
  const handleChangeOrder = async (changeData) => {
    const arrangeIds = changeData.map((e) => e.id);
    const newOrderMedia = arrangeIds.map((recId, i) => {
      const refMedia = adsSet.adsSetMediaList.find((e) => e.recId === recId);
      return {
        ...refMedia,
        order: i,
      };
    });
    await updateMediaReq(formatMediaRequest(newOrderMedia));
  };
  const handleChangeSchedule = async (changeData) => {
    setSchedule({...schedule, ...changeData });
    handleSetLoading(LOAD_KEYS.schedule, true)
    const res:any = await AdvertiserApiClient.updateCampaignSchedule(adsSet?.id, schedule)
    if (res['error']) {
      setErrorMsg(res['error']['data']['error']['message'])
    }
    if (res?.data) {
      setSuccessMsg('Updated Schedule')
    }
    handleSetLoading(LOAD_KEYS.schedule, false)
  };
  return (
    <>
      <Toaster type='error' handleSetToast={setErrorMsg} message={errorMsg} />
      <Toaster type='success' handleSetToast={setSuccessMsg} message={successMsg} />
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
              fullView
              toggle
              toggled={setting[LOAD_KEYS.adsSet]}
              header={CampainHeader(adsSet?.name, LOAD_KEYS.adsSet)}
              body={
                <div className={`${styles.cardBody}`}>
                  <div className={styles.info}>
                    <span>
                      <InfoText size="lg">
                        {adsSet?.adsSetMediaList.length || "-"}
                      </InfoText>{" "}
                      videos
                    </span>
                    <span>
                      <InfoText size="lg">-</InfoText> played
                    </span>
                  </div>
                  <Divider style={{ padding: 0 }} />
                  {setting[LOAD_KEYS.adsSet] ? (
                    <>
                      <CardDragWrapper
                        items={adsSet?.adsSetMediaList.map((e) => ({
                          id: e.recId.toString(),
                          content: (
                            <div key={e.id}>
                              <CardDragItem
                                onDelete={(event) => {
                                  event.stopPropagation();
                                  handleDeleteMedia(e.recId);
                                }}
                              >
                                {/* <AdIcon
                                url={withMedia.url}
                                r="2px"
                                w="24px"
                                mr="8px"
                              /> */}
                                <span>{e.withMedia.name}</span>
                              </CardDragItem>
                              <Divider />
                            </div>
                          ),
                        }))}
                        onChange={(change) => handleChangeOrder(change)}
                      />
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
                      <MutedText>{`${adsSet?.adsSetMediaList?.length || 0} videos`}</MutedText>
                    </div>
                  )}
                </div>
              }
            />
            <AdCard
              fullView
              toggle
              toggled={setting[LOAD_KEYS.screen]}
              header={CampainHeader("Screen", LOAD_KEYS.screen)}
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
                  {setting[LOAD_KEYS.screen] && (
                    <>
                      <Divider />
                      <CardSelect
                        title="Choose SCREEN enters the campaign"
                        initValue={STRATEGIES[0].desc}
                        values={[STRATEGIES[0].desc]}
                        onChange={(event) => handleChangeStrategy(event)}
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
              toggled={setting[LOAD_KEYS.schedule]}
              header={CampainHeader("Schedule", LOAD_KEYS.schedule)}
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
                  {setting[LOAD_KEYS.schedule] && (
                    <>
                      <Divider />
                      <CardSelectTime
                        title="Start at"
                        initValue={schedule?.beginTime}
                        values={[]}
                        onChange={(change) => handleChangeSchedule({beginTime: change})}
                      />
                      <CardSelectTime
                        title="End at"
                        initValue={schedule?.endTime}
                        values={[]}
                        onChange={(change) => handleChangeSchedule({endTime: change})}
                      />
                    </>
                  )}
                </div>
              }
            />
          </div>
        }
      />
      {adsSet && (
        <SelectVideosModal
          handleShow={{ openVideoLib, setOpenVideoLib }}
          adsSet={adsSet}
          onChange={updateAdsSet}
        />
      )}
    </>
  );
}
