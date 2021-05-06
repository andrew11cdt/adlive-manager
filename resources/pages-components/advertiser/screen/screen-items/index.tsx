import styles from "./styles.module.scss";

export type AdvertiserScreenItemsProps = {
  screens?: any[];
};

export default function AdvertiserScreenItems({
  screens,
}: AdvertiserScreenItemsProps) {
  return (
    <div className={styles.advertiserScreens}>
      {screens.map((screen) => null)}
    </div>
  );
}
