import { AdButton } from "../../../../components/button";
import AdCard, { CardDragItem, CardInput } from "../../../../components/card";
import Divider from "../../../../components/divider";
import { AdIcon } from "../../../../components/icon";
import { AdsliveH4 } from "../../../../components/typography";
import SubLayout from "../../../sub-layout";
import styles from "./styles.module.scss";
import dynamic from "next/dynamic";

const QrScan = dynamic(() => import("react-qr-reader"), { ssr: false });

export default function ScanQR({ returnPreLayout, locationData }) {
  {
    console.log({ locationData });
  }
  const addArea = (area) => {};
  const handleScan = (data) => {
    if (data) {
      this.setState({
        result: data,
      });
    }
  };
  const handleError = (err) => {
    console.error(err);
  };
  return (
    <SubLayout
      header={
        <>
          <AdIcon name="X in a Circle" onClick={returnPreLayout} />
          <div className={styles.title}>
            <AdsliveH4>Scan QR code to add</AdsliveH4>
          </div>
        </>
      }
      content={
        <>
          <div className={styles.scanner}>
            <QrScan />
          </div>
          {/* <div className="mt-4">
            <AdButton
              dash
              icon={<AdIcon name="in-a-circle" />}
              title="ADD LOCATION"
              style={{ padding: "20px" }}
              onClick={addArea}
            />
          </div> */}
        </>
      }
    />
  );
}
