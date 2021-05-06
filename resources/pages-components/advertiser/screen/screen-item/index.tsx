import { AdsliveSubtitle14 } from "../../../../components/typography";
import styles from "./styles.module.scss";

export type AdvertiserScreenItemProps = {
  screen?: any;
};

export default function AdvertiserScreenItem({
  screen,
}: AdvertiserScreenItemProps) {
  return (
    <div className={styles.advertiserScreen}>
      <AdsliveSubtitle14 className={styles.name}>
        {screen?.name}
      </AdsliveSubtitle14>
      <AdsliveSubtitle14 className={styles.code}>
        screen?.code
      </AdsliveSubtitle14>
    </div>
  );
}
