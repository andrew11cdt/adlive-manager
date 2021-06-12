import { useEffect, useState } from "react";
import AdvertiserApiClient from "../../../api-clients/advertiser.api-client";
import AdCard from "../../../components/card";
import { AdIcon } from "../../../components/icon";
import { MutedText } from "../../../components/typography";
import VideosPlayer from "../../../components/videos-player";
import useAdvertiserStore from "../../../stores/advertiser-store/advertiser-store.hook";
import AdvertiserContent from "../others/advertiser-content";
import styles from "./styles.module.scss";
import VideoDetails from "./video-details";

export default function AdvertiserVideo() {
  const { videos } = useAdvertiserStore();
  let [videoList, setVideoList] = useState(videos)
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [showNew, setShowNew] = useState(null);
  const [showDetails, setShowDetails] = useState(null);
  console.log({ videos });
  const handleDelete = () => {

  }
  useEffect(() => {
    if (showNew === false) {
      AdvertiserApiClient.getVideos().then((res: any) => {
        if (res?.data) setVideoList(res.data)
      })
    }
  }, [showNew])
  return (
    <>
      {showDetails ? (
        <>
          <VideoDetails videoData={selectedVideo}  returnPreLayout={() => setShowDetails(false)} deleteData={() => handleDelete()}/>
        </>
      ) : 
      showNew ? (
        <>
          <VideoDetails isNew returnPreLayout={() => setShowNew(false)} deleteData={() => handleDelete()}/>
        </>
      ) : (
        <>
          <AdvertiserContent
            headerTitle="Videos"
            headerRightContent={
              <div className={styles.rightControls}>
                <AdIcon mr="16px" name="search" onClick={() => null} />
                <AdIcon
                  mr="16px"
                  name="filters-vertical"
                  onClick={() => null}
                />
                <AdIcon name="circle-bold" onClick={() => setShowNew(true)} />
              </div>
            }
          />
          <div className={styles.videosContainer}>
            {!!videoList?.length && (
              <>
                {videoList.map((video, i) => (
                  <span
                    key={i}
                    className={styles.videoWrapper}
                    onClick={() => {
                      setSelectedVideo(video)
                      setShowDetails(true)
                    }}
                  >
                    <VideosPlayer isPreview key={i} data={video} />
                    <span className={styles.info}>{video.name}</span>
                  </span>
                ))}
              </>
            )}
            {videos?.error?.status == 404 && <MutedText>Not Found</MutedText>}
          </div>
        </>
      )}
    </>
  );
}
