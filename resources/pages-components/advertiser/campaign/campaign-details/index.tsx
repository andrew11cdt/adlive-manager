import { useEffect, useState } from "react";
import AdvertiserApiClient from "../../../../api-clients/advertiser.api-client";
import { AdButton } from "../../../../components/button";
import AdCard, {
  CardDragItem,
  CardDragWrapper,
  CardMultiSelect,
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
import AdsliveLoading from "../../../../components/loading";
import { Toaster } from "../../../../components/toaster";
import useAdvertiserStore from "../../../../stores/advertiser-store/advertiser-store.hook";
import { Area } from "../../../../stores/advertiser-store/advertiser-store.context";
import ConfirmModal from "../../../../components/confirmModal";
import {
  ActionOnStatus,
  AdsSetType,
  ChangedData,
  LOAD_KEYS,
  STATUS_COLOR,
  STRATEGIES,
} from "./campaign-type";

export default function CampaignDetails(props) {
  const { locations, loadAllScreen } = useAdvertiserStore();
  const { returnPreLayout, campaign } = props;
  const {
    videos,
    beginTime,
    endTime,
    targetScreenConditions: { detail: { rules = [] } = {} } = {},
    targetScreenConditions,
  } = campaign || {};

  const collectAllAreas = locations?.reduce(
    (res, cur) => (res = [...res, ...cur.areas]),
    []
  );

  const [status, setStatus] = useState(campaign?.status);
  const [adsSet, setAdsSet] = useState<AdsSetType>(null);
  const [schedule, setSchedule] = useState({ beginTime, endTime });
  const [screenConditions, setScreenConditions] = useState<any>({
    ...targetScreenConditions,
    strategy: STRATEGIES[0].key,
  });
  const [areaOptions, setAreaOptions] = useState<Area[]>(collectAllAreas);
  // loading handler
  const [setting, openSetting] = useState({});
  const [loading, setLoading] = useState({});
  const [openVideoLib, setOpenVideoLib] = useState(null);
  const [isChangingStatus, setChangeStatus] = useState(null);

  const [initLocations, setInitLocations] = useState(null);
  const [initAreas, setInitAreas] = useState(null);

  const [errorMsg, setErrorMsg] = useState(null);
  const [successMsg, setSuccessMsg] = useState(null);
  const [changedData, setChangedData] = useState<ChangedData>({
    "ads-set": null,
    screen: null,
    schedule: null,
  });
  function requestAPI(loadKey: LOAD_KEYS, data) {
    if (loadKey === LOAD_KEYS.adsSet)
      return AdvertiserApiClient.updateAdsSetMedia(adsSet.id, data);
    if (loadKey === LOAD_KEYS.screen)
      return AdvertiserApiClient.updateCampaignTargetScreenConditions(
        campaign.id,
        data
      );
    if (loadKey === LOAD_KEYS.schedule)
      return AdvertiserApiClient.updateCampaignSchedule(adsSet.id, data);
  }
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
  async function handleUpdate(settingKey) {
    toggleSetting(settingKey, false);
    const REQ_DATA = changedData[settingKey];

    console.log({ REQ_DATA });
    if (REQ_DATA) {
      handleSetLoading(settingKey, true);
      const res: any = await requestAPI(settingKey, REQ_DATA);
      if (res) {
        setSuccessMsg("Updated");
        if (settingKey === LOAD_KEYS.adsSet && res.data) setAdsSet({ ...adsSet, adsSetMediaList: res.data })
        else if (settingKey === LOAD_KEYS.schedule) setSuccessMsg("Updated Schedule")
        setChangedData({ ...changedData, [settingKey]: null });
      }
      handleSetLoading(settingKey, false);
    }
  }
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

  // ----------------- Load Effect Data -------------------

  useEffect(() => {
    fetchAds();
  }, [campaign]);
  useEffect(() => {
    const rules = screenConditions?.detail?.rules
    if (!rules?.length) return
    const initLocationIds = rules.find((e) => e.ruleTypes === "LOCATION")?.value?.locationIds
    const initAreaIds = rules.find((e) => e.ruleTypes === "AREA")?.value?.areaIds
    const loadLocations = handleInitValue(initLocationIds, locations)
    const initAreas = handleInitValue(initAreaIds, collectAllAreas);
    
    if (loadLocations?.length) setInitLocations(loadLocations);
    if (initAreas?.length) setInitAreas(initAreas);
  }, [screenConditions]);
  // ---------------------- API funct --------------------
  const fetchAds = async () => {
    if (!campaign) return;
    handleSetLoading(LOAD_KEYS.adsSet, true);
    const res: any = await AdvertiserApiClient.getCampaignAdsSet(campaign.id);
    if (res && res.data) {
      res.data[0].adsSetMediaList = res.data[0].adsSetMediaList?.filter(
        (e) => !!e.withMedia
      );
      setAdsSet(res.data[0]);
    }
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
    const newMediaListReq = formatMediaRequest(newMediaList);
    setChangedData({
      ...changedData,
      [LOAD_KEYS.adsSet]: {
        adsSetMediaList: newMediaListReq,
      },
    });
    setAdsSet({ ...adsSet, adsSetMediaList: newMediaList });
    
    // const res: any = await AdvertiserApiClient.updateAdsSetMedia(adsSet.id, {
    //   adsSetMediaList: newMediaList,
    // });
    // if (res?.data) {
    //   setAdsSet({ ...adsSet, adsSetMediaList: res.data });
    //   setSuccessMsg("Updated");
    // }
  };
  const handleDeleteMedia = async (recId) => {
    // todo
    if (!adsSet?.adsSetMediaList?.length) return;
    const filteredData = adsSet.adsSetMediaList.filter(
      (e) => (e.recId || e.withMedia.recId) !== recId
    );
    await updateMediaReq(filteredData);
  };
  const handleChangeOrder = async (changeData) => {
    const arrangeIds = changeData.map((e) => e.id);
    const newOrderMedia = arrangeIds.map((recId, i) => {
      const refMedia = adsSet.adsSetMediaList.find((e) => (e.recId || e.withMedia.recId) === recId);
      return {
        ...refMedia,
        order: i,
      };
    });
    await updateMediaReq(newOrderMedia);
  };
  const handleChangeSchedule = async (changeData) => {
    const newSchedule = { ...schedule, ...changeData }
    setSchedule(newSchedule);
    setChangedData({...changedData, schedule: newSchedule})
  };
  // ----------------- handle Conditions Setting --------------
  function handleChangeConditions(changeData) {
    const newConditions = { ...screenConditions, ...changeData };
    setScreenConditions(newConditions);
    setChangedData({ ...changedData, [LOAD_KEYS.screen]: newConditions });
  }

  function handleChangeStrategy(event) {
    handleChangeConditions({ strategy: STRATEGIES[0].key });
  }
  function handleLocationSelect(selectData) {
    const choseLocations = locations?.filter((e) =>
      selectData.includes(e.name)
    );
    //
    if (choseLocations?.length) {
      let collectAreas = [];
      choseLocations.map(
        (location) =>
          (collectAreas = [...collectAreas, ...location.areas].filter(
            (e) => !collectAreas.includes(e)
          ))
      );
      setAreaOptions(collectAreas);
    }
    //
    const conditions = screenConditions || {};
    if (!conditions.detail) conditions.detail = { rules: [] };
    conditions.detail.rules[0] = {
      ruleTypes: "LOCATION",
      value: {
        locationRecIds: choseLocations.map((e) => e.recId),
        locationIds: choseLocations.map((e) => e.id),
      },
    };
    handleChangeConditions(conditions);
  }
  async function handleAreaSelect(selectAreas) {
    const choseAreas = areaOptions?.filter((a) => selectAreas.includes(a.name));
    const conditions = screenConditions || {};
    if (!conditions.detail) conditions.detail = { rules: [] };
    conditions.detail.rules[1] = {
      ruleTypes: "AREA",
      value: {
        areaRecIds: choseAreas.map((e) => e.recId),
        areaIds: choseAreas.map((e) => e.id),
      },
    };
    const areaIds = choseAreas.map((a) => a.id);
    if (!areaIds?.length) {
      handleChangeConditions(conditions);
      return;
    }
    handleSetLoading(LOAD_KEYS.screen, true);
    const screenData = await loadAllScreen(areaIds);
    conditions.detail.rules[2] = {
      ruleTypes: "SCREENS",
      value: {
        screenRecIds: screenData.map((e) => e.recId),
        screenIds: screenData.map((e) => e.id),
      },
    };
    handleChangeConditions(conditions);
    handleSetLoading(LOAD_KEYS.screen, false);
  }

  function handleInitValue(ids, items) {
    return (items && ids && items?.filter((e) => ids?.includes(e.id))) || null;
  }
  const [deleteRecId, setSDeleteRecId] = useState(null);
  function confirmDeleteModal() {
    return (
      deleteRecId && (
        <ConfirmModal
          title="Delete Media"
          onExecute={() => {
            setSDeleteRecId(null);
            handleDeleteMedia(deleteRecId);
          }}
          show={deleteRecId}
          setShow={setSDeleteRecId}
        />
      )
    );
  }
  return (
    <>
      {confirmDeleteModal()}
      {!locations ? (
        <AdsliveLoading />
      ) : (
        <>
          <Toaster
            type="error"
            handleSetToast={setErrorMsg}
            message={errorMsg}
          />
          <Toaster
            type="success"
            handleSetToast={setSuccessMsg}
            message={successMsg}
          />
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
                  icon={<AdIcon name={ActionOnStatus(status)} />}
                  title={parseTitle(ActionOnStatus(status))}
                  onClick={() => handleUpdateCampaignStatus(ActionOnStatus(status))}
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
                            items={adsSet?.adsSetMediaList?.map((e) => ({
                              id: e.recId || e.withMedia?.recId,
                              content: (
                                <div key={e.id}>
                                  <CardDragItem
                                    onDelete={(event) => {
                                      event.stopPropagation();
                                      setSDeleteRecId(e.recId || e.withMedia.recId);
                                    }}
                                  >
                                    {/* <AdIcon
                                url={withMedia.url}
                                r="2px"
                                w="24px"
                                mr="8px"
                              /> */}
                                    <span>{e.withMedia?.name}</span>
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
                          <MutedText>{`${
                            adsSet?.adsSetMediaList?.length || 0
                          } videos`}</MutedText>
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
                          <InfoText size="lg">
                            {screenConditions?.detail?.rules.find((e) => e.ruleTypes === "SCREENS")?.value?.screenIds?.length}
                          </InfoText>{" "}
                          Screens
                        </span>
                        <span>
                          <InfoText size="lg">
                            {initLocations?.length}
                          </InfoText>{" "}
                          Location
                        </span>
                      </div>
                      {setting[LOAD_KEYS.screen] && (
                        <>
                          <Divider />
                          <CardSelect
                            title="Choose strategy"
                            initValue={[STRATEGIES[0].desc]}
                            values={[STRATEGIES[0].desc]}
                            onChange={(event) => handleChangeStrategy(event)}
                          />
                          <CardMultiSelect
                            title="Location"
                            initValue={initLocations?.map((e) => e.name)}
                            values={locations?.map((e) => e.name)}
                            onChange={handleLocationSelect}
                          />
                          <CardMultiSelect
                            title="Area"
                            initValue={initAreas?.map((e) => e.name)}
                            values={(areaOptions || initAreas)?.map(
                              (area) => area.name
                            )}
                            onChange={handleAreaSelect}
                          />
                          <CardSelect
                            title="Free time"
                            initValue={["has any value"]}
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
                          <InfoText>
                            {displayTime(schedule?.beginTime)}
                          </InfoText>
                        </span>
                        <span>
                          End{" "}
                          <InfoText>{displayTime(schedule?.endTime)}</InfoText>
                        </span>
                      </div>
                      {setting[LOAD_KEYS.schedule] && (
                        <>
                          <Divider />
                          <CardSelectTime
                            title="Start at"
                            initValue={schedule?.beginTime}
                            values={[]}
                            onChange={(change) =>
                              handleChangeSchedule({ beginTime: change })
                            }
                          />
                          <CardSelectTime
                            title="End at"
                            initValue={schedule?.endTime}
                            values={[]}
                            onChange={(change) =>
                              handleChangeSchedule({ endTime: change })
                            }
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
      )}
    </>
  );
}
