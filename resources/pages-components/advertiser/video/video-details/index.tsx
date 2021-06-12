import { useState } from "react";
import { Button, Container, Row } from "react-bootstrap";
import AdvertiserApiClient from "../../../../api-clients/advertiser.api-client";
import { AdButton } from "../../../../components/button";
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
import VideoUploader from "../../../../components/video-uploader";
import VideosPlayer from "../../../../components/videos-player";
import SubLayout from "../../../sub-layout";
import styles from "./styles.module.scss";

export default function VideoDetails(props) {
  const { isNew, returnPreLayout, deleteData, videoData = {} } = props;
  const [dataState, setDataState] = useState(videoData);
  const addArea = (area) => {};
  const handleInputChange = (key, event) => {
    const val = event.target.value;
    setDataState({ ...dataState, ...{ [key]: val } });
  };
  const handleInputFocusOut = async (key, event) => {
    if ( videoData[key] !== dataState[key]) {
      const body = { [key]: dataState[key] };
      if (isNew) return
      console.log("UPDATE REQUEST");
      const res:any = await AdvertiserApiClient.updateVideo(dataState.id, body);
      console.log(res);
      if (res.data) {
        setDataState(res.data);
      }
    }
  };
  const handleNewData = (data) => {
    console.log(data);
    const url = data?.secure_url
    if (url) setDataState({ ...dataState, url});
  }
  const handleUploadVideo = async() => {
    if (isNew) {
      const body = dataState;
      console.log("create new", body);
      if (!body['name'] || !body['url']) return
      const res:any = await AdvertiserApiClient.postVideo(body);
      if (res.data) {
        setDataState(res.data);
      }
    }
  }
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
            <AdsliveH4>{videoData.name || 'Upload video'}</AdsliveH4>
          </div>
          <AdIcon name="Delete" onClick={deleteData} />
        </div>
      }
      content={
        <div style={{ padding: "16px" }}>
          {
            isNew ?
              <VideoUploader onChange={(data) => handleNewData(data)}/>
            : <VideosPlayer data={dataState} />
          }
          <AdCard
            header={
              <div className={styles.infoHeader}>
                {/* Uploaded: {videoData} */}
                Uploaded: {}
              </div>
            }
            body={
              <>
                <CardInput
                  title="Title"
                  value={dataState?.name}
                  onInputChange={(event) => handleInputChange('name', event)}
                  onFocusOut={(event) => handleInputFocusOut('name', event)}
                />
                <CardInput
                  disabled
                  title="Tag"
                  value={dataState?.tag}
                  onInputChange={(event) => handleInputChange('tag', event)}
                  onFocusOut={(event) => handleInputFocusOut('tag', event)}
                />
              </>
            }
            footer={
              <>
                {isNew && 
                  <AdButton style={{ justifyContent: 'center' }} cardBtn title="Upload" onClick={() => handleUploadVideo()} />
                }
              </>
            }
          />
        </div>
      }
    />
  );
}
