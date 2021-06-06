import AdCard from "../../../../components/card";
import { AdIcon } from "../../../../components/icon";
import StatusBadge from "../../../../components/status-badge";
import { displayTime } from "../../../../utils/common.util";
import styles from "./styles.module.scss";

export default function CampaignItem(props) {
  const { campaign } = props;
  const { title, from, to, videos, status } = campaign
  console.log(campaign);
  
  return (
    <div className={styles.campaignContainer}>
      <AdCard
        clickable
        body={
          <div className={styles.campaign}>
            <div>{title}</div>
            <div style={{ color: "#7F838E" }}>{displayTime(from)} - {displayTime(to)}</div>
            <div>
              {videos.map(video => (
                <span key={video.name} className={styles.icon}>
                  <AdIcon url={video.photoUrl} r="2px" w="24px" h="24px" /> 
                </span>
              ))}
              {`${videos.length} videos cast on 8 screens`}
            </div>
            <span className={styles.statusBadge}>
              <StatusBadge status={status} />
            </span>
          </div>
        }
      />
    </div>
  );
}
