import Card from "../../../../components/card";
import AdsliveIcon, { ADSLIVE_ICON_SIZE, ADSLIVE_ICON_TYPE, ADSLIVE_ICON_VARIANT } from "../../../../components/icon";
import { AdsliveH4 } from "../../../../components/typography";
import SubLayout from "../../../sub-layout";
import styles from "./styles.module.scss";

export default function LocationSetting({
  returnPreLayout,
  locationData
}) {
  {console.log({locationData})}
  return (
    <SubLayout
      header={
        <>
          <AdsliveIcon
            variant={ADSLIVE_ICON_VARIANT.FULL_LEFT_ARROW}
            className={styles.icon}
            type={ADSLIVE_ICON_TYPE.BOLD}
            size={ADSLIVE_ICON_SIZE.MEDIUM}
            onClick={returnPreLayout}
          />
          <AdsliveH4>Location Setting</AdsliveH4>
        </>
      }
      content={
        <Card>
          <div>
            {locationData.name}
          </div>
        </Card>
      }
    />
  );
}