import { useEffect, useState } from "react";
import { Button, Container, Modal, Row } from "react-bootstrap";

import AdvertiserApiClient from "../../../../api-clients/advertiser.api-client";
import { AdButton } from "../../../../components/button";
import AdCard, {
  CardDragItem,
  CardDragWrapper,
  CardInput,
} from "../../../../components/card";
import ConfirmModal from "../../../../components/confirmModal";
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
import useAdvertiserStore from "../../../../stores/advertiser-store/advertiser-store.hook";
import { parseTitle } from "../../../../utils/common.util";
import SubLayout from "../../../sub-layout";
import styles from "./styles.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { createAreaAsync } from "../screenSlice";
import { getLocationAsync, selectLocationById, selectLocations } from "../locationSlice";

export default function LocationSetting({ returnPreLayout, locationId }) {
  const addArea = (area) => { };
  const locations = useSelector(selectLocations)
  const location:any = useSelector((state) => selectLocationById(state, locationId))
  const dispatch = useDispatch()
  const [name, setName] = useState(location?.name);
  const [address, setAddress] = useState(location?.address);
  const [showNewArea, setShowNewArea] = useState(null);
  const [newArea, setNewArea] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [successMsg, setSuccessMsg] = useState(null);
  const [deleteAreaId, setDeleteAreaId] = useState(null);
  const [loadingDragItems, setLoadingDragItems] = useState({});
  const [dataChanged, setDataChanged] = useState(null)
  const [loadingData, setLoadingData] = useState({})
  const handleCloseModal = () => setShowNewArea(false);
  const handleCreateArea = async () => {
    setShowNewArea(false);
    setDataChanged(true)
    const res: any = await dispatch(createAreaAsync({locationId: location?.id, data: newArea}))
    if (res?.payload) {
      console.log(res);
      dispatch(getLocationAsync())
      setSuccessMsg('Created new Area')
    }
    // if (res && res['error']) {
    //   setErrorMsg(res['error']['data']['error']['message'])
    // }
  };
  async function handleDeleteArea(id) {
    handleLoadDragItem(id, true)
    setDataChanged(true)
    const res: any = await AdvertiserApiClient.deleteArea(id)
    if (res?.data) {
      dispatch(getLocationAsync())
    }
  };
  function handleLoadDragItem(id, isLoading: boolean) {
    return setLoadingDragItems({ ...loadingDragItems, [id]: isLoading })
  }
  async function handleChangeOrder(change) {
    if (!change?.length) return
    const newAreas = change.map(e => location.areas.find(area => area.recId === e.id))
    if (JSON.stringify(newAreas) !== JSON.stringify(location.areas)) {
      const loadAll = newAreas.reduce((res, cur) => res = { ...res, [cur.id]: true }, {})
      
      setLoadingDragItems(loadAll)
      newAreas.forEach((area, i) => {
        const id = area?.id
        if (id) {
          AdvertiserApiClient.updateArea(id, { order: i + 1 }).then(res => {
            if (newAreas.length - 1 === i) {
              dispatch(getLocationAsync())
            }
          })
        }
      })
      setDataChanged(true)
    }
  };
  async function updateLocation(key, isChange) {
    if (!isChange) return
    setLoadingData({...loadingData, [key]: true})
    const newData = {...location, ...{name, address}}
    
    if (address?.length == 0) delete newData.address
    const res: any = await AdvertiserApiClient.updateLocation(location.id, newData)
    if (res?.data) {
      setSuccessMsg("Updated!")
      dispatch(getLocationAsync())
      setDataChanged(true)
    }
    if (res.error) {
      setErrorMsg(res.error.data?.message || 'Failed')
    }
  }
  useEffect(() => {
    if (deleteAreaId && location.areas.includes(e => e.id === deleteAreaId)) {
      setDeleteAreaId(null);
    }
    setLoadingDragItems({})
    setLoadingData({})
  }, [location, locations])
  return (
    <>
      <ConfirmModal
        title="Delete Media"
        onExecute={() => {
          handleDeleteArea(deleteAreaId);
        }}
        show={!!deleteAreaId}
        setShow={setDeleteAreaId}
      />
      <Toaster type="error" handleSetToast={setErrorMsg} message={errorMsg} />
      <Toaster type="success" handleSetToast={setSuccessMsg} message={successMsg} />
      <SubLayout
        header={
          <>
            <AdsliveIcon
              variant={ADSLIVE_ICON_VARIANT.FULL_LEFT_ARROW}
              className={styles.icon}
              type={ADSLIVE_ICON_TYPE.BOLD}
              size={ADSLIVE_ICON_SIZE.SMALL}
              onClick={() => returnPreLayout(dataChanged)}
            />
            <AdsliveH4>Location Setting</AdsliveH4>
          </>
        }
        content={
          <div style={{ padding: "16px" }}>
            <AdCard
              header={<div>{location?.name}</div>}
              body={
                <>
                  <CardInput
                    title="name"
                    value={name}
                    isLoading={loadingData['name']}
                    defaultValue={location?.name}
                    onInputChange={(event) => setName(event.target.value)}
                    onFocusOut={(changed) => updateLocation('name', changed)}
                  />
                  <CardInput
                    title="address"
                    value={address}
                    isLoading={loadingData['address']}
                    defaultValue={location?.address}
                    onInputChange={(event) => setAddress(event.target.value)}
                    onFocusOut={(changed) => updateLocation('address', changed)}
                  />
                  {location && (
                    <CardDragWrapper
                      items={location?.areas?.map((area) => ({
                        id: area.recId.toString(),
                        content: (
                          <div key={area.id}>
                            <CardDragItem
                              isLoading={loadingDragItems[area.id]}
                              onDelete={(event) => {
                                event.stopPropagation();
                                setDeleteAreaId(area.id);
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
                  order: location?.areas?.length || 0,
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
