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
import { Dropdown } from "react-bootstrap";
import AdvertiserApiClient from "../../../api-clients/advertiser.api-client";

export default function AdvertiserScreen() {
  const { locations, loadLocations } = useAdvertiserStore();
  const [currentLocation, setCurrentLocation] = useState(null);
  const [currentArea, setCurrentArea] = useState(null);
  const [showSetting, setShowSetting] = useState(false);
  const [showNewScreen, setShowNewScreen] = useState(false);
  const [selectedScreen, setSelectScreen] = useState(null);
  
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  
  const handleChangeLocation = (location) => {
    if (!location) return;
    setCurrentLocation(location);
    const areas = location.areas;
    setCurrentArea(areas ? areas[0] : null);
  };

  useEffect(() => {
    if (locations && locations.length) handleChangeLocation(locations[1]);
  }, [locations]);
 
  const Setting = (
    <LocationSetting
      returnPreLayout={() => setShowSetting(false)}
      location={currentLocation}
      onChange={() => loadLocations()}
    />
  );
  const NewScreenLayout = (
    <ScanQR
      returnPreLayout={() => setShowNewScreen(false)}
      currentArea={currentArea}
      currentLocation={currentLocation}
    />
  );
  const ScreenDetailsLayout = (
    <ScreenDetails
      returnPreLayout={() => setSelectScreen(false)}
      locationData={currentLocation}
      deleteScreen={() => {}}
      screenData={selectedScreen}
    />
  );

  return (
    <>
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
              <Dropdown>
                <Dropdown.Toggle id="dropdown-basic">
                  {currentLocation?.name || "Select Location"}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  {locations?.map((location) => (
                    <Dropdown.Item
                      key={location.name}
                      onClick={() => handleChangeLocation(location)}
                    >
                      {location.name}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
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
                currentArea={currentArea}
                changeCurrentArea={(area) => {
                  console.log("change current area", area);
                  setCurrentArea(area);
                }}
                showSetting={() => {
                  setShowSetting(!showSetting);
                }}
              />
            }
          >
          </AdvertiserContent>
          {currentArea && (
            <AdvertiserScreenItems
              id={currentArea?.id}
              areaName={currentArea?.name}
              selectScreen={(screen) => setSelectScreen(screen)}
            />
          )}
        </>
      )}
    </>
  );
}
