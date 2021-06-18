import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import styles from "./styles.module.scss";
import { MutedText } from "../../../../components/typography";
import VideosPlayer from "../../../../components/videos-player";
import useAdvertiserStore from "../../../../stores/advertiser-store/advertiser-store.hook";
import { AdIcon } from "../../../../components/icon";
import AdvertiserApiClient from "../../../../api-clients/advertiser.api-client";
export interface NewMedia {
  withMediaRecId: string,
  order: number
}
export default function SelectVideosModal(props) {
  const { handleShow, adsSet, onChange } = props;
  const { videos: allVideos } = useAdvertiserStore();
  const [videoLib, setVideoLib] = useState([]);
  const [selectedVideos, setSelectVideo] = useState([]);
  useEffect(()=> {
    const addedMediaVideos = adsSet?.adsSetMediaList.map(e => e.withMedia) || []
    setVideoLib(allVideos.filter(v => !addedMediaVideos.find(data => data.id == v.id)))
    return ()=> {
      setSelectVideo([])
      console.log(this);
    }
  }, [adsSet])
  const handleSelectVideo = (video) => {
    checkSelected(video)
      ? setSelectVideo(selectedVideos.filter((e) => e.id !== video.id))
      : setSelectVideo([...selectedVideos, video]);
  };
  const handleAddVideos = async () => {
    if (!selectedVideos.length) return;
    const newMedia: NewMedia[] = selectedVideos.map((video, i) => ({
      withMediaRecId: video.recId,
      order: i,
    }));
    console.log('OnChange');
    
    onChange(newMedia)
  };
  const checkSelected = (video) =>
    selectedVideos.find((v) => v.id === video.id);
  return (
    <Modal
      show={handleShow.openVideoLib}
      onHide={() => handleShow.setOpenVideoLib(false)}
    >
      <Modal.Header closeButton>
        <Modal.Title>Advertise Video Library</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {!!videoLib?.length && (
          <div className={styles.videosContainer}>
            {videoLib.map((video, i) => (
              <span
                key={i}
                className={`${styles.videoWrapper} ${
                  checkSelected(video) ? styles.selected : ""
                }`}
                onClick={() => handleSelectVideo(video)}
              >
                <AdIcon
                  className={styles.selectIcon}
                  name="check-in-a-circle-highlight"
                />
                <VideosPlayer isPreview key={i} data={video} />
                <div className={styles.info}>{video.name}</div>
              </span>
            ))}
          </div>
        )}
        {videoLib?.length == 0 && <MutedText>Not Found</MutedText>}
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary"
          onClick={() => handleShow.setOpenVideoLib(false)}
        >
          Cancel
        </Button>
        <Button variant="primary" onClick={handleAddVideos} disabled={!selectedVideos.length}>
          Add Videos
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
