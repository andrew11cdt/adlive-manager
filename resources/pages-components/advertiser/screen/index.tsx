import { useEffect, useState } from "react";
import AdsliveIcon, {
  ADSLIVE_ICON_COLOR,
  ADSLIVE_ICON_SIZE,
  ADSLIVE_ICON_TYPE,
  ADSLIVE_ICON_VARIANT,
} from "../../../components/icon";

import useAdvertiserStore from "../../../stores/advertiser-store/advertiser-store.hook";
import AdvertiserContent from "../others/advertiser-content";
import AdvertiserAreaTabs from "./area-tabs";
import LocationSetting from "./location-setting";
import ScreenDetails from "./screen-details";
import ScanQR from "./scanQR";
import AdvertiserScreenItems from "./screen-items";
import styles from "./styles.module.scss";
import { Dropdown } from "react-bootstrap";
import AdsliveLoading from "../../../components/loading";
import { useSelector } from "react-redux";
import { selectLocations } from "./locationSlice";

export default function AdvertiserScreen() {
  const locations = useSelector(selectLocations)
  const locationLoading = useSelector(state => state['locations']['status'] === 'loading')
  const [currentLocation, setCurrentLocation] = useState(null);
  const [currentArea, setCurrentArea] = useState(null);
  const [showSetting, setShowSetting] = useState(false);
  const [showNewScreen, setShowNewScreen] = useState(false);
  const [selectedScreen, setSelectScreen] = useState(null);
  // const [isRefresh, setIsRefresh] = useState(null);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChangeLocation = (location) => {
    if (!location) return;
      setCurrentLocation(location);
      const area = currentArea || location.areas ? location.areas[0] : null
      setCurrentArea(area);
  };
  // async function handleRefresh() {
  //   setIsRefresh(true)
  //   const res = await loadLocations()
  //   if (res) setIsRefresh(false)
  //   if (res.error) setError(res.error.data?.error?.message || 'An error happenned')
  // }

  useEffect(() => {
    if (!locations) return
      const newCurrentLocation = locations.find(e => e['id'] === currentLocation?.id)
      if (newCurrentLocation || locations.length) handleChangeLocation(newCurrentLocation || locations[0]);
  }, [locations]);

  const Setting = (
    <LocationSetting
      returnPreLayout={(changed) => {
        setShowSetting(false)
      }}
      locationId={currentLocation?.id}
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
      returnPreLayout={(changed) => {
        setSelectScreen(false)
      }}
      locationData={currentLocation}
      screenData={selectedScreen}
    />
  );

  return (
    <>
      {locationLoading && <AdsliveLoading />}
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
                      key={location['name']}
                      onClick={() => handleChangeLocation(location)}
                    >
                      {location['name']}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            }
            headerRightContent={
              <div className={styles.rightControls}>
                {/* <span style={{ marginRight: '16px' }} >
                  <RefreshserIcon isLoading={isRefresh} onClick={handleRefresh} />
                </span> */}
                {/* <AdsliveIcon
                  className={styles.searchIcon}
                  variant={ADSLIVE_ICON_VARIANT.SEARCH}
                  type={ADSLIVE_ICON_TYPE.REGULAR}
                  color={ADSLIVE_ICON_COLOR.NORMAL}
                /> */}
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
              isLoading={locationLoading}
              areaName={currentArea?.name}
              selectScreen={(screen) => setSelectScreen(screen)}
            />
          )}
        </>
      )}
    </>
  );
}
