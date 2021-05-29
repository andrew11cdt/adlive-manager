import { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import styles from "./styles.module.scss";
export default function VideoPlayer({ data }) {
  const [videoFile, setVideoFile] = useState(null);
  const videoData = data || {
    url: "https://www.youtube.com/watch?v=SNES5Y-tYxM",
    name: "Ok - Binz",
    type: "mp4",
    length: "5p12",
  }
  const [showInfo, setShowInfo] = useState(true);
  useEffect(()=> {
    setVideoFile(videoData)
    console.log(videoFile);
  }, [])
  return (
    <>
      {videoFile && (
        <div className={styles.playerWrapper}>
          {showInfo && (
            <div className={styles.info}>
              <div>Name: {videoFile.name}</div>
              <div>Length: {videoFile.length}</div>
            </div>
          )}
          <ReactPlayer
            className={styles.player}
            url={videoFile.url}
            width="100%"
            height="100%"
            // onReady={()=> setShowInfo(true)}
            onPause={() => setShowInfo(true)}
            onPlay={() => setShowInfo(false)}
          />
        </div>
      )}
    </>
  );
}
