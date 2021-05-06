import { useMemo, useState } from "react";
import { advertiserHeaderItems } from "./definition";
import AdvertiserHeader from "./header";
import styles from "./styles.module.scss";

export default function AdvertiserLayout() {
  const [currentHeaderItemId, setCurrentHeaderItemId] = useState(
    advertiserHeaderItems[0].id
  );
  const currentHeaderItem = useMemo(() => {
    return advertiserHeaderItems.find(
      (item) => item.id === currentHeaderItemId
    );
  }, [currentHeaderItemId]);

  const switchContent = (itemId: string) => {
    setCurrentHeaderItemId(itemId);
  };

  const ContentComponent = currentHeaderItem?.contentComponent as any;

  return (
    <div className={styles.advertiserLayout}>
      <div className={styles.contentWrapper}>
        {ContentComponent && <ContentComponent />}
      </div>
      <div className={styles.headerWrapper}>
        <AdvertiserHeader
          activedItemId={currentHeaderItemId}
          switchToItem={switchContent}
        />
      </div>
    </div>
  );
}
