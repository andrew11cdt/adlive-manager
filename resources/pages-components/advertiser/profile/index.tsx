import ADSLIVEButton from "../../../components/button";
import AdvertiserStoreActions from "../../../stores/advertiser-store/advertiser-store.actions";
import styles from "./styles.module.scss";

export default function AdvertiserProfile() {
  return (
    <ADSLIVEButton
      onClick={() => {
        AdvertiserStoreActions.signOut();
      }}
    >
      Sign Out
    </ADSLIVEButton>
  );
}
