import { Button, Container, Row } from "react-bootstrap";
import { AdButton } from "../../../../components/button";
import AdCard, { CardDragItem, CardInput } from "../../../../components/card";
import Divider from "../../../../components/divider";
import AdsliveIcon, {
  AdIcon,
  ADSLIVE_ICON_COLOR,
  ADSLIVE_ICON_SIZE,
  ADSLIVE_ICON_TYPE,
  ADSLIVE_ICON_VARIANT,
} from "../../../../components/icon";
import { AdsliveH4 } from "../../../../components/typography";
import SubLayout from "../../../sub-layout";
import styles from "./styles.module.scss";

export default function LocationSetting({ returnPreLayout, locationData }) {
  {
    console.log({ locationData });
  }
  const addArea = (area) => {};
  return (
    <SubLayout
      header={
        <>
          <AdsliveIcon
            variant={ADSLIVE_ICON_VARIANT.FULL_LEFT_ARROW}
            className={styles.icon}
            type={ADSLIVE_ICON_TYPE.BOLD}
            size={ADSLIVE_ICON_SIZE.SMALL}
            onClick={returnPreLayout}
          />
          <AdsliveH4>Location Setting</AdsliveH4>
        </>
      }
      content={
        <div style={{ padding: "16px" }}>
          <AdCard
            header={<div>{locationData.name}</div>}
            body={
              <>
                <CardInput
                  title="address"
                  value={locationData.address?.description}
                  onInputChange={(event) => {
                    console.log(event);
                  }}
                />
                {locationData &&
                  locationData.areas.map((area, i) => {
                    return (
                      <div key={i}>
                        <CardDragItem onDelete={null} onDrag={null}>
                          <div>{area.name}</div>
                        </CardDragItem>
                        <div className="pt-4">
                          <Divider />
                        </div>
                      </div>
                    );
                  })}
                <AdButton
                  cardBtn
                  ghost
                  icon={
                    <AdsliveIcon
                      variant={ADSLIVE_ICON_VARIANT.CIRCLE_PLUS}
                      color={ADSLIVE_ICON_COLOR.PRIMARY}
                      type={ADSLIVE_ICON_TYPE.BOLD}
                      size={ADSLIVE_ICON_SIZE.SMALL}
                    />
                  }
                  title="ADD MORE AREA"
                  style={{ padding: "20px" }}
                  onClick={addArea}
                />
              </>
            }
          />
          <div className="mt-4">
            <AdButton
              cardBtn
              dash
              icon={<AdIcon name="in-a-circle" />}
              title="ADD LOCATION"
              style={{ padding: "20px" }}
              onClick={addArea}
            />
          </div>
        </div>
      }
    />
  );
}
