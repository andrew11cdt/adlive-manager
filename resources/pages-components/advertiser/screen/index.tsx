import { path } from "ramda";
import { useEffect, useMemo, useState } from "react";
import AdsliveIcon, {
  ADSLIVE_ICON_COLOR,
  ADSLIVE_ICON_SIZE,
  ADSLIVE_ICON_TYPE,
  ADSLIVE_ICON_VARIANT,
} from "../../../components/icon";
import AdsliveLoading, {
  ADSLIVE_LOADING_SIZE,
} from "../../../components/loading";
import useAdvertiserStore from "../../../stores/advertiser-store/advertiser-store.hook";
import AdvertiserContent from "../others/advertiser-content";
import AdvertiserAreaTabs from "./area-tabs";
import LocationSetting from "./location-setting";
import styles from "./styles.module.scss";

export default function AdvertiserScreen() {
  const { locations } = useAdvertiserStore();
  const [currentLocationId, setCurrentLocationId] = useState(null);
  const [currentAreaId, setCurrentAreaId] = useState(null);
  const [showSetting, setShowSetting] = useState(false);

  const currentLocation = useMemo(() => {
    if (currentLocationId) {
      return locations?.locations.find(
        (location) => location.id === currentLocationId
      );
    }

    return null;
  }, [currentLocationId, locations?.locations]);
  const currentArea = useMemo(() => {
    if (currentAreaId) {
      return (currentLocation?.areas || []).find(
        (area) => area.id === currentAreaId
      );
    }
  }, [currentLocation, currentAreaId]);

  useEffect(() => {
    setCurrentAreaId((currentLocation?.areas || [])[0]?.id);
  }, [currentLocation]);

  useEffect(() => {
    if (!locations?.loading) {
      setCurrentLocationId(locations?.locations[0]?.id || null);
    }
  }, [locations?.loading, locations?.locations]);
  console.log(locations);

  return (
    <>
      {!showSetting ?
        <AdvertiserContent
          headerTitle={locations?.loading ? "-----" : locations?.locations[0]?.name}
          headerRightContent={
            <div className={styles.rightControls}>
              <AdsliveIcon
                className={styles.searchIcon}
                variant={ADSLIVE_ICON_VARIANT.SEARCH}
                type={ADSLIVE_ICON_TYPE.REGULAR}
                color={ADSLIVE_ICON_COLOR.NORMAL}
              />
              <AdsliveIcon
                className={styles.addIcon}
                variant={ADSLIVE_ICON_VARIANT.CIRCLE_PLUS}
                type={ADSLIVE_ICON_TYPE.BOLD}
                color={ADSLIVE_ICON_COLOR.PRIMARY}
                size={ADSLIVE_ICON_SIZE.SMALL}
                onClick={locations?.loading ? null : () => { }}
              />
            </div>
          }
          headerBottomContent={
            <AdvertiserAreaTabs
              areas={currentLocation?.areas || []}
              currentAreaId={currentAreaId}
              changeCurrentArea={(area) => {
                console.log("change current area", area);
                setCurrentAreaId(area?.id);
              }}
              showSetting={() => {
                setShowSetting(!showSetting)
              }}
            />
          }
        >
          {locations?.loading && (
            <AdsliveLoading size={ADSLIVE_LOADING_SIZE.EXTRA_SMALL} />
          )}
        </AdvertiserContent>
        :
        <LocationSetting returnPreLayout={() => setShowSetting(false)} locationData={currentLocation}/>
      }
    </>
  );
}
