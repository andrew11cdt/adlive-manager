import React, { useState } from "react";
import { Button, Container, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import AdvertiserApiClient from "../../../../api-clients/advertiser.api-client";
import { AdButton } from "../../../../components/button";
import AdCard, {
  CardDragItem,
  CardInput,
  CardSelect,
} from "../../../../components/card";
import ConfirmModal from "../../../../components/confirmModal";
import AdsliveIcon, {
  AdIcon,
  ADSLIVE_ICON_COLOR,
  ADSLIVE_ICON_SIZE,
  ADSLIVE_ICON_TYPE,
  ADSLIVE_ICON_VARIANT,
} from "../../../../components/icon";
import StatusBadge from "../../../../components/status-badge";
import { Toaster } from "../../../../components/toaster";
import { AdsliveH4 } from "../../../../components/typography";
import SubLayout from "../../../sub-layout";
import { deleteScreenAsync } from "../screenSlice";
import styles from "./styles.module.scss";

export default function ScreenDetails(props) {
  const {
    isNew,
    returnPreLayout,
    deleteScreen,
    screenData,
    locationData,
  } = props;
  const [screenState, setScreenState] = useState(screenData);
  const [errorMsg, setErrorMsg] = useState(null);
  const [successMsg, setSuccessMsg] = useState(null);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(null)
  const dispatch = useDispatch()
  const addArea = (area) => { };
  const resetDevice = (area) => { };
  const handleInputChange = (screenKey, event) => {
    const val = event.target.value;
    setScreenState({ ...screenState, ...{ [screenKey]: val } });
  };
  const handleInputFocusOut = async (key, event) => {
    if (screenData[key] !== screenState[key]) {
      console.log("UPDATE REQUEST");
      const body = { [key]: screenState[key] };
      const res = await AdvertiserApiClient.updateScreen(screenState.id, body);
      if (res?.code === 0 && res.data) {
        // screenData[key] = screenState[key];
        setScreenState(res.data);
        setSuccessMsg('Updated')
      } else {
        setErrorMsg('Updated')
      }
    }
  };
  async function handleDeleteScreen() {
    // const res:any = await AdvertiserApiClient.deleteScreen(screenData.id)
    if (!screenData) return
    const res: any = await dispatch(deleteScreenAsync(screenData?.id))
    if (res) {
      setShowDeleteConfirm(false)
      returnPreLayout(true)
      setSuccessMsg('Deleted screen!')
    }
    if (res?.error) setErrorMsg(res.error.data?.message || 'Delete failed!')
  }
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
    <>
      <Toaster type="error" handleSetToast={setErrorMsg} message={errorMsg} />
      <Toaster
        type="success"
        handleSetToast={setSuccessMsg}
        message={successMsg}
      />
      <ConfirmModal
        title="Delete Screen"
        onExecute={handleDeleteScreen}
        show={showDeleteConfirm}
        setShow={setShowDeleteConfirm}
      />
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
              <AdsliveH4>{ }</AdsliveH4>
              <StatusBadge status={"offline"} />
            </div>
            <AdIcon name="Delete" onClick={() => setShowDeleteConfirm(true)} />
          </div>
        }
        content={
          <div style={{ padding: "16px" }}>
            {/* <VideoPlayer data={null} /> */}
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
                      disabled={e.disabled}
                      value={screenState[e.key]}
                      onInputChange={(event) => handleInputChange(e.key, event)}
                      onFocusOut={(event) => handleInputFocusOut(e.key, event)}
                    />
                  ))}
                  <CardSelect
                    title="area"
                    disabled
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
                      disabled={e.disabled}
                      value={screenState[e.key]}
                      onInputChange={(event) => handleInputChange(e.key, event)}
                      onFocusOut={(event) => handleInputFocusOut(e.key, event)}
                    />
                  ))}
                  <AdButton
                    cardBtn
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
    </>
  );
}
