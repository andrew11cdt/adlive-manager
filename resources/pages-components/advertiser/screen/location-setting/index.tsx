import { useEffect, useState } from "react";
import { Button, Container, Modal, Row } from "react-bootstrap";
import AdvertiserApiClient from "../../../../api-clients/advertiser.api-client";
import { AdButton } from "../../../../components/button";
import AdCard, {
  CardDragItem,
  CardDragWrapper,
  CardInput,
} from "../../../../components/card";
import Divider from "../../../../components/divider";
import AdsliveIcon, {
  AdIcon,
  ADSLIVE_ICON_COLOR,
  ADSLIVE_ICON_SIZE,
  ADSLIVE_ICON_TYPE,
  ADSLIVE_ICON_VARIANT,
} from "../../../../components/icon";
import { Toaster } from "../../../../components/toaster";
import { AdsliveH4 } from "../../../../components/typography";
import { parseTitle } from "../../../../utils/common.util";
import SubLayout from "../../../sub-layout";
import styles from "./styles.module.scss";

export default function LocationSetting({ returnPreLayout, location, onChange }) {
  const addArea = (area) => {};
  const handleDeleteArea = (area) => {};
  const handleChangeOrder = (area) => {};
  const [locationData, setLocationData] = useState(location);
  const [showNewArea, setShowNewArea] = useState(null);
  const [newArea, setNewArea] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [successMsg, setSuccessMsg] = useState(null);
  const handleCloseModal = () => setShowNewArea(false);
  const handleCreateArea = async () => {
    setShowNewArea(false);
    const res: any = await AdvertiserApiClient.createArea(
      locationData?.id,
      newArea
    );
    if (res?.data) {
      onChange()
    }
    if (res['error']) {
      setErrorMsg(res['error']['data']['error']['message'])
    }
    if (res?.data) {
      setSuccessMsg('Updated Schedule')
    }
  };
  useEffect(() => {
    setLocationData(location)
    console.log(locationData);
    
  }, [location])
  return (
    <>
      <Toaster type="error" handleSetToast={setErrorMsg} message={errorMsg} />
      <Toaster type="success" handleSetToast={setSuccessMsg} message={successMsg}/>
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
              header={<div>{locationData?.name}</div>}
              body={
                <>
                  <CardInput
                    title="address"
                    value={locationData?.address?.description}
                    onInputChange={(event) => {
                      console.log(event);
                    }}
                  />
                  {locationData && (
                    <CardDragWrapper
                      items={locationData?.areas.map((area) => ({
                        id: area.recId.toString(),
                        content: (
                          <div key={area.id}>
                            <CardDragItem
                              onDelete={(event) => {
                                event.stopPropagation();
                                handleDeleteArea(area.id);
                              }}
                            >
                              <span>{parseTitle(area?.name)}</span>
                            </CardDragItem>
                            <Divider />
                          </div>
                        ),
                      }))}
                      onChange={(change) => handleChangeOrder(change)}
                    />
                  )}
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
                    onClick={() => setShowNewArea(true)}
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
      {
        <Modal
          className={styles.createCampainModal}
          show={showNewArea}
          onHide={handleCloseModal}
        >
          <Modal.Header closeButton>
            <Modal.Title className={styles.title}>Create New Area</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <CardInput
              title="Name"
              value={newArea?.name}
              onInputChange={(e) =>
                setNewArea({
                  name: e.target.value,
                  order: locationData?.areas?.length || 0,
                })
              }
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
            <Button variant="primary" onClick={handleCreateArea}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      }
    </>
  );
}
