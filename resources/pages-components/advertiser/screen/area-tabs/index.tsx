import { useRef } from "react";
import jquery from "../../../../utils/jquery.util";
import AdsliveIcon, {
  ADSLIVE_ICON_SIZE,
  ADSLIVE_ICON_TYPE,
  ADSLIVE_ICON_VARIANT,
} from "../../../../components/icon";
import { AdsliveBody16 } from "../../../../components/typography";
import styles from "./styles.module.scss";
import { parseTitle } from "../../../../utils/common.util";

export default function AdvertiserAreaTabs({
  areas = [],
  currentArea,
  changeCurrentArea,
  showSetting
}) {
  const areasRef = useRef();

  return (
    <div className={styles.advertiserAreaTabs}>
      <div ref={areasRef} className={styles.areas}>
        <div
          className={styles.areasList}
          style={{ width: `calc(50% * ${areas?.length})` }}
        >
          {areas.map((area, index) => (
            <AdsliveBody16
              key={index}
              id={`area-${area.id}`}
              className={`${styles.area} ${
                currentArea?.id === area?.id ? styles.actived : ""
              }`}
              onClick={
                currentArea?.id === area?.id
                  ? null
                  : () => {
                      const areaLeftPos =
                        document.getElementById(`area-${area.id}`).offsetLeft ||
                        16;
                      console.log("left", areaLeftPos);
                      areasRef?.current &&
                        jquery(areasRef?.current).animate(
                          { scrollLeft: areaLeftPos - 16 },
                          150
                        );
                      changeCurrentArea && changeCurrentArea(area);
                    }
              }
            >
              {parseTitle(area?.name)}
            </AdsliveBody16>
          ))}
        </div>
      </div>
      <AdsliveIcon
        className={styles.icon}
        variant={ADSLIVE_ICON_VARIANT.SETTING}
        type={ADSLIVE_ICON_TYPE.BOLD}
        size={ADSLIVE_ICON_SIZE.SMALL}
        onClick={showSetting}
      />
    </div>
  );
}
