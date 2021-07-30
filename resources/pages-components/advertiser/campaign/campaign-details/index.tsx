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
import { AdIcon, VideoThumb } from "../../../../components/icon";
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
import { Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux"
import { selectAreas, selectLocations } from "../../screen/locationSlice";
import { getCampaignAdsetsAsync, selectAdsetsObj, updateAdsetAsync } from "../adsetSlice";
import { selectCampaignsObj, updateCampaignAsync, updateCampaignScheduleAsync, updateScreenConditionsAsync } from "../campaignSlice";
import { selectAreaScreensObj } from "../../screen/screenSlice";
export default function CampaignDetails(props) {
  const locations = useSelector(selectLocations)
  const campaigns = useSelector(selectCampaignsObj)
  const { returnPreLayout, campaignId } = props;
  const { videos, beginTime, endTime, targetScreenConditions, status: campaignStt, name: campaignName } = campaigns[campaignId] || {}
  const collectAllAreas = (locations) => locations?.reduce(
    (res, cur) => (res = [...res, ...cur.areas]),
    []
  );
  const areaScreens = useSelector(selectAreaScreensObj)
  const areas = useSelector(selectAreas)
  const adsets: any = useSelector(selectAdsetsObj)

  const [status, setStatus] = useState(campaignStt);
  const [adsSet, setAdsSet] = useState<AdsSetType>(adsets[campaignId] || null);

  const [schedule, setSchedule] = useState({ beginTime, endTime });
  const [screenConditions, setScreenConditions] = useState<any>({
    ...targetScreenConditions,
    strategy: STRATEGIES[0].key,
  });
  const [areaOptions, setAreaOptions] = useState<Area[]>([]);
  // loading handler
  const [setting, openSetting] = useState({});
  const [loading, setLoading] = useState({});
  const [openVideoLib, setOpenVideoLib] = useState(null);
  const [isChangingStatus, setChangeStatus] = useState(null);

  const [initLocations, setInitLocations] = useState(null);
  const [initAreas, setInitAreas] = useState(null);

  const [errorMsg, setErrorMsg] = useState(null);
  const [successMsg, setSuccessMsg] = useState(null);
  const [warningMsg, setWarningMsg] = useState(null);
  const [changedData, setChangedData] = useState<ChangedData>({
    "ads-set": null,
    "screen": null,
    "schedule": null,
  });
  const dispatch = useDispatch()
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
  function requestAPI(loadKey: LOAD_KEYS, data) {
    if (loadKey === LOAD_KEYS.adsSet)
      return dispatch(updateAdsetAsync({ id: adsSet.id, data }))
    if (loadKey === LOAD_KEYS.screen)
      return dispatch(updateScreenConditionsAsync({ id: campaignId, data }))
    if (loadKey === LOAD_KEYS.schedule)
      return dispatch(updateCampaignScheduleAsync({ id: campaignId, data }))
  }
  async function handleUpdate(settingKey) {
    toggleSetting(settingKey, false);
    const REQ_DATA = changedData[settingKey];
    if (REQ_DATA) {
      const res: any = await requestAPI(settingKey, REQ_DATA);
      if (res?.payload) {
        if (settingKey === LOAD_KEYS.adsSet) {
          setSuccessMsg("Updated Media")
        } else if (settingKey === LOAD_KEYS.schedule) {
          setSuccessMsg("Updated Schedule");
        } else setSuccessMsg("Updated");
        setChangedData({ ...changedData, [settingKey]: null });
      }
    }
  }
  const toggleSetting = (title, value) => {
    const checkOpenMoreThanOne = Object.values(setting).includes(true)
    const checkChangedData = !!Object.values(changedData).find(e => e)
    if (value && checkOpenMoreThanOne && checkChangedData) {
      setWarningMsg('Please finish current setting before edit another')
      return
    }
    const s = { ...setting, ...{ [title]: value } };
    openSetting(s);
  };
  const handleSetLoading = (title, value) => {
    const e = { ...loading, [title]: value }
    setLoading(e)
  };

  const formatMediaRequest = (list) =>
    list.map(({ recId, id, withMedia, withMediaRecId }, i) => ({
      recId,
      id,
      withMediaRecId: withMediaRecId || withMedia?.recId,
      order: i,
    }));
  
  // ----------------- Load Effect Data -------------------
  const adsetStatus = useSelector(state => state['adsets']['status'])
  const campaignStatus = useSelector(state => state['campaigns']['status'])
  
  useEffect(() => {
    if (adsetStatus !== 'loading' && campaignId && !adsets[campaignId]) {
      dispatch(getCampaignAdsetsAsync(campaignId))
    }
  }, [adsetStatus, campaignId, dispatch])
  
  useEffect(() => {
    if (campaignId && adsets) setAdsSet(adsets[campaignId])
  }, [adsets])
  

  useEffect(() => {
    let loader = {}
    loader[LOAD_KEYS.adsSet] = adsetStatus == 'loading'
    loader[LOAD_KEYS.screen] = loader[LOAD_KEYS.schedule] = campaignStatus == 'loading'
    setLoading(loader)
  }, [adsetStatus, campaignStatus, dispatch])
  useEffect(() => {
    const rules = campaigns[campaignId]?.targetScreenConditions?.detail?.rules;
    if (!rules?.length) return;
    const locationIds = rules.find((e) => e.ruleTypes === "LOCATION")?.value?.locationIds
    const areaIds = rules.find((e) => e.ruleTypes === "AREA")?.value?.areaIds
    if (locationIds) {
      const initLocations = locations.filter(l => locationIds.includes(l['id']))
      if (initLocations) setInitLocations(initLocations)
      const initAreaOptions:any = initLocations.reduce((res: any[], l: any) => [...res, ...l['areas']], [])
      setAreaOptions(initAreaOptions || [])
    } else {
      setInitLocations([])
      setAreaOptions([])
    }
    if (areaIds && areas) {
      const initAreas = areas.filter(l => areaIds.includes(l['id']))
      if (initAreas) setInitAreas(initAreas)
    } else {
      setInitAreas([])
    }
    
  }, [screenConditions]);
  // ---------------------- API funct --------------------
  function checkLiveCondition() {
    if (ActionOnStatus(status) !== 'live') return true
    return screenConditions?.detail?.rules?.find((e) => e.ruleTypes === "SCREENS")?.value?.screenIds.length > 0 &&
      adsSet.adsSetMediaList.length > 0 &&
      schedule.beginTime &&
      schedule.endTime
  }
  const handleUpdateCampaignStatus = async (status) => {
    if (status === "live" && !checkLiveCondition()) {
      setWarningMsg('Please add Adsvertise video, Screens and Schedule before make Campaign go live!')
      return
    }
    setChangeStatus(true);
    const res: any = await dispatch(updateCampaignAsync({ id: campaignId, data: { status } }))
    if (res.payload) setStatus(status);
    setChangeStatus(false);
  };

  const updateAdsSet = async (newVideos) => {
    if (!newVideos?.length) return;
    let mergeData = [...(adsSet?.adsSetMediaList || []), ...newVideos];
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
  };
  const handleDeleteMedia = (recId) => {
    if (!adsSet?.adsSetMediaList?.length) return;
    const filteredData = adsSet.adsSetMediaList.filter(
      (e) => (e.recId || e.withMedia.recId) !== recId
    );
    updateMediaReq(filteredData);
  };

  const handleChangeOrder = async (changeData) => {
    const arrangeIds = changeData.map((e) => e.id);
    const newOrderMedia = arrangeIds.map((recId, i) => {
      const refMedia = adsSet.adsSetMediaList.find(
        (e) => (e.recId || e.withMedia.recId) === recId
      );
      return {
        ...refMedia,
        order: i,
      };
    });
    updateMediaReq(newOrderMedia);
  };
  const handleChangeSchedule = async (changeData) => {
    const newSchedule = { ...schedule, ...changeData };
    setSchedule(newSchedule);
    setChangedData({ ...changedData, schedule: newSchedule });
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
    const choseLocations = locations?.filter((e: any) =>
      selectData.includes(e.name)
    );
    const collectAreas: any = choseLocations.reduce((res: any[], e) => [...res, ...e['areas']], [])

    setAreaOptions(collectAreas);
    if (!collectAreas?.length) {
      handleAreaSelect([])
    }
    //
    const conditions = { ...screenConditions } || {};
    let rules = screenConditions.detail?.rules || []

    const rule = {
      ruleTypes: "LOCATION",
      value: {
        locationRecIds: choseLocations.map((e: any) => e.recId),
        locationIds: choseLocations.map((e: any) => e.id),
      },
    };
    conditions.detail = {
      ...conditions.detail,
      rules: updateRule(rule, rules)
    }
    handleChangeConditions(conditions);
    setTimeout(() => {
      setInitAreas([])
    }, 1);
  }

  async function handleAreaSelect(selectAreas) {
    const choseAreas = areaOptions?.filter((a) => selectAreas.includes(a.name));
    const conditions = { ...screenConditions } || {};
    let rules = screenConditions.detail?.rules || []
    const areaRule = {
      ruleTypes: "AREA",
      value: {
        areaRecIds: choseAreas.map((e) => e.recId),
        areaIds: choseAreas.map((e) => e.id),
      },
    }
    const areaIds = choseAreas.map((a) => a.id);
    const loadScreens = areaIds.reduce((res, id) => areaScreens[id] ? [...res, ...areaScreens[id]] : res, [])
    const screenRule = {
      ruleTypes: "SCREENS",
      value: {
        screenRecIds: loadScreens.map((e) => e.recId),
        screenIds: loadScreens.map((e) => e.id),
      },
    };
    if (rules) {
      rules = updateRule(areaRule, rules)
      rules = updateRule(screenRule, rules)
    }
    conditions.detail = {
      ...conditions.detail,
      rules
    }
    handleChangeConditions(conditions);
  }
  function updateRule(rule, rules) {
    if (rules) {
      if (rules.find((e) => e.ruleTypes === rule.ruleTypes)) {
        rules = rules.map(e => {
          return e.ruleTypes === rule.ruleTypes ? rule : e
        })
      } else rules = [...rules, rule]
    }
    return rules
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
          show={!!deleteRecId}
          setShow={setSDeleteRecId}
        />
      )
    );
  }
  // --------------------
  function handleReturnLayout() {
    // const isDataLoading = !!Object.keys(loading).find(key => !!loading[key] && key !== 'ads-set')
    // if (isDataLoading) setWarningMsg("Please wait for updating data!")
    returnPreLayout()
  }
  function AdsetFooter() {
    const length = adsSet?.adsSetMediaList?.length
    const max = 3
    const data = length > max ? adsSet?.adsSetMediaList?.slice(0, max) : adsSet?.adsSetMediaList
    return (
      <>
        {!!length &&
          <>
            <Divider style={{ padding: 0 }} />
            <Row style={{ alignItems: "center", marginLeft: "6px" }}>

              {data?.map(adSet => (
                <span key={adSet.id} className={styles.icon}>
                  <VideoThumb url={adSet.withMedia['thumbnail_url']} />
                </span>
              ))}
              <MutedText>{length > max
                && `+ ${length - max} videos`}</MutedText>
            </Row>
          </>
        }
      </>)
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
            type="warning"
            handleSetToast={setWarningMsg}
            message={warningMsg}
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
                  <AdIcon name="full-left-arrow" w="20px" onClick={handleReturnLayout} />
                  <AdsliveH4>{campaignName}</AdsliveH4>
                  <StatusBadge status={status} />
                </div>
                <AdButton
                  icon={<AdIcon name={ActionOnStatus(status)} />}
                  title={parseTitle(ActionOnStatus(status))}
                  onClick={() =>
                    handleUpdateCampaignStatus(ActionOnStatus(status))
                  }
                  variant={STATUS_COLOR[status]}
                  isLoading={isChangingStatus}
                  disabled={Object.values(loading).includes(true)}
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
                            {adsSet?.adsSetMediaList?.length || "-"}
                          </InfoText>{" "}
                          videos
                        </span>
                        <span>
                          <InfoText size="lg">-</InfoText> played
                        </span>
                      </div>
                      {setting[LOAD_KEYS.adsSet] ? (
                        <>
                          <Divider style={{ padding: 0 }} />
                          <CardDragWrapper
                            items={adsSet?.adsSetMediaList?.map((e) => ({
                              id: e.recId || e.withMedia?.recId,
                              content: (
                                <div key={e.id}>
                                  <CardDragItem
                                    isLoading={false}
                                    onDelete={(event) => {
                                      event.stopPropagation();
                                      setSDeleteRecId(
                                        e.recId || e.withMedia.recId
                                      );
                                    }}
                                  >
                                    {/* <AdIcon
                                url={withMedia.url}
                                r="2px"
                                w="24px"
                                mr="8px"
                              /> */}
                                    <div style={{ display: "flex", alignItems: "center" }}>
                                      <VideoThumb url={e.withMedia['thumbnail_url']} style={{ marginRight: "6px" }} />
                                      {e.withMedia?.name}
                                    </div>
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
                            icon={<AdIcon name="circle-bold" w="24px" ml="4px" />}
                            title="ADD MORE VIDEOS"
                            style={{ padding: "20px" }}
                            onClick={() => setOpenVideoLib(true)}
                          />
                        </>
                      ) : (
                        <AdsetFooter />
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
                            {
                              screenConditions?.detail?.rules?.find(
                                (e) => e.ruleTypes === "SCREENS"
                              )?.value?.screenIds?.length
                            }
                          </InfoText>{" "}
                          Screens
                        </span>
                        <span>
                          <InfoText size="lg">
                            {
                              screenConditions?.detail?.rules?.find(
                                (e) => e.ruleTypes === "LOCATION"
                              )?.value?.locationIds?.length
                            }
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
                            values={locations?.map((e: any) => e.name)}
                            onChange={handleLocationSelect}
                          />
                          <CardMultiSelect
                            title="Area"
                            initValue={initAreas?.map((e) => e.name)}
                            values={areaOptions?.map(
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
                          {/* <AdButton
                            cardBtn
                            ghost
                            icon={<AdIcon name="circle-bold" w="24px" />}
                            title="ADD MORE RULES"
                            style={{ padding: "20px" }}
                            onClick={() => null}
                          /> */}
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
                            initValue={beginTime}
                            values={[]}
                            onChange={(change) =>
                              handleChangeSchedule({ beginTime: change })
                            }
                          />
                          <CardSelectTime
                            title="End at"
                            initValue={endTime}
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
          {(
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
