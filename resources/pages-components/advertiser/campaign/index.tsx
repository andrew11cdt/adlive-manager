import { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import AdvertiserApiClient from "../../../api-clients/advertiser.api-client";
import AdCard, { CardInput } from "../../../components/card";
import { AdIcon } from "../../../components/icon";
import AdsliveLoading, {
  ADSLIVE_LOADING_SIZE,
} from "../../../components/loading";
import NoData from "../../../components/no-data";
import useAdvertiserStore from "../../../stores/advertiser-store/advertiser-store.hook";
import AdvertiserContent from "../others/advertiser-content";
import { addAdset, getCampaignAdsetsAsync } from "./adsetSlice";
import CampaignDetails from "./campaign-details";
import CampaignItem from "./campaign-item";
import { createCampaignAsync, getCampaignsAsync, selectCampaignStt, selectSortedCampaignByUpdateDate } from "./campaignSlice";
import styles from "./styles.module.scss";

export default function AdvertiserCampaign() {
  const campaigns = useSelector(selectSortedCampaignByUpdateDate)
  const status = useSelector(selectCampaignStt)
  const dispatch = useDispatch()
  const [showFilter, setShowFilter] = useState(false);
  const [showNewCampaign, setShowNewCampaign] = useState(false);
  const [selectedCampaign, setSelectCampaign] = useState(null);
  const [newCampaign, setNewCampaign] = useState(null);

  function CampaignDetailsLayout() {
    return (
      <CampaignDetails
        returnPreLayout={() => {
          setSelectCampaign(false);
        }}
        campaignId={selectedCampaign.id}
      />
    )
  }
  const handleCloseModal = () => {
    setShowNewCampaign(false);
  };
  const handleCreateCampaign = async () => {
    setShowNewCampaign(false);
    const res = await dispatch(createCampaignAsync(newCampaign))
    const id = res?.payload?.id
    if (id) {
      dispatch(getCampaignAdsetsAsync(id))
    }
  };

  const FilterLayout = <></>;
  return (
    <>
      {selectedCampaign ? (
        <CampaignDetailsLayout />
      ) : showFilter ? (
        FilterLayout
      ) : (
        <>
          <AdvertiserContent
            headerTitle="Campaigns"
            headerRightContent={
              <div className={styles.rightControls}>
                {/* <AdIcon name="search" onClick={() => null} />
                <AdIcon
                  name="filters-vertical"
                  onClick={() => setShowFilter(true)}
                /> */}
                <AdIcon
                  name="circle-bold"
                  onClick={() => setShowNewCampaign(true)}
                />
              </div>
            }
          />
          {status === 'loading' && (
            <AdsliveLoading size={ADSLIVE_LOADING_SIZE.EXTRA_SMALL} />
          )}
          {campaigns?.map((campaign, i) => (
            <div key={i} onClick={() => setSelectCampaign(campaign)}>
              <CampaignItem campaign={campaign} />
            </div>
          ))}
          {status === 'succeeded' && campaigns?.length == 0 && <NoData />}
        </>
      )}
      {
        <Modal
          className={styles.createCampainModal}
          show={showNewCampaign}
          onHide={handleCloseModal}
        >
          <Modal.Header closeButton>
            <Modal.Title className={styles.title}>
              Create New Campaign
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <CardInput
              title="Name"
              value={newCampaign?.name}
              onInputChange={(e) => setNewCampaign({ name: e.target.value })}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
            <Button variant="primary" onClick={handleCreateCampaign}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      }
    </>
  );
}
