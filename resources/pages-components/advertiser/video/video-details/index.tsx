import { useState } from "react";
import AdvertiserApiClient from "../../../../api-clients/advertiser.api-client";
import { AdButton } from "../../../../components/button";
import AdCard, {
  CardInput,
} from "../../../../components/card";
import AdsliveIcon, {
  AdIcon,
  ADSLIVE_ICON_SIZE,
  ADSLIVE_ICON_TYPE,
  ADSLIVE_ICON_VARIANT,
} from "../../../../components/icon";
import { Toaster } from "../../../../components/toaster";
import { AdsliveH4 } from "../../../../components/typography";
import VideoUploader from "../../../../components/video-uploader";
import VideosPlayer from "../../../../components/videos-player";
import { timeout } from "../../../../utils/common.util";
import SubLayout from "../../../sub-layout";
import styles from "./styles.module.scss";

export default function VideoDetails(props) {
  let { isNew, returnPreLayout, deleteData, videoData = {} } = props;
  const [dataState, setDataState] = useState(videoData);
  const [error, setError] = useState(null);
  const [successMsg, setSuccessMsg] = useState(null);
  const addArea = (area) => {};
  const handleInputChange = (key, event) => {
    const val = event.target.value;
    setDataState({ ...dataState, ...{ [key]: val } });
  };
  const handleInputFocusOut = async (key, event) => {
    if (dataState) {
      const body = { [key]: dataState[key] };
      if (isNew) return
      console.log("UPDATE REQUEST");
      const res:any = await AdvertiserApiClient.updateVideo(dataState.id, body);
      if (res.data) {
        setDataState(res.data)
        setSuccessMsg('Updated successful')
      } else if (res.error) setError(res.error)
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
        await timeout(500)
        returnPreLayout()
      }
    }
  }
  return (
    <div style={{ position: 'relative' }}>
    <Toaster type='success' handleSetToast={setSuccessMsg} message={successMsg} />
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
          {!isNew && <AdIcon name="Delete" onClick={deleteData} />}
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
                {isNew && !dataState.id &&
                  <AdButton style={{ justifyContent: 'center' }} cardBtn title="Upload" onClick={() => handleUploadVideo()} />
                }
              </>
            }
          />
        </div>
      }
    />
    </div>
  );
}
