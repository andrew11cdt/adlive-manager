import ADSLIVEButton from "../../../components/button";
import AdvertiserStoreActions from "../../../stores/advertiser-store/advertiser-store.actions";
import SubLayout from "../../sub-layout";
import styles from "./styles.module.scss";

export default function AdvertiserProfile() {
  return (
    <>
      <SubLayout
        header={<span>Profile</span>}
        content={
          <ADSLIVEButton
            onClick={() => {
              AdvertiserStoreActions.signOut();
            }}
          >
            Sign Out
          </ADSLIVEButton>
        }
      ></SubLayout>
    </>
  );
}
