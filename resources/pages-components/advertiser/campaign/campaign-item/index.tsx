import AdCard from "../../../../components/card";
import { AdIcon } from "../../../../components/icon";
import StatusBadge from "../../../../components/status-badge";
import { displayTime, parseTitle } from "../../../../utils/common.util";
import styles from "./styles.module.scss";

export default function CampaignItem(props) {
  const { campaign } = props;
  const { name, beginTime, endTime, videos, status, screenIds } = campaign || {}
  return (
    <div className={styles.campaignContainer}>
      <AdCard
        clickable
        body={
          <div className={styles.campaign}>
            <div>{name && parseTitle(name)}</div>
            {beginTime && endTime && <div style={{ color: "#7F838E" }}>{displayTime(beginTime)} - {displayTime(endTime)}</div>}
            <div>
              {videos?.map(video => (
                <span key={video.name} className={styles.icon}>
                  <AdIcon url={video.photoUrl} r="2px" w="24px" h="24px" /> 
                </span>
              ))}
              {`${videos?.length || 0} videos cast on ${screenIds || '-'} screens`}
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
