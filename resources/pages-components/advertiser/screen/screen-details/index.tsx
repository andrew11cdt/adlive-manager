import { Button, Container, Row } from "react-bootstrap";
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
  const {
    isNew,
    returnPreLayout,
    deleteScreen,
    screenData,
    locationData
  } = props
  const addArea = (area) => {};
  const resetDevice = (area) => {};
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
                <CardInput
                  title="screen name"
                  value={screenData.deviceName}
                  onInputChange={(event) => {
                    console.log(event);
                  }}
                />
                <CardInput
                  title="location"
                  value={"location's address"}
                  onInputChange={(event) => {
                    console.log(event);
                  }}
                />
                <CardSelect
                  title="area"
                  initValue={locationData.areas[0]?.name}
                  values={locationData.areas?.map((e) => e.name)}
                  onChange={(event) => {
                    console.log(event);
                  }}
                />
                <CardInput
                  title="type of device"
                  value={screenData.deviceType}
                  onInputChange={(event) => {
                    console.log(event);
                  }}
                />
                <CardInput
                  disabled
                  title="mac address"
                  value={screenData.macAddress}
                  onInputChange={(event) => {
                    console.log(event);
                  }}
                />
                <CardInput
                  disabled
                  title="os"
                  value={screenData.deviceOS}
                  onInputChange={(event) => {
                    console.log(event);
                  }}
                />
                <CardInput
                  disabled
                  title="app version"
                  value={screenData.appVersion}
                  onInputChange={(event) => {
                    console.log(event);
                  }}
                />
                <CardInput
                  disabled
                  title="ip address"
                  value={screenData.deviceIp}
                  icon={<AdIcon name="wifi" />}
                  onInputChange={(event) => {
                    console.log(event);
                  }}
                />
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
              <div className={`${styles.status} ${styles[status || 'offline']}`}>
                <StatusBadge status='offline' />
              </div>
            }
          />
        </div>
      }
    />
  );
}
