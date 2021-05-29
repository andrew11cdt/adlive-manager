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
import ScreenDetails from "./screen-details";
import ScanQR from "./scanQR";
import AdvertiserScreenItems from "./screen-items";
import styles from "./styles.module.scss";

export default function AdvertiserScreen() {
  const { locations } = useAdvertiserStore();
  const [currentLocationId, setCurrentLocationId] = useState(null);
  const [currentAreaId, setCurrentAreaId] = useState(null);
  const [showSetting, setShowSetting] = useState(false);
  const [showNewScreen, setShowNewScreen] = useState(false);
  const [selectedScreen, setSelectScreen] = useState(null);

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
  const Setting = (
    <LocationSetting
      returnPreLayout={() => setShowSetting(false)}
      locationData={currentLocation}
    />
  );
  const NewScreenLayout = (
    // <ScanQR
    //   returnPreLayout={() => setShowNewScreen(false)}
    //   locationData={currentLocation}
    // />
    <ScreenDetails
      isNew
      returnPreLayout={() => setShowNewScreen(false)}
      locationData={currentLocation}
      deleteScreen={()=> {}}
      screenData={
        {
          "recId": "recnnpv9ngUpvmYzO",
          "id": 6,
          "code": "02OH2CZR",
          "deviceCode": "13",
          "deviceType": "SmartTV SamSung",
          "deviceName": "TV SamSung H3",
          "deviceIp": "192.168.1.101",
          "deviceOS": "Android 10",
          "appVersion": "1.0.0",
          "createdAt": "2021-05-21T16:35:29.000Z"
        }
      }
    />
  );
  const ScreenDetailsLayout = (
    <ScreenDetails
      returnPreLayout={() => setSelectScreen(false)}
      locationData={currentLocation}
      deleteScreen={()=> {}}
      screenData={selectedScreen}
    />
  );
  return (
    <div style={{ height: "100%" }}>
      {selectedScreen ? (
        ScreenDetailsLayout
      ) : showNewScreen ? (
        NewScreenLayout
      ) : showSetting ? (
        Setting
      ) : (
        <>
          <AdvertiserContent
            headerTitle={
              locations?.loading ? "-----" : locations?.locations[0]?.name
            }
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
                  onClick={() => {
                    setShowNewScreen(true);
                  }}
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
                  setShowSetting(!showSetting);
                }}
              />
            }
          >
            {locations?.loading && (
              <AdsliveLoading size={ADSLIVE_LOADING_SIZE.EXTRA_SMALL} />
            )}
          </AdvertiserContent>
          {locations?.locations.map((location, i) => (
            <AdvertiserScreenItems
              id={location.areas[0]?.id}
              key={i}
              areaName={location.areas[0].name}
              selectScreen={(screen) => setSelectScreen(screen)}
            />
          ))}
        </>
      )}
    </div>
  );
}
