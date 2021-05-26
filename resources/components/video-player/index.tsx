import { useState } from 'react';
import ReactPlayer from 'react-player'
import styles from "./styles.module.scss";
export function VideoPlayer({data}) {
  const videoInfo = {
    name: 'Ok - Binz',
    type: 'mp4',
    length: '5p12'
  } 
  const [showInfo, setShowInfo] = useState(true)
  return (
    <div className={styles.playerWrapper}>
        {showInfo && (
          <div className={styles.info}>
            <div>
              Name: {videoInfo.name}
            </div>
            <div>
              Length: {videoInfo.length}
            </div>
          </div>
        )}
        <ReactPlayer
         className={styles.player}
          url='https://www.youtube.com/watch?v=SNES5Y-tYxM'
          width='100%'
          height='100%'
          // onReady={()=> setShowInfo(true)}
          onPause={()=> setShowInfo(true)}
          onPlay={()=> setShowInfo(false)}
        />
      </div>
  );
}