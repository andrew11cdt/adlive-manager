import { useEffect, useState } from "react";
import AdvertiserApiClient from "../../../api-clients/advertiser.api-client";
import ConfirmModal from "../../../components/confirmModal";
import { AdIcon } from "../../../components/icon";
import AdsliveLoading from "../../../components/loading";
import NoData from "../../../components/no-data";
import { Toaster } from "../../../components/toaster";
import { MutedText } from "../../../components/typography";
import VideosPlayer from "../../../components/videos-player";
import useAdvertiserStore from "../../../stores/advertiser-store/advertiser-store.hook";
import { timeout } from "../../../utils/common.util";
import AdvertiserContent from "../others/advertiser-content";
import styles from "./styles.module.scss";
import VideoDetails from "./video-details";
export interface VideoType {
  id: string;
  name: string;
  recId: string;
  url: string;
}
export default function AdvertiserVideo() {
  const { videos, setVideos } = useAdvertiserStore();
  // let [videoList, setVideoList] = useState(videos);
  const [detailsVideo, setDetailsVideo] = useState<VideoType>(null);
  const [showNew, setShowNew] = useState(null);
  const [showDetails, setShowDetails] = useState(null);
  const [showConfirmDelete, setShowConfirmDelete] = useState(null);
  const [loading, setLoading] = useState(null);
  const [loadingVideos, setLoadingVideos] = useState({});
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const handleDelete = async () => {
    setShowConfirmDelete(false)
    setShowDetails(false);
    setLoading(true)
    setLoadingVideos({ ...loadingVideos, [detailsVideo.id]: true })
    const res: any = await AdvertiserApiClient.deleteVideo(detailsVideo.id);
    if (res) setSuccess('Deleted video!')
    if (res.error) setError(res.error.data?.message || 'Delete video failed')
    loadVideos()
  };
  const handleSelectVideo = async (video) => {
    if (video) {
      setDetailsVideo(video);
      setShowDetails(true);
    }
  };
  const loadVideos = async () => {
    setLoading(true)
    setVideos(null)
    const res: any = await AdvertiserApiClient.getVideos();
    if (res?.data) setVideos(res.data);
    setLoading(false)
    setLoadingVideos({})
  };
  return (
    <>
      <Toaster type="error" handleSetToast={setError} message={error} />
      <Toaster
        type="success"
        handleSetToast={setSuccess}
        message={success}
      />
      {showConfirmDelete && <ConfirmModal title="delete" onExecute={handleDelete} show={showConfirmDelete} setShow={setShowConfirmDelete} />}
      {showDetails ? (
        <>
          <VideoDetails
            loadVideos={loadVideos}
            videoData={detailsVideo}
            returnPreLayout={({ changed }) => {
              setShowDetails(false)
              if (changed) loadVideos()
            }}
            deleteData={() => {
              setShowConfirmDelete(true)
            }}
          />
        </>
      ) : showNew ? (
        <>
          <VideoDetails isNew returnPreLayout={(changed) => {
            setShowNew(false)
            if(changed) loadVideos()
          }} />
        </>
      ) : (
        <>
          <AdvertiserContent
            headerTitle="Videos"
            headerRightContent={
              <div className={styles.rightControls}>
                {/* <AdIcon mr="16px" name="search" onClick={() => null} /> */}
                {/* <AdIcon
                  mr="16px"
                  name="filters-vertical"
                  onClick={() => null}
                /> */}
                <AdIcon name="circle-bold" onClick={() => setShowNew(true)} />
              </div>
            }
          />
          {!loading && !!videos?.length && (
            <div className={styles.videosContainer}>
              {[0, 1].map((remainer) => (
                <div>
                  {videos
                    .filter((e, i) => i % 2 === remainer)
                    .map((video, i) => (
                      <div
                        key={i}
                        className={styles.videoWrapper}
                        onClick={() => handleSelectVideo(video)}
                      >
                        <VideosPlayer isLoading={loadingVideos[video.id]} isPreview key={i} data={video} />
                        <span className={styles.info}>{video.name}</span>
                      </div>
                    ))}
                </div>
              ))}
            </div>
          )}
          {videos?.error?.status == 404 && <MutedText>Not Found</MutedText>}
          {!loading && videos?.length === 0 && <NoData />}
          {loading && <AdsliveLoading />}
        </>
      )}
    </>
  );
}
