import { useState } from "react";
import ReactPlayer from "react-player";
import styles from "./styles.module.scss";
import { AdIcon } from "../icon";
import { Alert, Button } from "react-bootstrap";
import { AdButton } from "../button";
import {
  AdVideo,
  VideoResponseData,
} from "../../api-clients/types/cloudinary-response";

function getVideosUrl(data: AdVideo) {
  if (data) return Array.isArray(data) ? data.map((e) => e.url) : data.url;
}

export default function VideosPlayer(props) {
  const { data, onClickPreview, isPreview } = props;
  const [playing, setPlaying] = useState(false);
  const [showInfo, setShowInfo] = useState(true);
  return (
    <div className={styles.playerWrapper}>
      {data && (
        <>
          {!isPreview && (
            <>
              {showInfo && (
                <div className={styles.info}>
                  <div>Name: {data.name}</div>
                </div>
              )}
              <div
                className={`${styles.playerActions} ${
                  playing ? styles.playing : ""
                }`}
                onClick={() => setPlaying(!playing)}
              >
                <AdIcon name={playing ? "paused" : "play"} w="60px" />
              </div>
            </>
          )}
          <ReactPlayer
            style={{ borderRadius: "6px" }}
            url={getVideosUrl(data)}
            width="100%"
            height="100%"
            playing={playing}
            // onClickPreview={onClickPreview}
            onPause={() => setShowInfo(true)}
            onPlay={() => setShowInfo(false)}
          />
        </>
      )}
    </div>
  );
}
