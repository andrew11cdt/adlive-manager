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
  const [defaultData, setDefaultData] = useState(videoData);
  const [error, setError] = useState(null);
  const [successMsg, setSuccessMsg] = useState(null);
  const [dataChanged, setDataChanged] = useState(null);
  const [loadingData, setLoadingData] = useState({})
  function handleInputChange(key, event) {
    const val = event.target.value;
    setDataState({ ...dataState, [key]: val});
  };
  async function handleInputFocusOut(key, changed) {
    if (dataState && changed) {
      const body = { [key]: dataState[key] };
      if (isNew) return
      console.log("UPDATE REQUEST");
      setLoadingData({...loadingData, [key]: true})
      const res:any = await AdvertiserApiClient.updateVideo(dataState.id, body);
      if (res.data) {
        setDataState(res.data)
        setDefaultData(res.data)
        setSuccessMsg('Updated successful')
        setDataChanged(true)
        setLoadingData({...loadingData, [key]: false})
      } else if (res.error) setError(res.error)
    }
  };
  function handleNewData(data) {
    const url = data?.secure_url, name = data?.original_filename
    if (url) {
      setDataState({ ...dataState, ...{url, name}})
      handleUploadVideo({url, name})
    }
  }
  async function handleUploadVideo(data?) {
    if (isNew) {
      const body = data || dataState;
      console.log("create new", body);
      if (!body['name'] || !body['url']) return
      const res:any = await AdvertiserApiClient.postVideo(body);
      if (res.data) {
        setDataState(res.data);
        await timeout(500)
        setDataChanged(true)
        returnPreLayout({ changed: dataChanged })
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
              onClick={() => returnPreLayout({ changed: dataChanged })}
            />
            <AdsliveH4>{dataState?.name || 'Upload video'}</AdsliveH4>
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
                  isLoading={loadingData['name']}
                  defaultValue={defaultData?.name}
                  onInputChange={(event) => handleInputChange('name', event)}
                  onFocusOut={(changed) => handleInputFocusOut('name', changed)}
                />
                <CardInput
                  disabled
                  title="Tag"
                  value={dataState?.tag}
                  onInputChange={(event) => handleInputChange('tag', event)}
                  onFocusOut={(changed) => handleInputFocusOut('tag', changed)}
                />
              </>
            }
            // footer={
            //   <>
            //     {isNew && !dataState.id &&
            //       <AdButton style={{ justifyContent: 'center' }} cardBtn title="Upload" onClick={() => handleUploadVideo()} />
            //     }
            //   </>
            // }
          />
        </div>
      }
    />
    </div>
  );
}
