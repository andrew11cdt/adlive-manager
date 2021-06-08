import { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import styles from "./styles.module.scss";

import { AdvancedImage } from "@cloudinary/react";
import { CloudinaryImage } from "@cloudinary/base/assets/CloudinaryImage";
// import URLConfig from "@cloudinary/base/config/URLConfig";
import CloudConfig from "@cloudinary/base/config/CloudConfig";
import { AdIcon } from "../icon";
import CloudinaryApi from "../../api-clients/cloudinary-api";
import AdsliveLoading, { ADSLIVE_LOADING_SIZE } from "../loading";
import { Alert, Button } from "react-bootstrap";
import { AdButton } from "../button";
import { VideoResponseData } from "../../api-clients/types/cloudinary-response";

const Cloudinary = () => {
  // Set the Cloud configuration and URL configuration
  // let cloudConfig = new CloudConfig({cloudName: 'dngez6bhp'});
  // let urlConfig = new URLConfig({secure: true});

  // Instantiate and configure a CloudinaryImage object.
  // let myImage = new CloudinaryImage('sample', cloudConfig);

  // The URL of the image is: https://res.cloudinary.com/demo/image/upload/sample

  // Render the image in a React component.
  return <div>{/* <AdvancedImage cldImg={myImage} /> */}</div>;
};

export default function VideoPlayer(props) {
  const { data, onChange } = props;
  const [videoFile, setVideoFile] = useState<VideoResponseData>(null);
  const [uploading, setUploading] = useState(null);
  const [error, setError] = useState(null);

  const [playing, setPlaying] = useState(false);
  const videoData = data || {
    url: "https://www.youtube.com/watch?v=SNES5Y-tYxM",
    name: "Ok - Binz",
    type: "mp4",
    length: "5p12",
  };
  const [showInfo, setShowInfo] = useState(true);
  useEffect(() => {
    // setVideoFile(videoData)
    handleUpload(null);
    console.log(videoFile);
  }, []);
  console.log(process.env.NEXT_PUBLIC_CLOUDINARY_NAME);
  const handleUpload = async (file) => {
    console.log(file);
    setUploading(true);
    try {
      const data = await CloudinaryApi.uploadVideo(file);
      console.log(data);
      if (data) {
        setUploading(false);
        setVideoFile(data);
      }
    } catch (error) {
      console.log({ error });
      setError(error);
    }
  };
  return (
    <div className={styles.playerWrapper}>
      {videoFile ? (
        <>
          {showInfo && (
            <div className={styles.info}>
              <div>Name: {videoFile.original_filename}</div>
              <div>Type: {videoFile.format}</div>
              <div>Length: {videoFile.duration}</div>
            </div>
          )}
          <div
            className={`${styles.playerActions} ${
              playing ? styles.playing : ""
            }`}
            onClick={() => setPlaying(!playing)}
          >
            <AdIcon name={playing ? "pause" : "play"} w="60px" />
          </div>
          <ReactPlayer
            className={styles.player}
            url={videoFile.secure_url}
            width="100%"
            height="100%"
            playing={playing}
            // onReady={()=> setShowInfo(true)}
            onPause={() => setShowInfo(true)}
            onPlay={() => setShowInfo(false)}
          />
        </>
      ) : (
        <div
          className={`${styles.uploadContainer} ${
            !uploading ? styles.clickable : ""
          }`}
        >
          {uploading ? (
            <>
              {error ? (
                <div className={styles.errorContainer}>
                  <Alert variant="danger">{error.message}</Alert>
                  <Button
                    variant="outline-secondary"
                    size="sm"
                    onClick={() => {
                      setError(false);
                      setUploading(false);
                    }}
                  >
                    Cancel
                  </Button>
                </div>
              ) : (
                <div className={styles.loading}>
                  <AdsliveLoading size={ADSLIVE_LOADING_SIZE.LARGE} />
                  <span style={{ marginLeft: "20px" }}>Uploading...</span>
                </div>
              )}
            </>
          ) : (
            <button className={styles.uploadBtn}>
              <input
                type="file"
                onChange={(event) => handleUpload(event.target.files[0])}
              />
              <AdIcon name="Video" w="30px" m="12px" />
              <b>Upload 1 video</b>
            </button>
          )}
        </div>
      )}
    </div>
  );
}
