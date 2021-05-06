import AdsliveIcon, {
  ADSLIVE_ICON_COLOR,
  ADSLIVE_ICON_TYPE,
} from "../../../components/icon";
import { AdsliveCaption } from "../../../components/typography";
import { advertiserHeaderItems } from "../definition";
import styles from "./styles.module.scss";

export type AdvertiserHeaderProps = {
  activedItemId?: string;
  switchToItem?: (itemId: string) => void;
};

export default function AdvertiserHeader({
  activedItemId,
  switchToItem,
}: AdvertiserHeaderProps) {
  return (
    <div className={styles.advertiserHeader}>
      {advertiserHeaderItems.map((item) => (
        <div
          key={item?.id}
          className={`${styles.advertiserHeaderItem} ${
            item?.id === activedItemId ? styles.actived : ""
          }`}
          onClick={
            item?.id === activedItemId
              ? null
              : () => switchToItem && switchToItem(item?.id)
          }
        >
          <AdsliveIcon
            variant={item?.iconVariant}
            type={
              item?.id === activedItemId
                ? ADSLIVE_ICON_TYPE.BOLD
                : ADSLIVE_ICON_TYPE.REGULAR
            }
            color={
              item?.id === activedItemId
                ? ADSLIVE_ICON_COLOR.PRIMARY
                : ADSLIVE_ICON_COLOR.NORMAL
            }
            // className={styles.advertiserHeaderItemIcon}
          />
          <AdsliveCaption className={styles.advertiserHeaderItemText}>
            {item?.title}
          </AdsliveCaption>
        </div>
      ))}
    </div>
  );
}
