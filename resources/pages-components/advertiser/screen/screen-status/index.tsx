import { AdsliveCaption } from "../../../../components/typography";
import { SCREEN_STATUS_LABEL } from "../../../../definitions/constants";
import { SCREEN_STATUS } from "../../../../definitions/enums";
import styles from "./styles.module.scss";

export type AdvertiserScreenStatusProps = {
  status?: SCREEN_STATUS;
};

const screenStatusClassName = {
  [SCREEN_STATUS.LIVE]: styles.live,
  [SCREEN_STATUS.OFFLINE]: styles.offline,
  [SCREEN_STATUS.DISCONNECTED]: styles.disconnected,
  [SCREEN_STATUS.POWER_OFF]: styles.powerOff,
};

export default function AdvertiserScreenStatus({
  status,
}: AdvertiserScreenStatusProps) {
  return (
    <AdsliveCaption
      className={`${styles.advertiserScreenStatus} ${screenStatusClassName[status]}`}
    >
      {SCREEN_STATUS_LABEL[status]}
    </AdsliveCaption>
  );
}
