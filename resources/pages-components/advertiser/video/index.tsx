import { useEffect, useState } from "react";
import AdvertiserApiClient from "../../../api-clients/advertiser.api-client";
import { AdIcon } from "../../../components/icon";
import { MutedText } from "../../../components/typography";
import VideosPlayer from "../../../components/videos-player";
import useAdvertiserStore from "../../../stores/advertiser-store/advertiser-store.hook";
import { timeout } from "../../../utils/common.util";
import AdvertiserContent from "../others/advertiser-content";
import styles from "./styles.module.scss";
import VideoDetails from "./video-details";
export interface VideoType {
  id: string,
  name: string,
  recId: string,
  url: string,
}
export default function AdvertiserVideo() {
  const { videos, setVideos } = useAdvertiserStore();
  // let [videoList, setVideoList] = useState(videos);
  const [detailsVideo, setDetailsVideo] = useState<VideoType>(null);
  const [showNew, setShowNew] = useState(null);
  const [showDetails, setShowDetails] = useState(null);
  const handleDelete = async () => {
    const res = AdvertiserApiClient.deleteVideo(detailsVideo.id);
    if (res) {
      await loadVideos()
      await timeout(1000)
      setShowDetails(false)
    }
  };
  const handleSelectVideo = async (video) => {
    if (video) {
      setDetailsVideo(video);
      setShowDetails(true);
    }
  };
  useEffect(() => {
    console.log('loadUseEffect =======');
    console.log(showNew, showDetails);
    
    if (!showNew && !showDetails) loadVideos()
  }, [showNew, showDetails]);
  const loadVideos = async () => {
    const res: any = await AdvertiserApiClient.getVideos()
    if (res?.data) setVideos(res.data);
  }
  return (
    <>
      {showDetails ? (
        <>
          <VideoDetails
            videoData={detailsVideo}
            returnPreLayout={() => setShowDetails(false)}
            deleteData={() => handleDelete()}
          />
        </>
      ) : showNew ? (
        <>
          <VideoDetails isNew returnPreLayout={() => setShowNew(false)} />
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
            {!!videos?.length && (
              <>
                {videos.map((video, i) => (
                  <span
                    key={i}
                    className={styles.videoWrapper}
                    onClick={() => handleSelectVideo(video)}
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
