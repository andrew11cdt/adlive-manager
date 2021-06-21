import { AdIcon } from "../../../../components/icon";
import { AdsliveH4 } from "../../../../components/typography";
import SubLayout from "../../../sub-layout";
import styles from "./styles.module.scss";
import { Button, Row } from "react-bootstrap";
import { useState } from "react";
import ScreenDetails from "../screen-details";
import { Toaster } from "../../../../components/toaster";

// import QrReader from "react-qr-reader"
import dynamic from "next/dynamic";
import AdvertiserApiClient from "../../../../api-clients/advertiser.api-client";
import AdsliveLoading, {
  ADSLIVE_LOADING_SIZE,
} from "../../../../components/loading";
const QrReader: any = dynamic(() => import("react-qr-reader"), { ssr: false });

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
  const [success, setSuccess] = useState(null);
  const [isLoading, setLoading] = useState(null);

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
    const res: any = await AdvertiserApiClient.createScreen(
      currentArea.id,
      data
    );
    setLoading(false);
    if (res?.data) {
      setSuccess("Uploaded new screen successfully!");
    }
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
              deleteScreen={() => {}}
              screenData={result}
            />
          )}
        </>
      ) : (
        <SubLayout
          header={
            <>
              <AdIcon name="x-in-a-circle" onClick={returnPreLayout} />
              <div className={styles.title}>
                <AdsliveH4>Scan QR code to add</AdsliveH4>
              </div>
            </>
          }
          content={
            <>
              <div className={styles.scanner}>
                {/* QR */}
                <QrReader
                  delay={300}
                  onError={handleError}
                  onScan={handleScan}
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
            </>
          }
        />
      )}
    </>
  );
}
