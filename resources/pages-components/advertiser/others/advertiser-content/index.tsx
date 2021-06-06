import { AdsliveH4 } from "../../../../components/typography";
import { AdsliveComponentProps } from "../../../../definitions/types";
import styles from "./styles.module.scss";

export type AdvertiserContentProps = {
  headerTitle?: any;
  headerLeftContent?: any;
  headerRightContent?: any;
  headerBottomContent?: any;
  children?: any;
} & AdsliveComponentProps;

export default function AdvertiserContent({
  className,
  style,
  headerLeftContent,
  headerRightContent,
  headerBottomContent,
  headerTitle,
  children,
}: AdvertiserContentProps) {
  return (
    <div className={styles.advertiserContent}>
      <div className={styles.advertiserContentHeader}>
        <div className={styles.advertiserContentHeaderTop}>
          <div className={styles.advertiserContentHeaderTopLeft}>
            {headerTitle}
            {headerLeftContent}
          </div>
          <div className={styles.advertiserContentHeaderTopRight}>
            {headerRightContent}
          </div>
        </div>
        {headerBottomContent && (
          <div className={styles.advertiserContentHeaderBottom}>
            {headerBottomContent}
          </div>
        )}
      </div>
      <div className={styles.advertiserContentContent}>{children}</div>
    </div>
  );
}
