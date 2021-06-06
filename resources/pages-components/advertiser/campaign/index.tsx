import { useEffect, useMemo, useState } from "react";
import AdsliveIcon, {
  AdIcon,
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
import AdvertiserAreaTabs from "../screen/area-tabs";
import CampaignDetails from "./campaign-details";
import CampaignItem from "./campaign-item";
import styles from "./styles.module.scss";

export default function AdvertiserCampaign() {
  const { locations, campaigns } = useAdvertiserStore();
  const [currentLocationId, setCurrentLocationId] = useState(null);
  const [currentAreaId, setCurrentAreaId] = useState(null);
  const [showFilter, setShowFilter] = useState(false);
  const [showNewCampaign, setShowNewCampaign] = useState(false);
  const [selectedCampaign, setSelectCampaign] = useState(null);

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
  const CampaignDetailsLayout = (
    <CampaignDetails
      returnPreLayout={() => setSelectCampaign(false)}
      campaign={selectedCampaign}
    />
  );
  const NewCampaignLayout = (
    <></>
  );
  const FilterLayout = (
    <></>
  );
  useEffect(() => {
    
    setCurrentAreaId((currentLocation?.areas || [])[0]?.id);
  }, [currentLocation]);
  return (
    <div style={{ height: "100%" }}>
      {selectedCampaign ? (
        CampaignDetailsLayout
      ) : showNewCampaign ? (
        NewCampaignLayout
      ) : showFilter ? (
        FilterLayout
      ) : (
        <>
          <AdvertiserContent
            headerTitle="Campaigns"
            headerRightContent={
              <div className={styles.rightControls}>
                <AdsliveIcon
                  className={styles.searchIcon}
                  variant={ADSLIVE_ICON_VARIANT.SEARCH}
                  type={ADSLIVE_ICON_TYPE.REGULAR}
                  color={ADSLIVE_ICON_COLOR.NORMAL}
                />
                <AdIcon name="filters-vertical" onClick={() => setShowFilter(true)}/>
                <AdsliveIcon
                  className={styles.addIcon}
                  variant={ADSLIVE_ICON_VARIANT.CIRCLE_PLUS}
                  type={ADSLIVE_ICON_TYPE.BOLD}
                  color={ADSLIVE_ICON_COLOR.PRIMARY}
                  size={ADSLIVE_ICON_SIZE.SMALL}
                  onClick={() => {
                    setShowNewCampaign(true);
                  }}
                />
              </div>
            }
          >
            {locations?.loading && (
              <AdsliveLoading size={ADSLIVE_LOADING_SIZE.EXTRA_SMALL} />
            )}
          </AdvertiserContent>
          {campaigns?.map((campaign, i) => (
            <div key={i} onClick={()=> setSelectCampaign(campaign)}>
              <CampaignItem
                campaign={campaign}
              />
            </div>
          ))}
        </>
      )}
    </div>
  );
}
