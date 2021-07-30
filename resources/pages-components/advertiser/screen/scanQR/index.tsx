import { AdIcon } from "../../../../components/icon";
import { AdsliveH4, MutedText } from "../../../../components/typography";
import SubLayout from "../../../sub-layout";
import styles from "./styles.module.scss";
import { Button, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import ScreenDetails from "../screen-details";
import { Toaster } from "../../../../components/toaster";

// import QrReader from "react-qr-reader"
import dynamic from "next/dynamic";
import AdsliveLoading, {
  ADSLIVE_LOADING_SIZE,
} from "../../../../components/loading";
import { useDispatch } from "react-redux";
import { createScreenAsync } from "../screenSlice";
import { getCampaignsAsync } from "../../campaign/campaignSlice";
let QrReader: any = dynamic(() => import("react-qr-reader"), { ssr: false });

interface QR_DATA {
  appVersion: string;
  deviceCode: string;
  deviceIp: string;
  deviceName: string;
  deviceOS: string;
  deviceType: string;
}
export default function ScanQR({
  returnPreLayout,
  currentArea,
  currentLocation,
}) {

  const [result, setResult] = useState<QR_DATA>(null);
  const [error, setError] = useState(null);
  const [permissionErr, setCameraPermissionErr] = useState(null);
  const [success, setSuccess] = useState(null);
  const [isLoading, setLoading] = useState(null);
  const [cancelScanner, setCancelScanner] = useState(null);
  const dispatch = useDispatch()
  const checkPermission = () => {
    if (navigator && navigator.getUserMedia)
      navigator?.getUserMedia({ video: true }, (success) => {
        setCameraPermissionErr(false)
      }, (error) => {
        console.log(error);
        setError('Please check your Camera permission!')
        setCameraPermissionErr(true)
      })
  }
  useEffect(() => {
    checkPermission()
  }, [])
  const sendCode = () => null;
  const handleScan = (data) => {
    if (!data) return;
    try {
      const jsonData = JSON.parse(data);
      const res = {
        deviceCode: jsonData.deviceCode,
        deviceType: jsonData.deviceType,
        deviceName: jsonData.deviceName,
        deviceIp: jsonData.deviceIp,
        deviceOS: jsonData.deviceOS,
        appVersion: jsonData.appVersion,
      };
      if (!res.deviceCode) setError("Wrong QR code!");
      setResult(res);
      handleScanNewScreen(res);
    } catch (error) {
      setError("Can not read this QR code");
    }
  };
  const handleError = (err) => {
    console.error(err);
    setError(err);
  };
  const handleScanNewScreen = async (data) => {
    setLoading(true);
    const res: any = await dispatch(createScreenAsync({ areaId: currentArea.id, data }))
    if (res?.payload) {
      dispatch(getCampaignsAsync())
      setSuccess("Uploaded new screen successfully!");
    }
    if (res?.error) setError(`Scan QR Failed! ${res.error.message || 'Sorry something went wrong!'}`);
    setLoading(false);
  };
  const ManualInput = (
    <div className={styles.inputContainer}>
      <div style={{ position: "relative" }}>
        <input
          type="text"
          placeholder="Input here"
          className={styles.inputCode}
        />
        {/* <AdIcon name="code" className={styles.codeIcon} /> */}
      </div>
      <Button
        variant="outline-primary"
        className={styles.button}
        onClick={sendCode}
      >
        SEND
      </Button>
    </div>
  );
  return (
    <>
      <Toaster type="error" handleSetToast={setError} message={error} />
      <Toaster type="success" handleSetToast={setSuccess} message={success} />
      {result ? (
        <>
          {isLoading ? (
            <AdsliveLoading size={ADSLIVE_LOADING_SIZE.EXTRA_SMALL} />
          ) : (
            <ScreenDetails
              isNew
              returnPreLayout={returnPreLayout}
              locationData={currentLocation}
              deleteScreen={() => { }}
              screenData={result}
            />
          )}
        </>
      ) : (
        <SubLayout
          header={
            <>
              <AdIcon name="x-in-a-circle" onClick={() => {
                setCancelScanner(true)
                returnPreLayout()
              }} />
              <div className={styles.title}>
                <AdsliveH4>Scan QR code to add</AdsliveH4>
              </div>
            </>
          }
          content={
            <>
              <div className={styles.scanner}>
                {/* {!cancelScanner && permissionErr === false && */}
                  <QrReader
                    delay={500}
                    // legacyMode={true}
                    onError={handleError}
                    onScan={handleScan}
                    style={{ width: "100%", height: "100%" }}
                  />
                {/* } */}
              </div>
              {permissionErr === true &&
                <div className={styles.noPermission}>
                  <MutedText> No Camera Permission Found! </MutedText>
                </div>
              }
            </>
          }
        />
      )}
    </>
  );
}